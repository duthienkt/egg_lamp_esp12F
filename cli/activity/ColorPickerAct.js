import Color from 'absol/src/Color/Color';
import Activity from 'absol/src/AppPattern/Activity';
import Dom from 'absol/src/HTML5/Dom';
import '../style/color.css';

var _ = Dom.ShareInstance._;
var $ = Dom.ShareInstance.$;

function ColorPickerAct() {
    Activity.call(this);
    this.selectedLed = "LEFT";
    this.ev_mousedownColor = this.ev_mousedownColor.bind(this);
    this.ev_mouseendColor = this.ev_mouseendColor.bind(this);
    this.ev_mousemoveColor = this.ev_mousemoveColor.bind(this);
    this.ev_mousedownHue = this.ev_mousedownHue.bind(this);
    this.ev_mouseendHue = this.ev_mouseendHue.bind(this);
    this.ev_mousemoveHue = this.ev_mousemoveHue.bind(this);
    this.hue = 0;
    this.sat = 0;
    this.val = 0;
    this.leftColor = new Color([0, 0, 0, 0]);
    this.rightColor = new Color([0, 0, 0, 0]);
}


Object.defineProperties(ColorPickerAct.prototype, Object.getOwnPropertyDescriptors(Activity.prototype));
ColorPickerAct.prototype.constructor = ColorPickerAct;



ColorPickerAct.prototype.getView = function () {
    if (this.$view) return this.$view;
    this.$view = _({
        class: ['el-act', 'el-color-picker-act'],
        child: [
            {
                class: 'el-led-container',
                child: [
                    {
                        tag: 'button',
                        id: 'left-led',
                        class: ['el-led', 'el-selected'],
                        child: { text: 'LEFT' }
                    },
                    {
                        tag: 'button',
                        id: 'right-led',
                        class: 'el-led',
                        child: { text: "RIGHT" }
                    }
                ]
            },
            {
                class: 'el-color-picker-color-container',
                child: [
                    {
                        class: 'el-color-picker-color',
                        style: {
                            'background-color': 'red'
                        },
                        child: {
                            class: 'el-color-picker-sat',
                            child: { class: 'el-color-picker-val', child: '.el-color-dragger' }
                        }
                    },
                    {
                        class: 'el-color-picker-hue',
                        child: '.el-color-dragger'
                    }
                ]
            }
        ]
    });
    //standar screen is 411x731,
    this.$leftLedBtn = $('#left-led', this.$view).on('click', this.selectLed.bind(this, "LEFT"));
    this.$rightLedBtn = $('#right-led', this.$view).on('click', this.selectLed.bind(this, "RIGHT"));
    this.$color = $('.el-color-picker-color', this.$view)
        .on('mousedown', this.ev_mousedownColor);
    this.$colorDragger = $('.el-color-picker-sat .el-color-dragger', this.$view);
    this.$hue = $('.el-color-picker-hue', this.$view)
        .on('mousedown', this.ev_mousedownHue);
    this.$hueDragger = $('.el-color-picker-hue .el-color-dragger', this.$view);
    this.updateByLed();
    return this.$view;
};


ColorPickerAct.prototype.ev_mousedownColor = function (event) {
    var bound = this.$color.getBoundingClientRect();
    var sat = Math.min(1, Math.max(0, (event.clientX - bound.left) / bound.width));
    var val = Math.min(1, Math.max(0, (bound.bottom - event.clientY) / bound.height));
    this.setPickerColor(sat, val);
    $(document.body).on('mousemove', this.ev_mousemoveColor)
        .on('mouseup', this.ev_mouseendColor)
        .on('mouseleave', this.ev_mouseendColor);
};

ColorPickerAct.prototype.ev_mouseendColor = function (event) {
    $(document.body).off('mousemove', this.ev_mousemoveColor)
        .off('mouseup', this.ev_mouseendColor)
        .off('mouseleave', this.ev_mouseendColor);
};

ColorPickerAct.prototype.ev_mousemoveColor = function (event) {
    var bound = this.$color.getBoundingClientRect();
    var sat = Math.min(1, Math.max(0, (event.clientX - bound.left) / bound.width));
    var val = Math.min(1, Math.max(0, (bound.bottom - event.clientY) / bound.height));
    this.setPickerColor(sat, val);    this.updateByPicker();

};


ColorPickerAct.prototype.setPickerColor = function (sat, val) {
    this.sat = Math.max(0, Math.min(1, sat));
    this.val = Math.max(0, Math.min(1, val));
    this.$colorDragger.addStyle({
        left: this.sat * 100 + '%',
        bottom: this.val * 100 + '%'
    });
    this.updateByPicker();
    this.sendToDevice();
};



ColorPickerAct.prototype.ev_mousedownHue = function (event) {
    var bound = this.$hue.getBoundingClientRect();
    var hue = Math.min(1, Math.max(0, (event.clientY - bound.top) / bound.height));
    this.setPickerHue(hue);
    $(document.body).on('mousemove', this.ev_mousemoveHue)
        .on('mouseup', this.ev_mouseendHue)
        .on('mouseleave', this.ev_mouseendHue);
};

ColorPickerAct.prototype.ev_mouseendHue = function (event) {
    $(document.body).off('mousemove', this.ev_mousemoveHue)
        .off('mouseup', this.ev_mouseendHue)
        .off('mouseleave', this.ev_mouseendHue);
};

ColorPickerAct.prototype.ev_mousemoveHue = function (event) {
    var bound = this.$hue.getBoundingClientRect();
    var hue = Math.min(1, Math.max(0, (event.clientY - bound.top) / bound.height));
    this.setPickerHue(hue);

};

ColorPickerAct.prototype.setPickerHue = function (hue) {
    this.hue = Math.max(0, Math.min(1, hue));
    this.$hueDragger.addStyle({
        top: this.hue * 100 + '%',
    });
    this.$color.addStyle('backgroundColor', Color.fromHSB(this.hue, 1, 1));
    this.updateByPicker();
    this.sendToDevice();
};

ColorPickerAct.prototype.selectLed = function (value) {
    this.selectedLed = value;
    if (this.selectedLed == "LEFT") {
        this.$leftLedBtn.addClass('el-selected');
        this.$rightLedBtn.removeClass('el-selected');
    }
    else {
        this.$leftLedBtn.removeClass('el-selected');
        this.$rightLedBtn.addClass('el-selected');
    }
    this.updateByLed();
};

ColorPickerAct.prototype.updateByLed = function () {
    var color = this.selectedLed == 'LEFT' ? this.leftColor : this.rightColor;
    var hsla = color.toHSBA();
    this.setPickerColor(hsla[1], hsla[2]);
    this.setPickerHue(hsla[0]);
};

ColorPickerAct.prototype.updateByPicker = function () {
    var buttonElt = this.selectedLed == 'LEFT' ? this.$leftLedBtn : this.$rightLedBtn;
    var color = Color.fromHSB(this.hue, this.sat, this.val);
    this[this.selectedLed.toLocaleLowerCase() + 'Color'] = color;
    buttonElt.addStyle({
        backgroundColor: color.toString(),
        color: color.getContrastYIQ()
    })
};

ColorPickerAct.prototype.sendToDevice = function(){
    //todo
};

export default ColorPickerAct;