import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer.model';
import { Vendor } from '../model/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginAsVendorApi: string;
  loginAsCustomerApi: string;

  constructor(private http: HttpClient) {
    this.loginAsVendorApi = environment.serverUrl + 'vendor/';
    this.loginAsCustomerApi = environment.serverUrl + 'customer/';
  }

  loginAsVendor(username: string, password: string):Observable<Vendor> {
    return this.http.get<Vendor>(this.loginAsVendorApi+username+"/"+password);
  }
  
  loginAsCustomer(username: string, password: string):Observable<Customer> {
    return this.http.get<Customer>(this.loginAsCustomerApi+username+"/"+password);
  }
}
