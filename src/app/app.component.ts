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
  index:number;
  constructor(private userService : ApiUsersService){}
  ngOnInit(): void {
    this.LoadListUsersFromJson();
  }
  getIndex(i:number){
    this.index=i;
    this.user=this.listUsers[this.index];
    console.log("idex="+this.index);
    console.log(this.user);
  }
  updateUser(user:User){
    this.listUsers[this.index]=user;
    console.log(this.listUsers);
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
