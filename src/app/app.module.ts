import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ComponentThirdComponent } from './component-third/component-third.component';
import { UserDirective } from './directives/user.directive';
import { ComponentSecondComponent } from './component-second/component-second.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    ComponentThirdComponent,
    UserDirective,
    ComponentSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
