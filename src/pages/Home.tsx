"use client"; 
import { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import bigimg from "../assets/purple-planet.png";
import smallimg from "../assets/small_img.png";
import smallimg1 from "../assets/smaill-img1.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const container = useRef();
  const leftImg = useRef();
  const centerImg = useRef();
  const rightImg = useRef();

  useEffect(() => {
    // Disable auto-refresh to prevent auto scrolling
    ScrollTrigger.config({ 
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true 
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useGSAP(() => {
    // Clear existing triggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Create stable animation without auto-scroll
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top center", // More conservative start point
        end: "bottom center", // More conservative end point
        scrub: 1,
        pin: false, // Disable pin to prevent auto-scroll
        anticipatePin: 0, // Disable anticipate pin
        fastScrollEnd: true, // Handle fast scrolling
        preventOverlaps: true, // Prevent animation conflicts
        onUpdate: (self) => {
          // Manual control over scroll position
          if (self.progress > 0.95) {
            // Prevent over-scroll at end
            self.progress = 0.95;
          }
        },
        onToggle: (self) => {
          if (self.isActive) {
            // Disable smooth scrolling during animation
            document.documentElement.style.scrollBehavior = 'auto';
          } else {
            // Re-enable smooth scrolling
            document.documentElement.style.scrollBehavior = 'smooth';
          }
        }
      }
    });

    // Smooth position animations
    tl.to(rightImg.current, {
      x: -400,
      scale: 1.5,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(centerImg.current, {
      x: -350,
      scale: 0.8,
      duration: 1,
      ease: "power2.inOut"
    }, 0)
    .to(leftImg.current, {
      x: 700,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut"
    }, 0);

  }, { scope: container });

  return (
    <div className="main-wrapper">
      
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-b from-purple-900 to-blue-900 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold text-center">
          [translate:मैन्युअल स्क्रॉल करें<br/>एनिमेशन के लिए]
        </h1>
      </div>

      {/* Animation Section - No Auto Scroll */}
      <div 
        ref={container} 
        className="h-screen bg-black flex items-center justify-center relative"
        style={{ 
          scrollSnapAlign: 'none', // Disable scroll snap
          scrollBehavior: 'auto' // Disable smooth scroll
        }}
      >
        <div className="w-full flex justify-between items-center px-20">
          
          <div 
            ref={leftImg} 
            className="transform-gpu"
            style={{ willChange: 'transform' }}
          >
            <img 
              src={smallimg} 
              alt="left planet" 
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          
          <div 
            ref={centerImg} 
            className="transform-gpu"
            style={{ willChange: 'transform' }}
          >
            <img 
              src={bigimg} 
              alt="center planet" 
              className="w-48 h-48 object-cover rounded-full"
            />
          </div>
          
          <div 
            ref={rightImg} 
            className="transform-gpu"
            style={{ willChange: 'transform' }}
          >
            <img 
              src={smallimg1} 
              alt="right planet" 
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          
        </div>
      </div>

      {/* End Section */}
      <div className="h-screen bg-gradient-to-t from-green-900 to-blue-900 flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold text-center">
          [translate:एनिमेशन पूर्ण<br/>अब normal scroll]
        </h2>
      </div>
      
    </div>
  );
}
