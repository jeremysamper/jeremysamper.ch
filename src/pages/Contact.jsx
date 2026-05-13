import { useState } from 'react';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import FadeIn from '../components/ui/FadeIn.jsx';
import { CONTACT, SOCIALS } from '../data/contact.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Contact.module.css';

/**
 * Pour activer l'envoi réel des messages :
 * 1. Créer un compte Formspree (gratuit)
 * 2. Créer un formulaire et copier l'ID
 * 3. Remplacer 'YOUR_FORMSPREE_ID' ci-dessous par l'ID
 * 4. C'est tout — Formspree enverra les messages à l'email associé.
 */
const FORMSPREE_ID = 'mqeneayz';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

const ESTABLISHMENT_OPTIONS = [
  { value: '', label: 'Type d\'établissement…' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'brasserie', label: 'Brasserie / bistrot' },
  { value: 'hotel', label: 'Hôtellerie' },
  { value: 'creation', label: 'Création / reprise d\'établissement' },
  { value: 'autre', label: 'Autre' },
];

export default function Contact() {
  useDocumentTitle(
    "Contact — Jérémy Samper",
    "Contactez Jérémy Samper, consultant culinaire en Suisse romande et France. Premier échange gratuit et sans engagement."
  );

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Si Formspree n'est pas encore configuré, simule un succès et log les données
    if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      console.log('[DEV MODE] Form data (Formspree pas encore configuré) :', data);
      setTimeout(() => setStatus('success'), 800);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        const json = await response.json().catch(() => ({}));
        throw new Error(json.error || 'Erreur lors de l\'envoi');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Une erreur est survenue. Réessayez ou utilisez WhatsApp / téléphone.');
    }
  };

  return (
    <>
      {/* Header de page */}
      <header className={styles.pageHead}>
        <Container>
          <FadeIn className={styles.headInner}>
            <span className="eyebrow">Contact</span>
            <h1 className={styles.pageTitle}>
              Parlons de <em>votre établissement.</em>
            </h1>
            <p className={styles.pageLead}>
              Un appel de découverte de 20 à 30 minutes, gratuit et sans engagement —
              pour cadrer votre besoin et voir si l'on peut travailler ensemble. Réponse sous 48 heures ouvrées.
            </p>
          </FadeIn>
        </Container>
      </header>

      {/* Canaux directs */}
      <Container as="section" className={styles.channels}>
        <ul className={styles.channelsGrid}>
          <FadeIn as="li" className={styles.channel}>
            <span className={styles.channelLabel}>Téléphone</span>
            <ul className={styles.channelLinks}>
              {CONTACT.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`}>
                    <span className={styles.flag}>{p.country}</span>
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn as="li" delay={0.06} className={styles.channel}>
            <span className={styles.channelLabel}>WhatsApp</span>
            <a
              className={styles.channelLink}
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Réponse rapide
              <span aria-hidden="true">→</span>
            </a>
          </FadeIn>

          <FadeIn as="li" delay={0.12} className={styles.channel}>
            <span className={styles.channelLabel}>Email</span>
            <a className={styles.channelLink} href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
              <span aria-hidden="true">→</span>
            </a>
          </FadeIn>
        </ul>
      </Container>

      {/* Formulaire */}
      <Container as="section" className={styles.formSection}>
        <div className={styles.formGrid}>
          <FadeIn className={styles.formIntro}>
            <span className="eyebrow">Formulaire</span>
            <h2 className={styles.h2}>
              <em>Décrivez-moi</em><br/>votre situation.
            </h2>
            <p className={styles.formIntroText}>
              Quelques lignes suffisent pour démarrer. Plus vous serez précis sur le contexte
              (taille de l'équipe, type de cuisine, objectifs), plus l'échange ira vite à l'essentiel.
            </p>

            <address className={styles.address}>
              <span className="eyebrow">Adresse</span>
              <p>{CONTACT.address.line1}</p>
              <p>{CONTACT.address.line2}</p>
              <p className={styles.zone}>
                Zone d'intervention&nbsp;: Suisse romande &amp; France.
              </p>
            </address>

            <ul className={styles.socials} aria-label="Réseaux sociaux">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.name}
                    className={styles.socialLink}
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.successBox} role="status">
                <span className={styles.successIcon} aria-hidden="true">✓</span>
                <h3 className={styles.successTitle}>Message envoyé.</h3>
                <p className={styles.successText}>
                  Merci pour votre message. Je reviens vers vous sous 48 heures ouvrées.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className={styles.successResetBtn}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="name">Nom <span aria-hidden="true">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Prénom Nom"
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="vous@exemple.com"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+41 …"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="establishment">Type d'établissement</label>
                  <select id="establishment" name="establishment" defaultValue="">
                    {ESTABLISHMENT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Votre message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Parlez-moi de votre établissement, de vos objectifs, du contexte…"
                  />
                </div>

                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="_gotcha"
                  className={styles.honeypot}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                {status === 'error' && (
                  <div className={styles.errorBox} role="alert">
                    {errorMessage}
                  </div>
                )}

                <div className={styles.formFooter}>
                  <Button type="submit" variant="solid">
                    {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer le message'}
                  </Button>
                  <p className={styles.formNote}>
                    En envoyant ce formulaire, vous acceptez d'être recontacté à propos de votre demande.
                  </p>
                </div>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </>
  );
}
