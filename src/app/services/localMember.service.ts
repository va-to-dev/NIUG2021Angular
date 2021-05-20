import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Member } from '../models/member';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { IPartSettingsService } from '../services/ipart-settings.service';
import { Helper } from '../utils/helper';
import { ApiService } from './api.service';
import { ContentKeysService } from './content-keys.service';


@Injectable()
export class LocalMemberService {

 // constructor(private http: HttpClient ) {   }

 member : Member;
 settingsSubscription: Subscription;
 data: string[] = [];
 IQA_URL: string = "";

  constructor(private http: HttpClient, private iPartSettingsService: IPartSettingsService) {

    
 var settingtest = this.iPartSettingsService.GetSettings().subscribe(data => {
  console.log(data);

  if(data!=null){
          for (let [key, value] of Object.entries(data)) {
            console.log(key);
           if(`${key}`=="anotherSetting"){
             var d = `${value}`;
            
             if(d!=""){
               console.log("anotherSetting");
               console.log("-------------");
               console.log(d);
               this.IQA_URL = d;
              
             }
             else{
         
             }
                 
             }
            

         }
        }

        });
     }


  


 getMembers(): Observable<Member[]> {

  
   
    
    //let url =  '/api/IQA?QueryName=$/ContactManagement/DefaultSystem/Queries/Contacts/Default&limit=1000';

    let baseURL = '/api';
    //let url = baseURL+this.IQA_URL;
    let url =  '/api/IQA?QueryName=$/ContactManagement/DefaultSystem/Queries/Contacts/Default&limit=1000';
    
  
    let authToken = (document.getElementById('__RequestVerificationToken') as HTMLInputElement).value;

    
      return this.http.get(url, {headers: { 'RequestVerificationToken': authToken }})
        .map((res:any)=> {
          console.log(res.Items[0]);
        let results = res.Items.$values.map ( item => {
            return new Member(
             
              item.Properties.$values[2].Value,
              item.Properties.$values[3].Value,
              item.Properties.$values[4].Value,
              item.Properties.$values[5].Value,
              item.Properties.$values[7].Value,
         
                )
        });
        return results;
    });

    



}
  
}
