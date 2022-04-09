import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

    userCount = new BehaviorSubject<number>(0);
    adminCount = new BehaviorSubject<number>(0);

}
