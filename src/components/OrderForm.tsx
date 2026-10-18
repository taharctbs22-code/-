import React, { useState, useId } from 'react';
import { 
  ShoppingBag, 
  Check, 
  Truck, 
  ShieldCheck, 
  Phone, 
  User, 
  MapPin, 
  FileText, 
  Gift, 
  CheckCircle2, 
  Printer, 
  X,
  MessageCircle
} from 'lucide-react';
import { ALGERIAN_WILAYAS, Wilaya } from '../data/wilayas';
import { PRODUCT_COLORS, ProductColor } from '../data/storyboard';

interface OrderFormProps {
  selectedColor: ProductColor;
  onSelectColor: (color: ProductColor) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({ selectedColor, onSelectColor }) => {
  const [selectedWilayaCode, setSelectedWilayaCode] = useState('16'); // Default Alger (16)
  const [commune, setCommune] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [giftMessage, setGiftMessage] = useState('إلى أغلى إنسانة.. كادو من القلب');
  const [includeGiftCard, setIncludeGiftCard] = useState(true);
  
  // Validation and Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<any | null>(null);

  const selectedWilaya = ALGERIAN_WILAYAS.find(w => w.code === selectedWilayaCode) || ALGERIAN_WILAYAS[15];

  // Price calculations
  const unitPrice = 4200; // Algerian Dinar
  const subtotal = quantity === 1 ? unitPrice : quantity === 2 ? 7600 : 7600 + (quantity - 2) * 3600;
  const isFreeShipping = quantity >= 2;
  const shippingFee = isFreeShipping ? 0 : selectedWilaya.shippingFee;
  const grandTotal = subtotal + shippingFee;

  const handleWilayaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWilayaCode(e.target.value);
    setCommune(''); // reset commune
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = 'يرجى كتابة الاسم واللقب بشكل واضح';
    }

    // Algerian mobile numbers typically start with 05, 06, 07 and are 10 digits
    const cleanedPhone = phoneNumber.replace(/[\s-]/g, '');
    if (!cleanedPhone || !/^(05|06|07)[0-9]{8}$/.test(cleanedPhone)) {
      newErrors.phoneNumber = 'يرجى كتابة رقم هاتف جزائري صحيح (مثال: 0661234567)';
    }

    if (!address.trim()) {
      newErrors.address = 'يرجى تحديد عنوان الاستلام أو الحي السكني';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const orderRef = `DZ-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedOrder({
        orderRef,
        fullName,
        phoneNumber,
        wilaya: selectedWilaya.nameAr,
        commune: commune || 'وسط المدينة',
        address,
        color: selectedColor.name,
        quantity,
        subtotal,
        shippingFee,
        grandTotal,
        giftMessage: includeGiftCard ? giftMessage : '',
        date: new Date().toLocaleDateString('ar-DZ', { year: 'numeric', month: 'long', day: 'numeric' })
      });
    }, 700);
  };

  return (
    <section id="order-form" className="py-20 bg-stone-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 bg-rose-950/60 border border-rose-800/50 px-3.5 py-1.5 rounded-full mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>طلب سريع ودفع عند الاستلام (COD)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Cairo']">
            استفد من العرض الحصري واطلب هديتك الآن
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            املأ الاستمارة أدناه، سنتصل بك هاتفياً لتأكيد الطلب وتوصيله مباشرة لباب منزلك في 58 ولاية.
          </p>
        </div>

        {/* The Form Grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Section (7 Cols) */}
          <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800 rounded-3xl p-6 sm:p-8 backdrop-blur-sm flex flex-col gap-6 shadow-xl">
            
            {/* 1. Color Choice */}
            <div>
              <label className="text-xs font-bold text-stone-200 block mb-2.5">
                1. اختر اللون المفضل:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {PRODUCT_COLORS.map((col) => {
                  const isSelected = selectedColor.id === col.id;
                  return (
                    <button
                      type="button"
                      key={col.id}
                      onClick={() => onSelectColor(col)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-stone-900 border-amber-400 shadow-lg ring-1 ring-amber-400/40 text-white'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div 
                        className="w-5 h-5 rounded-full mx-auto mb-1.5 border shadow"
                        style={{ backgroundColor: col.hex, borderColor: col.id === 'white' ? '#94a3b8' : '#fbbf24' }}
                      />
                      <span className="text-xs font-bold block truncate">{col.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Quantity & Bundle Offer */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-stone-200">
                  2. الكمية والعرض المميز:
                </label>
                {quantity >= 2 && (
                  <span className="text-[11px] text-amber-300 bg-amber-950/60 border border-amber-800/40 px-2.5 py-0.5 rounded-full font-semibold">
                    مبروك! حصلت على توصيل مجاني + تخفيض 800 دج
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(1)}
                  className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                    quantity === 1
                      ? 'bg-rose-950/40 border-rose-500 ring-1 ring-rose-500/40'
                      : 'bg-stone-950 border-stone-800 text-stone-400'
                  }`}
                >
                  <span className="text-xs font-bold text-white block">قطعة واحدة</span>
                  <span className="text-sm font-black text-rose-400 block mt-0.5">4,200 دج</span>
                  <span className="text-[10px] text-stone-400 block mt-0.5">علبة وكرافاطة كاملة</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQuantity(2)}
                  className={`p-3.5 rounded-xl border text-right transition-all relative overflow-hidden cursor-pointer ${
                    quantity === 2
                      ? 'bg-rose-950/40 border-amber-400 ring-1 ring-amber-400/40'
                      : 'bg-stone-950 border-stone-800 text-stone-400'
                  }`}
                >
                  <span className="absolute top-1 left-1 text-[9px] bg-amber-500 text-stone-950 px-1.5 py-0.5 rounded font-bold">
                    الأكثر طلباً
                  </span>
                  <span className="text-xs font-bold text-white block">قطعتان (2)</span>
                  <span className="text-sm font-black text-amber-400 block mt-0.5">7,600 دج</span>
                  <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">توصيل مجاني</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQuantity(3)}
                  className={`p-3.5 rounded-xl border text-right transition-all cursor-pointer ${
                    quantity === 3
                      ? 'bg-rose-950/40 border-rose-500 ring-1 ring-rose-500/40'
                      : 'bg-stone-950 border-stone-800 text-stone-400'
                  }`}
                >
                  <span className="text-xs font-bold text-white block">3 قطع (عائلي)</span>
                  <span className="text-sm font-black text-amber-400 block mt-0.5">11,200 دج</span>
                  <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">توصيل مجاني</span>
                </button>
              </div>
            </div>

            {/* 3. Customer Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1.5">
                  الاسم واللقب *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-500 absolute top-3.5 right-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: محمد العمري"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl pr-10 pl-3 py-2.5 text-xs sm:text-sm text-white placeholder-stone-600 focus:outline-none focus:border-rose-500"
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1.5">
                  رقم الهاتف (للاتصال والتأكيد) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-500 absolute top-3.5 right-3.5 pointer-events-none" />
                  <input
                    type="tel"
                    dir="ltr"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="0661234567"
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-10 py-2.5 text-xs sm:text-sm text-white placeholder-stone-600 focus:outline-none focus:border-rose-500 text-left font-mono"
                  />
                </div>
                {errors.phoneNumber && <p className="text-[11px] text-rose-500 mt-1">{errors.phoneNumber}</p>}
              </div>
            </div>

            {/* 4. Wilaya & Commune */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1.5">
                  الولاية (58 ولاية) *
                </label>
                <select
                  value={selectedWilayaCode}
                  onChange={handleWilayaChange}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-rose-500 cursor-pointer"
                >
                  {ALGERIAN_WILAYAS.map((w) => (
                    <option key={w.code} value={w.code}>
                      {w.nameAr} ({w.nameFr})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-1.5">
                  البلدية / الدائرة
                </label>
                <select
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-rose-500 cursor-pointer"
                >
                  <option value="">اختر البلدية (اختياري)</option>
                  {selectedWilaya.communes.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 5. Address */}
            <div>
              <label className="text-xs font-semibold text-stone-300 block mb-1.5">
                العنوان الكامل / الحي السكني *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-stone-500 absolute top-3.5 right-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="مثال: حي النور، عمارة 12، الطابق 2، مقابل المسجد الكبير"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl pr-10 pl-3 py-2.5 text-xs sm:text-sm text-white placeholder-stone-600 focus:outline-none focus:border-rose-500"
                />
              </div>
              {errors.address && <p className="text-[11px] text-rose-500 mt-1">{errors.address}</p>}
            </div>

            {/* 6. Gift Card Option */}
            <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeGiftCard}
                  onChange={(e) => setIncludeGiftCard(e.target.checked)}
                  className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500 bg-stone-900 border-stone-700"
                />
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-400" />
                  إضافة بطاقة إهداء مخصصة ومجانية داخل العلبة
                </span>
              </label>

              {includeGiftCard && (
                <div className="mt-3">
                  <textarea
                    rows={2}
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    placeholder="اكتب العبارة أو الإهداء الذي تريد طباعته على البطاقة المرفقة..."
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl p-3 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Order Summary & Submit Button (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white border-b border-stone-800 pb-3 flex items-center justify-between font-['Cairo']">
              <span>ملخص الطلب والفاتورة</span>
              <span className="text-xs font-normal text-stone-400 font-mono">DZD (دج)</span>
            </h3>

            {/* Summary List */}
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center text-stone-300">
                <span>المنتج:</span>
                <span className="font-semibold text-white">سماعات ميني ساك فاخرة</span>
              </div>
              <div className="flex justify-between items-center text-stone-300">
                <span>اللون المختار:</span>
                <span className="font-bold text-amber-400">{selectedColor.name}</span>
              </div>
              <div className="flex justify-between items-center text-stone-300">
                <span>الكمية:</span>
                <span className="font-mono text-white">{quantity} علبة جاهزة</span>
              </div>
              <div className="flex justify-between items-center text-stone-300">
                <span>سعر السلعة:</span>
                <span className="font-mono font-bold text-white">{subtotal.toLocaleString()} دج</span>
              </div>
              <div className="flex justify-between items-center text-stone-300">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-stone-400" />
                  <span>توصيل ({selectedWilaya.nameAr}):</span>
                </span>
                <span className={`font-mono font-bold ${isFreeShipping ? 'text-emerald-400' : 'text-stone-300'}`}>
                  {isFreeShipping ? 'مجاني (0 دج)' : `${shippingFee} دج`}
                </span>
              </div>
              <div className="flex justify-between items-center text-stone-300">
                <span>التغليف بالكرافاطة الحمراء:</span>
                <span className="text-emerald-400 font-semibold">مجانـي (هدية العرض)</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="pt-4 border-t border-stone-800 flex justify-between items-baseline">
              <div>
                <span className="text-xs text-stone-400 block">المبلغ الإجمالي للدفع:</span>
                <span className="text-[11px] text-stone-400">تدفع نقداً للموزع عند الاستلام</span>
              </div>
              <div className="text-3xl font-black text-rose-400 font-['Cairo']">
                <span>{grandTotal.toLocaleString()}</span>
                <span className="text-base text-amber-400 font-bold mr-1">دج</span>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-2xl font-black text-base text-white bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 hover:from-rose-600 hover:to-amber-500 shadow-xl shadow-rose-950/60 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Check className="w-5 h-5 text-amber-300" />
                  <span>تأكيد الطلب الآن (الدفع عند الاستلام)</span>
                </>
              )}
            </button>

            {/* Trust Assurances */}
            <div className="space-y-2 pt-2 border-t border-stone-800/80 text-[11px] text-stone-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>معاينة العلبة والمحتوى قبل الدفع عند باب منزلك</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>ضمان استبدال حقيقي لمدة 14 يوم في حال وجود أي خلل</span>
              </div>
            </div>
          </div>
        </form>

        {/* Order Confirmation Modal */}
        {confirmedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600" />

              <button
                onClick={() => setConfirmedOrder(null)}
                className="absolute top-4 left-4 p-2 text-stone-400 hover:text-white rounded-full bg-stone-900 border border-stone-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-emerald-950 border border-emerald-500/40 rounded-full mx-auto flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo']">
                  تم تسجيل طلبك بنجاح!
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  شكراً لثقتكم. سنتصل بكم هاتفياً لتأكيد انطلاق شحنتكم.
                </p>
                <span className="inline-block mt-2 font-mono text-xs bg-stone-900 border border-stone-800 text-amber-400 px-3 py-1 rounded-lg">
                  رقم التتبع: {confirmedOrder.orderRef}
                </span>
              </div>

              {/* Receipt Details */}
              <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-4 text-xs space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-stone-400">الزبون:</span>
                  <span className="text-white font-medium">{confirmedOrder.fullName} ({confirmedOrder.phoneNumber})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">الوجهة:</span>
                  <span className="text-white font-medium">{confirmedOrder.wilaya} - {confirmedOrder.commune}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">اللون والكمية:</span>
                  <span className="text-amber-300 font-medium">{confirmedOrder.color} × {confirmedOrder.quantity}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-800">
                  <span className="text-stone-400">المبلغ الإجمالي عند الاستلام:</span>
                  <span className="text-white font-bold font-mono text-sm">{confirmedOrder.grandTotal.toLocaleString()} دج</span>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-xs font-semibold text-stone-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>طباعة وصل الطلب</span>
                </button>
                <button
                  onClick={() => setConfirmedOrder(null)}
                  className="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  إغلاق ومتابعة التسوق
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
