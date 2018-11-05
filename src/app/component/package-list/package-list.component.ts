import { Component, OnInit } from '@angular/core';
import { PlansModel } from '../../model/plans-model';
import { ServiceService } from '../../service/service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  plansModel: PlansModel[];

  imgLogo: string;

  constructor(
    private planService: ServiceService
, private activatedRoute: ActivatedRoute  ) {
    this.imgLogo = '/assets/images/wifi.png';
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        const field = params['field'];
        const srchValue = params['srchValue'];

        console.log(field + ':' + srchValue);

        if(field && srchValue)
        {
          this.planService.searchPlans(field, srchValue).subscribe(
            (data) => this.plansModel = data
          );
        }else{
          this.planService.getAllPlans().subscribe(
            (data) => this.plansModel = data
          );
        }
      }
    );
  }

}
