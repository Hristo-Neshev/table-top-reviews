import { Routes, RouterModule } from '@angular/router';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
    { path: 'review/allReviews', component: AllReviewsComponent },
    { path: 'review/details/:id', component: DetailsComponent },
    {path: 'review/create', component: CreateComponent},
    {path: 'review/edit', component: EditComponent}


];

export const ReviewRoutingModule = RouterModule.forChild(routes);