import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    // THIS DATA SHOULD BE RETRIEVED EXTERNALLY USING A CONFIG IPART
  
    private readonly CONTENT_ITEM_API: string = "/api/ContentItem";

    constructor(private http: HttpClient) {

    }

   

    public getIPartContentItem(contentKey: string, contentItemKey: string): Observable<any> {
        return this.http.get<any>(this.CONTENT_ITEM_API, {
            headers: this.getIMISRequestHeaders(),
            params: {
                contentKey,
                contentItemKey
            }
        });
    }

    

    private getIMISRequestHeaders(): any {
        return {
            "RequestVerificationToken": (<HTMLInputElement>document.getElementById("__RequestVerificationToken")).value,
            "Content-Type": "application/json"
        };
    }
}
