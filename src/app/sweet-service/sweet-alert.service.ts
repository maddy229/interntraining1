import { Injectable } from '@angular/core';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  success(){
   
    //swal("Good job!", "You clicked the button!", "success");

    

    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      
      showCancelButton: true,
      showConfirmButton:true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      cancelButtonColor: "#DD6B55",
     
    });
  }

  error(){
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
    });
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

