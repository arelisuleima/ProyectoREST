import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../servicios/api.service";
import { Frase } from "../../modelos/frase";

@Component({
  selector: "app-verfrase",
  templateUrl: "./verfrase.component.html",
  styleUrls: ["./verfrase.component.css"]
})
export class VerfraseComponent implements OnInit {
  public frase: Frase = { empno: "", ename: "", job: "", mgr: "" };

  constructor(private apiservice: ApiService) {
    //console.log("VerfraseComponent::constructor()");
  }

  /*public fraseRecibida(frase: Frase) {
    console.log("fraseRecibida. " + frase.value);
    this.frase = frase;
    debugger;
  } */

  ngOnInit() {
    this.apiservice.getFrase().subscribe(frase => (this.frase = frase));
    console.log("ngOnInit. FIN");
    //this.apiservice.getFrase().subscribe(this.fraseRecibida);
  }
}

