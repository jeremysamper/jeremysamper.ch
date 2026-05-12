/**
 * Liste des 5 services. Chaque service est une "card" indépendante
 * avec son image, son titre et sa description (textes Wix conservés).
 */

import imgOrganisation from '../assets/images/service-organisation.jpg?responsive';
import imgCouts from '../assets/images/service-couts.jpg?responsive';
import imgCartes from '../assets/images/service-cartes.jpg?responsive';
import imgFormation from '../assets/images/service-formation.jpg?responsive';
import imgConsulting from '../assets/images/service-consulting.jpg?responsive';

export const SERVICES = [
  {
    id: 'organisation',
    number: '01',
    title: 'Organisation & structuration de cuisine',
    short: 'Méthodes claires, fluidité de service, coordination des équipes.',
    description:
      "Accompagnement des établissements dans la structuration et l'organisation de leur cuisine, avec la mise en place de méthodes de travail claires, efficaces et adaptées au terrain. L'objectif est de fluidifier les services, améliorer la coordination des équipes et garantir une organisation durable au quotidien.",
    image: imgOrganisation,
    alt: 'Dressage soigné d\'une viande sauce dans une assiette en céramique',
  },
  {
    id: 'couts',
    number: '02',
    title: 'Optimisation des coûts & rentabilité',
    short: 'Fiches techniques, maîtrise des pertes, marges sans compromis.',
    description:
      "Analyse des coûts matières et de la rentabilité globale afin d'identifier les leviers d'optimisation. La mise en place de fiches techniques, la maîtrise des pertes et une carte mieux structurée permettent d'améliorer les marges sans compromettre la qualité ni l'identité de l'établissement.",
    image: imgCouts,
    alt: 'Dessert chocolat-pétales sur ardoise, photographie gastronomique',
  },
  {
    id: 'cartes',
    number: '03',
    title: 'Création & refonte de cartes',
    short: 'Cohérence, saisonnalité, lisibilité, viabilité économique.',
    description:
      "Création et refonte de cartes cohérentes avec l'identité de l'établissement, la saisonnalité et les capacités réelles des équipes. Chaque offre est pensée pour être lisible, maîtrisée en production et économiquement viable, tout en valorisant le produit.",
    image: imgCartes,
    alt: 'Burger gourmet bun brioché, salade et bacon, sur assiette en céramique',
  },
  {
    id: 'formation',
    number: '04',
    title: 'Formation & accompagnement des équipes',
    short: 'Standards, transmission, montée en compétences durable.',
    description:
      "Intervention directe en cuisine pour la formation des équipes, la transmission de méthodes de travail et la mise en place de standards professionnels. L'objectif est d'aligner les équipes avec les objectifs de l'établissement et d'assurer une montée en compétences durable.",
    image: imgFormation,
    alt: 'Poireau grillé en sauce, fleurs comestibles, dressage gastronomique',
  },
  {
    id: 'consulting',
    number: '05',
    title: 'Consulting restauration & hôtellerie',
    short: 'Présence terrain, regard extérieur, résultats mesurables.',
    description:
      "Accompagnement sur mesure, ponctuel ou sur la durée, avec une présence terrain et un suivi concret des actions mises en place. Un regard extérieur, opérationnel et orienté résultats, au service de la performance globale de l'établissement.",
    image: imgConsulting,
    alt: 'Jérémy Samper en pleine action de dressage en cuisine, vue de profil, mains gantées',
  },
];
