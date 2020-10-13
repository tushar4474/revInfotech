import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentSecondComponent } from './component-second/component-second.component';
import { ComponentThirdComponent } from './component-third/component-third.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:'',redirectTo:'contacts',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'component-second',component:ComponentSecondComponent},
  {path:'component-third',component:ComponentThirdComponent},
  {path:'**',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
