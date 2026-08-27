import { useClock } from '../hooks/useClock';

export default function Hud() {
  const clock = useClock();

  return (
    <>
      <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center space-x-2 bg-syntax-black/80 border-2 border-syntax-purple px-4 py-1 skew-x-[-12deg]">
        <span className="text-syntax-purple font-black text-xs uppercase tracking-widest">
          <i className="fa-solid fa-heart mr-1" /> EN LINEA
        </span>
      </div>
      <div className="fixed bottom-4 right-4 z-40 hidden md:flex items-center space-x-2 bg-syntax-purple text-white px-4 py-1 skew-x-[12deg] shadow-lg shadow-red-900/50">
        <span className="font-extrabold text-xs uppercase tracking-wider">{clock}</span>
      </div>
    </>
  );
}
