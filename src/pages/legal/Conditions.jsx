import LegalLayout from './LegalLayout.jsx';
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js';

export default function Conditions() {
  useDocumentTitle(
    "Conditions d'utilisation — Jérémy Samper",
    "Conditions générales d'utilisation du site jeremysamper.ch."
  );
  return (
    <LegalLayout title="Conditions d'utilisation" lastUpdate="Mai 2026">

      <h2>1. Objet</h2>
      <p>
        Les présentes conditions d'utilisation régissent l'accès et l'utilisation du
        site internet <strong>jeremysamper.ch</strong> (ci-après «&nbsp;le Site&nbsp;»),
        édité par Jérémy Samper, consultant en restauration indépendant, basé à
        1976 Erde (Suisse).
      </p>

      <h2>2. Acceptation des conditions</h2>
      <p>
        L'accès au Site et son utilisation impliquent l'acceptation pleine et entière
        des présentes conditions. Si vous n'acceptez pas ces conditions, nous vous
        invitons à ne pas utiliser le Site.
      </p>

      <h2>3. Vocation du site</h2>
      <p>
        Le Site a une vocation purement informationnelle. Il présente l'activité de
        consultant culinaire de Jérémy Samper, ses services et permet la prise de
        contact via un formulaire dédié. Le Site ne vend aucun produit ni service en
        ligne&nbsp;; toute prestation fait l'objet d'un échange préalable et d'un devis personnalisé.
      </p>

      <h2>4. Accès au site</h2>
      <p>
        Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à
        Internet. Tous les frais afférents à l'accès au Site (matériel, logiciels,
        connexion) sont à la charge exclusive de l'utilisateur.
      </p>
      <p>
        L'éditeur s'efforce de maintenir le Site accessible 24 h/24 et 7 j/7. Toutefois,
        des interruptions techniques peuvent survenir, notamment pour des raisons de
        maintenance, de mise à jour ou de cas de force majeure. La responsabilité de
        l'éditeur ne saurait être engagée en cas d'indisponibilité du Site.
      </p>

      <h2>5. Comportement de l'utilisateur</h2>
      <p>
        L'utilisateur s'engage à utiliser le Site conformément à la loi, aux bonnes mœurs
        et aux présentes conditions. Sont notamment interdits&nbsp;:
      </p>
      <ul>
        <li>toute tentative de perturbation du fonctionnement du Site&nbsp;;</li>
        <li>toute extraction, copie ou réutilisation non autorisée des contenus&nbsp;;</li>
        <li>l'envoi de messages à caractère injurieux, diffamatoire, raciste ou contraire à l'ordre public via le formulaire de contact&nbsp;;</li>
        <li>toute usurpation d'identité ou tentative d'accès frauduleux.</li>
      </ul>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du Site (textes, images, logo, structure, code) est
        protégé par le droit d'auteur (LDA). Toute reproduction sans autorisation est
        interdite. Voir <a href="/mentions-legales">mentions légales</a>.
      </p>

      <h2>7. Données personnelles</h2>
      <p>
        Le traitement des données personnelles collectées via le formulaire de contact
        est régi par notre <a href="/confidentialite">politique de confidentialité</a>.
      </p>

      <h2>8. Cookies</h2>
      <p>
        Le Site n'utilise aucun cookie de suivi, de publicité ou d'analyse statistique.
        Voir <a href="/cookies">politique de cookies</a>.
      </p>

      <h2>9. Modification des conditions</h2>
      <p>
        L'éditeur se réserve le droit de modifier les présentes conditions à tout moment.
        La version applicable est celle en vigueur à la date de votre visite. Les
        utilisateurs sont invités à consulter régulièrement cette page.
      </p>

      <h2>10. Droit applicable et juridiction</h2>
      <p>
        Les présentes conditions sont régies par le droit suisse. Tout litige relatif à
        leur interprétation ou à leur exécution relève de la compétence exclusive des
        tribunaux du canton du Valais (Suisse), sous réserve des dispositions impératives
        applicables.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative aux présentes conditions, vous pouvez nous contacter
        via la <a href="/contact">page contact</a> ou par email à <a href="mailto:contact@jeremysamper.ch">contact@jeremysamper.ch</a>.
      </p>
    </LegalLayout>
  );
}
