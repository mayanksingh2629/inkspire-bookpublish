// Update the footer year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// Handle the demo enquiry form
const enquiryForm = document.getElementById("enquiryForm");
const formMessage = document.getElementById("formMessage");

enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const authorName = document
        .getElementById("authorName")
        .value
        .trim();

    const authorEmail = document
        .getElementById("authorEmail")
        .value
        .trim();

    if (!authorName || !authorEmail) {
        formMessage.textContent =
            "Please enter your name and email address.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + authorName +
        "! The demo form is working, but your enquiry has not been sent. Please contact the publishing house directly.";

    enquiryForm.reset();
});