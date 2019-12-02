import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HeroService {

   heroes: string[] = [];

    add(hero: string) {
        this.heroes.push(hero);
    }

    clear() {
        this.heroes = [];
    }

    getHeroes(): Observable<string[]> {

        return of(this.heroes);
    }

}