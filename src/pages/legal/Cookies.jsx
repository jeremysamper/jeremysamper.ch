import LegalLayout from './LegalLayout.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

export default function Cookies() {
  useDocumentTitle(
    "Politique en matière de cookies — Jérémy Samper",
    "Politique de cookies du site jeremysamper.ch : finalités, gestion et consentement."
  );
  return (
    <LegalLayout title="Politique de cookies" lastUpdate="Mai 2026">

      <h2>1. Qu'est-ce qu'un cookie&nbsp;?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
        tablette, smartphone) lors de la consultation d'un site internet. Il permet
        notamment de mémoriser des informations relatives à votre navigation, à vos
        préférences ou à votre identification.
      </p>

      <h2>2. Cookies utilisés sur ce site</h2>
      <p>
        Le site <strong>jeremysamper.ch</strong> n'utilise aucun cookie de tracking,
        de publicité, de mesure d'audience ni d'analyse statistique. Aucune donnée de
        navigation n'est collectée à des fins marketing ou publicitaires.
      </p>
      <p>
        Seuls les cookies strictement nécessaires au bon fonctionnement technique du
        site (par exemple ceux gérés automatiquement par notre hébergeur Vercel pour
        la sécurité, la performance et la prévention contre les abus) peuvent être
        déposés. Ces cookies n'ont aucun usage commercial et sont conservés pour la
        durée de la session.
      </p>
      <p>
        Conformément à la législation applicable (notamment l'art. 45c de la loi
        suisse sur les télécommunications LTC, ainsi qu'à la directive ePrivacy
        européenne 2002/58/CE), ces cookies fonctionnels strictement nécessaires ne
        requièrent pas de consentement préalable.
      </p>

      <h2>3. Cookies tiers</h2>
      <p>
        Le site peut intégrer des liens vers des plateformes externes (LinkedIn,
        Instagram, WhatsApp). Si vous cliquez sur ces liens, ces sites tiers peuvent
        à leur tour déposer leurs propres cookies. Nous vous invitons à consulter
        leurs politiques respectives en matière de cookies.
      </p>

      <h2>4. Gestion de vos cookies</h2>
      <p>
        Vous pouvez à tout moment configurer votre navigateur pour bloquer ou
        supprimer les cookies déposés sur votre terminal. La procédure varie selon
        le navigateur utilisé&nbsp;:
      </p>
      <ul>
        <li><strong>Chrome</strong>&nbsp;: Paramètres → Confidentialité et sécurité → Cookies et autres données des sites&nbsp;;</li>
        <li><strong>Firefox</strong>&nbsp;: Paramètres → Vie privée et sécurité → Cookies et données de site&nbsp;;</li>
        <li><strong>Safari</strong>&nbsp;: Préférences → Confidentialité&nbsp;;</li>
        <li><strong>Edge</strong>&nbsp;: Paramètres → Cookies et autorisations de site.</li>
      </ul>
      <p>
        Le blocage de l'ensemble des cookies peut affecter le bon fonctionnement de
        certains sites internet, mais n'aura pas d'impact significatif sur ce site qui
        n'utilise aucun cookie de personnalisation.
      </p>

      <h2>5. Modification de cette politique</h2>
      <p>
        Cette politique peut être amenée à évoluer, notamment en cas d'évolution
        législative ou d'ajout d'un nouvel outil sur le site. La version applicable
        est celle en vigueur à la date de votre visite.
      </p>

      <h2>6. Contact</h2>
      <p>
        Pour toute question relative à l'utilisation des cookies sur ce site, vous
        pouvez nous contacter par email à <a href="mailto:contact@jeremysamper.ch">contact@jeremysamper.ch</a>.
      </p>
    </LegalLayout>
  );
}
