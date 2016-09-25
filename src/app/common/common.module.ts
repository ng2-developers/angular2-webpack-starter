import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

import { AuthService } from './service/auth.service';

@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ NavBarComponent,
                FooterComponent ],
    declarations: [ NavBarComponent ,
                    FooterComponent ],
    providers: [AuthService],
})
export class CtlCommonModule { }
