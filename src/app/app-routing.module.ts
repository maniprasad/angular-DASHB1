import { NgModule } from '@angular/core';
import { APIResolver } from "./resolver"
import { Routes, RouterModule } from '@angular/router';
import  { DashboardComponent} from './dashboard/dashboard.component';
import { logincomponent} from "../app/login/login.component"
import { AppComponent } from './app.component';
import { description } from "../app/thor/thorcomponent";


const routes: Routes = [{path:"home", component: DashboardComponent}, {path:"login", component:logincomponent }, {path: "thor/:id" , component: description ,resolve:{ thor: APIResolver }}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
