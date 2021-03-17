import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Character } from "./../../../shared/interfaces/character.interface";


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  static charactersList:Character[] = [];
  resultado!: string;
  jesucristo=new FormGroup({
    name: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required])

  })

  constructor(private fb: FormBuilder) {}
    
  ngOnInit(): void {
    this.jesucristo = this.fb.group({
      name: new FormControl(''),
      gender: new FormControl('')
    })
  }
  onSubmit(nameValue:string, genderValue:string):void{
    const name=new FormControl('', Validators.required);
    const gender=new FormControl('', Validators.required);
    if(this.jesucristo.valid){
      let character :Character;
      character={name:nameValue, gender:genderValue, id:Math.random(), image:"", species:"", created:new Date().toString(), status:"" };
      ReactiveFormComponent.charactersList.push(character);
    }
    
  }
  submit() {
    if (this.jesucristo.valid){
      this.resultado = "Todos los datos son válidos";
     
    }
     
    else
      this.resultado = "Hay datos inválidos en el formulario";
   console.log(this.resultado);
  }
 
}
