import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { RouterModule} from '@angular/router'
import { CharacterComponent } from './character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'


@NgModule({
  declarations: [
    CharactersDetailsComponent,
    CharactersListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports:[
    CharactersDetailsComponent,
    CharactersListComponent,
    CharacterComponent
  ]
})
export class CharactersModule { }
