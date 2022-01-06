import {Component, OnInit} from '@angular/core';
import {Product} from "../interface/product";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = {
    id:0,
    code: '',
    name: '',
    description: '',
    img:''
  };
  id: number = 0;
  selectedImage = null;
  imgSrc = "";
  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private route: Router,
              private storage: AngularFireStorage) {
    this.activateRoute.paramMap.subscribe(paraMap => {
      this.id = Number(paraMap.get('id'));
      this.productService.getProductById(this.id).subscribe(product =>{
        this.product = product;
      });
    })
  }

  ngOnInit(): void {
  }

  editProduct(id: number) {
    this.productService.editProduct(id, this.product).subscribe(()=>{
      this.route.navigateByUrl('/list')
    })
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
