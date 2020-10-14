var touch = {
    tap: function fun(el, callback,direction) {
        flag = true
        //创建一个全局变量 用来存储时间
        var time;
        //点击事件
        el.addEventListener('touchstart', function (e) {
            //获取当前时间
            time = new Date
        })
        //手指移动
        el.addEventListener('touchmove', function (e) {
            //有滑动开关关闭
            flag = false
        })
        //手指抬起
        el.addEventListener('touchend', function (e) {
            //计算抬起的时间和按下时间的 差 是否大于150ms
            var sj = new Date() - time
            if (sj < 150 && flag) {
                // console.log('点击')
                callback(e)
            }
            flag = true
        })
    },
    swipe: function fun(el, direction, callback) {
        //创建一个开始全局变量
        var start;
        //创建一个结束的全局变量
        var move;
        //创建一个时间的全局变量
        var time;
        //手指按下获取元素的触碰点
        el.addEventListener('touchstart', function (e) {

            start = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            }
        })
        el.addEventListener('touchmove', function (e) {
            //获取手指移动完后的触碰点
            move = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
            }
        })
        el.addEventListener('touchend', function (e) {
            // console.log(move)
            //判断手指是否移动 是否经过touchmove事件
            if (move) {
                var x = start.x - move.x
                var y = start.y - move.y
                //三模运算
                var directionx = x<0 ?"right":'left'
                var directiony = y<0 ?"bottom":'top'
                //先判断垂直水平
                if (Math.abs(x) >= Math.abs(y)) { //水平
                    // console.log('水平')
                    //判断传的方向值是否和移动的方向相同与不小心移动的距离是否有30的误差
                    if(direction===directionx && Math.abs(x)>30){
                      
                        callback(e)
                      
                    }
                } else {//垂直
                    console.log('垂直')
                    if(direction===directiony && Math.abs(y)>30){
                        callback(e)
                    
                    }
                }
            }

        })
    }
}