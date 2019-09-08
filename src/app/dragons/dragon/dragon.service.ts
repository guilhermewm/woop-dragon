import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Dragon } from "./dragon";
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class DragonService {

    API = environment.baseUrl;

    constructor(private http: HttpClient) {}
    
    listDragons(): Observable<Dragon[]> {
        return this.http
            .get<Dragon[]>(`${this.API}/`);       
    }

    getDragonById(id: string): Observable<Dragon> {
        return this.http
            .get<Dragon>(`${this.API}/${id}`); 
    }

    createDragon(dragon: Object): Observable<Dragon> {
        return this.http
            .post<Dragon>(`${this.API}`, dragon); 
    }

    updateDragon(dragon: Dragon): Observable<Dragon> {
        return this.http
            .put<Dragon>(`${this.API}/${dragon.id}`, dragon); 
    }

    deleteDragon(id: string): Observable<Dragon> {
        return this.http
            .delete<Dragon>(`${this.API}/${id}`); 
    }
}
