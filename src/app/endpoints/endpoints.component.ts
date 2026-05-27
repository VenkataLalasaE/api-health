import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';

@Component({

  selector: 'app-endpoints',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],

  templateUrl:
    './endpoints.component.html',

  styleUrl:
    './endpoints.component.css'

})

export class EndpointsComponent {

  endpoints: any[] = [];

  id = '';

  name = '';

  url = '';

  method = '';

  headers = '';

  requestBody = '';

  authentication = '';

  monitoringInterval = '';

  isActive = true;

  baseUrl =
    'http://localhost:8080/api/endpoints';

  constructor(private http: HttpClient) {}

  getAllEndpoints() {

    this.http
      .get<any[]>(this.baseUrl)
      .subscribe(data => {

        this.endpoints = data;

      });

  }

  getById() {

    this.http
      .get<any>(
        this.baseUrl + '/' + this.id
      )
      .subscribe(data => {

        this.endpoints = [data];

      });

  }

  create() {

    const body = {

      name: this.name,

      url: this.url,

      method: this.method,

      headers: this.headers,

      requestBody: this.requestBody,

      authentication: this.authentication,

      monitoringInterval:
        this.monitoringInterval,

      isActive: this.isActive

    };

    this.http
      .post(this.baseUrl, body)
      .subscribe(() => {

        alert('Created');

      });

  }

  update() {

    const body = {

      name: this.name,

      url: this.url,

      method: this.method,

      headers: this.headers,

      requestBody: this.requestBody,

      authentication: this.authentication,

      monitoringInterval:
        this.monitoringInterval,

      isActive: this.isActive

    };

    this.http
      .put(
        this.baseUrl + '/' + this.id,
        body
      )
      .subscribe(() => {

        alert('Updated');

      });

  }

  delete() {

    this.http
      .delete(
        this.baseUrl + '/' + this.id
      )
      .subscribe(() => {

        alert('Deleted');

      });

  }

}