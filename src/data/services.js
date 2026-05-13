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
      "Mettre en place des méthodes de travail simples et adaptées au terrain. Cadrer les postes, sécuriser les flux du coup de feu, clarifier les rôles entre cuisine et salle. L'objectif : un service plus fluide, des équipes alignées et une organisation qui tient dans la durée.",
    image: imgOrganisation,
    alt: 'Dressage soigné d\'une viande sauce dans une assiette en céramique',
  },
  {
    id: 'couts',
    number: '02',
    title: 'Optimisation des coûts & rentabilité',
    short: 'Fiches techniques, maîtrise des pertes, marges sans compromis.',
    description:
      "Analyser les coûts matières et la rentabilité poste par poste pour identifier les leviers concrets. Construire des fiches techniques utilisables, suivre les pertes, ajuster la carte là où les marges décrochent — sans rien céder sur la qualité ni sur l'identité de la maison.",
    image: imgCouts,
    alt: 'Dessert chocolat-pétales sur ardoise, photographie gastronomique',
  },
  {
    id: 'cartes',
    number: '03',
    title: 'Création & refonte de cartes',
    short: 'Cohérence, saisonnalité, lisibilité, viabilité économique.',
    description:
      "Construire une carte cohérente avec l'identité de l'établissement, la saisonnalité et la capacité réelle de la brigade. Chaque plat est pensé pour être lisible côté client, tenable côté production, et juste côté marge — avec le produit toujours en premier.",
    image: imgCartes,
    alt: 'Burger gourmet bun brioché, salade et bacon, sur assiette en céramique',
  },
  {
    id: 'formation',
    number: '04',
    title: 'Formation & accompagnement des équipes',
    short: 'Standards, transmission, montée en compétences durable.',
    description:
      "Intervenir directement en cuisine, aux côtés des équipes. Transmettre les bons gestes, installer des standards lisibles, faire monter en compétence chacun à son rythme. Une formation sur le terrain, calée sur la réalité de votre établissement et de ses objectifs.",
    image: imgFormation,
    alt: 'Poireau grillé en sauce, fleurs comestibles, dressage gastronomique',
  },
  {
    id: 'consulting',
    number: '05',
    title: 'Consulting restauration & hôtellerie',
    short: 'Présence terrain, regard extérieur, résultats mesurables.',
    description:
      "Accompagnement sur mesure, ponctuel ou inscrit dans la durée. Présence terrain régulière, regard extérieur et suivi des actions engagées — pour avancer concrètement sur les sujets qui comptent : organisation, marges, recrutement, ouverture, transmission.",
    image: imgConsulting,
    alt: 'Jérémy Samper en pleine action de dressage en cuisine, vue de profil, mains gantées',
  },
];
