import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ResultComponent } from '../result/result.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonsComponent, ResultComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
