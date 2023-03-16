import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.page.html',
  styleUrls: ['./administrator.page.scss'],
})
export class AdministratorPage implements OnInit {

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log('Página de administrador');
    console.log('this.userService.isAdmin');
    console.log(this.userService.isAdmin);
    if(this.userService.isAdmin==false){
       console.log('Redireccionamos a home, no es usuario administrador');
       this.router.navigateByUrl("/home");   
    }
  }

  goToList() {
    this.router.navigateByUrl("/list");
  }

  gotoUser(){
    this.router.navigateByUrl("/clientes");
  }

}

