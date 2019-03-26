import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RouteUrls } from '../../constants/routes';
import { PhysicianService } from 'src/app/api/physician.service';
import { Address } from 'src/app/models/address.model';
import { Physician } from 'src/app/models/physician.model';
import { UserAccount } from 'src/app/models/user-account.model';


@Component({
  selector: 'app-create-physician',
  templateUrl: './create-physician.component.html',
  styleUrls: ['./create-physician.component.scss']
})
export class CreatePhysicianComponent implements OnInit, OnDestroy {

  public accountForm: FormGroup;
  private unsubscribe$ = new Subject();

  constructor(
    private readonly physicianApi: PhysicianService,
    private readonly router: Router) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmationPassword: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      contactFirstName: new FormControl('', Validators.required),
      contactLastName: new FormControl('', Validators.required),
      addressLineOne: new FormControl('', Validators.required),
      addressLineTwo: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

  onSubmit() {

    if (!this.accountForm.valid) {
      return;
    }

    const physician = this.buildPhysician();

    this.physicianApi
      .post(physician)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((newPhysician: Physician) => {
        this.router.navigateByUrl(RouteUrls.PhysicianDashboardComponent);
      });
  }

  private buildPhysician(): Physician {

    const physician = new Physician();
    physician.userAccount = new UserAccount();
    physician.address = new Address();

    physician.userAccount.userName = this.accountForm.controls['userName'].value;
    physician.userAccount.password = this.accountForm.controls['password'].value;
    physician.userAccount.confirmationPassword = this.accountForm.controls['confirmationPassword'].value;

    physician.firstName = this.accountForm.controls['firstName'].value;
    physician.lastName = this.accountForm.controls['lastName'].value;
    physician.phoneNumber = this.accountForm.controls['phoneNumber'].value;
    physician.contactFirstName = this.accountForm.controls['contactFirstName'].value;
    physician.contactLastName = this.accountForm.controls['contactLastName'].value;

    physician.address.addressLineOne = this.accountForm.controls['addressLineOne'].value;
    physician.address.addressLineTwo = this.accountForm.controls['addressLineTwo'].value;
    physician.address.city = this.accountForm.controls['city'].value;
    physician.address.state = this.accountForm.controls['state'].value;
    physician.address.zipCode = this.accountForm.controls['zip'].value;

    return physician;
  }
}
