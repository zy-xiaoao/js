/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/
var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const vip = '/api/myapp/isLogin';

if (url.indexOf(vip) != -1) {

    obj.viptype = 1;

    obj.vipexpire = "2999-09-09 09:09:09";

    obj.viplevel = 1;
    
    obj.locked = 1;
    
    obj.regtype = 1;
    
    obj.vipexpire2 = "2999-09-09 09:09:09";

    body = JSON.stringify(obj);

}

$done({body});

