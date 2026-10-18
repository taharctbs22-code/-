import React from 'react';
import { Star, ShieldCheck, MapPin } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const reviews = [
    {
      name: 'كريم م.',
      location: 'الجزائر العاصمة (الدرارية)',
      date: 'منذ يومين',
      rating: 5,
      color: 'الأسود الملكي',
      comment: 'والله غير سلعة توب دي توب! شريتها كادو لزوجتي في عيد زواجنا، الفكرة تاع لومبالاج بالكرافاطة الحمراء وحدها تسوى الذهب، ريحتني كامل من التغليف. والديزاين تاع الميني ساك عجبها بزاف والصوت نقي وواضح. يعطيك الصحة خويا.',
    },
    {
      name: 'أمين ب.',
      location: 'وهران (بئر الجير)',
      date: 'منذ 4 أيام',
      rating: 5,
      color: 'الوردي الأنثوي (الروز)',
      comment: 'اللون الروز يدي العقل فالواقع خير من التصاور! شريتها هدية لخطيبتي فرحت بيها لدرجة ما تصوروهاش. التوصيل كان في 48 ساعة لباب الدار، تحية لفريق العمل على الاحترافية.',
    },
    {
      name: 'سمير ق.',
      location: 'قسنطينة (علي منجلي)',
      date: 'منذ أسبوع',
      rating: 5,
      color: 'الأبيض النقي',
      comment: 'صح كيما قال الإشهار: ارفد ومد ديريكت! الكادو جاني مغلف نقي، ودرتو لها مفاجأة. البطارية تشد مليح وسماعات خفاف فالودن. تستاهل كل دينار.',
    },
    {
      name: 'إسلام ز.',
      location: 'سطيف (العلمة)',
      date: 'منذ أسبوعين',
      rating: 5,
      color: 'الأسود الملكي',
      comment: 'أفضل حاجة درتوها هي هاد الديزاين المبتكر.. عيينا من الكادوات الكلاسيكية. زوجتي تستعملها يومياً في المكالمات والشغل وتدعيلكم. ربي يباركلكم في رزقكم.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-stone-900/40 border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-2">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>تقييمات وتجارب حقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Cairo']">
            واش قالوا زبائننا عبر مختلف ولايات الوطن؟
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-stone-300">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.9 / 5</span>
            <span className="text-stone-500">·</span>
            <span className="text-stone-400">+1,420 طلب تم تسليمه بنجاح</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:border-stone-700 transition-colors"
            >
              <div className="flex flex-col gap-3">
                {/* User Info & Rating */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      {review.name}
                      <span className="text-[11px] font-normal text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        مشتري موثق
                      </span>
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-stone-400 mt-1">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      <span>{review.location}</span>
                      <span>·</span>
                      <span>{review.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment Body */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2 border-t border-stone-800/80">
                  "{review.comment}"
                </p>
              </div>

              {/* Chosen Product Color tag */}
              <div className="mt-4 pt-3 border-t border-stone-800/50 flex items-center justify-between text-[11px] text-stone-400">
                <span>اللون المطلوب: <strong className="text-amber-300 font-semibold">{review.color}</strong></span>
                <span>توصيل سريع مع التغليف</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
