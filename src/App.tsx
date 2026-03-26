/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronLeft,
  ShoppingBag,
  Star,
  MessageCircle
} from "lucide-react";
import React, { useState } from "react";

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const RAM_TYPES = [
  {
    id: 1,
    name: "خروف صردي",
    description: "ملك الأغنام في المغرب، يتميز بجودة لحمه العالية وشكله المميز.",
    price: "3,500 - 5,500 درهم",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/M%C3%A2le_de_race_Sardi.JPG",
    tag: "الأكثر طلباً"
  },
  {
    id: 2,
    name: "خروف بلدي",
    description: "يتميز بمذاقه الأصيل وجودته العالية، من أفضل المراعي المغربية.",
    price: "2,800 - 4,500 درهم",
    image: "https://media.elbalad.news/2024/10/large/566/1/283.jpg",
    tag: "جودة أصيلة"
  }
];

const FEATURES = [
  {
    title: "فحص بيطري شامل",
    description: "جميع الأضاحي تخضع لفحص دقيق لضمان سلامتها وخلوها من العيوب الشرعية.",
    icon: ShieldCheck
  },
  {
    title: "توصيل لباب البيت",
    description: "نوفر خدمة التوصيل السريع والآمن في سيارات مجهزة لضمان راحة عملائنا.",
    icon: Truck
  },
  {
    title: "ذبح وتغليف احترافي",
    description: "خدمة اختيارية للذبح في المسالخ المعتمدة مع تغليف صحي حسب الطلب.",
    icon: CheckCircle2
  }
];

export default function App() {
  const [formData, setFormData] = useState({ name: "", phone: "", type: "خروف صردي" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to a backend
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D2D2D] font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#5A5A40] rounded-full flex items-center justify-center text-white">
                <ShoppingBag size={18} className="md:w-5 md:h-5" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-serif text-[#5A5A40]">خروف العيد</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              <a href="#home" className="hover:text-[#5A5A40] transition-colors">الرئيسية</a>
              <a href="#types" className="hover:text-[#5A5A40] transition-colors">أنواع الأضاحي</a>
              <a href="#features" className="hover:text-[#5A5A40] transition-colors">مميزاتنا</a>
              <a href="#order" className="bg-[#5A5A40] text-white px-6 py-2 rounded-full hover:bg-[#4A4A35] transition-all">احجز الآن</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#5A5A40]"
                aria-label="القائمة"
              >
                {isMenuOpen ? <ChevronLeft className="rotate-90" /> : <div className="space-y-1.5 w-6">
                  <div className="h-0.5 bg-[#5A5A40] w-full"></div>
                  <div className="h-0.5 bg-[#5A5A40] w-full"></div>
                  <div className="h-0.5 bg-[#5A5A40] w-full"></div>
                </div>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-[#E5E5E1] px-4 py-6 space-y-4"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">الرئيسية</a>
            <a href="#types" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">أنواع الأضاحي</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">مميزاتنا</a>
            <a href="#order" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#5A5A40] text-white px-6 py-3 rounded-xl font-bold">احجز الآن</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-right"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] text-xs md:text-sm font-bold mb-4 md:mb-6">
                عيد أضحى مبارك 🌙 - عروض حصرية للمغاربة
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 md:mb-8">
                أضحيتك <span className="text-[#5A5A40]">بأمان</span> وراحة بال
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                نوفر لك أجود أنواع الأضاحي المغربية (صردي، بلدي) المختارة بعناية فائقة، مع ضمان السلامة والالتزام بالشروط الشرعية، وتوصيلها حتى باب منزلك.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#order" className="px-8 py-4 bg-[#5A5A40] text-white rounded-full text-lg font-bold hover:shadow-xl hover:shadow-[#5A5A40]/20 transition-all flex items-center justify-center gap-2">
                  احجز أضحيتك الآن <ChevronLeft size={20} />
                </a>
                <a href="#types" className="px-8 py-4 border-2 border-[#5A5A40] text-[#5A5A40] rounded-full text-lg font-bold hover:bg-[#5A5A40]/5 transition-all text-center">
                  تصفح الأنواع والأسعار
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/M%C3%A2le_de_race_Sardi.JPG" 
                  alt="خروف صردي مغربي" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold">أكثر من 5000 عائلة مغربية وثقت بنا العام الماضي</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">لماذا تختار "خروف العيد"؟</h2>
            <div className="h-1 w-20 bg-[#5A5A40] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {FEATURES.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-[#FDFCF8] border border-[#E5E5E1] text-center"
              >
                <div className="w-16 h-16 bg-[#5A5A40]/10 rounded-2xl flex items-center justify-center text-[#5A5A40] mx-auto mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="types" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-right">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">أجود السلالات المغربية</h2>
              <p className="text-gray-600">اختر ما يناسبك من تشكيلتنا المختارة بعناية من الضيعات المغربية</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-[#5A5A40] text-white rounded-full text-sm font-bold">الكل</span>
              <span className="px-4 py-2 bg-white border border-[#E5E5E1] rounded-full text-sm font-bold hover:bg-gray-50 cursor-pointer">صردي</span>
              <span className="px-4 py-2 bg-white border border-[#E5E5E1] rounded-full text-sm font-bold hover:bg-gray-50 cursor-pointer">بلدي</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {RAM_TYPES.map((ram) => (
              <motion.div 
                key={ram.id}
                className="group bg-white rounded-[2rem] overflow-hidden border border-[#E5E5E1] shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={ram.image} 
                    alt={ram.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#5A5A40]">
                    {ram.tag}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{ram.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{ram.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                    <span className="text-lg font-bold text-[#5A5A40]">{ram.price}</span>
                    <button 
                      onClick={() => {
                        setFormData({...formData, type: ram.name});
                        document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-10 h-10 rounded-full bg-[#5A5A40] text-white flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="احجز هذا النوع"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-16 md:py-24 bg-[#5A5A40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="text-center lg:text-right">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8">احجز أضحيتك الآن</h2>
              <p className="text-white/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                لا تنتظر حتى اللحظات الأخيرة. احجز الآن لضمان توفر النوع المفضل لديك والحصول على أفضل الأسعار في السوق المغربي. سنقوم بالتواصل معك لتأكيد كافة التفاصيل.
              </p>
              <div className="space-y-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">للاتصال المباشر (يوسف)</p>
                    <div className="flex flex-col items-center lg:items-start gap-2">
                      <p className="text-xl font-bold" dir="ltr">+212 613 148 166</p>
                      <div className="flex gap-2">
                        <a 
                          href="tel:+212613148166" 
                          className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full transition-colors inline-flex items-center gap-2"
                        >
                          <Phone size={14} /> اتصل الآن
                        </a>
                        <a 
                          href="https://wa.me/212613148166" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-1 rounded-full transition-colors inline-flex items-center gap-2"
                        >
                          <WhatsAppIcon size={14} /> واتساب
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">مقرنا الرئيسي</p>
                    <p className="text-xl font-bold">مدينة هوارة، سوس ماسة</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 text-[#2D2D2D] shadow-2xl">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">تم استلام طلبك بنجاح!</h3>
                  <p className="text-gray-600">سيتواصل معك يوسف في أقرب وقت ممكن لتأكيد الحجز وتحديد موعد التوصيل.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-[#5A5A40] font-bold underline"
                  >
                    إرسال طلب آخر
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] transition-all"
                      placeholder="أدخل اسمك هنا"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">رقم الهاتف المغربي</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] transition-all text-left"
                      placeholder="06XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">نوع الأضحية المفضل</label>
                    <select 
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] transition-all appearance-none"
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option>خروف صردي</option>
                      <option>خروف بلدي</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#5A5A40] text-white rounded-2xl text-lg font-bold hover:bg-[#4A4A35] transition-all shadow-lg shadow-[#5A5A40]/20"
                  >
                    تأكيد طلب الحجز
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner Section */}
      <section className="py-16 bg-[#FDFCF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#5A5A40]/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-[#5A5A40]/10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#5A5A40] rounded-full flex items-center justify-center text-white text-4xl font-serif">
              ي
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-2">صاحب الضيعة: يوسف</h3>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                "نحن في ضيعتنا نحرص على تربية الأغنام بطريقة طبيعية وصحية لضمان جودة اللحم وسلامة الأضحية. يسعدنا استقبالكم وخدمتكم لتوفير أفضل تجربة لعيد الأضحى."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/212613148166" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="تواصل معنا عبر واتساب"
      >
        <WhatsAppIcon size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5A5A40] rounded-full flex items-center justify-center text-white">
                <ShoppingBag size={16} />
              </div>
              <span className="text-xl font-bold font-serif text-[#5A5A40]">خروف العيد</span>
            </div>
            <p className="text-gray-500 text-sm">© 2026 جميع الحقوق محفوظة لشركة خروف العيد المغربية</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#5A5A40] transition-colors" aria-label="انستغرام"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#5A5A40] transition-colors" aria-label="فيسبوك"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#5A5A40] transition-colors" aria-label="تويتر"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
