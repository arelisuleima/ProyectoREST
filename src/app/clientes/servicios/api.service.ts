import { Injectable } from "@angular/core";
import { Frase } from "../modelos/frase";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private frase: Frase = { empno: "", ename: "", job: "", mgr: "" };
  private ClienteUrl = "https://apex.oracle.com/pls/apex/areli_arias/emp/hol/"; // URL to web api

  constructor(private http: HttpClient) {}

  public getFrase(): Observable<Frase> {
    return this.http.get<Frase>(this.ClienteUrl);
  }
}
