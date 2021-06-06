import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { UserComponent } from './user/user.component';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent },
  {path: "signIn", component: SignInComponent},
  {path: "register", component: RegisterComponent},
  {path: "user", component: UserComponent, canActivate: [AuthGuard]},
  {path: "appointment", component: AppointmentComponent, canActivate: [AuthGuard]},

  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
