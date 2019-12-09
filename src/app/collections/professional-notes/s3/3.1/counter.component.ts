import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'counter-comp',
    template: `
      <div>
        <button (click)= "increment()">UP</button>
        {{count}}
        <button (click)= "decrement()">DOWN</button>
        <button (click)= "sendMsg()">SEND</button>
      </div>
    `
})
export class CounterComponent {

    @Input() count: number = 0;
    @Output() onSendMsg = new EventEmitter<number>(); // emit the counter

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    sendMsg() {
        this.onSendMsg.emit(this.count);
    }
}
