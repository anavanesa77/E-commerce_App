import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  formSignIn: FormGroup;
  loading: boolean = false;

  constructor(public fb: FormBuilder,
              private userService: UserService,
              private messageService: MessagesService,
              private router: Router) {

    this.formSignIn = this.fb.group({
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirpassword': new FormControl("", Validators.required)
    })
    
   }

  ngOnInit() {
  }

  async signIn(){
    //1.- Validamos que haya especificado campos
    if (this.formSignIn.invalid){        
        this.messageService.showMessage('Datos incompletos','Necesario especificar todos los datos');
        return;
    }

    var f = this.formSignIn.value;    

    //2.- Las password sean iguales
    if (f.password != f.confirpassword){
        this.messageService.showMessage('Error','Las passwords no son iguales');
        return;      
    }

    var user: User = {
       username: f.username,
       password: f.password
    }
    
    this.loading=true;
    this.userService.signIn(user).subscribe({
      next: (v) => {
        this.loading=false;
        this.messageService.showMessage('Registrado',`Usuario ${user.username} registrado con éxito.`);      
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading=false;
        this.messageService.message(e);
      }
    });
  }

}