// ВКЛАДКА ЗА ЗАМОВЧУВАННЯМ "HOME"________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  goToHome();
  goToEn();
});

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "ABOUT US"_____________________________________________
function goToAbout() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("solutions").classList.remove("active");
  document.getElementById("contacts").classList.remove("active");
  document.getElementById("footer-home").classList.remove("footer-active");
  document.getElementById("footer-solutions").classList.remove("footer-active");
  document.getElementById("footer-contacts").classList.remove("footer-active");
  document.getElementById("about-us").classList.add("active");
  document.getElementById("footer-about-us").classList.add("footer-active");

  document.getElementById("home-content").style.display = "none";
  document.getElementById("solutions-content").style.display = "none";
  document.getElementById("solutions-content_1").style.display = "none";
  document.getElementById("contacts-content").style.display = "none";
  document.getElementById("about-content").style.display = "block";

  window.location.href = "#about-content";
}
//////////////////////////////////////////////////////////////////////////////

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "HOME"_____________________________________________
document.getElementById("home").addEventListener("click", goToHome);

function goToHome() {
  document.getElementById("about-us").classList.remove("active");
  document.getElementById("solutions").classList.remove("active");
  document.getElementById("contacts").classList.remove("active");
  document.getElementById("footer-about-us").classList.remove("footer-active");
  document.getElementById("footer-solutions").classList.remove("footer-active");
  document.getElementById("footer-contacts").classList.remove("footer-active");
  document.getElementById("home").classList.add("active");
  document.getElementById("footer-home").classList.add("footer-active");

  document.getElementById("about-content").style.display = "none";
  document.getElementById("solutions-content").style.display = "none";
  document.getElementById("contacts-content").style.display = "none";
  document.getElementById("home-content").style.display = "block";

  window.location.href = "#home-content";
}

document.getElementById("about-us").addEventListener("click", goToAbout);

document.getElementById("read-more").addEventListener("click", goToAbout);

document.getElementById("home").addEventListener("click", goToHome);

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "CONTACTS"__________________________________________________________

function goToContacts() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("about-us").classList.remove("active");
  document.getElementById("solutions").classList.remove("active");
  document.getElementById("footer-home").classList.remove("footer-active");
  document.getElementById("footer-about-us").classList.remove("footer-active");
  document.getElementById("footer-solutions").classList.remove("footer-active");
  document.getElementById("contacts").classList.add("active");
  document.getElementById("footer-contacts").classList.add("footer-active");

  document.getElementById("home-content").style.display = "none";
  document.getElementById("about-content").style.display = "none";
  document.getElementById("solutions-content_1").style.display = "none";
  document.getElementById("solutions-content").style.display = "none";
  document.getElementById("contacts-content").style.display = "block";

  window.location.href = "#contacts-content";
}

document.getElementById("contacts").addEventListener("click", goToContacts);

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "SOLUTIONS"__________________________________________________________________
function goToSolutions() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("about-us").classList.remove("active");
  document.getElementById("contacts").classList.remove("active");
  document.getElementById("footer-home").classList.remove("footer-active");
  document.getElementById("footer-about-us").classList.remove("footer-active");
  document.getElementById("footer-contacts").classList.remove("footer-active");
  document.getElementById("solutions").classList.add("active");
  document.getElementById("footer-solutions").classList.add("footer-active");

  document.getElementById("home-content").style.display = "none";
  document.getElementById("about-content").style.display = "none";
  document.getElementById("contacts-content").style.display = "none";
  document.getElementById("solutions-content").style.display = "block";
  document.getElementById("solutions-content_1").style.display = "block";

  window.location.href = "#solutions-content";
}

document.getElementById("solutions").addEventListener("click", goToSolutions);
document.getElementById("aud").addEventListener("click", goToSolutions);
document.getElementById("proc").addEventListener("click", goToSolutions);
document.getElementById("sour").addEventListener("click", goToSolutions);
document.getElementById("qual").addEventListener("click", goToSolutions);
document.getElementById("log").addEventListener("click", goToSolutions);

// РОЗКРИТТЯ ВКЛАДКИ SOLUTION ВЕРХНЯ ПАНЕЛЬ____________________________________________________________________________

let dropdownMenuItems = document.querySelectorAll(".down");

dropdownMenuItems.forEach(function (item) {
	let downMenu = item.querySelector(".down-menu");
	let isHovering = false; // Змінна для відстеження, чи перебуває мишка на підменю
	let timeoutId; // Змінна для збереження ідентифікатора таймауту
 
	item.addEventListener("mouseenter", function () {
		clearTimeout(timeoutId);
	  downMenu.style.display = "block";
	});
 
	item.addEventListener("mouseleave", function () {
		timeoutId = setTimeout(function () {
	  if (!isHovering) {
		 downMenu.style.display = "none";
	  }
	}, 200); 
	});
 
	downMenu.addEventListener("mouseenter", function () {
	  isHovering = true;
	});
 
	downMenu.addEventListener("mouseleave", function () {
	  isHovering = false;
	  downMenu.style.display = "none"; 
	});
 });

// РОЗКРИТТЯ ВКЛАДКИ SOLUTION НИЖНЯ ПАНЕЛЬ ПАНЕЛЬ____________________________________________________________________________
let dropdown = document.getElementsByClassName("sub-tab");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
	   this.classList.toggle("down-container");

    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

document
  .getElementById("audit-consulting")
  .addEventListener("click", goToAudit);
document.getElementById("aud").addEventListener("click", goToAudit);

function goToAudit() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-container-1").style.display = "block";
}

document.getElementById("process-management")
  .addEventListener("click", goToManagement);
document.getElementById("proc").addEventListener("click", goToManagement);

function goToManagement() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-container-2").style.display = "block";
}

document
.getElementById("sourcing").addEventListener("click", goToSourcing);
document.getElementById("sour").addEventListener("click", goToSourcing);

function goToSourcing() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-container-3").style.display = "block";
}

document
  .getElementById("quality-assurance")
  .addEventListener("click", goToQuality);
document.getElementById("qual").addEventListener("click", goToQuality);

function goToQuality() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-container-4").style.display = "block";
}

document
.getElementById("logistics")
.addEventListener("click", goToLogistics);
document.getElementById("log").addEventListener("click", goToLogistics);

function goToLogistics() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "block";
}

//SLIDER__________________________________________________________________________

function Slider() {
  let slider = document.getElementById("slider");
  let switch1 = document.getElementById("switch1");
  let switch2 = document.getElementById("switch2");
  let arrowLeft = document.querySelector(".slider-arrow.left");
  let arrowRight = document.querySelector(".slider-arrow.right");
  let autoSlideInterval;

  // Функція для автоматичного руху слайдів
  function autoSlide() {
    if (switch1.checked) {
      switch2.checked = true;
    } else {
      switch1.checked = true;
    }
  }

  // Запуск автоматичного руху слайдів
  function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000);
  }

  // Зупинка автоматичного руху слайдів
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Обробник події при натисканні на стрілку вліво
  arrowLeft.addEventListener("click", function () {
    switch1.checked = true;
    stopAutoSlide();
  });

  // Обробник події при натисканні на стрілку вправо
  arrowRight.addEventListener("click", function () {
    switch2.checked = true;
    stopAutoSlide();
  });

  // Обробник події при наведенні на слайдер
  slider.addEventListener("mouseenter", stopAutoSlide);

  // Обробник події при відведенні курсора від слайдера
  slider.addEventListener("mouseleave", startAutoSlide);

  // Запуск автоматичного руху слайдів при завантаженні сторінки
  startAutoSlide();
}
Slider();
//LANGUAGE******************************************************************************************************************************
  function goToEn() {
	document.getElementById("language-link_uk").classList.remove("active");
	document.getElementById("language-link_es").classList.remove("active");
	document.getElementById("language-link_zh").classList.remove("active");
	document.getElementById("language-link_en").classList.add("active");
  }
  document.getElementById("language-link_en").addEventListener("click", goToEn);

  function goToUk() {
	document.getElementById("language-link_en").classList.remove("active");
	document.getElementById("language-link_es").classList.remove("active");
	document.getElementById("language-link_zh").classList.remove("active");
	document.getElementById("language-link_uk").classList.add("active");
  }
  document.getElementById("language-link_uk").addEventListener("click", goToUk);

  function goToEs() {
	document.getElementById("language-link_en").classList.remove("active");
	document.getElementById("language-link_uk").classList.remove("active");
	document.getElementById("language-link_zh").classList.remove("active");
	document.getElementById("language-link_es").classList.add("active");
  }
  document.getElementById("language-link_es").addEventListener("click", goToEs);
  
  function goToZh() {
	document.getElementById("language-link_en").classList.remove("active");
	document.getElementById("language-link_uk").classList.remove("active");
	document.getElementById("language-link_es").classList.remove("active");
	document.getElementById("language-link_zh").classList.add("active");
  }
  document.getElementById("language-link_zh").addEventListener("click", goToZh);

function changeLanguage(language) {
	let elementsToTranslate = document.querySelectorAll("[data-translate]");

  switch (language) {
    case "en":
      elementsToTranslate.forEach(function (element) {
        let key = element.getAttribute("data-translate");
        element.textContent = translations.en[key];
      });
      break;
    case "uk":
      elementsToTranslate.forEach(function (element) {
        let key = element.getAttribute("data-translate");
        element.textContent = translations.uk[key] || "";
      });
      break;
    case "es":
      elementsToTranslate.forEach(function (element) {
        let key = element.getAttribute("data-translate");
        element.textContent = translations.es[key] || "";
      });
      break;
    case "zh":
      elementsToTranslate.forEach(function (element) {
        let key = element.getAttribute("data-translate");
        element.textContent = translations.zh[key] || "";
      });
      break;
    default:
      elementsToTranslate.forEach(function (element) {
        element.textContent = "";
      });
      break;
  }
}

let translations = {
  en: {
    // Англійські переклади
    HOME: "HOME",
    "ABOUT US": "ABOUT US",
    SOLUTIONS: "SOLUTIONS",
    "Audit & Consulting": "Audit & Consulting",
    "Process Management": "Process Management",
    Sourcing: "Sourcing",
    "Quality Assurance": "Quality Assurance",
    Logistics: "Logistics",
    CONTACTS: "CONTACTS",

    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.":
      "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery…":
      "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery...",
    "[read more]": "[read more]",

    "About Us": "About Us",
    Introduction: "Introduction",
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.":
      "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery.":
      "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery.",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth.":
      "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth.",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind",
    "Our Team": "Our Team",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language.":
      "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language.",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers.":
      "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers.",
    "Our Locations": "Our Locations",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs.":
      "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs.",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide.":
      "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide.",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues.":
      "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues.",

    Solutions: "Solutions",
    "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand.":
      "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand.",
    "The core elements of our business and the key to fulfilling your needs are in the following areas":
      "The core elements of our business and the key to fulfilling your needs are in the following areas",
    "Audit & Consulting": "Audit & Consulting",
    "Procurement Strategy Development": "Procurement Strategy Development",
    "Supplier Evaluation": "Supplier Evaluation",
    "Legal Support": "Legal Support",
    "Market Research": "Market Research",
    "Trade Financing": "Market Research",
    "Audit & Consulting": "Audit & Consulting",
    "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution":
      "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution",
    "Process Management": "Process Management",
    "Workflow Design": "Workflow Design",
    "Procurement Planning & Scheduling": "Procurement Planning & Scheduling",
    "Negotiation Support": "Negotiation Support",
    "Supplier Relationship Management": "Supplier Relationship Management",
    "Order Progress Supervision": "Order Progress Supervision",
    "Documentation Control": "Documentation Control",
    "Process Management": "Process Management",
    "Effective interactions with suppliers is one of the key factors for efficient procurement, and the total result often depends on the organization of work, a mutual understanding, and solid partner relationships":
      "Effective interactions with suppliers is one of the key factors for efficient procurement, and the total result often depends on the organization of work, a mutual understanding, and solid partner relationships",

    Sourcing: "Sourcing",
    "ODM & OEM Manufacturing Management": "ODM & OEM Manufacturing Management",
    "Packaging & Labeling Solutions": "Packaging & Labeling Solutions",
    "Product Adjustment & Improvement": "Product Adjustment & Improvement",
    "Leftover Stock Procurement": "Leftover Stock Procurement",
    "LCL Procurement": "Leftover Stock Procurement",
    Sourcing: "Sourcing",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand",

    "Quality Assurance": "Quality Assurance",
    "Quality Criteria Coordination": "Quality Criteria Coordination",
    "Multi-Stage Quality Inspection": "Multi-Stage Quality Inspection",
    "Production Monitoring": "Production Monitoring",
    "Defect Sorting": "Defect Sorting",
    "Laboratory Testing & Certification": "Laboratory Testing & Certification",
    "Container Loading Supervision": "Container Loading Supervision",
    "Quality Assurance": "Quality Assurance",
    "One of the key factors to our success and our ability to make you successful is our keen attention to the quality of your supplied goods. From our experience, when and if quality issues arise, they occur due to three main reasons":
      "One of the key factors to our success and our ability to make you successful is our keen attention to the quality of your supplied goods. From our experience, when and if quality issues arise, they occur due to three main reasons.",
    "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions":
      "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions",
    "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require":
      "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require",

    Logistics: "Logistics",
    "International Transportation": "International Transportation",
    "Complex Delivery Planning": "Complex Delivery Planning",
    "China Warehouse Management": "China Warehouse Management",
    "Door-to-Door Delivery": "Door-to-Door Delivery",
    Logistics: "Logistics",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain":
      "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain.",

    Contacts: "Contacts",
    "Thank you for your interest in Niche Supply Control Co., Ltd.":
      "Thank you for your interest in Niche Supply Control Co., Ltd.",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below.":
      "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below.",
    "We look forward to hearing from you.":
      "We look forward to hearing from you.",
    Mail: "Mail",
    "Phone & Fax": "Phone & Fax",
    "Phone: +86 (10) 6501-0188": "Phone: +86 (10) 6501-0188",
    "Fax: +86 (10) 6501-7188": "Fax: +86 (10) 6501-7188",
    Email: "Email",
    "E-mail for general inquiries: info@nichesc.com":
      "E-mail for general inquiries: info@nichesc.com",
    "Direct e-mail for company management: direct@nichesc.com":
      "Direct e-mail for company management: direct@nichesc.com",

    Home: "Home",
    "About Us": "Company",
    Solutions: "Solutions",
    Contacts: "Contacts",
  },

  uk: {
    // Українські переклади
    HOME: "ГОЛОВНА",
    "ABOUT US": "ПРО НАС",
    SOLUTIONS: "РІШЕННЯ",
    "Audit & Consulting": "Аудит і консалтинг",
    "Process Management": "Управління процесами",
    Sourcing: "Постачання",
    "Quality Assurance": "Гарантія якості",
    Logistics: "Логістика",
    CONTACTS: "КОНТАКТИ",

    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products":
      "Компанія Niche Supply Control Co. Ltd надає професійні економічно ефективні рішення для закупівель і поставок управління в Китаї для клієнтів роздрібної мережі. Ми працюємо практично з усіма представленими непродовольчими товарами народного споживання у більшості великих супермаркетів, а також у деяких вибраних продуктах харчування",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery…":
      "Наш рівень обслуговування та підтримки є безпрецедентним, оскільки ми присутні та можемо надавати рекомендації на всіх етапах вашого ланцюга закупівель та поставок. Ми починаємо з планування та аналізу, продовжуємо обробкою та контролем замовлень і завершуємо ваші закупівлі експертними консультаціями у сфері логістики та кінцевої доставки...",
    "[read more]": "[читати далі]",

    "About Us": "Про нас",
    Introduction: "Вступ",
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.":
      "Niche Supply Control Co. Ltd надає професійні економічно ефективні рішення для управління закупівлями та поставками в Китаї для клієнтів роздрібної мережі. Ми працюємо з майже всіма непродовольчими споживчими товарами, представленими в більшості великих супермаркетів, а також з деякими вибраними продуктами харчування.",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery.":
      "Наш рівень обслуговування та підтримки є безпрецедентним, оскільки ми присутні та можемо надати керівництво на всіх етапах вашого ланцюга закупівель та постачання. Ми починаємо з планування та аналізу, продовжуємо обробку замовлень і контроль, а завершуємо ваші закупівлі консультаціями експертів у сфері логістики та кінцевої доставки.",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth.":
      "Ми створюємо індивідуальні, високоефективні ланцюги поставок для кожного з наших клієнтів, які допомагають знизити витрати, підвищити якість і збільшити прибуток, що дозволяє вам зосередитися на інших пріоритетах. Окрім очевидних переваг наших рішень, наша мета — допомогти вашому розвитку та зростанню.",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "У Niche ми пишаємося своєю трудовою етикою та прозорістю, яку ми маємо з нашими клієнтами. Незалежно від рішення, ваші найкращі інтереси завжди на першому плані",
    "Our Team": "Наша команда",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language.":
      "Наша міжнародна команда професіоналів об’єднує експертів із закупівель, продуктів і управління логістикою до 6 Sigma. У нас є представники з усього світу (Азія, Європа, Північна та Південна Америка), що означає, що ми говоримо та думаємо вашою мовою.",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers.":
      "Ми дуже пишаємося нашою командою та віримо, що ви оціните професіоналізм і легкість ведення бізнесу, які ми можемо забезпечити, працюючи з китайськими виробниками.",
    "Our Locations": "Наші локації",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs.":
      "Наша міжнародна штаб-квартира розташована в Пекіні, Китай, де знаходяться наш фінансовий відділ, служба обслуговування клієнтів і команда менеджерів. Окрім Пекіна, у нас є відділення в Іу та Шаньтоу, де відбувається закупівля запасів і консолідація товарів.",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide.":
      "Нашу мережу внутрішніх інспекторів можна знайти в усіх основних промислових районах Китаю, включаючи Гуандун, Фуцзянь, Чжецзян, Цзянсу, Шаньдун та деякі інші провінції. Це покриття дозволяє нам гарантувати високу швидкість і якість послуг, які ми надаємо.",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues.":
      "Наші склади розташовані в ключових транспортних точках, торгових точках і основних портах, що дозволяє нам вирішувати складні логістичні питання.",

    "Solutions": "Рішення",
    "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand":"У Niche Control Supply Co., Ltd ми надаємо вам універсальне, індивідуальне інтегроване рішення, щоб зробити ваші закупівлі в Китаї успішними. Успішні закупівлі досягаються шляхом ретельного моніторингу та коригування кожного етапу ланцюжка постачання, щоб ви отримували потрібні товари в потрібний час, за бажаною ціною та потрібною якістю",
    "The core elements of our business and the key to fulfilling your needs are in the following areas":"Основні елементи нашого бізнесу та ключ до задоволення ваших потреб знаходяться в наступних сферах",

    "Audit & Consulting": "Аудит і консалтинг",
    "Procurement Strategy Development": "Розробка стратегії закупівель",
    "Supplier Evaluation": "Оцінка постачальника",
    "Legal Support": "Юридична підтримка",
    "Market Research": "Дослідження ринку",
    "Фінансування торгівлі": "Дослідження ринку",
    "Audit & Consulting": "Аудит і консалтинг",
    "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution":
      "Розуміння ваших потреб є нашим першочерговим завданням. Ми працюємо з багатьма різними роздрібними клієнтами як на місцевому, так і на міжнародному рівнях, і ми знаємо, що кожна ситуація абсолютно унікальна. Перш ніж щось рекомендувати, ми проводимо глибокий аналіз вашої ситуації. Завдяки детальному огляду ваших планів, цілей і проблем ми можемо надати вам індивідуальне рішення",

    "Process Management": "Керування процесами",
    "Workflow Design": "Дизайн робочого процесу",
    "Procurement Planning & Scheduling": "Планування та планування закупівель",
    "Negotiation Support": "Підтримка переговорів",
    "Supplier Relationship Management":
      "Керування відносинами з постачальниками",
    "Order Progress Supervision": "Нагляд за виконанням замовлення",
    "Documentation Control": "Контроль документації",
    "Process Management": "Керування процесами",
    "Effective interactions with suppliers is one of the key factors for efficient procurement, and the total result often depends on the organization of work, a mutual understanding, and solid partner relationships":
      "Ефективна взаємодія з постачальниками є одним із ключових факторів ефективних закупівель, а загальний результат часто залежить від організації роботи, взаєморозуміння та міцних партнерських відносин",

    Sourcing: "Постачання",
    "ODM & OEM Manufacturing Management": "Управління виробництвом ODM і OEM",
    "Packaging & Labeling Solutions": "Рішення для пакування та маркування",
    "Product Adjustment & Improvement": "Коригування та вдосконалення продукту",
    "Leftover Stock Procurement": "Закупівля залишків запасів",
    "LCL Procurement": "Закупівля залишків запасів",
    Sourcing: "Постачання",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "Завдяки великій базі даних надійних постачальників і багаторічному досвіду роботи з продуктами ми можемо запропонувати вам широкий спектр індивідуальних послуг і рішень, які забезпечать вам гнучкість і можливість отримати потрібні вам продукти в упаковці, яку ви бажаєте, і весь час за ціною, яку ви вимагаєте",

    "Quality Assurance": "Гарантія якості",
    "Quality Criteria Coordination": "Координація критеріїв якості",
    "Multi-Stage Quality Inspection": "Багатоступенева перевірка якості",
    "Production Monitoring": "Моніторинг виробництва",
    "Defect Sorting": "Сортування дефектів",
    "Laboratory Testing & Certification":
      "Лабораторне тестування та сертифікація",
    "Container Loading Supervision": "Контроль за завантаженням контейнерів",
    "Quality Assurance": "Забезпечення якості",
    "One of the key factors to our success and our ability to make you successful is our keen attention to the quality of your supplied goods. From our experience, when and if quality issues arise, they occur due to three main reasons":
      "Завдяки великій базі даних надійних постачальників і багаторічному досвіду роботи з продуктами ми можемо запропонувати вам широкий спектр індивідуальних послуг і рішень, які забезпечать вам гнучкість і можливість отримати потрібні вам продукти в упаковці, яку ви бажаєте, і весь час за ціною, яку ви вимагаєте.",
    "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions":
      "По-перше, у 50% випадків між постачальником і клієнтом спостерігається повна відсутність розуміння вимог до якості. По-друге, у 35% випадків постачальники разом ігнорують вимоги. Нарешті, у 10% випадків відбувається навмисне зниження вартості та якості",
    "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require":
      "Щоб уникнути та усунути вищевказані проблеми, ми прийняли та використовуємо багато різних процесів та інструментів, щоб гарантувати, що ви отримаєте потрібні вам продукти",

    Logistics: "Логістика",
    "International Transportation": "Міжнародні перевезення",
    "Complex Delivery Planning": "Комплексне планування доставки",
    "China Warehouse Management": "Управління складом у Китаї",
    "Door-to-Door Delivery": "Доставка від дверей до дверей",
    Logistics: "Логістика",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain":
      "Будучи таким важливим елементом загальних витрат і основою стабільності ланцюжка поставок, оптимізація логістики в нашій компанії дуже ретельно ставиться. Ми можемо запропонувати багато рішень і унікальних виправлень для вашої конкретної ситуації, які призведуть до скорочення витрат і більш ефективного ланцюжка поставок",

    Contacts: "Контакти",
    "Thank you for your interest in Niche Supply Control Co., Ltd.":
      "Дякуємо за ваш інтерес до Niche Supply Control Co., Ltd",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below":
      "Якщо у вас є додаткові запитання або ви хочете поговорити з нами про наші послуги, скористайтеся будь-яким із наведених нижче способів зв’язку",
    "We look forward to hearing from you": "Ми з нетерпінням чекаємо від вас",
    Mail: "Пошта",
    "Phone & Fax": "Телефон і факс",
    "Phone: +86 (10) 6501-0188": "Телефон: +86 (10) 6501-0188",
    "Fax: +86 (10) 6501-7188": "Факс: +86 (10) 6501-7188",
    Email: "Електронна пошта",
    "E-mail for general inquiries: info@nichesc.com":
      "Електронна адреса для загальних запитів: info@nichesc.com",
    "Direct e-mail for company management: direct@nichesc.com":
      "Пряма електронна пошта для керівництва компанії: direct@nichesc.com",

    "Home": "Головна",
    "About Us": "Компанія",
    "Solutions": "Рішення",
    "Contacts": "Контакти",
  },

  es: {
    // Іспанські переклади
    HOME: "PRINCIPAL",
    "ABOUT US": "COMPAÑÍA",
    SOLUTIONS: "SOLUCIONES",
    CONTACTS: "CONTACTOS",

    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products":
      "Niche Supply Control Co. Ltd ofrece soluciones profesionales rentables para la adquisición y el suministro gestión en China para clientes de cadenas minoristas. Nos ocupamos de casi todos los bienes de consumo no alimentarios representados en la mayoría de los grandes supermercados, así como en algunos productos alimenticios seleccionados",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery…":
      "Nuestro nivel de servicio y soporte no tiene precedentes, ya que estamos presentes y somos capaces de brindar orientación durante todas las etapas de su cadena de compras y suministro. Comenzamos con la planificación y el análisis, continuamos con el procesamiento y control de pedidos, y completamos su aprovisionamiento con una asesoría experta en el área de logística y entrega final...",
    "[read more]": "[leer más]",

    "About Us": "Sobre nosotros",
    Introduction: "Introducción",
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.":
      "Niche Supply Control Co. Ltd ofrece soluciones profesionales rentables para la gestión de adquisiciones y suministros en China para clientes de cadenas minoristas. Nos ocupamos de casi todos los bienes de consumo no alimentarios representados en la mayoría de los grandes supermercados, así como de algunos productos alimentarios seleccionados.",

    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery.":
      "Nuestro nivel de servicio y soporte no tiene precedentes, ya que estamos presentes y somos capaces de brindar orientación durante todas las etapas de su cadena de compras y suministro. Comenzamos con la planificación y el análisis, continuamos con el procesamiento y control de pedidos y completamos su aprovisionamiento con una asesoría experta en el área de logística y entrega final.",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth.":
      "Construimos cadenas de suministro individualizadas y altamente eficientes para cada uno de nuestros clientes que ayudan a reducir costos, mejorar la calidad y aumentar las ganancias, lo que le permite concentrarse en otras prioridades. Aparte de los beneficios obvios de nuestras soluciones, nuestro objetivo es ayudar a su desarrollo y crecimiento.",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "En Niche, nos enorgullecemos de nuestra ética de trabajo y la transparencia que tenemos con nuestros clientes. No importa la decisión, sus mejores intereses siempre están en el frente de nuestra mente.",
    "Our Team": "Nuestro equipo",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language.":
      "Nuestro equipo internacional de profesionales combina expertos en gestión de compras, productos y logística hasta 6 Sigma. Tenemos representantes de todo el mundo (Asia, Europa, América del Norte y del Sur), lo que significa que hablamos y pensamos en su idioma.",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers.":
      "Estamos muy orgullosos de nuestro equipo y creemos que apreciará la profesionalidad y la facilidad para hacer negocios que podemos brindarle al trabajar con fabricantes chinos.",
    "Our Locations": "Nuestras ubicaciones",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs.":
      "Nuestra sede internacional se encuentra en Beijing, China, donde reside nuestro departamento de finanzas, servicio al cliente y equipo de gestión. Más allá de Beijing, tenemos una operación en Yiwu y Shantou, donde se realiza la adquisición de existencias y la consolidación de bienes.",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide.":
      "Nuestra propia red de inspectores internos se puede encontrar en todas las principales áreas industriales de China, incluidas Guangdong, Fujian, Zhejiang, Jiangsu, Shandong y algunas otras provincias. Esta cobertura nos permite garantizar los servicios de alta velocidad y calidad que brindamos.",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues.":
      "Nuestros almacenes están ubicados en los principales lugares de transporte, puntos comerciales y puertos principales, lo que nos permite resolver problemas logísticos complicados.",

    Solutions: "Soluciones",
    "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand.":
      "En Niche Control Supply Co., Ltd, le brindamos una solución integral, hecha a la medida e integrada para que su adquisición en China sea un éxito. Una adquisición exitosa se logra al monitorear y ajustar cuidadosamente cada paso de la cadena de suministro para que reciba los productos que desea, en el tiempo que los necesita, al precio que desea y con la calidad que exige.",
    "The core elements of our business and the key to fulfilling your needs are in the following areas":
      "Los elementos centrales de nuestro negocio y la clave para satisfacer sus necesidades se encuentran en las siguientes áreas",

    "Audit & Consulting": "Auditoría y Consultoría",
    "Procurement Strategy Development":
      "Desarrollo de la estrategia de adquisiciones",
    "Supplier Evaluation": "Evaluación de proveedores",
    "Legal Support": "Apoyo Legal",
    "Market Research": "Investigación de Mercado",
    "Trade Financing": "Auditoría y Consultoría",

    "Audit & Consulting": "Auditoría y Consultoría",
    "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution":
      "Comprender sus necesidades es nuestra primera prioridad. Trabajamos con muchos clientes minoristas diferentes tanto a nivel local como internacional y sabemos que cada situación es totalmente única. Antes de recomendarte nada hacemos un análisis en profundidad de tu situación. Con una vista detallada de sus planes, sus objetivos y sus inquietudes, podemos brindarle una solución a la medida",

    "Process Management": "Gestión de Procesos",
    "Workflow Design": "Diseño de flujo de trabajo",
    "Procurement Planning & Scheduling":
      "Planificación y Programación de Adquisiciones",
    "Negotiation Support": "Apoyo de negociación",
    "Supplier Relationship Management": "Gestión de relaciones con proveedores",
    "Order Progress Supervision": "Supervisión de Avance de Pedido",
    "Documentation Control": "Control de Documentación",
    "Process Management": "Gestión de Procesos",
    "Effective interactions with suppliers is one of the key factors for efficient procurement, and the total result often depends on the organization of work, a mutual understanding, and solid partner relationships":
      "La interacción efectiva con los proveedores es uno de los factores clave para una adquisición eficiente, y el resultado total a menudo depende de la organización del trabajo, un entendimiento mutuo y relaciones sólidas con los socios",

    Sourcing: "Abastecimiento",
    "ODM & OEM Manufacturing Management": "Gestión de fabricación de ODM y OEM",
    "Packaging & Labeling Solutions": "Soluciones de embalaje y etiquetado",
    "Product Adjustment & Improvement": "Ajuste y mejora del producto",
    "Leftover Stock Procurement": "Adquisición de existencias sobrantes",
    "LCL Procurement": "Adquisición de existencias sobrantes",
    Sourcing: "Abastecimiento",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "Con una amplia base de datos de proveedores confiables y años de experiencia en productos, podemos ofrecerle una amplia gama de servicios y soluciones personalizados que le brindarán la flexibilidad y la capacidad para recibir los productos que necesita, en el empaque que desea y todo el tiempo, al precio que exige",

    "Quality Assurance": "Garantía de calidad",
    "Quality Criteria Coordination": "Coordinación de Criterios de Calidad",
    "Multi-Stage Quality Inspection": "Inspección de calidad de varias etapas",
    "Production Monitoring": "Monitoreo de Producción",
    "Defect Sorting": "Clasificación de defectos",
    "Laboratory Testing & Certification":
      "Pruebas y Certificación de Laboratorio",
    "Container Loading Supervision": "Supervisión de Carga de Contenedores",
    "Quality Assurance": "Garantía de calidad",
    "One of the key factors to our success and our ability to make you successful is our keen attention to the quality of your supplied goods. From our experience, when and if quality issues arise, they occur due to three main reasons":
      "Uno de los factores clave de nuestro éxito y nuestra capacidad para que usted tenga éxito es nuestra gran atención a la calidad de los productos suministrados. Según nuestra experiencia, cuando surgen problemas de calidad, se dzben a tres razones principales.",
    "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions.":
      "En primer lugar, el 50 % de las veces hay una falta total de comprensión de los requisitos de calidad entre el proveedor y el cliente. En segundo lugar, el 35 % de las veces los proveedores ignoran los requisitos por completo. Por último, el 10 % de las veces hay costos intencionales y reducciones de calidad.",
    "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require.":
      "Para evitar y eliminar los problemas anteriores, hemos adoptado y utilizamos muchos procesos y herramientas diferentes para garantizar que reciba los productos que necesita.",

    Logistics: "Logística",
    "International Transportation": "Transporte Internacional",
    "Complex Delivery Planning": "Planificación de Entrega Compleja",
    "China Warehouse Management": "Gestión de almacenes en China",
    "Door-to-Door Delivery": "Entrega puerta a puerta",
    Logistics: "Logística",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain.":
      "Siendo un elemento tan importante del costo general y la base de la estabilidad de la cadena de suministro, la optimización logística se trata con mucho cuidado dentro de nuestra empresa. Podemos ofrecer muchas soluciones y soluciones únicas para su situación particular que resultarán en reducciones de costos y una mayor eficiencia. cadena de suministro.",

    Contacts: "Contactos",
    "Thank you for your interest in Niche Supply Control Co., Ltd.":
      "Gracias por su interés en Niche Supply Control Co., Ltd",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below.":
      "Si tiene más preguntas o desea hablar con nosotros sobre nuestros servicios, no dude en utilizar cualquiera de los métodos de contacto a continuación.",
    "We look forward to hearing from you.": "Esperamos saber de usted.",
    Mail: "Correo",
    "Phone & Fax": "Teléfono y fax",
    "Phone: +86 (10) 6501-0188": "Teléfono: +86 (10) 6501-0188",
    "Fax: +86 (10) 6501-7188": "Fax: +86 (10) 6501-7188",
    Email: "Correo electrónico",
    "E-mail for general inquiries: info@nichesc.com":
      "E-mail para consultas generales: info@nichesc.com",
    "Direct e-mail for company management: direct@nichesc.com":
      "E-mail directo para gestión de empresa: direct@nichesc.com",

    Home: "Hogar",
    "About Us": "Сompañía",
    Solutions: "Soluciones",
    Contacts: "Contactos",
  },

  zh: {
    HOME: "主页",
    "ABOUT US": "	离开我们",
    SOLUTIONS: "解决方案",
    "Audit & Consulting": "审计与咨询",
    "Process Management": "流程管理",
    Sourcing: "采购",
    "Quality Assurance": "质量保证",
    Logistics: "物流",
    CONTACTS: "句法",

    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.":
      "Niche Supply Control Co. Ltd 为零售连锁客户在中国的采购和供应管理提供专业的成本效益解决方案。 我们处理大多数大型超市中几乎所有的非食品消费品以及一些精选的食品",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery…":
      "我们的服务和支持水平是前所未有的，因为我们在场并且能够在您的采购和供应链的所有阶段提供指导。 我们从规划和分析开始，继续进行订单处理和控制，并通过物流和最终交付领域的专家咨询来完成您的采购…",
    "[read more]": "[阅读更多]",

    "About Us": "关于我们",
    Introduction: "介绍",
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.":
      "Niche Supply Control Co. Ltd 为零售连锁客户在中国的采购和供应管理提供专业的成本效益解决方案。 我们处理大多数大型超市中几乎所有的非食品消费品以及一些精选的食品",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery.":
      "我们的服务和支持水平是前所未有的，因为我们在场并且能够在您的采购和供应链的所有阶段提供指导。 我们从规划和分析开始，继续进行订单处理和控制，并通过物流和最终交付领域的专家咨询来完成您的采购",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth.":
      "我们为每一位客户构建个性化、高效的供应链，帮助降低成本、提高质量和增加利润，让您可以专注于其他优先事项。 除了我们解决方案的明显优势外，我们的目标是帮助您的发展和成长。",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "在 Niche，我们以我们的职业道德和我们与客户之间的透明度为荣。 无论做出何种决定，您的最大利益始终是我们的首要考虑",
    "Our Team": "我们的队伍",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language.":
      "我们的国际专业团队结合了来自采购、产品和物流管理的专家，以及 6 Sigma。 我们有来自世界各地（亚洲、欧洲、北美洲和南美洲）的代表，这意味着我们说和想您的语言。",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers.":
      "我们为我们的团队感到非常自豪，相信您会欣赏我们在与中国制造商合作时可以提供的专业精神和轻松开展业务。",
    "Our Locations": "我们的位置",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs.":
      "我们的国际总部位于中国北京，我们的财务部、客户服务部和管理团队都驻扎在这里。 除了北京，我们还在义乌和汕头开展业务，进行库存采购和货物整合。",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide.":
      "我们自己的内部检验员网络遍布中国所有主要工业区，包括广东、福建、浙江、江苏、山东和其他一些省份。 这种覆盖使我们能够保证我们提供的高速、优质服务。",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues.":
      "我们的仓库位于主要运输地点、贸易点和主要港口，这使我们能够解决复杂的物流问题。",

    Solutions: "解决方案",
    "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand":
      "在Niche Control Supply Co., Ltd，我们为您提供一站式、量身定制的集成解决方案，使您在中国的采购取得成功。 成功的采购是通过仔细监控和调整供应链的每个步骤来实现的，这样您就可以在需要的时间、以您想要的价格和您要求的质量收到您想要的货物",
    "The core elements of our business and the key to fulfilling your needs are in the following areas":
      "我们业务的核心要素和满足您需求的关键在以下几个方面",

    "Audit & Consulting": "审计与咨询",
    "Procurement Strategy Development": "采购战略发展",
    "Supplier Evaluation": "供应商评估",
    "Legal Support": "法律支持",
    "Market Research": "市场研究",
    "Trade Financing": "市场研究",
    "Audit & Consulting": "审计与咨询",
    "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution":
      "了解您的需求是我们的首要任务。 我们与本地和国际上许多不同的零售客户合作，我们知道每种情况都是独一无二的。 在我们推荐任何东西之前，我们会对您的情况进行深入分析。 通过详细了解您的计划、目标和顾虑，我们可以为您提供量身定制的解决方案",

    "Process Management": "流程管理",
    "Workflow Design": "工作流设计",
    "Procurement Planning & Scheduling": "采购计划与调度",
    "Negotiation Support": "谈判支持",
    "Supplier Relationship Management": "供应商关系管理",
    "Order Progress Supervision": "订单进度监督",
    "Documentation Control": "文件控制",
    "Process Management": "流程管理",
    "Effective interactions with suppliers is one of the key factors for efficient procurement, and the total result often depends on the organization of work, a mutual understanding, and solid partner relationships":
      "与供应商的有效互动是高效采购的关键因素之一，总体结果通常取决于工作组织、相互理解和稳固的合作伙伴关系",

    Sourcing: "采购",
    "ODM & OEM Manufacturing Management": "ODM&OEM制造管理",
    "Packaging & Labeling Solutions": "包装和标签解决方案",
    "Product Adjustment & Improvement": "产品调整&改进",
    "Leftover Stock Procurement": "剩余库存采购",
    "LCL Procurement": "剩余库存采购",
    Sourcing: "采购",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "凭借庞大的值得信赖的供应商数据库和多年的产品经验，我们可以为您提供范围广泛的定制服务和解决方案，使您能够灵活地和有能力地接收您需要的产品，采用您想要的包装，以及所有 同时，以您要求的价格",

    "Quality Assurance": "质量保证",
    "Quality Criteria Coordination": "质量标准协调",
    "Multi-Stage Quality Inspection": "多阶段质量检验",
    "Production Monitoring": "生产监控",
    "Defect Sorting": "缺陷排序",
    "Laboratory Testing & Certification": "实验室测试与认证",
    "Container Loading Supervision": "集装箱监装",
    "Quality Assurance": "质量保证",
    "One of the key factors to our success and our ability to make you successful is our keen attention to the quality of your supplied goods. From our experience, when and if quality issues arise, they occur due to three main reasons":
      "我们成功的关键因素之一以及我们让您成功的能力是我们对您所提供商品质量的高度关注。 根据我们的经验，如果出现质量问题，主要有以下三个原因",
    "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions":
      "首先，50% 的时间供应商和客户之间完全不了解质量要求。 其次，供应商有 35% 的时间完全无视要求。 最后，10% 的时间是有意降低成本和质量",
    "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require":
      "为了避免和消除上述问题，我们采用并利用了许多不同的流程和工具来保证您收到您需要的产品",

    Logistics: "物流",
    "International Transportation": "国际运输",
    "Complex Delivery Planning": "复杂的交付计划",
    "China Warehouse Management": "中国仓库管理",
    "Door-to-Door Delivery": "送货上门",
    Logistics: "物流",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain":
      "作为整体成本的重要组成部分和供应链稳定性的基础，物流优化在我们公司内部得到了非常谨慎的对待。 我们可以为您的特定情况提供许多解决方案和独特的解决方案，这将导致成本降低和更高效的供应链",

    Contacts: "联系人",
    "Thank you for your interest in Niche Supply Control Co., Ltd.":
      "感谢您对利基供应控制有限公司的关注",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below.":
      "如果您还有其他问题或想就我们的服务与我们交谈，请随时使用以下任何联系方式",
    "We look forward to hearing from you": "我们期待您的回音",
    Mail: "邮件",
    "Phone & Fax": "电话和传真",
    "Phone: +86 (10) 6501-0188": "电话：+86(10)6501-0188",
    "Fax: +86 (10) 6501-7188": "传真：+86 (10) 6501-7188",
    Email: "邮箱",
    "E-mail for general inquiries: info@nichesc.com":
      "一般查询电邮：info@nichesc.com",
    "Direct e-mail for company management: direct@nichesc.com":
      "公司管理层的直接电子邮件：direct@nichesc.com",

    Home: "家",
    "About Us": "关于我们",
    Solutions: "解决方案",
    Contacts: "联系人",
  },
};

//FOOTER______________________________________________________________________
function goToHomeFooter() {
  document.getElementById("footer-about-us").classList.remove("footer-active");
  document.getElementById("footer-solutions").classList.remove("footer-active");
  document.getElementById("footer-contacts").classList.remove("footer-active");
  document.getElementById("footer-home").classList.add("footer-active");
}
document.getElementById("footer-home").addEventListener("click", goToHome);
document
  .getElementById("footer-home")
  .addEventListener("click", goToHomeFooter);

function goToAboutFooter() {
  document.getElementById("footer-home").classList.remove("footer-active");
  document.getElementById("footer-solutions").classList.remove("footer-active");
  document.getElementById("footer-contacts").classList.remove("footer-active");
  document.getElementById("footer-about-us").classList.add("footer-active");
}

document.getElementById("footer-about-us").addEventListener("click", goToAbout);
document
  .getElementById("footer-about-us")
  .addEventListener("click", goToAboutFooter);

function goToSolutionsFooter() {
  document.getElementById("footer-home").classList.remove("footer-active");
  document.getElementById("footer-about-us").classList.remove("footer-active");
  document.getElementById("footer-contacts").classList.remove("footer-active");
  document.getElementById("footer-solutions").classList.add("footer-active");
}

document
  .getElementById("footer-solutions")
  .addEventListener("click", goToSolutions);
document
  .getElementById("footer-solutions")
  .addEventListener("click", goToSolutionsFooter);

function goToContactsFooter() {
  document.getElementById("footer-home").classList.remove("footer-active");
  document.getElementById("footer-about-us").classList.remove("footer-active");
  document.getElementById("footer-solutions").classList.remove("footer-active");
  document.getElementById("footer-contacts").classList.add("footer-active");
}

document
  .getElementById("footer-contacts")
  .addEventListener("click", goToContacts);
document
  .getElementById("footer-contacts")
  .addEventListener("click", goToContactsFooter);
//  goToHome(); // перехід на домашню сторінку
