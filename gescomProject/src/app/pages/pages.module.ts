import { NgModule } from '@angular/core';
import {MaterialModule} from '../material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRouterModule } from './pages.routes';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        CoreModule,
        PagesRouterModule ],
    declarations: [   
        ContactComponent,
        AboutComponent,
        ServicesComponent
    ],
    exports: [
    ],
    providers: [
    ]
})
export class PagesModule {
}
