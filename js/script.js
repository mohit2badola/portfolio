// ============================
// EMAIL JS INITIALIZATION
// ============================

(function () {
    emailjs.init({
        publicKey: "TbuSTxv6aHt4KHQDB"
    });
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");
const sendBtn = document.getElementById("sendBtn");
const btnText = document.getElementById("btnText");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.disabled = true;
    btnText.innerHTML = "Sending...";
    status.innerHTML = "";

    const formData = {
        from_name: form.from_name.value,
        from_email: form.from_email.value,
        message: form.message.value
    };

    // -------------------------
    // SEND TO YOU
    // -------------------------

    emailjs.send(
        "service_p4ypcac",
        "template_782zvif",
        formData
    )

        .then(function () {

            // -------------------------
            // AUTO REPLY TO VISITOR
            // -------------------------

            return emailjs.send(
                "service_p4ypcac",
                "template_d3ynvhi",
                formData
            );

        })

        .then(function () {

            status.innerHTML =
                "✅ Thank you! Your message has been sent successfully.";

            status.style.color = "#22c55e";

            form.reset();

        })

        .catch(function (error) {

            console.log("Full Error:", error);

            alert(
                "Status: " + error.status +
                "\n\nText: " + error.text +
                "\n\nMessage: " + error.message
            );

            status.innerHTML = "❌ " + (error.text || error.message);

            status.style.color = "#ef4444";

        })
        .finally(function () {

            btnText.innerHTML = "Send Message";
            sendBtn.disabled = false;

        });

});

// ============================
// NAVBAR SCROLL EFFECT
// ============================

// ============================
// NAVBAR SCROLL EFFECT
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ============================
// ACTIVE NAV LINK
// ============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ============================
// MOBILE MENU
// ============================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    console.log("Menu clicked");

    navMenu.classList.toggle("active");

});

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});