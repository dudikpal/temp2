import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'ui';
    toView = 'Default content';

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {

        this.getResponse();
    }

    async getResponse() {

        const response = await fetch('/api/players');
        const data = await response.text();
        this.toView = data;
        console.log(this.toView)
    }
}
