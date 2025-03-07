import { Routes } from '@angular/router';

import { ProductDetailsComponent } from './Components/ProductComponents/product-details/product-details.component';
import { CartComponent } from './Components/ProductComponents/cart/cart.component';
import { ProductsComponent } from './Components/ProductComponents/products/products.component';
import { AboutComponent } from './Components/defaultComponents/about/about.component';
import { ContactUsComponent } from './Components/defaultComponents/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/defaultComponents/not-found/not-found.component';

export const routes: Routes =
 [
  {path:"",component:ProductsComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactUsComponent},
  {path:"prodDetails/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"**",component:NotFoundComponent}
];
