/**
 * Created by Administrator on 2016/12/1.
 */
var events=require("events"),
    util=require("util");
function  Gril(){
    this.name="美人鱼";
}
util.inherits(Gril,events.EventEmitter);

function  _go(name,action){
    console.log(name+"-去-"+action);
}
var g=new Gril();
g.on("备胎",_go);
g.emit("备胎","备胎一","买个包");
g.emit("备胎","备胎二","买个表");
