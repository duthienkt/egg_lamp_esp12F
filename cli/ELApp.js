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

export default new ELApp();



