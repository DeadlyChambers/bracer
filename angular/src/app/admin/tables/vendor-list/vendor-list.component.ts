import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouteUrls } from 'src/app/constants/routes';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/api/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;

  private unsubscribe$ = new Subject();

  public datasource: MatTableDataSource<Vendor>;
  public columnsToDisplay = ['vendorId', 'companyName', 'doingBusinessAs', 'phoneNumber', 'edit', 'view'];

  constructor(
    private readonly vendorApi: VendorService,
    private readonly router: Router) { }

  ngOnInit() {
    this.vendorApi
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((vendors: Vendor[]) => {
        this.datasource = new MatTableDataSource(vendors);
        this.datasource.sort = this.sort;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

  edit(id: number) {
    this.router.navigate(['/vendor', id, 'edit']);
  }

  view(id: number) {
    this.router.navigate(['/vendor', id, 'view']);
  }

  add() {
    this.router.navigateByUrl(RouteUrls.VendorCreateComponent);
  }
}
