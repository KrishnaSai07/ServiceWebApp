import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlansModel } from '../model/plans-model';
import { Customer } from '../model/customer';
import { Complaints } from '../model/complaints';
import { Billing } from '../model/billing';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl: string;
  baseUrl1: string;
  baseUrl2: string;
  baseUrl3: string;
  baseUrl4: string;
  baseUrl5: string;
  baseUrl6: string;
  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:9798/plans';
    this.baseUrl1 = 'http://localhost:9798/customer';
    this.baseUrl2 = 'http://localhost:9798/complaint';
    this.baseUrl3 = 'http://localhost:9798/customer/update';
    this.baseUrl4 = 'http://localhost:9798/customerId';
    this.baseUrl5 = 'http://localhost:9798/planId';
    this.baseUrl6 = 'http://localhost:9798/bills';
  }

  getBaseUrlById(id: number): string {
    return this.baseUrl + '/' + id;
  }

  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + '/' + field + '/' + value;
  }

  getBaseUrlById4(id: string): string {
    return this.baseUrl4 + '/' + id;
  }

  getBaseUrlById5(id: string): string {
    return this.baseUrl5 + '/' + id;
  }


  getAllPlans(): Observable<PlansModel[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  searchPlans(field: string, value: string): Observable<PlansModel[]> {
    return this.http.get(this.getSearchUrl(field, value)).pipe(
      map(data => data.json())
    );
  }

  getCustomer(): Observable<Customer[]> {
    return this.http.get(this.baseUrl1).pipe(
      map(data => data.json())
    );
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }
  addComplaint(complaint: Complaints): Observable<Complaints> {
    return this.http.post(this.baseUrl2, JSON.stringify(complaint), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put(this.baseUrl3, JSON.stringify(customer), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get(this.getBaseUrlById4(id)).pipe(
      map(data => data.json())
    );
  }

  getPlanById(id: string): Observable<PlansModel> {
    return this.http.get(this.getBaseUrlById5(id)).pipe(
      map(data => data.json())
    );
  }

  getAllBills(): Observable<Billing[]> {
    return this.http.get(this.baseUrl6).pipe(
      map(data => data.json())
    );
  }


}
