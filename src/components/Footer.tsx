import React from 'react';
import { Sparkles, Phone, MessageCircle, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800/80 pt-16 pb-12 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-stone-800/80">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Cairo']">توصيل سريع 58 ولاية</h4>
              <p className="text-[11px] text-stone-400">توصيل خلال 24 إلى 48 ساعة لباب المنزل</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Cairo']">الدفع عند الاستلام</h4>
              <p className="text-[11px] text-stone-400">افحص طلبيتك وتأكد منها قبل أن تدفع ديناراً واحداً</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-['Cairo']">ضمان 14 يوم للاستبدال</h4>
              <p className="text-[11px] text-stone-400">خدمة ما بعد البيع ومرافقة دائمة لزبائننا</p>
            </div>
          </div>
        </div>

        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-white font-['Cairo']">
              سماعات ميني ساك الفاخرة | Mini Sac TWS Luxe Edition
            </span>
          </div>

          <div className="flex items-center gap-6 text-stone-400 text-xs">
            <a href="#storyboard" className="hover:text-stone-200 transition-colors">سيناريو الإشهار</a>
            <a href="#unboxing" className="hover:text-stone-200 transition-colors">مواصفات السماعات</a>
            <a href="#colors" className="hover:text-stone-200 transition-colors">الألوان المتوفرة</a>
            <a href="#order-form" className="hover:text-stone-200 transition-colors">طلب المنتج</a>
          </div>

          <div className="flex items-center gap-4 text-stone-300">
            <span className="text-xs font-mono">خدمة الزبائن: 0550 12 34 56</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة. تم تجهيز العرض بالدارجة الجزائرية للمنتجات الحصرية.</p>
          <p className="text-stone-400">التوصيل متوفر لجميع ربوع الوطن من الشمال إلى أقصى الجنوب.</p>
        </div>
      </div>
    </footer>
  );
};
