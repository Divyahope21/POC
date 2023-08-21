import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule,FormGroupDirective, ReactiveFormsModule,NgForm, FormGroup} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector:'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent  {
    form: FormGroup;

    constructor(private fb: FormBuilder , private router: Router
      ) {
        
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      
       
      });
    }
   
  

    hasError(controlName: string, errorName: string): boolean {
      return this.form.get(controlName)?.hasError(errorName);
      this.form.reset();
    }
  
    onSubmit() {
      if (this.form.valid) {
        console.log('Form submitted successfully!');
       
        this.router.navigate(['/shops']);
        this.form.reset();
        this.form.reset();

      } else {
        console.log('Form is invalid!');
      }
    }
    onSignUp() {
        console.log('Sign Up button clicked');
        this.router.navigate(['/user']);
      }
    }
  