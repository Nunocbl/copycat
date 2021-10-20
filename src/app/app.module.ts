
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProductPageComponent } from './modules/admin/pages/new-product-page/new-product-page.component';
import { BrandManagerPage } from './modules/admin/pages/brand-manager-page/brand-manager-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchSelectComponent } from './webcomponent/search-select/search-select.component';


@NgModule({
  declarations: [
    AppComponent,
    NewProductPageComponent,
    BrandManagerPage,
    SearchSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
