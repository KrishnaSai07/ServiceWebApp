import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  show:boolean;
  questLogo : string;
  value : string;
  x:number;

  constructor(private router:Router) { 
    this.questLogo = '/assets/images/quest.png';
    this.show = false;
    //this.router.navigateByUrl('/Success');
  }

  quest1():void{
    this.value = "You can go to the MyAccount button on the navigation bar and click on it where you can find your account details or just use the below link";
    this.x=1;
    this.show = true;
 
  }
  quest2():void{
    this.value = "You can go to the Update My Account button on the navigation bar and click on it where you can find your existing account details which can be modified and saved or just use the below link";
    this.x=2;
    this.show = true;
 
  }
  quest3():void{
    this.value = "You need to  go to the View Packages button on the navigation bar and click on it where you can find different packages to whick ypu can apply to or just use the below link";
    this.x=3;
    this.show = true;
  }
  quest4():void{
    this.value = "You can go to the Complaint button on the navigation bar and click on it where you can find your Complaint form where you can detail/describe your issue or just use the below link";
    this.x=4;
    this.show = true;
  }
  quest5():void{
    this.value = "You can go to the Billing button on the navigation bar and click on it where you can find your previous transactions and the current ones to  be paid or just use the below link";
    this.x=5;
    this.show = true;
  }
  
  link(): void{

    switch(this.x)
    {
      case 1:this.router.navigateByUrl('/Account');
             break;
      case 2:this.router.navigateByUrl('/Details');
             break;
      case 3:this.router.navigateByUrl('/listPackages');
            break;
      case 4:this.router.navigateByUrl('/Complaint');
             break;
      case 5:this.router.navigateByUrl('/Billing');
              break;                                
    }
  }


  ngOnInit() {
  }

}
