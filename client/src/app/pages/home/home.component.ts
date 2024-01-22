import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  githubUsername: string = ''; // Property to bind to the input field
  userData: any; // Property to store fetched GitHub user data
  repoData: any;
  constructor(private http: HttpClient) {}
  fetchData() {
    if (this.githubUsername) {
      const gitUserRepoData = `https://api.github.com/users/${this.githubUsername}/repos`;
      const gitUserData = `https://api.github.com/users/${this.githubUsername}`;
      this.http.get(gitUserRepoData).subscribe({
        next: (res) => {
          console.log('Successful repo response received');
          this.repoData = res;
          console.log('GitHub API Response:', this.repoData);
        },
        error: (err) => {
          console.log(err);
        },
      });
      this.http.get(gitUserData).subscribe({
        next: (res) => {
          console.log('Successful userData response received');
          this.userData = res;
          console.log('GitHub API Response:', this.userData);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
// export class HomeComponent {
//   username: string = '';
//   user: any;
//   repositories: any[] = [];

//   constructor(private http: HttpClient) {}

//   search() {
//     if (this.username) {
//       this.getUser();
//       this.getRepositories();
//     }
//   }

//   getUser() {
//     const apiUrl = `https://api.github.com/users/${this.username}`;
//     this.http.get(apiUrl).subscribe({
//       next: (response) => {
//         console.log('Successful response received');
//         this.user = response;
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }
//   getRepositories() {
//     const apiUrl = `https://api.github.com/users/${this.username}/repos`;
//     this.http.get<any[]>(apiUrl).subscribe({
//       next: (response) => {
//         console.log('Successful response received');
//         this.repositories = response;
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }
// }
