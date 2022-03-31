import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) {}
  public categories(){
    return this._http.get('${baseUrl}/categories/');
        }
}
