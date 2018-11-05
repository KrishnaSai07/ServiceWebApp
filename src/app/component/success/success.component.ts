import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  msg: string;

  constructor() { 
    this.msg="Your compalint has been successfully registered!!Your issue will be addressed within 48 hours from your date of complaint made";
  }

  ngOnInit() {
  }

}
