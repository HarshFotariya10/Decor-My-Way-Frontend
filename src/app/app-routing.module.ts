import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

import { SalesComponent } from './Pages/sales/sales.component';
import { FurnitureComponent } from './Pages/Product/furniture/furniture.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { DecoritemsComponent } from './Pages/Product/decoritems/decoritems.component';
import { CartComponent } from './Pages/cart/cart.component';
import { AccountComponent } from './Pages/account/account.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'furniture',
    component:FurnitureComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'decoritems',
    component:DecoritemsComponent
  },{
    path:'cart',
    component:CartComponent
  },{
    path:'profile',
    component:AccountComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
