import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[]
  panelOpenState = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  details(user: User){
     this.router.navigate([`/user/details/${user.id}`])
  }

}
