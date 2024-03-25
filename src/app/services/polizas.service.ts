import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPolizas } from '../interfaces/polizas';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PolizasService {

  constructor(private http: HttpClient) { }

  findOne(id: string) {
    return this.http.get<IPolizas[]>(`${URL}aseguradoras/${id}`)
  }

  getPolizas() {
    return this.http.get<IPolizas[]>(`${URL}aseguradoras`)
  }

  update(body: IPolizas, id: string) {
    return this.http.patch<IPolizas[]>(`${URL}aseguradoras/${id}`, body)
  }

  create(body: IPolizas) {
    return this.http.post<IPolizas[]>(`${URL}aseguradoras`, body)
  }

  delete(id: string) {
    return this.http.delete<IPolizas[]>(`${URL}aseguradoras/${id}`)
  }

  sentPhoto(capturedPhoto: any) {
    const formData = new FormData();
    formData.append('file', capturedPhoto);

    return this.http.post<{ "path": string, fieldname: string, filename: string, }>(`${URL}aseguradoras/upload`, formData)
  }
}
