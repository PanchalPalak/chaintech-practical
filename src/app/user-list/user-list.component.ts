import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    CommonModule,
  ],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchText: string = '';
  sortBy: 'name' | 'username' = 'name';
  error: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.filteredUsers = data;
        this.sortUsers();
        this.error = ''
      },
      (error) => {
        this.error = 'Something went wrong!';
      }
    );
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter((item) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  sortUsers(): void {
    this.filteredUsers = [...this.filteredUsers].sort((a, b) =>
      a[this.sortBy].localeCompare(b[this.sortBy])
    );
  }
}
