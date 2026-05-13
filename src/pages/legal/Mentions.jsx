import LegalLayout from './LegalLayout.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

export default function Mentions() {
  useDocumentTitle(
    "Mentions légales — Jérémy Samper",
    "Mentions légales du site jeremysamper.ch : éditeur, hébergement, propriété intellectuelle."
  );
  return (
    <LegalLayout title="Mentions légales" lastUpdate="Mai 2026">
      <h2>1. Éditeur du site</h2>
      <p>
        Le présent site internet <strong>jeremysamper.ch</strong> est édité par&nbsp;:
      </p>
      <p>
        <strong>Jérémy Samper</strong> — Bureau Jérémy Samper Consulting<br/>
        Activité&nbsp;: Consultant en restauration (indépendant)<br/>
        Adresse&nbsp;: 1976 Erde, Suisse<br/>
        Téléphone (CH)&nbsp;: +41 76 626 54 00<br/>
        Téléphone (FR)&nbsp;: +33 7 67 79 26 10<br/>
        Email&nbsp;: <a href="mailto:contact@jeremysamper.ch">contact@jeremysamper.ch</a>
      </p>
      <p>
        Statut&nbsp;: indépendant non inscrit au Registre du commerce.
      </p>

      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé par&nbsp;:
      </p>
      <p>
        <strong>Vercel Inc.</strong><br/>
        340 S Lemon Ave #4133<br/>
        Walnut, CA 91789, États-Unis<br/>
        <a href="https://vercel.com" target="_blank" rel="noreferrer noopener">vercel.com</a>
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, photographies, éléments
        graphiques, logo, structure, code source) est la propriété exclusive de
        Jérémy Samper, sauf mention contraire. Toute reproduction, représentation,
        modification, publication ou adaptation, totale ou partielle, par quelque procédé
        que ce soit, est interdite sans l'autorisation écrite préalable de l'éditeur.
      </p>
      <p>
        Toute exploitation non autorisée est susceptible d'engager la responsabilité civile
        et pénale du contrevenant, notamment au titre de la contrefaçon (art. 67 ss de la loi
        fédérale sur le droit d'auteur, LDA).
      </p>

      <h2>4. Crédits photographiques</h2>
      <p>
        Toutes les photographies présentes sur le site ont été réalisées par Jérémy Samper
        ou avec son autorisation. Reproduction interdite sans accord préalable.
      </p>

      <h2>5. Logos des établissements partenaires</h2>
      <p>
        Les logos des établissements (Hôtel-Restaurant Panorama, Woodland Village,
        Le Rucher d'Évolène) sont la propriété de leurs détenteurs respectifs et sont
        affichés ici avec leur accord, à titre de référence professionnelle.
      </p>

      <h2>6. Limitation de responsabilité</h2>
      <p>
        L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations
        diffusées sur ce site. Toutefois, il ne peut garantir l'exactitude, la précision ou
        l'exhaustivité des informations mises à disposition. En conséquence, l'éditeur
        décline toute responsabilité&nbsp;:
      </p>
      <ul>
        <li>en cas d'imprécision, d'inexactitude ou d'omission portant sur des informations disponibles sur le site&nbsp;;</li>
        <li>en cas de dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations&nbsp;;</li>
        <li>en cas d'indisponibilité temporaire du site ou de l'un de ses éléments.</li>
      </ul>

      <h2>7. Liens externes</h2>
      <p>
        Le site peut contenir des liens vers des sites tiers (LinkedIn, Instagram,
        WhatsApp, sites des établissements partenaires). L'éditeur n'exerce aucun contrôle
        sur ces sites et décline toute responsabilité quant à leur contenu, leur
        disponibilité ou leurs pratiques en matière de protection des données.
      </p>

      <h2>8. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit suisse. Tout litige
        relatif à l'utilisation du site sera de la compétence exclusive des tribunaux
        du canton du Valais (Suisse), sous réserve des dispositions impératives applicables.
      </p>

      <h2>9. Contact</h2>
      <p>
        Pour toute question relative aux présentes mentions ou au site en général,
        vous pouvez nous contacter via la <a href="/contact">page contact</a> ou par
        email à <a href="mailto:contact@jeremysamper.ch">contact@jeremysamper.ch</a>.
      </p>
    </LegalLayout>
  );
}
