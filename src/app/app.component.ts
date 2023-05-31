import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <----

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-get';
  totalAngularPackages; // <---
  url: string = '';
  error;

  constructor(private http: HttpClient) { } // <---

  ngOnInit() {   // <---
    console.log("ngOnInit()");
    this.http.get<any>(this.url).subscribe(data => {
       this.totalAngularPackages = data.total;
    },error => this.error = error);
  }

  //
  onSubmit() { // <----
    console.log("onSubmit(): this.totalAngularPackages: "+this.totalAngularPackages);
  }
}

