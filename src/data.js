// ============================================================
//  كل بيانات الموقع في الملف ده — عدّل هنا بس
//  All site content lives here — edit this file only
// ============================================================

// ---------- بيانات الشركة ----------
export const company = {
  name: { ar: 'جولدن للتوريدات العمومية', en: 'Golden General Supplies' },
  logoText: 'Golden',
  address: {
    ar: '25 ش السودان الرئيسي، الدور الأرضي، المهندسين، الجيزة',
    en: '25 Sudan St., Ground Floor, Mohandessin, Giza, Egypt',
  },
  // رقم الواتساب بالصيغة الدولية من غير + (مستخدم في لينكات wa.me)
  whatsapp: '201270110723',
  phone: '01270110723',
  email: 'goldensupplies2027@gmail.com',
  // اللي بيتكتب في خانة البحث في جوجل مابس للخريطة المدمجة
  mapQuery: '25 Sudan St, Mohandessin, Giza, Egypt',
}

// ---------- السوشيال ميديا ----------
// حط اللينك جنب أي منصة وهتظهر أوتوماتيك في قسم التواصل والفوتر. الفاضي مش بيظهر.
export const social = {
  facebook: '',
  instagram: '',
  linkedin: '',
  tiktok: '',
  youtube: '',
}

// ---------- لينك واتساب برسالة جاهزة ----------
export const whatsappLink = (message = '') =>
  `https://wa.me/${company.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`

// ---------- الفئات ----------
// أول فئة "all" لازم تفضل موجودة
export const categories = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'pens', ar: 'أقلام', en: 'Pens' },
  { id: 'drinkware', ar: 'أكواب وزمزميات', en: 'Drinkware' },
  { id: 'tech', ar: 'إلكترونيات وأجهزة', en: 'Tech & Gadgets' },
  { id: 'care', ar: 'عناية شخصية', en: 'Personal Care' },
  { id: 'medical', ar: 'هدايا طبية', en: 'Medical Gifts' },
  { id: 'office', ar: 'مكتبية', en: 'Office & Desk' },
  { id: 'textiles', ar: 'شنط وملابس', en: 'Bags & Apparel' },
  { id: 'lifestyle', ar: 'هدايا متنوعة', en: 'Lifestyle' },
]

// ---------- المنتجات ----------
// image: اسم الصورة جوه public/products
// fit: 'contain' للصور العريضة اللي محتاجة تبان كاملة جوه المربع
export const products = [
  // أقلام
  { id: 'soft-touch-pens', category: 'pens', ar: 'أقلام سوفت تاتش ملونة', en: 'Soft-Touch Colored Pens', fit: 'contain' },
  { id: 'metal-ballpoint-pens', category: 'pens', ar: 'أقلام معدن فاخرة', en: 'Premium Metal Pens' },
  { id: 'colorful-plastic-pens', category: 'pens', ar: 'أقلام بلاستيك ملونة', en: 'Colorful Plastic Pens' },
  { id: 'matte-click-pens', category: 'pens', ar: 'أقلام مطفية بضغّاط', en: 'Matte Click Pens' },
  { id: 'stylus-phone-stand-pens', category: 'pens', ar: 'أقلام تاتش بحامل موبايل', en: 'Stylus Pens with Phone Stand' },

  // أكواب وزمزميات
  { id: 'smart-temperature-bottles', category: 'drinkware', ar: 'زمزميات ذكية بشاشة حرارة', en: 'Smart Temperature Bottles' },
  { id: 'mini-vacuum-bottles', category: 'drinkware', ar: 'زمزميات حرارية صغيرة 150 مل', en: 'Mini Vacuum Bottles 150ml' },
  { id: 'thermal-travel-mugs', category: 'drinkware', ar: 'مجّات حرارية للسفر', en: 'Thermal Travel Mugs' },
  { id: 'engraved-steel-bottle', category: 'drinkware', ar: 'زمزمية ستانلس محفورة بالليزر', en: 'Laser-Engraved Steel Bottle' },
  { id: 'stainless-steel-bottles', category: 'drinkware', ar: 'زمزميات ستانلس ستيل', en: 'Stainless Steel Bottles' },
  { id: 'mini-steel-bottles', category: 'drinkware', ar: 'زمزميات ستانلس ميني', en: 'Mini Steel Bottles' },

  // إلكترونيات وأجهزة
  { id: 'wooden-aroma-humidifier', category: 'tech', ar: 'معطّر ومرطّب جو خشبي', en: 'Wooden Aroma Humidifier' },
  { id: 'wireless-power-bank', category: 'tech', ar: 'باور بانك بشاحن لاسلكي', en: 'Wireless Power Bank', fit: 'contain' },
  { id: 'multi-cable-travel-kit', category: 'tech', ar: 'علبة كابلات شحن متعددة', en: 'Multi-Cable Travel Kit' },
  { id: 'foldable-led-desk-lamp', category: 'tech', ar: 'أباجورة LED مكتبية قابلة للطي', en: 'Foldable LED Desk Lamp' },
  { id: 'foldable-electric-kettle', category: 'tech', ar: 'كاتل كهربائي سيليكون قابل للطي', en: 'Foldable Electric Kettle' },

  // عناية شخصية
  { id: 'wooden-comb', category: 'care', ar: 'مشط خشب', en: 'Wooden Comb', fit: 'contain' },
  { id: 'detangling-hair-brushes', category: 'care', ar: 'فرش شعر لفك التشابك', en: 'Detangling Hair Brushes' },
  { id: 'self-cleaning-hair-brushes', category: 'care', ar: 'فرش شعر ذاتية التنظيف', en: 'Self-Cleaning Hair Brushes' },
  { id: 'curly-hair-brush', category: 'care', ar: 'فرشاة للشعر الكيرلي', en: 'Curly Hair Brush' },
  { id: 'scalp-massage-comb', category: 'care', ar: 'مشط مساج لفروة الرأس', en: 'Scalp Massage Comb' },
  { id: 'satin-hair-bonnet', category: 'care', ar: 'بونيه شعر ساتان مطرّز', en: 'Embroidered Satin Bonnet' },
  { id: 'satin-scrunchies', category: 'care', ar: 'توك شعر ساتان', en: 'Satin Scrunchies' },

  // هدايا طبية
  { id: 'lung-shaped-dispenser', category: 'medical', ar: 'عبوة بامب على شكل رئة', en: 'Lung-Shaped Pump Dispenser' },
  { id: 'stomach-shaped-dispenser', category: 'medical', ar: 'عبوة بامب على شكل معدة', en: 'Stomach-Shaped Pump Dispenser' },
  { id: 'bone-shaped-dispenser', category: 'medical', ar: 'عبوة بامب على شكل عظمة', en: 'Bone-Shaped Pump Dispenser' },
  { id: 'hand-sanitizer-bottles', category: 'medical', ar: 'عبوات معقّم يد 150 مل', en: 'Hand Sanitizer Bottles 150ml' },
  { id: 'acrylic-heart-stands', category: 'medical', ar: 'ستاند أكريليك على شكل قلب', en: 'Heart-Shaped Acrylic Stands' },
  { id: 'reflex-hammer', category: 'medical', ar: 'شاكوش أعصاب طبي', en: 'Medical Reflex Hammer' },

  // مكتبية
  { id: 'wooden-perpetual-calendar', category: 'office', ar: 'نتيجة خشب دائمة', en: 'Wooden Perpetual Calendar' },
  { id: 'brass-door-sign', category: 'office', ar: 'يافطة باب نحاس محفورة', en: 'Engraved Brass Door Sign' },
  { id: 'notebook', category: 'office', ar: 'نوت بوك بأستك', en: 'Notebook with Elastic Band' },
  { id: 'branded-clipboard', category: 'office', ar: 'كليب بورد مطبوع', en: 'Printed Clipboard' },
  { id: 'acrylic-desk-holder', category: 'office', ar: 'حامل أكريليك مكتبي', en: 'Acrylic Desk Holder' },
  { id: 'ramadan-phone-stand', category: 'office', ar: 'حامل موبايل رمضاني', en: 'Ramadan Phone Stand' },

  // شنط وملابس
  { id: 'canvas-tote-bag', category: 'textiles', ar: 'شنطة قماش كانفاس', en: 'Canvas Tote Bag' },
  { id: 'baseball-caps', category: 'textiles', ar: 'كابات', en: 'Baseball Caps' },
  { id: 'medical-scrubs', category: 'textiles', ar: 'سكراب طبي', en: 'Medical Scrubs' },
  { id: 'printed-chair-cover', category: 'textiles', ar: 'غطاء كرسي مطبوع', en: 'Printed Chair Cover' },

  // هدايا متنوعة
  { id: 'incense-box', category: 'lifestyle', ar: 'علبة بخور على شكل مبخرة', en: 'Mabkhara-Shaped Incense Box' },
  { id: 'branded-prayer-beads', category: 'lifestyle', ar: 'سبحة بميدالية لوجو', en: 'Branded Prayer Beads' },
  { id: 'car-sunshade', category: 'lifestyle', ar: 'شمسية عربية', en: 'Car Sunshade' },
].map((p) => ({ image: `/products/${p.id}.webp`, ...p }))

// صور الكولاج في الواجهة (3 أو 4)
export const heroImages = [
  'smart-temperature-bottles',
  'mini-vacuum-bottles',
  'stylus-phone-stand-pens',
  'wooden-aroma-humidifier',
]

// ---------- النصوص ----------
export const texts = {
  ar: {
    nav: {
      about: 'من نحن',
      services: 'خدماتنا',
      products: 'منتجاتنا',
      process: 'إزاي بنشتغل',
      contact: 'تواصل معنا',
    },
    langSwitch: 'EN',
    whatsappCta: 'واتساب',
    menu: 'القائمة',
    close: 'إغلاق',
    hero: {
      eyebrow: 'هدايا ومنتجات دعائية للشركات',
      title: 'هدايا دعائية تحمل براندك بكل فخامة',
      subtitle:
        'نطبع ونطرّز ونحفر لوجو شركتك على منتجات مختارة بعناية، عشان كل هدية توصل رسالتك وتفضل في إيد عميلك.',
      primary: 'اطلب عرض سعر',
      secondary: 'شوف منتجاتنا',
      quoteMessage: 'أهلاً جولدن، عايز عرض سعر لهدايا دعائية لشركتنا.',
    },
    about: {
      eyebrow: 'من نحن',
      title: 'شريكك في الهدايا اللي بتفضل في الذاكرة',
      text:
        'جولدن للتوريدات العمومية متخصصة في الهدايا والمنتجات الدعائية للشركات. بنختار كل منتج بعناية، ونطبع أو نطرّز أو نحفر عليه لوجو براندك بجودة تليق باسمك — من القلم البسيط لحد الهدايا الفاخرة — وبنلتزم بالميعاد في كل طلب.',
      // value: رقم بيتعد لحد ما يوصله. من غير value بيظهر أيقونة بدل الرقم
      stats: [
        { value: 40, prefix: '+', label: 'منتج' },
        { value: 4, label: 'طرق تنفيذ' },
        { icon: 'clock', label: 'تسليم في الميعاد' },
      ],
    },
    services: {
      eyebrow: 'خدماتنا',
      title: 'براندك على كل تفصيلة',
      subtitle: 'تقنيات تنفيذ متنوعة تناسب كل منتج وكل ميزانية.',
      items: [
        { icon: 'printer', title: 'طباعة', text: 'طباعة لوجو وتصميمات بألوان ثابتة وواضحة على الأقلام والشنط والعبوات.' },
        { icon: 'scissors', title: 'تطريز', text: 'تطريز فاخر على الكابات والقماش والملابس بخيوط عالية الجودة.' },
        { icon: 'zap', title: 'حفر ليزر', text: 'حفر دقيق ودائم على المعدن والخشب والأكريليك بلمسة راقية.' },
        { icon: 'gift', title: 'تغليف هدايا', text: 'تغليف أنيق وجاهز للتوزيع يليق باسم شركتك وبعملائك.' },
      ],
    },
    products: {
      eyebrow: 'منتجاتنا',
      title: 'مختارات من أعمالنا',
      subtitle: 'كل المنتجات دي ممكن تتنفذ بلوجو وألوان براندك.',
      view: 'عرض',
      order: 'اطلب المنتج ده',
      orderMessage: (name) => `أهلاً جولدن، عايز أستفسر عن المنتج ده: ${name}`,
    },
    process: {
      eyebrow: 'إزاي بنشتغل',
      title: 'من الفكرة لإيد عميلك',
      steps: [
        { title: 'تواصل', text: 'كلّمنا وقولنا محتاج إيه والكمية والميعاد.' },
        { title: 'تصميم', text: 'بنجهزلك تصور للمنتج بلوجو براندك.' },
        { title: 'موافقة', text: 'بتراجع التصميم والسعر وتوافق.' },
        { title: 'تنفيذ', text: 'بنبدأ الإنتاج بأعلى جودة ومتابعة دقيقة.' },
        { title: 'تسليم', text: 'بنسلّمك الطلب في ميعاده وجاهز للتوزيع.' },
      ],
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'جاهزين نبدأ مشروعك',
      subtitle: 'ابعتلنا على واتساب أو كلّمنا مباشرة، وهنرد عليك في أسرع وقت.',
      whatsapp: 'واتساب',
      call: 'اتصل بنا',
      email: 'إيميل',
      address: 'العنوان',
      mapTitle: 'موقعنا على الخريطة',
    },
    footer: {
      tagline: 'هدايا ومنتجات دعائية تحمل براندك.',
      rights: 'جميع الحقوق محفوظة',
    },
  },

  en: {
    nav: {
      about: 'About',
      services: 'Services',
      products: 'Products',
      process: 'How We Work',
      contact: 'Contact',
    },
    langSwitch: 'ع',
    whatsappCta: 'WhatsApp',
    menu: 'Menu',
    close: 'Close',
    hero: {
      eyebrow: 'Corporate gifts & promotional products',
      title: 'Promotional Gifts That Carry Your Brand',
      subtitle:
        'We print, embroider and laser-engrave your logo on carefully selected products — gifts your clients keep and remember.',
      primary: 'Request a Quote',
      secondary: 'View Products',
      quoteMessage: 'Hello Golden, I would like a quote for branded promotional gifts.',
    },
    about: {
      eyebrow: 'About Us',
      title: 'Your Partner for Gifts People Remember',
      text:
        'Golden General Supplies specializes in corporate gifts and promotional products. We carefully select every item and print, embroider or laser-engrave your logo with quality worthy of your name — from everyday pens to premium gifts — and we deliver on time, every time.',
      stats: [
        { value: 40, prefix: '+', label: 'Products' },
        { value: 4, label: 'Branding Methods' },
        { icon: 'clock', label: 'On-Time Delivery' },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Your Brand, in Every Detail',
      subtitle: 'Branding techniques to suit every product and every budget.',
      items: [
        { icon: 'printer', title: 'Printing', text: 'Crisp, lasting logo printing on pens, bags, bottles and more.' },
        { icon: 'scissors', title: 'Embroidery', text: 'Premium embroidery on caps, fabric and apparel.' },
        { icon: 'zap', title: 'Laser Engraving', text: 'Precise, permanent engraving on metal, wood and acrylic.' },
        { icon: 'gift', title: 'Gift Packaging', text: 'Elegant, ready-to-distribute packaging worthy of your name.' },
      ],
    },
    products: {
      eyebrow: 'Products',
      title: 'Selected Work',
      subtitle: 'Every product can be made in your brand’s logo and colors.',
      view: 'View',
      order: 'Order This Product',
      orderMessage: (name) => `Hello Golden, I'd like to ask about this product: ${name}`,
    },
    process: {
      eyebrow: 'How We Work',
      title: 'From Idea to Your Client’s Hands',
      steps: [
        { title: 'Contact', text: 'Tell us what you need, the quantity and your deadline.' },
        { title: 'Design', text: 'We prepare a mockup with your brand’s logo.' },
        { title: 'Approval', text: 'You review the design and price, then approve.' },
        { title: 'Production', text: 'We produce with top quality and close follow-up.' },
        { title: 'Delivery', text: 'Your order arrives on time, ready to hand out.' },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Ready to Start Your Project',
      subtitle: 'Message us on WhatsApp or call us directly — we reply fast.',
      whatsapp: 'WhatsApp',
      call: 'Call Us',
      email: 'Email',
      address: 'Address',
      mapTitle: 'Our location on the map',
    },
    footer: {
      tagline: 'Promotional gifts that carry your brand.',
      rights: 'All rights reserved',
    },
  },
}
