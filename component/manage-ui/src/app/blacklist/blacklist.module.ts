import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlacklistRoutes} from './blacklist.routes';
import {SharedModule} from '../shared/shared.module';
import {BlacklistMainComponent} from './blacklist-main/blacklist-main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

@NgModule({
    imports: [
        CommonModule,
        BlacklistRoutes,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        TooltipModule.forRoot()
    ],
    declarations: [
        BlacklistMainComponent
        ]
})
export class BlacklistModule {
}