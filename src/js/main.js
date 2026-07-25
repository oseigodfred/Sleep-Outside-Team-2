/**
 * Customer Newsletter Signup Handler
 * Created by: Izuogu David Onochie
 * Handles front-end form validation and stores email signups using browser LocalStorage.
 */

export function initNewsletter() {
  const form = document.querySelector("#newsletter-form");
  const emailInput = document.querySelector("#news-email");
  const messageEl = document.querySelector("#newsletter-message");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    // Client-side storage (Works without a backend database)
    const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers")) || [];

    // Prevent duplicate email registrations
    if (subscribers.includes(email)) {
      showMessage("You are already subscribed to our newsletter!", "error");
      return;
    }

    // Save subscriber and update LocalStorage
    subscribers.push(email);
    localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers));

    // UI Feedback
    showMessage("Thank you for subscribing!", "success");
    form.reset();
  });

  function showMessage(msg, type) {
    messageEl.textContent = msg;
    messageEl.className = `newsletter-message ${type}`;
  }
}
