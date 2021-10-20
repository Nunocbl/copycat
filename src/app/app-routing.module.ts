import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandManagerPage } from './modules/admin/pages/brand-manager-page/brand-manager-page.component';
import { NewProductPageComponent } from './modules/admin/pages/new-product-page/new-product-page.component';
import { SearchSelectComponent } from './webcomponent/search-select/search-select.component';

const routes: Routes = [
    {
        path: '',
        component: NewProductPageComponent,
    },
    {
        path: 'newbrand',
        component: BrandManagerPage,
    },
    {
        path: 'searchselect',
        component: SearchSelectComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
