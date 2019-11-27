
import { NgModule } from '@angular/core';
import { WrapperComponent } from './wrapper.component';
import { HeroComponent} from './s2/2.3/hero.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    // for anything that we use in the template
    declarations: [
        WrapperComponent,
        HeroComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[WrapperComponent]

})
export class WrapperModule { }
/*
    Interset point: We create a seperate module, will be loaded into the root module
*/