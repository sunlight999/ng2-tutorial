import { Injectable,Inject } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero }           from './hero';
import { HeroesSettings } from './heroes.settings';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Hero[]> {
    return this.http.get(HeroesSettings.API_ENDPOINT+`api/heroes/?name=${term}`)
               .map(response => response.json().data as Hero[]);
  }
}
