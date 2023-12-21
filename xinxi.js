var url = $request.url;
var hd = $request.header;
const vip = '/GetOpenId';
if (url.indexOf(vip) != -1) {
    hd.Authorization= "Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6NzA4NDB9.VWRNwCYAr9PSYHXs1PP1_bszTgl29Oz6KuJO-XunXm8flcrIJXLa8LqfVcYu97y_jqYCh8XyEEnLOP8GEUW3JQ"
}
