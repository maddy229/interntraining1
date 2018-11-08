import { Injectable } from '@angular/core';
import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  success(){
   
    swal("Good job!", "You clicked the button!", "success");
  }

  error(){
    swal("Good job!", "You clicked the button!", "error");
  }

  warning(){
    swal("Good job!", "You clicked the button!", "warning");
  }

  info(){
    swal("Good job!", "You clicked the button!", "info");
  }

  question(){
    swal("Good job!", "You clicked the button!", "question");
  }
  
  
  
}

