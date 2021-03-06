import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { EmailService } from 'src/app/services/api/email.service';

export class SendEmailDialogData {
  documentId: string;
}


@Component({
  selector: 'app-send-email-dialog',
  templateUrl: './send-email-dialog.component.html',
  styleUrls: ['./send-email-dialog.component.scss']
})
export class SendEmailDialogComponent implements OnInit, OnDestroy {


  public form: FormGroup;
  private unsubscribe$ = new Subject();

  constructor(
    private readonly emailApi: EmailService,
    public dialogRef: MatDialogRef<SendEmailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendEmailDialogData) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      emailAddress: new FormControl('', Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save() {
    const emailAddress = this.form.controls['emailAddress'].value;

    this.emailApi.post(this.data.documentId, emailAddress);

  }

}
