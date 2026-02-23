function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.06 15.06 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.36 2.28.56 3.5.56a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.4 22 2 13.6 2 3a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1c0 1.22.19 2.4.56 3.5a1 1 0 0 1-.24 1.01l-2.2 2.28Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.47 14.38c-.27-.13-1.58-.78-1.82-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.35-.8-.71-1.33-1.58-1.49-1.84-.16-.27-.02-.41.11-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.33-.02-.47-.07-.13-.6-1.43-.82-1.96-.22-.52-.45-.45-.6-.46h-.52c-.18 0-.47.07-.71.33-.24.27-.91.89-.91 2.16s.93 2.49 1.05 2.67c.13.18 1.82 2.77 4.42 3.88 2.6 1.11 2.6.74 3.07.69.47-.04 1.58-.64 1.8-1.26.22-.62.22-1.15.16-1.26-.07-.11-.24-.18-.51-.31Z" />
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.56 0 .27 5.29.27 11.8c0 2.08.55 4.12 1.58 5.92L0 24l6.45-1.69a11.86 11.86 0 0 0 5.64 1.44h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.22-6.12-3.38-8.47Zm-8.43 18.26h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.83 1 1.03-3.73-.24-.38a9.86 9.86 0 0 1-1.52-5.25c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.88-9.87 9.88Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 5.88 10-5.88V6a2 2 0 0 0-2-2Zm2 4.72-7.5 4.41a5.01 5.01 0 0 1-5 0L2 8.72V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.72Z" />
    </svg>
  )
}

function QuickContactLinks() {
  return (
    <>
      <a className="plaques-contact-link" href="tel:+212522491616">
        <span className="plaques-contact-icon" aria-hidden="true"><PhoneIcon /></span>
        <span>+212 522 49 16 16</span>
      </a>
      <a className="plaques-contact-link" href="tel:+212522207111">
        <span className="plaques-contact-icon" aria-hidden="true"><PhoneIcon /></span>
        <span>+212 522 20 71 11</span>
      </a>
      <a className="plaques-contact-link" href="https://wa.me/212661502763" target="_blank" rel="noreferrer">
        <span className="plaques-contact-icon" aria-hidden="true"><WhatsAppIcon /></span>
        <span>WhatsApp: +212 661 502 763</span>
      </a>
      <a className="plaques-contact-link" href="mailto:cmpfcasa@cmpfassistance.ma">
        <span className="plaques-contact-icon" aria-hidden="true"><MailIcon /></span>
        <span>cmpfcasa@cmpfassistance.ma</span>
      </a>
    </>
  )
}

export default QuickContactLinks

