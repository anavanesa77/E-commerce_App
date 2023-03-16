import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  id: any;
  articleForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private articleService: ArticleService,
    private photoService: PhotoService,
    private activedRoute: ActivatedRoute,

  ) {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
  }

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

  deleteArticle(id) {
    console.log('Id=' + id);
    this.articleService.deleteArticle(id).subscribe(() => {
      this.ionViewWillEnter();
      console.log('Articulo eliminado');
    });
  }

  async submitForm() {
    this.deleteArticle(this.id);
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

}
