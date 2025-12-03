// scripts/schedule.js

document.addEventListener("DOMContentLoaded", function () {
   const form = document.getElementById("serviceForm");

   if (!form) return;

   form.addEventListener("submit", function (event) {
      // Let the browser handle built-in HTML5 validation first
      if (!form.checkValidity()) {
         // Allow default behavior so the browser shows validation messages
         return;
      }

      // Stop normal submission so we can show confirm()
      event.preventDefault();

      const confirmSubmit = confirm(
         "Are you sure you want to submit your appointment request?"
      );

      if (confirmSubmit) {
         alert(
            "Thank you for scheduling with Anderson Auto Care! We will contact you soon to confirm your appointment."
         );
         // Redirect to the thank you page
         window.location.href = "thankyou.html";
      } else {
         // If user clicks Cancel, just stay on this page and keep the form filled
         return;
      }
   });
});
