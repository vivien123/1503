$(function(){
			var timer=0;
			// 右点击
			$(".right").click(function() {
				fn();
			});
			//左点击
			var divWidth = $("#div1").width()
			$("#win li img").width( divWidth)
			$(".left").click(function(){
				$("#win li:last").prependTo($("#win"));
				$("#win").css('left',-divWidth)
				$("#win").not(':animated').animate({'left':0})
			})
			//鼠标滑过banner时
			$("#banner").hover(function(){
				$(".aaa").stop().fadeIn();
				clearInterval(timer);
			},function(){
				$(".aaa").stop().fadeOut();
				//加定时器
				timer=setInterval(function(){
					fn();
				},4000)
			}).trigger('mouseleave')
			function fn(){
				$("#win").not(':animated').animate({
					'left':-divWidth
				},function(){
					$("#win li").eq(0).appendTo("#win");
					$("#win").css('left',0)
				})
			}
		})