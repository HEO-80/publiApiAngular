import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface EntradasItem{
  HTTPS: boolean;
  API: string;
  Description: string;
  Auth: string;
  cors: string;
  Link: string;
  Category: string;
}

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit{
  entradas: EntradasItem[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<EntradasItem[]>('http://localhost:8080/entradas').subscribe(
      (response) => {
        this.entradas = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
