import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [{
  path:"",
  component: UserComponent
},
{
  path: "user/details/:id",
  component: UserDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
