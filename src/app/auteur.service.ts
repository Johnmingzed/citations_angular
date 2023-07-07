import { Injectable } from '@angular/core';
import { Auteur } from './auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor() { }
  url:string = 'https://127.0.0.1:8000/api/auteur';
  // url:string = 'http://127.0.0.1:8000/api/auteur';
  // url: string = 'https://jonathan.lesacteursduweb.fr/citations_backoffice/public/api/auteur';

  // http://localhost:8000/api/auteur/claude%20traor%C3%A9
  async getAuteurByName(auteur: string): Promise<Auteur | undefined> {
    const data = await fetch(`${this.url}/${auteur}`);
    return await data.json() ?? {};
  }
}