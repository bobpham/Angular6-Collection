
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { HeroComponent} from './s2/2.3/hero.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NameParentComponent} from './s3/3.1/nameparent.component';
import { NameChildComponent} from './s3/3.1/namechild.component';

@NgModule({
    // for anything that we use in the template
    declarations: [
        WrapperComponent,
        HeroComponent,
        NameChildComponent,
        NameParentComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports:[WrapperComponent]

})
export class WrapperModule { }
/*
    Interset point: We create a seperate module, will be loaded into the root module
*/