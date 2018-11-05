import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  logoUrl: string;
  field: string = "speed";
  srchValue: string = "";
  constructor(
    private router: Router
  ) {
    this.title = "WebServicePortal";
    this.logoUrl = "/assets/images/port.png";
  }

  doSearch() {
    this.router.navigate(["/listPackages"], { queryParams: { field: this.field, srchValue: this.srchValue } });
  }

  doChangeField(field, ele) {
    this.field = field;
    this.srchValue = "";
    switch (field) {
      case 'maxusage': ele.placeholder = "Max Usage"; ele.type = "text"; break;
      case 'speed': ele.placeholder = "Speed"; ele.type = "text"; break;
    }
  }



}
