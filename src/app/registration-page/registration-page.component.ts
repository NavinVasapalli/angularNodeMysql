import { Component, OnInit } from '@angular/core';
import { organizationcreation } from 'src/app/models/organizationcreation-mode';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent  {
  constructor( ) { 
  }
  
  regOrgName =  new organizationcreation();




subitClick(){

console.log(this.regOrgName.Org_Name,this.regOrgName.Org_Type,this.regOrgName.Primary_Person_Name,this.regOrgName.Email,this.regOrgName.Mobile_Number,this.regOrgName.Fax );



}


}
