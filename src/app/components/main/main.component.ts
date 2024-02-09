import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
