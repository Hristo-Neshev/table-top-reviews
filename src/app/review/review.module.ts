import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { ReviewRoutingModule } from './review-routing.module';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';



@NgModule({
  declarations: [CreateComponent, EditComponent, DetailsComponent, AllReviewsComponent],
  imports: [
    CommonModule,
    ReviewRoutingModule
  ]
})
export class ReviewModule { }
