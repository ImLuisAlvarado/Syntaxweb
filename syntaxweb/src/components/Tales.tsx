import { tales } from '../data/content';

export default function Tales() {
  return (
    <section id="tales" className="py-20 bg-syntax-charcoal relative border-b-4 border-syntax-purple">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
            Expediente de Sucesos Importantes
          </div>
          <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white">EFEMERIDES</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
            ¿Qué sería de la historia sin esas fechas importantes que se deben recordar? ¿Qué sería de nosotros sin la historia?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tales.map((tale) => (
            <div key={tale.reality} className="bg-syntax-black border-2 border-syntax-purple p-6 relative flex flex-col justify-between">
              <div>
                <span className="bg-syntax-purple text-white text-xs font-black px-2 py-1 uppercase inline-block mb-3">
                  {tale.universe}
                </span>
                <h3 className="text-white font-black text-xl mb-2">{tale.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{tale.text}</p>
              </div>
              <div className="text-syntax-yellow text-xs font-bold uppercase">
                <i className="fa-solid fa-dice" /> {tale.reality}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
