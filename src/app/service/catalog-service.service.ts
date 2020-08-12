import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {
  // headers = { 'Content-Type': 'multipart/form-data'};
  constructor(private httpClient: HttpClient) { }
  public addCatalog(formData: FormData): Observable<any>{
    console.log('Form Data' + formData.has('file'));
    return this.httpClient.post('http://localhost:8011/product/load', formData);
    // return this.httpClient.post('http://localhost:8011/product/save', formData);
  }
}
