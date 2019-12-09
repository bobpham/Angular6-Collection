import { Component, Input } from '@angular/core';

@Component({
    selector: 'counter-comp',
    template: `
      <div>
        <button>UP</button>
        {{count}}
        <button>DOWN</button>
      </div>
    `
})
export class CounterComponent {

    @Input()
    count: number = 0;

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}
