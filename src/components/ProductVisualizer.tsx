import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  BatteryCharging, 
  Bluetooth, 
  Mic, 
  ShieldCheck, 
  Radio, 
  Check, 
  Music,
  ShoppingBag,
  Info
} from 'lucide-react';
import { ProductColor, PRODUCT_SPECS } from '../data/storyboard';

interface ProductVisualizerProps {
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
  allColors: ProductColor[];
  onOrderClick: () => void;
}

export const ProductVisualizer: React.FC<ProductVisualizerProps> = ({
  selectedColor,
  onSelectColor,
  allColors,
  onOrderClick,
}) => {
  const [isLidOpen, setIsLidOpen] = useState(true);
  const [areEarbudsOut, setAreEarbudsOut] = useState(false);
  const [isPlayingAudioTest, setIsPlayingAudioTest] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Play a soothing luxury chord via Web Audio API (zero external assets, 100% reliable)
  const toggleAudioTest = () => {
    if (isPlayingAudioTest) {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsPlayingAudioTest(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const notes = [261.63, 329.63, 392.00, 523.25]; // C major luxury arpeggio
      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.25);

        gain.gain.setValueAtTime(0, ctx.currentTime + index * 0.25);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + index * 0.25 + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.25 + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + index * 0.25);
        osc.stop(ctx.currentTime + index * 0.25 + 2.0);
      });

      setIsPlayingAudioTest(true);
      setTimeout(() => {
        setIsPlayingAudioTest(false);
      }, 2500);
    } catch {
      setIsPlayingAudioTest(false);
    }
  };

  return (
    <section id="unboxing" className="py-20 bg-stone-900/30 border-y border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>فحص تفاعلي 360° للميني ساك</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Cairo']">
              ديزاين كلاص.. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-rose-400">حاجة سبيسيال تفرّح القلب</span>
            </h2>
          </div>
          <p className="text-sm text-stone-400 max-w-md">
            تصميم يحاكي أرقى حقائب اليد النسائية الفاخرة، مع سلسلة معدنية ذهبية وميكانيزم فتح مغناطيسي سلس يجمع بين الأناقة والتقنية.
          </p>
        </div>

        {/* 2-Column Split: Interactive Handbag Model on Left, Features & Specs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Model Sandbox (7 Cols) */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between shadow-2xl relative overflow-hidden min-h-[480px]">
            {/* Ambient Background Lights */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none transition-colors duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${selectedColor.hex} 0%, transparent 70%)`
              }}
            />

            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-300 bg-stone-900/90 border border-stone-800 px-3 py-1 rounded-lg">
                  {selectedColor.name}
                </span>
                <span className="text-[11px] text-stone-500 font-sans">{selectedColor.subName}</span>
              </div>

              {/* Sound Test Button */}
              <button
                onClick={toggleAudioTest}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isPlayingAudioTest
                    ? 'bg-amber-400 text-stone-950 shadow-md shadow-amber-400/20'
                    : 'bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-300 hover:border-stone-700'
                }`}
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudioTest ? 'animate-bounce' : ''}`} />
                <span>{isPlayingAudioTest ? 'جاري اختبار الصوت Hi-Fi...' : 'تجربة نغمة الصوت'}</span>
              </button>
            </div>

            {/* Handbag Case Centerpiece */}
            <div className="relative my-auto flex flex-col items-center justify-center py-6 select-none">
              
              {/* Luxury Gold Chain Handle */}
              <motion.div
                animate={{
                  y: isLidOpen ? -8 : 0,
                  rotate: areEarbudsOut ? [0, -1, 1, 0] : 0
                }}
                className="w-40 sm:w-48 h-16 sm:h-20 border-t-[5px] border-x-[5px] rounded-t-full shadow-lg flex items-center justify-center relative -mb-4 z-0 transition-colors duration-500"
                style={{
                  borderColor: selectedColor.id === 'rose' ? '#fda4af' : '#fbbf24',
                  backgroundImage: 'radial-gradient(circle, #f59e0b 2px, transparent 2.5px)',
                  backgroundSize: '10px 10px'
                }}
              >
                <div 
                  className="w-4 h-4 rounded-full border shadow -mt-10"
                  style={{
                    backgroundColor: selectedColor.id === 'rose' ? '#f43f5e' : '#eab308',
                    borderColor: '#fef08a'
                  }}
                />
              </motion.div>

              {/* Handbag Charging Case Body */}
              <div 
                className="relative w-56 sm:w-64 h-40 sm:h-44 rounded-3xl p-4 shadow-2xl flex flex-col items-center justify-between border-2 transition-all duration-500 z-10 overflow-hidden"
                style={{
                  backgroundColor: selectedColor.hex,
                  borderColor: selectedColor.id === 'white' ? '#cbd5e1' : selectedColor.id === 'rose' ? '#f472b6' : '#3f3f46',
                  color: selectedColor.id === 'white' ? '#0f172a' : '#ffffff'
                }}
              >
                {/* Quilted diamond leather pattern texture */}
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

                {/* Handbag Flap / Lid */}
                <motion.div 
                  animate={{ y: isLidOpen ? -4 : 0 }}
                  className="w-full flex items-center justify-center relative z-10"
                >
                  {/* Gold Metal Turn Clasp */}
                  <button
                    onClick={() => setIsLidOpen(!isLidOpen)}
                    className="w-8 h-8 rounded-full border-2 shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                    style={{
                      backgroundColor: selectedColor.id === 'rose' ? '#f43f5e' : '#f59e0b',
                      borderColor: '#fef08a'
                    }}
                    title="انقر لفتح/إغلاق الحقيبة"
                  >
                    <div className="w-2 h-2 rounded-full bg-stone-950 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    </div>
                  </button>
                </motion.div>

                {/* Internal Earbuds Dock (Visible when lid open) */}
                <div className="relative w-full h-16 flex items-center justify-around z-10 px-4">
                  {/* Left Earbud */}
                  <motion.div
                    animate={{
                      y: areEarbudsOut ? -48 : 0,
                      rotate: areEarbudsOut ? -15 : 0,
                      opacity: areEarbudsOut ? 0.95 : 1
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="flex flex-col items-center"
                  >
                    <div 
                      className={`w-7 h-10 rounded-xl border flex flex-col items-center justify-between p-1 shadow-md ${
                        selectedColor.id === 'white' 
                          ? 'bg-stone-100 border-stone-300' 
                          : selectedColor.id === 'rose' 
                            ? 'bg-rose-200 border-rose-300' 
                            : 'bg-stone-800 border-stone-700'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                      <div className="w-1.5 h-4 rounded-full bg-stone-400/50" />
                    </div>
                    <span className={`text-[9px] font-bold mt-1 ${selectedColor.id === 'white' ? 'text-stone-700' : 'text-stone-300'}`}>
                      L
                    </span>
                  </motion.div>

                  {/* Right Earbud */}
                  <motion.div
                    animate={{
                      y: areEarbudsOut ? -48 : 0,
                      rotate: areEarbudsOut ? 15 : 0,
                      opacity: areEarbudsOut ? 0.95 : 1
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="flex flex-col items-center"
                  >
                    <div 
                      className={`w-7 h-10 rounded-xl border flex flex-col items-center justify-between p-1 shadow-md ${
                        selectedColor.id === 'white' 
                          ? 'bg-stone-100 border-stone-300' 
                          : selectedColor.id === 'rose' 
                            ? 'bg-rose-200 border-rose-300' 
                            : 'bg-stone-800 border-stone-700'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-400/80" />
                      <div className="w-1.5 h-4 rounded-full bg-stone-400/50" />
                    </div>
                    <span className={`text-[9px] font-bold mt-1 ${selectedColor.id === 'white' ? 'text-stone-700' : 'text-stone-300'}`}>
                      R
                    </span>
                  </motion.div>
                </div>

                {/* Handbag Bottom Plate */}
                <div className="relative z-10 w-full flex items-center justify-between text-[9px] opacity-75 font-mono px-2">
                  <span>TWS-5.3</span>
                  <span>MINI-BAG</span>
                </div>
              </div>

              {/* Shadow underneath */}
              <div className="w-52 h-6 bg-black/70 blur-lg rounded-full mt-2" />
            </div>

            {/* Bottom Interactive Triggers */}
            <div className="w-full flex flex-wrap items-center justify-center gap-3 z-10 pt-4 border-t border-stone-800/80">
              <button
                onClick={() => setAreEarbudsOut(!areEarbudsOut)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{areEarbudsOut ? 'إرجاع السماعات إلى الحقيبة' : 'إخراج السماعات للمعاينة'}</span>
              </button>

              <button
                onClick={() => setIsLidOpen(!isLidOpen)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>{isLidOpen ? 'غلق غطاء الحقيبة' : 'فتح غطاء الحقيبة'}</span>
              </button>
            </div>
          </div>

          {/* Color Selector & Highlights (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Color Switcher Card */}
            <div className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-amber-400 block mb-1">
                  اختر اللون المفضل لها:
                </span>
                <h3 className="text-xl font-bold text-white font-['Cairo']">
                  تشكيلة الألوان الثلاثة المتوفرة
                </h3>
              </div>

              {/* 3 Color Buttons */}
              <div className="flex flex-col gap-3">
                {allColors.map((color) => {
                  const isSelected = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => onSelectColor(color)}
                      className={`p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-stone-900 border-amber-400 shadow-md ring-1 ring-amber-400/30'
                          : 'bg-stone-900/50 border-stone-800 hover:border-stone-700 hover:bg-stone-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full border shadow flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: color.hex,
                            borderColor: color.id === 'white' ? '#94a3b8' : '#eab308'
                          }}
                        >
                          {isSelected && (
                            <Check className={`w-4 h-4 ${color.id === 'white' ? 'text-stone-900' : 'text-amber-300'}`} />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">{color.name}</span>
                            <span className="text-[10px] text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-md">
                              {color.badge}
                            </span>
                          </div>
                          <span className="text-xs text-stone-400 line-clamp-1">{color.subName}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Color Details */}
              <div className="bg-stone-900/70 rounded-2xl p-4 border border-stone-800/80">
                <p className="text-xs text-stone-300 leading-relaxed">
                  {selectedColor.description}
                </p>
              </div>
            </div>

            {/* Quick Purchase CTA Box */}
            <div className="bg-gradient-to-br from-rose-950/60 via-stone-900 to-stone-950 border border-rose-900/40 rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-400">السعر المميز مع العلبة والكرافاطة:</span>
                  <div className="text-2xl font-black text-white flex items-baseline gap-1 font-['Cairo']">
                    <span>4,200</span>
                    <span className="text-sm font-bold text-amber-400">دج</span>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-[11px] text-emerald-400 block font-semibold">متوفر في المخزون</span>
                  <span className="text-[11px] text-stone-400 block">ضمان لمدة 14 يوم</span>
                </div>
              </div>

              <button
                onClick={onOrderClick}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 hover:from-rose-600 hover:to-amber-500 shadow-xl shadow-rose-950/60 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>طلب لون {selectedColor.name} الآن</span>
              </button>
            </div>
          </div>
        </div>

        {/* Technical Specs Strip */}
        <div id="colors" className="mt-16 bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 font-['Cairo']">
            <Info className="w-5 h-5 text-amber-400" />
            <span>المواصفات التقنية الكاملة لكيت مان "ميني ساك"</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCT_SPECS.map((spec, i) => (
              <div 
                key={i} 
                className="bg-stone-900/50 border border-stone-800/80 rounded-2xl p-4 flex flex-col gap-1"
              >
                <span className="text-xs font-semibold text-rose-400">{spec.label}</span>
                <span className="text-xs text-stone-300 leading-relaxed">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
