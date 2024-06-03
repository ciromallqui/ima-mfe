import { Component, EventEmitter, Output } from '@angular/core';
import { Skeleton } from '../../../model/helper/Skeleton';

@Component({
  selector: 'resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.scss'
})
export class ResultadoComponent {

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  activeIndex: number = 0;
  valor!: string;
  
  onClickPrevio() {
    this.close.emit(false);
  }
}
