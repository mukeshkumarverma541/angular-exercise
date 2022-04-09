import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { User } from './user.model';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm;

  url =
    'https://test-project-database-angular-default-rtdb.firebaseio.com/user.json';

  users = [
    {
      userId: '',
      username: '',
      technology: '',
    },
  ];

  userDetails: any;
  editMode: boolean = false;
  editUserId: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUser();
  }

  onAddUser(userData: any) {
    if (this.userForm.valid) {
      if (this.editMode) {
            this.http.put('https://test-project-database-angular-default-rtdb.firebaseio.com/user/' +
            this.editUserId +
            '.json', userData.value).subscribe(data => {
              console.log(data);
              this.fetchUser();
            })

      } else {
        this.users.push(userData.value);
        console.log(userData.value);
        this.http.post<User>(this.url, userData.value).subscribe((res) => {
          console.log(res);
        });
      }
    }
  }

  fetchUser() {
    this.http
      .get<User>(this.url)
      .pipe(
        map((resData: any) => {
          console.log(resData);
          const userArr: any[] = [];
          for (let key in resData) {
            if (resData.hasOwnProperty(key)) {
              console.log(resData[key]);
              userArr.push({ userId: key, ...resData[key] });
            }
          }
          return userArr;
        })
      )
      .subscribe((users) => {
        console.log(users);
        this.users = users;
      });
  }

  deleteProduct(userId: any) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.http
        .delete(
          'https://test-project-database-angular-default-rtdb.firebaseio.com/user/' +
            userId +
            '.json'
        )
        .subscribe((res) => {
          this.fetchUser();
          console.log(res);
        });
    }
  }
  editProduct(user: any, id: any) {
    this.editMode = true;
    this.editUserId = user.userId;
    console.log(this.users[id]);

    this.userForm.setValue({
      username: this.users[id].username,
      technology: this.users[id].technology,
    });
  }
}
