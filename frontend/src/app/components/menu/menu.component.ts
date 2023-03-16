import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public isAdmin:boolean= false;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.isAdmin=this.userService.isAdmin;
  }

}
