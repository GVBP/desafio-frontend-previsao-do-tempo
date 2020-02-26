var OAuth = require('oauth');
var header = { "X-Yahoo-App-Id": "your-app-id" };

var request = new this.OAuth.OAuth(
    null,
    null,
    'your-consumer-key',
    'your-consumer-secret',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    this.header
);

function get() {
    var res;

    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
                res = err;
                return res;
            } else {
                console.log(data);
                res = data;
                return res;
            }
        }
    );

}

module.exports.get = get();