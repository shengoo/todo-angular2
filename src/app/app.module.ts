import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {IonicApp, IonicModule} from 'ionic-angular';
import {HomePage} from './pages/home/home';

@NgModule({
    declarations: [
        AppComponent,
        HomePage
    ],
    imports: [
        IonicModule.forRoot(AppComponent,{mode:'ios'},{}),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [
        IonicApp
        // AppComponent
    ]
    ,
    entryComponents: [
        AppComponent,
        HomePage
    ]
})
export class AppModule {
}
