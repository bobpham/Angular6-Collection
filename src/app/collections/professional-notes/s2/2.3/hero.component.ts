import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'sample-hero',
    templateUrl: 'hero.component.html',
})
export class HeroComponent implements OnInit {

    ngOnInit(): void {
        this.getHeroes();
    }

    heroes: string[];

    constructor(private heroService: HeroService) { }

    public form = new FormGroup({
        name: new FormControl('', Validators.required),
    });

    submit(event: any) {
        console.log(event);
        console.log(this.form.controls.name.value);
        this.heroService.add(this.form.controls.name.value);
        this.form.controls.name.setValue("");
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    delete(hero: string): void {
        this.heroService.deleteHero(hero).subscribe(x => {  this.getHeroes();});

    }
}