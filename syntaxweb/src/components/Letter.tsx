import { useState } from 'react';
import type { SubmitEvent } from 'react';


import { CORRECT_PASSWORD } from '../data/content.ts';

export default function Letter() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);


  const handlePasswordSubmit = (e: SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
    if (password.toLowerCase().trim() === CORRECT_PASSWORD) {
      setOpen(true);
      setShowModal(false);
      setPassword('');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setError(false);
    setPassword('');
  };

  return (
    <section id="letter" className="py-20 bg-syntax-black relative">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
          Mensaje Clasificado
        </div>
        <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white mb-4">SOBRE DE CARTA SECRETA</h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
          Haz clic en el sobre para ingresar la clave de acceso y romper el sello de cera reservado solo para ti.
        </p>

        <div
          className="relative max-w-xl mx-auto bg-zinc-900 border-4 border-syntax-purple p-8 shadow-2xl cursor-pointer group"
          onClick={() => {
            if (!open) setShowModal(true);
          }}
        >
          {!open && (
            <div className="py-12 transition-all duration-500">
              <div className="w-24 h-24 bg-syntax-purple text-white mx-auto rounded-full flex items-center justify-center text-4xl shadow-xl border-4 border-white mb-4 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-envelope-open-text" />
              </div>
              <h3 className="text-white font-black text-2xl">Clic para abrir la carta</h3>
              <p className="text-syntax-purple text-xs font-bold uppercase mt-1">Acceso Protegido • Sello S.Link</p>
            </div>
          )}

          {open && (
            <div className="text-left bg-syntax-charcoal p-6 sm:p-8 border-2 border-syntax-yellow relative transition-all duration-500">
              <div className="absolute top-2 right-2 text-syntax-yellow text-lg">
                <i className="fa-solid fa-heart" />
              </div>
              <h3 className="syntax-title text-2xl sm:text-3xl text-white mb-4">Nuestro querido alumno,</h3>
              <p className="text-zinc-200 text-base leading-relaxed mb-4">
                No se supone que abras esto todavía
              </p>
              <p className="text-zinc-200 text-base leading-relaxed mb-6">
                Largo de aquí
              </p>
              <div className="text-right">
                <p className="text-syntax-purple font-black text-lg">Syntax,</p>
                <p className="text-zinc-400 text-xs font-bold uppercase">Tus Compañeros de Aventura</p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(false);
                }}
                className="mt-6 text-xs text-zinc-400 hover:text-white underline uppercase"
              >
                Cerrar Carta
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Contraseña */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-syntax-charcoal border-4 border-syntax-purple p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-center">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white text-xl"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <div className="w-16 h-16 bg-syntax-purple text-white mx-auto rounded-full flex items-center justify-center text-2xl shadow-md border-2 border-white mb-4">
              <i className="fa-solid fa-lock" />
            </div>

            <h3 className="text-white font-black text-xl mb-2">VERIFICACIÓN DE SEGURIDAD</h3>
            <p className="text-zinc-400 text-xs uppercase tracking-wider mb-6">
              Ingresa la contraseña para desbloquear el mensaje clasificado.
            </p>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Contraseña..."
                className="w-full bg-zinc-900 border-2 border-zinc-700 text-white px-4 py-3 text-center tracking-widest focus:outline-none focus:border-syntax-purple text-sm"
                autoFocus
              />
              
              {error && (
                <p className="text-red-500 text-xs font-bold uppercase tracking-wide">
                  Contraseña incorrecta. Intenta de nuevo.
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-1/2 bg-zinc-800 text-zinc-300 font-bold py-3 uppercase tracking-wider text-xs hover:bg-zinc-700 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-syntax-purple text-white font-black py-3 uppercase tracking-wider text-xs hover:opacity-95 transition"
                >
                  Desbloquear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}