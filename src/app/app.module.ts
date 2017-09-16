import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule,JsonpModule } from '@angular/http';

import { RoutingModule } from './routing.module';
import { ContactModule } from './contact/contact.module';
import { ContactListModule } from './contact-list/contact-list.module';

import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ContactService } from './service/contact.service';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth/auth.guard';
import { API_CONFIG, APP_CONFIG } from './api-provider/app.apiconfig';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, ContactModule, RoutingModule, PageNotFoundModule, ContactListModule,
    LoginModule,HttpModule,FormsModule,ReactiveFormsModule
  ],
  providers: [ContactService, AuthGuard, { provide: APP_CONFIG, useValue: API_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }

