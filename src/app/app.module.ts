import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ProgranComponent } from './program/program.component';
import { SemesterComponent } from './semester/semester.component';
import { JoinCourseComponent } from './join-course/join-course.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { ProJectCoreComponent } from './pro-ject-core/pro-ject-core.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { CycleComponent } from './cycle/cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProgranComponent,
    SemesterComponent,
    JoinCourseComponent,
    LandingPageComponent,
    HomePageComponent,
    ProfileComponent,
    PrivacyPolicyComponent,

    CancellationPolicyComponent,
    DashBoardComponent,
    AsideBarComponent,
    CoursesComponent,
    LoginComponent,
    ProJectCoreComponent,
    ConsultingComponent,
    CycleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
