// JavaScript Document
$(function(){
	$('.leftBg').show().addClass('animated fadeInLeft');//添加蓝色背景
	$('.rightBg').show().addClass('animated fadeInRight');//添加黄色背景
	setTimeout(function(){
		$('.leftBg').removeClass('fadeInLeft');//移除蓝色背景
		$('.rightBg').removeClass('fadeInRight');//移除黄色背景
		$('.logo a img').show().addClass('animated bounceInDown');//添加logo
		setTimeout(function(){
			$('.logo a img').removeClass('bounceInDown');//移除logo
			$('.big_word img').show().addClass('animated flip');//添加大标题
			setTimeout(function(){
				$('.big_word img').removeClass('flip');//移除大标题
				$('.btnbg').show().addClass('animated rotateIn');//添加右边背景
				$('.peo').show().addClass('animated bounceIn');//添加左边背景
				$('.btnbg_rf').show().addClass('animated lightSpeedIn');//添加左边背景
				/////////////两个箭头		
				setInterval(function(){
					$('.btn_arow,.btnWord,.btn_arow_rf,.btnWord_rf').show().addClass('animated tada');//左边箭头
					setTimeout(function(){
						$('.btn_arow,.btnWord,.btn_arow_rf,.btnWord_rf').removeClass('tada');
						},3000);
				}, 1000*2);
				///////////////	
				setTimeout(function(){
					$('.btnbg').removeClass('rotateIn');//移除 左边背景
					$('.btnbg_rf').removeClass('lightSpeedIn');//移除右边背景
					$('.btnWord').show().addClass('animated rotateInDownLeft');//添加右边大字
					$('.btnWord_rf').show().addClass('animated flipInY');
					$('.shequ').show().addClass('animated lightSpeedIn');
					setTimeout(function(){
						$('.btnWord').removeClass('rotateInDownLeft');//移除左边大字
						$('.btnWord_rf').removeClass('flipInY');//移除
						$('.shequ').removeClass('lightSpeedIn');//移除社区
						setTimeout(function(){
							$('.house').show().addClass('animated swing');//添加印刷机
							$('.big_word_rf img').show().addClass('animated rotateInUpRight');//添加底下大字
							setTimeout(function(){
								$('.house').removeClass('swing');//移除印刷机
								$('.big_word_rf img').removeClass('rotateInUpRight');//移除大字
								},1000);
							},1000);
						},1000);
					},1000);
				},1000);
			},1000);
	},1000);
})

