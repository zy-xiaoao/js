/*

‼️规则完全免费，仅供学习交流，🈲️商业用途

*/
var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);

const path1 = '/v1/vip/prompt/query.json';

const path2 = '/v1/vip/vip_show.json';

const path3 = '/v1/user/show';

 if (url.indexOf(path1) != -1) {

   obj.data["home_prompt"] = "您的会员将于2099/09/09过期。",

   obj.data["home_btn_prompt"] = "立即查看",

   body = JSON.stringify(obj);  

};  

 if (url.indexOf(path2) != -1) {

   obj.data["is_valid_user"] = 1,

   body = JSON.stringify(obj);  

};

if (url.indexOf(path3) != -1) {

    obj.data["vip_type"] = 1,

   body = JSON.stringify(obj);  

};

 $done({body});
