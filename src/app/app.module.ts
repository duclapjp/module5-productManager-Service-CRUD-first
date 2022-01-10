import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {FormsModule} from "@angular/forms";
import {DetailComponent} from './detail/detail.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {UploadfileComponent} from './uploadfile/uploadfile.component';
import {PageProductComponent} from './page-product/page-product.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {SearchProductComponent} from './search-product/search-product.component';
import {ProductListComponent} from './socket-product/product-list/product-list.component';
import {ChatComponent} from './chat/chat.component';
import {MapComponent} from './map/map.component';
import { MessageChatComponent } from './message-chat/message-chat.component';
import {MatCardModule} from "@angular/material/card";
import { MessageChatDetailComponent } from './message-chat/message-chat-detail/message-chat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductComponent,
    DetailComponent,
    EditProductComponent,
    DeleteProductComponent,
    UploadfileComponent,
    PageProductComponent,
    SearchProductComponent,
    ProductListComponent,
    ChatComponent,
    MapComponent,
    MessageChatComponent,
    MessageChatDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
