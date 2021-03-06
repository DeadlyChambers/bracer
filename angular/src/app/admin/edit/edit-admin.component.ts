import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RouteUrls } from '../../constants/routes';
import { Admin } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/api/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject();
  public admin$: Observable<Admin>;
  public id: string;

  constructor(
    private readonly adminApi: AdminService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.admin$ = this.adminApi.get(this.id );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

  onSubmit(admin: Admin) {
    this.adminApi
      .put(this.id, admin)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((newAdmin: Admin) => {
        this.router.navigateByUrl(RouteUrls.AdminDashboardComponent);
      });
  }
}
