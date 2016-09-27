import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

import { AuthService } from './service/auth.service';
import { ProductsService } from './service/products.service';


@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ NavBarComponent,
                FooterComponent ],
    declarations: [ NavBarComponent ,
                    FooterComponent ],
    providers: [ AuthService,
                 ProductsService ],
})
export class CtlCommonModule { }
