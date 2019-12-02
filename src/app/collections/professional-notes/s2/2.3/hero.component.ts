import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'sample-hero',
    templateUrl: 'hero.component.html',
})
export class HeroComponent {

    constructor(private heroService: HeroService) { }

    public form = new FormGroup({
        name: new FormControl('', Validators.required),
    });

    submit(event: any) {
        console.log(event);
        console.log(this.form.controls.name.value);
        this.heroService.add(this.form.controls.name.value);
        this.form.controls.nam.setValue("");
    }
}