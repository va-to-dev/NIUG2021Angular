import { Injectable } from '@angular/core';

@Injectable()
export class ContentKeysService {
    public contentKey: string;
    public contentItemKey: string;

    // Grab our setting keys for this iPart from the DOM
    constructor() {
        var ck = "";
        try{ck = (document.querySelector("#x-contentKey") as HTMLInputElement).value;}catch{}
        var cik = "";
        try{ cik = (document.querySelector("#x-contentItemKey") as HTMLInputElement).value;}catch{}

        this.contentKey = ck;
        this.contentItemKey = cik;
    }

}
