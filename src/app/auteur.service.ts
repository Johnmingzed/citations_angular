import { Injectable } from '@angular/core';
import { Auteur } from './auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor() { }

  url = 'https://localhost:8000/api/auteur';

  // http://localhost:8000/api/auteur/claude%20traor%C3%A9
  async getAuteurByName(auteur: string): Promise<Auteur | undefined> {
    const data = await fetch(`${this.url}/${auteur}`);
    return await data.json() ?? {};
  }
}