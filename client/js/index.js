// import '../favicon.ico';
import '../flash/yys_xsjj.swf';
//scss
import '../sass/yys.scss';
//javascript
import Video from './Video';
import Newinfo from './Newinfo';
import Scrollbar from './Scrollbar';
import ScrollShow from './ScrollShow';
import Banner from './Banner';

// Video
new Video({
    $btn: $('#first-screen').find('.videoBtn'),
    $video: $('#first-screen').find('.video'),
    $close: $('#first-screen').find('.video .close')
}).videoset('noScroll');

// Newinfo
new Newinfo({
    $list: $('#newinfo').find('.main ul li'),
    $details: $('#newinfo').find('.details'),
    $banner: $('#newinfo').find('.details .content ul'),
    $close: $('#newinfo').find('.details .content .close'),
    $left: $('#newinfo').find('.details .content .left'),
    $right: $('#newinfo').find('.details .content .right')
}).newinfoset('noScroll', () => {
    //scrollbar
    new Scrollbar({
        $con: $('#newinfo').find('.details .content ul li .txt .con'),
        $scroll: $('#newinfo').find('.details .content ul li .txt .scrollbar'),
        $bar: $('#newinfo').find('.details .content ul li .txt .scrollbar span')
    }).scrollbarset();
});

//ScrollShow
new ScrollShow([$('#newinfo .main .title'), $('#newinfo .main ul li')]).init();
// new ScrollShow([
//     $('#newinfo .main .title'),
//     $('#newinfo .main ul li:nth-of-type(1)'),
//     $('#newinfo .main ul li:nth-of-type(2)'),
//     $('#newinfo .main ul li:nth-of-type(3)'),
//     $('#newinfo .main ul li:nth-of-type(6)'),
//     $('#newinfo .main ul li:nth-of-type(5)'),
//     $('#newinfo .main ul li:nth-of-type(4)')
// ]).init();

// Banner
new Banner({
    $img: $('#game').find('.banner ul li'),
    $left: $('#game').find('.banner .leftArrow'),
    $right: $('#game').find('.banner .rightArrow')
}).init(3);
