import { Component } from '@angular/core';

@Component({
    selector: 'counter-app-comp',
    template: `
      <div class="app">
        <counter-comp [count]="initialCount" (onSendMsg) = "getMsg($event)" ></counter-comp>
        <h3>Output: {{outputNumber}}</h3>
      </div>
    `
})
export class CounterAppComponent {

    initialCount: number = 10;
    outputNumber: number = - 1;
    getMsg(data: number) {
        this.outputNumber = data;
        console.log(data);
    }
}


/*
An example of passing data from parent to its child
The child also emits the result which is capture by the parent
*/
