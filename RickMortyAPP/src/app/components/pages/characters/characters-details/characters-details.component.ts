import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {

  character$: Observable<Character> | undefined;
  constructor(private route: ActivatedRoute, private characterSvc:CharacterService,private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];
      this.character$ = this.characterSvc.getDetails(id);
    });
  }

  onBack():void{
    this.location.back();
  }

}
