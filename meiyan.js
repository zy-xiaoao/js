/*
‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const vip = '/vip/user_info';

if (url.indexOf(vip) != -1) {

    obj.response.status = 1;

    obj.response.ad_vip_type = 4;

    obj.response.period_type = 3;

    obj.response.agreement_platform = "1";

    obj.response.expire_time = "2099-12-12 00:00:00";

    obj.response.discount_status = 64;

    obj.response.agreement_status0= 2;

    obj.response.type = 3;

    obj.response.product_type =2;

    obj.response.expire_date = "2099-12-12";

    body = JSON.stringify(obj);

}

$done({body});
