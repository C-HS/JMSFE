import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {
  // headers = { 'Content-Type': 'multipart/form-data'};
  baseUrl: string = environment.baseUrl;
  moduleUrl = `${this.baseUrl}/product`;
  constructor(private httpClient: HttpClient) { }
  public addCatalog(formData: FormData): Observable<any>{
    console.log('Form Data' + formData.has('file'));
    return this.httpClient.post(`${this.moduleUrl}/load`, formData);
  }
  public getAllCatalg(): Observable<any>{
    return this.httpClient.get(`${this.moduleUrl}/getAllCatalogs`);
  }
  public getCatalog(id: number): Observable<any>{
    return this.httpClient.get(`${this.moduleUrl}/getCatalog/${id}`);
  }
  public deleteCatalog(id: number): Observable<any>{
    return this.httpClient.delete(`${this.moduleUrl}/deleteCatalog/${id}`);
  }
  public updateCatalog(formData: FormData): Observable<any>{
    return this.httpClient.put(`${this.moduleUrl}/updateCatalog`,formData);
  }
}
