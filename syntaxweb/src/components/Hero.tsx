import { useCallback, useEffect, useState } from 'react';
import { slides, END_DATE } from '../data/content';
import { useCountdown } from '../hooks/useCountdown';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const remaining = useCountdown(END_DATE);

  const nextSlide = useCallback(() => {
    setCurrentSlide((i) => (i + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(nextSlide, 5000);
    return () => clearInterval(id);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-syntax-black via-syntax-charcoal to-black py-16 px-4 overflow-hidden border-b-8 border-syntax-purple"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-syntax-purple via-transparent to-transparent scale-150 animate-pulse" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Info & Counter */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-syntax-purple/20 border-l-4 border-syntax-purple px-4 py-2 text-syntax-purple font-black text-sm uppercase tracking-widest skew-x-[-6deg]">
            <i className="fa-solid fa-star mr-1" /> Bienvenid@ a la página oficial
          </div>
          <h1 className="syntax-title text-5xl sm:text-7xl font-black text-white tracking-tight drop-shadow-[0_5px_5px_rgba(230,0,18,0.4)]">
            SOCIEDAD <span className="text-syntax-purple underline decoration-wavy decoration-white">SYNTAX</span>
          </h1>
          <p className="text-zinc-300 text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
            “Sólo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer." - Alan Turing
          </p>

          <div className="bg-syntax-black border-2 border-syntax-purple p-6 relative shadow-2xl skew-x-[-2deg] max-w-md mx-auto lg:mx-0">
            <div className="absolute -top-3 -right-3 bg-syntax-purple text-white text-xs font-black px-3 py-1 uppercase">
              Tiempo Hasta el final del semestre
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-syntax-charcoal p-2 border border-zinc-800">
                <span className="block text-2xl sm:text-3xl font-black text-syntax-purple">{remaining.days}</span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Días</span>
              </div>
              <div className="bg-syntax-charcoal p-2 border border-zinc-800">
                <span className="block text-2xl sm:text-3xl font-black text-white">{remaining.hours}</span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Horas</span>
              </div>
              <div className="bg-syntax-charcoal p-2 border border-zinc-800">
                <span className="block text-2xl sm:text-3xl font-black text-white">{remaining.minutes}</span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Min</span>
              </div>
              <div className="bg-syntax-charcoal p-2 border border-zinc-800">
                <span className="block text-2xl sm:text-3xl font-black text-syntax-yellow animate-pulse">
                  {remaining.seconds}
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-400">Seg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[400px] sm:h-[480px] bg-syntax-charcoal border-4 border-syntax-purple shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 w-full h-full">
              {slides.map((slide, i) => (
                <div
                  key={slide.id}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: i === currentSlide ? 1 : 0 }}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover filter contrast-125"
                    onError={(e) => {
                      e.currentTarget.src = slide.fallback;
                    }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
                    <span className="text-xs font-black text-syntax-purple uppercase bg-black/60 px-2 py-1">
                      {slide.fileTag}
                    </span>
                    <h3 className="text-white font-black text-xl mt-1">{slide.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-syntax-black/80 hover:bg-syntax-purple text-white p-3 border border-syntax-purple transition duration-200 z-20"
            >
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-syntax-black/80 hover:bg-syntax-purple text-white p-3 border border-syntax-purple transition duration-200 z-20"
            >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
