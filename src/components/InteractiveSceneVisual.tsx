import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Gift, Check, Volume2, ShieldCheck, Heart } from 'lucide-react';
import { ProductColor } from '../data/storyboard';

interface InteractiveSceneVisualProps {
  sceneId: number;
  activeColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
  allColors: ProductColor[];
  isBoxOpen: boolean;
  onToggleBox: () => void;
}

export const InteractiveSceneVisual: React.FC<InteractiveSceneVisualProps> = ({
  sceneId,
  activeColor,
  onSelectColor,
  allColors,
  isBoxOpen,
  onToggleBox,
}) => {
  return (
    <div className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-2xl bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border border-stone-800/80 p-6 overflow-hidden flex items-center justify-center shadow-2xl select-none">
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(190,18,60,0.18),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(217,119,6,0.1),transparent_50%)] pointer-events-none" />
      
      {/* Background Studio Grid subtle lines */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Camera Stage HUD / Scene watermark */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <span className="text-[11px] text-amber-400/90 font-medium bg-stone-900/80 backdrop-blur-sm border border-stone-800 px-2.5 py-1 rounded-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          المشهد {sceneId} من 4
        </span>
      </div>

      <AnimatePresence mode="wait">
        {/* SCENE 1: Focus on the Red Gift Box with Ribbon/Tie */}
        {sceneId === 1 && (
          <motion.div
            key="scene-1"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center w-full max-w-md cursor-pointer group"
            onClick={onToggleBox}
          >
            {/* Pedestal / Shadow */}
            <div className="absolute -bottom-8 w-72 h-14 bg-black/80 blur-xl rounded-full transform scale-y-50" />

            {/* The Red Luxury Gift Box */}
            <div className="relative w-64 sm:w-72 h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-rose-800 via-rose-900 to-stone-950 p-1 shadow-2xl border border-rose-700/40 transform transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Box Texture & Highlights */}
              <div className="relative w-full h-full rounded-[14px] bg-gradient-to-b from-rose-800 to-rose-950 p-4 flex flex-col items-center justify-center overflow-hidden border border-rose-600/30">
                {/* Velvet sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                {/* Vertical Crimson Silk Ribbon */}
                <div className="absolute inset-y-0 w-12 bg-gradient-to-r from-rose-600 via-amber-500/30 to-rose-600 shadow-md border-x border-amber-400/40 flex items-center justify-center" />

                {/* Horizontal Crimson Silk Ribbon */}
                <div className="absolute inset-x-0 h-12 bg-gradient-to-b from-rose-600 via-amber-500/30 to-rose-600 shadow-md border-y border-amber-400/40" />

                {/* The Luxury Tie / Ribbon Bow (الكرافاطة) Centerpiece */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    {/* Left Bow Loop */}
                    <motion.div 
                      animate={{ rotate: [-2, 2, -2] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-14 h-12 rounded-full bg-gradient-to-br from-rose-500 via-rose-700 to-rose-900 border border-amber-400/60 shadow-lg transform -rotate-25 origin-right"
                    />
                    {/* Golden Center Knot / Medallion */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 border border-amber-200 shadow-xl flex items-center justify-center z-10">
                      <Sparkles className="w-4 h-4 text-stone-950" />
                    </div>
                    {/* Right Bow Loop */}
                    <motion.div 
                      animate={{ rotate: [2, -2, 2] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-14 h-12 rounded-full bg-gradient-to-bl from-rose-500 via-rose-700 to-rose-900 border border-amber-400/60 shadow-lg transform rotate-25 origin-left"
                    />
                  </div>

                  {/* Ribbon Tails / Ties hanging down */}
                  <div className="flex gap-4 -mt-2">
                    <div className="w-5 h-16 bg-gradient-to-b from-rose-600 to-rose-900 transform -rotate-12 border-b-8 border-transparent border-t-0 shadow-md" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }} />
                    <div className="w-5 h-16 bg-gradient-to-b from-rose-600 to-rose-900 transform rotate-12 border-b-8 border-transparent border-t-0 shadow-md" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }} />
                  </div>
                </div>

                {/* Subtle Luxury Embossed Gold Badge */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center z-10">
                  <span className="text-[12px] font-semibold text-amber-300/90 tracking-wider bg-stone-950/60 px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1.5 backdrop-blur-sm">
                    <Gift className="w-3.5 h-3.5 text-amber-400" />
                    تغليف راقي ومميز (لومبالاج ينطق)
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-stone-400 group-hover:text-stone-200 transition-colors flex items-center gap-1.5">
              <span>انقر لفتح العلبة واستكشاف المفاجأة</span>
            </p>
          </motion.div>
        )}

        {/* SCENE 2: The Unboxing & Black Handbag Earbuds in Hand */}
        {sceneId === 2 && (
          <motion.div
            key="scene-2"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center w-full max-w-md"
          >
            {/* Ambient Base Shadow */}
            <div className="absolute -bottom-6 w-80 h-16 bg-black/90 blur-2xl rounded-full" />

            {/* Open Box Container Base */}
            <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 p-6 shadow-2xl flex flex-col items-center">
              {/* Velvet Silk Cushion Interior */}
              <div className="absolute inset-3 rounded-xl bg-gradient-to-b from-stone-950 via-rose-950/40 to-stone-950 border border-rose-900/30 pointer-events-none" />

              {/* Handbag Case Showcase - Royal Black */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Gold Chain Handle */}
                <motion.div 
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-32 h-14 border-t-4 border-x-4 border-amber-400 rounded-t-full shadow-lg flex items-center justify-center relative -mb-3"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #f59e0b 2px, transparent 2px)',
                    backgroundSize: '8px 8px'
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-amber-300 border border-amber-500 shadow -mt-6" />
                </motion.div>

                {/* Handbag Body (The Earbuds Charging Case) */}
                <div className="relative w-44 sm:w-52 h-32 sm:h-36 rounded-2xl bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border-2 border-stone-700 shadow-2xl p-3 flex flex-col items-center justify-between overflow-hidden">
                  {/* Quilted diamond stitching pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                  {/* Gold Metal Clasp / Latch */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 border border-amber-200 shadow-md flex items-center justify-center mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-950 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Flap division line */}
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

                  {/* Front Logo / Gold Label */}
                  <div className="relative z-10 text-center">
                    <span className="text-[10px] tracking-widest text-amber-300/80 font-bold uppercase">
                      MINI SAC TWS
                    </span>
                    <p className="text-[9px] text-stone-400">Hi-Fi Audio • Touch Control</p>
                  </div>
                </div>

                {/* The Two Earbuds Floating Beside Handbag */}
                <div className="flex items-center justify-between w-60 -mt-8 relative z-20 pointer-events-none">
                  {/* Left Earbud */}
                  <motion.div 
                    animate={{ y: [-4, 4, -4], rotate: [-8, -4, -8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-10 h-14 rounded-2xl bg-gradient-to-b from-stone-800 to-stone-950 border border-amber-400/60 p-1.5 shadow-xl flex flex-col items-center justify-between"
                  >
                    <div className="w-4 h-4 rounded-full bg-amber-400/30 border border-amber-400 flex items-center justify-center">
                      <Volume2 className="w-2.5 h-2.5 text-amber-300" />
                    </div>
                    <div className="w-2 h-7 rounded-full bg-gradient-to-b from-stone-700 to-stone-900 border-t border-amber-400/40" />
                  </motion.div>

                  {/* Right Earbud */}
                  <motion.div 
                    animate={{ y: [4, -4, 4], rotate: [8, 4, 8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-10 h-14 rounded-2xl bg-gradient-to-b from-stone-800 to-stone-950 border border-amber-400/60 p-1.5 shadow-xl flex flex-col items-center justify-between"
                  >
                    <div className="w-4 h-4 rounded-full bg-amber-400/30 border border-amber-400 flex items-center justify-center">
                      <Volume2 className="w-2.5 h-2.5 text-amber-300" />
                    </div>
                    <div className="w-2 h-7 rounded-full bg-gradient-to-b from-stone-700 to-stone-900 border-t border-amber-400/40" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-amber-300/90 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>كيت مان بلوتوث على شكل ميني ساك - ديزاين كلاص وفريد</span>
            </div>
          </motion.div>
        )}

        {/* SCENE 3: The Three Royal Colors Trio */}
        {sceneId === 3 && (
          <motion.div
            key="scene-3"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center w-full max-w-xl"
          >
            {/* The 3 Handbag Models displayed side-by-side */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full items-end pb-2">
              {allColors.map((color) => {
                const isSelected = activeColor.id === color.id;
                return (
                  <motion.div
                    key={color.id}
                    whileHover={{ y: -4 }}
                    onClick={() => onSelectColor(color)}
                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      isSelected ? 'scale-105 opacity-100' : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Handbag Case */}
                    <div className="relative flex flex-col items-center w-full">
                      {/* Gold handle chain */}
                      <div 
                        className="w-16 sm:w-20 h-8 border-t-2 border-x-2 border-amber-400 rounded-t-full -mb-2 shadow-sm"
                        style={{
                          borderColor: color.id === 'rose' ? '#fb7185' : '#f59e0b'
                        }}
                      />

                      {/* Handbag Case Body */}
                      <div
                        className={`w-full max-w-[120px] sm:max-w-[140px] h-24 sm:h-28 rounded-xl p-2.5 flex flex-col items-center justify-between shadow-xl border-2 transition-all duration-300 relative ${
                          isSelected
                            ? 'border-amber-400 shadow-amber-500/20 shadow-lg ring-2 ring-amber-400/30'
                            : 'border-stone-700/60'
                        }`}
                        style={{
                          backgroundColor: color.hex,
                          color: color.id === 'white' ? '#0f172a' : '#ffffff'
                        }}
                      >
                        {/* Metallic Clasp */}
                        <div
                          className="w-5 h-5 rounded-full shadow border flex items-center justify-center"
                          style={{
                            backgroundColor: color.id === 'rose' ? '#fb7185' : '#eab308',
                            borderColor: '#ffffff'
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                        </div>

                        {/* Earbuds Mini representation */}
                        <div className="flex gap-1.5 my-1">
                          <div className={`w-3.5 h-6 rounded-md border ${color.id === 'white' ? 'bg-stone-200 border-stone-400' : color.id === 'rose' ? 'bg-rose-300 border-rose-400' : 'bg-stone-800 border-stone-600'}`} />
                          <div className={`w-3.5 h-6 rounded-md border ${color.id === 'white' ? 'bg-stone-200 border-stone-400' : color.id === 'rose' ? 'bg-rose-300 border-rose-400' : 'bg-stone-800 border-stone-600'}`} />
                        </div>

                        <span className={`text-[10px] font-bold text-center leading-tight truncate w-full ${color.id === 'white' ? 'text-stone-900' : 'text-stone-200'}`}>
                          {color.name}
                        </span>
                      </div>
                    </div>

                    {/* Color badge tag */}
                    <div className="mt-2.5 text-center">
                      <span className={`text-[11px] font-semibold block transition-colors ${isSelected ? 'text-amber-400' : 'text-stone-400'}`}>
                        {color.name}
                      </span>
                      <span className="text-[10px] text-stone-400 block -mt-0.5">
                        {color.badge}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Active Color Info Card */}
            <div className="mt-4 w-full bg-stone-900/80 border border-stone-800 rounded-xl p-3 text-center">
              <span className="text-xs text-amber-300 font-semibold">{activeColor.name}: </span>
              <span className="text-xs text-stone-300">{activeColor.description}</span>
            </div>
          </motion.div>
        )}

        {/* SCENE 4: Complete Ready-to-Deliver Gift Box (No wrapping hassle) */}
        {sceneId === 4 && (
          <motion.div
            key="scene-4"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center w-full max-w-md"
          >
            {/* Ready to Deliver Gift Composition */}
            <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-br from-stone-900 via-rose-950/30 to-stone-950 border border-rose-800/50 p-6 shadow-2xl flex flex-col items-center">
              
              {/* Ready Gift Box representation */}
              <div className="relative w-56 h-44 rounded-xl bg-gradient-to-br from-rose-800 via-rose-900 to-rose-950 border border-amber-400/40 p-3 shadow-xl flex items-center justify-center">
                {/* Gold/Crimson Ribbon Cross */}
                <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-amber-400/80 via-amber-300 to-amber-500/80 shadow" />
                <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-amber-400/80 via-amber-300 to-amber-500/80 shadow" />

                {/* Bow on Top */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900 border-2 border-amber-300 shadow-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-amber-200 fill-amber-200" />
                </div>

                {/* Personalized Greeting Card Attached */}
                <motion.div 
                  initial={{ rotate: -10, y: 10 }}
                  animate={{ rotate: -6, y: 0 }}
                  className="absolute -bottom-4 -right-2 bg-amber-50 text-stone-900 px-3.5 py-2 rounded-lg shadow-xl border border-amber-300/80 max-w-[170px] transform -rotate-6 z-20"
                >
                  <p className="text-[10px] font-bold text-rose-900 mb-0.5">بطاقة إهداء مرافقة مجاناً</p>
                  <p className="text-[10px] text-stone-700 font-sans italic leading-tight">
                    "إلى أغلى إنسانة في حياتي... كادو من القلب"
                  </p>
                </motion.div>
              </div>

              {/* High impact slogan callout */}
              <div className="mt-8 text-center">
                <span className="text-base sm:text-lg font-bold text-white block font-['Cairo']">
                  "ارفد، مُد، وفرحها ديريكت!"
                </span>
                <p className="text-xs text-stone-300 mt-1 max-w-xs">
                  الهدية تجيك واجدة، مغلفة في لومبالاج فاخر، ما تكسر راسك ما تخمم في التغليف.
                </p>
              </div>

              {/* Express Delivery Badge */}
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4" />
                <span>توصيل سريع لباب المنزل في 58 ولاية</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
