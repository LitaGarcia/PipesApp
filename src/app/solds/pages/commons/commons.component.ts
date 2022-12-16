import { Component } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styleUrls: ['./commons.component.css'],
})
export class CommonsComponent {
  nombreLower: string = 'lita';
  nombreCompleto: string = 'litA gaRcia yebra';
  nombreUpper: string = 'LITA';
  fecha: Date = new Date();
}
