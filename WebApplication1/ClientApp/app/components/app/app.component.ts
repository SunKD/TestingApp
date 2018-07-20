import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    msg = "Click the submit button to reveal the picture."
    InitialClick = false;

    beach: boolean = true;
    constructor() { }

    ngOnInit() {
    }

    onSubmit() {
        this.InitialClick = true;
        this.beach = !this.beach;
    }

}

