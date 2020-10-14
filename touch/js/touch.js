var touch={
    click:function(dom,callback){
        var Stime;
        var Etime;
        var flag=false;
        dom.addEventListener("touchstart",function(){
            Stime=new Date()
        })
        dom.addEventListener("touchmove",function(){
            flag=true
        })
        dom.addEventListener("touchend",function(){
            Etime=new Date()
            if(Etime-Stime<150&&!flag){
                callback&&callback(1)
            }else{
                callback&&callback(0)
            }
        })
    }
}