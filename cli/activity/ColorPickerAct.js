import Color from 'absol/src/Color/Color';
import Activity from 'absol/src/AppPattern/Activity';
import Dom from 'absol/src/HTML5/Dom';
import '../style/color.css';

var _ = Dom.ShareInstance._;
var $ = Dom.ShareInstance.$;

function ColorPickerAct() {
    Activity.call(this);
}


Object.defineProperties(ColorPickerAct.prototype, Object.getOwnPropertyDescriptors(Activity.prototype));
ColorPickerAct.prototype.constructor = ColorPickerAct;





ColorPickerAct.prototype.getView = function () {
    if (this.$view) return this.$view;
    this.$view = _({
        class: ['el-act', 'el-color-picker-act'],
        child: [
            {
                class: 'el-color-picker-color-container',
                child: {
                    class: 'el-color-picker-color',
                    style: {
                        'background-color': 'red'
                    },
                    child: {
                        class: 'el-color-picker-sat',
                        child: '.el-color-picker-val'
                    }
                }
            }
        ]
    });
    //standar screen is 411x731,
    this.$attachook = _('attachhook').addTo(this.$view)
        .on('error', function () {
            Dom.addToResizeSystem(this);
            this.requestUpdateSize();
        });
    this.$attachook.requestUpdateSize = this.updateSize.bind(this);
    return this.$view;
};

ColorPickerAct.prototype.updateSize = function () {
    var bound = this.$view.getBoundingClientRect();
    this.$view.style.fontSize = Math.min(bound.width, bound.height) / 35 + 'px';
    if (bound.width > bound.height) this.$view.addClass('landscape');
    else this.$view.removeClass('landscape');
};

export default ColorPickerAct;