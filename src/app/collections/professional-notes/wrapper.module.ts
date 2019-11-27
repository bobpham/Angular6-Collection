
import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';
import {HeroComponent} from './s2/2.3/hero.component';

@NgModule({
    // for anything that we use in the template
    declarations: [
        WrapperComponent,
        HeroComponent
    ],
    imports: [
    ],
    exports:[WrapperComponent]

})
export class WrapperModule { }
