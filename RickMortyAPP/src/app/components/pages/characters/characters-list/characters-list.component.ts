import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Character } from "./../../../../shared/interfaces/character.interface";
import { CharacterService } from "./../../../../shared/services/character.service";
import { filter, take } from "rxjs/operators"
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'
import { ReactiveFormComponent } from "src/app/components/pages/reactive-form/reactive-form.component"


type RequestInfo={
  next: string;
};

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters:Character[] = [];
  charactersDef: Character[]=[];
  
  info: RequestInfo = {
    next: "",
  };
  showGoUpButton = false;
  private pageNum = 1;
  private query: string ="";
  private hideScrollHeight = 200;
  private showScrollHeight = 500;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterSvc: CharacterService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.onUrlChanged();
  }

  ngOnInit(): void {
    
    this.getCharactersByQuery();
  }

  @HostListener('window:scroll',[])

  onWindowScroll():void{

    const yOffset = window.pageYOffset;
    if((yOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight){
      this.showGoUpButton = true
    } else if(this.showGoUpButton && (yOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight){
      this.showGoUpButton = false;
    }

  }

  onScrollDown():void{

    if(this.info.next){
      this.pageNum++;
      this.getDataFromService();
    }

  }
  
  onScrollUp():void{

    this.document.body.scrollTop=0;
    this.document.documentElement.scrollTop=0;
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.characters = [];
        this.pageNum = 1;
        this.getCharactersByQuery();
      });
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => { this.query = params['q'] ;
      this.getDataFromService();
    });
  }
  private getDataFromService() : void{

    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(
      take(1)
    ).subscribe((res:any) => {
      if(res?.results?.length){

        const {info , results} = res;
        this.characters = [...this.characters, ...results]
        this.charactersDef=this.characters.concat(ReactiveFormComponent.charactersList)
        this.info = info;
      } else{

        this.characters = [];
      }
      
    })
  }
  showMyCharacters():void{
    this.characters=[];
    this.charactersDef=this.characters.concat(ReactiveFormComponent.charactersList);
  }
  private getDataFromService2():void{
    this.characterSvc.getDetails(1).subscribe(res=>{console.log(res)});
  }
 
}
