import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PackageListComponent } from './component/package-list/package-list.component';
import { AccountComponent } from './component/account/account.component';
import { ComplaintsComponent } from './component/complaints/complaints.component';
import { SuccessComponent } from './component/success/success.component';
import { UpdateComponent } from './component/update/update.component';
import { FAQComponent } from './component/faq/faq.component';
import { BillingComponent } from './component/billing/billing.component';
import { DetailsComponent } from './component/details/details.component';


const paths: Routes = [
  {path: 'Account', component: AccountComponent},
  {path: 'listPackages', component: PackageListComponent},
  {path: 'Complaint', component: ComplaintsComponent},
  {path: 'Success', component: SuccessComponent},
  {path: 'Update', component: UpdateComponent},
  {path: 'Update/:id', component: UpdateComponent},
  {path: 'FAQ', component: FAQComponent},
  {path: 'Billing', component: BillingComponent},
  {path: 'Details', component: DetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    AccountComponent,
    ComplaintsComponent,
    SuccessComponent,
    UpdateComponent,
    FAQComponent,
    BillingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(paths)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
