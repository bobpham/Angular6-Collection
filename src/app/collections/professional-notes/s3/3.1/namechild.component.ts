import { Component, Input } from '@angular/core';
@Component({
    selector: 'name-child',
    template: '<h3>"{{childName}}"</h3>'
})
export class NameChildComponent {
    private _name = '';
    @Input()
    set childName(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }
    get childName(): string { return this._name; }
}