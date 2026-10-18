import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOrderClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 text-stone-100 hover:text-rose-400 transition-colors shrink-0 whitespace-nowrap group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-700 via-rose-600 to-amber-600 p-0.5 shadow-lg shadow-rose-950/50 flex items-center justify-center">
            <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Cairo']">
              ميني ساك <span className="text-rose-500 text-sm font-semibold tracking-normal">Édition Luxe</span>
            </span>
            <span className="text-[11px] text-stone-400 -mt-1 font-sans">Handbag Wireless Earbuds</span>
          </div>
        </a>

        {/* Zone 2: 4 single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a href="#storyboard" className="hover:text-rose-400 transition-colors whitespace-nowrap shrink-0">
            العرض الإعلاني
          </a>
          <a href="#unboxing" className="hover:text-rose-400 transition-colors whitespace-nowrap shrink-0">
            تجربة العلبة والديزاين
          </a>
          <a href="#colors" className="hover:text-rose-400 transition-colors whitespace-nowrap shrink-0">
            الألوان الملكية
          </a>
          <a href="#reviews" className="hover:text-rose-400 transition-colors whitespace-nowrap shrink-0">
            تجارب الزبائن
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOrderClick}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 hover:from-rose-600 hover:to-rose-600 shadow-md shadow-rose-900/40 hover:shadow-rose-900/60 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span>طلب الهدية (الدفع عند الاستلام)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
