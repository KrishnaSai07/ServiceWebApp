import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Complaints } from '../../model/complaints';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  complaint: Complaints;

  constructor( private complaintService: ServiceService,
    private router: Router) { }

  ngOnInit() {
    this.complaint = new Complaints();
  }

   save()
   {
    this.complaintService.addComplaint(this.complaint).subscribe(
      (data) => {
        this.router.navigateByUrl('/Success');
        //this.router.navigateByUrl("/Success?opt=a&id="+data.contactId);
      },
      (error) => {alert('There is some isssue with your request');
    }
    );
   }



}
