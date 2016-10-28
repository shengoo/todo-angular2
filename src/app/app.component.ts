import {Component} from '@angular/core';
import {HomePage} from './pages/home/home';

@Component({
    // selector: 'app-root',
    // templateUrl: './app.component.html',
    // styleUrls: ['./app.component.less'],
    providers: [HomePage],
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AppComponent {
    rootPage = HomePage;
    newTodo = '';

    constructor() {

    }
}
