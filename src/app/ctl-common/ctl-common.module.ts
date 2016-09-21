import { NgModule }     from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ NavBarComponent,
                FooterComponent ],
    declarations: [ NavBarComponent ,
                    FooterComponent ],
    providers: [],
})
export class CtlCommonModule { }
