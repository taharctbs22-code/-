import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Play, 
  Gift, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Heart,
  Volume2,
  ChevronDown
} from 'lucide-react';
import { Header } from './components/Header';
import { StoryboardPlayer } from './components/StoryboardPlayer';
import { ProductVisualizer } from './components/ProductVisualizer';
import { GiftPackagingShowcase } from './components/GiftPackagingShowcase';
import { CustomerReviews } from './components/CustomerReviews';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';
import { PRODUCT_COLORS, ProductColor } from './data/storyboard';

export default function App() {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(PRODUCT_COLORS[0]);

  const scrollToOrder = () => {
    const el = document.getElementById('order-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStoryboard = () => {
    const el = document.getElementById('storyboard');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-['Cairo',sans-serif]">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Header onOrderClick={scrollToOrder} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(190,18,60,0.22),transparent_70%)] pointer-events-none" />
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Copy (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-start text-right">
                
                {/* Quiet Kicker Tag (No pill capsule) */}
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-4">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>الهدية الأكثر طلباً وتميزاً في الجزائر</span>
                  <span aria-hidden="true" className="text-stone-600">·</span>
                  <span className="text-rose-400 font-medium">تغليف فاخر مجاناً</span>
                </div>

                {/* Primary Hero Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] font-['Cairo'] text-balance">
                  كيت مان بلوتوث فاخر على شكل{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-amber-300">
                    "ميني ساك"
                  </span>
                  .. كادو شباب، هِمّة وكلاص!
                </h1>

                {/* Hero Pitch Body */}
                <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
                  شوف هاد لومبالاج... <strong className="text-white font-bold">لومبالاج وحدو ينطق!</strong> عييت من الكادوات تاع ديما: ساعة، سنسلة، ولا ريحة؟ هادي حاجة سبيسيال تحتاجها المرأة كل يوم وفي أي وقت، وكي تهديها لها، راح تتفكرك في كل دقيقة تستعملها فيها!
                </p>

                {/* Micro Features Inline */}
                <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-stone-400">
                  <span className="flex items-center gap-1.5 text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>3 ألوان ملكية تدي العقل</span>
                  </span>
                  <span aria-hidden="true" className="text-stone-700">·</span>
                  <span className="flex items-center gap-1.5 text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>توصيل 58 ولاية لباب المنزل</span>
                  </span>
                  <span aria-hidden="true" className="text-stone-700">·</span>
                  <span className="flex items-center gap-1.5 text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>الدفع نقداً بعد المعاينة</span>
                  </span>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <button
                    onClick={scrollToOrder}
                    className="px-8 py-4 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 hover:from-rose-600 hover:to-amber-500 shadow-xl shadow-rose-950/60 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
                  >
                    <ShoppingBag className="w-5 h-5 text-amber-300" />
                    <span>طلب الهدية مغلفة وجاهزة (4,200 دج)</span>
                  </button>

                  <button
                    onClick={scrollToStoryboard}
                    className="px-6 py-4 rounded-xl text-sm font-bold text-stone-200 bg-stone-900/90 hover:bg-stone-800 border border-stone-800 hover:border-stone-700 transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <Play className="w-4 h-4 text-rose-400" />
                    <span>شاهد الإشهار التفاعلي (4 مشاهد)</span>
                  </button>
                </div>

                {/* Pricing Notice */}
                <div className="mt-4 flex items-center gap-3 text-xs text-stone-400">
                  <span className="text-stone-500 line-through">6,500 دج</span>
                  <span className="text-white font-bold text-sm">4,200 دج فقط</span>
                  <span className="text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                    وفر 2,300 دج اليوم
                  </span>
                </div>
              </div>

              {/* Hero Visual Spotlight (5 Cols) */}
              <div className="lg:col-span-5 relative flex flex-col items-center">
                {/* Glowing Base */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-rose-600/20 via-amber-500/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

                {/* Luxury Showcase Card */}
                <div className="relative w-full rounded-3xl bg-gradient-to-b from-stone-900 via-stone-950 to-stone-900 border border-stone-800 p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between w-full pb-4 border-b border-stone-800/80 mb-6">
                    <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                      <Gift className="w-4 h-4" />
                      لومبالاج أحمر بكرافاطة فاخرة
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">جاهز للتسليم ديريكت</span>
                  </div>

                  {/* Visual Gift Composition */}
                  <div className="relative w-full max-w-[280px] h-64 flex items-center justify-center">
                    
                    {/* The Red Velvet Box with Gold Tie */}
                    <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-rose-800 via-rose-900 to-stone-950 border-2 border-amber-400/50 shadow-2xl p-2 flex items-center justify-center overflow-hidden">
                      {/* Ribbon */}
                      <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-amber-400/90 via-amber-300 to-amber-500/90 shadow-md" />
                      <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-amber-400/90 via-amber-300 to-amber-500/90 shadow-md" />
                      
                      {/* Bow Tie Center */}
                      <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 border border-amber-200 shadow-xl flex items-center justify-center">
                        <Heart className="w-6 h-6 text-stone-950 fill-stone-950" />
                      </div>
                    </div>

                    {/* Miniature Handbag Earbuds overlay peek */}
                    <div className="absolute -bottom-3 -left-3 bg-stone-950/90 border border-stone-800 rounded-2xl p-3 shadow-2xl flex items-center gap-3 backdrop-blur-md">
                      <div className="w-10 h-10 rounded-xl bg-stone-900 border border-amber-400/40 flex items-center justify-center">
                        <div className="w-6 h-5 border-t-2 border-x-2 border-amber-400 rounded-t-full -mb-1" />
                        <div className="w-6 h-4 bg-stone-800 rounded-sm border border-stone-700" />
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-bold text-white block">ميني ساك TWS</span>
                        <span className="text-[10px] text-amber-400 block">3 ألوان متوفرة</span>
                      </div>
                    </div>
                  </div>

                  {/* Slogan pill */}
                  <div className="mt-8 pt-4 border-t border-stone-800/80 w-full">
                    <p className="text-xs text-stone-300 font-medium">
                      "ما تزيد تكسر راسك ما تزيد تخمم.. ارفد، مُد، وفرحها ديريكت!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. INTERACTIVE STORYBOARD (السيناريو الإعلاني الكامل) */}
        <StoryboardPlayer
          onOrderClick={scrollToOrder}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
        />

        {/* 2. 360° UNBOXING & COLOR VISUALIZER */}
        <ProductVisualizer
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          allColors={PRODUCT_COLORS}
          onOrderClick={scrollToOrder}
        />

        {/* 3. GIFT PACKAGING & NO WRAPPING HASSLE */}
        <GiftPackagingShowcase onOrderClick={scrollToOrder} />

        {/* 4. CUSTOMER REVIEWS FROM ALGERIAN WILAYAS */}
        <CustomerReviews />

        {/* 5. FAST COD ORDER FORM FOR 58 WILAYAS */}
        <OrderForm
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
        />
      </main>

      {/* Discrete Mobile Sticky Order Bar (Under 15% Viewport Cap) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[11px] text-stone-400">سماعات ميني ساك</span>
          <span className="text-sm font-bold text-white font-['Cairo']">
            4,200 <span className="text-xs text-amber-400">دج</span>
          </span>
        </div>
        <button
          onClick={scrollToOrder}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-700 to-amber-600 text-white font-bold text-xs shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>اطلب الآن (الدفع عند الاستلام)</span>
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
