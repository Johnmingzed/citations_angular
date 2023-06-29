import { Injectable } from '@angular/core';
import { Citation } from './citation';

@Injectable({
  providedIn: 'root'
})
export class CitationService {

  constructor() { }

  citations: Citation[] = [
    {
      id: 423,
      citation: `Pour faire de grandes choses il faut se lever tôt et surtout boire beaucoup de café !`,
      explication: `L'auteur a probablement voulu exprimer que son sentiment de résussite d'une journée est intimement lié à son taux de caféïne`,
      auteur: 'Jonathan',
      bio: `Programmeur de génie, il semblerait qu'il travaille actuellement au développement d\'un application de citations.`,
    },
    {
      id: 478,
      citation: `Rodolphe à l'instant. On pouvait arriver promptement à la pluie? Ah! cette femme! cette femme!... Et elle les nettoyait elle-même, parce que ça lui a passé, dit-on. -- Mais, dit le pharmacien.`,
      explication: ``,
      auteur: 'Laure Leroy',
      bio: null,
    },
    {
      id: 470,
      citation: `Elle toucha la moitié environ de la bourrée, emplis les carafes, apporte de l'eau-de-vie, dépêche-toi! Au moins, que je suis malheureux! que je vous aime, voilà tout! des sédatifs, des émollients.`,
      explication: null,
      auteur: null,
      bio: null,
    },
    {
      id: 479,
      citation: 'Pour faire de grandes choses il faut se lever tôt et surtout boire beaucoup de café !',
      explication: `Boulanger, vous nous abandonnez? Rodolphe protesta qu'il allait avoir une foule dans un fauteuil de bureau, sous la lumière des lampes, rabattue sur le trottoir, tout fredonnant ou braillant à plein.`,
      auteur: `Hugues Gros`,
      bio: null,
    }
  ]

  getAllCitations(): Citation[] {
    return this.citations;
  }

  getCitationById(id: number): Citation | undefined {
    return this.citations.find(citation => citation.id === id);
  }

  getRandomCitation(): Citation | undefined {
    let randomNumber: number = Math.floor(Math.random() * this.citations.length);
    return this.citations[randomNumber];
  }
}
