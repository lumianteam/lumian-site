export type LocalizedText = {
  en: string;
  fa: string;
};

export type PortfolioImage = {
  src: string;
  width: number;
  height: number;
  alt: LocalizedText;
};

export type PortfolioProject = {
  slug: string;
  name: LocalizedText;
  category: LocalizedText;
  summary: LocalizedText;
  overview: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  services: LocalizedText[];
  features: Array<{
    title: LocalizedText;
    description: LocalizedText;
  }>;
  cover: PortfolioImage;
  gallery: PortfolioImage[];
};

const lawyerPlatform: PortfolioProject = {
  slug: "vakilvakil",
  name: {
    en: "VakilVakil",
    fa: "وکیل‌وکیل",
  },
  category: {
    en: "LegalTech · Booking & Practice Management",
    fa: "فناوری حقوقی · رزرو و مدیریت امور وکالت",
  },
  summary: {
    en: "A unified platform for finding and booking lawyers, paired with a professional workspace for managing schedules, appointments, and legal cases.",
    fa: "سامانه‌ای یکپارچه برای جست‌وجو و رزرو وکیل، همراه با فضای کاری حرفه‌ای برای مدیریت برنامه‌ها، جلسات و پرونده‌های حقوقی.",
  },
  overview: {
    en: "VakilVakil connects people who need legal advice with relevant lawyers and keeps the full booking journey clear and accessible. On the professional side, lawyers get a focused workspace for organizing their day-to-day practice.",
    fa: "وکیل‌وکیل افراد نیازمند مشاوره حقوقی را به وکلای مرتبط متصل می‌کند و مسیر انتخاب تا رزرو جلسه را شفاف و ساده نگه می‌دارد. در سمت حرفه‌ای نیز وکلا فضای کاری متمرکزی برای سامان‌دهی فعالیت‌های روزمره خود در اختیار دارند.",
  },
  challenge: {
    en: "The product needed to serve two distinct audiences without creating two disconnected experiences: clients expect a fast and reassuring booking flow, while lawyers need structured tools for appointments, tasks, and cases.",
    fa: "محصول باید هم‌زمان به دو گروه متفاوت خدمت می‌کرد، بدون اینکه تجربه‌ای گسسته ایجاد شود: کاربران به مسیر رزرو سریع و قابل اعتماد نیاز دارند و وکلا به ابزارهایی ساختاریافته برای جلسات، وظایف و پرونده‌ها.",
  },
  solution: {
    en: "The experience combines lawyer discovery, detailed professional profiles, multiple consultation modes, and a step-by-step booking flow with a dedicated RTL management dashboard built around the lawyer's working day.",
    fa: "تجربه نهایی، جست‌وجوی وکیل، پروفایل حرفه‌ای، روش‌های مختلف مشاوره و رزرو مرحله‌ای را با داشبورد مدیریتی راست‌چین و متناسب با جریان کاری روزانه وکیل ترکیب می‌کند.",
  },
  services: [
    { en: "Product design", fa: "طراحی محصول" },
    { en: "Web application", fa: "وب‌اپلیکیشن" },
    { en: "RTL experience", fa: "تجربه کاربری راست‌چین" },
    { en: "Management dashboard", fa: "داشبورد مدیریتی" },
  ],
  features: [
    {
      title: { en: "Lawyer discovery", fa: "جست‌وجوی وکیل" },
      description: {
        en: "Browse and filter lawyers by specialty, city, consultation type, and availability.",
        fa: "مشاهده و فیلتر وکلا بر اساس تخصص، شهر، نوع مشاوره و زمان‌های در دسترس.",
      },
    },
    {
      title: { en: "Flexible booking", fa: "رزرو منعطف مشاوره" },
      description: {
        en: "A guided booking flow for online, phone, and in-person consultation sessions.",
        fa: "مسیر مرحله‌ای رزرو برای مشاوره آنلاین، تلفنی و حضوری.",
      },
    },
    {
      title: { en: "Professional profiles", fa: "پروفایل حرفه‌ای وکلا" },
      description: {
        en: "Structured profiles covering expertise, experience, education, services, and availability.",
        fa: "نمایش ساختاریافته تخصص‌ها، سوابق، تحصیلات، خدمات و زمان‌های آزاد هر وکیل.",
      },
    },
    {
      title: { en: "Schedule management", fa: "مدیریت برنامه و جلسات" },
      description: {
        en: "Daily and weekly views for consultations, follow-ups, tasks, and reminders.",
        fa: "نمای روزانه و هفتگی برای مشاوره‌ها، پیگیری‌ها، وظایف و یادآورها.",
      },
    },
    {
      title: { en: "Case workspace", fa: "مدیریت پرونده‌ها" },
      description: {
        en: "A focused workspace for organizing active cases, clients, documents, and next actions.",
        fa: "فضایی متمرکز برای سامان‌دهی پرونده‌های فعال، موکلان، مدارک و اقدامات بعدی.",
      },
    },
    {
      title: { en: "Responsive RTL UI", fa: "رابط واکنش‌گرا و راست‌چین" },
      description: {
        en: "A consistent Persian experience across desktop and mobile screens.",
        fa: "تجربه‌ای یکپارچه و فارسی در نمایشگرهای دسکتاپ و موبایل.",
      },
    },
  ],
  cover: {
    src: "/images/projects/lawyer-platform/poster-blurred.png",
    width: 1536,
    height: 1024,
    alt: {
      en: "VakilVakil lawyer management platform poster",
      fa: "پوستر سامانه یکپارچه مدیریت وکلا وکیل‌وکیل",
    },
  },
  gallery: [
    {
      src: "/images/projects/lawyer-platform/overview.png",
      width: 1586,
      height: 992,
      alt: {
        en: "VakilVakil lawyer booking platform overview",
        fa: "نمای کلی سامانه رزرو و مدیریت وکلا وکیل‌وکیل",
      },
    },
    {
      src: "/images/projects/lawyer-platform/dashboard.png",
      width: 1586,
      height: 992,
      alt: {
        en: "Lawyer schedule and case management dashboard",
        fa: "داشبورد مدیریت برنامه و پرونده‌های وکیل",
      },
    },
    {
      src: "/images/projects/lawyer-platform/mobile.png",
      width: 941,
      height: 1672,
      alt: {
        en: "Mobile lawyer discovery and booking experience",
        fa: "تجربه موبایل جست‌وجو و رزرو وکیل",
      },
    },
  ],
};

const salamatab: PortfolioProject = {
  slug: "salamatab",
  name: {
    en: "Salamatab",
    fa: "سلامتطب",
  },
  category: {
    en: "HealthTech · Clinic Management",
    fa: "فناوری سلامت · مدیریت مطب",
  },
  summary: {
    en: "A focused clinic-management platform for organizing appointments, patients, doctors, and staff from one responsive workspace.",
    fa: "سامانه‌ای متمرکز برای مدیریت مطب که نوبت‌ها، بیماران، پزشکان و کارکنان را در یک فضای کاری واکنش‌گرا سامان‌دهی می‌کند.",
  },
  overview: {
    en: "Salamatab brings the daily operations of a clinic into one clear dashboard. The team can review appointments, coordinate employees, maintain patient records, and follow the clinic's activity without switching between disconnected tools.",
    fa: "سلامتطب فعالیت‌های روزمره مطب را در یک داشبورد روشن و یکپارچه جمع می‌کند. تیم مطب می‌تواند نوبت‌ها را بررسی کند، برنامه کارکنان را هماهنگ سازد، پرونده بیماران را نگه دارد و روند فعالیت مطب را بدون جابه‌جایی میان ابزارهای پراکنده دنبال کند.",
  },
  challenge: {
    en: "Clinic information is often split between paper notes, phone calls, spreadsheets, and separate calendars. This makes coordinating appointments and staff unnecessarily slow and error-prone.",
    fa: "اطلاعات مطب اغلب میان یادداشت‌های کاغذی، تماس‌ها، فایل‌های اکسل و تقویم‌های جداگانه پخش می‌شود؛ موضوعی که هماهنگی نوبت‌ها و کارکنان را کند و مستعد خطا می‌کند.",
  },
  solution: {
    en: "The product uses a calm RTL interface and role-focused navigation to surface today's appointments, staff availability, patient records, and operational reports where the clinic team needs them.",
    fa: "محصول با یک رابط آرام و راست‌چین و ناوبری متناسب با نقش کاربران، نوبت‌های امروز، وضعیت کارکنان، پرونده بیماران و گزارش‌های اجرایی را در دسترس تیم مطب قرار می‌دهد.",
  },
  services: [
    { en: "Product design", fa: "طراحی محصول" },
    { en: "Clinic dashboard", fa: "داشبورد مطب" },
    { en: "RTL web application", fa: "وب‌اپلیکیشن راست‌چین" },
    { en: "Responsive experience", fa: "تجربه واکنش‌گرا" },
  ],
  features: [
    {
      title: { en: "Appointment management", fa: "مدیریت نوبت‌ها" },
      description: {
        en: "Review daily bookings, appointment status, service type, and assigned doctor at a glance.",
        fa: "مشاهده سریع نوبت‌های روز، وضعیت مراجعه، نوع خدمت و پزشک مربوطه.",
      },
    },
    {
      title: { en: "Clinic staff", fa: "مدیریت کارکنان مطب" },
      description: {
        en: "Organize employees, roles, attendance, and shift availability from one workspace.",
        fa: "سامان‌دهی کارکنان، نقش‌ها، حضور و زمان‌بندی شیفت‌ها در یک فضای کاری.",
      },
    },
    {
      title: { en: "Patient records", fa: "پرونده بیماران" },
      description: {
        en: "Keep patient information and visit history structured and easy for authorized staff to find.",
        fa: "نگهداری ساختاریافته اطلاعات بیماران و سوابق مراجعه برای دسترسی آسان کاربران مجاز.",
      },
    },
    {
      title: { en: "Doctor coordination", fa: "هماهنگی پزشکان" },
      description: {
        en: "Track active doctors, schedules, assigned services, and clinic availability.",
        fa: "مدیریت پزشکان فعال، برنامه‌ها، خدمات تخصیص‌یافته و زمان‌های حضور در مطب.",
      },
    },
    {
      title: { en: "Operational overview", fa: "نمای کلی عملیات" },
      description: {
        en: "A concise dashboard for today's workload, pending items, and frequently used actions.",
        fa: "داشبوردی خلاصه برای حجم کار امروز، موارد در انتظار و عملیات پرکاربرد.",
      },
    },
    {
      title: { en: "Desktop and mobile", fa: "دسکتاپ و موبایل" },
      description: {
        en: "A consistent Persian RTL experience for clinic teams across different screen sizes.",
        fa: "تجربه‌ای فارسی و راست‌چین برای تیم مطب در اندازه‌های مختلف نمایشگر.",
      },
    },
  ],
  cover: {
    src: "/images/projects/salamatab/poster.png",
    width: 1536,
    height: 1024,
    alt: {
      en: "Salamatab clinic management platform poster",
      fa: "پوستر سامانه مدیریت مطب سلامتطب",
    },
  },
  gallery: [],
};

const tennisor: PortfolioProject = {
  slug: "tennisor",
  name: {
    en: "Tennisor",
    fa: "تنیسور",
  },
  category: {
    en: "SportsTech · Court Booking & Venue Management",
    fa: "فناوری ورزشی · رزرو زمین و مدیریت مجموعه",
  },
  summary: {
    en: "A racket-sports platform for booking courts, managing sports venues, coordinating coaches and classes, and finding compatible playing partners.",
    fa: "پلتفرمی برای رزرو زمین‌های تنیس و ورزش‌های راکتی، مدیریت کامل مجموعه‌های ورزشی، هماهنگی مربیان و کلاس‌ها و پیدا کردن هم‌بازی مناسب.",
  },
  overview: {
    en: "Tennisor brings players, venues, and coaches into one connected experience. Players can discover courts and partners, while venue teams manage schedules, coaches, classes, and court availability from a dedicated dashboard.",
    fa: "تنیسور بازیکنان، مجموعه‌های ورزشی و مربیان را در یک تجربه متصل کنار هم قرار می‌دهد. بازیکنان می‌توانند زمین و هم‌بازی پیدا کنند و مدیران مجموعه نیز برنامه زمین‌ها، مربیان، کلاس‌ها و ظرفیت‌های آزاد را از یک داشبورد اختصاصی مدیریت کنند.",
  },
  challenge: {
    en: "Court availability, classes, coaching schedules, and player coordination are often handled through separate channels. This makes booking slower for players and daily operations harder for venue managers.",
    fa: "ظرفیت زمین‌ها، کلاس‌ها، برنامه مربیان و هماهنگی میان بازیکنان معمولاً در کانال‌های جداگانه مدیریت می‌شود؛ در نتیجه رزرو برای بازیکن کند و عملیات روزانه برای مدیر مجموعه دشوار می‌شود.",
  },
  solution: {
    en: "The product combines searchable court inventory and guided booking with a venue operations calendar, coach and class tools, and a partner-matching flow designed for different skill levels.",
    fa: "محصول، جست‌وجو و رزرو مرحله‌ای زمین را با تقویم عملیاتی مجموعه، ابزار مدیریت مربی و کلاس و جریان پیدا کردن هم‌بازی متناسب با سطح بازیکنان ترکیب می‌کند.",
  },
  services: [
    { en: "Product design", fa: "طراحی محصول" },
    { en: "Booking platform", fa: "سامانه رزرو" },
    { en: "Venue dashboard", fa: "داشبورد مجموعه" },
    { en: "Responsive RTL", fa: "رابط واکنش‌گرا و راست‌چین" },
  ],
  features: [
    {
      title: { en: "Court booking", fa: "رزرو آنلاین زمین" },
      description: {
        en: "Find available courts by city, sport, date, venue, and preferred playing time.",
        fa: "پیدا کردن زمین آزاد بر اساس شهر، رشته ورزشی، تاریخ، مجموعه و ساعت بازی.",
      },
    },
    {
      title: { en: "Racket-sport discovery", fa: "ورزش‌های راکتی متنوع" },
      description: {
        en: "Explore tennis, padel, pickleball, and other racket-sport venues in one experience.",
        fa: "مشاهده زمین‌های تنیس، پدل، پیکل‌بال و دیگر ورزش‌های راکتی در یک تجربه واحد.",
      },
    },
    {
      title: { en: "Venue management", fa: "مدیریت مجموعه و زمین‌ها" },
      description: {
        en: "Control court availability, bookings, occupancy, operating hours, and daily schedules.",
        fa: "کنترل ظرفیت زمین‌ها، رزروها، ساعات کاری و برنامه روزانه مجموعه.",
      },
    },
    {
      title: { en: "Coaches and classes", fa: "مربیان و کلاس‌ها" },
      description: {
        en: "Organize coach profiles, class timetables, skill levels, and upcoming sessions.",
        fa: "سامان‌دهی پروفایل مربیان، زمان‌بندی کلاس‌ها، سطح دوره‌ها و جلسات پیش‌رو.",
      },
    },
    {
      title: { en: "Partner matching", fa: "پیدا کردن هم‌بازی" },
      description: {
        en: "Create or join playing requests based on location, time, sport, and experience level.",
        fa: "ایجاد یا پیوستن به درخواست بازی بر اساس موقعیت، زمان، رشته و سطح مهارت.",
      },
    },
    {
      title: { en: "Responsive experience", fa: "تجربه دسکتاپ و موبایل" },
      description: {
        en: "A consistent Persian RTL product for players and venue teams across devices.",
        fa: "محصولی فارسی و راست‌چین برای بازیکنان و مدیران مجموعه در تمام دستگاه‌ها.",
      },
    },
  ],
  cover: {
    src: "/images/projects/tennisor/poster-v2.png",
    width: 1536,
    height: 1024,
    alt: {
      en: "Tennisor racket-sports booking and venue management poster",
      fa: "پوستر سامانه رزرو زمین و مدیریت مجموعه تنیسور",
    },
  },
  gallery: [],
};

const pishfactor: PortfolioProject = {
  slug: "pishfactor",
  name: {
    en: "Proforma System",
    fa: "سامانه ثبت پیش‌فاکتور",
  },
  category: {
    en: "Commerce Operations · Product & Order Management",
    fa: "عملیات فروش · مدیریت محصول و سفارش",
  },
  summary: {
    en: "A mobile-first product and ordering system for registering products, building customer orders, and issuing proforma invoices through a clear guided flow.",
    fa: "سامانه‌ای موبایل‌محور برای ثبت و جست‌وجوی محصولات، ساخت سفارش مشتری و صدور پیش‌فاکتور در یک مسیر ساده و مرحله‌ای.",
  },
  overview: {
    en: "The Proforma System gives sales teams a compact workspace for browsing a product catalog, selecting quantities, creating orders, and reviewing submitted requests from a mobile device.",
    fa: "سامانه ثبت پیش‌فاکتور یک فضای کاری جمع‌وجور در اختیار تیم فروش قرار می‌دهد تا کاتالوگ محصولات را جست‌وجو کند، تعداد اقلام را مشخص سازد، سفارش ایجاد کند و درخواست‌های ثبت‌شده را از طریق موبایل پیگیری کند.",
  },
  challenge: {
    en: "Preparing customer quotations manually can make product lookup, quantity changes, and order follow-up slow and inconsistent—especially when the sales process happens away from a desktop.",
    fa: "آماده‌سازی دستی پیش‌فاکتور می‌تواند جست‌وجوی محصول، تغییر تعداد اقلام و پیگیری سفارش را کند و ناهماهنگ کند؛ به‌خصوص زمانی که فرایند فروش دور از رایانه انجام می‌شود.",
  },
  solution: {
    en: "The product combines fast catalog search, a lightweight cart, order history, and account tools in a focused Persian mobile interface built around the steps of creating a proforma invoice.",
    fa: "محصول، جست‌وجوی سریع کاتالوگ، سبد سفارش، تاریخچه درخواست‌ها و ابزارهای حساب کاربری را در یک رابط فارسی موبایل و متناسب با مراحل صدور پیش‌فاکتور کنار هم قرار می‌دهد.",
  },
  services: [
    { en: "Mobile product", fa: "محصول موبایل" },
    { en: "Order workflow", fa: "فرایند سفارش" },
    { en: "Product catalog", fa: "کاتالوگ محصولات" },
    { en: "Persian RTL UI", fa: "رابط فارسی راست‌چین" },
  ],
  features: [
    {
      title: { en: "Product registration", fa: "ثبت و مدیریت محصول" },
      description: {
        en: "Maintain a structured product catalog with the essential information needed for ordering.",
        fa: "نگهداری کاتالوگ ساختاریافته محصولات با اطلاعات لازم برای فرایند سفارش.",
      },
    },
    {
      title: { en: "Fast search", fa: "جست‌وجوی سریع" },
      description: {
        en: "Find products quickly and narrow the catalog with practical filters.",
        fa: "پیدا کردن سریع محصولات و محدود کردن نتایج با فیلترهای کاربردی.",
      },
    },
    {
      title: { en: "Order cart", fa: "سبد سفارش" },
      description: {
        en: "Add products, adjust quantities, and review selected items before submission.",
        fa: "افزودن محصول، تغییر تعداد و بررسی اقلام انتخاب‌شده پیش از ثبت.",
      },
    },
    {
      title: { en: "Proforma creation", fa: "صدور پیش‌فاکتور" },
      description: {
        en: "Turn the selected products into a consistent proforma invoice through a guided flow.",
        fa: "تبدیل اقلام انتخاب‌شده به پیش‌فاکتور منظم در یک مسیر مرحله‌ای.",
      },
    },
    {
      title: { en: "Order tracking", fa: "پیگیری سفارش‌ها" },
      description: {
        en: "Review submitted, rejected, and pending requests from the user profile.",
        fa: "مشاهده درخواست‌های ثبت‌شده، ردشده و در انتظار از طریق پروفایل کاربری.",
      },
    },
    {
      title: { en: "Mobile-first experience", fa: "تجربه اختصاصی موبایل" },
      description: {
        en: "A focused responsive interface designed for quick use by mobile sales teams.",
        fa: "رابطی متمرکز و واکنش‌گرا برای استفاده سریع تیم‌های فروش با موبایل.",
      },
    },
  ],
  cover: {
    src: "/images/projects/pishfactor.png",
    width: 1448,
    height: 1086,
    alt: {
      en: "Mobile product registration and proforma invoice system",
      fa: "سامانه موبایل ثبت محصول و صدور پیش‌فاکتور",
    },
  },
  gallery: [],
};

const gameAccountBot: PortfolioProject = {
  slug: "game-account-bot",
  name: {
    en: "Game Store Bot",
    fa: "فروشگاه‌بازی",
  },
  category: {
    en: "Social Commerce · Gaming Marketplace Bot",
    fa: "تجارت اجتماعی · بات بازار اکانت بازی",
  },
  summary: {
    en: "A social-media bot and operations platform for buying and selling game accounts, backed by a complete admin dashboard and dedicated support workspaces.",
    fa: "یک بات فضای مجازی و سامانه عملیاتی برای خرید و فروش اکانت بازی که با داشبورد مدیریتی کامل و پنل‌های مجزای پشتیبانی همراه شده است.",
  },
  overview: {
    en: "Game Store Bot connects the customer-facing purchase journey to a centralized RTL workspace. The operations team can review orders, follow payments, manage customers, and route support requests without losing context between separate conversations.",
    fa: "فروشگاه‌بازی مسیر خرید کاربر در بات را به یک فضای کاری متمرکز و راست‌چین متصل می‌کند. تیم اجرایی می‌تواند سفارش‌ها و پرداخت‌ها را بررسی کند، مشتریان را مدیریت کند و درخواست‌های پشتیبانی را بدون از دست رفتن سابقه میان پنل‌های مختلف پیگیری کند.",
  },
  challenge: {
    en: "Orders, payment reviews, and customer questions can quickly become fragmented when a marketplace operates through social conversations. The product needed clear statuses, role-based handoffs, and a single operational view.",
    fa: "وقتی فروش در گفت‌وگوهای فضای مجازی انجام می‌شود، سفارش‌ها، بررسی پرداخت و پرسش‌های مشتریان به‌سرعت پراکنده می‌شوند. محصول به وضعیت‌های شفاف، ارجاع میان نقش‌ها و یک نمای واحد برای عملیات نیاز داشت.",
  },
  solution: {
    en: "The product combines a guided commerce bot with a visual admin dashboard, structured order queues, wallet and payment review tools, and separate support panels tailored to each team's responsibilities.",
    fa: "راهکار نهایی، یک بات فروش مرحله‌ای را با داشبورد مدیریتی تصویری، صف‌های منظم سفارش، ابزارهای بررسی کیف پول و پرداخت و پنل‌های پشتیبانی متناسب با مسئولیت هر تیم ترکیب می‌کند.",
  },
  services: [
    { en: "Bot experience", fa: "طراحی تجربه بات" },
    { en: "Admin dashboard", fa: "داشبورد مدیریتی" },
    { en: "Support workspaces", fa: "پنل‌های پشتیبانی" },
    { en: "Persian RTL product", fa: "محصول فارسی راست‌چین" },
  ],
  features: [
    {
      title: { en: "Game-account marketplace", fa: "بازار خرید و فروش اکانت بازی" },
      description: {
        en: "A guided bot flow for browsing offers and starting account purchase or sale requests.",
        fa: "مسیر مرحله‌ای در بات برای مشاهده پیشنهادها و شروع درخواست خرید یا فروش اکانت بازی.",
      },
    },
    {
      title: { en: "Order management", fa: "مدیریت سفارش‌ها" },
      description: {
        en: "Review orders in structured queues with clear statuses and practical search controls.",
        fa: "بررسی سفارش‌ها در صف‌های منظم، همراه با وضعیت‌های روشن و ابزارهای کاربردی جست‌وجو.",
      },
    },
    {
      title: { en: "Wallet and payments", fa: "کیف پول و پرداخت‌ها" },
      description: {
        en: "Track wallet activity, recharge requests, and payment-review items from one workspace.",
        fa: "پیگیری فعالیت کیف پول، درخواست‌های شارژ و موارد نیازمند بررسی پرداخت در یک فضای کاری.",
      },
    },
    {
      title: { en: "Customer management", fa: "مدیریت مشتریان" },
      description: {
        en: "Keep customer activity, order history, and current requests organized for the operations team.",
        fa: "سازمان‌دهی فعالیت مشتری، سابقه سفارش‌ها و درخواست‌های جاری برای تیم اجرایی.",
      },
    },
    {
      title: { en: "Separate support panels", fa: "پنل‌های مجزای پشتیبانی" },
      description: {
        en: "Role-focused support workspaces for handling tickets and passing requests between teams.",
        fa: "فضاهای کاری متناسب با نقش برای رسیدگی به تیکت‌ها و ارجاع درخواست‌ها میان تیم‌ها.",
      },
    },
    {
      title: { en: "Operational overview", fa: "نمای کلی عملیات" },
      description: {
        en: "A concise dashboard for order trends, open items, recent activity, and quick actions.",
        fa: "داشبوردی خلاصه برای روند سفارش‌ها، موارد باز، آخرین فعالیت‌ها و دسترسی‌های سریع.",
      },
    },
  ],
  cover: {
    src: "/images/projects/game-account-bot/poster.png",
    width: 1536,
    height: 1024,
    alt: {
      en: "Game Store social commerce bot and management platform poster",
      fa: "پوستر بات فروشگاه‌بازی و سامانه مدیریت خرید و فروش اکانت بازی",
    },
  },
  gallery: [],
};

const atrak: PortfolioProject = {
  slug: "atrak",
  name: {
    en: "Atrak",
    fa: "سامانه اترک",
  },
  category: {
    en: "Enterprise Operations · Tile Inventory & Orders",
    fa: "عملیات سازمانی · مدیریت انبار و سفارش کاشی",
  },
  summary: {
    en: "An integrated operations system for a tile company, covering employees, warehouse inventory, customer orders, approvals, loading, and warehouse issue slips.",
    fa: "سامانه‌ای یکپارچه برای مدیریت کارکنان، موجودی انبار، سفارش‌های شرکت کاشی، فرایندهای تأیید، بارگیری و صدور حواله انبار.",
  },
  overview: {
    en: "Atrak gives managers and operational teams a shared RTL workspace for following requests from registration through sales and financial approval to loading and final warehouse dispatch.",
    fa: "اترک یک فضای کاری مشترک و راست‌چین در اختیار مدیران و تیم‌های اجرایی قرار می‌دهد تا درخواست‌ها را از لحظه ثبت، طی تأیید فروش و مالی، تا بارگیری و خروج نهایی از انبار پیگیری کنند.",
  },
  challenge: {
    en: "Employee responsibilities, warehouse availability, approvals, and dispatch documents are tightly connected. Handling them in separate tools makes status tracking difficult and increases delays between departments.",
    fa: "مسئولیت کارکنان، موجودی انبار، تأییدها و اسناد حواله به یکدیگر وابسته‌اند. مدیریت این مراحل در ابزارهای جداگانه، پیگیری وضعیت را دشوار می‌کند و باعث تأخیر میان واحدها می‌شود.",
  },
  solution: {
    en: "The product brings request registration, approval queues, inventory controls, loading schedules, and dispatch records into one role-based dashboard with clear status indicators and quick operational actions.",
    fa: "راهکار نهایی، ثبت درخواست، صف‌های تأیید، کنترل موجودی، برنامه بارگیری و سوابق حواله را در یک داشبورد مبتنی بر نقش، همراه با وضعیت‌های روشن و دسترسی‌های سریع عملیاتی یکپارچه می‌کند.",
  },
  services: [
    { en: "Enterprise product design", fa: "طراحی محصول سازمانی" },
    { en: "Operations dashboard", fa: "داشبورد عملیات" },
    { en: "Warehouse workflow", fa: "فرایند مدیریت انبار" },
    { en: "Persian RTL interface", fa: "رابط فارسی راست‌چین" },
  ],
  features: [
    {
      title: { en: "Employee management", fa: "مدیریت کارکنان" },
      description: {
        en: "Organize operational roles and give each employee access to the tasks and queues relevant to their responsibilities.",
        fa: "سازمان‌دهی نقش‌های اجرایی و فراهم‌کردن دسترسی هر کارمند به وظایف و صف‌های متناسب با مسئولیت او.",
      },
    },
    {
      title: { en: "Warehouse inventory", fa: "مدیریت موجودی انبار" },
      description: {
        en: "Review available, reserved, and ready-to-load tile inventory from a unified operational view.",
        fa: "بررسی موجودی قابل فروش، رزروشده و آماده بارگیری کاشی در یک نمای یکپارچه عملیاتی.",
      },
    },
    {
      title: { en: "Order registration", fa: "ثبت سفارش و درخواست" },
      description: {
        en: "Register structured customer requests and follow their progress through every operational stage.",
        fa: "ثبت ساختاریافته سفارش‌ها و درخواست‌های مشتری و پیگیری روند آن‌ها در تمام مراحل اجرایی.",
      },
    },
    {
      title: { en: "Approval queues", fa: "صف‌های تأیید فروش و مالی" },
      description: {
        en: "Route requests through sales and financial review with clear pending, approved, and completed statuses.",
        fa: "هدایت درخواست‌ها در مراحل بررسی فروش و مالی با وضعیت‌های شفاف در انتظار، تأییدشده و تکمیل‌شده.",
      },
    },
    {
      title: { en: "Loading coordination", fa: "مدیریت بارگیری" },
      description: {
        en: "Prepare approved orders for loading and keep warehouse teams aligned with the active queue.",
        fa: "آماده‌سازی سفارش‌های تأییدشده برای بارگیری و هماهنگ نگه‌داشتن تیم انبار با صف فعال.",
      },
    },
    {
      title: { en: "Warehouse issue slips", fa: "ثبت و صدور حواله" },
      description: {
        en: "Record dispatch documents and connect each warehouse issue slip to its request and approval history.",
        fa: "ثبت اسناد خروج و اتصال هر حواله انبار به درخواست و سابقه تأیید مربوط به آن.",
      },
    },
  ],
  cover: {
    src: "/images/projects/atrak/poster.png",
    width: 1536,
    height: 1024,
    alt: {
      en: "Atrak tile-company employee, inventory, order, and dispatch management poster",
      fa: "پوستر سامانه اترک برای مدیریت کارکنان، انبار، سفارش و حواله شرکت کاشی",
    },
  },
  gallery: [],
};

const togAcademy: PortfolioProject = {
  slug: "tog-academy",
  name: {
    en: "TOG Academy",
    fa: "آکادمی تاگ",
  },
  category: {
    en: "EdTech Commerce · Photography & Editing",
    fa: "فناوری آموزشی · عکاسی و ابزارهای تدوین",
  },
  summary: {
    en: "An educational commerce platform for selling photography courses and editing tools, supported by a complete administration panel, SpotPlayer integration, and automatic license creation.",
    fa: "پلتفرمی آموزشی و فروشگاهی برای عرضه دوره‌های عکاسی و ابزارهای تدوین، همراه با پنل مدیریت کامل، اتصال به SpotPlayer و ساخت خودکار لایسنس‌ها.",
  },
  overview: {
    en: "TOG Academy combines a focused storefront for creative learners with an operational dashboard for managing products, orders, payments, discounts, reviews, and protected course access.",
    fa: "آکادمی تاگ یک فروشگاه متمرکز برای هنرجویان حوزه تصویر را با داشبورد عملیاتی مدیریت محصولات، سفارش‌ها، پرداخت‌ها، تخفیف‌ها، نظرات و دسترسی محافظت‌شده به دوره‌ها ترکیب می‌کند.",
  },
  challenge: {
    en: "Selling downloadable tools and protected video courses requires two connected journeys: a clear shopping experience for learners and a reliable fulfillment process for the academy team after payment.",
    fa: "فروش ابزارهای دانلودی و دوره‌های ویدیویی محافظت‌شده به دو مسیر متصل نیاز دارد: تجربه خرید شفاف برای هنرجو و فرایند تحویل قابل‌اعتماد برای تیم آکادمی پس از پرداخت.",
  },
  solution: {
    en: "The product connects catalog and order management to SpotPlayer license operations, allowing eligible purchases to move from successful payment to license creation through a streamlined workflow.",
    fa: "محصول، مدیریت کاتالوگ و سفارش را به عملیات لایسنس SpotPlayer متصل می‌کند تا خریدهای واجد شرایط در یک جریان ساده از پرداخت موفق به ساخت لایسنس برسند.",
  },
  services: [
    { en: "Educational storefront", fa: "فروشگاه آموزشی" },
    { en: "Admin dashboard", fa: "پنل مدیریت" },
    { en: "SpotPlayer integration", fa: "اتصال به SpotPlayer" },
    { en: "Automated fulfillment", fa: "تحویل خودکار محصول" },
  ],
  features: [
    {
      title: { en: "Photography courses", fa: "فروش دوره‌های عکاسی" },
      description: {
        en: "Present featured courses, detailed product information, pricing, and purchase actions in a focused storefront.",
        fa: "نمایش دوره‌های منتخب، اطلاعات محصول، قیمت و مسیر خرید در یک فروشگاه متمرکز و منظم.",
      },
    },
    {
      title: { en: "Editing tools", fa: "فروش ابزارهای تدوین" },
      description: {
        en: "Organize and sell presets, digital albums, and other creative editing products alongside courses.",
        fa: "دسته‌بندی و فروش پریست‌ها، آلبوم‌های دیجیتال و دیگر محصولات خلاقانه تدوین در کنار دوره‌ها.",
      },
    },
    {
      title: { en: "Complete administration", fa: "پنل مدیریت کامل" },
      description: {
        en: "Manage products, categories, discount codes, orders, payments, and customer reviews from one dashboard.",
        fa: "مدیریت محصولات، دسته‌بندی‌ها، کدهای تخفیف، سفارش‌ها، پرداخت‌ها و نظرات مشتریان در یک داشبورد.",
      },
    },
    {
      title: { en: "SpotPlayer connection", fa: "اتصال به SpotPlayer" },
      description: {
        en: "Connect protected course delivery to SpotPlayer configuration and license-management tools.",
        fa: "اتصال تحویل دوره‌های محافظت‌شده به تنظیمات SpotPlayer و ابزارهای مدیریت لایسنس.",
      },
    },
    {
      title: { en: "Automatic licenses", fa: "ساخت خودکار لایسنس" },
      description: {
        en: "Create course licenses automatically for eligible completed orders and surface fulfillment issues for review.",
        fa: "ساخت خودکار لایسنس دوره برای سفارش‌های تکمیل‌شده و نمایش خطاهای تحویل برای بررسی مدیر.",
      },
    },
    {
      title: { en: "Order and payment tracking", fa: "پیگیری سفارش و پرداخت" },
      description: {
        en: "Review recent orders, payment status, fulfillment progress, and items that require attention.",
        fa: "بررسی سفارش‌های اخیر، وضعیت پرداخت، روند تحویل و مواردی که به رسیدگی مدیر نیاز دارند.",
      },
    },
  ],
  cover: {
    src: "/images/projects/tog-academy/poster.png",
    width: 1536,
    height: 1024,
    alt: {
      en: "TOG Academy photography education storefront and management dashboard poster",
      fa: "پوستر فروشگاه دوره‌های عکاسی و پنل مدیریت آکادمی تاگ",
    },
  },
  gallery: [],
};

export const portfolioProjects = [
  lawyerPlatform,
  salamatab,
  tennisor,
  pishfactor,
  gameAccountBot,
  atrak,
  togAcademy,
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
