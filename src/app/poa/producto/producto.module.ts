import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/app.module';
import { PrimeroComponent } from './primero/primero.component';
import { ProductoComponent } from './producto.component';

@NgModule({
  imports: [
    CommonModule,
    ProductoRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [ PrimeroComponent,ProductoComponent]
})
export class ProductoModule { }
