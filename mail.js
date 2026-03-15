const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const publicKey = contactForm.dataset.publicKey;
  const t = (key, fallback) => {
    if (typeof window.translateKey === "function") {
      return window.translateKey(key, fallback);
    }

    return fallback;
  };

  async function sendMail(event) {
    event.preventDefault();

    if (typeof emailjs === "undefined") {
      alert(t("contact.alert.unavailable", "Email service is unavailable right now."));
      return;
    }

    const serviceId = contactForm.dataset.serviceId;
    const templateId = contactForm.dataset.templateId;
    const submitButton = contactForm.querySelector('button[type="submit"]');

    if (!publicKey || !serviceId || !templateId) {
      alert(t("contact.alert.missingSettings", "Email settings are missing. Add EmailJS keys in contact.html."));
      return;
    }

    const templateParams = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    try {
      emailjs.init(publicKey);

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = t("contact.status.sending", "Sending...");
      }

      await emailjs.send(serviceId, templateId, templateParams);
      contactForm.reset();
      alert(t("contact.alert.sent", "Message sent successfully."));
    } catch (error) {
      console.error("Email sending failed:", error);
      alert(t("contact.alert.failed", "Failed to send message. Please try again later."));
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = t("contact.button", "Send Message");
      }
    }
  }

  contactForm.addEventListener("submit", sendMail);
}
