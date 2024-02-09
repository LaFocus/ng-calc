import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {

    result: Observable<number> = of(0);
    value: Observable<number> = of((50 + 5))

    computeValue() {
        this.value.subscribe((observer) => {
            this.result = of(observer)
        })
    }
    
}
