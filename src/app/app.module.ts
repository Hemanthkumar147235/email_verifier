import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RouterModule,Routes } from '@angular/router';

 const routes:Routes=[
  //{path:'',component:AuthenticationComponent},
  {path:'subscribe',component:SubscribeComponent}
 ]

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SubscribeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
