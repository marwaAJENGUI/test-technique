import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../entity/User';

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
  constructor() {
   }
  ngOnInit(): void {
    this.nom=this.user.nom;
    this.prenom=this.user.prenom;
    this.nombre_enfants=this.user.nombre_enfants;
  }
  sendIndex(){
    this.index.emit(this.user_index);
  }
  sendLastName(){
    this.user.nom=this.nom;
    this.user_up.emit(this.user);
  }
  sendFirstName(){
    this.user.prenom=this.prenom;
    this.user_up.emit(this.user);
  }
}
