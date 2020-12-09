import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoading = false;
  user = null;
  createdDate = null;
  lastLogin = null;
  constructor() { }

  ngOnInit(): void {
    this.isLoading = true;
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.createdDate = new Date(this.user.created).toLocaleDateString();
    this.lastLogin = new Date(this.user.lastLogin).toLocaleDateString();
    this.isLoading = false;
  }

}
