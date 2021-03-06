import { Component, Input, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../entity/User';
import { ComponentCommunicationService } from '../services/component-communication.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnChanges {
  nom: string;
  prenom: string;
  nombre_enfants: number;
  @Input() user_index:number;
  @Output() user_up= new EventEmitter<User>();
  @Input() user: User;
  comUser:User;
  constructor(private data: DataService) {
   }
  ngOnChanges(changes: SimpleChanges){
    this.nom=changes['user'].currentValue.nom;
    this.prenom=changes['user'].currentValue.prenom;
    this.nombre_enfants=changes['user'].currentValue.nombre_enfants;
   console.log(changes['user']);
   console.log(changes['user'].currentValue);
   this.data.currentMessage.subscribe(message => this.user = message)

  }
  sendLastName(){
    this.user.nom=this.nom;
    this.user_up.emit(this.user);
    this.data.changeMessage(this.user);
    console.info("sendLastName: ");
  }
  sendFirstName(){
    this.user.prenom=this.prenom;
    this.user_up.emit(this.user);
    this.data.changeMessage(this.user); 
  }

}
