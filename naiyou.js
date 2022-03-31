/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/account/me';

if (url.indexOf(vip) != -1) {
    obj.data.vip = true;
    obj.data.createAt = "2099-09-09 09:09:09"
    body = JSON.stringify(obj);
}
$done({body});$done({body});

