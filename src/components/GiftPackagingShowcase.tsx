import React from 'react';
import { Gift, CheckCircle2, Heart, Sparkles, Clock, PackageCheck, Truck } from 'lucide-react';

interface GiftPackagingShowcaseProps {
  onOrderClick: () => void;
}

export const GiftPackagingShowcase: React.FC<GiftPackagingShowcaseProps> = ({ onOrderClick }) => {
  const comparisonItems = [
    {
      traditional: 'ساعة يد عادية أو مقلدة',
      miniSac: 'سماعات بلوتوث على شكل ميني ساك فاخر بتصميم حصري تتباهى به',
    },
    {
      traditional: 'سنسلة أو إكسسوار قديم تلبسه مرات قليلة',
      miniSac: 'تحتاجها يومياً في المكالمات، الشغل، السفر والرياضة وتتذكرك في كل دقيقة',
    },
    {
      traditional: 'ريحة (عطر) يخلص بعد أسابيع أو ما يعجبهاش ذوقه',
      miniSac: 'جهاز عملي راقي يدوم طويلاً بصوت Hi-Fi وبطارية تدوم 24 ساعة',
    },
    {
      traditional: 'شقى البحث عن ورق التغليف وأكياس الهدايا ومصاريف إضافية',
      miniSac: 'تغليف ملكي جاهز مجاناً (علبة حمراء + كرافاطة + بطاقة إهداء) — ارفد ومُد!',
    },
  ];

  const packageContents = [
    { title: 'العلبة الحمراء المخملية الملكية', desc: 'كرتون مقوى فاخر مغطى بطبقة مخملية فاخرة تدوم طويلاً' },
    { title: 'كرافاطة وشريط الحرير الأحمر الفخم', desc: 'عقدة شريط حريري أنيق باللون القرمزي الملكي مع لمسات ذهبية' },
    { title: 'سماعات ميني ساك (باللون المختار)', desc: 'حقيبة شحن مصغرة بسلسلة ذهبية أنيقة مع سماعتين لاسلكيتين' },
    { title: 'بطاقة إهداء مخصصة مجانية', desc: 'بطاقة كرتونية أنيقة مطبوع عليها رسالتك الخاصة إلى من تحب' },
    { title: 'كابل شحن سريع Type-C مع سدادات مريحة', desc: 'شاحن متوافق وسدادات سيليكون طبية لراحة تامة للأذن' },
    { title: 'كتيب التعليمات وضمان الاستبدال', desc: 'دليل استخدام سهل مع ضمان تجربة واستبدال لمدة 14 يوم' },
  ];

  return (
    <section className="py-20 bg-stone-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 bg-rose-950/60 border border-rose-800/50 px-3.5 py-1.5 rounded-full mb-3">
            <Gift className="w-3.5 h-3.5 text-rose-400" />
            <span>ارتاح من شقى التغليف والتخمام</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Cairo']">
            وعلاش هادي <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-amber-200">الهدية المثالية؟</span>
          </h2>
          <p className="mt-4 text-base text-stone-400 leading-relaxed">
            "عييت من الكادوات تاع ديما: ساعة، سنسلة، ولا ريحة؟ هادي حاجة سبيسيال تحتاجها المرأة كل يوم، وكي تهديها لها راح تتفكرك في كل دقيقة!"
          </p>
        </div>

        {/* Comparison: Traditional Gifts vs Mini Sac Handbag Earbuds */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Cairo']">
              مقارنة صريحة: هدايا الروتين المكررة مقابل كادو "ميني ساك"
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              الفرق بين هدية تُنسى في الخزانة.. وهدية تبهجها وتستعملها يومياً
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* The Old Way */}
            <div className="bg-stone-950/80 border border-stone-800 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-stone-800">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-600" />
                <h4 className="text-sm font-bold text-stone-400">الكادوات تاع ديما (الروتين):</h4>
              </div>
              <ul className="space-y-4">
                {comparisonItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-400">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>{item.traditional}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Mini Sac Way */}
            <div className="bg-gradient-to-br from-rose-950/40 via-stone-900 to-stone-950 border border-rose-800/60 rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-rose-800/40">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h4 className="text-sm font-bold text-amber-300">سماعات ميني ساك مع العلبة الحمراء:</h4>
              </div>
              <ul className="space-y-4">
                {comparisonItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.miniSac}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What Comes In The Box Strip */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Cairo']">
              محتويات علبة الكادو الكاملة
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              كل شيء مجهز ومغلف بعناية فائقة لتسليمه مباشرة بدون أي عناء
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageContents.map((content, idx) => (
              <div 
                key={idx}
                className="bg-stone-900/40 border border-stone-800 hover:border-amber-400/40 rounded-2xl p-5 transition-colors group flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-mono text-xs font-bold">0{idx + 1}.</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {content.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {content.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Scene 4 Highlight Banner: ارفد، مُد، وفرحها ديريكت! */}
        <div className="relative rounded-3xl bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 p-8 sm:p-12 text-center shadow-2xl border border-rose-700/50 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-4">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest bg-stone-950/40 px-3.5 py-1 rounded-full border border-amber-300/30">
              توصيل مضمون وسريع
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white font-['Cairo']">
              "ارفد، مُد، وفرحها ديريكت!"
            </h3>
            <p className="text-sm sm:text-base text-rose-100/90 leading-relaxed">
              ما تزيد تكسر راسك ما تزيد تخمم.. الكادو يجيك واجد ومغلف فهاد لومبالاج الشاب.
              الدفع عند الاستلام مع إمكانية فتح الطرد والتأكد من سلامته قبل الدفع للموزع.
            </p>

            <button
              onClick={onOrderClick}
              className="mt-4 px-8 py-4 rounded-xl font-extrabold text-base text-stone-950 bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 hover:from-amber-200 hover:to-amber-300 shadow-xl shadow-stone-950/50 active:scale-95 transition-all cursor-pointer"
            >
              اطلب الآن واستفد من التغليف الفاخر مجاناً
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
