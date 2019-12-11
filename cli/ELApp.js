import Application from 'absol/src/AppPattern/Application';
import './style/app.css';
import Dom from 'absol/src/HTML5/Dom';
import ColorPickerAct from './activity/ColorPickerAct';

var _ = Dom.ShareInstance._;
var $ = Dom.ShareInstance.$;

/**
 * Quick fix
 */
Application.prototype.startActivity = function (activity) {
    if (this.currentActivity != null) {
        this.currentActivity.pause();
        this.activityStack.push(this.currentActivity);
    }
    this.currentActivity = activity;
    activity.attach(this);
    this.setContentView(activity.getView(), true);
    activity.start();
};

function ELApp(){
    Application.call(this);
}

Object.defineProperties(ELApp.prototype, Object.getOwnPropertyDescriptors(Application.prototype));
ELApp.prototype.constructor = ELApp;



ELApp.prototype.getView = function(){
    if (this.$view) return this.$view;
    this.$view = _({
        class:'el-app'
    });

    this.$attachook = _('attachhook').addTo(this.$view)
        .on('error', function () {
            Dom.addToResizeSystem(this);
            this.requestUpdateSize();
        });
    this.$attachook.requestUpdateSize = this.updateSize.bind(this);
    return this.$view;
};


ELApp.prototype.setContentView = function(view){
    this.getView().clearChild().addChild(view);
};

ELApp.prototype.onStart = function(){
    this.getView().addTo(document.body);
    this.startActivity(new ColorPickerAct());
};

ELApp.prototype.onDestroy = function(){
    this.getView().remove();  
};


ELApp.prototype.updateSize = function () {
    var bound = this.$view.getBoundingClientRect();
    this.$view.style.fontSize = Math.min(bound.width, bound.height, Math.max(bound.width, bound.height)*0.618) / 35 + 'px';
    if (bound.width > bound.height) this.$view.addClass('landscape');
    else this.$view.removeClass('landscape');
};

export default new ELApp();



