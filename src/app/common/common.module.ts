import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { NavBarComponent }              from './navbar.component';
import { FooterComponent }              from './footer.component';
import { ContactUsComponent }           from './contact-us/contact-us.component';
import { LiveChatComponent }            from './contact-us/live-chat.component';

import { AuthService } from './service/auth.service';
import { ProductsService } from './service/products.service';


@NgModule({
    imports: [ FormsModule,
                CommonModule
                ],
    exports: [  ContactUsComponent,
                LiveChatComponent,
                FooterComponent,
                NavBarComponent ],
    declarations: [ ContactUsComponent,
                    LiveChatComponent,
                    FooterComponent,
                    NavBarComponent ],
    providers: [ AuthService,
                 ProductsService ],
})
export class CtlCommonModule { }
