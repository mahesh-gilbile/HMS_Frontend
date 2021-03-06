import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppMaterialModule } from "../app-material.module";
import { AppRoutingModule } from "../app-routing.module";
import { MessComponent } from "./mess.component";
import { MessDashboardComponent } from './mess-dashboard/mess-dashboard.component';
import { MessHeaderComponent } from './Mess-Layout/mess-header/mess-header.component';
import { MessSideNavComponent } from './Mess-Layout/mess-side-nav/mess-side-nav.component';
import { MessQRComponent } from './mess-qr/mess-qr.component';
import { MessMenuComponent } from './mess-menu/mess-menu.component';
import { QRCodeModule } from "angular2-qrcode";
import { MessChangePasswordComponent } from './mess-change-password/mess-change-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessWeeklyMenuComponent } from './mess-weekly-menu/mess-weekly-menu.component';
import { MessMenuEditComponent } from './mess-weekly-menu/mess-menu-edit/mess-menu-edit.component';
import { MessApplyLeaveComponent } from './mess-apply-leave/mess-apply-leave.component';
import { MessTodayHistoryComponent } from './mess-today-history/mess-today-history.component';
import { MessQrHistoryComponent } from './mess-qr-history/mess-qr-history.component';

@NgModule({
  declarations: [
    MessComponent,
    MessDashboardComponent,
    MessHeaderComponent,
    MessSideNavComponent,
    MessQRComponent,
    MessMenuComponent,
    MessChangePasswordComponent,
    MessWeeklyMenuComponent,
    MessMenuEditComponent,
    MessApplyLeaveComponent,
    MessTodayHistoryComponent,
    MessQrHistoryComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [
    DatePipe
  ]
})

export class MessModule { }
