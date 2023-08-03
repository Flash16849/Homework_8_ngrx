import { createReducer, on } from "@ngrx/store";

import { catFactAction } from "../actions/cat.action";
import { catFactState } from "../states/cat.state";

export const initialState: catFactState = {
    catFact: [],
    isLoading: false,
    error: ''
};

export const catFactReducer = createReducer(
    initialState,
    on(catFactAction.loadCatFact, (state) => ({...state, isLoading: true})),
    on(catFactAction.loadCatFactSuccess, (state, {catFact}) => ({
        ...state, catFact: catFact, isLoading: false}
    )),
    on(catFactAction.loadCatFactFailure, (state, {error}) => ({
        ...state, isLoading: false,
    }
    ))
)
