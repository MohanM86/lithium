"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mega-footer-newsletter-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="email" placeholder="din@epost.no" aria-label="E-postadresse" />
      <button type="submit" className="mega-footer-newsletter-btn">Meld på</button>
    </form>
  );
}
