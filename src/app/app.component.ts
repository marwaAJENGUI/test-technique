import {Component, OnInit} from '@angular/core';
import {User} from './entity/User';
import { ApiUsersService } from './services/api-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-technique';
  listUsers:User[]=[];
  user:User;
  constructor(private userService : ApiUsersService){}
  ngOnInit(): void {
    this.LoadListUsersFromJson();
  }

  /*
  * @ToDo
  * */
  LoadListUsersFromJson(){
    this.userService.getUsers().subscribe(res=>(res.forEach((value, index) => {
      this.listUsers[index]=value;
  })));
  console.log(this.listUsers)
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){}

}
