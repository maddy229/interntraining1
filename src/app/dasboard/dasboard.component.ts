import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})


export class DasboardComponent implements OnInit {

  dashboardForm: FormGroup;
  constructor(private dataservice: DataService) { }

  phoneNumber = new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]);
  email = new FormControl('', [Validators.required, Validators.email]);


  getErrorMessageEm() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePhn(){
    return this.phoneNumber.hasError('required')? 'You must enter a value' :
    this.phoneNumber.hasError('maxlength')? 'Required 10 digit':
    this.phoneNumber.hasError('minLength')? 'Required 10 digit':
    '';
  }
  

  ngOnInit() {

    this.dashboardForm = new FormGroup({
      firstName: new FormControl()
    });
  }

  
  onSubmit() {
    // this.dataservice.AddData()
  }
}
