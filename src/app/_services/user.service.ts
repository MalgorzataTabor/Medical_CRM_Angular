import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../_models';

@Injectable ({providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    get(id: number) {
        return this.http.get(`http://localhost:8099/patients/${id}`);
    }

    register(user) {
        return this.http.post('http://localhost:8099/patients', user);
    }

    delete(id: number) {
        return this.http.delete(`http://localhost:8099/users/patients/${id}`);
    }
}