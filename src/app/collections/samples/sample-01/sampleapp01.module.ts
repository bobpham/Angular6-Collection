import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../../services/userdata.service';
import { SampleApp01Component } from './sampleapp01.component';

@NgModule({
    // for anything that we use in the template
    declarations: [
        SampleApp01Component
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    providers: [UserDataService],
    exports: [SampleApp01Component]

})
export class SampleApp01Module { }
/*
    Interset point: We create a seperate module, will be loaded into the root module
*/
