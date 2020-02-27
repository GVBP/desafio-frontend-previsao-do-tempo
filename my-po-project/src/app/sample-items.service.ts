import { Injectable } from '@angular/core';
import { PoTableColumn } from '@portinari/portinari-ui';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { createHmac, Hmac, HexBase64Latin1Encoding } from '@types/node/index';
var OAuth = require('oauth');

var header = {
    "X-Yahoo-App-Id": "your-app-id"
};

var request = new OAuth.OAuth(
    null,
    null,
    'your-consumer-key',
    'your-consumer-secret',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);

request.get(
    'https://weather-ydn-yql.media.yahoo.com/forecastrss?format=json',
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
);

@Injectable()
export class SampleItemsService {

    private apiUrl = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    data: any = {};
    config: Config;

    //constructor() {
        //this.getForecastrss();
        //this.getData();
    //}

    //hmac: Hmac;
    //base64: HexBase64Latin1Encoding;
    
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

    /*getData() {
        var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
        var method = 'GET';
        var app_id = 'your-app-id';
        var consumer_key = 'your-consumer-key';
        var consumer_secret = 'your-consumer-secret';
        var concat = '&';
        var query = {'location': 'sunnyvale,ca', 'format': 'json'};
        var oauth = {
            'oauth_consumer_key': consumer_key,
            'oauth_nonce': Math.random().toString(36).substring(2),
            'oauth_signature_method': 'HMAC-SHA1',
            'oauth_timestamp': (new Date().getTime() / 1000).toString(),
            'oauth_version': '1.0'
        };

        var merged = {};
        var merged_arr = Object.keys(merged).sort().map(function(k) {
        return [k + '=' + encodeURIComponent(merged[k])];
        });
        var signature_base_str = method
        + concat + encodeURIComponent(url)
        + concat + encodeURIComponent(merged_arr.join(concat));

        var composite_key = encodeURIComponent(consumer_secret) + concat;
        var hash: Hmac = createHmac(signature_base_str, composite_key);
        var signature = (this.hmac.digest(this.base64)).toString();

        oauth['oauth_signature'] = signature;
        var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
        return [k + '="' + oauth[k] + '"'];
        }).join(',');

        return this.http.get<Config>(this.apiUrl + '?' + query, {
            headers: new HttpHeaders({
              'Authorization': auth_header,
              'X-Yahoo-App-Id': app_id,
            })
          });
    }*/

    /*getForecastrss() {
        this.getData()
            .subscribe((data: Config) => this.config = { ...data });
    }*/

}

interface Config {
    min: string,
    max: string,
    cidade: string
}