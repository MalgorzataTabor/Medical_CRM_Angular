import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models';

@Injectable ({ providedIn: 'root'})
export class AppointmentService {

    // user = JSON.parse(sessionStorage.getItem('currentUser'));
    
    constructor(private http: HttpClient) {
        
     }

    makeAppointment(appointment) {
        // let httpOption = {
        //     headers: new HttpHeaders({
        //         'Content-Type' : 'application/json',
        //         'Authorization' : this.user.authdata
        //     })
        // };
        return this.http.post(`http://localhost:8099/appointments`, appointment);
    }
}
