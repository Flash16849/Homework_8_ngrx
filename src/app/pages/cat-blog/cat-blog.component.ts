import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catFact } from 'src/app/models/cat.model';
import { CatFactService } from 'src/app/services/cat-fact.service';
import { catFactAction } from 'src/ngrx/actions/cat.action';
import { catFactState } from 'src/ngrx/states/cat.state';

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss']
})
export class CatBlogComponent implements OnInit{
  listFacts$: Observable<catFact[]>;

  constructor(private store: Store<{catFact: catFactState}>){
    this.listFacts$ = this.store.select((state) => state.catFact.catFact);
  }

  ngOnInit(): void {
    this.getCatFact();
  }

  async getCatFact(){
    this.store.dispatch(catFactAction.loadCatFact());
    
  }
}
