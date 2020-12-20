import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from './entity/User';
import { ApiUsersService } from './services/api-users.service';
import { ComponentCommunicationService } from './services/component-communication.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  title = 'test-technique';
  listUsers:User[]=[];
  user:User;
  index:number;
  comUser:User;
  constructor(private userService : ApiUsersService,private data: DataService){}
  ngOnInit(): void {
    this.LoadListUsersFromJson();
    this.data.currentMessage.subscribe(message => this.user = message);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.info("listChange");
    console.info(this.listUsers)
  }
  getIndex(i:number){
    this.index=i;
    this.user=this.listUsers[this.index];
    console.log("idex="+this.index);
    console.log(this.user);
  }
  updateUser(user:User){
    this.listUsers[this.index]=user;
    this.user=user;
    this.data.changeMessage(this.user);
    console.info("updateUser");
    console.info(this.listUsers);
  }
  /*
  * @ToDo
  * */
  LoadListUsersFromJson(){
    this.userService.getUsers().subscribe(res=>(res.forEach((value, index) => {
      this.listUsers[index]=value;
  })));
  this.index=undefined;
  console.log(this.listUsers);
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){
    console.info(this.listUsers);
    this.userService.updateUsers(this.listUsers).subscribe(data=>this.updateUser);
  }

}
