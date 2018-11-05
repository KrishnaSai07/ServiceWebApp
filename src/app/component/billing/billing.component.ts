import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Billing } from '../../model/billing';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  show: boolean;
  bills: Billing[];
  billLogo: string;
  bill: Billing;
  constructor(  private planService: ServiceService) { 
    this.billLogo = '/assets/images/bills.png';
    this.show = false;
  }

  ngOnInit() {

    this.planService.getAllBills().subscribe(
      (data) => this.bills = data
    );

    for (let i = 0; i < this.bills.length; i = i + 1)
    {
      this.bill = this.bills[i];
      console.log(this.bill);

      if (this.bill.status === 'Not Paid')
      {
        console.log('ayooo');
         this.show = true;
      }

    }
  }

}
