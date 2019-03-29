import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VendorService } from 'src/app/api/vendor.service';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/models/vendor.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vendor-account-form',
  templateUrl: './vendor-account-form.component.html',
  styleUrls: ['./vendor-account-form.component.scss']
})
export class VendorAccountFormComponent implements OnInit {

  @Input() vendor$: Observable<Vendor>;
  @Output() formSubmitEvent = new EventEmitter<Vendor>();

  public accountForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      doingBusinessAs: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      contactFirstName: new FormControl('', Validators.required),
      contactLastName: new FormControl('', Validators.required),
    });

    // populate form if we have a vendor bound to the form
    if (this.vendor$) {
      this.vendor$.subscribe((result: Vendor) => {
        this.accountForm.patchValue(result);
      });
    }

  }

  onSubmit() {

    if (!this.accountForm.valid) {
      return;
    }

    const vendor = this.buildVendor();

    this.formSubmitEvent.emit(vendor);
  }

  private buildVendor(): Vendor {

    const vendor = new Vendor();

    vendor.companyName = this.accountForm.controls['companyName'].value;
    vendor.doingBusinessAs = this.accountForm.controls['doingBusinessAs'].value;
    vendor.phoneNumber = this.accountForm.controls['phoneNumber'].value;
    vendor.contactFirstName = this.accountForm.controls['contactFirstName'].value;
    vendor.contactLastName = this.accountForm.controls['contactLastName'].value;

    return vendor;
  }
}
