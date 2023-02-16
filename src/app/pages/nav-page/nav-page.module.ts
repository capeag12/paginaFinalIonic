import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavPagePageRoutingModule } from './nav-page-routing.module';

import { NavPagePage } from './nav-page.page';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavPagePageRoutingModule
  ],
  declarations: [NavPagePage]
})
export class NavPagePageModule {}
