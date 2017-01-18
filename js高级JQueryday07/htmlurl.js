var http=require("http");
var url=require("url");

var urlStr="http://user:password@10.0.161.193:8080/1-tag.html?id=10&name=tom";
var urlObj=url.parse(urlStr);

console.log(urlStr);

console.log("------------------------------------------------");
console.log(urlObj);
