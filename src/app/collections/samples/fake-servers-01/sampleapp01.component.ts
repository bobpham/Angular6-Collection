import { Component, OnInit } from '@angular/core';
import { User } from './user-data';
import { UserDataService } from './userdata.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'sample-app-01',
    templateUrl: './sampleapp01.component.html',
    styleUrls: ['./sampleapp01.component.css']
})
export class SampleApp01Component implements OnInit {
    title = 'CRUD App';
    users: User[] = [];

    constructor(private dataservice: UserDataService) { }
    getUsers() {
        this.dataservice.getUsers().subscribe(data => {
            this.users = data;
        });
    }


    ngOnInit() {
        this.getUsers();
    }
}