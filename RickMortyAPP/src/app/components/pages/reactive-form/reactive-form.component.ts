import { Component, OnInit } from '@angular/core';
import { Character } from "./../../../shared/interfaces/character.interface";


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  charactersList:Character[] = [];

  constructor() { }
  

  ngOnInit(): void {
  }
  onSubmit(nameValue:string, genderValue:string):void{
    let character :Character;
    character={name:nameValue, gender:genderValue, id:Math.random(), image:"", species:"", created:new Date().toString(), status:"" };
    this.charactersList.push(character);
  
  }
}
