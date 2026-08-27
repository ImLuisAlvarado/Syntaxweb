import { useState } from 'react';
import { loveNotes } from '../data/content';

export default function LoveNotes() {
  const [note, setNote] = useState(loveNotes[0]);
  const [visible, setVisible] = useState(true);

  function drawLoveNote() {
    const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    setVisible(false);
    setTimeout(() => {
      setNote(randomNote);
      setVisible(true);
    }, 200);
  }

  return (
    <section id="lovenotes" className="py-20 bg-syntax-charcoal relative border-b-4 border-syntax-purple">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
          Palabras de aliento para todo momento
        </div>
        <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white mb-4">¿Te falta motivación?</h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
          Nos pasa a todos. Haz click en el botón y recibe unos cuantos consejos totalmente gratuitos; porque lo que realmente te va a costar será aplicarlos.
        </p>

        <div className="relative bg-syntax-black border-4 border-syntax-purple p-8 shadow-2xl max-w-2xl mx-auto">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-syntax-purple text-white px-6 py-2 font-black tracking-widest uppercase text-sm border-2 border-white skew-x-[-6deg]">
            <i className="fa-solid fa-gift mr-2" /> Palabras de aliento
          </div>

          <div className="min-h-[140px] flex items-center justify-center p-6 bg-zinc-900 border-2 border-dashed border-syntax-purple my-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-syntax-purple/5 pointer-events-none" />
            <p
              className="text-lg sm:text-xl font-bold text-zinc-100 italic transition-all duration-300"
              style={{ opacity: visible ? 1 : 0 }}
            >
              "{note}"
            </p>
          </div>

          <button
            type="button"
            onClick={drawLoveNote}
            className="w-full bg-syntax-purple hover:bg-fuchsia-700 text-white font-black py-4 px-6 text-lg uppercase tracking-wider transition duration-200 shadow-lg border-2 border-white skew-x-[-4deg] flex items-center justify-center space-x-2"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-syntax-yellow" />
            <span>Extraer Otra Razón Mágica</span>
          </button>
        </div>
      </div>
    </section>
  );
}
