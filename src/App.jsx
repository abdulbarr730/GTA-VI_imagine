import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 20,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%" 
    })
    .to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(() =>{
    if(!showContent) return;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2.5,
      ease:"Expo.easeInOut",
      delay:-1,
    })
    gsap.to(".sky",{
      scale:1.2,
      rotate:0,
      duration:2.5,
      ease:"Expo.easeInOut",
      delay:-0.8,
    })
    gsap.to(".bg",{
      scale:1.05,
      rotate:0,
      duration:2.5,
      ease:"Expo.easeInOut",
      delay:-0.8,
    })
    gsap.to(".girlbg",{
      scale:0.43,
      bottom:0,
      rotate:0,
      duration:2.5,
      ease:"Expo.easeInOut",
      delay:-1,
    })
    gsap.to(".text",{
      scale:1,
      rotate:0,
      duration:3,
      ease:"Expo.easeInOut",
      delay:-1,
    })

    const main = document.querySelector('.main');

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth -0.5) *40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove *0.7}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove*1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full h-full bg-black rotate-[-10deg] scale-[1.5]'>
          <div className='landing w-full h-screen bg-black relative overflow-hidden'>
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 '>
              <div className='logo flex gap-7'>
                <div className="lines flex flex-col gap-[5px]">
                  <div className=" lines w-15 h-1 bg-white"></div>
                  <div className=" lines w-8 h-1 bg-white"></div>
                  <div className=" lines w-5 h-1 bg-white"></div>
                </div>
                <h3 className='text-4xl text-white -mt-[10px] leading-none'>ROCKSTAR</h3>
              </div>
            </div>
            
            <div className='imagesdiv relative overflow-hidden w-full h-[100%]'>
              <img className='sky absolute scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-screen object-cover' src="./sky.png" alt="" />
              <img className='bg absolute scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-screen object-cover' src="./bg.png" alt="" />
              <div 
              className="text absolute text-white flex flex-col gap-3 top-20 left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]">
                <h1 className='text-[10rem] leading-none -ml-40'>Grand</h1>
                <h1 className='text-[10rem] leading-none ml-20'>Theft</h1>
                <h1 className='text-[10rem] leading-none -ml-40'>Auto</h1>
              </div>
              <img className='girlbg absolute bottom-[150%] top-0 left-0 -translate-x-1/2 -translate-y-1/2 scale-[3] rotate-[-20deg] overflow-hidden' src="./girlbg.png" alt="" />
              
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full y-10 py-15 bg-gradient-to-t from-black to-transparent">
              <div className='flex gap-4 items-center'>
                <i className=" text-4xl ri-arrow-down-long-line"></i>
                <h3 className='text-2xl font-[Helvica_Now_Display]'>Scroll Down</h3>
              </div>
              <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[55px]' src="./ps5.png" alt="" />
            </div>
          </div>
          <div className='landed w-full h-screen flex items-center justify-center px-10 bg-black overflow-hidden'>
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img className='absolute scale-[.8] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
              </div>
              <div className="relem w-[40%] py-10">
                <h1 className='text-6xl'>Still Running,</h1>
                <h1 className='text-6xl'>Not hunting,</h1>
                <p className=' mt-8 text-xl font-[Helvetica_Now_display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum numquam suscipit nemo porro assumenda minima corporis obcaecati possimus excepturi eius eos, doloribus nobis ratione natus nihil placeat voluptatem molestiae!
                </p>
                <p className=' mt-2 text-xl font-[Helvetica_Now_display]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, fuga perspiciatis! Veritatis, maiores.</p>
                <p className=' mt-8 text-xl font-[Helvetica_Now_display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum numquam suscipit nemo porro assumenda minima corporis obcaecati possimus excepturi eius eos, doloribus nobis ratione natus nihil placeat voluptatem molestiae!
                </p>
                <p className=' mt-2 text-xl font-[Helvetica_Now_display]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, fuga perspiciatis! Veritatis, maiores.</p>
                <button className='bg-yellow-500 px-7 py-7 mt-5 text-black text-3xl'>Download Now</button>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  )
}

export default App