'use client';
import { useEffect } from 'react';
import { usePreloader } from './../contexts/PreloaderContext';

const Preloader = () => {
  const { loading, setLoading } = usePreloader();

  useEffect(() => {
    // Disable scrolling while the preloader is active
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const timer = setTimeout(() => setLoading(false), 2000); // Adjust timing as needed
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled
    };
  }, [loading, setLoading]);

  const letters = "OLD COLONY".split('');

  return (
    <>
      {loading && (
        <div className="preloader flex items-center justify-center fixed top-0 left-0 w-full h-full bg-neutral-100 z-50">
          <div className="text-black text-5xl font-bold flex space-x-2">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="animate-fadeInLetter"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
