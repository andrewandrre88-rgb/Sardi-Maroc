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
  MessageCircle,
  X
} from "lucide-react";
import React, { useState } from "react";

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_types: "أنواع الأضاحي",
    nav_features: "مميزاتنا",
    nav_order: "احجز الآن",
    hero_badge: "عيد أضحى مبارك 🌙 - عروض حصرية للمغاربة",
    hero_title_1: "أضحيتك ",
    hero_title_2: "بأمان",
    hero_title_3: " وراحة بال",
    hero_desc: "نوفر لك أجود أنواع الأضاحي المغربية (صردي، بلدي) المختارة بعناية فائقة، مع ضمان السلامة والالتزام بالشروط الشرعية، وتوصيلها حتى باب منزلك.",
    hero_cta_order: "احجز أضحيتك الآن",
    hero_cta_types: "تصفح الأنواع والأسعار",
    hero_trust: "أكثر من 5000 عائلة مغربية وثقت بنا العام الماضي",
    features_title: "لماذا تختار \"خروف العيد\"؟",
    feature_1_title: "فحص بيطري شامل",
    feature_1_desc: "جميع الأضاحي تخضع لفحص دقيق لضمان سلامتها وخلوها من العيوب الشرعية.",
    feature_2_title: "توصيل لباب البيت",
    feature_2_desc: "نوفر خدمة التوصيل السريع والآمن في سيارات مجهزة لضمان راحة عملائنا.",
    feature_3_title: "ذبح وتغليف احترافي",
    feature_3_desc: "خدمة اختيارية للذبح في المسالخ المعتمدة مع تغليف صحي حسب الطلب.",
    types_title: "أجود السلالات المغربية",
    types_desc: "اختر ما يناسبك من تشكيلتنا المختارة بعناية من الضيعات المغربية",
    filter_all: "الكل",
    filter_sardi: "صردي",
    filter_beldi: "بلدي",
    ram_sardi_name: "خروف صردي",
    ram_sardi_desc: "ملك الأغنام في المغرب، يتميز بجودة لحمه العالية وشكله المميز.",
    ram_beldi_name: "خروف بلدي",
    ram_beldi_desc: "يتميز بمذاقه الأصيل وجودته العالية، من أفضل المراعي المغربية.",
    tag_popular: "الأكثر طلباً",
    tag_authentic: "جودة أصيلة",
    currency: "درهم",
    order_title: "احجز أضحيتك الآن",
    order_desc: "لا تنتظر حتى اللحظات الأخيرة. احجز الآن لضمان توفر النوع المفضل لديك والحصول على أفضل الأسعار في السوق المغربي. سنقوم بالتواصل معك لتأكيد كافة التفاصيل.",
    contact_direct: "للإتصال المباشر (يوسف)",
    call_now: "اتصل الآن",
    whatsapp: "واتساب",
    location_title: "مقرنا الرئيسي",
    location_value: "مدينة هوارة، سوس ماسة",
    success_title: "تم استلام طلبك بنجاح!",
    success_desc: "سيتواصل معك يوسف في أقرب وقت ممكن لتأكيد الحجز وتحديد موعد التوصيل.",
    send_another: "إرسال طلب آخر",
    form_name: "الاسم الكامل",
    form_name_placeholder: "أدخل اسمك هنا",
    form_phone: "رقم الهاتف المغربي",
    form_type: "نوع الأضحية المفضل",
    form_submit: "تأكيد طلب الحجز",
    logo_name: "خروف العيد",
    price_sardi: "3,500 - 5,500 درهم",
    price_beldi: "2,800 - 4,500 درهم",
    owner_title: "صاحب الضيعة: يوسف",
    owner_quote: "\"نحن في ضيعتنا نحرص على تربية الأغنام بطريقة طبيعية وصحية لضمان جودة اللحم وسلامة الأضحية. يسعدنا استقبالكم وخدمتكم لتوفير أفضل تجربة لعيد الأضحى.\"",
    footer_rights: "جميع الحقوق محفوظة لشركة خروف العيد المغربية",
    whatsapp_msg: "السلام عليكم يوسف، أريد حجز أضحية:\n\n*الاسم:* {name}\n*الهاتف:* {phone}\n*النوع:* {type}",
    lang_toggle: "FR",
    dir: "rtl"
  },
  fr: {
    nav_home: "Accueil",
    nav_types: "Nos Moutons",
    nav_features: "Avantages",
    nav_order: "Réserver",
    hero_badge: "Aïd Adha Moubarak 🌙 - Offres Exclusives",
    hero_title_1: "Votre sacrifice ",
    hero_title_2: "en sécurité",
    hero_title_3: " et sérénité",
    hero_desc: "Nous proposons les meilleures races marocaines (Sardi, Beldi) sélectionnées avec soin, garantissant santé et conformité religieuse, livrées à domicile.",
    hero_cta_order: "Réserver maintenant",
    hero_cta_types: "Types et Prix",
    hero_trust: "Plus de 5000 familles nous ont fait confiance l'an dernier",
    features_title: "Pourquoi choisir \"Khrouf L'Aïd\" ?",
    feature_1_title: "Contrôle vétérinaire",
    feature_1_desc: "Tous nos moutons subissent un examen rigoureux pour garantir leur santé et conformité.",
    feature_2_title: "Livraison à domicile",
    feature_2_desc: "Service de livraison rapide et sécurisé dans des véhicules équipés pour votre confort.",
    feature_3_title: "Abattage professionnel",
    feature_3_desc: "Service optionnel d'abattage certifié avec emballage hygiénique sur demande.",
    types_title: "Les meilleures races",
    types_desc: "Choisissez parmi notre sélection rigoureuse issue des fermes marocaines",
    filter_all: "Tout",
    filter_sardi: "Sardi",
    filter_beldi: "Beldi",
    ram_sardi_name: "Mouton Sardi",
    ram_sardi_desc: "Le roi des moutons au Maroc, réputé pour sa viande de qualité et son allure unique.",
    ram_beldi_name: "Mouton Beldi",
    ram_beldi_desc: "Distingué par son goût authentique et sa haute qualité, issu des meilleurs pâturages.",
    tag_popular: "Populaire",
    tag_authentic: "Authentique",
    currency: "DH",
    order_title: "Réservez maintenant",
    order_desc: "N'attendez pas la dernière minute. Réservez pour garantir la disponibilité et obtenir les meilleurs prix. Nous vous contacterons pour confirmer.",
    contact_direct: "Contact direct (Youssef)",
    call_now: "Appeler",
    whatsapp: "WhatsApp",
    location_title: "Notre siège",
    location_value: "Ville de Houara, Souss-Massa",
    success_title: "Commande réussie !",
    success_desc: "Youssef vous contactera bientôt pour confirmer et fixer la livraison.",
    send_another: "Nouvelle demande",
    form_name: "Nom complet",
    form_name_placeholder: "Votre nom",
    form_phone: "N° de téléphone",
    form_type: "Type de mouton",
    form_submit: "Confirmer la réservation",
    logo_name: "Khrouf L'Aïd",
    price_sardi: "3,500 - 5,500 DH",
    price_beldi: "2,800 - 4,500 DH",
    owner_title: "Propriétaire : Youssef",
    owner_quote: "\"Dans notre ferme, nous élevons nos moutons naturellement pour garantir qualité et santé. Nous sommes ravis de vous servir pour l'Aïd.\"",
    footer_rights: "Tous droits réservés à Khrouf L'Aïd Maroc",
    whatsapp_msg: "Bonjour Youssef, je souhaite réserver un mouton :\n\n*Nom:* {name}\n*Téléphone:* {phone}\n*Type:* {type}",
    lang_toggle: "AR",
    dir: "ltr"
  }
};

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

export default function App() {
  const [lang, setLang] = useState<"ar" | "fr">("ar");
  const t = translations[lang];

  const RAM_TYPES = [
    {
      id: 1,
      name: t.ram_sardi_name,
      description: t.ram_sardi_desc,
      price: t.price_sardi,
      image: "https://upload.wikimedia.org/wikipedia/commons/9/99/M%C3%A2le_de_race_Sardi.JPG",
      tag: t.tag_popular,
      key: "sardi"
    },
    {
      id: 2,
      name: t.ram_beldi_name,
      description: t.ram_beldi_desc,
      price: t.price_beldi,
      image: "https://media.elbalad.news/2024/10/large/566/1/283.jpg",
      tag: t.tag_authentic,
      key: "beldi"
    }
  ];

  const FEATURES = [
    {
      title: t.feature_1_title,
      description: t.feature_1_desc,
      icon: ShieldCheck
    },
    {
      title: t.feature_2_title,
      description: t.feature_2_desc,
      icon: Truck
    },
    {
      title: t.feature_3_title,
      description: t.feature_3_desc,
      icon: CheckCircle2
    }
  ];

  const [formData, setFormData] = useState({ name: "", phone: "", type: "sardi" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleLang = () => {
    setLang(lang === "ar" ? "fr" : "ar");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const typeName = formData.type === "sardi" ? t.ram_sardi_name : t.ram_beldi_name;
    const message = t.whatsapp_msg
      .replace("{name}", formData.name)
      .replace("{phone}", formData.phone)
      .replace("{type}", typeName);
    
    const whatsappUrl = `https://wa.me/212613148166?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D2D2D] font-sans" dir={t.dir}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#5A5A40] rounded-full flex items-center justify-center text-white">
                <ShoppingBag size={18} className="md:w-5 md:h-5" />
              </div>
              <span className="text-xl md:text-2xl font-bold font-serif text-[#5A5A40]">{t.logo_name}</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              <a href="#home" className="hover:text-[#5A5A40] transition-colors">{t.nav_home}</a>
              <a href="#types" className="hover:text-[#5A5A40] transition-colors">{t.nav_types}</a>
              <a href="#features" className="hover:text-[#5A5A40] transition-colors">{t.nav_features}</a>
              <button 
                onClick={toggleLang}
                className="px-3 py-1 border border-[#5A5A40] text-[#5A5A40] rounded-md hover:bg-[#5A5A40] hover:text-white transition-all font-bold"
              >
                {t.lang_toggle}
              </button>
              <a href="#order" className="bg-[#5A5A40] text-white px-6 py-2 rounded-full hover:bg-[#4A4A35] transition-all">{t.nav_order}</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="px-2 py-1 border border-[#5A5A40] text-[#5A5A40] rounded-md font-bold text-sm"
              >
                {t.lang_toggle}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#5A5A40]"
                aria-label={isMenuOpen ? "إغلاق" : "القائمة"}
              >
                {isMenuOpen ? <X size={24} /> : <div className="space-y-1.5 w-6">
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
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">{t.nav_home}</a>
            <a href="#types" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">{t.nav_types}</a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">{t.nav_features}</a>
            <a href="#order" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#5A5A40] text-white px-6 py-3 rounded-xl font-bold">{t.nav_order}</a>
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
              className={`text-center ${lang === "ar" ? "lg:text-right" : "lg:text-left"}`}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] text-xs md:text-sm font-bold mb-4 md:mb-6">
                {t.hero_badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 md:mb-8">
                {t.hero_title_1} <span className="text-[#5A5A40]">{t.hero_title_2}</span> {t.hero_title_3}
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {t.hero_desc}
              </p>
              <div className={`flex flex-col sm:flex-row justify-center ${lang === "ar" ? "lg:justify-start" : "lg:justify-start"} gap-4`}>
                <a href="#order" className="px-8 py-4 bg-[#5A5A40] text-white rounded-full text-lg font-bold hover:shadow-xl hover:shadow-[#5A5A40]/20 transition-all flex items-center justify-center gap-2">
                  {t.hero_cta_order} <ChevronLeft size={20} className={lang === "fr" ? "rotate-180" : ""} />
                </a>
                <a href="#types" className="px-8 py-4 border-2 border-[#5A5A40] text-[#5A5A40] rounded-full text-lg font-bold hover:bg-[#5A5A40]/5 transition-all text-center">
                  {t.hero_cta_types}
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
                  alt={t.ram_sardi_name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={`absolute -bottom-6 ${lang === "ar" ? "-right-6 md:right-auto md:-left-6" : "-left-6 md:left-auto md:-right-6"} bg-white p-6 rounded-2xl shadow-xl max-w-[200px]`}>
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold">{t.hero_trust}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">{t.features_title}</h2>
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
          <div className={`flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center ${lang === "ar" ? "md:text-right" : "md:text-left"}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t.types_title}</h2>
              <p className="text-gray-600">{t.types_desc}</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-2 bg-[#5A5A40] text-white rounded-full text-sm font-bold">{t.filter_all}</span>
              <span className="px-4 py-2 bg-white border border-[#E5E5E1] rounded-full text-sm font-bold hover:bg-gray-50 cursor-pointer">{t.filter_sardi}</span>
              <span className="px-4 py-2 bg-white border border-[#E5E5E1] rounded-full text-sm font-bold hover:bg-gray-50 cursor-pointer">{t.filter_beldi}</span>
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
                  <div className={`absolute top-4 ${lang === "ar" ? "right-4" : "left-4"} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#5A5A40]`}>
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
                        setFormData({...formData, type: ram.key});
                        document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-10 h-10 rounded-full bg-[#5A5A40] text-white flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label={t.hero_cta_order}
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
            <div className={`text-center ${lang === "ar" ? "lg:text-right" : "lg:text-left"}`}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8">{t.order_title}</h2>
              <p className="text-white/80 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                {t.order_desc}
              </p>
              <div className={`space-y-6 flex flex-col items-center ${lang === "ar" ? "lg:items-start" : "lg:items-start"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <p className="text-sm text-white/60">{t.contact_direct}</p>
                    <div className={`flex flex-col items-center ${lang === "ar" ? "lg:items-start" : "lg:items-start"} gap-2`}>
                      <p className="text-xl font-bold" dir="ltr">+212 613 148 166</p>
                      <div className="flex gap-2">
                        <a 
                          href="tel:+212613148166" 
                          className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full transition-colors inline-flex items-center gap-2"
                        >
                          <Phone size={14} /> {t.call_now}
                        </a>
                        <a 
                          href="https://wa.me/212613148166" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-1 rounded-full transition-colors inline-flex items-center gap-2"
                        >
                          <WhatsAppIcon size={14} /> {t.whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div className={lang === "ar" ? "text-right" : "text-left"}>
                    <p className="text-sm text-white/60">{t.location_title}</p>
                    <p className="text-xl font-bold">{t.location_value}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`bg-white rounded-[2.5rem] p-8 lg:p-12 text-[#2D2D2D] shadow-2xl border border-[#25D366]/20 ${lang === "ar" ? "text-right" : "text-left"}`}>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.success_title}</h3>
                  <p className="text-gray-600">{t.success_desc}</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-[#5A5A40] font-bold underline"
                  >
                    {t.send_another}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form_name}</label>
                    <input 
                      type="text" 
                      required
                      className={`w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] transition-all ${lang === "ar" ? "text-right" : "text-left"}`}
                      placeholder={t.form_name_placeholder}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form_phone}</label>
                    <input 
                      type="tel" 
                      required
                      className={`w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] transition-all ${lang === "ar" ? "text-left" : "text-left"}`}
                      placeholder="06XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.form_type}</label>
                    <select 
                      className={`w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] transition-all appearance-none ${lang === "ar" ? "text-right" : "text-left"}`}
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                      <option value="sardi">{t.ram_sardi_name}</option>
                      <option value="beldi">{t.ram_beldi_name}</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#25D366] text-white rounded-2xl text-lg font-bold hover:bg-[#128C7E] transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-3"
                  >
                    <WhatsAppIcon size={24} />
                    {t.form_submit}
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
          <div className={`bg-[#5A5A40]/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-[#5A5A40]/10 ${lang === "fr" ? "md:flex-row-reverse" : ""}`}>
            <div className="w-24 h-24 md:w-32 md:h-32 bg-[#5A5A40] rounded-full flex items-center justify-center text-white text-4xl font-serif">
              {lang === "ar" ? "ي" : "Y"}
            </div>
            <div className={`text-center ${lang === "ar" ? "md:text-right" : "md:text-left"}`}>
              <h3 className="text-2xl font-bold mb-2">{t.owner_title}</h3>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                {t.owner_quote}
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
        className={`fixed bottom-6 ${lang === "ar" ? "right-6" : "right-6"} z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center`}
        aria-label={t.whatsapp}
      >
        <WhatsAppIcon size={32} />
      </a>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-8 ${lang === "fr" ? "md:flex-row-reverse" : ""}`}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5A5A40] rounded-full flex items-center justify-center text-white">
                <ShoppingBag size={16} />
              </div>
              <span className="text-xl font-bold font-serif text-[#5A5A40]">{t.logo_name}</span>
            </div>
            <p className="text-gray-500 text-sm">{t.footer_rights}</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#5A5A40] transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#5A5A40] transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#5A5A40] transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
