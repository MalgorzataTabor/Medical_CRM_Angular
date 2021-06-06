import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService} from '../_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loading = false;
  user = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.loading = true;
    this.userService.get(this.user.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.user = user;
    });
  }

}
