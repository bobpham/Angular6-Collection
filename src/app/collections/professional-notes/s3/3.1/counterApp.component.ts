import { Component } from '@angular/core';

@Component({
    selector: 'counter-app-comp',
    template: `
      <div class="app">
        <counter [count]="initialCount"></counter>
      </div>
    `
})
export class CounterAppComponent {

    initialCount: number = 10;
}
