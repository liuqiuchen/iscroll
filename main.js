// 初始化和配置参数
var myScroll = new IScroll('#wrapper', {
	mouseWheel: true,
	scrollbars: true
});

var eleHeight = $('#scroller li').height();

$('.btn').on('click', function () {
	// 擦除动画的类型选项有：quadratic, circular, back, bounce, elastic。
	myScroll.scrollTo(0, parseInt(-eleHeight*2), 1000, IScroll.utils.ease.elastic);
});