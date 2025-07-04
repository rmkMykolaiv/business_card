import assemblyImg from "../assets/img/assembly.jpg";
import projectImg from "../assets/img/project.jpg";
import distributionImg from "../assets/img/distribution.jpg";
import phoneImg from "../assets/icons/phone.svg";
import emailImg from "../assets/icons/email.svg";
import locationImg from "../assets/icons/location.svg";
import missionImg from "../assets/img/mission.webp";
import targetImg from "../assets/img/target.webp";
import arrowNextProjectStage from "../assets/icons/arrow_next_project_stage.svg";
import firstProjectStage from "../assets/img/first_project_stage.webp";
import supplyProjectStage from "../assets/img/supply_project_stage.webp";
import assemblingProjectStage from "../assets/img/assembling_project_stage.webp";
import finalProjectStage from "../assets/img/final_project_stage.webp";
import factory from "../assets/img/factory.webp";
import cementFactory from "../assets/img/cement_factory.webp";
import generator from "../assets/img/generator.webp";
import FC6kV from "../assets/img/FC6kV.jpg";
import dimateo from "../assets/img/dimateo.jpg";
import tp2 from "../assets/img/tp2.jpg";

let id = Date.now();

export const headerUkr = [
  {
    id: id++,
    text: "НАПРЯМИ ДІЯЛЬНОСТІ",
  },
  {
    id: id++,
    text: "ПРО КОМПАНІЮ",
  },
  {
    id: id++,
    text: "КОНТАКТИ",
  },
  {
    id: id++,
    text: "НОВИНИ",
  },
];

export const businessLineUkr = [
  {
    id: id++,
    img: assemblyImg,
    title: "МОНТАЖНІ РОБОТИ",
  },
  {
    id: id++,
    img: projectImg,
    title: "ПРОЕКТУВАННЯ",
  },
  {
    id: id++,
    img: distributionImg,
    title: "ДИСТРИБУЦІЯ",
  },
];

//aboutCompanyUkr - outdated data
export const aboutCompanyUkr = [
  {
    id: id++,
    preText: "Місія...",
    text: "впровадження оптимальних, безпечних та якісних інженерних електротехнічних рішень в новому будівництві, оновлені та відбудові існуючих об’єктів.",
    fullDescription1:
      "Ми завжди дотримуємось високих стандартів якості та безпеки, що дозволяє нам надавати найкращий сервіс для Клієнтів  та забезпечити ефективну роботу нашої команди. Спеціалісти компанії мають відповідний досвід, високий рівень кваліфікації, надійні та сучасні інструменти для проведення робіт.",
    fullDescription2:
      "Ми постійно стежимо за новими тенденціями та технологіями у своїй галузі, щоб запропонувати нашим Клієнтам найсучасніші та ефективні рішення, які забезпечать повну задоволеність їх потреб та очікувань.",
    name: "Олександр ДЕРМІЛЬОВ,",
    position: "директор",
    img: missionImg,
  },
  {
    id: id++,
    preText: "Ціль...",
    text: "бути ефективним та лідируючим провайдером з електромонтажних  робіт та інжинірингу.",
    img: targetImg,
  },
];

export const companyInfoUkr = {
  info: [
    {
      id: id++,
      preText: `ТОВ "РМК-Миколаїв"`,
      text: `– сучасна електромонтажна компанія, заснована у 2020 році з бажанням стати лідируючим провайдером з електромонтажних робіт та інжинірингу. Ми завжди дотримуємось високих стандартів якості та безпеки, що дозволяє нам надавати найкращий сервіс для Клієнтів  та забезпечити ефективну роботу нашої команди. Спеціалісти компанії мають відповідний досвід, високий рівень кваліфікації, допуски та дозволи, надійні та сучасні інструменти для проведення робіт.`,
    },
    {
      id: id++,
      text: `Компанія пропонує повний спектр послуг: проєктування, поставка електротехнічного обладнання, електромонтажні та пусконалагоджувальні роботи. Використовуючи сучасні технології та якісні матеріали, ми гарантуємо надійність, безпеку та енергоефективність наших рішень.`,
    },
    {
      id: id++,
      text: "Роботи виконуються згідно актуальних норм та правил, технічної документації, розроблених ПВР та нашого багаторічного досвіду.",
    },
    {
      id: id++,
      text: `ТОВ "РМК-Миколаїв" орієнтується на довгострокову співпрацю, забезпечуючи клієнтам якісний сервіс та індивідуальний підхід.`,
    },
  ],
  ceo: {
    name: "Олександр ДЕРМІЛЬОВ,",
    position: "директор",
  },
};

export const companyStatistics = {
  title: `Спеціалістами компанії виконано:`,
  list: [
    {
      id: id++,
      text: {
        prev: `прокладено більше`,
        colored: `200 кілометрів`,
        post: `контрольних та силових кабелів 0,4кВ;`,
      },
    },
    {
      id: id++,
      text: {
        prev: `прокладено більше`,
        colored: `10 кілометрів`,
        post: `кабелів 6-10кВ;`,
      },
    },
    {
      id: id++,
      text: {
        prev: `змонтовано та підключено більше`,
        colored: `500 шт.`,
        post: `щитів різноманітного призначення;`,
      },
    },
    {
      id: id++,
      text: {
        prev: `змонтовано та підключено більше`,
        colored: `1000 шт.`,
        post: `різноманітних світильників для зовнішнього та внутрішнього освітлення;`,
      },
    },
    {
      id: id++,
      text: {
        prev: `відцентровано більше`,
        colored: `100`,
        post: `двигунів.`,
      },
    },
  ],
};

export const projectStagesUkr = {
  title: "етапи реалізації проекту",
  arrowImg: arrowNextProjectStage,
  description: [
    {
      id: id++,
      itemTitle: "проектування",
      img: firstProjectStage,
      itemText: "… починається з оформлення технічного завдання",
    },
    {
      id: id++,
      itemTitle: "поставка матеріалів",
      img: supplyProjectStage,
      itemText: "закупка та поставка запроектованих матеріалів та обладнання",
    },
    {
      id: id++,
      itemTitle: "монтажні роботи",
      img: assemblingProjectStage,
      itemText:
        "погодження організаційних питань та графіку  з Замовником,  виконання робіт",
    },
    {
      id: id++,
      itemTitle: "оформлення виконавчої документації",
      img: finalProjectStage,
      itemText:
        "завершення робіт, оформлення та передача Замовнику відповідної документації, журналів та Актів",
    },
  ],
};

export const contactsUkr = [
  {
    id: id++,
    img: phoneImg,
    title: "ТЕЛЕФОН",
    info: "+ 38 (067) 495 24 95",
  },
  {
    id: id++,
    img: emailImg,
    title: "ПОШТА",
    info: "aleksandr.dermilov@ukr.net",
  },
  {
    id: id++,
    img: locationImg,
    title: "АДРЕСА",
    info: "54037, Україна, м.Миколаїв, вул.Приміська, буд.64/2",
  },
];

export const missionUkr = {
  id: id++,
  text: "ефективні, безпечні та якісні рішення",
  footerName: "© 2021 РМК-МИКОЛАЇВ",
};

export const sectionsTitles = {
  businessLine: {
    id: id++,
    text: "Напрями діяльності",
  },
  aboutCompany: {
    id: id++,
    text: "Про компанію",
  },
  contacts: {
    id: id++,
    text: "Контакти",
  },
  news: {
    id: id++,
    text: "Головні новини",
  },
};

export const assemblyDetailsUkr = {
  id: id++,
  title: "Ми пропонуємо наступні послуги з монтажу:",
  info: [
    { id: id++, text: "монтаж кабельних трас та кабелів 0,4кВ;" },
    { id: id++, text: "монтаж контрольних кабельних мереж;" },
    { id: id++, text: "монтаж та підключення щитів 0,4кВ;" },
    {
      id: id++,
      text: "монтаж та підключення контрольно-вимірювальних приладів;",
    },
    { id: id++, text: "монтаж внутрішнього освітлення;" },
    { id: id++, text: "монтаж зовнішнього освітлення;" },
    { id: id++, text: "монтаж контурів заземлення;" },
    { id: id++, text: "монтаж трас кабелів 6-10кВ;" },
    { id: id++, text: "пусконалагоджувальні роботи." },
  ],
};

export const projectsDetailsUkr = [
  {
    id: id++,
    title: "Ми пропонуємо наступні послуги з проектування:",
    info: [
      {
        id: id++,
        text: "проектування розділу ЕП (електропостачання, мережі 6-10кВ);",
      },
      {
        id: id++,
        text: "проектування розділу ЕТР (розташування обладнання, кабельні траси 0,4кВ, мережі 0,4кВ, схеми щитів, заземлення, розеткові мережі);",
      },
      {
        id: id++,
        text: "проектування розділу АК (контрольні мережі, підключення КВП);",
      },
      {
        id: id++,
        text: "проектування розділів ЕО та ЕЗ;",
      },
      {
        id: id++,
        text: "проектування розділу БЗ (блискавкозахист);",
      },
      {
        id: id++,
        text: "розробка проектно-кошторисної документації.",
      },
    ],
  },
  {
    id: id++,
    title: "Додатково пропонуємо:",
    info: [
      {
        id: id++,
        text: "супровід при проходженні експертизи розробленої нами проектної Документації;",
      },
      {
        id: id++,
        text: "розробку, відновлення проектної документації для існуючого обладнання;",
      },
      {
        id: id++,
        text: "бюджетні розрахунки для САРЕХ проектів електротехнічного напряму.",
      },
    ],
  },
];

export const distributionDetailsUkr = {
  id: id++,
  title:
    "Ми будемо раді запропонувати наступні матеріали та обладнання від офіційних постачальників на території України:",
  info: [
    { id: id++, text: "електротехнічне обладнання;" },
    { id: id++, text: "кабельно-провідникова продукція;" },
    { id: id++, text: "лотки та кабельні конструкції;" },
    { id: id++, text: "електрощитове обладнання." },
  ],
};

export const articlesNewsUkr = [
  {
    id: id++,
    attributes: {
      title: `Комплекс робіт з підключення італійської технологічної лінії Dimateo`,
      img: dimateo,
      article: [
        {
          id: id++,
          paragraph: `Спеціалісти нашої компанії виконали відповідальні роботи з підключення технологічної лінії у відповідності до вимог та схем Виробника обладнання.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `У рамках даних робіт було виконано:`,
          isPostTitle: true,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `монтаж та підключення комплектних електричних шаф;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `монтаж та підключення більше 10км силових та контрольних кабельних ліній;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `підключення двигунів, термісторів двигунів, постів керування, датчиків кінцевого положення, давачів рівня, давачі обертів, датчиків температури та вібрації підшипників, датчики тиску та температури та інші.`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Підключення комплектного технологічного обладнання від провідних Виробників це можливість ознайомитись з сучасними технічними рішеннями та необхідний досвід в розумінні технічної Документації та вдосконаленні робіт з його підключення.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: 2025р.`,
          isPostTitle: false,
          isShowMarker: false,
        },
      ],
      readMore: "читати далі...",
    },
  },
  {
    id: id++,
    attributes: {
      title: "Комплекс робіт з підключення перетворювача частоти 6кВ",
      img: FC6kV,
      article: [
        {
          id: id++,
          paragraph: `Спеціалістами нашої компанії виконані роботи з підключення унікального та інноваційного перетворювача частоти  6кВ Innomotics Perfect Harmony GH180, 5.5 МВт. Ми вдячні Замовнику за довіру та можливість прийняти участь в його інсталяції.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `На території України експлуатується дуже невелика кількість подібного типу та потужності високотехнологічного обладнання.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Всі роботи були виконані якісно та в стислі строки.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: січень 2025р.`,
          isPostTitle: false,
          isShowMarker: false,
        },
      ],
      readMore: "читати далі...",
    },
  },
  {
    id: id++,
    attributes: {
      title: `Обслуговування та поточний ремонт, ПрАТ "Івано-Франківськцемент"`,
      img: cementFactory,
      article: [
        {
          id: id++,
          paragraph: `Наша компанія вдячна за довіру від лідера українського ринку з виробництва цементу у залученні
          до робіт по забезпеченню надійної роботи технологічного обладнання та інфраструктури.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Спеціалістами ТОВ «РМК-Миколаїв» виконуються наступні роботи:`,
          isPostTitle: true,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `обслуговування та ремонт приводів виконавчих механізмів;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `центрування двигунів;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `обслуговування та ремонт кабельних трас та ліній;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `обслуговування та ремонт пультів місцевого управління, засобів безпеки та аварійної зупинки;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `обслуговування та ремонт систем електроживлення та освітлення виробничих ділянок та адміністративних будівель.`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: 2024р.`,
          isPostTitle: false,
          isShowMarker: false,
        },
      ],
      readMore: "читати далі...",
    },
  },
  {
    id: id++,
    attributes: {
      title: `Комплекс електромонтажних робіт для ПрАТ "Івано-Франківськцемент"`,
      img: cementFactory,
      article: [
        {
          id: id++,
          paragraph: `Спеціалістами компанії виконані відповідальні роботи з 
          підключення шнеків, аспірації, повітродувок та іншого технологічного обладнання, а саме:`,
          isPostTitle: true,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Монтаж та підключення електричних шаф та перетворювачів частоти;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Монтаж приладів КВП;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Монтаж кабельних  трас;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Монтаж та підключення силових, контрольних та мережевих кабелів;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Монтаж локальних постів та приладів керування;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Участь разом з представниками Замовника у пуско-налагоджувальних роботах.`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Всі роботи були виконані якісно та у дуже стислі строки.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Ми вдячні за надану довіру та можливість продемонструвати наш досвід для задач різного ступеня складності.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: квітень 2024р.`,
          isPostTitle: false,
          isShowMarker: false,
        },
      ],
      readMore: "читати далі...",
    },
  },
  {
    id: id++,
    attributes: {
      title: "Участь у відновленні заводу після російської агресії",
      img: factory,
      article: [
        {
          id: id++,
          paragraph: `Наша компанія була вдячна за надану довіру та можливість прийняти участь у відновленні заводу, 
          який зазнав великих руйнувань внаслідок російської агресії.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `В якості підрядника було виконано великий спектр електромонтажних та пусконалагоджувальних робіт, 
          серед яких демонтаж пошкодженого устаткування та монтаж нового, монтаж силових та контрольних кабельних трас, 
          підключення та налагоджування обладнання.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `В процесі виконання робіт прокладено:`,
          isPostTitle: true,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `більше 10 км силових кабелів;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `більше 12 км контрольних кабелів;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `біля 6 км трубки пневматики;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `більше 10 км різноманітних кабельних конструкцій.`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Використовувались матеріали від провідних виробників:`,
          isPostTitle: true,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `кабельна продукція Lapp, OLFLEX CLASSIC 115, 110;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `мережеві кабелі ETHERLINE H CAT.5e;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `кабельні конструкції - OBO Bettermann.`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Не дивлячись на суттєві ризики виконання робіт у прифронтовій зоні, всі роботи були виконані вчасно та якісно.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: липень – вересень 2023р.`,
          isPostTitle: false,
          isShowMarker: false,
        },
      ],
      readMore: "читати далі...",
    },
  },
  {
    id: id++,
    attributes: {
      title: "Монтаж та підключення дизельного-генератору 1 МВт",
      img: generator,
      article: [
        {
          id: id++,
          paragraph: `Перед нашою компанією постало завдання підключити до мереж існуючої ТП дизель-генератор (ДГ) 1250 кВА 
                      (Standby) відповідно до розробленої проектної документації.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `В рамках цих робіт ми виконали:`,
          isPostTitle: true,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `підготували фундамент для встановлення ДГ;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `проклали кабельні траси, використовуючи лотки OBO Bettermann;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `проклали кабелі ВВГнг необхідного перерізу в траншеях та по кабельних конструкціях;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `проклали кабелі власних потреб ДГ;`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `виконали монтаж зовнішнього контуру заземлення (OBO Bettermann);`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `підключили обладнання.`,
          isPostTitle: false,
          isShowMarker: true,
        },
        {
          id: id++,
          paragraph: `Всі роботи були виконані вчасно та якісно.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Місце проведення робіт: м. Миколаїв.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: травень 2023р.`,
          isPostTitle: false,
          isShowMarker: false,
        },
      ],
      readMore: "читати далі...",
    },
  },
  {
    id: id++,
    attributes: {
      title: "Технічне переоснащення ТП-2 ПрАТ«Дікергофф Цемент Україна» філія «ЮГцемент»",
      img: tp2,
      article: [
        {
          id: id++,
          paragraph: `Наша компанія взяла участь у технічному переоснащенні ТП-2, що підвищило надійність та безпеку експлуатації електроустановки, яка забезпечує живлення технологічного процесу.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Усі роботи виконано відповідно до затвердженої проєктної документації та в установлені строки під час планової зупинки виробництва.`,
          isPostTitle: false,
          isShowMarker: false,
        },
        {
          id: id++,
          paragraph: `Період виконання робіт: 2020р.`,
          isPostTitle: false,
          isShowMarker: false,
        },
      ],
      readMore: "читати далі...",
    },
  },
];
