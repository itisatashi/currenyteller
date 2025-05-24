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
      footer_copyright: "© 2025 Valyuta Xatar Boshqaruvi MVP",
      footer_data_source: "Ma'lumotlar:",

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
      footer_copyright: "© 2025 Управление валютными рисками MVP",
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
