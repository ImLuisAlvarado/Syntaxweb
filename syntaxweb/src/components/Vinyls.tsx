import { useState, useRef, useEffect } from 'react';
import { tracks } from '../data/content';

export default function Vinyls() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const currentTrack = tracks[currentTrackIndex];

  // Sincroniza el estado de reproducción de React con el elemento de audio nativo
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  function loadTrack(index: number) {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying((playing) => !playing);
  }

  return (
    <section id="vinyls" className="py-20 bg-syntax-black relative border-b-4 border-syntax-purple">
      {/* Elemento de audio nativo compatible con Opus (asegúrate de que currentTrack tenga la propiedad con la ruta del archivo) */}
      <audio 
        ref={audioRef} 
        preload='none'
        src={currentTrack.src} 
        onEnded={() => setIsPlaying(false)} 
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
            Vinilos y Tocadiscos
          </div>
          <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white">NUESTRA MÚSICA</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
            Discos de vinilo con algunas recomendaciones para esas tardes de 'coding'. Se actualiza periódicamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vinyl Sleeves Preview */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-white font-black text-2xl uppercase border-l-4 border-syntax-purple pl-3">
              Colección de Vinilos
            </h3>

            {tracks.map((track, index) => (
              <div
                key={track.title}
                onClick={() => loadTrack(index)}
                className="relative bg-zinc-900 border-2 border-zinc-800 p-4 flex items-center group cursor-pointer hover:border-syntax-purple transition duration-300"
              >
                <div className="w-24 h-24 bg-syntax-dark-purple border-2 border-white relative overflow-hidden shrink-0 shadow-lg">
                  <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-28 h-28 bg-black rounded-full border-4 border-zinc-700 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-4">
                    <div className={`w-8 h-8 ${track.vinylColor} rounded-full border-2 border-white overflow-hidden flex items-center justify-center`}>
                      {track.cover ? (
                        <img
                          src={track.cover}
                          alt={track.title}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          fetchPriority={index === 0 ? 'high' : 'auto'}
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="ml-6 z-10">
                  <span className="text-syntax-purple text-xs font-bold uppercase">{track.label}</span>
                  <h4 className="text-white font-black text-lg">{track.title}</h4>
                  <p className="text-zinc-400 text-xs mt-1">{track.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Turntable Audio Player Simulator */}
          <div className="lg:col-span-6 bg-syntax-charcoal border-4 border-syntax-purple p-6 relative shadow-2xl">
            <div className="absolute -top-4 right-6 bg-syntax-purple text-white text-xs font-black px-3 py-1 uppercase">
              Tocadiscos Activo
            </div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto bg-zinc-900 rounded-full border-8 border-zinc-800 flex items-center justify-center shadow-inner my-4">
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 bg-black rounded-full border-2 border-zinc-700 flex items-center justify-center relative shadow-2xl animate-spin-slow"
                style={{
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              >
                <div className="relative flex aspect-square w-full max-w-[250px] items-center justify-center overflow-hidden rounded-full p-4">
                  <div className="absolute inset-4 rounded-full border border-zinc-800" />
                  <div className="absolute inset-10 rounded-full border border-zinc-800" />
                  <div className="absolute inset-16 rounded-full border border-zinc-800" />
                  
                  {/* Círculo central morado con la portada limpia */}
                  <div className="w-20 h-20 bg-syntax-purple rounded-full border-4 border-white flex items-center justify-center overflow-hidden">
                    {currentTrack?.cover && (
                      <img
                        src={currentTrack.cover}
                        alt=""
                        aria-hidden="true"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 space-y-2">
            <h4 className="text-white font-black text-xl">{currentTrack.title}</h4>
            <p className="text-zinc-400 text-xs uppercase tracking-widest">Artista: {currentTrack.artist}</p>

            <div className="flex justify-center items-center space-x-4 pt-4">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                className="bg-syntax-purple hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white transition transform hover:scale-105"
              >
                <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play ml-1'}`} />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}