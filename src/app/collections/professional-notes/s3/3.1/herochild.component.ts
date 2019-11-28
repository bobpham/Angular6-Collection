import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-child',
    templateUrl: 'herochild.component.html'
})

export class HeroChildComponent {
    @Input() hero: Hero;
    @Input('master') masterName: string;
}