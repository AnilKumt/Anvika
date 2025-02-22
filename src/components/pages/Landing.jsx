import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiLightningBolt, HiChartBar, HiUserGroup } from 'react-icons/hi';

// Add this features array before the Landing component
const features = [
  {
    icon: HiLightningBolt,
    title: "Lightning Fast",
    description: "Experience seamless performance with our optimized workflow solutions."
  },
  {
    icon: HiChartBar,
    title: "Advanced Analytics",
    description: "Make data-driven decisions with powerful insights and visualization tools."
  },
  {
    icon: HiUserGroup,
    title: "Team Collaboration",
    description: "Work together effortlessly with real-time collaboration features."
  }
];

// Your existing Landing component code continues here...

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current || !featuresRef.current) return;  // Prevent null errors
  
    gsap.fromTo(heroRef.current.querySelectorAll('.hero-element'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );
  
    gsap.fromTo([...featuresRef.current.children],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);
  

  return (
    <div className="relative z-10 min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="container mx-auto px-4 z-10">
          <h1 className="hero-element text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Anvika
          </h1>
          <p className="hero-element text-xl md:text-2xl text-gray-300 mb-8">
            Simplify Tasks, Amplify Success
          </p>
          <div 
            className="hero-element flex gap-4"
          >
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 border border-purple-600 rounded-full font-semibold hover:bg-purple-600/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-black/50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card p-6 rounded-2xl bg-gradient-to-br from-purple-900/50 to-transparent border border-purple-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Landing;
