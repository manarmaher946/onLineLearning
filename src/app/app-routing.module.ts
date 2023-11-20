import { ConsultingComponent } from './consulting/consulting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JoinCourseComponent } from './join-course/join-course.component';
import { LoginComponent } from './login/login.component';
import { ProgranComponent } from './program/program.component';
import { RegistrationComponent } from './registration/registration.component';
import { SemesterComponent } from './semester/semester.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { ProJectCoreComponent } from './pro-ject-core/pro-ject-core.component';
import { CycleComponent } from './cycle/cycle.component';


const routes: Routes = [
  {path: '' , redirectTo:'pro-ject-core' , pathMatch:'full'},
{path: 'landing',component:LandingPageComponent},
{path: 'home' , component:HomePageComponent},
{path: 'login',component:LoginComponent},
  {path: 'registration',component:RegistrationComponent},
  {path: 'program',component:ProgranComponent},
  {path: 'semester',component:SemesterComponent},
  {path: 'joinUs',component:JoinCourseComponent},
  {path: 'privacy',component:PrivacyPolicyComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'cancel',component:CancellationPolicyComponent},
{path: 'dashboard',component:DashBoardComponent},
{path: 'asidebar' , component:AsideBarComponent},
  {path: 'courses' , component:CoursesComponent},
  {path: 'pro-ject-core' , component:ProJectCoreComponent},
 {path:"consulting",component:ConsultingComponent},
 {path :"cycle",component :CycleComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
