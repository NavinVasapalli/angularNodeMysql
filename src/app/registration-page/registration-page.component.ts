import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { organizationcreation } from 'src/app/models/organizationcreation-mode';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  constructor(private http: Http) {


    http.get("http://localhost:3000/organizations").subscribe(response => {

      console.log(response);

    });


  }

  regOrgDetails = new organizationcreation();

  postOrgDetails(orgData) {

    debugger;


   // console.log(JSON.stringify(orgData));

    this.http.post("http://localhost:3000/newOrganizations", orgData).subscribe(response => {

      console.log(response);


    })




  }



  // subitClick(){
  // debugger;
  // console.log(this.regOrgName.Org_Name,this.regOrgName.Org_Type,this.regOrgName.Primary_Person_Name,this.regOrgName.No_of_Employees,this.regOrgName.Email,this.regOrgName.Mobile_Number,this.regOrgName.Fax );

  // }






  regOrgSubmit(orgRegister) {
    console.log(this.regOrgDetails);

    //this.regOrgDetails.Org_Name =  orgRegister.value.



    this.postOrgDetails(this.regOrgDetails);

  }



}
