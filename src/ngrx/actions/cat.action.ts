import { createAction } from "@ngrx/store";
import { catFact } from "src/app/models/cat.model";

export const catFactAction = {
    loadCatFact: createAction('[Cat Fact] Load Cat Fact'),
    loadCatFactSuccess: createAction(
        '[Cat Fact] Load Cat Fact Success',
        (catFact: catFact[]) => ({catFact})
    ),
    loadCatFactFailure: createAction(
        '[Cat Fact] Load Cat Fact Failure',
        (error: string) => ({error})
    ),

    
}