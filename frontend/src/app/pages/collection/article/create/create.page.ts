import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  articleForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";
  alertController: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private articleService: ArticleService,
    private photoService: PhotoService,

  ) { }

  ionViewWillEnter() {
    this.articleForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      collection: ['', [Validators.required]],
      size: ['', [Validators.required]],
      colour: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.articleForm.controls;
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

 // onSubmit() {
 //  this.articleService.createArticles(this.articleForm.value)
 //     .subscribe(response => {
 //       this.zone.run(() => {
 //         this.articleForm.reset();
 //         this.router.navigate(['/list']);
 //       });
 //     });
 // }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.articleForm.valid) {
      console.log('Es necesario que rellene estos datos')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }
      this.articleService.createArticles(this.articleForm.value, blob).subscribe(data => {
        console.log("Foto enviada");
        this.router.navigate(['/list']);
      })
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Atención!',
      message: 'Artículo agregado',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
