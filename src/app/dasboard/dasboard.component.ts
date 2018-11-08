import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator,FormBuilder} from '@angular/forms';
import { DataService } from '../data.service';


import { SweetAlertService } from '../sweet-service/sweet-alert.service';
import { Scroll2TopService} from'../scroll2Top/scroll2-top.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})


export class DasboardComponent implements OnInit {

  dashboardForm: FormGroup;
  private myForm: FormGroup;
  constructor(private dataservice: DataService,private formBuilder: FormBuilder,private sweetservice:SweetAlertService, private scroll2Top :Scroll2TopService) { }
  
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
  
  func1(){
 
   this.sweetservice.success();
  }
  func2(){
 
    this.sweetservice.error();
   }

   func3(){
 
    this.sweetservice.warning();
   }

   func4(){
 
    this.sweetservice.info();
   }
   func5(){
 
    this.sweetservice.question();
   }

   func6()
   {
    this.scroll2Top.s2t();
   }
  ngOnInit() {

    
    this.dashboardForm = new FormGroup({
      firstName: new FormControl()
    });
    this.myForm = this.formBuilder.group({
      myPhone: ['', Validators.required]
      // other controls are here...
  });

  
  }

  
  onSubmit() {
    // this.dataservice.AddData()
  }
}
