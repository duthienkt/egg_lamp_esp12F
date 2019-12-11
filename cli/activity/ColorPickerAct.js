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
              class:'el-color-picker-color',
              style:{
                  'background-color':'red'
              }, 
              child:{
                  class:'el-color-picker-sat',
                  child:'.el-color-picker-val'
              }
          }
        ]
    });
    
    return this.$view;
};

export default ColorPickerAct;