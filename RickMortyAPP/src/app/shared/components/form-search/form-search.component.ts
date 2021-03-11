import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styles: ['input width:100%;']
})
export class FormSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSearch(value:string){
    console.log('buscando -> ',value)

    if (value && value.length > 3){
      this.router.navigate(['/character-list'], {
        queryParams:{q:value}
      })
    }

  }

}
