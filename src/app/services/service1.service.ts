import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private toaster : ToastrService) { }

  alertMessage(){
    this.toaster.success('Hi ! I am Alert box. I am coming from the service component');
  }
}
