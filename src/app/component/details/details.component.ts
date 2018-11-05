import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Customer } from 'src/app/model/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { PlansModel } from '../../model/plans-model';

@Component({
  selector: 'app-update',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  customer: Customer[];
  custo: Customer;
  customid: string;
  plan: PlansModel;
  show: boolean;
  show1: boolean;

  constructor(private planService: ServiceService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.show = false;
    this.show1 = true;
   }

  ngOnInit() {
    this.customid = 'ACTCUST1078';
    this.planService.getCustomerById(this.customid).subscribe(
      (data) => {
        this.custo = data;
      }
    );

        //this.isEditing=true
    //console.log(this.customer);
    //this.customer1= this.customer[1];
    /*this.customid = this.customer1.customid;
    this.name = this.customer1.name;
    this.address = this.customer1.address;
    this.mobilenumber= this.customer1.mobilenumber;
    this.planid = this.customer1.planid;
    this.maxusage = this.customer1.maxusage;
    this.speed = this.customer1.speed;
    this.billlast = this.customer1.billlast;
     */
  }

  save()
  {
    this.planService.updateCustomer(this.custo).subscribe(
     (data) => {
       this.router.navigateByUrl('/Account');
       //this.router.navigateByUrl("/Success?opt=a&id="+data.contactId);
     },
     (error) => {alert('There is some isssue with your request');
   }
   );
  }

}
