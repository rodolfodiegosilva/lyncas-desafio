import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  public userDetails:any;
  signInForm:any;
  constructor(private formBuilder:FormBuilder,private router:Router) { this.onInitSignInForm();}

  ngOnInit(): void {
    if(false){
      this.router.navigate(['/home']);
    }
  }
  onInitSignInForm(){
    this.signInForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  public getEmail(){
    return this.signInForm.get('email');
  }
  public getPassword(){
    return this.signInForm.get('password');
  }
  onSubmitSignInForm(){
   // this.service.signIn(this.signInForm.value.email,this.signInForm.value.password);
  }
}
