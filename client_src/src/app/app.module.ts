/**core angular components */
import { NgModule } from '@angular/core';
import { Component, Input, OnInit, trigger, state, style, animate, transition } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routing'
import { RouterModule, Routes } from '@angular/router'

/*app component */
import { AppComponent } from './app.component';

/** Root Component */
import { RootComponent } from "./root/root.component";

/**third party components */
import { Angulartics2Module, Angulartics2GoogleAnalytics, Angulartics2 } from 'angulartics2';


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