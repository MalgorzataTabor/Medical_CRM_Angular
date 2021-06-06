import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, AppointmentService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  user = JSON.parse(sessionStorage.getItem('currentUser'));
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appointmentService: AppointmentService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.appointmentForm = this.formBuilder.group({
      userId: [this.user.id],
      date: ['', Validators.required],
      specialization: [''],
      clinic: [''],
      isOnline: [false]
    });
  }

  get f() { return this.appointmentForm.controls; }

  onSubmit() {
    this.submitted = true;

    if(this.appointmentForm.invalid) {
      return;
    }

    this.loading = true;
    this.appointmentService.makeAppointment(this.appointmentForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.alertService.success('Registration Succesful', true);
          this.router.navigate(['/user']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
    );
  }

}
