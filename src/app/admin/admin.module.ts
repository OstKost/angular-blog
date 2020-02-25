import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './shared/services/auth.guard';
import { SearchPipe } from './shared/pipes/search.pipe';
import { AlertComponent } from './shared/components/alert/alert.component';
import { AlertService } from './shared/services/alert.service';

const Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent },
      { path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] },
      { path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
      { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    EditPageComponent,
    DashboardPageComponent,
    SearchPipe,
    AlertComponent
  ],
  imports: [CommonModule, RouterModule.forChild(Routes), FormsModule, ReactiveFormsModule, SharedModule],
  exports: [RouterModule],
  providers: [AuthGuard, AlertService]
})
export class AdminModule {
}
