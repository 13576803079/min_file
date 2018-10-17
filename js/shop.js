$(function() {
	var xin;
	var price;
	var phoneColor;

	$('.listOne>ul').on('click', 'li', function() {
		var target = $(event.target);
		if(target.is('li')) {
			target.css({
				'border': '1px solid #ff6700',
				'color': '#ff6700'
			});
			target.siblings().css({
				'border-color': '#e0e0e0',
				'color': '#b0b0b0'
			});
			phoneColor = target.text().trim();
			$('.miphoneColor').html(phoneColor);
		}
	})

	$('.listOne>ul').on('click', 'a', function() {
		console.log(111)
		var target = $(event.target);
		console.log(target)
		if(target.attr('class') == 'name') {

			console.log(100)
			target.parent().parent().css({
				'border': '1px solid #ff6700',
				'color': '#ff6700'
			});
			target.parent().parent().siblings().css({
				'border-color': '#e0e0e0',
				'color': '#b0b0b0'
			});
			phoneColor = target.text().trim();
			console.log(phoneColor)
			console.log(target.next().html())
			$('.miphoneNumber').html(phoneColor);
			$('.phonePrice').text(target.next().html())
			$('.totle_price').html($('.phonePrice').text());
		}
		$('.fuwu1').css({
			'border-color': '#e0e0e0'
		});
		$('.duigou2').css({
			'background-color': '#fff',
			'color': '#fff'
		});
	})
	$('.fuwu2').click(function() {
		$('.duihao').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			'color': '#fff'
		});
		$('.duihao').html('√');
		$('.duihao1').css({
			'background-color': '#fff',
			'color': '#fff',
			'border-color': '#e0e0e0'
		});
		$('.fuwu2').css({
			'border-color': '#ff6700'
		});
		$('.fuwu3').css({
			'border-color': '#e0e0e0'
		});
		$('.totle_price').html($('.phonePrice').text());
		var sum = parseInt($('.phonePrice').text());
		sum = parseInt($('.yuan1').text()) + sum;
		$('.totle_price').html(sum + '元');
	})
	$('.fuwu3').click(function() {
		$('.duihao1').css({
			'border-color': '#ff6700',
			'background-color': '#ff6700',
			'color': '#fff'
		});
		$('.duihao').css({
			'background-color': '#fff',
			'color': '#fff',
			'border-color': '#e0e0e0'
		});
		$('.duihao1').toggleClass('duihaoToggle');

		$('.duihao1').html('√');
		$('.duihao').html('');
		//				$('.fuwu3').toggleClass('fuwuToggle');
		$('.fuwu3').css({
			'border-color': '#ff6700'
		});
		$('.fuwu2').css({
			'border-color': '#e0e0e0'
		});
		$('.totle_price').html($('.phonePrice').text());
		var sum = parseInt($('.phonePrice').text());
		sum = parseInt($('.yuan2').text()) + sum;
		$('.totle_price').html(sum + '元');
		//				$('').click(function(){
		//					if($('').css(border-color) == '#ff6700'){
		//						
		//					}
		//				})
	})
	$('.address-info').click(function(e) {
		var target = e.target;
		var input = $("<input type='text' class='_focus'>").focus();
		$('._focus').focus();
		var td = $(target);
		input.val(td.text());
		td.contents().replaceWith(input);
		input.blur(function() {
			td.text($(this).val());
			$(this).remove();
		})
	})
	$('.btn_car').on('click', 'button', function(e) {
			var target = $(event.target);
			console.log(target)
			if(target.attr('class') == 'shopJson') {
				//					var arr=[];
				//					var num = 1;
				//					var fool;
				//					var price = parseInt($('.totle_price').text());
				//					var iphoneColor = $(".miphoneColor").text();
				//					var name = $('.phoneType').text();
				//					var type = $('.miphoneNumber').text();
				//					var str = $('.picUrl').css('background-image').slice(4);
				//				    var phoneurl = $('.picUrl').css('background-image').slice(4).substring(0,str.length-1);
				//					if(localStorage.getItem('xiaomi') && JSON.parse(localStorage.getItem('xiaomi'))[0].tok)
				//					{
				//						num=JSON.parse(localStorage.getItem('xiaomi'))[0].tok+1;
				//					}
				//					data= {
				//						name:name,
				//						type:type,
				//						iphoneColor:iphoneColor,
				//						price:price,
				//						tok:num,
				//						phoneurl:phoneurl
				//					}
				//					arr.push(data);
				//					arr = JSON.stringify(arr);
				//					console.log(arr);
				//					localStorage.setItem('xiaomi',arr);
				//					location.href = 'shop_car.html';
				if(JSON.parse(localStorage.getItem('xiaomi'))) {
					var arr = JSON.parse(localStorage.getItem('xiaomi'))
					console.log(arr);
					var num = 1;
					var fool;
					var price = parseInt($('.totle_price').text());
					var iphoneColor = $(".miphoneColor").text();
					var name = $('.phoneType').text();
					var type = $('.miphoneNumber').text();
					var str = $('.picUrl').css('background-image').slice(4);
				    var phoneurl = $('.picUrl').css('background-image').slice(4).substring(0,str.length-1);
					auto: for(var i = 0; i < arr.length; i++) {
						for(var k in arr[i]) {
							if(arr[i].name == name && arr[i].type == type && arr[i].iphoneColor == iphoneColor && arr[i].price == price && arr[i].phoneurl == phoneurl) {
								num = arr[i].tok + 1;
								data = {
									name: name,
									type: type,
									iphoneColor: iphoneColor,
									price: price,
									tok: num,
									phoneurl: phoneurl
								}
								arr.splice(i, 1, data)
								arr = JSON.stringify(arr);
								localStorage.setItem('xiaomi', arr);
								fool = i;
								break auto;
							}
						}
					}
					if(i != fool) {
						var arr = JSON.parse(localStorage.getItem('xiaomi'))
						data = {
							name: name,
							type: type,
							iphoneColor: iphoneColor,
							price: price,
							tok: num,
							phoneurl: phoneurl
						}
						arr.push(data);
						arr = JSON.stringify(arr);
						localStorage.setItem('xiaomi', arr);

					}
					console.log(arr);
				} else {
					var arr = [];
					var num = 1;
					var price = parseInt($('.totle_price').text());
					var iphoneColor = $(".miphoneColor").text();
					var name = $('.phoneType').text();
					var type = $('.miphoneNumber').text();
					var str = $('.picUrl').css('background-image').slice(4);
				    var phoneurl = $('.picUrl').css('background-image').slice(4).substring(0,str.length-1);
					data = {
						name: name,
						type: type,
						iphoneColor: iphoneColor,
						price: price,
						tok: num,
						phoneurl: phoneurl
					}
					arr.push(data);
					arr = JSON.stringify(arr);
					console.log(arr);
					localStorage.setItem('xiaomi', arr);
				}
				location.href = 'shop_car.html';
			}

	})
})