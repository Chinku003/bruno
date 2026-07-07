import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import styles from '../Mainbody.module.css';

function ContactSection() {
  return (
    <section id="contact" className={`${styles.contact} theme-panel`}>

      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <p className={styles.sectionSubtitle}>
          Send a message or reach out directly—I’ll respond as soon as possible or maybe not.
        </p>
      </div>

      <div className={styles.contactGrid}>
        <div className={`${styles.contactCard} theme-card`}>
          <h2 className={styles.contactCardTitle}>Sema  wantam  kwanza</h2>
          <form className={styles.contactForm}>
            <input className={`${styles.contactInput} theme-input`} type="text" placeholder="Your Name" />
            <input className={`${styles.contactInput} theme-input`} type="email" placeholder="Your Email" />
            <textarea className={`${styles.contactTextarea} theme-input`} placeholder="Your Message" />
            <button className={`${styles.contactButton} theme-button`} type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className={`${styles.contactCard} theme-card`}>
          <h2 className={styles.contactCardTitle}>Social</h2>
          <div className={styles.contactHint}>
            <a
              className={styles.socialIcon}
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              className={styles.socialIcon}
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              className={styles.socialIcon}
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={styles.socialIcon}
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              className={styles.socialIcon}
              href="https://tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

