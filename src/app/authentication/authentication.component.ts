import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  constructor(private router: Router) { }
   subbb:boolean=false;

  userodaform= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.maxLength(50),Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(50),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)])
  })
  
  tosee(){
    this.subbb=true;
    console.log(this.userodaform.value)
    console.log(this.subbb);
  }
  navigatefunc(){
    
    this.router.navigate(['/subscribe'])
  }
get email(){
  return this.userodaform.get('email')
}
get password(){
  return this.userodaform.get('password');
}

}
