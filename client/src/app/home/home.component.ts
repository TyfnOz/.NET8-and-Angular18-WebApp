import { Component} from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RegisterComponent]
})
export class HomeComponent{

  registerMode = false;

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  // returns to home page from register page.
  // 'event' value comes from (child) register comp. to (parent) home comp.
  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
