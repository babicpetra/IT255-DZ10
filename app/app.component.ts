import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { MainPageComponent } from 'app/mainpage/mainpage.component';
import { PocetnaComponent } from 'app/login/pocetna.component';
import { RegisterComponent } from 'app/register/register.component';
import {Pipe} from 'angular2/core';
@Component({
 selector: 'moja-aplikacija',
 templateUrl: 'app/router.html',
 directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
 {path:'/Home', name: 'MainPage', component: MainPageComponent, useAsDefault: true},
 {path:'/Login', name:'Login', component: PocetnaComponent},
 {path:'/Register', name:'Register', component: RegisterComponent}
 ])
export class AppComponent {
}