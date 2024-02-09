import { Component, inject } from '@angular/core';
import { MainService } from "../../services/main.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  result: number = 0

  mainServie = inject(MainService)

  ngOnInit() {
    this.mainServie.result.subscribe((observer: any) => {
      this.result = observer
    })
  }
}
