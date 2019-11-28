import { Component } from '@angular/core';

@Component({
    selector: 'name-parent',
    templateUrl: 'nameparent.component.html'
})

export class NameParentComponent {
    // Displays 'Mr. IQ', '<no name set>', 'Bombasto
    names = ['Mr. IQ', ' ', ' Bombasto '];
}