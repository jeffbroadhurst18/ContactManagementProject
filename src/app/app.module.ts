import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

import { RoutingModule } from './routing.module';
import { ContactModule } from './contact/contact.module';
import { ContactListModule } from './contact-list/contact-list.module';

import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ContactService } from './service/contact.service';
import { UserService } from './service/user.service';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth/auth.guard';
import { API_CONFIG, APP_CONFIG } from './api-provider/app.apiconfig';
import { UserModule } from './user/user.module';
import { UserListModule } from './user-list/user-list.module';
import { WildcardRoutingModule } from './wildcard.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ContactModule, RoutingModule, PageNotFoundModule, ContactListModule,
    LoginModule, HttpModule, FormsModule, ReactiveFormsModule, UserModule, UserListModule,
    WildcardRoutingModule
  ],
  providers: [ContactService, UserService, AuthGuard, { provide: APP_CONFIG, useValue: API_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }

