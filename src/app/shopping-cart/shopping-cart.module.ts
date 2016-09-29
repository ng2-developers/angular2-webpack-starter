import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { ShoppingCartComponent }        from './shopping-cart.component';

@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ ShoppingCartComponent],
    declarations: [ ShoppingCartComponent],
    providers: []
})
export class ShoppingCartModule { }
