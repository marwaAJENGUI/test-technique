import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../entity/User';
import { ComponentCommunicationService } from '../services/component-communication.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  nom: string;
  prenom: string;
  nombre_enfants: number;
  @Input()user_index:number;
  @Output() index = new EventEmitter<number>();
  @Output() user_up= new EventEmitter<User>();
  @Input()user: User;
  comUser:User;
  constructor(private data: DataService) {
   }
  ngOnInit(): void {
    this.nom=this.user.nom;
    this.prenom=this.user.prenom;
    this.nombre_enfants=this.user.nombre_enfants;
    this.data.currentMessage.subscribe(message => this.comUser = message)

  }
  sendIndex(){
    this.index.emit(this.user_index);
    this.data.changeMessage(this.user)

  }

  sendChildren(){
    this.user.nombre_enfants=this.nombre_enfants;
    this.user_up.emit(this.user);
    this.user=this.user;
    this.data.changeMessage(this.user)
  }
}
