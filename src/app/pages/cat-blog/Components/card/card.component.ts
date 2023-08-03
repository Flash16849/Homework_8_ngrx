import { Component, Input } from '@angular/core';
import { catFact } from 'src/app/models/cat.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  catFact!: catFact;

  time: number = Date.now();

}
