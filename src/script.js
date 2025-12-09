import * as THREE from 'three';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222831)
const canvas = document.querySelector('#webgl');

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);
camera.position.set(0,0,5);

const renderer = new THREE.WebGLRenderer({
  canvas:canvas,
  antialias:true,
  alpha:true
});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    ScrollTrigger.refresh();
  }, 250);
});
//--------------------------- JS ------------------------------
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
}

function getImageParticles(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  const validPositions = [];

  const scale = 3;     
  const xOffset = -0.5; 
  const yOffset = 0; 
  const density = 6;

  for (let y = 0; y < canvas.height; y += density) {
    for (let x = 0; x < canvas.width; x += density) {
      const index = (y * canvas.width + x) * 4;
      const alpha = data[index + 3];
      
      if (alpha > 0) {
     
        const pX = (x / canvas.width) * scale - (scale / 2) + xOffset;
        const pY = -((y / canvas.height) * scale - (scale / 2)) + yOffset;

        validPositions.push({ x: pX + 3, y: pY, z: 0 });
      }
    }
  }
  return validPositions;
}
const animationObj = {
  sphereProgress:0,
  phoneProgress:0
};

//----------------------------Three js-------------------------
//init gsap scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 2.5,
  effects: true,
  normalizeScroll: true,
  ignoreMobileResize: true,
  smoothTouch: 0.1
});
//loadimage
loadImage('phone.png').then((phoneImg) => {
//-----Particels
const pGeo = new THREE.BufferGeometry();
const pCount = 2000;
const pColor = 0x00ADB5;
const pPosition = new Float32Array(pCount * 3);
const rawPhonePoints = getImageParticles(phoneImg)


const spherePositions = [];
const initPositions = [];
const phonePositions = [];

for(let i = 0 ; i < pCount ; i++){
  const i3 = i * 3;

  //Sphere Position
  const r = 2;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos((Math.random() * 2 ) -1 );
  const sx = r * Math.sin(phi) * Math.cos(theta); // x
  const sy = r * Math.sin(phi) * Math.sin(theta); // y
  const sz  = r * Math.cos(phi); // z 
  spherePositions.push(sx,sy,sz);

  //init Position
  const ix = (Math.random() - 0.5) * 15;
  const iy = (Math.random() - 0.5) * 15;
  const iz = (Math.random() - 0.5) * 15;
  initPositions.push(ix,iy,iz);

  //Phone Position
  const imgPoint = rawPhonePoints[i % rawPhonePoints.length];
  if(imgPoint){
    phonePositions.push(imgPoint.x,imgPoint.y,imgPoint.z);
  }else{
    phonePositions.push(3,0,0);
  }

  //Current (Start at Init)
  pPosition[i3] = ix;
  pPosition[i3 + 1] = iy;
  pPosition[i3 + 2] = iz;
}

pGeo.setAttribute('position',new THREE.BufferAttribute(pPosition,3));

const pMat = new THREE.PointsMaterial({
  size:0.03,
  sizeAttenuation:true,
  color:pColor
})

window.particels = new THREE.Points(pGeo,pMat);
scene.add(window.particels);


function updateGeo(){
  const positions = pGeo.attributes.position.array;

  for(let i = 0; i < pCount ; i++){
    const i3 = i * 3;

    // Sphere
    let currentX = initPositions[i3] + (spherePositions[i3] - initPositions[i3]) * animationObj.sphereProgress;
    let currentY = initPositions[i3+1] + (spherePositions[i3+1] - initPositions[i3+1]) * animationObj.sphereProgress;
    let currentZ = initPositions[i3+2] + (spherePositions[i3+2] - initPositions[i3+2]) * animationObj.sphereProgress;

    // Phone
    if(animationObj.phoneProgress > 0){
      currentX = currentX + (phonePositions[i3] - currentX) * animationObj.phoneProgress;
      currentY = currentY + (phonePositions[i3+1] - currentY) * animationObj.phoneProgress;
      currentZ = currentZ + (phonePositions[i3+2] - currentZ) * animationObj.phoneProgress;
    }
    positions[i3] = currentX;
    positions[i3+1] = currentY;
    positions[i3+2] = currentZ;
  }
    pGeo.attributes.position.needsUpdate = true;
}
//-----------------------Gsap + Three js-----------------------
window.morphToSphere = function(){
  gsap.to(animationObj,{
    sphereProgress:1,
    duration:2.5,
    ease:"power3.inOut",
    onUpdate:updateGeo
  })
}
//-----------------------------Gsap----------------------------
//Scroll Trigger
const targetColor = new THREE.Color(0xFF3333);
const particelsScale = 2.5;
const scrollTL = gsap.timeline({
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"bottom top",
    scrub:1,
    pin:true,
    anticipatePin:1,
    invalidateOnRefresh: true,
  }
});
scrollTL
 .to(window.particels.scale, {
      x: particelsScale, y: particelsScale, z: particelsScale,
      ease: "power1.inOut"
   }, 0)
  .to(pMat.color, {
      r: targetColor.r, g: targetColor.g, b: targetColor.b,
      ease: "none"
   }, 0)
  .to(animationObj, {
      sphereProgress: 0,
      onUpdate: updateGeo,
      ease: "none"
  }, 0.1);
//reveal text
const revealContainers = document.querySelectorAll(".reveal-container");
revealContainers.forEach((container)=>{
  const text = container.querySelector(".reveal-text");
  const black = container.querySelector(".reveal-black");

  const revealTL = gsap.timeline({
    scrollTrigger:{
      trigger:container,
      start:"top 80%",
      end:"bottom 25%",
      toggleActions:"play none none reverse"
    }
  });
  revealTL
  .fromTo(black,
    {width:"0%",left:"0%"},
    {width:"100%",duration:0.4,ease:"power2.inOut"})
  .set(text,{opacity:1})
  .to(black,{
    width:"0%",left:"100%",duration:0.4,ease:"power2.inOut"
  });
});

//Phone Time Line
const PhoneTL = gsap.timeline({
  scrollTrigger:{
    trigger:".conect",
    start:"top center",
    end :"bottom bottom",
    scrub:1,
  }
});
PhoneTL
.to(window.particels.position,{
  x: -2.2,
  duration:1.2,
  ease:"power2.inOut"
})
.to(window.particels.rotation,{
  y:-0.02,
  duration:1,
  ease:"power2.inOut",
},">")
.to(animationObj,{
  phoneProgress:1,
  onUpdate:updateGeo,
  ease:"power2.inOut",
  duration:1.5
},">")
.to(".split",{
  opacity:1,
  duration:1,
  ease:"power1.inOut"
})

 ScrollTrigger.refresh();
}).catch(err => console.error("Image Load Error:", err));
// Svg Logo
const paths = document.querySelectorAll('.loader svg path');
paths.forEach((path)=>{
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
});
const loaderTL = gsap.timeline();
loaderTL.to(paths,{
  strokeDashoffset:0,
  duration:2,
  ease:"power2.inOut",
  stagger:0.1
}).to(paths,{
  fillOpacity:1,
  stroke:"transparent",
  duration:1,
  ease:"power2.in"
},"-=0.5").to(".loader",{
  opacity:0,
  duration:1,
  display:"none",
  ease:"power2.inOut",
  onComplete: () => {
    setTimeout(()=>{
      if(window.morphToSphere) window.morphToSphere();
      animateHeroText();
    },80)
  }
},"+=0.5")
//Hero text
function animateHeroText(){
  gsap.fromTo(".hero h1 , .hero span",{
    scale:0.5,
    y:50,
    filter:"blur(10px)"
  },{
    scale:1,
    opacity:1,
    y:0,
    filter:"blur(0px)",
    duration:2,
    ease:"power3.out",
    delay:1.8,
    stagger:0.2
  })
}

//-------------------------------------------------------------
const clock = new THREE.Clock();
function animate(){
  requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();

  //animate rotation
 if (animationObj.phoneProgress < 0.1 && window.particels) { 
    window.particels.rotation.y += 0.002; 
}

  renderer.render(scene,camera);
}
animate()
