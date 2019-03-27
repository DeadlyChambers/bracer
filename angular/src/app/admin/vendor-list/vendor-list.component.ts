import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { VendorService } from 'src/app/api/vendor.service';
import { Vendor } from 'src/app/models/vendor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();

  public columnsToDisplay = ['vendorId', 'companyName', 'doingBusinessAs', 'phoneNumber', 'edit'];

  public data: Vendor[];

  constructor(
    private readonly vendorApi: VendorService,
    private readonly router: Router) { }

  ngOnInit() {
    this.vendorApi
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((physicianList: Vendor[]) => {
        this.data = physicianList;
      });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

  edit(id: number) {
    this.router.navigate(['/vendor/edit', id]);
  }
}
