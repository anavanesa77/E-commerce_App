import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit() {
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

    goToMenu() {
      this.router.navigateByUrl("/home");
    }

}
