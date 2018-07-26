// 视频
export default class Video {
    constructor(target) {
        //首屏
        this.$btn = target.$btn;
        this.$video = target.$video;
        this.$close = target.$close;
    }
    videoset(noScroll) {
        this.$btn.on('click', () => {
            this.$video.show();
            $(document.body).addClass(noScroll);
        });
        this.$close.on('click', () => {
            this.$video.hide();
            $(document.body).removeClass(noScroll);
        });
    }
}