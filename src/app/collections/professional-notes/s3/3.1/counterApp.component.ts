import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div class="app">
        <counter [count]="initialCount"></counter>
      </div>
    `
  })
  export class AppComponent {
   
    // tslint:disable-next-line: no-inferrable-types
    initialCount: number = 10;
  }
