import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

// const routes: Routes = [
//  // Redirect to login by default
//   { path: '', component: AuthenticationComponent },
//   { path: 'subscribe', component: SubscribeComponent }
// ];

@NgModule({
 // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
