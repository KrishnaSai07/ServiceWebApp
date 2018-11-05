import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  customer: Customer[];
  custLogo: string;

  constructor(private planService: ServiceService) {
       this.custLogo = '/assets/images/custo.png';
   }

  ngOnInit() {

    this.planService.getCustomer().subscribe(
      (data) => this.customer = data
    );
}

}
