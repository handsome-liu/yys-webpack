// 新版本情报
export default class Newinfo {
    constructor(target) {
        this.$list = target.$list; //最开始的情报列表头ul
        this.$details = target.$details; //隐藏的情报详情，固定定位在最上层。
        this.$banner = target.$banner; //负责轮播滚动left
        this.$close = target.$close; //隐藏情报详情this.$details
        this.$left = target.$left; //负责轮播向左滚动一个单位的left:-1280px;
        this.$right = target.$right; //负责轮播向右滚动一个单位的left:-1280px;
        this.time = 500; //轮播速度
        this.listLen = this.$list.length; //轮播图片N张，因为是无缝，需要放多一张首张在最后，所以+1
    }
    // newinfo
    newinfoset(noScroll, callback = null) {
        this.list(noScroll, callback);
        this.close(noScroll);
        this.left();
        this.right();
    }
    //主列表点击出现弹出框
    list(noScroll, callback) {
        this.$list.each(index => {
            // console.log(this.$list.eq(index));
            this.$list.eq(index).on('click', () => {
                // console.log(this);
                // console.log(index);
                this.$banner.index = index;
                // console.log(this.$banner.index);
                this.$banner.css('right', `${this.$banner.index * 1280}px`);
                this.$details.show();
                $(document.body).addClass(noScroll);
                callback && callback();
            });
        });
    }
    // 点击关闭弹出框
    close(noScroll) {
        this.$close.on('click', () => {
            this.$details.hide();
            $(document.body).removeClass(noScroll);
        });
    }
    // 上一张图
    left() {
        let lastTime = new Date();
        this.$left.on('click', () => {
            if (new Date() - lastTime >= 500) {
                if (--this.$banner.index < 0) {
                    this.$banner.index = this.listLen - 1;
                    this.$banner.css('right', `${this.listLen * 1280}px`);
                }
                this.$banner.animate(
                    {
                        right: `${this.$banner.index * 1280}px`
                    },
                    this.time
                );
                // console.log(this.$banner.index);
                lastTime = new Date();
            }
        });
    }
    //下一张图
    right() {
        let lastTime = new Date();
        this.$right.on('click', () => {
            if (new Date() - lastTime >= 500) {
                if (++this.$banner.index >= this.listLen + 1) {
                    this.$banner.index = 1;
                    this.$banner.css('right', 0);
                }
                this.$banner.animate(
                    {
                        right: `${this.$banner.index * 1280}px`
                    },
                    this.time
                );
                // console.log(this.$banner.index);
                lastTime = new Date();
            }
        });
    }
}
