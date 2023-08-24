// ВКЛАДКА ЗА ЗАМОВЧУВАННЯМ "HOME"________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  goToHome();
  goToEn();
});

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "HOME"_____________________________________________
document.getElementById("home").addEventListener("click", goToHome);

document.getElementById("logo").addEventListener("click", goToHome);
document.getElementById("footer-logo").addEventListener("click", goToHome);

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

  window.location.href = "#";
}

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "ABOUT US"_____________________________________________
document.getElementById("about-us").addEventListener("click", goToAbout);
document.getElementById("read-more").addEventListener("click", goToAbout);

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
  document.getElementById("contacts-content").style.display = "none";
  document.getElementById("about-content").style.display = "block";

  window.location.href = "#";
}

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "SOLUTIONS"__________________________________________________________________
document.getElementById("solutions").addEventListener("click", goToSolutions);

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

  window.location.href = "#";
}

// ДЛЯ ПЕРЕХОДУ НА ВКЛАДКУ "CONTACTS"__________________________________________________________
document.getElementById("contacts").addEventListener("click", goToContacts);

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
  document.getElementById("solutions-content").style.display = "none";
  document.getElementById("contacts-content").style.display = "block";

  window.location.href = "#";
}

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

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("dropdown-container");

    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
const subTabs = document.querySelectorAll(".sub-tab, .sub-sub-tab");

subTabs.forEach((subTab) => {
  subTab.addEventListener("click", function (event) {
    event.preventDefault();

    const targetHref = subTab.getAttribute("href");

    window.location.hash = targetHref;
    window.scrollTo(0, 0);
  });
});
////////////////////////////////////////////////////

//Audit & Consulting///////////////////////////////////////////////////

document
  .getElementById("audit-consulting")
  .addEventListener("click", goToAudit);
document.getElementById("aud").addEventListener("click", function () {
  goToAudit();
  goToSolutions();
});
function goToAudit() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";

  document.getElementById("sub-container-1").style.display = "block";

  window.location.href = "#";
}
//Розкриття підменю для Audit & Consulting

document.getElementById("procurement").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "block";

  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
// /////
document.getElementById("supplier").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "block";

  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
/////////
document.getElementById("support").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "block";

  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("market").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "block";

  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("trade").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "block";

  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});

//Process Management///////////////////////////////////////////////////
document
  .getElementById("process-management")
  .addEventListener("click", goToManagement);
document.getElementById("proc").addEventListener("click", function () {
  goToManagement();
  goToSolutions();
});
function goToManagement() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";

  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";

  document.getElementById("sub-container-2").style.display = "block";

  window.location.href = "#";
}
//Розкриття підменю для Process-Management
document.getElementById("design").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("planning").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("negotiation").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});

/////
document.getElementById("relationship").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("order").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
////
document.getElementById("control").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});

// Sourcing///////////////////////////////////////////////////
document.getElementById("sourcing").addEventListener("click", goToSourcing);
document.getElementById("sour").addEventListener("click", function () {
  goToSourcing();
  goToSolutions();
});
function goToSourcing() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";

  document.getElementById("sub-container-3").style.display = "block";
  window.location.href = "#";
}
//Розкриття підменю для Sourcing
document.getElementById("management").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("packaging").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("product").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
/////
document.getElementById("stock").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("l_procurement").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "block";

  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});

//Quality Assurance///////////////////////////////////////////////////
document
  .getElementById("quality-assurance")
  .addEventListener("click", goToQuality);
document.getElementById("qual").addEventListener("click", function () {
  goToQuality();
  goToSolutions();
});

function goToQuality() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";

  document.getElementById("sub-container-4").style.display = "block";
}
//Розкриття підменю для Quality Assurance
document.getElementById("coordination").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "block";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
/////

document.getElementById("inspection").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "block";
  document.getElementById("sub-sub-container-4_2").style.overflow = "auto";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("monitoring").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "block";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
/////
document.getElementById("sorting").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "block";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("certification").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "block";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("supervision").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "block";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  window.location.href = "#";
});

//Logistics///////////////////////////////////////////////////
document.getElementById("logistics").addEventListener("click", goToLogistics);
document.getElementById("log").addEventListener("click", function () {
  goToLogistics();
  goToSolutions();
});
function goToLogistics() {
  document.getElementById("text-solutions").style.display = "none";
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";

  document.getElementById("sub-container-5").style.display = "block";
  window.location.href = "#";
}

//Розкриття підменю для  Logistics
document
  .getElementById("transportation")
  .addEventListener("click", function () {
    document.getElementById("sub-container-1").style.display = "none";
    document.getElementById("sub-container-2").style.display = "none";
    document.getElementById("sub-container-3").style.display = "none";
    document.getElementById("sub-container-4").style.display = "none";
    document.getElementById("sub-container-5").style.display = "none";
    document.getElementById("sub-sub-container-5_2").style.display = "none";
    document.getElementById("sub-sub-container-5_3").style.display = "none";
    document.getElementById("sub-sub-container-5_4").style.display = "none";
    document.getElementById("sub-sub-container-5_1").style.display = "block";
    document.getElementById("sub-sub-container-1_1").style.display = "none";
    document.getElementById("sub-sub-container-1_2").style.display = "none";
    document.getElementById("sub-sub-container-1_3").style.display = "none";
    document.getElementById("sub-sub-container-1_4").style.display = "none";
    document.getElementById("sub-sub-container-1_5").style.display = "none";
    document.getElementById("sub-sub-container-2_1").style.display = "none";
    document.getElementById("sub-sub-container-2_2").style.display = "none";
    document.getElementById("sub-sub-container-2_3").style.display = "none";
    document.getElementById("sub-sub-container-2_4").style.display = "none";
    document.getElementById("sub-sub-container-2_5").style.display = "none";
    document.getElementById("sub-sub-container-2_6").style.display = "none";
    document.getElementById("sub-sub-container-3_1").style.display = "none";
    document.getElementById("sub-sub-container-3_2").style.display = "none";
    document.getElementById("sub-sub-container-3_3").style.display = "none";
    document.getElementById("sub-sub-container-3_4").style.display = "none";
    document.getElementById("sub-sub-container-3_5").style.display = "none";
    document.getElementById("sub-sub-container-4_1").style.display = "none";
    document.getElementById("sub-sub-container-4_2").style.display = "none";
    document.getElementById("sub-sub-container-4_3").style.display = "none";
    document.getElementById("sub-sub-container-4_4").style.display = "none";
    document.getElementById("sub-sub-container-4_5").style.display = "none";
    document.getElementById("sub-sub-container-4_6").style.display = "none";
    window.location.href = "#";
  });
///////
document.getElementById("complex").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "block";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  window.location.href = "#";
});
///////
document.getElementById("warehouse").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "block";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  window.location.href = "#";
});
/////
document.getElementById("door").addEventListener("click", function () {
  document.getElementById("sub-container-1").style.display = "none";
  document.getElementById("sub-container-2").style.display = "none";
  document.getElementById("sub-container-3").style.display = "none";
  document.getElementById("sub-container-4").style.display = "none";
  document.getElementById("sub-container-5").style.display = "none";
  document.getElementById("sub-sub-container-5_1").style.display = "none";
  document.getElementById("sub-sub-container-5_2").style.display = "none";
  document.getElementById("sub-sub-container-5_3").style.display = "none";
  document.getElementById("sub-sub-container-5_4").style.display = "block";
  document.getElementById("sub-sub-container-1_1").style.display = "none";
  document.getElementById("sub-sub-container-1_2").style.display = "none";
  document.getElementById("sub-sub-container-1_3").style.display = "none";
  document.getElementById("sub-sub-container-1_4").style.display = "none";
  document.getElementById("sub-sub-container-1_5").style.display = "none";
  document.getElementById("sub-sub-container-2_1").style.display = "none";
  document.getElementById("sub-sub-container-2_2").style.display = "none";
  document.getElementById("sub-sub-container-2_3").style.display = "none";
  document.getElementById("sub-sub-container-2_4").style.display = "none";
  document.getElementById("sub-sub-container-2_5").style.display = "none";
  document.getElementById("sub-sub-container-2_6").style.display = "none";
  document.getElementById("sub-sub-container-3_1").style.display = "none";
  document.getElementById("sub-sub-container-3_2").style.display = "none";
  document.getElementById("sub-sub-container-3_3").style.display = "none";
  document.getElementById("sub-sub-container-3_4").style.display = "none";
  document.getElementById("sub-sub-container-3_5").style.display = "none";
  document.getElementById("sub-sub-container-4_1").style.display = "none";
  document.getElementById("sub-sub-container-4_2").style.display = "none";
  document.getElementById("sub-sub-container-4_3").style.display = "none";
  document.getElementById("sub-sub-container-4_4").style.display = "none";
  document.getElementById("sub-sub-container-4_5").style.display = "none";
  document.getElementById("sub-sub-container-4_6").style.display = "none";
  window.location.href = "#";
});

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
      "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery…",
    "[read more]": "[read more]",

    "About Us": "About Us",
    Introduction: "Introduction",
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products":
      "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery":
      "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth":
      "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind",
    "Our Team": "Our Team",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language":
      "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers":
      "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers",
    "Our Locations": "Our Locations",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs":
      "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide":
      "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues":
      "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues",

    Solutions: "Solutions",
    "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand":
      "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand",
    "The core elements of our business and the key to fulfilling your needs are in the following areas":
      "The core elements of our business and the key to fulfilling your needs are in the following areas",

    "Audit & Consulting": "Audit & Consulting",
    "-Procurement Strategy Development": "-Procurement Strategy Development",
    "-Supplier Evaluation": "-Supplier Evaluation",
    "-Legal Support": "-Legal Support",
    "-Trade Financing": "-Market Research",
    "-Trade Financing": "-Trade Financing",

    "Audit & Consulting": "Audit & Consulting",
    "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution":
      "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution",

    "Procurement Strategy Development": "Procurement Strategy Development",
    "Depending on the quantity, quality, delivery schedule, documentation requirements, and other needs you may have, we are able to select and recommend the ideal strategy for your procurement":
      "Depending on the quantity, quality, delivery schedule, documentation requirements, and other needs you may have, we are able to select and recommend the ideal strategy for your procurement",
    "By carefully monitoring and utilizing the methods below, we are able to guarantee you a highly efficient and secure supply chain: - Time of Order - Supplier Analysis and Selection- Stock Procurement- Logistics Review- Price & Quality Optimization- Cost and Capital Reduction":
      "By carefully monitoring and utilizing the methods below, we are able to guarantee you a highly efficient and secure supply chain:- Time of Order - Supplier Analysis and Selection- Stock Procurement- Logistics Review- Price & Quality Optimization- Cost and Capital Reduction",

    "Supplier Evaluation": "Supplier Evaluation",
    "Selecting the ideal supplier can be laborious and burdensome. This is why we provide you a multi-faceted evaluation of current and potential suppliers so we are certain they are able to reach and or exceed your needs":
      "Selecting the ideal supplier can be laborious and burdensome. This is why we provide you a multi-faceted evaluation of current and potential suppliers so we are certain they are able to reach and or exceed your needs",
    "By utilizing comparative analysis and a complex evaluation of several suppliers, we can provide you with a transparent view of the materials used, quality of goods produced, capabilities, working conditions, management structure, internal quality control systems, financial situation, and numerous other variables":
      "By utilizing comparative analysis and a complex evaluation of several suppliers, we can provide you with a transparent view of the materials used, quality of goods produced, capabilities, working conditions, management structure, internal quality control systems, financial situation, and numerous other variables",
    "Once a supplier is selected the supplier evaluation continues. Following your first order we supervise the suppliers work during the order processing and provide an evaluation report after each order has been completed":
      "Once a supplier is selected the supplier evaluation continues. Following your first order we supervise the suppliers work during the order processing and provide an evaluation report after each order has been completed",

    "Legal Support": "Legal Support",
    "Navigating the complex legal guidelines of overseas procurement can be arduous. The focus of our legal support goes beyond the secure procurement of your goods but, to obtain stable legal cooperation with your suppliers to avoid any controversy and misunderstandings":
      "Navigating the complex legal guidelines of overseas procurement can be arduous. The focus of our legal support goes beyond the secure procurement of your goods but, to obtain stable legal cooperation with your suppliers to avoid any controversy and misunderstandings",
    "Our legal support provides you with a piece of mind that your intellectual property including products and trademarks are safe, and that your purchasing contracts are in accordance with Chinese legislation. If necessary, we are capable of taking legal action on our clients behalf and or mediating any disputes with suppliers":
      "Our legal support provides you with a piece of mind that your intellectual property including products and trademarks are safe, and that your purchasing contracts are in accordance with Chinese legislation. If necessary, we are capable of taking legal action on our clients behalf and or mediating any disputes with suppliers",

    "Market Research": "Market Research",
    "When an evaluation of a set of suppliers is not sufficient and it is required to look beyond the doors of the manufacturer, we are capable of providing in-depth market research":
      "When an evaluation of a set of suppliers is not sufficient and it is required to look beyond the doors of the manufacturer, we are capable of providing in-depth market research",
    "This in-depth product and manufacturer market research provides you with a view of the key technical standard of products, areas of production, local features, possible difficulties, major manufacturers, ranges of prices, price factors, and many other variables that will aid in your decision making":
      "This in-depth product and manufacturer market research provides you with a view of the key technical standard of products, areas of production, local features, possible difficulties, major manufacturers, ranges of prices, price factors, and many other variables that will aid in your decision making",
    "With the right data and information we can work together to find the ideal supplier and solution for your business needs":
      "With the right data and information we can work together to find the ideal supplier and solution for your business needs",

    "Trade Financing": "Trade Financing",
    "On a case by case basis, we will work with you on financial needs that may arise during your procurement. In order to reduce your financial load we offer different trade financing solutions":
      "On a case by case basis, we will work with you on financial needs that may arise during your procurement. In order to reduce your financial load we offer different trade financing solutions",
    "Options are available for several markets and each situation is settled based on your circumstances, the order details, and the manufacturers position":
      "Options are available for several markets and each situation is settled based on your circumstances, the order details, and the manufacturers position",

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

    "Workflow Design": "Workflow Design",
    "By overlaying your company structure on the experience we have with different retailers and suppliers, we will coordinate and if necessary re-design work flow and processes in order to maximize your procurement from China":
      "By overlaying your company structure on the experience we have with different retailers and suppliers, we will coordinate and if necessary re-design work flow and processes in order to maximize your procurement from China",
    "By focusing on scheduling, order processing, check-points for confirmation and control, and many other key points, we can promise the best result and efficient control of the procurement of the products you need":
      "By focusing on scheduling, order processing, check-points for confirmation and control, and many other key points, we can promise the best result and efficient control of the procurement of the products you need",

    "Procurement Planning & Scheduling": "Procurement Planning & Scheduling",
    "We are very sensitive and aware of the complicated nature of a retail chains delivery schedule. We will work to understand your specific requirements and pay special attention to your delivery times, your product variety and volume, your seasonal needs, your manufacturers schedule, and many other factors":
      "We are very sensitive and aware of the complicated nature of a retail chains delivery schedule. We will work to understand your specific requirements and pay special attention to your delivery times, your product variety and volume, your seasonal needs, your manufacturers schedule, and many other factors",
    "We will coordinate long term schedules and design short term plans together with you to assure the goods you need are delivered at the moment they are needed by your customers":
      "We will coordinate long term schedules and design short term plans together with you to assure the goods you need are delivered at the moment they are needed by your customers",

    "Negotiation Support": "Negotiation Support",
    "There are times when it is quite difficult to reach a compromise between a buyers wishes and a sellers capability. Fortunately, with our experience, we have come across and been able to successfully resolve many unique situations":
      "There are times when it is quite difficult to reach a compromise between a buyers wishes and a sellers capability. Fortunately, with our experience, we have come across and been able to successfully resolve many unique situations",
    "With our support, when required, we can negotiate with manufacturers on your behalf with the aim of finding a mutually beneficial solution which will build a base for further cooperation in the future":
      "With our support, when required, we can negotiate with manufacturers on your behalf with the aim of finding a mutually beneficial solution which will build a base for further cooperation in the future",

    "Suppliers Relationship Management": "Suppliers Relationship Management",
    "To support and continue the excellent relationships we have between our clients and manufacturers, we do a lot of work to understand each party needs, then help them meet their requirements":
      "To support and continue the excellent relationships we have between our clients and manufacturers, we do a lot of work to understand each party needs, then help them meet their requirements",
    "By working with us, we not only provide your needs and desires to the manufacturer but, we provide you with an understanding of the needs of the manufacturer. This mutual understanding and open relationship creates the foundation for successful long-term cooperation":
      "By working with us, we not only provide your needs and desires to the manufacturer but, we provide you with an understanding of the needs of the manufacturer. This mutual understanding and open relationship creates the foundation for successful long-term cooperation",

    "Order Progress Supervising": "Order Progress Supervising",
    "Together with quality assurance, lead time control is one of the most important factors in efficient procurement. Depending on the manufacturers you work with and your order details, we put in place checkpoints all along the main milestones of the order process":
      "Together with quality assurance, lead time control is one of the most important factors in efficient procurement. Depending on the manufacturers you work with and your order details, we put in place checkpoints all along the main milestones of the order process",
    "This control along the manufacturing stages not only allows to us to promise you on-time delivery, but enables us to make needed adjustments far in advance, if necessary":
      "This control along the manufacturing stages not only allows to us to promise you on-time delivery, but enables us to make needed adjustments far in advance, if necessary",

    "Documentation Control": "Documentation Control",
    "Once an order is placed, we begin diligently preparing all of the required documents you will need to make import procedures smooth and fast. Accuracy and precision is key, therefore, we carefully study the required documents needed by product and prepare this well in advance":
      "Once an order is placed, we begin diligently preparing all of the required documents you will need to make import procedures smooth and fast. Accuracy and precision is key, therefore, we carefully study the required documents needed by product and prepare this well in advance",
    "Additionally, as orders pass our pre-shipment inspection, the data from the inspection is used for a final documentation check. With years of experience moving products out of China, we can help you avoid making costly mistakes from overlooking a minor piece of paperwork":
      "Additionally, as orders pass our pre-shipment inspection, the data from the inspection is used for a final documentation check. With years of experience moving products out of China, we can help you avoid making costly mistakes from overlooking a minor piece of paperwork",

    Sourcing: "Sourcing",
    "ODM & OEM Manufacturing Management": "ODM & OEM Manufacturing Management",
    "Packaging & Labeling Solutions": "Packaging & Labeling Solutions",
    "Product Adjustment & Improvement": "Product Adjustment & Improvement",
    "Leftover Stock Procurement": "Leftover Stock Procurement",
    "LCL Procurement": "LCL Procurement",

    Sourcing: "Sourcing",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand",

    "ODM & OEM Manufacturing Management": "ODM & OEM Manufacturing Management",
    "The development and expansion of a private brand for any retailer can be difficult. To help make this easier, we provide both ODM & OEM order management solutions. Whether you are looking to develop a brand new product idea or take advantage of the ready-made offers we have in place, we have the solution for you":
      "The development and expansion of a private brand for any retailer can be difficult. To help make this easier, we provide both ODM & OEM order management solutions. Whether you are looking to develop a brand new product idea or take advantage of the ready-made offers we have in place, we have the solution for you",
    "The key points of any ODM & OEM project are a suppliers competence, responsiveness, and the controls they have in place during the initial order stages. With our experience in private label order management and our evaluation of special suppliers we can help you with any ODM & OEM projects you may have in mind":
      "The key points of any ODM & OEM project are a suppliers competence, responsiveness, and the controls they have in place during the initial order stages. With our experience in private label order management and our evaluation of special suppliers we can help you with any ODM & OEM projects you may have in mind",

    "Packaging & Labeling Solutions": "Packaging & Labeling Solutions",
    "Product packaging and labeling is a key part in the logistics process. Whether or not your packaging and labeling needs are basic or complicated, we have the experience to help. We can provide support in the creation of bar codes and native language labels. We can help you increase your sales by assisting in the development of, product packaging, point-of-purchase displays, pallet displays, tray displays, or show boxes":
      "Product packaging and labeling is a key part in the logistics process. Whether or not your packaging and labeling needs are basic or complicated, we have the experience to help. We can provide support in the creation of bar codes and native language labels. We can help you increase your sales by assisting in the development of, product packaging, point-of-purchase displays, pallet displays, tray displays, or show boxes",
    "At times, manufacturer packing and labeling options can be limited. If that is the case; we make it possible for you to outsource your packaging and labeling needs to professional printing companies, who will then pass the material to the manufacturer for final packaging, or to us for final touches in our own facilities":
      "At times, manufacturer packing and labeling options can be limited. If that is the case; we make it possible for you to outsource your packaging and labeling needs to professional printing companies, who will then pass the material to the manufacturer for final packaging, or to us for final touches in our own facilities",

    "Product Adjustment & Improvement": "Product Adjustment & Improvement",
    "In a case where a product does not meet your needs, we are capable of working with suppliers and manufacturers on making the needed adjustments to reach your satisfaction requirements. Whether we are selecting alternate materials, switching manufacturers, or changing technical specifications, we can consult you on your best options":
      "In a case where a product does not meet your needs, we are capable of working with suppliers and manufacturers on making the needed adjustments to reach your satisfaction requirements. Whether we are selecting alternate materials, switching manufacturers, or changing technical specifications, we can consult you on your best options",
    "Getting the right product, at the right price, with the right design and quality, takes experience and connections when working with Chinese manufacturers. We can help you negotiate to get the exact price you want, the exact quality you need, or the best value for your money":
      "Getting the right product, at the right price, with the right design and quality, takes experience and connections when working with Chinese manufacturers. We can help you negotiate to get the exact price you want, the exact quality you need, or the best value for your money",

    "Leftover Stock Procurement": "Leftover Stock Procurement",
    "Overtime, all suppliers get into situations where they are overstocked and have “leftover” merchandise that must be sold. This typically occurs due to over-production and customer refusals. There are huge advantages and disadvantages to procuring products that are deemed “leftover”. You can receive discounted prices and immediate shipment but, at the same time be faced with quality risks":
      "Overtime, all suppliers get into situations where they are overstocked and have “leftover” merchandise that must be sold. This typically occurs due to over-production and customer refusals. There are huge advantages and disadvantages to procuring products that are deemed “leftover”. You can receive discounted prices and immediate shipment but, at the same time be faced with quality risks",
    "We monitor the market for suitable and interesting leftover stock product offers and when the orders are processed we do special quality control checks, including; defect sorting, repacking, and relabeling if required. With our support, you can be confident that your leftover stock procurement meets the stated criteria from the manufacturer":
      "We monitor the market for suitable and interesting leftover stock product offers and when the orders are processed we do special quality control checks, including; defect sorting, repacking, and relabeling if required. With our support, you can be confident that your leftover stock procurement meets the stated criteria from the manufacturer",

    "LCL Procurement": "LCL Procurement",
    "We offer LCL (Less than container loading) procurement, when your order from one supplier is less than a full container. When your order is shipped, it is consolidated with other orders either, on manufacturers premises, or in our warehouses. With LCL, we can satisfy your needs for low volume orders, due to limited consumption or due to partial shipments for complex delivery plans":
      "We offer LCL (Less than container loading) procurement, when your order from one supplier is less than a full container. When your order is shipped, it is consolidated with other orders either, on manufacturers premises, or in our warehouses. With LCL, we can satisfy your needs for low volume orders, due to limited consumption or due to partial shipments for complex delivery plans",
    "Additionally, with our presence in Yiwu, China, we can offer procurement from the Yiwu market and take advantage of almost no MOQ requirements and short delivery times. Our office and warehouse in Yiwu allows us to process your orders, provide labeling, do quality control, and other offer other logistics management solutions":
      "Additionally, with our presence in Yiwu, China, we can offer procurement from the Yiwu market and take advantage of almost no MOQ requirements and short delivery times. Our office and warehouse in Yiwu allows us to process your orders, provide labeling, do quality control, and other offer other logistics management solutions",

    "Quality Assurance": "Quality Assurance",
    "Quality Criteria Coordination": "Quality Criteria Coordination",
    "Multi-Stage Quality Inspection": "Multi-Stage Quality Inspection",
    "Production Monitoring": "Production Monitoring",
    "Defect Sorting": "Defect Sorting",
    "Laboratory Testing & Certification": "Laboratory Testing & Certification",
    "Container Loading Supervision": "Container Loading Supervision",

    "Quality Assurance": "Quality Assurance",
    "One of the key factors to our success and our ability to make you successful is our keen attention to the quality of your supplied goods. From our experience, when and if quality issues arise, they occur due to three main reasons":
      "One of the key factors to our success and our ability to make you successful is our keen attention to the quality of your supplied goods. From our experience, when and if quality issues arise, they occur due to three main reasons",
    "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions":
      "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions",
    "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require":
      "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require",

    "Quality Criteria Coordination": "Quality Criteria Coordination",
    "As mentioned, when quality issues occur, 50% of the time this is due to a complete and total misunderstanding of the quality requirements between the supplier and the customer. This can be avoided by identifying and documenting all the aspects of quality long before an order is made. By validating manufacturers capabilities to reach your quality requirements while documenting the requirements you have, we can eliminate and minimize any potential for miscommunication":
      "As mentioned, when quality issues occur, 50% of the time this is due to a complete and total misunderstanding of the quality requirements between the supplier and the customer. This can be avoided by identifying and documenting all the aspects of quality long before an order is made. By validating manufacturers capabilities to reach your quality requirements while documenting the requirements you have, we can eliminate and minimize any potential for miscommunication",
    "We help you understand the possible quality / price levels and help you set the quality criteria and defect definitions, based on either custom-made quality criteria or on AQL (Acceptable Quality Level, as per standard MIL-STD-105E/ISO 2859-1 (1999) or Acceptable Quality Limits as per standard ANSI/ASQC Z1.4-2003)":
      "We help you understand the possible quality / price levels and help you set the quality criteria and defect definitions, based on either custom-made quality criteria or on AQL (Acceptable Quality Level, as per standard MIL-STD-105E/ISO 2859-1 (1999) or Acceptable Quality Limits as per standard ANSI/ASQC Z1.4-2003)",

    "Multi-Stage Quality Inspection": "Multi-Stage Quality Inspection",
    "Depending on the product, order features, manufacturers situation, and other factors, we are capable of doing single stage, several stage, or even full cycle quality control in order to secure the quality and delivery time of your procurement. We verify workmanship, function, technical features, color, size, labels, marks, and any other parameters you require - all with a view to ensure that the contract specifications for product and packing are met":
      "Depending on the product, order features, manufacturers situation, and other factors, we are capable of doing single stage, several stage, or even full cycle quality control in order to secure the quality and delivery time of your procurement. We verify workmanship, function, technical features, color, size, labels, marks, and any other parameters you require - all with a view to ensure that the contract specifications for product and packing are met",
    "Broken into 4 steps, below are the services that enable us to provide you with the quality goods you require":
      "Broken into 4 steps, below are the services that enable us to provide you with the quality goods you require",

    "Pre-Production Inspection (PPI)": "Pre-Production Inspection (PPI)",
    "Pre-Production Inspection (PPI) is done before the production process even starts. This ensures, not only that the manufacturer understands all quality requirements but, the availability of corresponding raw materials, components, and facilities. This gives us an understanding of the manufacturing schedule and enables us to be aware of any possible quality and lead time deviations":
      "Pre-Production Inspection (PPI) is done before the production process even starts. This ensures, not only that the manufacturer understands all quality requirements but, the availability of corresponding raw materials, components, and facilities. This gives us an understanding of the manufacturing schedule and enables us to be aware of any possible quality and lead time deviations",
    "Initial Production Inspection (IPI)":
      "Initial Production Inspection (IPI)",
    "Initial Production Inspection has similar features and functions as the PPI but, extends to the exact order, the evaluation of the actual merchandise, and the actual manufacturing capacity. If necessary, certain order processing adjustments can be made":
      "Initial Production Inspection has similar features and functions as the PPI but, extends to the exact order, the evaluation of the actual merchandise, and the actual manufacturing capacity. If necessary, certain order processing adjustments can be made",
    "During Production Inspection (DPI)": "During Production Inspection (DPI)",
    "During Product Inspection s implemented when at least 15% of the total merchandise has been manufactured. During this time, we can confirm that all product parameters as well packing marking details conform to your agreed upon specifications":
      "During Product Inspection s implemented when at least 15% of the total merchandise has been manufactured. During this time, we can confirm that all product parameters as well packing marking details conform to your agreed upon specifications",
    "Pre-Shipment Inspection (PSI)": "Pre-Shipment Inspection (PSI)",
    "A Pre-Shipment Inspection is done when at least 85% of the the merchandise has been completed, packed, and is nearly ready for shipment. Our inspectors evaluate a statistically determined random sample of finished goods, based on an internationally recognized statistical random sampling techniques known as ANSI/ASQ Z1.4-2003, ISO 2859-1 or based our your AQL needs. This final inspection not only allows us to guarantee a final seal of quality but, it guarantees the accuracy of all your needed documentation":
      "A Pre-Shipment Inspection is done when at least 85% of the the merchandise has been completed, packed, and is nearly ready for shipment. Our inspectors evaluate a statistically determined random sample of finished goods, based on an internationally recognized statistical random sampling techniques known as ANSI/ASQ Z1.4-2003, ISO 2859-1 or based our your AQL needs. This final inspection not only allows us to guarantee a final seal of quality but, it guarantees the accuracy of all your needed documentation",

    "Production Monitoring": "Production Monitoring",
    "For highly sensitive orders we offer the service of production monitoring for non-stop on-sight manufacturing control. This level of service can be applied to the production of the product, the packing, the parts, raw material quality, as well as the machinery and the facilities involved":
      "For highly sensitive orders we offer the service of production monitoring for non-stop on-sight manufacturing control. This level of service can be applied to the production of the product, the packing, the parts, raw material quality, as well as the machinery and the facilities involved",

    "Defect Sorting": "Defect Sorting",
    "The target of defect sorting is to sort out and remove products whose quality has not reached the level of acceptability for your procurement. This is used either for orders who have failed repeated inspections or for left-over stock procurements where the quality range significantly exceeds the set of AQL requirements":
      "The target of defect sorting is to sort out and remove products whose quality has not reached the level of acceptability for your procurement. This is used either for orders who have failed repeated inspections or for left-over stock procurements where the quality range significantly exceeds the set of AQL requirements",

    "Laboratory Testing & Certification": "Laboratory Testing & Certification",
    "In certain situations your procurement and products may require formal certification, from a state authority or an independently recognized tester, to fulfill legal guidelines. If needed, we can help you work with a wide range of testing and certification organizations in China, including local and international testing centers, laboratories, and science institutions, e.g. TÜV, SGS, Bureau Veritas, CIQ etc., to provide all the necessary documentation and quality guarantees":
      "In certain situations your procurement and products may require formal certification, from a state authority or an independently recognized tester, to fulfill legal guidelines. If needed, we can help you work with a wide range of testing and certification organizations in China, including local and international testing centers, laboratories, and science institutions, e.g. TÜV, SGS, Bureau Veritas, CIQ etc., to provide all the necessary documentation and quality guarantees",

    "Container Loading Supervision": "Container Loading Supervision",
    "Container loading supervision is done both before and during loading to ensure loading consistency, safety of the goods during the transportation, and documentation accuracy":
      "Container loading supervision is done both before and during loading to ensure loading consistency, safety of the goods during the transportation, and documentation accuracy",
    "Before loading we check shipping marks, packing quality, container conditions, and in some cases, gross weight. Once loading has commenced we concentrate on the quantity of cartons placed, the handling of the goods, and placement inside the container, all to avoid any mistakes or damage of the product and to make sure your products can be securely delivered":
      "Before loading we check shipping marks, packing quality, container conditions, and in some cases, gross weight. Once loading has commenced we concentrate on the quantity of cartons placed, the handling of the goods, and placement inside the container, all to avoid any mistakes or damage of the product and to make sure your products can be securely delivered",

    Logistics: "Logistics",
    "International Transportation": "International Transportation",
    "Complex Delivery Planning": "Complex Delivery Planning",
    "China Warehouse Management": "China Warehouse Management",
    "Door-to-Door Delivery": "Door-to-Door Delivery",

    Logistics: "Logistics",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain":
      "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain",

    "International Transportation": "International Transportation",
    "When planning the transportation of an order we think about cost, time, production schedule, manufacturer location, port of destination, contract terms, and special transportation requirements, in order to match your goods with the ideal method of delivery":
      "When planning the transportation of an order we think about cost, time, production schedule, manufacturer location, port of destination, contract terms, and special transportation requirements, in order to match your goods with the ideal method of delivery",
    "We cooperate with Chinese local and international shipping agents and shipping lines in order to have a wide array of options available to you when you need them. By sea, air, or land, we can coordinate any combination depending on the product, order urgency, and your location":
      "We cooperate with Chinese local and international shipping agents and shipping lines in order to have a wide array of options available to you when you need them. By sea, air, or land, we can coordinate any combination depending on the product, order urgency, and your location",

    "Complex Delivery Planning": "Complex Delivery Planning",
    "To reduce your cost of delivery and to optimize your inventory holdings, we can work with you on a delivery plan that best fits your needs. Whether your deliveries are dependent on sale forecasts or you use the LCL way of procurement with multiple suppliers, we can assist you":
      "To reduce your cost of delivery and to optimize your inventory holdings, we can work with you on a delivery plan that best fits your needs. Whether your deliveries are dependent on sale forecasts or you use the LCL way of procurement with multiple suppliers, we can assist you",

    "China Warehouse Management": "China Warehouse Management",
    "As an extension of our complex delivery service, we offer warehouse and distribution center management solutions. This option not only allows for the adjustment of SKU quantities in a container but to load a container with an almost unlimited variety of products for further delivery to the exact distribution center of your designation":
      "As an extension of our complex delivery service, we offer warehouse and distribution center management solutions. This option not only allows for the adjustment of SKU quantities in a container but to load a container with an almost unlimited variety of products for further delivery to the exact distribution center of your designation",
    "This solution is extremely valuable if your sales territories are large and you have a multi-level distribution system. With our help, we can reduce your logistic costs by avoiding a least one level of your distribution chain":
      "This solution is extremely valuable if your sales territories are large and you have a multi-level distribution system. With our help, we can reduce your logistic costs by avoiding a least one level of your distribution chain",

    "Door-to-Door Delivery": "Door-to-Door Delivery",
    "In some markets we can offer the service of Door-to-Door delivery, where we take responsibility for all transportation and customs formalities until the goods are delivered to your distribution center":
      "In some markets we can offer the service of Door-to-Door delivery, where we take responsibility for all transportation and customs formalities until the goods are delivered to your distribution center",
    "In this case, you have no need to be directly involved with import contracts, procedures, and other customs formalities. You can concentrate on your main priorities without losing the advantages of importing products from China":
      "In this case, you have no need to be directly involved with import contracts, procedures, and other customs formalities. You can concentrate on your main priorities without losing the advantages of importing products from China",

    Contacts: "Contacts",
    "Thank you for your interest in Niche Supply Control Co., Ltd":
      "Thank you for your interest in Niche Supply Control Co., Ltd",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below":
      "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below",
    "We look forward to hearing from you":
      "We look forward to hearing from you",

    "Mail:": "Mail:",
    "Niche SC Ltd.": "Niche SC Ltd.",
    "Room 707, Time Fortune Building 8 (North Tower),":
      "Room 707, Time Fortune Building 8 (North Tower)",
    "Chaoyang District, Beijing, P.R. China.":
      "Chaoyang District, Beijing, P.R. China.",
    "Postal Code: 100028": "Postal Code: 100028",

    北京朝阳区三元西桥: "北京朝阳区三元西桥",
    曙光西里甲6号: "曙光西里甲6号",
    时间国际8号楼北楼707室: "时间国际8号楼北楼707室",
    "邮编：100028": "邮编：100028",

    "Phone & Fax:": "Phone & Fax:",
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

    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products.":
      "Компанія Niche Supply Control Co. Ltd надає професійні економічно ефективні рішення для закупівель і поставок управління в Китаї для клієнтів роздрібної мережі. Ми працюємо практично з усіма представленими непродовольчими товарами народного споживання у більшості великих супермаркетів, а також у деяких вибраних продуктах харчування.",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery…":
      "Наш рівень обслуговування та підтримки є безпрецедентним, оскільки ми присутні та можемо надавати рекомендації на всіх етапах вашого ланцюга закупівель та поставок. Ми починаємо з планування та аналізу, продовжуємо обробкою та контролем замовлень і завершуємо ваші закупівлі експертними консультаціями у сфері логістики та кінцевої доставки…",
    "[read more]": "[читати далі]",

    "About Us": "Про нас",
    Introduction: "Вступ",
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products":
      "Niche Supply Control Co. Ltd надає професійні економічно ефективні рішення для управління закупівлями та поставками в Китаї для клієнтів роздрібної мережі. Ми працюємо з майже всіма непродовольчими споживчими товарами, представленими в більшості великих супермаркетів, а також з деякими вибраними продуктами харчування",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery":
      "Наш рівень обслуговування та підтримки є безпрецедентним, оскільки ми присутні та можемо надати керівництво на всіх етапах вашого ланцюга закупівель та постачання. Ми починаємо з планування та аналізу, продовжуємо обробку замовлень і контроль, а завершуємо ваші закупівлі консультаціями експертів у сфері логістики та кінцевої доставки",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth":
      "Ми створюємо індивідуальні, високоефективні ланцюги поставок для кожного з наших клієнтів, які допомагають знизити витрати, підвищити якість і збільшити прибуток, що дозволяє вам зосередитися на інших пріоритетах. Окрім очевидних переваг наших рішень, наша мета — допомогти вашому розвитку та зростанню",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "У Niche ми пишаємося своєю трудовою етикою та прозорістю, яку ми маємо з нашими клієнтами. Незалежно від рішення, ваші найкращі інтереси завжди на першому плані",
    "Our Team": "Наша команда",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language":
      "Наша міжнародна команда професіоналів об’єднує експертів із закупівель, продуктів і управління логістикою до 6 Sigma. У нас є представники з усього світу (Азія, Європа, Північна та Південна Америка), що означає, що ми говоримо та думаємо вашою мовою",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers":
      "Ми дуже пишаємося нашою командою та віримо, що ви оціните професіоналізм і легкість ведення бізнесу, які ми можемо забезпечити, працюючи з китайськими виробниками",
    "Our Locations": "Наші локації",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs":
      "Наша міжнародна штаб-квартира розташована в Пекіні, Китай, де знаходяться наш фінансовий відділ, служба обслуговування клієнтів і команда менеджерів. Окрім Пекіна, у нас є відділення в Іу та Шаньтоу, де відбувається закупівля запасів і консолідація товарів",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide":
      "Нашу мережу внутрішніх інспекторів можна знайти в усіх основних промислових районах Китаю, включаючи Гуандун, Фуцзянь, Чжецзян, Цзянсу, Шаньдун та деякі інші провінції. Це покриття дозволяє нам гарантувати високу швидкість і якість послуг, які ми надаємо",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues":
      "Наші склади розташовані в ключових транспортних точках, торгових точках і основних портах, що дозволяє нам вирішувати складні логістичні питання",

    Solutions: "Рішення",
    "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand":
      "У Niche Control Supply Co., Ltd ми надаємо вам універсальне, індивідуальне інтегроване рішення, щоб зробити ваші закупівлі в Китаї успішними. Успішні закупівлі досягаються шляхом ретельного моніторингу та коригування кожного етапу ланцюжка постачання, щоб ви отримували потрібні товари в потрібний час, за бажаною ціною та потрібною якістю",
    "The core elements of our business and the key to fulfilling your needs are in the following areas":
      "Основні елементи нашого бізнесу та ключ до задоволення ваших потреб знаходяться в наступних сферах",

    "Audit & Consulting": "Аудит і консалтинг",
    "Procurement Strategy Development": "Розробка стратегії закупівель",
    "Supplier Evaluation": "Оцінка постачальника",
    "Legal Support": "Юридична підтримка",
    "Market Research": "Дослідження ринку",
    "Фінансування торгівлі": "Дослідження ринку",

    "Audit & Consulting": "Аудит і консалтинг",
    "Understanding your needs is our first priority. We work with many different retail customers both locally and internationally and we know that each situation is totally unique. Before we recommend anything we do an in-depth analysis of your situation. With a detailed view of your plans, your targets, and your concerns, we can provide you with a tailor made solution":
      "Розуміння ваших потреб є нашим першочерговим завданням. Ми працюємо з багатьма різними роздрібними клієнтами як на місцевому, так і на міжнародному рівнях, і ми знаємо, що кожна ситуація абсолютно унікальна. Перш ніж щось рекомендувати, ми проводимо глибокий аналіз вашої ситуації. Завдяки детальному огляду ваших планів, цілей і проблем ми можемо надати вам індивідуальне рішення",

    "Procurement Strategy Development": "Розробка стратегії закупівель",
    "Depending on the quantity, quality, delivery schedule, documentation requirements, and other needs you may have, we are able to select and recommend the ideal strategy for your procurement":
      "Залежно від кількості, якості, графіка доставки, вимог до документації та інших потреб, які у вас можуть виникнути, ми можемо вибрати та порекомендувати ідеальну стратегію для ваших закупівель",
    "By carefully monitoring and utilizing the methods below, we are able to guarantee you a highly efficient and secure supply chain:-Time of Order -Supplier Analysis and Selection -Stock Procurement -Logistics Review -Price & Quality Optimization -Cost and Capital Reduction":
      "Ретельно відстежуючи та використовуючи наведені нижче методи, ми можемо гарантувати вам високоефективний і безпечний ланцюжок поставок:-Час замовлення -Аналіз кількості замовлень -Аналіз і вибір постачальника -Заготівля запасів -Огляд логістики -Оптимізація ціни та якості -Зменшення вартості та капіталу",

    "Supplier Evaluation": "Оцінка постачальника",
    "Selecting the ideal supplier can be laborious and burdensome. This is why we provide you a multi-faceted evaluation of current and potential suppliers so we are certain they are able to reach and or exceed your needs":
      "Вибір ідеального постачальника може бути трудомістким і обтяжливим. Ось чому ми надаємо вам багатосторонню оцінку поточних і потенційних постачальників, щоб ми були впевнені, що вони зможуть задовольнити або перевищити ваші потреби",
    "By utilizing comparative analysis and a complex evaluation of several suppliers, we can provide you with a transparent view of the materials used, quality of goods produced, capabilities, working conditions, management structure, internal quality control systems, financial situation, and numerous other variables":
      "Використовуючи порівняльний аналіз і комплексну оцінку кількох постачальників, ми можемо надати вам прозоре уявлення про використані матеріали, якість вироблених товарів, можливості, умови праці, структуру управління, системи внутрішнього контролю якості, фінансову ситуацію та багато інших змінних",
    "Once a supplier is selected the supplier evaluation continues. Following your first order we supervise the suppliers work during the order processing and provide an evaluation report after each order has been completed":
      "Після вибору постачальника оцінка постачальника продовжується. Після вашого першого замовлення ми контролюємо роботу постачальників під час обробки замовлення та надаємо звіт про оцінку після виконання кожного замовлення",

    "Legal Support": "Юридична підтримка",
    "Navigating the complex legal guidelines of overseas procurement can be arduous. The focus of our legal support goes beyond the secure procurement of your goods but, to obtain stable legal cooperation with your suppliers to avoid any controversy and misunderstandings":
      "Орієнтуватися в складних правових принципах закупівель за кордоном може бути важко. Основна увага нашої юридичної підтримки виходить за межі безпечної закупівлі ваших товарів, а на забезпечення стабільної юридичної співпраці з вашими постачальниками, щоб уникнути будь-яких суперечок і непорозумінь",
    "Our legal support provides you with a piece of mind that your intellectual property including products and trademarks are safe, and that your purchasing contracts are in accordance with Chinese legislation. If necessary, we are capable of taking legal action on our clients behalf and or mediating any disputes with suppliers":
      "Наша юридична підтримка забезпечує вам впевненість у тому, що ваша інтелектуальна власність, включаючи продукти та торговельні марки, є безпечною, а ваші контракти на закупівлю відповідають китайському законодавству. Якщо необхідно, ми можемо вжити судових заходів від імені наших клієнтів і/або бути посередником у будь-яких суперечках з постачальниками",

    "Market Research": "Дослідження ринку",
    "When an evaluation of a set of suppliers is not sufficient and it is required to look beyond the doors of the manufacturer, we are capable of providing in-depth market research":
      "Коли оцінки набору постачальників недостатньо і потрібно вийти за рамки виробника, ми можемо провести поглиблене дослідження ринку",
    "This in-depth product and manufacturer market research provides you with a view of the key technical standard of products, areas of production, local features, possible difficulties, major manufacturers, ranges of prices, price factors, and many other variables that will aid in your decision making":
      "Це поглиблене дослідження ринку продуктів і виробників надасть вам уявлення про основні технічні стандарти продуктів, райони виробництва, місцеві особливості, можливі труднощі, основних виробників, діапазони цін, цінові фактори та багато інших змінних, які допоможуть ваше прийняття рішень",
    "With the right data and information we can work together to find the ideal supplier and solution for your business needs":
      "Маючи правильні дані та інформацію, ми можемо працювати разом, щоб знайти ідеального постачальника та рішення для потреб вашого бізнесу",

    "Trade Financing": "Фінансування торгівлі",
    "On a case by case basis, we will work with you on financial needs that may arise during your procurement. In order to reduce your financial load we offer different trade financing solutions":
      "У кожному конкретному випадку ми будемо працювати з вами щодо фінансових потреб, які можуть виникнути під час ваших закупівель. Щоб зменшити ваше фінансове навантаження, ми пропонуємо різні рішення торгового фінансування",
    "Options are available for several markets and each situation is settled based on your circumstances, the order details, and the manufacturers position":
      "Опції доступні для кількох ринків, і кожна ситуація вирішується на основі ваших обставин, деталей замовлення та позиції виробника",

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

    "Workflow Design": "Дизайн робочого процесу",
    "By overlaying your company structure on the experience we have with different retailers and suppliers, we will coordinate and if necessary re-design work flow and processes in order to maximize your procurement from China":
      "Накладаючи структуру вашої компанії на наш досвід роботи з різними роздрібними продавцями та постачальниками, ми координуватимемо та, якщо необхідно, перепроектуємо робочий процес і процеси, щоб максимізувати ваші закупівлі з Китаю",
    "By focusing on scheduling, order processing, check-points for confirmation and control, and many other key points, we can promise the best result and efficient control of the procurement of the products you need":
      "Накладаючи структуру вашої компанії на наш досвід роботи з різними роздрібними продавцями та постачальниками, ми координуватимемо та, якщо необхідно, перепроектуємо робочий процес і процеси, щоб максимізувати ваші закупівлі з Китаю",

    "Procurement Planning & Scheduling": "Планування та планування закупівель",
    "We are very sensitive and aware of the complicated nature of a retail chains delivery schedule. We will work to understand your specific requirements and pay special attention to your delivery times, your product variety and volume, your seasonal needs, your manufacturers schedule, and many other factors":
      "Ми дуже чутливі та усвідомлюємо складний характер графіка поставок роздрібних мереж. Ми працюватимемо над тим, щоб зрозуміти ваші конкретні вимоги та приділимо особливу увагу вашим термінам доставки, асортименту та обсягу вашої продукції, вашим сезонним потребам, графіку вашого виробника та багатьом іншим факторам",
    "We will coordinate long term schedules and design short term plans together with you to assure the goods you need are delivered at the moment they are needed by your customers":
      "Ми координуватимемо довгострокові графіки та розроблятимемо короткострокові плани разом з вами, щоб забезпечити доставку необхідних вам товарів у той момент, коли вони потрібні вашим клієнтам",

    "Negotiation Support": "Підтримка переговорів",
    "There are times when it is quite difficult to reach a compromise between a buyers wishes and a sellers capability. Fortunately, with our experience, we have come across and been able to successfully resolve many unique situations":
      "Бувають моменти, коли знайти компроміс між бажаннями покупця та можливостями продавця досить складно. На щастя, завдяки нашому досвіду ми зіткнулися з багатьма унікальними ситуаціями та змогли успішно вирішити їх",
    "With our support, when required, we can negotiate with manufacturers on your behalf with the aim of finding a mutually beneficial solution which will build a base for further cooperation in the future":
      "З нашою підтримкою, якщо потрібно, ми можемо вести переговори з виробниками від вашого імені з метою пошуку взаємовигідного рішення, яке стане основою для подальшої співпраці в майбутньому",

    "Suppliers Relationship Management":
      "Керування відносинами з постачальниками",
    "To support and continue the excellent relationships we have between our clients and manufacturers, we do a lot of work to understand each party needs, then help them meet their requirements":
      "Щоб підтримувати та продовжувати чудові відносини між нашими клієнтами та виробниками, ми докладаємо багато зусиль, щоб зрозуміти потреби кожної сторони, а потім допомогти їм задовольнити їхні вимоги",
    "By working with us, we not only provide your needs and desires to the manufacturer but, we provide you with an understanding of the needs of the manufacturer. This mutual understanding and open relationship creates the foundation for successful long-term cooperation":
      "Працюючи з нами, ми не тільки надаємо ваші потреби та бажання виробнику, але й надаємо вам розуміння потреб виробника. Це взаєморозуміння та відкриті стосунки створюють фундамент для успішної довгострокової співпраці",

    "Order Progress Supervising": "Нагляд за виконанням замовлення",
    "Together with quality assurance, lead time control is one of the most important factors in efficient procurement. Depending on the manufacturers you work with and your order details, we put in place checkpoints all along the main milestones of the order process":
      "Разом із забезпеченням якості контроль часу виконання є одним із найважливіших факторів ефективних закупівель. Залежно від виробників, з якими ви працюєте, і деталей вашого замовлення ми встановлюємо контрольні точки на всіх основних етапах процесу замовлення",
    "This control along the manufacturing stages not only allows to us to promise you on-time delivery, but enables us to make needed adjustments far in advance, if necessary":
      "Цей контроль на етапах виробництва не тільки дозволяє нам обіцяти вам своєчасну доставку, але й дає нам змогу вносити необхідні корективи завчасно, якщо це необхідно",

    "Documentation Control": "Контроль документації",
    "Once an order is placed, we begin diligently preparing all of the required documents you will need to make import procedures smooth and fast. Accuracy and precision is key, therefore, we carefully study the required documents needed by product and prepare this well in advance":
      "Після розміщення замовлення ми починаємо старанно готувати всі необхідні документи, які вам знадобляться, щоб процедури імпорту пройшли легко та швидко. Точність і точність є ключовими, тому ми ретельно вивчаємо документи, необхідні для продукту, і готуємо їх заздалегідь",
    "Additionally, as orders pass our pre-shipment inspection, the data from the inspection is used for a final documentation check. With years of experience moving products out of China, we can help you avoid making costly mistakes from overlooking a minor piece of paperwork":
      "Крім того, коли замовлення проходять нашу передвідвантажувальну перевірку, дані перевірки використовуються для остаточної перевірки документації. Маючи багаторічний досвід перевезення товарів з Китаю, ми можемо допомогти вам уникнути дорогих помилок через пропуск незначної паперової роботи",

    Sourcing: "Постачання",
    "ODM & OEM Manufacturing Management": "Управління виробництвом ODM і OEM",
    "Packaging & Labeling Solutions": "Рішення для пакування та маркування",
    "Product Adjustment & Improvement": "Коригування та вдосконалення продукту",
    "Leftover Stock Procurement": "Закупівля залишків запасів",
    "LCL Procurement": "Закупівля залишків запасів",

    Sourcing: "Постачання",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "Завдяки великій базі даних надійних постачальників і багаторічному досвіду роботи з продуктами ми можемо запропонувати вам широкий спектр індивідуальних послуг і рішень, які забезпечать вам гнучкість і можливість отримати потрібні вам продукти в упаковці, яку ви бажаєте, і весь час за ціною, яку ви вимагаєте",

    "ODM & OEM Manufacturing Management": "Управління виробництвом ODM і OEM",
    "The development and expansion of a private brand for any retailer can be difficult. To help make this easier, we provide both ODM & OEM order management solutions. Whether you are looking to develop a brand new product idea or take advantage of the ready-made offers we have in place, we have the solution for you":
      "Розвиток і розширення приватного бренду для будь-якого роздрібного продавця може бути складним. Щоб полегшити це, ми надаємо рішення для керування замовленнями як ODM, так і OEM. Незалежно від того, чи хочете ви розробити ідею абсолютно нового продукту чи скористатися перевагами готових пропозицій, які ми маємо на місці, у нас є рішення для вас",
    "The key points of any ODM & OEM project are a suppliers competence, responsiveness, and the controls they have in place during the initial order stages. With our experience in private label order management and our evaluation of special suppliers we can help you with any ODM & OEM projects you may have in mind":
      "Ключовими моментами будь-якого проекту ODM та OEM є компетентність постачальників, оперативність і засоби контролю, які вони мають на початкових етапах замовлення. Завдяки нашому досвіду в управлінні замовленнями приватних торгових марок і нашій оцінці спеціальних постачальників ми можемо допомогти вам з будь-якими проектами ODM і OEM, які ви можете мати на увазі",

    "Packaging & Labeling Solutions": "Рішення для пакування та маркування",
    "Product packaging and labeling is a key part in the logistics process. Whether or not your packaging and labeling needs are basic or complicated, we have the experience to help. We can provide support in the creation of bar codes and native language labels. We can help you increase your sales by assisting in the development of, product packaging, point-of-purchase displays, pallet displays, tray displays, or show boxes":
      "Упаковка та маркування продукції є ключовою частиною процесу логістики. Незалежно від того, чи є ваші потреби в упаковці та маркуванні базовими чи складними, ми маємо досвід, щоб допомогти. Ми можемо надати підтримку у створенні штрих-кодів і етикеток рідною мовою. Ми можемо допомогти вам збільшити ваші продажі, допомагаючи в розробці упаковки продукту, дисплеїв на місці покупки, палетних дисплеїв, лотків або демонстраційних коробок",
    "At times, manufacturer packing and labeling options can be limited. If that is the case; we make it possible for you to outsource your packaging and labeling needs to professional printing companies, who will then pass the material to the manufacturer for final packaging, or to us for final touches in our own facilities":
      "Часом варіанти упаковки та маркування виробника можуть бути обмежені. Якщо це так; ми надаємо вам можливість передати ваші потреби в упаковці та етикетках професійним поліграфічним компаніям, які потім передадуть матеріал виробнику для остаточного пакування або нам для остаточних штрихів на наших власних підприємствах",

    "Product Adjustment & Improvement": "Коригування та вдосконалення продукту",
    "In a case where a product does not meet your needs, we are capable of working with suppliers and manufacturers on making the needed adjustments to reach your satisfaction requirements. Whether we are selecting alternate materials, switching manufacturers, or changing technical specifications, we can consult you on your best options":
      "У випадку, коли продукт не відповідає вашим потребам, ми можемо співпрацювати з постачальниками та виробниками над внесенням необхідних коригувань для досягнення ваших вимог. Незалежно від того, чи ми обираємо альтернативні матеріали, змінюємо виробника чи змінюємо технічні характеристики, ми можемо проконсультувати вас щодо найкращих варіантів",
    "Getting the right product, at the right price, with the right design and quality, takes experience and connections when working with Chinese manufacturers. We can help you negotiate to get the exact price you want, the exact quality you need, or the best value for your money":
      "Щоб отримати потрібний продукт за правильною ціною, з відповідним дизайном і якістю, потрібні досвід і зв’язки під час роботи з китайськими виробниками. Ми можемо допомогти вам домовитися, щоб отримати точну ціну, яку ви хочете, точну якість, яка вам потрібна, або найкраще співвідношення ціни та якості",

    "Leftover Stock Procurement": "Закупівля залишків запасів",
    "Overtime, all suppliers get into situations where they are overstocked and have “leftover” merchandise that must be sold. This typically occurs due to over-production and customer refusals. There are huge advantages and disadvantages to procuring products that are deemed “leftover”. You can receive discounted prices and immediate shipment but, at the same time be faced with quality risks":
      "Згодом усі постачальники потрапляють у ситуації, коли у них надлишок товарів і «залишки» товарів, які необхідно продати. Зазвичай це відбувається через перевиробництво та відмову клієнтів. Закупівля продуктів, які вважаються «залишками», має величезні переваги та недоліки. Ви можете отримати знижені ціни та негайну доставку, але водночас зіткнутися з ризиком якості",
    "We monitor the market for suitable and interesting leftover stock product offers and when the orders are processed we do special quality control checks, including; defect sorting, repacking, and relabeling if required. With our support, you can be confident that your leftover stock procurement meets the stated criteria from the manufacturer":
      "Ми моніторимо ринок на наявність відповідних і цікавих пропозицій залишків продукції, і коли замовлення обробляються, ми проводимо спеціальні перевірки якості, включаючи; сортування дефектів, перепакування та перемаркування, якщо потрібно. Завдяки нашій підтримці ви можете бути впевнені, що закупівля залишків запасів відповідає критеріям, заявленим виробником",

    "LCL Procurement": "Закупівлі LCL",
    "We offer LCL (Less than container loading) procurement, when your order from one supplier is less than a full container. When your order is shipped, it is consolidated with other orders either, on manufacturers premises, or in our warehouses. With LCL, we can satisfy your needs for low volume orders, due to limited consumption or due to partial shipments for complex delivery plans":
      "Ми пропонуємо закупівлю LCL (Less than container loading), коли ваше замовлення від одного постачальника менше повного контейнера. Коли ваше замовлення відправляється, воно об’єднується з іншими замовленнями або на території виробника, або на наших складах. За допомогою LCL ми можемо задовольнити ваші потреби в невеликих обсягах замовлень через обмежене споживання або через часткові поставки за складними планами доставки",
    "Additionally, with our presence in Yiwu, China, we can offer procurement from the Yiwu market and take advantage of almost no MOQ requirements and short delivery times. Our office and warehouse in Yiwu allows us to process your orders, provide labeling, do quality control, and other offer other logistics management solutions":
      "Крім того, завдяки нашій присутності в Іу, Китай, ми можемо запропонувати закупівлі на ринку Іу та скористатися перевагами майже відсутності вимог до мінімальних замовлень і коротких термінів доставки. Наш офіс і склад в Іу дозволяють нам обробляти ваші замовлення, надавати маркування, здійснювати контроль якості та пропонувати інші рішення для управління логістикою",

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
      "Завдяки великій базі даних надійних постачальників і багаторічному досвіду роботи з продуктами ми можемо запропонувати вам широкий спектр індивідуальних послуг і рішень, які забезпечать вам гнучкість і можливість отримати потрібні вам продукти в упаковці, яку ви бажаєте, і весь час за ціною, яку ви вимагаєте",
    "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions":
      "По-перше, у 50% випадків між постачальником і клієнтом спостерігається повна відсутність розуміння вимог до якості. По-друге, у 35% випадків постачальники разом ігнорують вимоги. Нарешті, у 10% випадків відбувається навмисне зниження вартості та якості",
    "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require":
      "Щоб уникнути та усунути вищевказані проблеми, ми прийняли та використовуємо багато різних процесів та інструментів, щоб гарантувати, що ви отримаєте потрібні вам продукти",

    "Quality Criteria Coordination": "Координація критеріїв якості",
    "As mentioned, when quality issues occur, 50% of the time this is due to a complete and total misunderstanding of the quality requirements between the supplier and the customer. This can be avoided by identifying and documenting all the aspects of quality long before an order is made. By validating manufacturers capabilities to reach your quality requirements while documenting the requirements you have, we can eliminate and minimize any potential for miscommunication":
      "Як згадувалося, коли виникають проблеми з якістю, у 50% випадків це пов’язано з повним і повним нерозумінням вимог до якості між постачальником і замовником. Цього можна уникнути, визначивши та задокументувавши всі аспекти якості задовго до того, як буде зроблено замовлення. Перевіряючи здатність виробника задовольняти ваші вимоги до якості, документуючи вимоги, які ви маєте, ми можемо усунути та мінімізувати будь-яку можливість непорозуміння",
    "We help you understand the possible quality / price levels and help you set the quality criteria and defect definitions, based on either custom-made quality criteria or on AQL (Acceptable Quality Level, as per standard MIL-STD-105E/ISO 2859-1 (1999) or Acceptable Quality Limits as per standard ANSI/ASQC Z1.4-2003)":
      "Ми допоможемо вам зрозуміти можливі рівні якості/ціни та допоможемо встановити критерії якості та визначення дефектів на основі індивідуальних критеріїв якості або AQL (прийнятного рівня якості, відповідно до стандарту MIL-STD-105E/ISO 2859-1). (1999) або допустимі межі якості згідно зі стандартом ANSI/ASQC Z1.4-2003)",

    "Multi-Stage Quality Inspection": "Багатоступенева перевірка якості",
    "Depending on the product, order features, manufacturers situation, and other factors, we are capable of doing single stage, several stage, or even full cycle quality control in order to secure the quality and delivery time of your procurement. We verify workmanship, function, technical features, color, size, labels, marks, and any other parameters you require - all with a view to ensure that the contract specifications for product and packing are met":
      "Залежно від продукту, особливостей замовлення, ситуації з виробником та інших факторів ми можемо здійснювати одноетапний, кількаетапний або навіть повний цикл контролю якості, щоб забезпечити якість і терміни доставки ваших закупівель. Ми перевіряємо якість виготовлення, функції, технічні характеристики, колір, розмір, етикетки, знаки та будь-які інші параметри, які вам потрібні, - усе з метою забезпечення відповідності специфікаціям контракту щодо продукту та упаковки",
    "Broken into 4 steps, below are the services that enable us to provide you with the quality goods you require":
      "Розбиті на 4 кроки, нижче наведено послуги, які дозволяють нам надати вам якісні товари, які вам потрібні",

    "Pre-Production Inspection (PPI)": "Передвиробнича перевірка (PPI)",
    "Pre-Production Inspection (PPI) is done before the production process even starts. This ensures, not only that the manufacturer understands all quality requirements but, the availability of corresponding raw materials, components, and facilities. This gives us an understanding of the manufacturing schedule and enables us to be aware of any possible quality and lead time deviations":
      "Передпочаткова інспекція (PPI) проводиться ще до початку виробничого процесу. Це гарантує не тільки те, що виробник розуміє всі вимоги до якості, але й наявність відповідної сировини, компонентів і обладнання. Це дає нам уявлення про виробничий графік і дозволяє нам бути в курсі будь-яких можливих відхилень у якості та термінах виконання",

    "Initial Production Inspection (IPI)":
      "Початкова інспекція виробництва (IPI)",
    "Initial Production Inspection has similar features and functions as the PPI but, extends to the exact order, the evaluation of the actual merchandise, and the actual manufacturing capacity. If necessary, certain order processing adjustments can be made":
      "Початкова інспекція виробництва має подібні характеристики та функції, як і PPI, але поширюється на точне замовлення, оцінку фактичного товару та фактичної виробничої потужності. При необхідності можна внести певні коригування обробки замовлення",

    "During Production Inspection (DPI)": "Під час інспекції виробництва (DPI)",
    "During Product Inspection s implemented when at least 15% of the total merchandise has been manufactured. During this time, we can confirm that all product parameters as well packing marking details conform to your agreed upon specifications":
      "Під час перевірки продукції проводиться, коли виготовлено щонайменше 15% від загальної кількості товарів. Протягом цього часу ми можемо підтвердити, що всі параметри продукту, а також деталі маркування упаковки відповідають узгодженим специфікаціям",

    "Pre-Shipment Inspection (PSI)": "Передвідвантажувальна перевірка (PSI)",
    "A Pre-Shipment Inspection is done when at least 85% of the the merchandise has been completed, packed, and is nearly ready for shipment. Our inspectors evaluate a statistically determined random sample of finished goods, based on an internationally recognized statistical random sampling techniques known as ANSI/ASQ Z1.4-2003, ISO 2859-1 or based our your AQL needs. This final inspection not only allows us to guarantee a final seal of quality but, it guarantees the accuracy of all your needed documentation":
      "Передвідвантажувальна перевірка проводиться, коли принаймні 85% товару вже готові, упаковані та майже готові до відправлення. Наші інспектори оцінюють статистично визначену випадкову вибірку готової продукції на основі міжнародно визнаних статистичних методів випадкової вибірки, відомих як ANSI/ASQC Z1.4-2003, ISO 2859-1, або на основі наших потреб AQL. Ця остаточна перевірка не тільки дозволяє нам гарантувати остаточну печатку якості, але й гарантує точність усієї необхідної документації",

    "Production Monitoring": "Моніторинг виробництва",
    "For highly sensitive orders we offer the service of production monitoring for non-stop on-sight manufacturing control. This level of service can be applied to the production of the product, the packing, the parts, raw material quality, as well as the machinery and the facilities involved":
      "Для дуже чутливих замовлень ми пропонуємо послугу моніторингу виробництва для безперервного контролю виробництва на місці. Цей рівень обслуговування може бути застосований до виробництва продукту, упаковки, деталей, якості сировини, а також до обладнання та обладнання",

    "Defect Sorting": "Сортування дефектів",
    "The target of defect sorting is to sort out and remove products whose quality has not reached the level of acceptability for your procurement. This is used either for orders who have failed repeated inspections or for left-over stock procurements where the quality range significantly exceeds the set of AQL requirements":
      "Метою сортування дефектів є сортування та видалення продуктів, якість яких не досягла рівня прийнятності для вашої закупівлі. Це використовується або для замовлень, які не пройшли повторні перевірки, або для закупівель залишків, де діапазон якості значно перевищує набір вимог AQL",

    "Laboratory Testing & Certification":
      "Лабораторне тестування та сертифікація",
    "In certain situations your procurement and products may require formal certification, from a state authority or an independently recognized tester, to fulfill legal guidelines. If needed, we can help you work with a wide range of testing and certification organizations in China, including local and international testing centers, laboratories, and science institutions, e.g. TÜV, SGS, Bureau Veritas, CIQ etc., to provide all the necessary documentation and quality guarantees":
      "У певних ситуаціях ваші закупівлі та продукти можуть вимагати офіційної сертифікації від державного органу або незалежно визнаного випробувача, щоб відповідати правовим вимогам. За потреби ми можемо допомогти вам співпрацювати з багатьма організаціями з тестування та сертифікації в Китаї, включаючи місцеві та міжнародні центри тестування, лабораторії та наукові установи, напр. TÜV, SGS, Bureau Veritas, CIQ тощо, щоб надати всю необхідну документацію та гарантії якості",

    "Container Loading Supervision": "Контроль за завантаженням контейнерів",
    "Container loading supervision is done both before and during loading to ensure loading consistency, safety of the goods during the transportation, and documentation accuracy":
      "Нагляд за завантаженням контейнерів здійснюється як до, так і під час завантаження, щоб забезпечити послідовність завантаження, збереження вантажу під час транспортування та точність документації",
    "Before loading we check shipping marks, packing quality, container conditions, and in some cases, gross weight. Once loading has commenced we concentrate on the quantity of cartons placed, the handling of the goods, and placement inside the container, all to avoid any mistakes or damage of the product and to make sure your products can be securely delivered":
      "Перед завантаженням ми перевіряємо транспортні марки, якість упаковки, стан контейнера, а в деяких випадках і вагу брутто. Після початку завантаження ми зосереджуємося на кількості розміщених коробок, обробці товарів і розміщенні всередині контейнера, щоб уникнути будь-яких помилок або пошкодження продукту та забезпечити надійну доставку ваших продуктів",

    Logistics: "Логістика",
    "International Transportation": "Міжнародні перевезення",
    "Complex Delivery Planning": "Комплексне планування доставки",
    "China Warehouse Management": "Управління складом у Китаї",
    "Door-to-Door Delivery": "Доставка від дверей до дверей",

    Logistics: "Логістика",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain":
      "Будучи таким важливим елементом загальних витрат і основою стабільності ланцюжка поставок, оптимізація логістики в нашій компанії дуже ретельно ставиться. Ми можемо запропонувати багато рішень і унікальних виправлень для вашої конкретної ситуації, які призведуть до скорочення витрат і більш ефективного ланцюжка поставок",

    "International Transportation": "Міжнародні перевезення",
    "When planning the transportation of an order we think about cost, time, production schedule, manufacturer location, port of destination, contract terms, and special transportation requirements, in order to match your goods with the ideal method of delivery":
      "Плануючи транспортування замовлення, ми враховуємо вартість, час, графік виробництва, місцезнаходження виробника, порт призначення, умови контракту та особливі вимоги до транспортування, щоб підібрати ваші товари з ідеальним способом доставки",
    "We cooperate with Chinese local and international shipping agents and shipping lines in order to have a wide array of options available to you when you need them. By sea, air, or land, we can coordinate any combination depending on the product, order urgency, and your location":
      "Ми співпрацюємо з китайськими місцевими та міжнародними транспортними агентами та судноплавними лініями, щоб мати широкий спектр варіантів, доступних для вас, коли вони вам потрібні. Морем, повітрям або землею ми можемо скоординувати будь-яку комбінацію залежно від продукту, терміновості замовлення та вашого місцезнаходження",

    "Complex Delivery Planning": "Комплексне планування доставки",
    "To reduce your cost of delivery and to optimize your inventory holdings, we can work with you on a delivery plan that best fits your needs. Whether your deliveries are dependent on sale forecasts or you use the LCL way of procurement with multiple suppliers, we can assist you":
      "Щоб зменшити вашу вартість доставки та оптимізувати ваші запаси, ми можемо разом з вами розробити план доставки, який найкраще відповідає вашим потребам. Незалежно від того, чи залежать ваші поставки від прогнозів продажів або ви використовуєте LCL-спосіб закупівлі з кількома постачальниками, ми можемо вам допомогти",

    "China Warehouse Management": "Управління складом у Китаї",
    "As an extension of our complex delivery service, we offer warehouse and distribution center management solutions. This option not only allows for the adjustment of SKU quantities in a container but to load a container with an almost unlimited variety of products for further delivery to the exact distribution center of your designation":
      "Як розширення нашої комплексної послуги доставки ми пропонуємо рішення з управління складами та розподільними центрами. Ця опція дозволяє не тільки регулювати кількість SKU в контейнері, але й завантажувати контейнер майже необмеженою різноманітністю продуктів для подальшої доставки до точного розподільчого центру за вашим призначенням",
    "This solution is extremely valuable if your sales territories are large and you have a multi-level distribution system. With our help, we can reduce your logistic costs by avoiding a least one level of your distribution chain":
      "Це рішення надзвичайно цінне, якщо ваші торгові території великі та у вас є багаторівнева система розподілу. З нашою допомогою ми можемо зменшити ваші витрати на логістику, уникнувши принаймні одного рівня вашого розподільчого ланцюга",

    "Door-to-Door Delivery": "Доставка від дверей до дверей",
    "In some markets we can offer the service of Door-to-Door delivery, where we take responsibility for all transportation and customs formalities until the goods are delivered to your distribution center":
      "На деяких ринках ми можемо запропонувати послугу доставки «від дверей до дверей», де ми беремо на себе відповідальність за всі транспортні та митні формальності, поки товар не буде доставлено до вашого дистриб’юторського центру",
    "In this case, you have no need to be directly involved with import contracts, procedures, and other customs formalities. You can concentrate on your main priorities without losing the advantages of importing products from China":
      "У цьому випадку вам не потрібно безпосередньо займатися імпортними контрактами, процедурами та іншими митними формальностями. Ви можете зосередитися на своїх основних пріоритетах, не втрачаючи переваг імпорту продукції з Китаю",

    Contacts: "Контакти",
    "Thank you for your interest in Niche Supply Control Co., Ltd":
      "Дякуємо за ваш інтерес до Niche Supply Control Co., Ltd",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below":
      "Якщо у вас є додаткові запитання або ви хочете поговорити з нами про наші послуги, скористайтеся будь-яким із наведених нижче способів зв’язку",
    "We look forward to hearing from you": "Ми з нетерпінням чекаємо від вас",

    "Mail:": "Пошта:",
    "Niche SC Ltd.": "Niche SC Ltd.",
    "Room 707, Time Fortune Building 8 (North Tower),":
      "Кімната 707, будівля Time Fortune 8 (Північна вежа),",
    "Chaoyang District, Beijing, P.R. China.":
      "Chaoyang District, Beijing, P.R. China.",
    "Postal Code: 100028": "Поштовий індекс: 100028",

    北京朝阳区三元西桥: "北京朝阳区三元西桥",
    曙光西里甲6号: "曙光西里甲6号",
    时间国际8号楼北楼707室: "时间国际8号楼北楼707室",
    "邮编：100028": "邮编：100028",

    "Phone & Fax:": "Телефон і факс:",
    "Phone: +86 (10) 6501-0188": "Телефон: +86 (10) 6501-0188",
    "Fax: +86 (10) 6501-7188": "Факс: +86 (10) 6501-7188",

    "Email:": "Електронна пошта:",
    "E-mail for general inquiries: info@nichesc.com":
      "Електронна адреса для загальних запитів: info@nichesc.com",
    "Direct e-mail for company management: direct@nichesc.com":
      "Пряма електронна пошта для керівництва компанії: direct@nichesc.com",

    Home: "Головна",
    "About Us": "Компанія",
    Solutions: "Рішення",
    Contacts: "Контакти",
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
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products":
      "Niche Supply Control Co. Ltd ofrece soluciones profesionales rentables para la gestión de adquisiciones y suministros en China para clientes de cadenas minoristas. Nos ocupamos de casi todos los bienes de consumo no alimentarios representados en la mayoría de los grandes supermercados, así como de algunos productos alimentarios seleccionados",

    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery":
      "Nuestro nivel de servicio y soporte no tiene precedentes, ya que estamos presentes y somos capaces de brindar orientación durante todas las etapas de su cadena de compras y suministro. Comenzamos con la planificación y el análisis, continuamos con el procesamiento y control de pedidos y completamos su aprovisionamiento con una asesoría experta en el área de logística y entrega final",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth":
      "Construimos cadenas de suministro individualizadas y altamente eficientes para cada uno de nuestros clientes que ayudan a reducir costos, mejorar la calidad y aumentar las ganancias, lo que le permite concentrarse en otras prioridades. Aparte de los beneficios obvios de nuestras soluciones, nuestro objetivo es ayudar a su desarrollo y crecimiento",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "En Niche, nos enorgullecemos de nuestra ética de trabajo y la transparencia que tenemos con nuestros clientes. No importa la decisión, sus mejores intereses siempre están en el frente de nuestra mente",
    "Our Team": "Nuestro equipo",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language":
      "Nuestro equipo internacional de profesionales combina expertos en gestión de compras, productos y logística hasta 6 Sigma. Tenemos representantes de todo el mundo (Asia, Europa, América del Norte y del Sur), lo que significa que hablamos y pensamos en su idioma",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers":
      "Estamos muy orgullosos de nuestro equipo y creemos que apreciará la profesionalidad y la facilidad para hacer negocios que podemos brindarle al trabajar con fabricantes chinos",
    "Our Locations": "Nuestras ubicaciones",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs":
      "Nuestra sede internacional se encuentra en Beijing, China, donde reside nuestro departamento de finanzas, servicio al cliente y equipo de gestión. Más allá de Beijing, tenemos una operación en Yiwu y Shantou, donde se realiza la adquisición de existencias y la consolidación de bienes",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide":
      "Nuestra propia red de inspectores internos se puede encontrar en todas las principales áreas industriales de China, incluidas Guangdong, Fujian, Zhejiang, Jiangsu, Shandong y algunas otras provincias. Esta cobertura nos permite garantizar los servicios de alta velocidad y calidad que brindamos",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues":
      "Nuestros almacenes están ubicados en los principales lugares de transporte, puntos comerciales y puertos principales, lo que nos permite resolver problemas logísticos complicados",

    Solutions: "Soluciones",
    "At Niche Control Supply Co., Ltd we provide you with a one-stop, tailor made, integrated solution, to make your procurement in China successful. A successful procurement is achieved by carefully monitoring and adjusting each step of the supply chain so you receive the goods you want, in the time you need them, at the price you desire, and at the quality you demand":
      "En Niche Control Supply Co., Ltd, le brindamos una solución integral, hecha a la medida e integrada para que su adquisición en China sea un éxito. Una adquisición exitosa se logra al monitorear y ajustar cuidadosamente cada paso de la cadena de suministro para que reciba los productos que desea, en el tiempo que los necesita, al precio que desea y con la calidad que exige",
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

    "Procurement Strategy Development":
      "Desarrollo de la estrategia de adquisiciones",
    "Depending on the quantity, quality, delivery schedule, documentation requirements, and other needs you may have, we are able to select and recommend the ideal strategy for your procurement":
      "Dependiendo de la cantidad, la calidad, el cronograma de entrega, los requisitos de documentación y otras necesidades que pueda tener, podemos seleccionar y recomendar la estrategia ideal para su adquisición",
    "By carefully monitoring and utilizing the methods below, we are able to guarantee you a highly efficient and secure supply chain:-Time of Order -Supplier Analysis and Selection -Stock Procurement -Logistics Review -Price & Quality Optimization -Cost and Capital Reduction":
      "Al monitorear cuidadosamente y utilizar los métodos a continuación, podemos garantizarle una cadena de suministro altamente eficiente y segura:-Tiempo de pedido -Análisis y selección de proveedores -Adquisición de existencias -Revisión de logística -Optimización de precio y calidad -Reducción de costos y capital",

    "Supplier Evaluation": "Evaluación de proveedores",
    "Selecting the ideal supplier can be laborious and burdensome. This is why we provide you a multi-faceted evaluation of current and potential suppliers so we are certain they are able to reach and or exceed your needs":
      "Seleccionar el proveedor ideal puede ser laborioso y oneroso. Es por eso que le brindamos una evaluación multifacética de los proveedores actuales y potenciales para estar seguros de que pueden alcanzar o superar sus necesidades",
    "By utilizing comparative analysis and a complex evaluation of several suppliers, we can provide you with a transparent view of the materials used, quality of goods produced, capabilities, working conditions, management structure, internal quality control systems, financial situation, and numerous other variables":
      "Al utilizar un análisis comparativo y una evaluación compleja de varios proveedores, podemos brindarle una visión transparente de los materiales utilizados, la calidad de los bienes producidos, las capacidades, las condiciones de trabajo, la estructura de gestión, los sistemas internos de control de calidad, la situación financiera y muchos otros variables",
    "Once a supplier is selected the supplier evaluation continues. Following your first order we supervise the suppliers work during the order processing and provide an evaluation report after each order has been completed":
      "Una vez que se selecciona un proveedor, la evaluación del proveedor continúa. Después de su primer pedido, supervisamos el trabajo de los proveedores durante el procesamiento del pedido y proporcionamos un informe de evaluación después de que se haya completado cada pedido",

    "Legal Support": "Apoyo legal",
    "Navigating the complex legal guidelines of overseas procurement can be arduous. The focus of our legal support goes beyond the secure procurement of your goods but, to obtain stable legal cooperation with your suppliers to avoid any controversy and misunderstandings":
      "Navegar por las complejas pautas legales de la contratación en el extranjero puede ser arduo. El enfoque de nuestro apoyo legal va más allá de la adquisición segura de sus bienes, sino de obtener una cooperación legal estable con sus proveedores para evitar controversias y malentendidos",
    "Our legal support provides you with a piece of mind that your intellectual property including products and trademarks are safe, and that your purchasing contracts are in accordance with Chinese legislation. If necessary, we are capable of taking legal action on our clients behalf and or mediating any disputes with suppliers":
      "Nuestro apoyo legal le brinda la tranquilidad de que su propiedad intelectual, incluidos los productos y las marcas registradas, están seguros y que sus contratos de compra cumplen con la legislación china. Si es necesario, somos capaces de emprender acciones legales en nombre de nuestros clientes y/o mediar en cualquier disputa con los proveedores",

    "Market Research": "Investigación de mercado",
    "When an evaluation of a set of suppliers is not sufficient and it is required to look beyond the doors of the manufacturer, we are capable of providing in-depth market research":
      "Cuando una evaluación de un conjunto de proveedores no es suficiente y se requiere mirar más allá de las puertas del fabricante, somos capaces de proporcionar una investigación de mercado profunda",
    "This in-depth product and manufacturer market research provides you with a view of the key technical standard of products, areas of production, local features, possible difficulties, major manufacturers, ranges of prices, price factors, and many other variables that will aid in your decision making":
      "Esta investigación exhaustiva del mercado de productos y fabricantes le brinda una vista del estándar técnico clave de los productos, las áreas de producción, las características locales, las posibles dificultades, los principales fabricantes, los rangos de precios, los factores de precios y muchas otras variables que ayudarán en su toma de decisiones",
    "With the right data and information we can work together to find the ideal supplier and solution for your business needs":
      "Con los datos y la información correctos, podemos trabajar juntos para encontrar el proveedor y la solución ideales para las necesidades de su negocio",

    "Trade Financing": "Financiación comercial",
    "On a case by case basis, we will work with you on financial needs that may arise during your procurement. In order to reduce your financial load we offer different trade financing solutions":
      "Trabajaremos caso por caso con usted sobre las necesidades financieras que puedan surgir durante su adquisición. Para reducir su carga financiera, ofrecemos diferentes soluciones de financiamiento comercial",
    "Options are available for several markets and each situation is settled based on your circumstances, the order details, and the manufacturers position":
      "Las opciones están disponibles para varios mercados y cada situación se resuelve en función de sus circunstancias, los detalles del pedido y la posición del fabricante",

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

    "Workflow Design": "Diseño de flujo de Trabajo",
    "By overlaying your company structure on the experience we have with different retailers and suppliers, we will coordinate and if necessary re-design work flow and processes in order to maximize your procurement from China":
      "Al superponer la estructura de su empresa a la experiencia que tenemos con diferentes minoristas y proveedores, coordinaremos y, si es necesario, rediseñaremos el flujo de trabajo y los procesos para maximizar su adquisición desde China",
    "By focusing on scheduling, order processing, check-points for confirmation and control, and many other key points, we can promise the best result and efficient control of the procurement of the products you need":
      "Al centrarnos en la programación, el procesamiento de pedidos, los puntos de verificación para la confirmación y el control, y muchos otros puntos clave, podemos prometer el mejor resultado y un control eficiente de la adquisición de los productos que necesita",

    "Procurement Planning & Scheduling":
      "Planificación y Programación de Adquisiciones",
    "We are very sensitive and aware of the complicated nature of a retail chains delivery schedule. We will work to understand your specific requirements and pay special attention to your delivery times, your product variety and volume, your seasonal needs, your manufacturers schedule, and many other factors":
      "Somos muy sensibles y conscientes de la naturaleza complicada del cronograma de entrega de una cadena minorista. Trabajaremos para comprender sus requisitos específicos y prestar especial atención a sus tiempos de entrega, la variedad y el volumen de su producto, sus necesidades estacionales, el cronograma de su fabricante y muchos otros factores",
    "We will coordinate long term schedules and design short term plans together with you to assure the goods you need are delivered at the moment they are needed by your customers":
      "Coordinaremos los cronogramas a largo plazo y diseñaremos planes a corto plazo junto con usted para garantizar que los productos que necesita se entreguen en el momento en que los necesiten sus clientes",

    "Negotiation Support": "Soporte de Negociación",
    "There are times when it is quite difficult to reach a compromise between a buyers wishes and a sellers capability. Fortunately, with our experience, we have come across and been able to successfully resolve many unique situations":
      "Hay momentos en los que es bastante difícil llegar a un compromiso entre los deseos de un comprador y la capacidad de un vendedor. Afortunadamente, con nuestra experiencia, nos hemos encontrado y hemos podido resolver con éxito muchas situaciones únicas",
    "With our support, when required, we can negotiate with manufacturers on your behalf with the aim of finding a mutually beneficial solution which will build a base for further cooperation in the future":
      "Con nuestro apoyo, cuando sea necesario, podemos negociar con los fabricantes en su nombre con el objetivo de encontrar una solución mutuamente beneficiosa que construya una base para una mayor cooperación en el futuro",

    "Suppliers Relationship Management":
      "Administracion de Relaciones de Provisiones",
    "To support and continue the excellent relationships we have between our clients and manufacturers, we do a lot of work to understand each party needs, then help them meet their requirements":
      "Para respaldar y continuar las excelentes relaciones que tenemos entre nuestros clientes y fabricantes, trabajamos mucho para comprender las necesidades de cada parte y luego ayudarlos a cumplir con sus requisitos",
    "By working with us, we not only provide your needs and desires to the manufacturer but, we provide you with an understanding of the needs of the manufacturer. This mutual understanding and open relationship creates the foundation for successful long-term cooperation":
      "Al trabajar con nosotros, no solo proporcionamos sus necesidades y deseos al fabricante, sino que también le brindamos una comprensión de las necesidades del fabricante. Esta comprensión mutua y relación abierta crea la base para una cooperación exitosa a largo plazo",

    "Order Progress Supervising": "Supervisión del Progreso del Pedido",
    "Together with quality assurance, lead time control is one of the most important factors in efficient procurement. Depending on the manufacturers you work with and your order details, we put in place checkpoints all along the main milestones of the order process":
      "Junto con el aseguramiento de la calidad, el control del tiempo de entrega es uno de los factores más importantes en la adquisición eficiente. Dependiendo de los fabricantes con los que trabaje y los detalles de su pedido, establecemos puntos de control a lo largo de los principales hitos del proceso de pedido",
    "This control along the manufacturing stages not only allows to us to promise you on-time delivery, but enables us to make needed adjustments far in advance, if necessary":
      "Este control a lo largo de las etapas de fabricación no solo nos permite prometerle una entrega a tiempo, sino que también nos permite hacer los ajustes necesarios con mucha anticipación, si es necesario",

    "Documentation Control": "Control de Documentación",
    "Once an order is placed, we begin diligently preparing all of the required documents you will need to make import procedures smooth and fast. Accuracy and precision is key, therefore, we carefully study the required documents needed by product and prepare this well in advance":
      "Una vez que se realiza un pedido, comenzamos a preparar diligentemente todos los documentos requeridos que necesitará para que los procedimientos de importación sean fluidos y rápidos. La exactitud y la precisión son clave, por lo tanto, estudiamos cuidadosamente los documentos requeridos que necesita cada producto y los preparamos con mucha anticipación",
    "Additionally, as orders pass our pre-shipment inspection, the data from the inspection is used for a final documentation check. With years of experience moving products out of China, we can help you avoid making costly mistakes from overlooking a minor piece of paperwork":
      "Además, a medida que los pedidos pasan nuestra inspección previa al envío, los datos de la inspección se utilizan para una verificación final de la documentación. Con años de experiencia en el traslado de productos fuera de China, podemos ayudarlo a evitar cometer errores costosos al pasar por alto un papeleo menor",

    Sourcing: "Abastecimiento",
    "ODM & OEM Manufacturing Management": "Gestión de fabricación de ODM y OEM",
    "Packaging & Labeling Solutions": "Soluciones de embalaje y etiquetado",
    "Product Adjustment & Improvement": "Ajuste y mejora del producto",
    "Leftover Stock Procurement": "Adquisición de existencias sobrantes",
    "LCL Procurement": "Adquisición de existencias sobrantes",

    Sourcing: "Abastecimiento",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "Con una amplia base de datos de proveedores confiables y años de experiencia en productos, podemos ofrecerle una amplia gama de servicios y soluciones personalizados que le brindarán la flexibilidad y la capacidad para recibir los productos que necesita, en el empaque que desea y todo el tiempo, al precio que exige",

    "ODM & OEM Manufacturing Management": "Gestión de fabricación de ODM y OEM",
    "The development and expansion of a private brand for any retailer can be difficult. To help make this easier, we provide both ODM & OEM order management solutions. Whether you are looking to develop a brand new product idea or take advantage of the ready-made offers we have in place, we have the solution for you":
      "El desarrollo y la expansión de una marca privada para cualquier minorista puede ser difícil. Para ayudar a que esto sea más fácil, proporcionamos soluciones de gestión de pedidos ODM y OEM. Ya sea que esté buscando desarrollar una idea de producto completamente nueva o aprovechar la hemos hecho ofertas, tenemos la solución para usted",
    "The key points of any ODM & OEM project are a suppliers competence, responsiveness, and the controls they have in place during the initial order stages. With our experience in private label order management and our evaluation of special suppliers we can help you with any ODM & OEM projects you may have in mind":
      "Los puntos clave de cualquier proyecto ODM y OEM son la competencia, la capacidad de respuesta y los controles que tienen los proveedores durante las etapas iniciales del pedido. Con nuestra experiencia en la gestión de pedidos de marca privada y nuestra evaluación de proveedores especiales, podemos ayudarlo con cualquier Proyectos ODM y OEM que puede tener en mente",

    "Packaging & Labeling Solutions": "Soluciones de embalaje y etiquetado",
    "Product packaging and labeling is a key part in the logistics process. Whether or not your packaging and labeling needs are basic or complicated, we have the experience to help. We can provide support in the creation of bar codes and native language labels. We can help you increase your sales by assisting in the development of, product packaging, point-of-purchase displays, pallet displays, tray displays, or show boxes":
      "El empaque y etiquetado de productos es una parte clave en el proceso logístico. Ya sea que sus necesidades de empaque y etiquetado sean básicas o complicadas o no, tenemos la experiencia para ayudarlo. Podemos brindarle apoyo en la creación de códigos de barras y etiquetas en idiomas nativos. puede ayudarlo a aumentar sus ventas al ayudarlo en el desarrollo de empaques de productos, exhibidores de puntos de venta, exhibidores de paletas, exhibidores de bandejas o cajas de exhibición",
    "At times, manufacturer packing and labeling options can be limited. If that is the case; we make it possible for you to outsource your packaging and labeling needs to professional printing companies, who will then pass the material to the manufacturer for final packaging, or to us for final touches in our own facilities":
      "A veces, las opciones de embalaje y etiquetado del fabricante pueden ser limitadas. Si ese es el caso, hacemos posible que subcontrate sus necesidades de embalaje y etiquetado a empresas de impresión profesionales, que luego pasarán el material al fabricante para el embalaje final, o a nosotros para los toques finales en nuestras propias instalaciones",

    "Product Adjustment & Improvement": "Ajuste y mejora del producto",
    "In a case where a product does not meet your needs, we are capable of working with suppliers and manufacturers on making the needed adjustments to reach your satisfaction requirements. Whether we are selecting alternate materials, switching manufacturers, or changing technical specifications, we can consult you on your best options":
      "En caso de que un producto no satisfaga sus necesidades, somos capaces de trabajar con proveedores y fabricantes para realizar los ajustes necesarios para alcanzar sus requisitos de satisfacción. Ya sea que seleccionemos materiales alternativos, cambiemos de fabricante o cambiemos las especificaciones técnicas, podemos consultarle sobre sus mejores opciones",
    "Getting the right product, at the right price, with the right design and quality, takes experience and connections when working with Chinese manufacturers. We can help you negotiate to get the exact price you want, the exact quality you need, or the best value for your money":
      "Obtener el producto correcto, al precio correcto, con el diseño y la calidad correctos requiere experiencia y conexiones al trabajar con fabricantes chinos. Podemos ayudarlo a negociar para obtener el precio exacto que desea, la calidad exacta que necesita o la mejor valor por su dinero",

    "Leftover Stock Procurement": "Adquisición de existencias sobrantes",
    "Overtime, all suppliers get into situations where they are overstocked and have “leftover” merchandise that must be sold. This typically occurs due to over-production and customer refusals. There are huge advantages and disadvantages to procuring products that are deemed “leftover”. You can receive discounted prices and immediate shipment but, at the same time be faced with quality risks":
      "Con el tiempo, todos los proveedores se encuentran en situaciones en las que tienen un exceso de existencias y tienen mercadería sobrante que debe venderse. Esto generalmente ocurre debido a la sobreproducción y las negativas de los clientes. Hay enormes ventajas y desventajas en la adquisición de productos que se consideran sobrantes. Puede recibir precios con descuento y envío inmediato pero, al mismo tiempo, enfrentar riesgos de calidad",
    "We monitor the market for suitable and interesting leftover stock product offers and when the orders are processed we do special quality control checks, including; defect sorting, repacking, and relabeling if required. With our support, you can be confident that your leftover stock procurement meets the stated criteria from the manufacturer":
      "Supervisamos el mercado en busca de ofertas de productos sobrantes adecuadas e interesantes y, cuando se procesan los pedidos, realizamos controles de calidad especiales, que incluyen; clasificación de defectos, reempaque y reetiquetado si es necesario. Con nuestro apoyo, puede estar seguro de que su adquisición de existencias sobrantes cumple con los criterios establecidos por el fabricante",

    "LCL Procurement": "Adquisición de LCL",
    "We offer LCL (Less than container loading) procurement, when your order from one supplier is less than a full container. When your order is shipped, it is consolidated with other orders either, on manufacturers premises, or in our warehouses. With LCL, we can satisfy your needs for low volume orders, due to limited consumption or due to partial shipments for complex delivery plans":
      "Ofrecemos adquisiciones LCL (carga inferior a un contenedor), cuando su pedido de un proveedor es inferior a un contenedor completo. Cuando se envía su pedido, se consolida con otros pedidos, ya sea en las instalaciones del fabricante o en nuestros almacenes. Con LCL , podemos satisfacer sus necesidades de pedidos de bajo volumen, por consumo limitado o por envíos parciales para planes de entrega complejos",
    "Additionally, with our presence in Yiwu, China, we can offer procurement from the Yiwu market and take advantage of almost no MOQ requirements and short delivery times. Our office and warehouse in Yiwu allows us to process your orders, provide labeling, do quality control, and other offer other logistics management solutions":
      "Además, con nuestra presencia en Yiwu, China, podemos ofrecer compras en el mercado de Yiwu y aprovechar casi ningún requisito de MOQ y tiempos de entrega cortos. Nuestra oficina y almacén en Yiwu nos permite procesar sus pedidos, proporcionar etiquetado, hacer calidad control y otras ofrecen otras soluciones de gestión logística",

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
      "Uno de los factores clave de nuestro éxito y nuestra capacidad para que usted tenga éxito es nuestra gran atención a la calidad de los productos suministrados. Según nuestra experiencia, cuando surgen problemas de calidad, se dzben a tres razones principales",
    "Firstly, 50% of the time there is a total lack of understanding of the quality requirements between the supplier and client. Secondly, 35% of the time suppliers disregard requirements all together. Lastly, 10% of the time there are intentional cost and quality reductions":
      "En primer lugar, el 50 % de las veces hay una falta total de comprensión de los requisitos de calidad entre el proveedor y el cliente. En segundo lugar, el 35 % de las veces los proveedores ignoran los requisitos por completo. Por último, el 10 % de las veces hay costos intencionales y reducciones de calidad",
    "In order to avoid and eliminate the above issues we have adopted and utilize many different processes and tools to guarantee you receive the products you require":
      "Para evitar y eliminar los problemas anteriores, hemos adoptado y utilizamos muchos procesos y herramientas diferentes para garantizar que reciba los productos que necesita",

    "Quality Criteria Coordination": "Coordinación de criterios de calidad",
    "As mentioned, when quality issues occur, 50% of the time this is due to a complete and total misunderstanding of the quality requirements between the supplier and the customer. This can be avoided by identifying and documenting all the aspects of quality long before an order is made. By validating manufacturers capabilities to reach your quality requirements while documenting the requirements you have, we can eliminate and minimize any potential for miscommunication":
      "Como se mencionó, cuando ocurren problemas de calidad, el 50 % de las veces se debe a un completo y total malentendido de los requisitos de calidad entre el proveedor y el cliente. Esto se puede evitar identificando y documentando todos los aspectos de la calidad mucho antes Al validar las capacidades de los fabricantes para cumplir con sus requisitos de calidad mientras documentamos los requisitos que tiene, podemos eliminar y minimizar cualquier posible falta de comunicación",
    "We help you understand the possible quality / price levels and help you set the quality criteria and defect definitions, based on either custom-made quality criteria or on AQL (Acceptable Quality Level, as per standard MIL-STD-105E/ISO 2859-1 (1999) or Acceptable Quality Limits as per standard ANSI/ASQC Z1.4-2003)":
      "Le ayudamos a comprender los posibles niveles de calidad/precio y le ayudamos a establecer los criterios de calidad y las definiciones de defectos, basados en criterios de calidad personalizados o en AQL (Nivel de calidad aceptable, según el estándar MIL-STD-105E/ISO 2859- 1 (1999) o límites de calidad aceptables según el estándar ANSI/ASQC Z1.4-2003)",

    "Multi-Stage Quality Inspection": "Inspección de calidad de varias etapas",
    "Depending on the product, order features, manufacturers situation, and other factors, we are capable of doing single stage, several stage, or even full cycle quality control in order to secure the quality and delivery time of your procurement. We verify workmanship, function, technical features, color, size, labels, marks, and any other parameters you require - all with a view to ensure that the contract specifications for product and packing are met":
      "Según el producto, las características del pedido, la situación del fabricante y otros factores, somos capaces de realizar un control de calidad de una etapa, varias etapas o incluso un ciclo completo para garantizar la calidad y el tiempo de entrega de su adquisición. Verificamos la mano de obra, función, características técnicas, color, tamaño, etiquetas, marcas y cualquier otro parámetro que necesite, todo con el fin de garantizar que se cumplan las especificaciones del contrato para el producto y el embalaje",
    "Broken into 4 steps, below are the services that enable us to provide you with the quality goods you require":
      "Divididos en 4 pasos, a continuación se encuentran los servicios que nos permiten brindarle los productos de calidad que necesita",
    "Pre-Production Inspection (PPI)":
      "Inspección previa a la producción (PPI)",
    "Pre-Production Inspection (PPI) is done before the production process even starts. This ensures, not only that the manufacturer understands all quality requirements but, the availability of corresponding raw materials, components, and facilities. This gives us an understanding of the manufacturing schedule and enables us to be aware of any possible quality and lead time deviations":
      "La inspección previa a la producción (PPI) se realiza incluso antes de que comience el proceso de producción. Esto garantiza, no solo que el fabricante comprenda todos los requisitos de calidad, sino también la disponibilidad de las materias primas, los componentes y las instalaciones correspondientes. Esto nos da una comprensión de la calendario de fabricación y nos permite estar al tanto de cualquier posible desviación de la calidad y el tiempo de entrega",
    "Initial Production Inspection (IPI)":
      "Inspección de producción inicial (IPI)",
    "Initial Production Inspection has similar features and functions as the PPI but, extends to the exact order, the evaluation of the actual merchandise, and the actual manufacturing capacity. If necessary, certain order processing adjustments can be made":
      "La inspección de producción inicial tiene características y funciones similares a las del PPI, pero se extiende al pedido exacto, la evaluación de la mercancía real y la capacidad de fabricación real. Si es necesario, se pueden realizar ciertos ajustes en el procesamiento del pedido",
    "During Production Inspection (DPI)":
      "Durante la Inspección de Producción (DPI)",
    "During Product Inspection s implemented when at least 15% of the total merchandise has been manufactured. During this time, we can confirm that all product parameters as well packing marking details conform to your agreed upon specifications":
      "Durante la inspección del producto, se implementa cuando se ha fabricado al menos el 15 % de la mercancía total. Durante este tiempo, podemos confirmar que todos los parámetros del producto, así como los detalles del marcado del embalaje, se ajustan a las especificaciones acordadas",
    "Pre-Shipment Inspection (PSI)": "Inspección previa al envío (PSI)",
    "A Pre-Shipment Inspection is done when at least 85% of the the merchandise has been completed, packed, and is nearly ready for shipment. Our inspectors evaluate a statistically determined random sample of finished goods, based on an internationally recognized statistical random sampling techniques known as ANSI/ASQ Z1.4-2003, ISO 2859-1 or based our your AQL needs. This final inspection not only allows us to guarantee a final seal of quality but, it guarantees the accuracy of all your needed documentation":
      "Se realiza una inspección previa al envío cuando al menos el 85 % de la mercancía se ha completado, empacado y está casi lista para el envío. Nuestros inspectores evalúan una muestra aleatoria determinada estadísticamente de productos terminados, con base en un muestreo estadístico aleatorio reconocido internacionalmente. técnicas conocidas como ANSI / ASQC Z1.4-2003, ISO 2859-1 o basadas en nuestras necesidades de AQL. Esta inspección final no solo nos permite garantizar un sello final de calidad sino que garantiza la precisión de toda su documentación necesaria",

    "Production Monitoring": "Monitoreo de producción",
    "For highly sensitive orders we offer the service of production monitoring for non-stop on-sight manufacturing control. This level of service can be applied to the production of the product, the packing, the parts, raw material quality, as well as the machinery and the facilities involved":
      "Para pedidos de alta sensibilidad ofrecemos el servicio de seguimiento de producción para el control de la fabricación a la vista y sin parar. Este nivel de servicio se puede aplicar a la producción del producto, el embalaje, las piezas, la calidad de la materia prima, así como la maquinaria e instalaciones involucradas",

    "Defect Sorting": "Clasificación de defectos",
    "The target of defect sorting is to sort out and remove products whose quality has not reached the level of acceptability for your procurement. This is used either for orders who have failed repeated inspections or for left-over stock procurements where the quality range significantly exceeds the set of AQL requirements":
      "El objetivo de la clasificación de defectos es clasificar y eliminar productos cuya calidad no ha alcanzado el nivel de aceptabilidad para su adquisición. Esto se utiliza para pedidos que no han superado las inspecciones repetidas o para adquisiciones de existencias sobrantes donde el rango de calidad supera significativamente el conjunto de requisitos AQL",

    "Laboratory Testing & Certification":
      "Pruebas y certificación de laboratorio",
    "In certain situations your procurement and products may require formal certification, from a state authority or an independently recognized tester, to fulfill legal guidelines. If needed, we can help you work with a wide range of testing and certification organizations in China, including local and international testing centers, laboratories, and science institutions, e.g. TÜV, SGS, Bureau Veritas, CIQ etc., to provide all the necessary documentation and quality guarantees":
      "En determinadas situaciones, su adquisición y productos pueden requerir una certificación formal, de una autoridad estatal o de un probador reconocido de forma independiente, para cumplir con las pautas legales. Si es necesario, podemos ayudarlo a trabajar con una amplia gama de organizaciones de prueba y certificación en China, incluidas las locales y centros de pruebas, laboratorios e instituciones científicas internacionales, por ejemplo, TÜV, SGS, Bureau Veritas, CIQ, etc., para proporcionar toda la documentación necesaria y garantías de calidad",

    "Container Loading Supervision": "Supervisión de carga de contenedores",
    "Container loading supervision is done both before and during loading to ensure loading consistency, safety of the goods during the transportation, and documentation accuracy":
      "La supervisión de la carga de contenedores se realiza tanto antes como durante la carga para garantizar la consistencia de la carga, la seguridad de las mercancías durante el transporte y la precisión de la documentación",
    "Before loading we check shipping marks, packing quality, container conditions, and in some cases, gross weight. Once loading has commenced we concentrate on the quantity of cartons placed, the handling of the goods, and placement inside the container, all to avoid any mistakes or damage of the product and to make sure your products can be securely delivered":
      "Antes de cargar, verificamos las marcas de envío, la calidad del embalaje, las condiciones del contenedor y, en algunos casos, el peso bruto. Una vez que ha comenzado la carga, nos concentramos en la cantidad de cajas colocadas, el manejo de los productos y la ubicación dentro del contenedor, todo para evitar cualquier error o daño del producto y para asegurarse de que sus productos se puedan entregar de forma segura",

    Logistics: "Logística",
    "International Transportation": "Transporte Internacional",
    "Complex Delivery Planning": "Planificación de Entrega Compleja",
    "China Warehouse Management": "Gestión de almacenes en China",
    "Door-to-Door Delivery": "Entrega puerta a puerta",

    Logistics: "Logística",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain":
      "Siendo un elemento tan importante del costo general y la base de la estabilidad de la cadena de suministro, la optimización logística se trata con mucho cuidado dentro de nuestra empresa. Podemos ofrecer muchas soluciones y soluciones únicas para su situación particular que resultarán en reducciones de costos y una mayor eficiencia. cadena de suministro",

    "International Transportation": "Transporte internacional",
    "When planning the transportation of an order we think about cost, time, production schedule, manufacturer location, port of destination, contract terms, and special transportation requirements, in order to match your goods with the ideal method of delivery":
      "Cuando planificamos el transporte de un pedido, pensamos en el costo, el tiempo, el cronograma de producción, la ubicación del fabricante, el puerto de destino, los términos del contrato y los requisitos especiales de transporte, para que sus productos coincidan con el método de entrega ideal",
    "We cooperate with Chinese local and international shipping agents and shipping lines in order to have a wide array of options available to you when you need them. By sea, air, or land, we can coordinate any combination depending on the product, order urgency, and your location":
      "Cooperamos con los agentes navieros y las líneas navieras locales e internacionales de China para tener una amplia gama de opciones disponibles para usted cuando las necesite. Por mar, aire o tierra, podemos coordinar cualquier combinación según el producto, la urgencia del pedido, y su ubicación",

    "Complex Delivery Planning": "Planificación de entrega compleja",
    "To reduce your cost of delivery and to optimize your inventory holdings, we can work with you on a delivery plan that best fits your needs. Whether your deliveries are dependent on sale forecasts or you use the LCL way of procurement with multiple suppliers, we can assist you":
      "Para reducir su costo de entrega y optimizar sus existencias de inventario, podemos trabajar con usted en un plan de entrega que mejor se adapte a sus necesidades. Ya sea que sus entregas dependan de los pronósticos de ventas o si utiliza la forma de adquisición de LCL con múltiples proveedores, nosotros puede ayudarlo",

    "China Warehouse Management": "Gestión de almacenes de China",
    "As an extension of our complex delivery service, we offer warehouse and distribution center management solutions. This option not only allows for the adjustment of SKU quantities in a container but to load a container with an almost unlimited variety of products for further delivery to the exact distribution center of your designation":
      "Como una extensión de nuestro complejo servicio de entrega, ofrecemos soluciones de gestión de almacenes y centros de distribución. Esta opción no solo permite el ajuste de las cantidades de SKU en un contenedor, sino también cargar un contenedor con una variedad casi ilimitada de productos para su posterior entrega al centro de distribución exacto de su designación",
    "This solution is extremely valuable if your sales territories are large and you have a multi-level distribution system. With our help, we can reduce your logistic costs by avoiding a least one level of your distribution chain":
      "Esta solución es extremadamente valiosa si sus territorios de ventas son grandes y tiene un sistema de distribución de varios niveles. Con nuestra ayuda podemos reducir sus costes logísticos evitando al menos un nivel de su cadena de distribución",

    "Door-to-Door Delivery": "Entrega puerta a puerta",
    "In some markets we can offer the service of Door-to-Door delivery, where we take responsibility for all transportation and customs formalities until the goods are delivered to your distribution center":
      "En algunos mercados podemos ofrecer el servicio de entrega Puerta a Puerta, donde nos hacemos cargo de todos los trámites aduaneros y de transporte hasta que la mercancía sea entregada a su centro de distribución",
    "In this case, you have no need to be directly involved with import contracts, procedures, and other customs formalities. You can concentrate on your main priorities without losing the advantages of importing products from China":
      "En este caso, no es necesario involucrarse directamente con los contratos de importación, los procedimientos y otras formalidades aduaneras. Puede concentrarse en sus principales prioridades sin perder las ventajas de importar productos de China",

    Contacts: "Contactos",
    "Thank you for your interest in Niche Supply Control Co., Ltd":
      "Gracias por su interés en Niche Supply Control Co., Ltd",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below":
      "Si tiene más preguntas o desea hablar con nosotros sobre nuestros servicios, no dude en utilizar cualquiera de los métodos de contacto a continuación",
    "We look forward to hearing from you": "Esperamos saber de usted",

    "Mail:": "Correo:",
    "Niche SC Ltd.": "Niche SC Ltd.",
    "Room 707, Time Fortune Building 8 (North Tower),":
      "Habitación 707, Edificio Time Fortune 8 (Torre Norte),",
    "Chaoyang District, Beijing, P.R. China.":
      "Chaoyang District, Beijing, P.R. China.",
    "Postal Code: 100028": "Código Postal: 100028",

    北京朝阳区三元西桥: "北京朝阳区三元西桥",
    曙光西里甲6号: "曙光西里甲6号",
    时间国际8号楼北楼707室: "时间国际8号楼北楼707室",
    "邮编：100028": "邮编：100028",

    "Phone & Fax:": "Teléfono y fax:",
    "Phone: +86 (10) 6501-0188": "Teléfono: +86 (10) 6501-0188",
    "Fax: +86 (10) 6501-7188": "Fax: +86 (10) 6501-7188",

    "Email:": "Correo electrónico:",
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
    "ABOUT US": "离开我们",
    SOLUTIONS: "解决方案",
    "Audit & Consulting": "审计与咨询",
    "Process Management": "流程管理",
    Sourcing: "采购",
    "Quality Assurance": "质量保证",
    Logistics: "物流",
    CONTACTS: "句法",

    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products":
      "Niche Supply Control Co. Ltd 为中国零售连锁客户提供专业、经济高效的采购和供应管理解决方案。 我们经营大多数大型超市中几乎所有的非食品消费品以及一些精选食品",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery…":
      "我们的服务和支持水平是前所未有的，因为我们能够在您的采购和供应链的各个阶段提供指导。 我们从规划和分析开始，继续进行订单处理和控制，并通过物流和最终交付领域的专家咨询来完成您的采购…",
    "[read more]": "[阅读更多]",

    "About Us": "关于我们",
    Introduction: "介绍",
    "Niche Supply Control Co. Ltd provides professional cost effective solutions for procurement and supply management in China for retail chain clients. We deal with almost all non-food consumer goods represented in most large supermarkets as well as a few selected food products":
      "Niche Supply Control Co. Ltd 为中国零售连锁客户提供专业、经济高效的采购和供应管理解决方案。 我们经营大多数大型超市中几乎所有的非食品消费品以及一些精选食品",
    "Our level of service and support is unprecedented, as we are present and capable of providing guidance during all stages of your procurement and supply chain. We begin with planning and analysis, continue with order processing and control, and complete your procurement with expert consulting in the area of logistics and final delivery":
      "我们的服务和支持水平是前所未有的，因为我们在场并且能够在您的采购和供应链的所有阶段提供指导。 我们从规划和分析开始，继续进行订单处理和控制，并通过物流和最终交付领域的专家咨询来完成您的采购",
    "We build individualized, highly efficient supply chains for each of our clients that help reduce cost, improve quality, and increase profit, which allows you to concentrate on other priorities. Aside from the obvious benefits of our solutions, our target is to help your development and growth":
      "我们为每一位客户构建个性化、高效的供应链，帮助降低成本、提高质量和增加利润，让您可以专注于其他优先事项。 除了我们解决方案的明显优势外，我们的目标是帮助您的发展和成长",
    "At Niche, we pride ourselves on our work ethic and the transparency we have with our customers. No matter the decision, your best interests are always in the front of our mind":
      "在 Niche，我们以我们的职业道德和我们与客户之间的透明度为荣。 无论做出何种决定，您的最大利益始终是我们的首要考虑",
    "Our Team": "我们的队伍",
    "Our international team of professionals combines experts from procurement, products, and logistics management, to 6 Sigma. We have representatives from all over the world (Asia, Europe, North & South America) which, means we speak and think your language":
      "我们的国际专业团队结合了来自采购、产品和物流管理的专家，以及 6 Sigma。 我们有来自世界各地（亚洲、欧洲、北美洲和南美洲）的代表，这意味着我们说和想您的语言",
    "We are very proud of our team and believe that you will appreciate the professionalism and the ease of doing business that we can provide while working with Chinese manufacturers":
      "我们为我们的团队感到非常自豪，相信您会欣赏我们在与中国制造商合作时可以提供的专业精神和轻松开展业务",
    "Our Locations": "我们的位置",
    "Our International headquarters is located in Beijing, China, where our finance department, customer service, and management team reside. Beyond Beijing, we have an operation in Yiwu and Shantou where stock procurement and goods consolidation occurs":
      "我们的国际总部位于中国北京，我们的财务部、客户服务部和管理团队都驻扎在这里。 除了北京，我们还在义乌和汕头开展业务，进行库存采购和货物整合",
    "Our own in house inspector network can be found in all the main industrial areas of China, including Guangdong, Fujian, Zhejiang, Jiangsu, Shandong, and some other provinces. This coverage allows us to guarantee the high speed, quality services we provide":
      "我们自己的内部检验员网络遍布中国所有主要工业区，包括广东、福建、浙江、江苏、山东和其他一些省份。 这种覆盖使我们能够保证我们提供的高速、优质服务",
    "Our warehouses are located in the key transport locations, trade points, and main ports which, make us able to solve complicated logistic issues":
      "我们的仓库位于主要运输地点、贸易点和主要港口，这使我们能够解决复杂的物流问题",

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
      "了解您的需求是我们的首要任务。 我们与本地和国际上许多不同的零售客户合作，我们知道每种情况都是独一无二的。 在我们推荐任何东西之前，我们会对您的情况进行深入分析。通过详细了解您的计划、目标和顾虑，我们可以为您提供量身定制的解决方案",

    "Procurement Strategy Development": "采购战略制定",
    "Depending on the quantity, quality, delivery schedule, documentation requirements, and other needs you may have, we are able to select and recommend the ideal strategy for your procurement":
      "根据数量、质量、交货时间表、文件要求以及您可能有的其他需求，我们能够为您选择并推荐理想的采购策略",
    "By carefully monitoring and utilizing the methods below, we are able to guarantee you a highly efficient and secure supply chain:-Time of Order -Supplier Analysis and Selection -Stock Procurement -Logistics Review -Price & Quality Optimization -Cost and Capital Reduction":
      "通过仔细监控和利用以下方法，我们能够保证您拥有高效且安全的供应链：-订单时间-供应商分析和选择-库存采购-物流审核-价格和质量优化-成本和资本降低",

    "Supplier Evaluation": "供应商评估",
    "Selecting the ideal supplier can be laborious and burdensome. This is why we provide you a multi-faceted evaluation of current and potential suppliers so we are certain they are able to reach and or exceed your needs":
      "选择理想的供应商可能是一项艰巨且繁重的工作。 这就是为什么我们为您提供对当前和潜在供应商的多方面评估，以便我们确信他们能够达到或超过您的需求",
    "By utilizing comparative analysis and a complex evaluation of several suppliers, we can provide you with a transparent view of the materials used, quality of goods produced, capabilities, working conditions, management structure, internal quality control systems, financial situation, and numerous other variables":
      "通过对多家供应商进行比较分析和综合评估，我们可以为您提供有关所用材料、生产的产品质量、能力、工作条件、管理结构、内部质量控制系统、财务状况和众多其他变量的透明视图",
    "Once a supplier is selected the supplier evaluation continues. Following your first order we supervise the suppliers work during the order processing and provide an evaluation report after each order has been completed":
      "一旦选择了供应商，供应商评估就会继续进行。 在您的第一个订单之后，我们会监督供应商在订单处理过程中的工作，并在每个订单完成后提供评估报告",

    "Legal Support": "法律支持",
    "Navigating the complex legal guidelines of overseas procurement can be arduous. The focus of our legal support goes beyond the secure procurement of your goods but, to obtain stable legal cooperation with your suppliers to avoid any controversy and misunderstandings":
      "驾驭复杂的海外采购法律准则可能会很困难。 我们法律支持的重点不仅仅是您的货物的安全采购，而是与您的供应商获得稳定的法律合作，以避免任何争议和误解",
    "Our legal support provides you with a piece of mind that your intellectual property including products and trademarks are safe, and that your purchasing contracts are in accordance with Chinese legislation. If necessary, we are capable of taking legal action on our clients behalf and or mediating any disputes with suppliers":
      "我们的法律支持让您放心，您的知识产权（包括产品和商标）是安全的，并且您的采购合同符合中国法律。 如有必要，我们能够代表客户采取法律行动和/或调解与供应商的任何纠纷",

    "Market Research": "市场调查",
    "When an evaluation of a set of suppliers is not sufficient and it is required to look beyond the doors of the manufacturer, we are capable of providing in-depth market research":
      "当对一组供应商的评估不充分并且需要超越制造商的范围时，我们有能力提供深入的市场研究",
    "This in-depth product and manufacturer market research provides you with a view of the key technical standard of products, areas of production, local features, possible difficulties, major manufacturers, ranges of prices, price factors, and many other variables that will aid in your decision making":
      "这种深入的产品和制造商市场研究为您提供了产品的关键技术标准、生产地区、当地特色、可能的困难、主要制造商、价格范围、价格因素以及许多其他变量的视图，这些变量将有助于 你的决策",
    "With the right data and information we can work together to find the ideal supplier and solution for your business needs":
      "有了正确的数据和信息，我们可以共同寻找满足您业务需求的理想供应商和解决方案",

    "Trade Financing": "贸易融资",
    "On a case by case basis, we will work with you on financial needs that may arise during your procurement. In order to reduce your financial load we offer different trade financing solutions":
      "我们将根据具体情况与您合作解决采购过程中可能出现的财务需求。 为了减轻您的财务负担，我们提供不同的贸易融资解决方案",
    "Options are available for several markets and each situation is settled based on your circumstances, the order details, and the manufacturers position":
      "有多个市场可供选择，每种情况都根据您的具体情况、订单详细信息和制造商的立场来解决",

    "Process Management": "流程管理",
    "Workflow Design": "工作流设计",
    "Procurement Planning & Scheduling": "采购计划与调度",
    "Negotiation Support": "谈判支持",
    "Supplier Relationship Management": "供应商关系管理",
    "Order Progress Supervision": "订单进度监督",
    "Documentation Control": "文件控制",

    "Process Management": "流程管理",
    "Effective interactions with suppliers is one of the key factors for efficient procurement, and the total result often depends on the organization of work, a mutual understanding, and solid partner relationships":
      "与供应商的有效互动是高效采购的关键因素之一，而总体结果往往取决于工作安排、相互理解和牢固的合作伙伴关系",

    "Workflow Design": "工作流程设计",
    "By overlaying your company structure on the experience we have with different retailers and suppliers, we will coordinate and if necessary re-design work flow and processes in order to maximize your procurement from China":
      "通过将您的公司结构与我们与不同零售商和供应商的经验相结合，我们将协调并在必要时重新设计工作流程和流程，以最大限度地提高您从中国的采购",
    "By focusing on scheduling, order processing, check-points for confirmation and control, and many other key points, we can promise the best result and efficient control of the procurement of the products you need":
      "通过关注调度、订单处理、确认和控制检查点以及许多其他关键点，我们可以保证您所需产品采购的最佳结果和有效控制",

    "Procurement Planning & Scheduling": "采购计划与安排",
    "We are very sensitive and aware of the complicated nature of a retail chains delivery schedule. We will work to understand your specific requirements and pay special attention to your delivery times, your product variety and volume, your seasonal needs, your manufacturers schedule, and many other factors":
      "我们非常敏感并意识到零售连锁店交货时间表的复杂性。 我们将努力了解您的具体要求，并特别关注您的交货时间、您的产品品种和数量、您的季节性需求、制造商的时间表以及许多其他因",
    "We will coordinate long term schedules and design short term plans together with you to assure the goods you need are delivered at the moment they are needed by your customers":
      "我们将与您一起协调长期时间表并设计短期计划，以确保您所需的货物在您的客户需要时交付",

    "Negotiation Support": "谈判支持",
    "There are times when it is quite difficult to reach a compromise between a buyers wishes and a sellers capability. Fortunately, with our experience, we have come across and been able to successfully resolve many unique situations":
      "有时，在买方的意愿和卖方的能力之间达成妥协是相当困难的。 幸运的是，凭借我们的经验，我们遇到并能够成功解决许多独特的情况",
    "With our support, when required, we can negotiate with manufacturers on your behalf with the aim of finding a mutually beneficial solution which will build a base for further cooperation in the future":
      "在我们的支持下，如有需要，我们可以代表您与制造商进行谈判，以找到互惠互利的解决方案，为未来的进一步合作奠定基础",

    "Suppliers Relationship Management": "供应商关系管理",
    "To support and continue the excellent relationships we have between our clients and manufacturers, we do a lot of work to understand each party needs, then help them meet their requirements":
      "为了支持并延续我们客户和制造商之间的良好关系，我们做了大量工作来了解各方的需求，然后帮助他们满足他们的要求",
    "By working with us, we not only provide your needs and desires to the manufacturer but, we provide you with an understanding of the needs of the manufacturer. This mutual understanding and open relationship creates the foundation for successful long-term cooperation":
      "通过与我们合作，我们不仅向制造商提供您的需求和愿望，而且让您了解制造商的需求 这种相互理解和开放的关系为成功的长期合作奠定了基础",

    "Order Progress Supervising": "订单进度监管",
    "Together with quality assurance, lead time control is one of the most important factors in efficient procurement. Depending on the manufacturers you work with and your order details, we put in place checkpoints all along the main milestones of the order process":
      "与质量保证一起，交货时间控制是高效采购中最重要的因素之一。 根据与您合作的制造商和您的订单详细信息，我们在订单流程的所有主要里程碑中设置了检查点",
    "This control along the manufacturing stages not only allows to us to promise you on-time delivery, but enables us to make needed adjustments far in advance, if necessary":
      "这种对制造阶段的控制不仅使我们能够向您保证按时交货，而且使我们能够在必要时提前做出必要的调整",

    "Documentation Control": "文件控制",
    "Once an order is placed, we begin diligently preparing all of the required documents you will need to make import procedures smooth and fast. Accuracy and precision is key, therefore, we carefully study the required documents needed by product and prepare this well in advance":
      "下订单后，我们会开始认真准备您所需的所有文件，以使进口程序顺利、快速。 准确性和精密度是关键，因此，我们仔细研究产品所需的文件并提前准备好",
    "Additionally, as orders pass our pre-shipment inspection, the data from the inspection is used for a final documentation check. With years of experience moving products out of China, we can help you avoid making costly mistakes from overlooking a minor piece of paperwork":
      "此外，当订单通过我们的装运前检查时，检查数据将用于最终文件检查。 凭借多年将产品运出中国的经验，我们可以帮助您避免因忽视一小部分文书工作而犯下代价高昂的错误",

    Sourcing: "采购",
    "ODM & OEM Manufacturing Management": "ODM&OEM制造管理",
    "Packaging & Labeling Solutions": "包装和标签解决方案",
    "Product Adjustment & Improvement": "产品调整&改进",
    "Leftover Stock Procurement": "剩余库存采购",
    "LCL Procurement": "剩余库存采购",

    Sourcing: "采购",
    "With a vast database of trustworthy suppliers and years of product experience, we can offer you a wide range of custom services and solutions that will you provide you with the flexibility and capability to receive the products you need, in the packaging you desire, and all the while, at the price you demand":
      "凭借庞大的值得信赖的供应商数据库和多年的产品经验，我们可以为您提供范围广泛的定制服务和解决方案，使您能够灵活地和有能力地接收您需要的产品，采用您想要的包装，以及所有 同时，以您要求的价格",

    "ODM & OEM Manufacturing Management": "ODM 和 OEM 制造管理",
    "The development and expansion of a private brand for any retailer can be difficult. To help make this easier, we provide both ODM & OEM order management solutions. Whether you are looking to develop a brand new product idea or take advantage of the ready-made offers we have in place, we have the solution for you":
      "对于任何零售商来说，自有品牌的发展和扩张都是困难的。 为了让这一切变得更容易，我们提供 ODM 和 OEM 订单管理解决方案。 无论您是想开发全新的产品创意还是利用我们现有的现成产品，我们都能为您提供解决方案",
    "The key points of any ODM & OEM project are a suppliers competence, responsiveness, and the controls they have in place during the initial order stages. With our experience in private label order management and our evaluation of special suppliers we can help you with any ODM & OEM projects you may have in mind":
      "任何 ODM 和 OEM 项目的关键点都是供应商的能力、响应能力以及他们在初始订单阶段实施的控制。 凭借我们在自有品牌订单管理方面的经验以及对特殊供应商的评估，我们可以帮助您完成您可能想到的任何 ODM 和 OEM 项目",

    "Packaging & Labeling Solutions": "包装和标签解决方案",
    "Product packaging and labeling is a key part in the logistics process. Whether or not your packaging and labeling needs are basic or complicated, we have the experience to help. We can provide support in the creation of bar codes and native language labels. We can help you increase your sales by assisting in the development of, product packaging, point-of-purchase displays, pallet displays, tray displays, or show boxes":
      "产品包装和标签是物流过程中的关键部分。 无论您的包装和标签需求是基本还是复杂，我们都有丰富的经验可以提供帮助。 我们可以为条形码和母语标签的创建提供支持。 我们可以通过协助开发产品包装、购买点展示、托盘展示、托盘展示或展示盒来帮助您增加销售额",
    "At times, manufacturer packing and labeling options can be limited. If that is the case; we make it possible for you to outsource your packaging and labeling needs to professional printing companies, who will then pass the material to the manufacturer for final packaging, or to us for final touches in our own facilities":
      "有时，制造商的包装和标签选项可能会受到限制。 如果是这样的话； 我们使您可以将包装和标签需求外包给专业印刷公司，然后由专业印刷公司将材料传递给制造商进行最终包装，或交给我们在我们自己的设施中进行最后润色",

    "Product Adjustment & Improvement": "产品调整与改进",
    "In a case where a product does not meet your needs, we are capable of working with suppliers and manufacturers on making the needed adjustments to reach your satisfaction requirements. Whether we are selecting alternate materials, switching manufacturers, or changing technical specifications, we can consult you on your best options":
      "如果产品不能满足您的需求，我们能够与供应商和制造商合作进行必要的调整，以满足您的满意要求。 无论我们是选择替代材料、更换制造商还是更改技术规格，我们都可以向您咨询最佳选择",
    "Getting the right product, at the right price, with the right design and quality, takes experience and connections when working with Chinese manufacturers. We can help you negotiate to get the exact price you want, the exact quality you need, or the best value for your money":
      "与中国制造商合作时，以合适的价格、合适的设计和质量获得合适的产品需要经验和人脉。 我们可以帮助您协商以获得您想要的确切价格、您需要的确切质量或物有所值",

    "Leftover Stock Procurement": "剩余库存采购",
    "Overtime, all suppliers get into situations where they are overstocked and have “leftover” merchandise that must be sold. This typically occurs due to over-production and customer refusals. There are huge advantages and disadvantages to procuring products that are deemed “leftover”. You can receive discounted prices and immediate shipment but, at the same time be faced with quality risks":
      "随着时间的推移，所有供应商都会陷入库存过剩的境地，并且有“剩余”商品必须出售。 这通常是由于生产过剩和客户拒绝而发生的。 采购被视为“剩余”的产品有巨大的优点和缺点。 您可以获得折扣价格和立即发货，但同时面临质量风险",
    "We monitor the market for suitable and interesting leftover stock product offers and when the orders are processed we do special quality control checks, including; defect sorting, repacking, and relabeling if required. With our support, you can be confident that your leftover stock procurement meets the stated criteria from the manufacturer":
      "我们监控市场，寻找合适且有趣的剩余库存产品报价，在处理订单时，我们会进行特殊的质量控制检查，包括： 如果需要的话，对缺陷进行分类、重新包装和重新贴标签。 在我们的支持下，您可以确信您的剩余库存采购符合制造商规定的标准",

    "LCL Procurement": "拼箱采购",
    "We offer LCL (Less than container loading) procurement, when your order from one supplier is less than a full container. When your order is shipped, it is consolidated with other orders either, on manufacturers premises, or in our warehouses. With LCL, we can satisfy your needs for low volume orders, due to limited consumption or due to partial shipments for complex delivery plans":
      "当您从一个供应商处收到的订单少于一整箱时，我们提供 LCL（小于集装箱装载）采购。 当您的订单发货时，它会在制造商场所或我们的仓库中与其他订单合并。 通过拼箱，我们可以满足您因消耗有限或因复杂的交付计划而分批装运的小批量订单的需求",
    "Additionally, with our presence in Yiwu, China, we can offer procurement from the Yiwu market and take advantage of almost no MOQ requirements and short delivery times. Our office and warehouse in Yiwu allows us to process your orders, provide labeling, do quality control, and other offer other logistics management solutions":
      "此外，凭借我们在中国义乌的业务，我们可以从义乌市场提供采购，并利用几乎没有起订量要求和交货时间短的优势。 我们在义乌的办事处和仓库使我们能够处理您的订单、提供标签、进行质量控制以及其他物流管理解决方案",

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

    "Quality Criteria Coordination": "质量标准协调",
    "As mentioned, when quality issues occur, 50% of the time this is due to a complete and total misunderstanding of the quality requirements between the supplier and the customer. This can be avoided by identifying and documenting all the aspects of quality long before an order is made. By validating manufacturers capabilities to reach your quality requirements while documenting the requirements you have, we can eliminate and minimize any potential for miscommunication":
      "如前所述，当出现质量问题时，50% 的情况是由于供应商和客户之间对质量要求的完全误解造成的。 通过在下订单之前很久识别和记录质量的所有方面可以避免这种情况。 通过验证制造商是否有能力达到您的质量要求，同时记录您的要求，我们可以消除并最大程度地减少任何潜在的误传",
    "We help you understand the possible quality / price levels and help you set the quality criteria and defect definitions, based on either custom-made quality criteria or on AQL (Acceptable Quality Level, as per standard MIL-STD-105E/ISO 2859-1 (1999) or Acceptable Quality Limits as per standard ANSI/ASQC Z1.4-2003)":
      "我们帮助您了解可能的质量/价格水平，并根据定制的质量标准或 AQL（可接受的质量水平，根据标准 MIL-STD-105E/ISO 2859-1）帮助您设置质量标准和缺陷定义 (1999) 或根据标准 ANSI/ASQC Z1.4-2003 的可接受质量限值",

    "Multi-Stage Quality Inspection": "多级质量检验",
    "Depending on the product, order features, manufacturers situation, and other factors, we are capable of doing single stage, several stage, or even full cycle quality control in order to secure the quality and delivery time of your procurement. We verify workmanship, function, technical features, color, size, labels, marks, and any other parameters you require - all with a view to ensure that the contract specifications for product and packing are met":
      "根据产品、订单特点、厂家情况等因素，我们可以进行单阶段、多阶段、甚至全周期的质量控制，以保证您采购的质量和交期。 我们验证工艺、功能、技术特征、颜色、尺寸、标签、标记以及您所需的任何其他参数 - 所有这些都是为了确保符合产品和包装的合同规格",
    "Broken into 4 steps, below are the services that enable us to provide you with the quality goods you require":
      "以下服务分为 4 个步骤，使我们能够为您提供所需的优质商品",

    "Pre-Production Inspection (PPI)": "生产前检验 (PPI)",
    "Pre-Production Inspection (PPI) is done before the production process even starts. This ensures, not only that the manufacturer understands all quality requirements but, the availability of corresponding raw materials, components, and facilities. This gives us an understanding of the manufacturing schedule and enables us to be aware of any possible quality and lead time deviations":
      "生产前检验 (PPI) 在生产过程开始之前进行。 这不仅确保制造商了解所有质量要求，而且确保相应原材料、组件和设施的可用性。 这使我们能够了解制造计划，并使我们能够意识到任何可能的质量和交货时间偏差",

    "Initial Production Inspection (IPI)": "初始生产检验 (IPI)",
    "Initial Production Inspection has similar features and functions as the PPI but, extends to the exact order, the evaluation of the actual merchandise, and the actual manufacturing capacity. If necessary, certain order processing adjustments can be made":
      "初始生产检验具有与 PPI 类似的特征和功能，但扩展到确切的订单、实际商品的评估和实际制造能力。 如有必要，可以对订单处理进行某些调整",

    "During Production Inspection (DPI)": "生产期间检验 (DPI)",
    "During Product Inspection s implemented when at least 15% of the total merchandise has been manufactured. During this time, we can confirm that all product parameters as well packing marking details conform to your agreed upon specifications":
      "在产品检验期间，当总商品的至少 15% 已制造完成时实施。 在此期间，我们可以确认所有产品参数以及包装标记细节符合您商定的规格",

    "Pre-Shipment Inspection (PSI)": "装运前检验 (PSI)",
    "A Pre-Shipment Inspection is done when at least 85% of the the merchandise has been completed, packed, and is nearly ready for shipment. Our inspectors evaluate a statistically determined random sample of finished goods, based on an internationally recognized statistical random sampling techniques known as ANSI/ASQ Z1.4-2003, ISO 2859-1 or based our your AQL needs. This final inspection not only allows us to guarantee a final seal of quality but, it guarantees the accuracy of all your needed documentation":
      "当至少 85% 的商品已完成、包装并接近准备装运时，就会进行装运前检验。 我们的检验员根据国际公认的统计随机抽样技术（称为 ANSI / ASQC Z1.4-2003、ISO 2859-1）或根据我们您的 AQL 需求，评估统计确定的成品随机样本。 最终检查不仅使我们能够保证最终的质量密封，而且还保证了您所需的所有文件的准确性",

    "Production Monitoring": "生产监控",
    "For highly sensitive orders we offer the service of production monitoring for non-stop on-sight manufacturing control. This level of service can be applied to the production of the product, the packing, the parts, raw material quality, as well as the machinery and the facilities involved":
      "对于高度敏感的订单，我们提供生产监控服务，以实现不间断的现场制造控制。 这种服务水平可以应用于产品的生产、包装、零部件、原材料质量以及所涉及的机械和设施",

    "Defect Sorting": "缺陷分选",
    "The target of defect sorting is to sort out and remove products whose quality has not reached the level of acceptability for your procurement. This is used either for orders who have failed repeated inspections or for left-over stock procurements where the quality range significantly exceeds the set of AQL requirements":
      "缺陷筛选的目标是筛选并剔除质量未达到您采购可接受水平的产品。 这适用于未通过重复检验的订单或质量范围显着超出 AQL 要求的剩余库存采购",

    "Laboratory Testing & Certification": "实验室测试与认证",
    "In certain situations your procurement and products may require formal certification, from a state authority or an independently recognized tester, to fulfill legal guidelines. If needed, we can help you work with a wide range of testing and certification organizations in China, including local and international testing centers, laboratories, and science institutions, e.g. TÜV, SGS, Bureau Veritas, CIQ etc., to provide all the necessary documentation and quality guarantees":
      "在某些情况下，您的采购和产品可能需要来自国家当局或独立认可的测试人员的正式认证，以符合法律准则。 如果需要，我们可以帮助您与中国的各种测试和认证机构合作，包括本地和国际测试中心、实验室和科学机构，例如： TÜV、SGS、Bureau Veritas、CIQ 等，提供所有必要的文件和质量保证",

    "Container Loading Supervision": "集装箱监装",
    "Container loading supervision is done both before and during loading to ensure loading consistency, safety of the goods during the transportation, and documentation accuracy":
      "在装货前和装货过程中进行集装箱监装，确保装货一致性、运输过程中货物的安全性和单证准确性",
    "Before loading we check shipping marks, packing quality, container conditions, and in some cases, gross weight. Once loading has commenced we concentrate on the quantity of cartons placed, the handling of the goods, and placement inside the container, all to avoid any mistakes or damage of the product and to make sure your products can be securely delivered":
      "装货前，我们会检查唛头、包装质量、集装箱状况，在某些情况下还会检查毛重。 装货开始后，我们将重点关注纸箱放置的数量、货物的处理以及集装箱内的放置，所有这些都是为了避免产品出现任何错误或损坏，并确保您的产品能够安全交付",

    Logistics: "物流",
    "International Transportation": "国际运输",
    "Complex Delivery Planning": "复杂的交付计划",
    "China Warehouse Management": "中国仓库管理",
    "Door-to-Door Delivery": "送货上门",

    Logistics: "物流",
    "Being such an important element of overall cost and the foundation of supply chain stability, logistics optimization is treated very carefully inside our company. We can offer many solutions and unique fixes for your particular situation which, will result in cost reductions and a more efficient supply chain":
      "作为整体成本的重要组成部分和供应链稳定性的基础，物流优化在我们公司内部得到了非常谨慎的对待。 我们可以为您的特定情况提供许多解决方案和独特的解决方案，这将导致成本降低和更高效的供应链",

    "International Transportation": "国际运输",
    "When planning the transportation of an order we think about cost, time, production schedule, manufacturer location, port of destination, contract terms, and special transportation requirements, in order to match your goods with the ideal method of delivery":
      "在规划订单运输时，我们会考虑成本、时间、生产计划、制造商位置、目的港、合同条款和特殊运输要求，以便为您的货物提供理想的交付方式",
    "We cooperate with Chinese local and international shipping agents and shipping lines in order to have a wide array of options available to you when you need them. By sea, air, or land, we can coordinate any combination depending on the product, order urgency, and your location":
      "我们与中国本地和国际货运代理和船公司合作，以便在您需要时为您提供广泛的选择。 通过海运、空运或陆运，我们可以根据产品、订单紧急程度和您所在的位置协调任何组合",

    "Complex Delivery Planning": "复杂的交付计划",
    "To reduce your cost of delivery and to optimize your inventory holdings, we can work with you on a delivery plan that best fits your needs. Whether your deliveries are dependent on sale forecasts or you use the LCL way of procurement with multiple suppliers, we can assist you":
      "为了降低您的交货成本并优化您的库存，我们可以与您合作制定最适合您需求的交货计划。 无论您的交货取决于销售预测，还是您使用与多个供应商的拼箱采购方式，我们都可以为您提供帮助",

    "China Warehouse Management": "中国仓库管理",
    "As an extension of our complex delivery service, we offer warehouse and distribution center management solutions. This option not only allows for the adjustment of SKU quantities in a container but to load a container with an almost unlimited variety of products for further delivery to the exact distribution center of your designation":
      "作为我们复杂的交付服务的延伸，我们提供仓库和配送中心管理解决方案。 此选项不仅允许调整集装箱中的 SKU 数量，还可以将几乎无限种类的产品装载到集装箱中，以便进一步运送到您指定的确切配送中心",
    "This solution is extremely valuable if your sales territories are large and you have a multi-level distribution system. With our help, we can reduce your logistic costs by avoiding a least one level of your distribution chain":
      "如果您的销售区域很大并且拥有多级分销系统，那么该解决方案就非常有价值。 在我们的帮助下，我们可以通过避免至少一级的分销链来降低您的物流成本",

    "Door-to-Door Delivery": "送货上门",
    "In some markets we can offer the service of Door-to-Door delivery, where we take responsibility for all transportation and customs formalities until the goods are delivered to your distribution center":
      "在某些市场，我们可以提供门到门送货服务，我们负责所有运输和海关手续，直到货物运送到您的配送中心",
    "In this case, you have no need to be directly involved with import contracts, procedures, and other customs formalities. You can concentrate on your main priorities without losing the advantages of importing products from China":
      "在某些市场，我们可以提供门到门送货服务，我们负责所有运输和海关手续，直到货物运送到您的配送中心",

    Contacts: "联系人",
    "Thank you for your interest in Niche Supply Control Co., Ltd":
      "感谢您对利基供应控制有限公司的关注",
    "If you have further questions or would like to speak to us about our services, please feel free to use any of the methods of contact below":
      "如果您还有其他问题或想就我们的服务与我们交谈，请随时使用以下任何联系方式",
    "We look forward to hearing from you": "我们期待您的回音",

    "Mail:": "邮件:",
    "Niche SC Ltd.": "利基SC有限公司",
    "Room 707, Time Fortune Building 8 (North Tower),":
      "时代财富8号楼（北塔）707室,",
    "Chaoyang District, Beijing, P.R. China.":
      "Chaoyang District, Beijing, P.R. China.",
    "Postal Code: 100028": "邮政编码：100028",

    北京朝阳区三元西桥: "北京朝阳区三元西桥",
    曙光西里甲6号: "曙光西里甲6号",
    时间国际8号楼北楼707室: "时间国际8号楼北楼707室",
    "邮编：100028": "邮编：100028",

    "Phone & Fax:": "电话和传真:",
    "Phone: +86 (10) 6501-0188": "电话：+86(10)6501-0188",
    "Fax: +86 (10) 6501-7188": "传真：+86 (10) 6501-7188",

    "Email:": "邮箱:",
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


///////////////////////////////////////////////////////////////
//MAIN FOOTER
const mainContent = document.querySelector('main');
const footer = document.querySelector('footer');


const adjustFooterPosition = () => {
  const mainContentHeight = mainContent.clientHeight;
  const windowHeight = window.innerHeight;
  
  if (mainContentHeight < windowHeight) {
	 footer.style.position = 'fixed';
	 footer.style.bottom = '0';
  } else {
	 footer.style.position = 'relative';
  }
};


window.addEventListener('load', adjustFooterPosition);
window.addEventListener('resize', adjustFooterPosition);



