import { Injectable } from '@angular/core';
import { PoTableColumn } from '@portinari/portinari-ui';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleItemsService {

    constructor(private http: HttpClient) { }
    url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';

    getAll() {
        return this.http.get<any[]>(this.url);
    }
    
    getColumns(): Array<PoTableColumn> {
        return [
            { property: 'min' },
            { property: 'max' },
            { property: 'cidade' }
        ];
    }

    getItems(): Array<any> {
        return [
            { min: '18°', max: '27°', cidade: 'Rio de Janeiro' },
            { min: '14°', max: '22°', cidade: 'São Paulo' },
            { min: '21°', max: '32°', cidade: 'Belo Horizonte' },
            { min: '24°', max: '37°', cidade: 'Brasília' },
            { min: '24°', max: '37°', cidade: 'Belém' }
        ];
    }

}
