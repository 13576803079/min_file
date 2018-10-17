var register = (function(){

    return {
        init: function(ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp =   this.$ele['username'];
            this.$passwordInp =   this.$ele['password'];
            this.$userp = document.querySelector('.p2');
            this.$pwdp = document.querySelector('.p5');
            this.event();
        },
        event: function() {
            var _this = this;
            var reg_user = /^1[35789]\d{9}$/;
            var reg_pwd = /\w{6,16}/;
            _this.$pwdp.style.display = 'none';
            _this.$userp.style.display = 'none';
        	this.$usernameInp.onblur = function(){
	            if(_this.$usernameInp.value == ''){
                	_this.$userp.innerHTML = '用户名不能为空';
                	_this.$userp.style.display = 'block';
	            }else{
	            	if(reg_user.test(_this.$usernameInp.value)){
	            		_this.$userp.style.display = 'none';
	            	}else{
	            		_this.$userp.innerHTML = '用户名格式错误';
	            	}
	            }
        	}

        	this.$passwordInp.onblur = function(){
	            if(_this.$passwordInp.value == ''){
                	_this.$pwdp.innerHTML = '密码不能为空';
                	_this.$pwdp.style.display = 'block';
	            }else{
	            	if(reg_pwd.test(_this.$passwordInp.value)){
	            		_this.$pwdp.style.display = 'none';
	            	}else{
	            		_this.$pwdp.innerHTML = '密码格式错误';
	            		_this.$pwdp.style.display = 'block';
	            	}
	            }
        	}
            // 注册按钮
            this.$loginBtn.onclick = function() {
                // 发送ajax，验证用户名和密码
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                if(reg_user.test(_this.$usernameInp.value) && reg_pwd.test(_this.$passwordInp.value)){
                	sendAjax('http://localhost:1222/mi-shop/php/register.php', params);
                }else{
                	if(_this.$usernameInp.value == ''){
	                	_this.$userp.innerHTML = '用户名不能为空';
	                	_this.$userp.style.display = 'block';
	                }
                	if(_this.$passwordInp.value == ''){
	                	_this.$pwdp.style.display = 'block';
	                }
                	
                }
//              sendAjax('http://localhost:1222/mi-shop/php/register.php', params);
            }
            this.$usernameInp.onchange = function(){
                var params = {
                    data: {
                        username: _this.$usernameInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.checkName(data);
                    }
                }
	        	if(reg_user.test(_this.$usernameInp.value)){
	        		_this.$userp.innerHTML = '成功注册账号后，用户名将不能被修改,用户名为手机号';
	        		if(reg_pwd.test(_this.$passwordInp.value)){
	        			sendAjax('http://localhost:1222/mi-shop/php/check_username.php', params);
	        		}
        	    }
//              sendAjax('http://localhost:1222/mi-shop/php/check_username.php', params);
            }
        },
        checkName: function(data) {
        	var _this = this;
            if(data.code == 200 && _this.$usernameInp.value != '') {
                // 用户名称不存在
            } else {
                // 用户名称存在
            }
        },
        loginSuccess: function(data) {
        	var _this = this;
            if(data.code == 200 && _this.$usernameInp.value != '') {
               
                location.href = 'login.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())
