import React, { useRef, useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { ChevronRight } from 'lucide-react';

const words = ["Finance.", "Sales.", "Legal.", "Engineering.", "Marketing."];

const carouselTexts = [
  "What if all your data could talk to each other? ALVIO connects your tools, documents, and systems so AI can actually help you work—not just chat.",
  "No more switching between apps. No more copy-pasting. ALVIO learns from your entire organization and helps everyone find answers, build faster, and get work done.",
  "Built for real teams and real work. Whether you're a startup or an enterprise, ALVIO makes AI accessible, practical, and powerful for everyone."
];

export const Hero: React.FC = () => {
  // --- Typewriter State ---
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  // --- Carousel State ---
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselTexts.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // --- Orb Interaction State ---
  const [orbTilt, setOrbTilt] = useState({ x: 0, y: 0 });
  const orbRef = useRef<HTMLDivElement>(null);

  const handleOrbMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!orbRef.current) return;
    const rect = orbRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setOrbTilt({ x: y * -15, y: x * 15 });
  };
  
  const handleOrbLeave = () => {
      setOrbTilt({ x: 0, y: 0 });
  };

  return (
    // Reduced pt to pt-24/32 to tighten vertical alignment
    <section className="relative min-h-screen pt-24 lg:pt-32 overflow-hidden bg-white dark:bg-black flex items-center transition-colors duration-500">
      
      {/* --- BACKGROUND GRADIENTS (Ambient) --- */}
      <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-radial from-blue-100/40 via-purple-50/20 to-transparent dark:from-white/10 dark:via-[#1a0518] dark:to-transparent opacity-60 dark:opacity-40 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 dark:bg-[#050a1a] blur-[150px] opacity-60 dark:opacity-40 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 z-0 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="text-left order-2 lg:order-1 flex flex-col justify-center">
          
          <FadeIn delay={100}>
            {/* Pre-header */}
            <div className="mb-6 flex items-center gap-2">
                 <div className="h-[1px] w-8 bg-accent-orange/50"></div>
                 <span className="text-xs font-mono font-medium tracking-[0.2em] text-accent-orange uppercase">
                    AI That Actually Works
                 </span>
            </div>

            {/* Main Header - Reduced spacing to mb-4 */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-white mb-4 leading-[1.05]">
              Your Data. <br/>
              Unified for <br/>
              <span className="text-transparent bg-clip-text bg-brand-gradient">
                {currentText}
              </span>
              <span className="inline-block w-1 sm:w-1.5 h-8 sm:h-10 md:h-16 lg:h-20 bg-gray-900 dark:bg-white ml-1 sm:ml-2 align-middle animate-cursor-blink"></span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            {/* Text Carousel Container */}
            <div className="relative min-h-[180px] sm:min-h-[160px] md:min-h-[140px] mb-6">
              {carouselTexts.map((text, index) => (
                <p
                  key={index}
                  className={`absolute top-0 left-0 w-full text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed transition-all duration-700 ease-in-out transform ${
                    index === activeSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex gap-2 mb-10">
              {carouselTexts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === activeSlide ? 'w-8 bg-gray-900 dark:bg-white' : 'w-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Button variant="primary" size="lg" className="h-12 px-8 text-base rounded-full shadow-lg dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-300" onClick={() => window.location.href='https://enterprise.alvio.io/auth/'}>
                Start Building <ChevronRight className="ml-2 w-4 h-4 opacity-50" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full backdrop-blur-md bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10" onClick={() => window.location.href='https://alvio.io/auth'}>
                View Platform
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* --- RIGHT COLUMN: LIQUID METAL & GLASS FUSION --- */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end h-[300px] sm:h-[400px] lg:h-[700px] perspective-1000">
            
             <div 
                ref={orbRef}
                onMouseMove={handleOrbMove}
                onMouseLeave={handleOrbLeave}
                className="relative w-full h-full flex items-center justify-center cursor-pointer z-20"
            >
                 <FadeIn delay={400} className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center">

                    {/* The 3-Layer Container */}
                    <div
                        className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] transition-transform duration-200 ease-out transform-style-3d"
                        style={{
                            transform: `rotateX(${orbTilt.x}deg) rotateY(${orbTilt.y}deg)`,
                        }}
                    >
                         {/* THE SMOOTH FUSION BLOOM (Replaced shockwave with gentle aura) */}
                         <div className="absolute inset-[-60px] rounded-full bg-gradient-to-r from-accent-orange/20 via-accent-pink/20 to-accent-purple/20 blur-[80px] opacity-0 animate-fusion-bloom mix-blend-screen pointer-events-none z-0"></div>

                         {/* LAYER 1: LIQUID METAL CORE (The Solid, Heavy Element) */}
                         <div 
                            className="absolute inset-2 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-500 dark:from-gray-500 dark:via-gray-800 dark:to-black animate-scatter-1 opacity-100 mix-blend-normal z-10 shadow-[inset_0px_0px_30px_rgba(0,0,0,0.1)] dark:shadow-[inset_0px_0px_30px_rgba(0,0,0,0.8)] overflow-hidden"
                         >
                            {/* Metallic Highlights (Chrome effect) */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent opacity-80 mix-blend-overlay"></div>
                            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-t from-gray-400/20 to-transparent opacity-50 mix-blend-color-dodge"></div>
                         </div>
                         
                         {/* LAYER 2: ETHEREAL ESSENCE (The Fluid Intelligence) */}
                         <div 
                            className="absolute inset-4 bg-gradient-to-br from-accent-orange/60 via-accent-pink/60 to-accent-purple/60 opacity-60 mix-blend-color-dodge blur-xl animate-scatter-2 z-20"
                         ></div>

                         {/* LAYER 3: CRYSTAL GLASS SHELL (The Container) */}
                         <div 
                            className="absolute inset-0 border border-white/40 bg-white/[0.1] backdrop-blur-[2px] shadow-[inset_0_0_40px_rgba(255,255,255,0.2),0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_40px_rgba(255,255,255,0.05),0_10px_40px_rgba(0,0,0,0.5)] animate-scatter-3 overflow-hidden z-30"
                         >
                            {/* Sharp Specular Reflection */}
                            <div className="absolute top-[10%] left-[10%] w-20 h-10 bg-white/60 blur-md rounded-full transform -rotate-45"></div>
                         </div>

                         {/* THE PERFECT FUSION (Smooth subtle ring) */}
                         <div className="absolute inset-0 rounded-full border border-white/50 opacity-0 animate-fusion-bloom z-40 scale-105"></div>

                         {/* Floating Particles */}
                         <div className="absolute inset-[-40px] animate-spin-slow z-50 pointer-events-none opacity-40">
                             <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-black dark:bg-white rounded-full shadow-[0_0_5px_black] dark:shadow-[0_0_5px_white]"></div>
                         </div>
                         
                    </div>
                 </FadeIn>
            </div>
        </div>

      </div>
    </section>
  );
};