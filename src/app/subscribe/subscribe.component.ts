import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  constructor(private router:Router){}
  @Input('subbbinput') subbb!: boolean;
 
  tosee(){
    
    this.router.navigateByUrl('')    

  }
}
