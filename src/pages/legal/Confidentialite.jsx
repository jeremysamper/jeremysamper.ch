import LegalLayout from './LegalLayout.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

export default function Confidentialite() {
  useDocumentTitle("Politique de confidentialité — Jérémy Samper");
  return (
    <LegalLayout title="Politique de confidentialité" lastUpdate="Mai 2026">

      <p className="intro">
        La présente politique de confidentialité explique comment Jérémy Samper, en
        sa qualité de responsable du traitement, collecte, utilise et protège les
        données personnelles transmises via le site <strong>jeremysamper.ch</strong>.
        Elle est conforme à la <strong>Loi fédérale suisse sur la protection des données (LPD)</strong> en
        vigueur depuis le 1ᵉʳ septembre 2023, ainsi qu'au <strong>Règlement général
        sur la protection des données (RGPD, Règlement UE 2016/679)</strong> pour les
        utilisateurs basés dans l'Union européenne.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles collectées via ce site est&nbsp;:
      </p>
      <p>
        <strong>Jérémy Samper</strong> — Bureau Jérémy Samper Consulting<br/>
        1976 Erde, Suisse<br/>
        Email&nbsp;: <a href="mailto:contact@jeremysamper.ch">contact@jeremysamper.ch</a><br/>
        Téléphone (CH)&nbsp;: +41 76 626 54 00
      </p>

      <h2>2. Données collectées</h2>
      <p>
        Le site collecte uniquement les données personnelles que vous nous transmettez
        volontairement via le <strong>formulaire de contact</strong>&nbsp;:
      </p>
      <ul>
        <li><strong>Nom et prénom</strong> (obligatoire)</li>
        <li><strong>Adresse email</strong> (obligatoire)</li>
        <li><strong>Numéro de téléphone</strong> (facultatif)</li>
        <li><strong>Type d'établissement</strong> (facultatif)</li>
        <li><strong>Contenu du message</strong> (obligatoire)</li>
      </ul>
      <p>
        Aucune donnée n'est collectée à votre insu via le site (pas de cookies de
        tracking, pas d'outils d'analyse comportementale).
      </p>

      <h2>3. Finalités du traitement</h2>
      <p>
        Vos données sont traitées exclusivement pour les finalités suivantes&nbsp;:
      </p>
      <ul>
        <li>répondre à votre demande de contact ou de devis&nbsp;;</li>
        <li>établir et entretenir une relation commerciale, le cas échéant&nbsp;;</li>
        <li>respecter nos obligations légales (notamment fiscales et comptables).</li>
      </ul>
      <p>
        Vos données ne font l'objet d'aucune décision automatisée ni profilage.
      </p>

      <h2>4. Base légale du traitement</h2>
      <p>
        Le traitement de vos données repose sur les bases légales suivantes&nbsp;:
      </p>
      <ul>
        <li>votre <strong>consentement</strong> (art. 6 al. 6 LPD&nbsp;; art. 6 §1 a) RGPD), donné en remplissant et soumettant volontairement le formulaire&nbsp;;</li>
        <li>l'<strong>exécution de mesures précontractuelles</strong> prises à votre demande (art. 6 §1 b) RGPD).</li>
      </ul>

      <h2>5. Destinataires des données</h2>
      <p>
        Vos données ne sont <strong>jamais cédées, louées ou vendues</strong> à des tiers.
        Elles sont accessibles uniquement à Jérémy Samper en sa qualité d'éditeur du site.
      </p>
      <p>
        Pour des raisons techniques, certaines données peuvent transiter par des
        sous-traitants (au sens de l'art. 9 LPD et de l'art. 28 RGPD)&nbsp;:
      </p>
      <ul>
        <li><strong>Vercel Inc.</strong> (hébergeur du site, États-Unis) — encadrement par les Standard Contractual Clauses de la Commission européenne&nbsp;;</li>
        <li><strong>Formspree, Inc.</strong> (gestionnaire du formulaire de contact, États-Unis) — encadrement par les Standard Contractual Clauses.</li>
      </ul>
      <p>
        Ces sous-traitants sont engagés contractuellement à respecter la confidentialité
        et la sécurité de vos données.
      </p>

      <h2>6. Transferts hors Suisse / hors UE</h2>
      <p>
        Certaines données peuvent être transférées vers des pays situés hors Suisse ou
        hors de l'Union européenne, notamment aux États-Unis (via nos sous-traitants
        Vercel et Formspree). Ces transferts sont encadrés par des garanties appropriées
        (clauses contractuelles types adoptées par la Commission européenne et reconnues
        par le Préposé fédéral à la protection des données et à la transparence — PFPDT).
      </p>

      <h2>7. Durée de conservation</h2>
      <p>
        Vos données sont conservées&nbsp;:
      </p>
      <ul>
        <li><strong>Pour les demandes restées sans suite</strong>&nbsp;: 12 mois maximum à compter du dernier échange&nbsp;;</li>
        <li><strong>En cas de relation commerciale établie</strong>&nbsp;: pendant toute la durée de la relation puis pendant 10 ans à compter de la dernière prestation, conformément aux obligations légales suisses (art. 958f CO — conservation des livres et pièces comptables).</li>
      </ul>

      <h2>8. Sécurité des données</h2>
      <p>
        Nous mettons en œuvre des mesures techniques et organisationnelles
        appropriées pour protéger vos données contre tout accès non autorisé, perte,
        altération ou divulgation&nbsp;:
      </p>
      <ul>
        <li>chiffrement des transmissions (HTTPS/TLS)&nbsp;;</li>
        <li>hébergement sur infrastructures sécurisées (Vercel, certifiée SOC 2 Type II)&nbsp;;</li>
        <li>accès restreint aux données.</li>
      </ul>
      <p>
        Toutefois, aucun système n'est infaillible. Nous nous engageons à vous notifier
        toute violation de données significative dans les délais légaux applicables (72 h
        pour le RGPD, sans délai injustifié pour la LPD).
      </p>

      <h2>9. Vos droits</h2>
      <p>
        Conformément à la LPD et au RGPD, vous disposez des droits suivants sur vos
        données personnelles&nbsp;:
      </p>
      <ul>
        <li><strong>Droit d'accès</strong> — obtenir la confirmation que vos données sont traitées et en obtenir une copie&nbsp;;</li>
        <li><strong>Droit de rectification</strong> — corriger des données inexactes ou incomplètes&nbsp;;</li>
        <li><strong>Droit à l'effacement</strong> («&nbsp;droit à l'oubli&nbsp;») — sous réserve de nos obligations légales de conservation&nbsp;;</li>
        <li><strong>Droit à la limitation</strong> du traitement&nbsp;;</li>
        <li><strong>Droit d'opposition</strong> au traitement&nbsp;;</li>
        <li><strong>Droit à la portabilité</strong> de vos données&nbsp;;</li>
        <li><strong>Droit de retirer votre consentement</strong> à tout moment, sans que cela n'affecte la licéité des traitements antérieurs&nbsp;;</li>
        <li><strong>Droit de définir des directives</strong> sur le sort de vos données après votre décès.</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous par email à <a href="mailto:contact@jeremysamper.ch">contact@jeremysamper.ch</a>,
        en joignant si possible une copie d'une pièce d'identité (à des fins de vérification).
        Nous nous engageons à répondre dans un délai de 30 jours.
      </p>

      <h2>10. Droit de réclamation</h2>
      <p>
        Si vous estimez que le traitement de vos données ne respecte pas la
        réglementation en vigueur, vous pouvez introduire une réclamation auprès de
        l'autorité compétente&nbsp;:
      </p>
      <ul>
        <li><strong>En Suisse</strong>&nbsp;: Préposé fédéral à la protection des données et à la transparence (PFPDT) — <a href="https://www.edoeb.admin.ch" target="_blank" rel="noreferrer noopener">edoeb.admin.ch</a>&nbsp;;</li>
        <li><strong>Dans l'Union européenne</strong>&nbsp;: votre autorité nationale de contrôle (ex.&nbsp;: CNIL en France — <a href="https://www.cnil.fr" target="_blank" rel="noreferrer noopener">cnil.fr</a>).</li>
      </ul>

      <h2>11. Modification de cette politique</h2>
      <p>
        Cette politique peut être mise à jour pour refléter les évolutions de nos
        pratiques ou de la législation. La date de dernière mise à jour est indiquée
        en haut de cette page.
      </p>

      <h2>12. Contact</h2>
      <p>
        Pour toute question relative à la protection de vos données ou à cette
        politique, contactez-nous par email à <a href="mailto:contact@jeremysamper.ch">contact@jeremysamper.ch</a> ou
        via notre <a href="/contact">page contact</a>.
      </p>
    </LegalLayout>
  );
}
