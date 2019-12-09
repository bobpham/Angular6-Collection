
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { HeroComponent} from './s2/2.3/hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroService} from './s2/2.3/hero.service';

import {CounterAppComponent} from './s3/3.1/counterApp.component';
import {CounterComponent} from './s3/3.1/counter.component';


@NgModule({
    // for anything that we use in the template
    declarations: [
        WrapperComponent,
        HeroComponent,
        CounterAppComponent,
        CounterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [HeroService],
    exports: [WrapperComponent]

})
export class WrapperModule { }
/*
    Interset point: We create a seperate module, will be loaded into the root module
*/
