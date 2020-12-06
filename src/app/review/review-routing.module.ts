import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../user/auth-guard.guard';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
    { path: 'review/allReviews', canActivate: [AuthGuardGuard], component: AllReviewsComponent },
    { path: 'review/details/:id', canActivate: [AuthGuardGuard], component: DetailsComponent },
    {path: 'review/create', canActivate: [AuthGuardGuard], component: CreateComponent},
    {path: 'review/edit', canActivate: [AuthGuardGuard], component: EditComponent}


];

export const ReviewRoutingModule = RouterModule.forChild(routes);