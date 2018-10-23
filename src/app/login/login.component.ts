import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: string;

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  return = '';

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/dashboard');
    this.buildLoginForm();
  }

  /**
	 * builds the login form
	 */
  buildLoginForm() {
    this.loginForm = this.fb.group({
      'email': ['',[Validators.required,Validators.email]],
      'password': ['', Validators.required]
    });
  }

  loginHandler(user) {
    if(user.email == "admin@eezeeorder.com" && user.password == "root"){
      this.authService.isLogged=true;
      this.router.navigateByUrl("dashboard");
    }
    else{
      this.errorMessage = "Unauthorised User";
    }
  }
 
}
