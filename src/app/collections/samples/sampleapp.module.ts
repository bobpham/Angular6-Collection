import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SampleApp01Module } from './sample-01/sampleapp01.module';
import { CommonModule } from '@angular/common';
import {SampleAppComponent } from './sampleapp.component';

@NgModule({
    // for anything that we use in the template
    declarations: [
        SampleAppComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SampleApp01Module
    ],
    providers: [],
    exports: [SampleApp01Module, SampleAppComponent]

})
export class SampleAppModule { }
/*
    Interset point: We create a seperate module, will be loaded into the root module
*/
