/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/

var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const vip = '/v1/vip';

if (url.indexOf(vip) != -1) {

    obj.data.vip_type = 1;

    obj.data.is_valid_user = 1;

    body = JSON.stringify(obj);

}

$done({body});
