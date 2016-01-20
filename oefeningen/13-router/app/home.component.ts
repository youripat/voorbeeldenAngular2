import { Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add.component";

@Component({
	selector  : 'home-component',
	directives: [ROUTER_DIRECTIVES],
	template  : `
	<h1>Pick your favorite city</h1>
	<a [routerLink]="['/Home']" class="btn btn-primary">List of cities</a>
	<a [routerLink]="['/Add']" class="btn btn-primary">Add City</a>
	<hr>
	<!-- Dynamically inject views here -->
	<router-outlet></router-outlet>
	`
})

@RouteConfig([
	{path: '/', name: 'root', redirectTo: ['/Home']},
	{path: '/home', name: 'Home', component: AppComponent},
	{path: '/add', name: 'Add', component: CityAddComponent}
])
export class HomeComponent {

}