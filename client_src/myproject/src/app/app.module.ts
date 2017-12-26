/**core angular components */
import { NgModule } from '../../../node_modules/@angular/core';
import { Component, Input, OnInit, trigger, state, style, animate, transition } from '../../../node_modules/@angular/core';
import { FormsModule } from '../../../node_modules/@angular/forms'
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { HttpModule } from '../../../node_modules/@angular/http';
import { appRoutes } from './app.routing'
import { RouterModule, Routes } from '../../../node_modules/@angular/router'

/*app component */
import { AppComponent } from './app.component';

/** Root Component */
import { RootComponent } from "./root/root.component";

/**third party components */
import { Angulartics2Module, Angulartics2GoogleAnalytics, Angulartics2 } from '../../../node_modules/angulartics2';


@NgModule({
    imports:
    [
        BrowserModule,
        FormsModule,
        HttpModule,
        Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
        Angulartics2Module.forChild(),
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent, //app
        RootComponent

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }