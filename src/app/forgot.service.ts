import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http:HttpClient) { }
  forgot(req:any){
    return this.http.post("http://127.0.0.1:5007/forgot",req)
  }
}
