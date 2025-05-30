/**
 * Language configuration for Valyuta Kurslari Moliyaviy Xatar Boshqaruvi
 */

const LANGUAGES = {
  uz: {
    name: "O'zbek",
    flag: "🇺🇿",
    texts: {
      // Navigation
      nav_home: "Kurslar",
      nav_chart: "Grafik",
      nav_recommendations: "Tavsiyalar",
      nav_login: "Kirish",


      // Home page
      title_home: "Bugungi Kurslar",
      subtitle_home:
        "O'zbekiston so'miga nisbatan asosiy valyutalar kurslari va ularning xavf darajalari",
      btn_refresh: "Yangilash",
      last_updated: "So'nggi yangilanish:",
      loading: "Ma'lumotlar yuklanmoqda...",
      view_chart: "Grafikni Ko'rish",

      // Chart page
      title_chart: "Haftalik Grafik",
      subtitle_chart: "So'nggi 7 kun ichida valyuta kurslarining o'zgarishi",

      // Recommendations page
      title_recommendations: "Moliyaviy Tavsiyalar",
      subtitle_recommendations:
        "Valyuta kurslari asosida moliyaviy qarorlar qabul qilish uchun tavsiyalar",
      importers: "Importchilar uchun",
      exporters: "Eksportchilar uchun",
      investors: "Investorlar uchun",

      // Risk levels
      risk_low: "Past xavf",
      risk_medium: "O'rtacha xavf",
      risk_high: "Yuqori xavf",

      // Currency names
      currency_usd: "AQSh dollari",
      currency_eur: "Yevro",
      currency_rub: "Rossiya rubli",
      currency_cny: "Xitoy yuani",
      currency_kzt: "Qozog'iston tengesi",

      // Footer
      footer_copyright: "© 2025 Valyuta Xatar Boshqaruvi",
      footer_data_source: "Ma'lumotlar:",
      
      // Auth pages
      login_title: "Tizimga kirish",
      login_subtitle: "Shaxsiy hisobingizga kirish uchun ma'lumotlaringizni kiriting",
      register_title: "Ro'yxatdan o'tish",
      register_subtitle: "Yangi hisob yaratish uchun ma'lumotlaringizni kiriting",
      email: "Email manzil",
      password: "Parol",
      confirm_password: "Parolni tasdiqlang",
      full_name: "To'liq ism",
      user_type: "Foydalanuvchi turi",
      select_user_type: "Foydalanuvchi turini tanlang",
      individual: "Jismoniy shaxs",
      business: "Biznes",
      investor: "Investor",
      remember_me: "Meni eslab qolish",
      forgot_password: "Parolni unutdingizmi?",
      login_button: "Kirish",
      register_button: "Ro'yxatdan o'tish",
      or: "yoki",
      no_account: "Hisobingiz yo'qmi?",
      have_account: "Hisobingiz bormi?",
      register_link: "Ro'yxatdan o'tish",
      login_link: "Tizimga kirish",
      agree_terms_1: "Men",
      terms_link: "foydalanish shartlari",
      agree_terms_2: "va",
      privacy_link: "maxfiylik siyosati",
      agree_terms_3: "bilan tanishdim va roziman",
      back_to_home: "Bosh sahifaga qaytish",

      
      // Auth errors
      error_email_required: "Email manzilni kiriting",
      error_email_invalid: "Noto'g'ri email manzil",
      error_password_required: "Parolni kiriting",
      error_password_length: "Parol kamida 8 ta belgidan iborat bo'lishi kerak",
      error_confirm_password_required: "Parolni tasdiqlang",
      error_passwords_not_match: "Parollar mos kelmadi",
      error_name_required: "To'liq ismingizni kiriting",
      error_user_type_required: "Foydalanuvchi turini tanlang",
      error_user_not_found: "Bunday foydalanuvchi topilmadi",
      error_incorrect_password: "Noto'g'ri parol",
      error_email_exists: "Bu email manzil bilan ro'yxatdan o'tilgan",
      
      // Auth success
      login_success: "Muvaffaqiyatli kirdingiz",
      register_success: "Muvaffaqiyatli ro'yxatdan o'tdingiz",
      
      // User profile
      profile_settings: "Sozlamalar",
      logout: "Chiqish",
      
      // Landing page
      landing_hero_title: "Valyuta kurslarini kuzating va moliyaviy xatarlarni boshqaring",
      landing_hero_subtitle: "O'zbekiston so'miga nisbatan asosiy valyutalar kurslari va ularning xavf darajalarini real vaqtda kuzating",
      landing_learn_more: "Batafsil ma'lumot",
      landing_get_started: "Boshlash",
      landing_features_title: "Asosiy imkoniyatlar",
      landing_features_subtitle: "ValyutaXavf platformasi sizga quyidagi imkoniyatlarni taqdim etadi",
      feature_rates_title: "Joriy valyuta kurslari",
      feature_rates_desc: "Asosiy valyutalarning O'zbek so'miga nisbatan joriy kurslarini real vaqtda kuzating",
      feature_charts_title: "Kurslar o'zgarishi grafikasi",
      feature_charts_desc: "So'nggi 7 kun ichidagi valyuta kurslari o'zgarishini vizual grafiklar orqali tahlil qiling",
      feature_recommendations_title: "Moliyaviy tavsiyalar",
      feature_recommendations_desc: "Valyuta kurslari o'zgarishiga qarab importchilar, eksportchilar va investorlar uchun tavsiyalar oling",
      feature_risk_title: "Xavf darajasi indikatorlari",
      feature_risk_desc: "Valyuta kurslari o'zgarishiga qarab xavf darajasini baholang va moliyaviy qarorlar qabul qiling",
      landing_how_title: "Qanday ishlaydi",
      landing_how_subtitle: "Platformadan foydalanish juda oson",
      step_register_title: "Ro'yxatdan o'ting",
      step_register_desc: "Platformadan to'liq foydalanish uchun ro'yxatdan o'ting yoki tizimga kiring",
      step_dashboard_title: "Boshqaruv paneliga kiring",
      step_dashboard_desc: "Bosh sahifada joriy valyuta kurslarini va xavf darajalarini ko'ring",
      step_analyze_title: "Ma'lumotlarni tahlil qiling",
      step_analyze_desc: "Grafiklar va tavsiyalar orqali valyuta kurslarini chuqur tahlil qiling",
      step_decide_title: "Qarorlar qabul qiling",
      step_decide_desc: "Platformadan olgan ma'lumotlar asosida to'g'ri moliyaviy qarorlar qabul qiling",
      landing_cta_title: "Hoziroq boshlang",
      landing_cta_subtitle: "Valyuta kurslarini kuzatish va moliyaviy xatarlarni boshqarish uchun platformamizga qo'shiling",
      footer_platform: "Platforma",
      footer_features: "Imkoniyatlar",
      footer_how_it_works: "Qanday ishlaydi",
      footer_pricing: "Narxlar",
      footer_faq: "Ko'p so'raladigan savollar",
      footer_company: "Kompaniya",
      footer_about: "Biz haqimizda",
      footer_careers: "Karyera",
      footer_blog: "Blog",
      footer_contact: "Bog'lanish",
      footer_legal: "Huquqiy",
      footer_terms: "Foydalanish shartlari",
      footer_privacy: "Maxfiylik siyosati",
      footer_cookies: "Cookies siyosati",
      footer_follow_us: "Bizni kuzating",

      // Recommendations for importers
      imp_high_up:
        "kursi sezilarli darajada oshmoqda ({change}%). Import qiluvchilar uchun xavfli davr. Imkon bo'lsa, importni kechiktiring yoki valyuta zaxirasini ko'paytiring.",
      imp_medium_up:
        "kursi o'rtacha darajada oshmoqda ({change}%). Import qiluvchilar uchun ehtiyotkorlik talab etiladi. Qisqa muddatli importni ko'rib chiqing.",
      imp_stable:
        "kursi barqaror holatda ({change}%). Import qiluvchilar uchun qulay davr.",
      imp_high_down:
        "kursi sezilarli darajada tushmoqda ({change}%). Import qiluvchilar uchun juda qulay davr. Importni tezlashtirish tavsiya etiladi.",
      imp_medium_down:
        "kursi o'rtacha darajada tushmoqda ({change}%). Import qiluvchilar uchun qulay davr. Importni rejalashtirish mumkin.",

      // Actions for importers
      act_imp_delay: "Importni kechiktirish tavsiya etiladi",
      act_imp_caution: "Ehtiyotkorlik bilan harakat qiling",
      act_imp_plan: "Importni rejalashtirish mumkin",
      act_imp_accelerate: "Importni tezlashtiring",

      // Recommendations for exporters
      exp_high_up:
        "kursi sezilarli darajada oshmoqda ({change}%). Eksport qiluvchilar uchun juda qulay davr. Eksportni tezlashtirish tavsiya etiladi.",
      exp_medium_up:
        "kursi o'rtacha darajada oshmoqda ({change}%). Eksport qiluvchilar uchun qulay davr. Eksportni rejalashtirish mumkin.",
      exp_stable:
        "kursi barqaror holatda ({change}%). Eksport qiluvchilar uchun qulay davr.",
      exp_high_down:
        "kursi sezilarli darajada tushmoqda ({change}%). Eksport qiluvchilar uchun xavfli davr. Imkon bo'lsa, eksportni kechiktiring.",
      exp_medium_down:
        "kursi o'rtacha darajada tushmoqda ({change}%). Eksport qiluvchilar uchun ehtiyotkorlik talab etiladi. Qisqa muddatli eksportni ko'rib chiqing.",

      // Actions for exporters
      act_exp_accelerate: "Eksportni tezlashtiring",
      act_exp_plan: "Eksportni rejalashtiring",
      act_exp_delay: "Eksportni kechiktirish tavsiya etiladi",
      act_exp_caution: "Ehtiyotkorlik bilan harakat qiling",

      // Recommendations for investors
      inv_high_up:
        "kursi sezilarli darajada oshmoqda ({change}%). Investorlar uchun {currency}dan UZSga o'tish qulay vaqt. Kurs tushishi mumkin bo'lgan davrni kuting.",
      inv_medium_up:
        "kursi o'rtacha darajada oshmoqda ({change}%). Investorlar uchun qisman {currency}dan UZSga o'tish mumkin. Diversifikatsiyani saqlang.",
      inv_stable:
        "kursi barqaror holatda ({change}%). Investorlar uchun hozirgi pozitsiyani saqlash tavsiya etiladi.",
      inv_high_down:
        "kursi sezilarli darajada tushmoqda ({change}%). Investorlar uchun UZSdan {currency}ga o'tish qulay vaqt. Kurs ko'tarilishi mumkin bo'lgan davrni kuting.",
      inv_medium_down:
        "kursi o'rtacha darajada tushmoqda ({change}%). Investorlar uchun qisman UZSdan {currency}ga o'tish mumkin. Diversifikatsiyani saqlang.",

      // Actions for investors
      act_inv_to_uzs: "{currency}dan UZSga o'tishni ko'rib chiqing",
      act_inv_diversify: "Diversifikatsiyani saqlang",
      act_inv_hold: "Hozirgi pozitsiyani saqlang",
      act_inv_from_uzs: "UZSdan {currency}ga o'tishni ko'rib chiqing",

      // No data
      no_data: "Ma'lumotlar mavjud emas",
      no_change: "O'zgarishsiz",
      offline_error:
        "Internet ulanishida xatolik. Oxirgi saqlangan ma'lumotlar ko'rsatilmoqda",
      no_offline_data:
        "Internet ulanishida xatolik va mahalliy ma'lumotlar mavjud emas",

      // Chart
      date: "Sana",
      risk_level: "Xavf darajasi",

      // Language
      language: "Til",
    },
  },
  ru: {
    name: "Русский",
    flag: "🇷🇺",
    texts: {
      // Navigation
      nav_home: "Курсы",
      nav_chart: "График",
      nav_recommendations: "Рекомендации",
      nav_login: "Вход",


      // Home page
      title_home: "Сегодняшние курсы",
      subtitle_home:
        "Курсы основных валют по отношению к узбекскому суму и их уровни риска",
      btn_refresh: "Обновить",
      last_updated: "Последнее обновление:",
      loading: "Загрузка данных...",
      view_chart: "Просмотр графика",

      // Chart page
      title_chart: "Недельный график",
      subtitle_chart: "Изменение курсов валют за последние 7 дней",

      // Recommendations page
      title_recommendations: "Финансовые рекомендации",
      subtitle_recommendations:
        "Рекомендации для принятия финансовых решений на основе курсов валют",
      importers: "Для импортеров",
      exporters: "Для экспортеров",
      investors: "Для инвесторов",

      // Risk levels
      risk_low: "Низкий риск",
      risk_medium: "Средний риск",
      risk_high: "Высокий риск",

      // Currency names
      currency_usd: "Доллар США",
      currency_eur: "Евро",
      currency_rub: "Российский рубль",
      currency_cny: "Китайский юань",
      currency_kzt: "Казахстанский тенге",

      // Footer
      footer_copyright: "© 2025 Управление валютными рисками",
      footer_data_source: "Источник данных:",

      // Recommendations for importers
      imp_high_up:
        "курс значительно растет ({change}%). Опасный период для импортеров. По возможности, отложите импорт или увеличьте валютные резервы.",
      imp_medium_up:
        "курс умеренно растет ({change}%). Требуется осторожность для импортеров. Рассмотрите краткосрочный импорт.",
      imp_stable:
        "курс стабилен ({change}%). Благоприятный период для импортеров.",
      imp_high_down:
        "курс значительно падает ({change}%). Очень благоприятный период для импортеров. Рекомендуется ускорить импорт.",
      imp_medium_down:
        "курс умеренно падает ({change}%). Благоприятный период для импортеров. Можно планировать импорт.",

      // Actions for importers
      act_imp_delay: "Рекомендуется отложить импорт",
      act_imp_caution: "Действуйте с осторожностью",
      act_imp_plan: "Можно планировать импорт",
      act_imp_accelerate: "Ускорьте импорт",

      // Recommendations for exporters
      exp_high_up:
        "курс значительно растет ({change}%). Очень благоприятный период для экспортеров. Рекомендуется ускорить экспорт.",
      exp_medium_up:
        "курс умеренно растет ({change}%). Благоприятный период для экспортеров. Можно планировать экспорт.",
      exp_stable:
        "курс стабилен ({change}%). Благоприятный период для экспортеров.",
      exp_high_down:
        "курс значительно падает ({change}%). Опасный период для экспортеров. По возможности, отложите экспорт.",
      exp_medium_down:
        "курс умеренно падает ({change}%). Требуется осторожность для экспортеров. Рассмотрите краткосрочный экспорт.",

      // Actions for exporters
      act_exp_accelerate: "Ускорьте экспорт",
      act_exp_plan: "Планируйте экспорт",
      act_exp_delay: "Рекомендуется отложить экспорт",
      act_exp_caution: "Действуйте с осторожностью",

      // Recommendations for investors
      inv_high_up:
        "курс значительно растет ({change}%). Благоприятное время для перехода с {currency} на UZS для инвесторов. Дождитесь периода, когда курс может упасть.",
      inv_medium_up:
        "курс умеренно растет ({change}%). Инвесторы могут частично перейти с {currency} на UZS. Сохраняйте диверсификацию.",
      inv_stable:
        "курс стабилен ({change}%). Инвесторам рекомендуется сохранять текущую позицию.",
      inv_high_down:
        "курс значительно падает ({change}%). Благоприятное время для перехода с UZS на {currency} для инвесторов. Дождитесь периода, когда курс может вырасти.",
      inv_medium_down:
        "курс умеренно падает ({change}%). Инвесторы могут частично перейти с UZS на {currency}. Сохраняйте диверсификацию.",

      // Actions for investors
      act_inv_to_uzs: "Рассмотрите переход с {currency} на UZS",
      act_inv_diversify: "Сохраняйте диверсификацию",
      act_inv_hold: "Сохраняйте текущую позицию",
      act_inv_from_uzs: "Рассмотрите переход с UZS на {currency}",

      // No data
      no_data: "Данные недоступны",
      no_change: "Без изменений",
      offline_error:
        "Ошибка подключения к интернету. Отображаются последние сохраненные данные",
      no_offline_data: "Ошибка подключения к интернету и нет локальных данных",

      // Chart
      date: "Дата",
      risk_level: "Уровень риска",

      // Language
      language: "Язык",
      
      // Auth pages
      login_title: "Вход в систему",
      login_subtitle: "Введите свои данные для входа в личный кабинет",
      register_title: "Регистрация",
      register_subtitle: "Введите свои данные для создания нового аккаунта",
      email: "Электронная почта",
      password: "Пароль",
      confirm_password: "Подтвердите пароль",
      full_name: "Полное имя",
      user_type: "Тип пользователя",
      select_user_type: "Выберите тип пользователя",
      individual: "Физическое лицо",
      business: "Бизнес",
      investor: "Инвестор",
      remember_me: "Запомнить меня",
      forgot_password: "Забыли пароль?",
      login_button: "Войти",
      register_button: "Зарегистрироваться",
      or: "или",
      no_account: "Нет аккаунта?",
      have_account: "Уже есть аккаунт?",
      register_link: "Зарегистрироваться",
      login_link: "Войти",
      agree_terms_1: "Я прочитал и согласен с",
      terms_link: "условиями использования",
      agree_terms_2: "и",
      privacy_link: "политикой конфиденциальности",
      agree_terms_3: "",
      back_to_home: "Вернуться на главную",

      
      // Auth errors
      error_email_required: "Введите электронную почту",
      error_email_invalid: "Неверный формат электронной почты",
      error_password_required: "Введите пароль",
      error_password_length: "Пароль должен содержать не менее 8 символов",
      error_confirm_password_required: "Подтвердите пароль",
      error_passwords_not_match: "Пароли не совпадают",
      error_name_required: "Введите полное имя",
      error_user_type_required: "Выберите тип пользователя",
      error_user_not_found: "Пользователь не найден",
      error_incorrect_password: "Неверный пароль",
      error_email_exists: "Пользователь с такой электронной почтой уже зарегистрирован",
      
      // Auth success
      login_success: "Вы успешно вошли в систему",
      register_success: "Вы успешно зарегистрировались",
      
      // User profile
      profile_settings: "Настройки",
      logout: "Выход",
      
      // Landing page
      landing_hero_title: "Отслеживайте курсы валют и управляйте финансовыми рисками",
      landing_hero_subtitle: "Отслеживайте в реальном времени курсы основных валют по отношению к узбекскому суму и их уровни риска",
      landing_learn_more: "Подробнее",
      landing_get_started: "Начать",
      landing_features_title: "Основные возможности",
      landing_features_subtitle: "Платформа ValyutaXavf предоставляет вам следующие возможности",
      feature_rates_title: "Текущие курсы валют",
      feature_rates_desc: "Отслеживайте в реальном времени текущие курсы основных валют по отношению к узбекскому суму",
      feature_charts_title: "График изменения курсов",
      feature_charts_desc: "Анализируйте изменения курсов валют за последние 7 дней с помощью визуальных графиков",
      feature_recommendations_title: "Финансовые рекомендации",
      feature_recommendations_desc: "Получайте рекомендации для импортеров, экспортеров и инвесторов на основе изменения курсов валют",
      feature_risk_title: "Индикаторы уровня риска",
      feature_risk_desc: "Оценивайте уровень риска на основе изменения курсов валют и принимайте финансовые решения",
      landing_how_title: "Как это работает",
      landing_how_subtitle: "Использовать платформу очень просто",
      step_register_title: "Зарегистрируйтесь",
      step_register_desc: "Зарегистрируйтесь или войдите в систему для полного доступа к платформе",
      step_dashboard_title: "Перейдите в панель управления",
      step_dashboard_desc: "Просматривайте текущие курсы валют и уровни риска на главной странице",
      step_analyze_title: "Анализируйте данные",
      step_analyze_desc: "Глубоко анализируйте курсы валют с помощью графиков и рекомендаций",
      step_decide_title: "Принимайте решения",
      step_decide_desc: "Принимайте правильные финансовые решения на основе полученной информации",
      landing_cta_title: "Начните прямо сейчас",
      landing_cta_subtitle: "Присоединяйтесь к нашей платформе для отслеживания курсов валют и управления финансовыми рисками",
      footer_platform: "Платформа",
      footer_features: "Возможности",
      footer_how_it_works: "Как это работает",
      footer_pricing: "Цены",
      footer_faq: "Часто задаваемые вопросы",
      footer_company: "Компания",
      footer_about: "О нас",
      footer_careers: "Карьера",
      footer_blog: "Блог",
      footer_contact: "Контакты",
      footer_legal: "Правовая информация",
      footer_terms: "Условия использования",
      footer_privacy: "Политика конфиденциальности",
      footer_cookies: "Политика использования файлов cookie",
      footer_follow_us: "Подписывайтесь на нас",
    },
  },
};

// Default language
let currentLanguage = "uz";

// Get text by key
function getText(key, replacements = {}) {
  const text =
    LANGUAGES[currentLanguage].texts[key] || LANGUAGES["uz"].texts[key] || key;

  // Replace placeholders with values
  let result = text;
  for (const [placeholder, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(`\\{${placeholder}\\}`, "g"), value);
  }

  return result;
}

// Set language
function setLanguage(lang) {
  if (LANGUAGES[lang]) {
    currentLanguage = lang;
    saveToLocalStorage("valyutaXavf_language", lang);
    updatePageLanguage();
  }
}

// Get current language
function getCurrentLanguage() {
  return currentLanguage;
}

// Initialize language from local storage or browser settings
function initLanguage() {
  const savedLanguage = getFromLocalStorage("valyutaXavf_language");
  if (savedLanguage && LANGUAGES[savedLanguage]) {
    currentLanguage = savedLanguage;
  } else {
    // Try to detect from browser
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith("ru")) {
      currentLanguage = "ru";
    }
  }
}

// Update all text elements on the page
function updatePageLanguage() {
  document.querySelectorAll("[data-lang-key]").forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    if (key) {
      // Check if this is an input with placeholder
      if (element.hasAttribute("placeholder")) {
        element.placeholder = getText(key);
      } else {
        element.textContent = getText(key);
      }
    }
  });

  // Trigger custom event for dynamic content
  document.dispatchEvent(
    new CustomEvent("languageChanged", {
      detail: { language: currentLanguage },
    })
  );
}
