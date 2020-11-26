import { Routes, RouterModule } from '@angular/router';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
    {path:'review/allReviews', component: AllReviewsComponent},
    { path: 'review/details/:id', component: DetailsComponent },
    
  
];

export const ReviewRoutingModule = RouterModule.forChild(routes);