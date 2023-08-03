import { catFact } from "src/app/models/cat.model";

export interface catFactState{
    catFact: catFact[];
    isLoading: boolean;
    error: string;
}