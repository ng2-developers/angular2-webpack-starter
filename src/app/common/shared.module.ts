import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { ContactUsComponent }           from './contact-us/contact-us.component';
import { LiveChatComponent }            from './contact-us/live-chat.component';
import { FooterComponent }              from './footer.component';
import { NavBarComponent }              from './navbar.component';

@NgModule({
    imports: [ FormsModule,
    CommonModule],
    exports: [ ContactUsComponent,
                LiveChatComponent,
                FooterComponent,
                NavBarComponent ],
    declarations: [ ContactUsComponent,
                    LiveChatComponent,
                    FooterComponent,
                    NavBarComponent ],
    providers: []
})
export class SharedModule { }
