import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
const applicationId = environment.applicationId;
const restApiKey = environment.restApiKey;


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  currentUser = null;
  constructor(private http: HttpClient, private router: Router) { }

  create(reviewData) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    const newReview = {
      title: reviewData.title,
      imageUrl: reviewData.imageUrl,
      content: reviewData['review-content'],
      likes: JSON.stringify([]),
      creator: this.currentUser.username,
      public: reviewData.public ? true : false
    }

    return this.http.post(`https://api.backendless.com/${applicationId}/${restApiKey}/data/reviews`, newReview, {
      headers: {
        "Content-Type": "application/json",
        "user-token": this.currentUser['user-token']
      }
    });
  }

  getAllReviews() {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    return this.http.get(`https://api.backendless.com/${applicationId}/${restApiKey}/data/reviews`, {
      headers: {
        "user-token": this.currentUser['user-token']
      }
    });
  }

  getReviewsByCreator() {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    return this.http.get(`https://api.backendless.com/${applicationId}/${restApiKey}/data/reviews?where=creator%20%3D%20%27${this.currentUser.username}%27`,
      {
        headers: {
          "user-token": this.currentUser['user-token']
        }
      });
  }

  getReviewsById(id) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    return this.http.get(`https://api.backendless.com/${applicationId}/${restApiKey}/data/reviews/${id}`,
      {
        headers: {
          "user-token": this.currentUser['user-token']
        }
      });
  }

  edit(id, data) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
    const newData = {title: data.title, content: data['review-content'], imageUrl: data.imageUrl, public: data.public};
    return this.http.put(`https://api.backendless.com/${applicationId}/${restApiKey}/data/reviews/${id}`, newData,
      {
        headers: {
          "user-token": this.currentUser['user-token']
        }
      });
  }

  deleteReview(id) {
    this.currentUser = JSON.parse(localStorage.getItem('userData'));
     return this.http.delete(`https://api.backendless.com/${applicationId}/${restApiKey}/data/reviews/${id}`,
    {
      headers: {
        "user-token": this.currentUser['user-token']
      }
    });
  }






}
