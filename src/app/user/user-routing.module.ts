import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { MyRewiewsComponent } from './my-rewiews/my-rewiews.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

    { path: 'user/register', component: RegisterComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/profile/:id',canActivate: [AuthGuardGuard], component: ProfileComponent },
    {path: 'user/myReviews', canActivate: [AuthGuardGuard], component: MyRewiewsComponent}
];

export const UserRoutingModule = RouterModule.forChild(routes);