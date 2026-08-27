import { timelineEvents } from '../data/content';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-syntax-black relative border-b-4 border-syntax-purple">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-syntax-purple text-white font-black px-4 py-1 text-xs uppercase tracking-widest skew-x-[-10deg] mb-3">
            Cronología de Eventos
          </div>
          <h2 className="syntax-title text-4xl sm:text-5xl font-black text-white">LÍNEA DEL TIEMPO</h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto">
            Los hitos más importantes que marcaron el ascenso de nuestra relación.
          </p>
        </div>

        <div className="relative border-l-4 border-syntax-purple ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((event) => (
            <div key={event.dateLabel} className="relative pl-8 sm:pl-12 group">
              <div className="absolute -left-[14px] top-1.5 w-6 h-6 bg-syntax-purple border-4 border-white rounded-full group-hover:scale-125 transition duration-300" />
              <div className="sm:absolute sm:-left-32 sm:top-1 text-syntax-purple font-black text-sm uppercase tracking-wider mb-1 sm:mb-0">
                {event.dateLabel}
              </div>
              <div className="bg-syntax-charcoal border-2 border-zinc-800 p-6 group-hover:border-syntax-purple transition duration-300">
                <h3 className="text-white font-black text-xl mb-2">{event.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
