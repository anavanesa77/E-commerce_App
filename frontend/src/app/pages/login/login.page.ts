import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from 'src/app/interfaces/user';
import { MessagesService } from '../../services/messages.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  loading: boolean = false;

  constructor(public fb: FormBuilder,
              private userService: UserService,
              private messageService: MessagesService,
              private router: Router) { 

    this.formLogin = this.fb.group({
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });

  }

  ngOnInit() {
  }

  async logIn(){
    //1.- Validamos que haya especificado campos
    if (this.formLogin.invalid){        
      this.messageService.showMessage('Datos incompletos','Necesario especificar todos los datos');
      return;
    }    

    var f = this.formLogin.value;    
    var user: User = {
      username: f.username,
      password: f.password
   }    

    this.loading=true;
    this.userService.isAdmin=false;
    this.userService.login(user).subscribe({
      next: (token) => {
        this.loading=false;
        if (f.username =='Vanesa'){
            this.userService.isAdmin=true;
        }
        else
        {
          this.userService.isAdmin=false;
        }
        this.router.navigate(['/home']);        
        localStorage.setItem('token', token);
      },
      error: (e:HttpErrorResponse)=> {
        this.loading=false;
        this.messageService.message(e);
      }  
    });
        
  }

}