import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {

    result: Observable<number> = of(4);
    
    
}
