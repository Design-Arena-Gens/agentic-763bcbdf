'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.sky}>
        <div style={{...styles.sun, transform: `translateY(${scrollY * 0.3}px)`}}></div>
      </div>

      <div style={styles.forest}>
        {/* Beautiful background trees */}
        <svg style={{...styles.beautifulTree, left: '5%'}} viewBox="0 0 100 200">
          <polygon points="50,30 20,80 30,80 10,110 20,110 0,140 40,140 40,200 60,200 60,140 100,140 80,110 90,110 70,80 80,80" fill="#2d5016" />
        </svg>

        <svg style={{...styles.beautifulTree, left: '15%', height: '280px'}} viewBox="0 0 100 200">
          <polygon points="50,20 25,70 32,70 15,100 22,100 5,130 40,130 40,200 60,200 60,130 95,130 78,100 85,100 68,70 75,70" fill="#3a6b1e" />
        </svg>

        <svg style={{...styles.beautifulTree, right: '8%', height: '260px'}} viewBox="0 0 100 200">
          <polygon points="50,25 22,75 30,75 12,105 20,105 3,135 40,135 40,200 60,200 60,135 97,135 80,105 88,105 70,75 78,75" fill="#2d5016" />
        </svg>

        {/* Ugly Trees - Center Stage */}
        <div style={styles.uglyTreeGroup}>
          {/* Ugly Tree 1 - Crooked and twisted */}
          <svg style={{...styles.uglyTree, left: '30%'}} viewBox="0 0 120 250">
            <path d="M 60 200 Q 55 180 65 160 Q 50 140 60 120 Q 55 100 50 80 Q 60 60 55 40"
                  stroke="#4a3520" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <circle cx="50" cy="80" r="15" fill="#5a4a30" />
            <circle cx="48" cy="82" r="8" fill="#3a2a10" />
            <ellipse cx="65" cy="130" rx="12" ry="20" fill="#5a4a30" transform="rotate(45 65 130)" />
            <polygon points="55,35 50,50 45,40 48,55 42,45 50,60 58,45 52,55 55,40 60,50" fill="#3a2a10" />
            <line x1="62" y1="150" x2="75" y2="145" stroke="#4a3520" strokeWidth="3" />
            <line x1="58" y1="110" x2="45" y2="108" stroke="#4a3520" strokeWidth="3" />
          </svg>

          {/* Ugly Tree 2 - Dead looking with bare branches */}
          <svg style={{...styles.uglyTree, left: '45%'}} viewBox="0 0 120 250">
            <path d="M 60 200 L 58 150 L 60 100 L 62 50 L 60 20"
                  stroke="#665544" strokeWidth="10" fill="none"/>
            <line x1="60" y1="70" x2="30" y2="60" stroke="#665544" strokeWidth="5" />
            <line x1="60" y1="70" x2="85" y2="55" stroke="#665544" strokeWidth="5" />
            <line x1="30" y1="60" x2="20" y2="50" stroke="#665544" strokeWidth="3" />
            <line x1="30" y1="60" x2="25" y2="70" stroke="#665544" strokeWidth="3" />
            <line x1="85" y1="55" x2="95" y2="45" stroke="#665544" strokeWidth="3" />
            <line x1="85" y1="55" x2="92" y2="65" stroke="#665544" strokeWidth="3" />
            <line x1="58" y1="110" x2="40" y2="115" stroke="#665544" strokeWidth="4" />
            <line x1="62" y1="120" x2="80" y2="118" stroke="#665544" strokeWidth="4" />
            <line x1="40" y1="115" x2="35" y2="125" stroke="#665544" strokeWidth="2" />
            <circle cx="60" cy="85" r="3" fill="#8b7355" />
            <circle cx="55" cy="95" r="2" fill="#8b7355" />
          </svg>

          {/* Ugly Tree 3 - Lumpy and misshapen */}
          <svg style={{...styles.uglyTree, left: '60%'}} viewBox="0 0 120 250">
            <rect x="55" y="140" width="10" height="60" fill="#5a4a30" />
            <ellipse cx="60" cy="130" rx="25" ry="30" fill="#6b5b40" />
            <ellipse cx="70" cy="110" rx="20" ry="25" fill="#5a4a30" />
            <ellipse cx="50" cy="105" rx="18" ry="22" fill="#6b5b40" />
            <ellipse cx="60" cy="80" rx="22" ry="28" fill="#5a4a30" />
            <ellipse cx="65" cy="55" rx="15" ry="20" fill="#6b5b40" />
            <circle cx="55" cy="120" r="4" fill="#3a2a10" />
            <circle cx="72" cy="100" r="3" fill="#3a2a10" />
            <circle cx="62" cy="75" r="3" fill="#3a2a10" />
          </svg>
        </div>

        {/* More beautiful trees in foreground */}
        <svg style={{...styles.beautifulTree, left: '80%', height: '300px'}} viewBox="0 0 100 200">
          <polygon points="50,15 20,65 28,65 12,95 20,95 5,125 40,125 40,200 60,200 60,125 95,125 80,95 88,95 72,65 80,65" fill="#3a6b1e" />
        </svg>

        <svg style={{...styles.beautifulTree, left: '88%', height: '240px'}} viewBox="0 0 100 200">
          <polygon points="50,35 23,83 31,83 14,113 21,113 6,143 40,143 40,200 60,200 60,143 94,143 79,113 86,113 69,83 77,83" fill="#2d5016" />
        </svg>

        <div style={styles.ground}></div>
      </div>

      <div style={styles.textOverlay}>
        <h1 style={styles.title}>Ugly Trees in a Beautiful Forest</h1>
        <p style={styles.subtitle}>Beauty is in the eye of the beholder</p>
        <div style={styles.description}>
          <p>Even in the most magnificent forests, there stand trees that don't conform to our ideals of beauty.</p>
          <p>Twisted, crooked, bare, and misshapen—yet they are no less part of the forest's story.</p>
          <p>Perhaps it's the contrast that makes the forest truly beautiful.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes gentleSway {
          0%, 100% { transform: rotate(-1deg); }
          50% { transform: rotate(1deg); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    overflow: 'hidden',
    position: 'relative',
    fontFamily: 'Georgia, serif',
  },
  sky: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60vh',
    background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 50%, #FFF8DC 100%)',
    zIndex: -2,
  },
  sun: {
    position: 'absolute',
    top: '10%',
    right: '15%',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #FDB813 0%, #FFA500 100%)',
    boxShadow: '0 0 60px rgba(255, 200, 0, 0.6)',
  },
  forest: {
    position: 'relative',
    minHeight: '100vh',
    paddingTop: '40vh',
    zIndex: 1,
  },
  beautifulTree: {
    position: 'absolute',
    bottom: 0,
    height: '250px',
    width: 'auto',
    filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
    animation: 'gentleSway 4s ease-in-out infinite',
    transformOrigin: 'bottom center',
  },
  uglyTreeGroup: {
    position: 'relative',
    width: '100%',
    height: '300px',
    marginTop: '50px',
  },
  uglyTree: {
    position: 'absolute',
    bottom: 0,
    height: '250px',
    width: 'auto',
    filter: 'drop-shadow(3px 5px 8px rgba(0,0,0,0.4))',
    animation: 'sway 5s ease-in-out infinite',
    transformOrigin: 'bottom center',
    zIndex: 10,
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(to bottom, rgba(101, 67, 33, 0.8) 0%, rgba(101, 67, 33, 1) 100%)',
    zIndex: 20,
  },
  textOverlay: {
    position: 'absolute',
    top: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    color: '#2c2c2c',
    zIndex: 30,
    maxWidth: '90%',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
    color: '#3a2a10',
    textShadow: '2px 2px 4px rgba(255,255,255,0.5)',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    margin: '0 0 20px 0',
    color: '#5a4a30',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#4a3a20',
  },
};
