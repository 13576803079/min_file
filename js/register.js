"use strict";var register={init:function(e){this.$ele=document.querySelector(e),this.$loginBtn=this.$ele["login-btn"],this.$usernameInp=this.$ele.username,this.$passwordInp=this.$ele.password,this.$userp=document.querySelector(".p2"),this.$pwdp=document.querySelector(".p5"),this.event()},event:function(){var s=this,n=/^1[35789]\d{9}$/,p=/\w{6,16}/;s.$pwdp.style.display="none",s.$userp.style.display="none",this.$usernameInp.onblur=function(){""==s.$usernameInp.value?(s.$userp.innerHTML="用户名不能为空",s.$userp.style.display="block"):n.test(s.$usernameInp.value)?s.$userp.style.display="none":s.$userp.innerHTML="用户名格式错误"},this.$passwordInp.onblur=function(){""==s.$passwordInp.value?(s.$pwdp.innerHTML="密码不能为空",s.$pwdp.style.display="block"):p.test(s.$passwordInp.value)?s.$pwdp.style.display="none":(s.$pwdp.innerHTML="密码格式错误",s.$pwdp.style.display="block")},this.$loginBtn.onclick=function(){var e={method:"post",data:{username:s.$usernameInp.value,password:s.$passwordInp.value},success:function(e){e=JSON.parse(e),s.loginSuccess(e)}};n.test(s.$usernameInp.value)&&p.test(s.$passwordInp.value)?sendAjax("http://localhost:1222/mi-shop/php/register.php",e):(""==s.$usernameInp.value&&(s.$userp.innerHTML="用户名不能为空",s.$userp.style.display="block"),""==s.$passwordInp.value&&(s.$pwdp.style.display="block"))},this.$usernameInp.onchange=function(){var e={data:{username:s.$usernameInp.value},success:function(e){e=JSON.parse(e),s.checkName(e)}};n.test(s.$usernameInp.value)&&(s.$userp.innerHTML="成功注册账号后，用户名将不能被修改,用户名为手机号",p.test(s.$passwordInp.value)&&sendAjax("http://localhost:1222/mi-shop/php/check_username.php",e))}},checkName:function(e){200==e.code&&this.$usernameInp.value},loginSuccess:function(e){200==e.code&&""!=this.$usernameInp.value?location.href="login.html":alert(e.msg)}};