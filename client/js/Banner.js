export default class Banner {
    constructor(target) {
        this.$img = target.$img; //所有轮播图片
        this.$left = target.$left; //上一张
        this.$right = target.$right; //下一张
        this.length = this.$img.length; //图片数量
        this.index = 0; //起始第几张
        // console.log(this.$img);
        // console.log(this.$left);
        // console.log(this.$right);
    }
    init(index = 1) {
        this.index = index - 1;
        this.change()
            .clickImg()
            .left()
            .right();
    }
    //这一张
    clickImg(index) {
        this.$img.each(index => {
            this.$img.eq(index).on('click', () => {
                if (index !== this.index) {
                    this.index = index;
                    this.change();
                }
            });
        });
        return this;
    }
    //上一张
    left() {
        this.$left.on('click', () => {
            if (--this.index < 0)
                this.index = this.length - 1;
            this.change();
        });
        return this;
    }
    //下一张
    right() {
        this.$right.on('click', () => {
            if (++this.index >= this.length)
                this.index = 0;
            this.change();
        });
        return this;
    }
    change() {
        let [indexLeft, indexRight] = [this.index - 1, this.index + 1];
        if (indexLeft < 0)
            indexLeft = this.length - 1;
        if (indexRight >= this.length)
            indexRight = 0;
        this.$img.removeClass('middle left right');
        this.$img.eq(indexLeft).addClass('left');
        this.$img.eq(this.index).addClass('middle');
        this.$img.eq(indexRight).addClass('right');
        return this;
    }
}
