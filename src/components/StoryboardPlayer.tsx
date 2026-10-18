import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Volume2, 
  VolumeX, 
  Clapperboard, 
  Sparkles,
  ShoppingBag,
  Maximize2
} from 'lucide-react';
import { STORYBOARD_SCENES, PRODUCT_COLORS, ProductColor } from '../data/storyboard';
import { InteractiveSceneVisual } from './InteractiveSceneVisual';

interface StoryboardPlayerProps {
  onOrderClick: () => void;
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
}

export const StoryboardPlayer: React.FC<StoryboardPlayerProps> = ({
  onOrderClick,
  selectedColor,
  onSelectColor,
}) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const currentScene = STORYBOARD_SCENES[activeSceneIndex];
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Stop speech when component unmounts or scene changes
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  }, [activeSceneIndex]);

  // Handle Audio Speech Synthesis in Arabic
  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(currentScene.phoneticAudioText);
    utterance.lang = 'ar-SA'; // Standard Arabic locale, accessible in all browsers
    utterance.rate = 0.95; // Slightly paced for clear sales delivery
    utterance.pitch = 1.0;

    // Pick best Arabic voice if available
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.startsWith('ar') || v.name.toLowerCase().includes('arabic'));
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }

    utterance.onend = () => {
      setIsPlayingAudio(false);
      if (autoAdvance && activeSceneIndex < STORYBOARD_SCENES.length - 1) {
        setActiveSceneIndex(prev => prev + 1);
      }
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    speechRef.current = utterance;
    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleNextScene = () => {
    if (activeSceneIndex < STORYBOARD_SCENES.length - 1) {
      setActiveSceneIndex(prev => prev + 1);
    } else {
      setActiveSceneIndex(0);
    }
  };

  const handlePrevScene = () => {
    if (activeSceneIndex > 0) {
      setActiveSceneIndex(prev => prev - 1);
    }
  };

  return (
    <section id="storyboard" className="py-16 sm:py-24 bg-stone-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-rose-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 bg-rose-950/60 border border-rose-800/50 px-3.5 py-1.5 rounded-full mb-3">
            <Clapperboard className="w-3.5 h-3.5 text-rose-400" />
            <span>عرض الفيديو الإعلاني التفاعلي • سيناريو المشاهد الأربعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Cairo']">
            كيفاش تفرحها بأرقى هدية <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300">بلا تكسار راس؟</span>
          </h2>
          <p className="mt-3 text-base text-stone-400 leading-relaxed">
            استكشف سيناريو العرض خطوة بخطوة واستمع إلى الوصف الصوتي التفاعلي لتجربة فتح العلبة
          </p>
        </div>

        {/* Storyboard Container: Grid with Visual Left/Right and Script Controller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-stone-900/60 border border-stone-800 rounded-3xl p-4 sm:p-8 backdrop-blur-sm shadow-2xl">
          
          {/* Visual Showcase (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <InteractiveSceneVisual
              sceneId={currentScene.id}
              activeColor={selectedColor}
              onSelectColor={onSelectColor}
              allColors={PRODUCT_COLORS}
              isBoxOpen={isBoxOpen}
              onToggleBox={() => setIsBoxOpen(!isBoxOpen)}
            />

            {/* Visual Action & Scene Navigation Strip */}
            <div className="flex items-center justify-between gap-4 bg-stone-900/90 border border-stone-800 px-4 py-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevScene}
                  disabled={activeSceneIndex === 0}
                  className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-30 disabled:cursor-not-allowed text-stone-200 transition-colors"
                  title="المشهد السابق"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-medium text-stone-400">
                  مشهد {activeSceneIndex + 1} من {STORYBOARD_SCENES.length}
                </span>
                <button
                  onClick={handleNextScene}
                  className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                  title="المشهد التالي"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              {/* Audio Playback Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleToggleAudio}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isPlayingAudio
                      ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/50 animate-pulse'
                      : 'bg-stone-800 hover:bg-stone-700 text-amber-300'
                  }`}
                >
                  {isPlayingAudio ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>إيقاف التعليق</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>استمع للتعليق الصوتي (بالدارجة)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Script Details & Storyboard Steps (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
            {/* Step Tabs */}
            <div className="grid grid-cols-4 gap-2">
              {STORYBOARD_SCENES.map((scene, idx) => {
                const isActive = activeSceneIndex === idx;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setActiveSceneIndex(idx)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      isActive
                        ? 'bg-rose-900/60 border-rose-500 text-white shadow-md'
                        : 'bg-stone-900/80 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                    }`}
                  >
                    <span className="block text-[10px] text-stone-500 font-sans">مشهد 0{scene.id}</span>
                    <span className="truncate block mt-0.5">{scene.tag}</span>
                  </button>
                );
              })}
            </div>

            {/* Current Scene Script Box */}
            <div className="bg-stone-950/70 border border-stone-800 rounded-2xl p-5 sm:p-6 flex flex-col gap-4">
              {/* Stage Direction (إرشادات التصوير والكاميرا) */}
              <div className="flex items-start gap-2.5 pb-3 border-b border-stone-800/80">
                <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <div>
                  <span className="text-[11px] font-semibold text-amber-400 block uppercase tracking-wider">
                    حركة الكاميرا والإخراج:
                  </span>
                  <p className="text-xs text-stone-300 font-medium italic mt-0.5">
                    ({currentScene.stageDirection})
                  </p>
                </div>
              </div>

              {/* Spoken Pitch (نص الإشهار بالدارجة الجزائرية) */}
              <div>
                <span className="text-[11px] font-semibold text-rose-400 block mb-1">
                  نص الإشهار (أنت تقول):
                </span>
                <blockquote className="text-sm sm:text-base text-stone-100 font-medium leading-relaxed bg-stone-900/50 p-4 rounded-xl border border-stone-800/80">
                  "{currentScene.speakerText}"
                </blockquote>
              </div>

              {/* Key Value Point */}
              <div className="p-3 bg-rose-950/30 border border-rose-900/40 rounded-xl flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-stone-200">
                  {currentScene.keyTakeaway}
                </span>
              </div>
            </div>

            {/* Quick Purchase Incentive from Scene 4 */}
            <div className="flex flex-col gap-3">
              <button
                onClick={onOrderClick}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 hover:from-rose-600 hover:to-amber-500 shadow-xl shadow-rose-950/60 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>اطلبها الآن مغلفة وجاهزة (4,200 دج)</span>
              </button>
              <div className="flex items-center justify-center gap-3 text-[11px] text-stone-400">
                <span>توصيل لباب المنزل في 58 ولاية</span>
                <span>·</span>
                <span>الدفع عند الاستلام بعد المعاينة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
