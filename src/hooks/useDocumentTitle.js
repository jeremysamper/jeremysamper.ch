import { useEffect } from 'react';

/**
 * Met à jour le <title> et la <meta name="description"> de la page.
 * Restaure les valeurs par défaut quand le composant est démonté.
 */
export function useDocumentTitle(title, description) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = title;

    let metaTag = document.querySelector('meta[name="description"]');
    const previousDescription = metaTag?.getAttribute('content');

    if (description && metaTag) {
      metaTag.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (description && metaTag && previousDescription !== null) {
        metaTag.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
