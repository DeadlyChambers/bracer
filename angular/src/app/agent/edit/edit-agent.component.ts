import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RouteUrls } from 'src/app/constants/routes';
import { Subscription, Subject } from 'rxjs';
import { UserService } from '../../api/user.service';
import { User } from '../../models/user.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.scss']
})
export class EditAgentComponent implements OnInit, OnDestroy {

  public accountForm: FormGroup;
  private unsubscribe$ = new Subject();

  constructor(
    private readonly userApi: UserService,
    private readonly router: Router) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password_confirm: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      middle_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

  onSubmit() {

    if (!this.accountForm.valid) {
      return;
    }

    const user = this.buildUser();

    this.userApi
      .put(user)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((newUser: User) => {
        this.router.navigateByUrl(RouteUrls.AdminDashboardComponent);
      });
  }

  private buildUser(): User {
    const user = new User();
    user.username = this.accountForm.controls['userName'].value;
    user.password = this.accountForm.controls['password'].value;
    user.confirmationPassword = this.accountForm.controls['confirmationPassword'].value;
    user.firstName = this.accountForm.controls['firstName'].value;
    user.lastName = this.accountForm.controls['lastName'].value;

    return user;
  }
}