//向下移动
$(document).ready(function(){
	$('#entirety').animate({top:-70},2000).
	delay(1000).animate({top:-500},2000,function(){
		$('#bg_red').hide(),
		$('#entirety').css({
			top:0
		})
	})
})
setTimeout(function(){
	$('#top_up').animate({
		left:0
	},1000,'linear')
},1000)
setTimeout(function(){
	$('#top_up').animate({
		left:'100%'
	},1000,"linear")
},4500)
setTimeout(function(){
	$('#baidu').css({
		display:'none'
	})
},0)
setTimeout(function(){
	$('#baidu').css({
		display:'block'
	})
},5000)
setTimeout(function(){
	$('#bg').css({
		display:'none'
	})
},0)
setTimeout(function(){
	$('#bg').css({
		display:'block'
	})
},5000)
setTimeout(function(){
	$('#entirety').css({
		height:4498
	})
	console.log($('#entirety').height())
},5500)
//导航
$(".change_city").mouseover(function(){
	$('#city ul').css({
		display:"block"
	})
})
$('#city ul').hover(function(){
	$(this).css({
		display:"block"
	})
},function(){
	$(this).css({
		display:"none"
	})
})
//上轮播
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        spaceBetween: 30,
        centeredSlides: true,
        autoplayDisableOnInteraction: false
});
//上左
$('#tl li').hover(function(){
	$('#tl1').appendTo($(this)).css({
		display:'block'
	})
	$('#tl1 li').hover(function(){
		$(this).css({
			color:"#36a8ff",
			background:"white"
		})
	},function(){
		$(this).css({
			color:"",
			background:"white"
		})
	})

},function(){
	$("#tl1").css({
		display:"none"
	})
})
$('#li5').hover(function(){
	$('#tl2').appendTo($(this)).css({
		display:'block'
	})
	$('#tl2 li').hover(function(){
		$(this).css({
			color:"#36a8ff",
			background:"white"
		})
	},function(){
		$(this).css({
			color:"",
			background:"white"
		})
	})

},function(){
	$("#tl2").css({
		display:"none"
	})
})

//百度信誉
$('#baidu').click(function(){
	$("#baidu").css({
		display:"none"
	})
	$('#top_up').animate({
		left:0
	},1000,'linear')
});
	$('#pack_up').click(function(){

	$('#top_up').animate({
		'left':'100%'
	},1000,"linear",function(){
		$("#baidu").css({
			display:'block'
		})
	})
})
//项目——星星
$('.pro_left').on("mouseenter",function(){
	$(this).children().last().children().animate({width:250,left:-10,height:350},200)
})
$('.pro_left').on("mouseleave",function(){
	$(this).children().last().children().animate({width:230,left:0,height:350},200)
})
$('.pro_middle').on("mouseenter",function(){
	$(this).children().first().next().children().animate({width:250,left:-10,height:350},200)
})
$('.pro_middle').on("mouseleave",function(){
	$(this).children().first().next().children().animate({width:230,left:0,height:350},200)
})
//我在蓝鸥
$('#we_left').click(function(){
	$(this).css({
		color:"#e5e7ee"
	})
	$('#we_right').css({
		color:"#c4c9d9"
	})
	$('.we_pic').animate({
		left:-1220
	},1000)
})
$('#we_right').click(function(){
	$(this).css({
		color:"#e5e7ee"
	})
	$('#we_left').css({
		color:"#c4c9d9"
	})
	$('.we_pic').animate({
		left:-10
	},1000)
})
// 校园环境
var imgs = document.getElementsByClassName('school_img');
$('.site li').click(function(){
	for (var i = 0; i < $('.site li').length; i++) {
		$('.site li:eq('+i+')').css({
			background:"",
			color:'black'
		})
		for (var j = 0; j < 5; j++) {
			imgs[j].src="img/"+($(this).index()*5+j)+".jpg";
		};
	};
	$(this).css({
		background:"#36a8ff",
		color:"white"
	})
})
// 弹出框
setTimeout(function(){
    $("#alertE").css({
        'display':'block'
    });
    $("#mask").css({	
        'display':'block'
    });
 $("#alertE p").click(function(){
     $("#alertE").css({
         'display':'none'
     });
     $("#mask").css({
         'display':'none'
     });
 })
},6000);
// 回到顶部
window.onscroll = function(){
	if(document.body.scrollTop >= 500){
		recur.style.display = "block"
	}else{
		recur.style.display = "none"
	}
}
// 就业喜报
function data_fn(val){
	for(var x in data){
	    if(val == data[x].name){
	       var num = data[x].person.length
	    for (var i = 0; i < num; i++) {
	        // console.log(data[x].person[i].name)
	      $("<li><span class='name'>"+data[x].person[i].name+"</span><span class='education'>"+data[x].person[i].education+"</span><span class='major'>"+data[x].person[i].major+"</span><span class='company'>"+data[x].person[i].company+"</span><span class='money'>"+data[x].person[i].money+"</span><span class='job'>"+data[x].person[i].job+"</span></li>").appendTo($(".obtain_ul"))  
	      }
	    }
	}
}
data_fn("HTML5")
function movettop(){
	moveTop = setInterval(function(){
		var first = $('.obtain_ul').find('li:first')
		$('.obtain_ul').css({
			top:$('.obtain_ul').position().top-1
		})
		if($('.obtain_ul').position().top<=-50){
			first.appendTo('.obtain_ul')
			$('.obtain_ul').css({
				top:-5
			})
		}
	},50)
}
movettop()
//移入停止动画
$('.obtain_ul').mouseover(function(){
	clearInterval(moveTop)
})
$('.obtain_ul').mouseout(function(){
	movettop()
})