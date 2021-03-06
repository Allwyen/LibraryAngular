import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewData()
  {
    return this.http.get("http://libraryapp-allwyen.herokuapp.com/bookall");
  }

  viewAuthors()
  {
    return this.http.get("http://libraryapp-allwyen.herokuapp.com/authorall");
  }
}
