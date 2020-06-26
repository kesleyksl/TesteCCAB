import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];
  public erroMessage: string;
  public userSearch: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users)=>{
        this.users = users
      },
      (error)=>{
        this.erroMessage = "Não foi possível carregar os usuários"
      }
    )
  }
  find(){

    let index = this.users.findIndex(user => user.name.toUpperCase() === this.userSearch.toUpperCase());
    
    if(index >= 0){
      let user = this.users[index];
      this.cleanUsers();
      this.users.push(user);
    }
    else{
      index = this.users.findIndex(user => user.email.toUpperCase() === this.userSearch.toUpperCase());
      if(index >= 0){
        let user = this.users[index];
        this.cleanUsers();
        this.users.push(user);
      }
      else{

        this.erroMessage = "Usuário não localizado"
      }
    }

  }

  cleanUsers(){
    while(this.users.length) {
      this.users.pop();
    } 
  }
  reload(){
    this.clearField()
    this.userService.getUsers().subscribe(
      (users)=>{
        this.users = users
      },
      (error)=>{
        this.erroMessage = "Não foi possível carregar os usuários"
      }
    )
  }

  clearField(){
    this.userSearch = '';
  }
}
