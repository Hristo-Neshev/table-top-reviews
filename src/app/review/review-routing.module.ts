import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { AuthGuardGuard } from '../user/auth-guard.guard';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
    { path: 'review/allReviews', canActivate: [AuthGuardGuard], component: AllReviewsComponent },
    { path: 'review/details/:id', canActivate: [AuthGuardGuard], component: DetailsComponent },
    {path: 'review/create', canActivate: [AuthGuardGuard], component: CreateComponent},
    {path: 'review/edit/:id', canActivate: [AuthGuardGuard], component: EditComponent},
    {path: '**', component: NotFoundComponent}


];

export const ReviewRoutingModule = RouterModule.forChild(routes);