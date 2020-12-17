import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {
  @Output() nom: string;
  @Output() prenom: string;
  nombre_enfants: number;
  @Input()user: User;
  constructor() {
   }
  ngOnInit(): void {
    this.nom=this.user.nom;
    this.prenom=this.user.prenom;
    this.nombre_enfants=this.user.nombre_enfants;
  }

}
