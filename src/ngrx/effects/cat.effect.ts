import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { CatFactService } from 'src/app/services/cat-fact.service';
import { catFactAction } from '../actions/cat.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { catFact } from 'src/app/models/cat.model';

@Injectable()
export class catFacEffect {
  constructor(private actions$: Actions, private catService: CatFactService) {}

  loadCatFact$ = createEffect(() =>
    this.actions$.pipe(
        ofType(catFactAction.loadCatFact),
      
        switchMap(() => this.catService.getFact(140, 10).pipe(
            switchMap((catFact: any) => {
                return this.catService.getImg(10).pipe(
                    map((factImg: any) => {     
                        catFact = catFact['data'].map((catFact: catFact, index: number) => {
                            return {...catFact, imgUrl: factImg[index]['url']};
                        });
                        
                        
                        return catFactAction.loadCatFactSuccess(catFact);
                    }),
                    catchError((error: string) => {
                        return of(catFactAction.loadCatFactFailure(error));
                    })
                );
            })
        )),
      )
    );


}