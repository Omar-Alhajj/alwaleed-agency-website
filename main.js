// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

});


// =========================
// Dark Mode / Light Mode
// =========================

const themeBtn = document.getElementById("themeBtn");


// تشغيل الوضع المحفوظ عند فتح الصفحة
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";

} else {

    document.body.classList.remove("light-mode");
    themeBtn.textContent = "🌙";

}


// تغيير الوضع عند الضغط على الزر
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");


    // إذا أصبح الوضع فاتحًا
    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "☀️";

        // حفظ الوضع الفاتح
        localStorage.setItem("theme", "light");

    } 
    
    // إذا أصبح الوضع داكنًا
    else {

        themeBtn.textContent = "🌙";

        // حفظ الوضع الداكن
        localStorage.setItem("theme", "dark");

    }

});


// =========================
// Scroll Effects
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================
// Reveal Elements
// =========================

const revealElements = document.querySelectorAll(
    ".section-title, .product-card, .feature, .contact-content"
);

revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function (element) {

    observer.observe(element);

});

// =========================
// Language System
// =========================

const languageBtn = document.getElementById("languageBtn");


// اللغة المحفوظة
const savedLanguage = localStorage.getItem("language") || "ar";


// تطبيق اللغة
function setLanguage(language) {

    const elements = document.querySelectorAll("[data-ar]");

    elements.forEach(function (element) {

        if (language === "en") {

            element.textContent = element.dataset.en;

        } else {

            element.textContent = element.dataset.ar;

        }

    });


    // تغيير اتجاه الصفحة
    if (language === "en") {

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        languageBtn.textContent = "AR";

    } else {

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        languageBtn.textContent = "EN";

    }


    // حفظ اللغة
    localStorage.setItem("language", language);
}


// تشغيل اللغة المحفوظة
setLanguage(savedLanguage);


// تغيير اللغة عند الضغط
languageBtn.addEventListener("click", function () {

    const currentLanguage =
        localStorage.getItem("language") || "ar";

    if (currentLanguage === "ar") {

        setLanguage("en");

    } else {

        setLanguage("ar");

    }

});