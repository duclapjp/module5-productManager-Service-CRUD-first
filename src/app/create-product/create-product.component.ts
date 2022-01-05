import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import {url} from "inspector";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    id: 0,
    code: '',
    name: '',
    description: '',
    img: ''
  };
  selectedImage = null;
  imgSrc = "";

  constructor(private productService: ProductService, private route: Router, private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  createNewProduct() {
    this.productService.createNewProduct(this.product).subscribe(() => {
      this.route.navigateByUrl('/list')
    });
  }

  uploadFile() {
    if (this.selectedImage != null) {
      // @ts-ignore
      const filePath = `${this.selectedImage.name.split('.').splice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.imgSrc = url;
          this.product.img = this.imgSrc;
        });
      })).subscribe();
    }
  }
  showPreView(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgSrc = event.target.result;
        this.product.img = this.imgSrc;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.uploadFile();
    } else {
      this.selectedImage = null;
    }
  }
}
