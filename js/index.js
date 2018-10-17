var index = (function () {
    return {
        init() {
            this.$time1 = document.querySelector('.time1');
            this.$time2 = document.querySelector('.time2');
            this.$time3 = document.querySelector('.time3');
            var timer = '';
            this.event();
            this.setDate('2018/10/11 18:00:00');

        },
        event() {
            var _this = this;

        },
        getDate(fDate) {
                var _this = this;
                var date = new Date();
                var now = date.getTime();
                //设置截止时间  
                var endDate = new Date(fDate);
                var end = endDate.getTime();

                //时间差  
                var leftTime = end - now;
                //定义变量 d,h,m,s保存倒计时的时间
                var d,h,m,s;
                if (leftTime >= 0) {
                    d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                    h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                    m = Math.floor(leftTime / 1000 / 60 % 60);
                    s = Math.floor(leftTime / 1000 % 60);
                }
                if(leftTime<0){
                    h = '0';
                    m = '0';
                    s = '0';
                }
                if(h<10){
                    h='0'+h;
                }
                if(m<10){
                    m='0'+m;
                }
                if(s<10){
                    s='0'+s;
                }
                _this.$time1.innerHTML = h;
                _this.$time2.innerHTML = m;
                _this.$time3.innerHTML = s;

            
        },
        setDate(fDate){
            var _this=this;
            timer = setInterval(function () {
                _this.getDate(fDate);
            }, 1000)
        }
    }
}())