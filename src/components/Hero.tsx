import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Developer'],
      typeSpeed: 120,
      backDelay: 80,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hello, I am <span className="text-purple-500">Ravi</span>
          </h1>
          <div className="text-2xl md:text-3xl text-white mb-2">and I am a</div>
          <span ref={el} className="text-2xl md:text-3xl text-purple-500"></span>
        </div>
      </div>
    </section>
  );
}