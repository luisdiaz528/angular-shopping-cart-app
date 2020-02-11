import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-new-dvd',
  templateUrl: './add-new-dvd.component.html',
  styleUrls: ['./add-new-dvd.component.css']
})
export class AddNewDvdComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddNewDvdComponent>,
    private notifierService: NotifierService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      genre: [null, Validators.required],
      image_url: [null],
      price: [null, Validators.required],
      title: [null, Validators.required],
      qty: [null, Validators.compose([Validators.required, Validators.min(1)])] 
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  submit() {
    if (this.form.status === 'INVALID') {
      return;
    } else {
      this.notifierService.notify('info', 'A new DVD has been added to the collection!');
      this.dialogRef.close();
    }
  }

}
