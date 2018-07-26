//自制滚动条
export default class Scrollbar {
    constructor(target) {
        this.$con = target.$con; // 滚动内容
        this.$scroll = target.$scroll; // 滚动条
        this.$bar = target.$bar; // 滑块
        this.time = 300;
        // console.log(this.$con);
        // console.log(this.$scroll);
        // console.log(this.$bar);
    }
    scrollbarset() {
        this.dragBar();
        this.preventDefault({
            dragstart: this.$bar,
            contextmenu: this.$bar,
            selectstart: this.$bar //目标对象被开始选中事件
        });
        this.scroll(1); //滚轮滚动一下，一个单位33.33333206176758px的距离
        this.clickMoveBar();
    }
    //滚轮事件
    scroll(speed) {
        this.$con.each(index => {
            /*            scrollHeight        barHeight        barTop
             *    prop = —————————————— = ———————————————— = ——————————
             *             conHeight        scrollHeight       conTop
             */
            const scrollHeight = this.$scroll.eq(index).height(),
                prop = scrollHeight / this.$con.eq(index).height();
            this.$con.eq(index).on('mousewheel', event => {
                let barTop = this.$bar.eq(index).position().top + event.originalEvent.deltaY * speed * prop;
                barTop = Math.max(barTop, 0);
                barTop = Math.min(barTop, scrollHeight - this.$bar.eq(index).height());
                //滑块this.$bar相对于父元素的位置
                this.$bar.eq(index).css('top', `${barTop}px`);
                //滑块this.$bar和内容this.$con的比例高度
                this.$con.eq(index).css('top', `${-barTop / prop}px`);
            });
        });
        return this;
    }
    //滑块函数
    dragBar() {
        // 遍历滑块this.$bar，根据this.$con的内容高度来制定滑块this.$bar的高度
        this.$bar.each(index => {
            //prop = scrollHeight / conHeight = barHeight / scrollHeight = barTop / conTop
            const scrollHeight = this.$scroll.eq(index).height(),
                prop = scrollHeight / this.$con.eq(index).height(),
                barHeight = prop * scrollHeight;
            this.$bar
                .eq(index)
                .height(barHeight)
                .on('mousedown.dragBar', event => {
                    // console.log('mousedown');
                    //获取当前位置和初始鼠标位置
                    const [current, start] = [this.$bar.eq(index).position().top, event.clientY];
                    // console.log(current);
                    // console.log(start);
                    $(document).on({
                        'mousemove.dragBar': event => {
                            // console.log('mousemove');
                            let barTop = current + (event.clientY - start);
                            barTop = Math.max(barTop, 0);
                            barTop = Math.min(barTop, scrollHeight - this.$bar.eq(index).height());
                            //滑块this.$bar相对于父元素的位置
                            this.$bar.eq(index).css('top', barTop);
                            //滑块this.$bar和内容this.$con的比例高度
                            this.$con.eq(index).css('top', -barTop / prop);
                        },
                        'mouseup.dragBar': () => {
                            // console.log('mouseup');
                            $(document).off('mousemove.dragBar mouseup.dragBar');
                        }
                    });
                });
        });
        return this;
    }
    //滚动条点击，滑块滑动
    clickMoveBar() {
        this.$scroll.each(index => {
            let lastTime = new Date();
            this.$scroll.eq(index).on('click', event => {
                const scrollHeight = this.$scroll.eq(index).height(),
                    prop = scrollHeight / this.$con.eq(index).height(),
                    // 鼠标点击位置距离滚动条顶端的位置
                    mouseTop = event.clientY - (this.$scroll.eq(index).offset().top - $(document).scrollTop());
                //滑块this.$bar距离滚动条顶端的位置
                let barTop = this.$bar.eq(index).position().top;
                // console.log(barTop,mouseTop);
                if (event.target == this.$scroll.get(index)) {
                    // console.log(event.target);
                    barTop = mouseTop > barTop ? barTop + 50 : barTop - 50;
                    barTop = Math.max(barTop, 0);
                    barTop = Math.min(barTop, scrollHeight - this.$bar.eq(index).height());
                    if (new Date() - lastTime > this.time) {
                        this.$bar.eq(index).animate({ top: barTop }, this.time);
                        this.$con.eq(index).animate({ top: -barTop / prop }, this.time);
                        lastTime = new Date();
                    }
                }
            });
        });
    }
    //禁止默认事件
    preventDefault(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                obj[key].on(key, event => {
                    event.preventDefault();
                });
            }
        }
        return this;
    }
}
