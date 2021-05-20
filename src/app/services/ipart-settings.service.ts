import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from './api.service';
import { ContentKeysService } from './content-keys.service';
import { ConfigSettings } from '../models/general.model';

@Injectable()
export class IPartSettingsService {
    constructor(private contentKeys: ContentKeysService, private apiService: ApiService) {
        
    }

    public GetSettings(): Observable<ConfigSettings> {
        return this.apiService.getIPartContentItem(this.contentKeys.contentKey, this.contentKeys.contentItemKey)
            .pipe(
                map(data => {
                    let settings: ConfigSettings;
                    if (data.Items != null) {
                        // response from cloud instance
                        settings = data.Items.$values[0].Data.Settings;
                    } else {
                        // response from desktop instance
                        settings = data.Settings;
                    }
                    
                    return settings;
                })
            ); 
    }
}
