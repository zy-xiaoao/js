var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/GetOpenId';

if (url.indexOf(vip) != -1) {
    obj.data.IsAuth= "1";
    body = JSON.stringify(obj);
}

$done({body});
