/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/
var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const vip = '/user';

if (url.indexOf(vip) != -1) {

    obj.data.user.vip_level= "gold";

    obj.data.user.vip_expire_time= 2027383523777;

    body = JSON.stringify(obj);

}

$done({body});
