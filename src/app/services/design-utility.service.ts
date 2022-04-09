import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

   uName = new BehaviorSubject<string>('Mukesh Verma');

  constructor(private http: HttpClient) { }

  public baseUrl = 'https://jsonplaceholder.typicode.com/users';

  getUsers(){
    return this.http.get(this.baseUrl).pipe(map((res:any) => {
        return res;
      })
    )}
  }
