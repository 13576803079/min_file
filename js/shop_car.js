function computeShop() {
	
	var $Gou = document.querySelectorAll('.Gou ');
	var priceAll = 0;
	for(var k = 0; k < $Gou.length; k++) {
		if($Gou[k].className == 'Gou active') {
			var tt = $($Gou[k]);
			var money = tt.parent().parent().find('.shop_price').text();
			var number = tt.parent().parent().find('#number').text();
			var priceTotal = Number(money) * Number(number);
			var num5 = priceTotal;
			console.log(num5)
			priceAll += num5;
		}
	}
	$('#total_sum').html(priceAll);
}
function getShopnum()
{
	var $Gou = document.querySelectorAll('.Gou');

			var num3 = 0;
			for(var i = 0; i < $Gou.length; i++) {
				console.log($Gou[i]);
				if($Gou[i].className == 'Gou active') {
					num3 += 1;

				}
				console.log($Gou[i].className)
			}
			$('#phoneShap').html(num3);
}
$(function() {
	if(localStorage.getItem('xiaomi')) {
		var i = localStorage.getItem('xiaomi');
		arr = JSON.parse(i);
		var num = arr.length;
		var num1 = 0; //判断选择几个

		for(var i = 0; i < arr.length; i++) {

			obj = arr[i];
			console.log(obj)
			console.log(i)
			var shopPing = `<div class="shopGoods" index="${i}">
				<div class="shop_check ">
					<i class="Gou move">√</i>
				</div>
				<div class="shop_img" ></div>
				<div class="shop_name">${obj.name}</div>
				<div class="shop_color">${obj.iphoneColor + ' '+obj.type}</div>
				<div class="shop_price">${obj.price}</div>
				<div class="shop_num">
					<div id="count">
						<span class="minus">-</span>
						<span id='number'>${obj.tok}</span>
						<span class="add">+</span>	
					</div>
				</div>
				<div class="shop_total">${obj.tok*obj.price}元</div>
				<div class="shop_action">×</div>
			</div>`;
			shopPing = $(shopPing);
			$('main').append(shopPing);
			$('.shop_img').css({
				'background': 'url(' + obj.phoneurl + ') no-repeat'
			})
		}
		$('.minus').on('click', function() {
			var target = $(event.target)
			var num = Number(target.next().text());
			num--;
			if(num <= 0) {
				num = 0;
			}
			target.next().html(num);
			target.parent().parent().next().html(target.next().text() * target.parent().parent().prev().text() + '元')
			computeShop()
		})
		$('.add').on('click', function() {
			var target = $(event.target)
			var num = Number(target.prev().text());
			num++;
			target.prev().html(num);
			target.parent().parent().next().html(target.prev().text() * target.parent().parent().prev().text() + '元')
			computeShop()
		})
		$('.col_check').click(function() {

			$('.col_check i').toggleClass('move');
			$('.col_check i').toggleClass('active');
			if($('.col_check i').attr('class') == 'move_check active') {
				$('.shop_check i').attr('class', '');
				$('.shop_check i').addClass('Gou active');
				num1 = arr.length;
				$('#phoneShap').html(num1);
				computeShop();

			} else if($('.col_check i').attr('class') == 'move_check move') {
				$('.shop_check i').attr('class', '');
				$('.shop_check i').addClass('Gou move');
				num1 = 0;
				$('#phoneShap').html(num1);
				computeShop();
			}
			getShopnum();
		})
		$('.Gou').on('click', function() {
			var target = $(event.target);
			target.toggleClass('move');
			target.toggleClass('active');
			var $Gou = document.querySelectorAll('.Gou ');

			var num3 = 0;
			for(var i = 0; i < $Gou.length; i++) {
				console.log($Gou[i]);
				if($Gou[i].className == 'Gou active') {
					num3 += 1;
					console.log(num1);
				}
				console.log($Gou[i].className)
			}
			computeShop();
			$('#phoneShap').html(num3);

		})
		var xiaomi = localStorage.xiaomi || '[]';
    	xiaomi = JSON.parse(xiaomi);
		$('.shopGoods').on('click', 'div', function() {
			var target = $(event.target);
			if(target.attr('class') == 'shop_action') {
				console.log(target.parent())
				console.log(target.parent().index()-2);
               // 删除数组中对应的数据，最外面有两个div同级，索引从2开始
               xiaomi.splice(target.parent().index()-2, 1);
               // 存入到本地数据库
               localStorage.xiaomi = JSON.stringify(xiaomi);
				target.parent().remove()
				num--;
				$('#numberShap').html(num);
				computeShop();
				getShopnum();
			}
		})

		$('#numberShap').html(num);
		$('#phoneShap').html(num1);

	} else {
		$('main').html('您的购物车是空的');
		$('main').css({
			'font-size': '32px',
			'color': '#000',
			'text-align': 'center',
			'line-height': '60px'
		})

	}

})