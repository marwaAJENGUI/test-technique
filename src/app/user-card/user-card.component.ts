import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  nom: string;
  prenom: string;
  @Output() nombre_enfants: number;
  @Input()user: User;
  constructor() {
   }
  ngOnInit(): void {
    this.nom=this.user.nom;
    this.prenom=this.user.prenom;
    this.nombre_enfants=this.user.nombre_enfants;
  }

}
