import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
// import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'student-dashboard', component: StudentDashboardComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent },
    { path: 'quiz', component: QuizComponent },


    // {
    //   path: 'dashboard',
    //   canActivate: [AuthGuard],
    //   loadChildren: () =>
    //     import('./modules/admin/admin.module').then((m) => m.AdminModule),
    // },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
