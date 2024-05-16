import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeIndex: number = 1;
  mostrarMenu: boolean = true;
  opciones: string = 'I';

  onSelectCard(opcion: string) {
    this.opciones = opcion;
  }
}
