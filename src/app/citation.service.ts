import { Injectable } from '@angular/core';
import { Citation } from './citation';

@Injectable({
  providedIn: 'root'
})
export class CitationService {

  constructor() { }
  url:string = 'https://127.0.0.1:8000/api';
  // url: string = 'https://jonathan.lesacteursduweb.fr/citations_backoffice/public/api';

  async getAllCitations(): Promise<Citation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  //http://127.0.0.1:8000/api/citation/148
  async getCitationById(id: number): Promise<Citation | undefined> {
    const data = await fetch(`${this.url}/citation/${id}`);
    return await data.json() ?? {};
  }

  async getRandomCitation(): Promise<Citation | undefined> {
    const citations = await this.getAllCitations();
    let randomNumber: number = Math.floor(Math.random() * citations.length);
    return citations[randomNumber];
  }
}
