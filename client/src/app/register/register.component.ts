import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // to be able to use AccountController and to register
  private accountService = inject(AccountService);

  // @Input() usersFromHomeComponent: any;          
  // usersFromHomeComponent = input.required<any>();
  // above 2 comment lines are 2 different ways to getting input from parent comp. 
  // (from home comp. in this case)
  
  private toastr = inject(ToastrService);

  // @Output cancelRegister = new EventEmitter();
  cancelRegister = output<boolean>();
  // above 2 lines are 2 different ways to sending input to parent comp. 
  // from (child) register comp. to (parent) home comp.

  model: any = {};

  register(){
    this.accountService.register(this.model).subscribe({
      next: response =>{
        console.log(response);
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
