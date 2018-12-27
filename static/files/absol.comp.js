(function(){
                    var t = new Date(1545908702464);
                    var t1 = new Date();
                    function pad(x){
                        if (x<10) x = '0' + x;
                        else x = ''+x;
                        return x;
                    }
                    function mill2hhmmss(t){
                        var s = Math.floor(t/1000);
                        var h = Math.floor(s/3600);
                        var m = Math.floor((s%3600)/60);
                        var s = s%60;
                        return pad(h)+':'+pad(m)+':'+pad(s);
                    }
                    var me = document.currentScript;

                    console.log('\n %c %c %c absol.comp ' + '  \u2730 ' + mill2hhmmss(t1.getTime() - t.getTime())  + ' \u2730  %c  %c  '+ me.src + '  %c %c \u272E%c\u272F%c\u272C \n\n', 'background: #d0d0ec; padding:5px 0;', 'background:  #d0d0ec; padding:5px 0;', 'color:  #d0d0ec; background: #898991; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'background: #dae6fc; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'color: #000080; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;');
                })();
var absol_comp_css = [
'',
'/******************  Trackbar    *****************************/',
'.absol-trackbar {',
'    height: 1.2em;',
'    min-width: 7em;',
'    display: inline-block;',
'    user-select: none;',
'    padding: 0 0.6em;',
'    box-sizing: border-box;',
'}',
'.absol-trackbar-line {',
'    display: block;',
'    position: relative;',
'    margin-top: 0.4em;',
'    height: 0.4em;',
'    background-color: rgb(200, 200, 200);',
'    -webkit-box-shadow: 0 0 0.2em 0.1em rgb(160, 160, 160) inset;',
'    -moz-box-shadow: 0 0 0.2em 0.1em rgb(160, 160, 160) inset;',
'    box-shadow: 0 0 0.2em 0.1em rgb(160, 160, 160) inset;',
'    border-radius: 0.15em;',
'}',
'.absol-trackbar-button {',
'    position: absolute;',
'    z-index: 1;',
'    top: -0.4em;',
'    /* bottom: -0.4em; */',
'    height: 1.2em;',
'    left: 0;',
'    margin-left: -0.6em;',
'    width: 1.2em;',
'    background: rgb(245, 245, 245);',
'    cursor: pointer;',
'    border-radius: 50%;',
'    border: solid 1px rgb(139, 139, 139);',
'}',
'/***************** number input *********************/',
'.absol-unit-input {',
'    display: inline-block;',
'    position: relative;',
'    height: 1.2em;',
'    min-width: 3em;',
'    border-radius: 0.23em;',
'    border: solid 1px rgb(139, 139, 139);',
'    background-color: white;',
'}',
'.absol-unit-input .absol-unit-input-text-container {',
'    position: absolute;',
'    top: 0;',
'    bottom: 0;',
'    left: 0.2em;',
'    right: 1.2em;',
'    overflow: hidden;',
'}',
'.absol-unit-input .absol-unit-input-unit-container {',
'    position: absolute;',
'    top: 0;',
'    bottom: 0;',
'    width: 1.2em;',
'    right: 0;',
'    overflow: hidden;',
'    text-align: center;',
'    padding-top: 0em;',
'    padding-right: 0.1em;',
'}',
'.absol-unit-input-text-container input {',
'    outline: none;',
'    background-color: transparent;',
'    border: none;',
'    text-align: right;',
'    width: 100%;',
'}',
'/************ trackbar with input ******************/',
'.absol-trackbar-input {',
'    box-sizing: border-box;',
'    display: inline-block;',
'    white-space: nowrap;',
'    position: relative;',
'    min-width: 13.5em;',
'    height: 1.2em;',
'}',
'.absol-trackbar-input-trackbar-container {',
'    position: absolute;',
'    left: 0;',
'    right: 3.5em;',
'    top: 0;',
'    bottom: 0;',
'}',
'.absol-trackbar-input-trackbar-container .absol-trackbar {',
'    width: 100%;',
'}',
'.absol-trackbar-input-unit-input-container {',
'    position: absolute;',
'    width: 3em;',
'    right: 0;',
'    top: 0;',
'    bottom: 0;',
'}',
'.absol-trackbar-input-unit-input-container .absol-unit-input {',
'    width: 100%;',
'}',
'/*********    modal *****************/',
'.absol-modal {',
'    position: fixed;',
'    top: 0;',
'    left: 0;',
'    right: 0;',
'    bottom: 0;',
'    box-sizing: border-box;',
'    z-index: 1000;',
'}',
'.absol-modal-hidden {',
'    visibility: hidden;',
'}',
'.absol-modal-hcenter {',
'    display: table;',
'    text-align: center;',
'    width: 100%;',
'    height: 100%;',
'}',
'.absol-modal-vcenter {',
'    display: table-cell;',
'    vertical-align: middle;',
'}',
'.absol-modal-container {',
'    display: inline-block;',
'    text-align: initial;',
'}',
'/***************************/',
'.absol-editabe-text {',
'    display: inline;',
'}',
'.absol-editabe-text span {',
'    font-style: normal !important;',
'    white-space: pre;',
'}',
'.absol-editabe-text-higne {',
'    display: inline-block;',
'    position: relative;',
'    width: 0px;',
'    height: 0ox;',
'}',
'.absol-editabe-text-higne input {',
'    position: absolute;',
'    display: none;',
'    border: none;',
'    top: -2;',
'    left: -2;',
'    padding-top: 0px;',
'    padding-left: 2px;',
'    padding-bottom: 4px;',
'    margin: 0;',
'    background: transparent;',
'    outline: none;',
'}',
'.absol-editabe-text.editing .absol-editabe-text-higne input {',
'    display: block;',
'}',
'.absol-editabe-text.editing span {',
'    visibility: hidden;',
'}',
'.absol-editabe-text.editing {',
'    -webkit-box-shadow: 0px 0px 2px 0px rgba(33, 77, 255, 1);',
'    -moz-box-shadow: 0px 0px 2px 0px rgba(33, 77, 255, 1);',
'    box-shadow: 0px 0px 2px 0px rgba(33, 77, 255, 1);',
'    border-radius: 0.17em;',
'}',
'/* ',
'.absol-multicellbutton {',
'    display: inline-block;',
'}',
'.absol-multicellbutton * {',
'    user-select: none;',
'    cursor: pointer;',
'}',
'.absol-multicellbutton .absol-multicellbutton-content{',
'    display: table;',
'    white-space: nowrap;',
'    ',
'}',
' */',
'/**************** Checkbox **************************/',
'.absol-checkbox {',
'    display: inline-block;',
'    /* white-space: nowrap */',
'}',
'.absol-checkbox label {',
'    text-decoration: none;',
'    font-weight: normal;',
'    -webkit-touch-callout: none;',
'    -webkit-user-select: none;',
'    -khtml-user-select: none;',
'    -moz-user-select: none;',
'    -ms-user-select: none;',
'    user-select: none;',
'}',
'.absol-checkbox input[type=\"checkbox\"]:not(:checked),',
'.absol-checkbox input[type=\"checkbox\"]:checked {',
'    position: absolute;',
'    left: -9999px;',
'}',
'.absol-checkbox input[type=\"checkbox\"]:not(:checked)+label,',
'.absol-checkbox input[type=\"checkbox\"]:checked+label {',
'    position: relative;',
'    cursor: pointer;',
'}',
'.absol-checkbox.left input[type=\"checkbox\"]:not(:checked)+label,',
'.absol-checkbox.left input[type=\"checkbox\"]:checked+label {',
'    padding-left: 1.643em;',
'}',
'.absol-checkbox.right input[type=\"checkbox\"]:not(:checked)+label,',
'.absol-checkbox.right input[type=\"checkbox\"]:checked+label {',
'    padding-right: 1.643em;',
'}',
'/* checkbox aspect */',
'.absol-checkbox input[type=\"checkbox\"]:not(:checked)+label:before,',
'.absol-checkbox input[type=\"checkbox\"]:checked+label:before {',
'    content: \'\';',
'    position: absolute;',
'    top: 0;',
'    width: 1.286em;',
'    height: 1.286em;',
'    border: 1px solid black;',
'    margin-top: -0.2em;',
'    margin-bottom: -0.2em;',
'    /*background: #fff;*/',
'    border-radius: 0.243em;',
'    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);',
'}',
'.absol-checkbox.right input[type=\"checkbox\"]:not(:checked)+label:before,',
'.absol-checkbox.right input[type=\"checkbox\"]:checked+label:before {',
'    right: 0;',
'}',
'.absol-checkbox.left input[type=\"checkbox\"]:not(:checked)+label:before,',
'.absol-checkbox.left input[type=\"checkbox\"]:checked+label:before {',
'    left: 0;',
'}',
'/* checked mark aspect */',
'.absol-checkbox input[type=\"checkbox\"]:not(:checked)+label:after,',
'.absol-checkbox input[type=\"checkbox\"]:checked+label:after {',
'    content: \'✔\';',
'    position: absolute;',
'    top: 0.2198em;',
'    /*font-size: 14px;*/',
'    line-height: 0.8;',
'    color: black;',
'    transition: all .2s;',
'}',
'.absol-checkbox.left input[type=\"checkbox\"]:not(:checked)+label:after,',
'.absol-checkbox.left input[type=\"checkbox\"]:checked+label:after {',
'    left: 0.2195em;',
'}',
'.absol-checkbox.right input[type=\"checkbox\"]:not(:checked)+label:after,',
'.absol-checkbox.right input[type=\"checkbox\"]:checked+label:after {',
'    right: 0.298em;',
'}',
'/* checked mark aspect changes */',
'.absol-checkbox input[type=\"checkbox\"]:not(:checked)+label:after {',
'    opacity: 0;',
'    transform: scale(0);',
'}',
'.absol-checkbox input[type=\"checkbox\"]:checked+label:after {',
'    opacity: 1;',
'    transform: scale(1);',
'}',
'/* disabled checkbox */',
'.absol-checkbox input[type=\"checkbox\"]:disabled:not(:checked)+label:before,',
'.absol-checkbox input[type=\"checkbox\"]:disabled:checked+label:before {',
'    box-shadow: none;',
'    border-color: #bbb;',
'    background-color: #ddd;',
'}',
'.absol-checkbox input[type=\"checkbox\"]:disabled:checked+label:after {',
'    color: #999;',
'}',
'.absol-checkbox input[type=\"checkbox\"]:disabled+label {',
'    color: #aaa;',
'}',
'/* accessibility */',
'/*.absol-checkbox input[type=\"checkbox\"]:checked:focus + label:before,*/',
'/*.absol-checkbox input[type=\"checkbox\"]:not(:checked):focus + label:before {*/',
'/*  border: 2px dotted blue;*/',
'/*}*/',
'/* hover style just for information */',
'.absol-checkbox label:hover:before {',
'    background: #cccccc;',
'}',
'/*********************  radio   *****************************************/',
'/* ',
'.absol-radio { */',
'    /* display: inline-block;',
'}',
'.absol-radio label {',
'    text-decoration: none;',
'    font-weight: normal;',
'    -webkit-touch-callout: none;',
'    -webkit-user-select: none;',
'    -khtml-user-select: none;',
'    -moz-user-select: none;',
'    -ms-user-select: none;',
'    user-select: none;',
'}',
'.absol-radio input[type=\"radio\"]:not(:checked),',
'.absol-radio input[type=\"radio\"]:checked {',
'    position: absolute;',
'    left: -9999px;',
'}',
'.absol-radio input[type=\"radio\"]:not(:checked)+label,',
'.absol-radio input[type=\"radio\"]:checked+label {',
'    position: relative;',
'    cursor: pointer;',
'}',
'.absol-radio.left input[type=\"radio\"]:not(:checked)+label,',
'.absol-radio.left input[type=\"radio\"]:checked+label {',
'    padding-left: 1.643em;',
'}',
'.absol-radio.right input[type=\"radio\"]:not(:checked)+label,',
'.absol-radio.right input[type=\"radio\"]:checked+label {',
'    padding-right: 1.643em;',
'}',
'.absol-radio input[type=\"radio\"]:not(:checked)+label:before,',
'.absol-radio input[type=\"radio\"]:checked+label:before {',
'    content: \'\';',
'    position: absolute;',
'    top: 0;',
'    width: 1.286em;',
'    height: 1.286em;',
'    border: 1px solid black;',
'    margin-top: -0.2em;',
'    margin-bottom: -0.2em;',
'   ',
'    border-radius: 50%;',
'    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);',
'}',
'.absol-radio.right input[type=\"radio\"]:not(:checked)+label:before,',
'.absol-radio.right input[type=\"radio\"]:checked+label:before {',
'    right: 0;',
'}',
'.absol-radio.left input[type=\"radio\"]:not(:checked)+label:before,',
'.absol-radio.left input[type=\"radio\"]:checked+label:before {',
'    left: 0;',
'}',
'.absol-radio input[type=\"radio\"]:not(:checked)+label:after,',
'.absol-radio input[type=\"radio\"]:checked+label:after {',
'    content: \'⬤\';',
'    position: absolute;',
'    top: 0.095em;',
'    line-height: 0.8;',
'    color: black;',
'    transition: all .2s;',
'}',
'.absol-radio.left input[type=\"radio\"]:not(:checked)+label:after,',
'.absol-radio.left input[type=\"radio\"]:checked+label:after {',
'    left: 0.23em;',
'}',
'.absol-radio.right input[type=\"radio\"]:not(:checked)+label:after,',
'.absol-radio.right input[type=\"radio\"]:checked+label:after {',
'    right: 0.298em;',
'}',
'.absol-radio input[type=\"radio\"]:not(:checked)+label:after {',
'    opacity: 0;',
'    transform: scale(0);',
'}',
'.absol-radio input[type=\"radio\"]:checked+label:after {',
'    opacity: 1;',
'    transform: scale(1);',
'}',
'.absol-radio input[type=\"radio\"]:disabled:not(:checked)+label:before,',
'.absol-radio input[type=\"radio\"]:disabled:checked+label:before {',
'    box-shadow: none;',
'    border-color: #bbb;',
'    background-color: #ddd;',
'}',
'.absol-radio input[type=\"radio\"]:disabled:checked+label:after {',
'    color: #999;',
'}',
'.absol-radio input[type=\"radio\"]:disabled+label {',
'    color: #aaa;',
'}',
'/* accessibility */',
'/*.absol-radio input[type=\"radio\"]:checked:focus + label:before,*/',
'/*.absol-radio input[type=\"radio\"]:not(:checked):focus + label:before {*/',
'/*  border: 2px dotted blue;*/',
'/* hover style just for information */',
'/* ',
'.absol-radio label:hover:before {',
'    background: #cccccc;',
'} */',
''
].join('\n');
var absol_comp_style = document.createElement('style');
absol_comp_style.setAttribute('id', 'absol_comp_css');
absol_comp_style.innerHTML = absol_comp_css;
document.head.appendChild(absol_comp_style);
absol.ShareCreator.unitinput = function () {
    var $ = absol.$;
    var _ = absol._;
    var res = _({
        class: 'absol-unit-input',
        extendEvent: 'change',
        child: [
            {
                class: 'absol-unit-input-text-container',
                child: 'input'
            },
            '.absol-unit-input-unit-container'
        ]
    });

    res.$textContainer = $('.absol-unit-input-text-containerr', res);
    res.$unitContainer = $('.absol-unit-input-unit-container', res);
    res.$input = $('input', res);

    absol.OOP.drillProperty(res, res.$input, 'value');

    var keyUpEventHandler = function (event) {
        event.unitInputValue = res.$input.value;
        res.emit('change', event);
    };

    res.$input.on('keyup', keyUpEventHandler);
    return res;
};


absol.ShareCreator.unitinput.property = {};
absol.ShareCreator.unitinput.property.unit = {
    set: function (value) {
        this.$unitContainer.innerHTML = value;
    },
    get: function () {
        return this.$unitContainer.innerHTML;
    }
};



absol.ShareCreator.unitinput.prototype.init = function (props) {
    Object.assign(this, props || {});
};




absol.ShareCreator.trackbar = function () {
    var $ = absol.$;
    var _ = absol._;

    var res = _({
        extendEvent: 'change',
        class: 'absol-trackbar',
        child: [{ class: 'absol-trackbar-line', child: '.absol-trackbar-button' }]
    });

    res.$bar = $('.absol-trackbar', res);
    res.$button = $('.absol-trackbar-button', res);
    res.$line = $('.absol-trackbar-line', res);
    var body = $('body');
    res.sync = res.afterAttached(60);

    var mouseUpEventHandler = function (event) {
        body.off('mousemove', mouseMoveEventHandler);
    };

    var mouseMoveEventHandler = function (event) {
        var lineWidth = res.$line.getBoundingClientRect().width;
        var delta = event.movementX / lineWidth * (res.rightValue - res.leftValue);
        var newValue = Math.max(res.leftValue, Math.min(res.rightValue, res.value + delta));
        res.value = newValue;
        event.trackbarValue = res.value;
        res.emit('change', event);
    };


    var mouseDownEventHandler = function (event) {
        body.on('mousemove', mouseMoveEventHandler);
        body.once('mouseup', mouseUpEventHandler);
        body.once('mouseleave', mouseUpEventHandler);
        // button.addStyle('background', 'blue');
    };

    res.$button.on('mousedown', mouseDownEventHandler);

    return res;


};

absol.ShareCreator.trackbar.property = {};

absol.ShareCreator.trackbar.property.value = {
    set: function (value) {
        value = parseFloat(value + '');
        if (isNaN(value)) value = 0;

        this._value = value;
        this.sync.then(function () {
            var left = Math.map(value, this.leftValue, this.rightValue, 0, 100);
            this.$button.addStyle('left', left + '%');
        }.bind(this));
    },

    get: function () {
        return Math.max(this.leftValue, Math.min(this.rightValue, this._value));
    }
};

absol.ShareCreator.trackbar.property.leftValue = {
    set: function (value) {
        value = parseFloat(value + '');
        if (isNaN(value)) value = 0;
        this._leftValue = value;

    },
    get: function () {
        return this._leftValue || 0;
    }
};

absol.ShareCreator.trackbar.property.rightValue = {
    set: function (value) {
        value = parseFloat(value + '');
        if (isNaN(value)) value = 1;
        this._rightValue = value;

    },
    get: function () {
        return this._rightValue || 1;
    }
};


absol.ShareCreator.trackbar.prototype.init = function (props) {
    Object.assign(this, props || {});
};




absol.ShareCreator.trackbarinput = function () {
    var $ = absol.$;
    var _ = absol._;
    var res = _({
        class: 'absol-trackbar-input',
        extendEvent: 'change',
        child: [{
            class: 'absol-trackbar-input-trackbar-container',
            child: 'trackbar'
        },
        {
            class: 'absol-trackbar-input-unit-input-container',
            child: 'unitinput'
        }
        ]
    });
    res.$trackbar = $('trackbar', res);
    res.$input = $('unitinput', res);

    absol.OOP.drillProperty(res, res.$input, 'unit');
    absol.OOP.drillProperty(res, res.$trackbar, ['leftValue', 'rightValue']);

    res.$trackbar.on('change', function () {
        res.$input.value = res.value + '';
        res.emit('change', res.value);
    });

    res.$input.on('change', function (event) {
        var newValue = parseFloat(event.unitInputValue);
        if (!isNaN(newValue)) {
            newValue = Math.max(res.leftValue, Math.min(res.rightValue, newValue));
            res.$trackbar.value = newValue;
        }
    });

    return res;
};

absol.ShareCreator.trackbarinput.prototype.init = function (props) {
    props = props || {};
    props.leftValue = props.leftValue || 0;
    props.value = props.value || props.leftValue;
    Object.assign(this, props);
    this.value = props.value;
};
absol.ShareCreator.trackbarinput.property = {};

absol.ShareCreator.trackbarinput.property.value = {
    set: function (value) {
        this.$trackbar.value = value || 0;
        this.$input.value = this.value + '';
    },
    get: function () {
        return parseFloat((this.valueFixed === undefined ? this.$trackbar.value : this.$trackbar.value.toFixed(this.valueFixed)) + '');
    }
};

absol.ShareCreator.trackbarinput.property.valueFixed = {
    set: function (value) {
        if (value === undefined || value === null) value = undefined;
        this._valueFixed = value;
        this.$input.value = this.value + '';
    },
    get: function () {
        return this._valueFixed;
    }
};


/**
x = _('modal');
y = _('input')
x.addStyle('z-index', '1000')
x.addChild(y)
x.addTo(body)
 */

absol.ShareCreator.modal = function () {
    var $ = absol.$;
    var _ = absol._;

    var res = _({
        class: 'absol-modal',
        extendEvent: 'sizechange'
    });

    res.$child = undefined;

    return res;
};


absol.ShareCreator.modal.prototype.addChild = function (child) {
    this.removeStyle('padding-left');
    this.removeStyle('padding-top');
    this.clearChild();
    this.super(child);
    this.$child = child;
    this.afterAttached().then(this._update.bind(this));
    return this;
};

absol.ShareCreator.modal.prototype._update = function () {
    if (!this.$child) return;
    var nBound = this.getBoundingClientRect();
    var cBound = this.$child.getBoundingClientRect();
    var dx = (nBound.width - cBound.width) / 2;
    var dy = (nBound.height - cBound.height) / 2;
    this.addStyle('padding-left', dx + 'px');
    this.addStyle('padding-top', dy + 'px');
};




absol.ShareCreator.modal.property = {};
absol.ShareCreator.modal.property.show = {
    set: function (value) {
        if (value)
            this.removeClass('absol-modal-hidden');
        else
            this.addClass('absol-modal-hidden');
    },
    get: function () {
        return !this.containsClass('absol-modal-hidden');
    }
};






//hack code
Object.defineProperty(absol.ShareCreator, 'slide-input', {
    set: function (value) {
        console.warn("");
    },
    get: function () {
        return this.trackbar;
    }
});



absol.ShareCreator.editabletext = function () {
    var _ = absol._;
    var $ = absol.$;
    var res = _({
        class: 'absol-editabe-text',
        extendEvent: ['blur', 'focus', 'change', 'modify'],
        child: [
            {
                class: 'absol-editabe-text-higne',
                child: '<input type="text">'
            },
            'span'
        ]
    });
    res.$span = $('span', res);
    res.$text = document.createTextNode('');
    res.$span.addChild(res.$text);

    window.de = res.$span;
    res.$higne = $('.absol-editabe-text-higne', res);
    res.$input = $('input', res);

    absol.OOP.drillProperty(res, res.$input, ['selectionStart', 'selectionEnd']);
    res.eventHanler = absol.OOP.bindFunctions(res, absol.ShareCreator.editabletext.eventHanler);
    res.sync = res.afterAttached();

    res.$input.on('keydown', res.eventHanler.inputKeyDown, true);
    res.$input.on('change', res.eventHanler.inputChange);
    res.$input.on('blur', res.eventHanler.inputBlur);
    return res;
};


absol.ShareCreator.editabletext.prototype.focus = function () {
    this.$input.focus();
};
absol.ShareCreator.editabletext.prototype.blur = function () {
    this.$input.blur();
};

absol.ShareCreator.editabletext.prototype.select = function () {
    this.$input.select();
};

absol.ShareCreator.editabletext.prototype.edit = function (flag) {
    this.editing = !!flag;
    this.sync = this.sync.then(function () {
        if (flag) {
            this.focus();
            this.select();
        }
        else
            this.blur();
    }.bind(this));
    return this.sync;
}

absol.ShareCreator.editabletext.prototype._update = function () {
    this.sync = this.sync.then(function () {
        return new Promise(function (rs) {
            // setTimeout(function () {
            var bound = this.getBoundingClientRect();
            var higneBound = this.$higne.getBoundingClientRect();
            var fsize = this.getFontSize();
            this.$input.addStyle('width', bound.width + 4 + fsize * 0 + 'px');
            this.$input.addStyle('height', bound.height + 4 + 'px');
            this.$input.addStyle('left', bound.left - higneBound.left - 2 + 'px');
            this.$input.addStyle('top', bound.top - higneBound.top - 2 + 'px');
            rs();
            // }.bind(this), 0);
        }.bind(this));
    }.bind(this));
}

absol.ShareCreator.editabletext.property = {};

absol.ShareCreator.editabletext.property.text = {
    set: function (value) {
        this.$text.textContent = value;
        this.$input.value = value;
    },

    get: function () {
        return this.$text.textContent;
    }
}


absol.ShareCreator.editabletext.property.editing = {
    set: function (value) {
        console.log('setter editting', value, this._editting)
        if (this._editting === value) return;
        this._editting = !!value;
        if (value) {
            this.$input.value = this.text;
            this._update();
            this.sync = this.sync.then(function () {
                this.addClass('editing');
                this.$input.value = this.text;
                this.$input.addStyle('font', this.$span.getComputedStyleValue('font'));
                this.$input.addStyle('font-style', this.$span.getComputedStyleValue('font-style'));
                this.$input.addStyle('color', this.$span.getComputedStyleValue('color'));
            }.bind(this));

        }
        else {
            this.removeClass('editing');
        }
    },
    get: function () {
        return !!this._editting;
    }
};


absol.ShareCreator.editabletext.eventHanler = {};

absol.ShareCreator.editabletext.eventHanler.inputKeyDown = function (event) {
    requestAnimationFrame(function () {
        this.text = this.$input.value;
        this._update();
        event.text = this.text;
        this.emit('modify', event);
    }.bind(this));
};


absol.ShareCreator.editabletext.eventHanler.inputChange = function (event) {
    this.editing = false;
    this.emit('change', event);
};

absol.ShareCreator.editabletext.eventHanler.inputBlur = function (event) {
    this.editing = false;
    this.emit('blur', event);
};


// absol.ShareCreator.multicellbutton = function () {
//     var _ = absol._;
//     var $ = absol.$;
//     var res = _({
//         tag: '',

//     })
// };

// absol










absol.ShareCreator.checkbox = function () {
    var _ = absol._;
    var $ = absol.$;
    var id = 'input' + Math.random().toFixed(6).replace(/\./g, '');
    var res = _({
        class: ['absol-checkbox', 'left'],
        extendEvent: 'change',
        child: [
            {
                tag: 'input',
                attr: { type: 'checkbox', id: id },
            },
            {
                tag: 'label',
                attr: { for: id }
            }
        ]
    });
    res.$input = $('input', res);
    res.$label = $('label', res);

    res.on('click', absol.ShareCreator.checkbox.eventHandler.click.bind(res));

    absol.OOP.drillProperty(res, res.$input, 'checked');
    absol.OOP.drillProperty(res, res.$label, 'text', 'innerHTML');
    return res;
};

//v, labelText, checked

absol.ShareCreator.checkbox.property = {};
absol.ShareCreator.checkbox.property.rev = {
    set: function (value) {
        if (value) {
            this.addClass('right').removeClass('left');
        }
        else {
            this.removeClass('right').addClass('left');
        }
    },
    get: function () {
        return this.containsClass('right');
    }
};

absol.ShareCreator.checkbox.eventHandler = {};
absol.ShareCreator.checkbox.eventHandler.click = function (event) {
    this.emit('change');
};



// absol.ShareCreator.radio = function () {
//     var _ = absol._;
//     var $ = absol.$;
//     var id = 'input' + Math.random().toFixed(6).replace(/\./g, '');
//     var res = _({
//         class: ['absol-radio', 'left'],
//         extendEvent: 'change',
//         child: [
//             {
//                 tag: 'input',
//                 attr: { type: 'radio', id: id },
//             },
//             {
//                 tag: 'label',
//                 attr: { for: id }
//             }
//         ]
//     });
//     res.$input = $('input', res);
//     res.$label = $('label', res);

//     res.on('click', absol.ShareCreator.radio.eventHandler.click.bind(res));

//     absol.OOP.drillProperty(res, res.$input, 'checked');
//     absol.OOP.drillProperty(res, res.$label, 'text', 'innerHTML');
//     return res;
// };

// //v, labelText, checked

// absol.ShareCreator.radio.property = Object.assign({}, absol.ShareCreator.checkbox.property);
// absol.ShareCreator.radio.property.name = {
//     set: function (name) {
//         this.$input.setAttribute('name', name);

//     },
//     get: function () {
//         return this.$input.getAttribute('name');
//     }
// };

// absol.ShareCreator.radio.prototype.init = function (props) {
//     this.super(props);
// }

// absol.ShareCreator.radio.eventHandler = Object.assign({}, absol.ShareCreator.checkbox.eventHandler);


absol.ShareCreator.radio = function () {
    var _ = absol._;
    var $ = absol.$;
    var id = 'input' + Math.random().toFixed(6).replace(/\./g, '');//for="${id}"
    var res = _(`
    <div class="absol-radio">
        <input type="radio" id="${id}" />
        <svg class="absol-radio-icon absol-radio-icon-left" width="20" height="20" version="1.1" viewBox="0 0 5.2917 5.2917"
            xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0 -291.71)">
                <circle cx="2.6458" cy="294.35" r="2.4626" style="fill:none;stroke-opacity:.99497;stroke-width:.26458;stroke:#000;" />
                <circle class="dot" cx="2.6458" cy="294.35" style="fill-rule:evenodd;" />
            </g>
        </svg>
        <label style="display:none"></label>
        <svg class="absol-radio-icon absol-radio-icon-right" width="20" height="20" version="1.1" viewBox="0 0 5.2917 5.2917"
            xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0 -291.71)">
                <circle cx="2.6458" cy="294.35" r="2.4626" style="fill:none;stroke-opacity:.99497;stroke-width:.26458;stroke:#000" />
                <circle class="dot" cx="2.6458" cy="294.35" style="fill-rule:evenodd;" />
            </g>
        </svg>
    </div>`);
    res.defineEvent('change');
    res.$input = $('input', res);
    res.$label = $('label', res);



    res.on('click', function (event) {
        if (!res.checked){
            res.checked = true;
            res.emit('change', event);
        }
    });

    res.sync = res.afterAttached().then(function(){
        res.checked = res.checked;
    });


    res.$label = $('label');
   
    return res;
};

absol.ShareCreator.radio.property = {
    checked: {
        set: function (value) {
            this.$input.checked = !!value;
            if (this.checked) {
                this.addClass('checked');
                var _this = this;
                setTimeout(function () {
                    function finish(event) {
                        if (!_this.checked) _this.removeClass('checked')
                        document.body.removeEventListener('click', finish, false);
                    }
                    document.body.addEventListener('click', finish, false);
                }, 100);
            }
            else {
                this.removeClass('checked');
            }
        },
        get: function () {
            return this.$input.checked;
        }
    },
    name: {
        set: function (name) {
            this.$input.setAttribute('name', name);

        },
        get: function () {
            return this.$input.getAttribute('name');
        }
    }, 
    text:{
        set:function(value){
            value = (value||'').trim();
            this.$label.innerHTML = value;
            if (value.length==0) this.$label.addStyle('display', 'none');
            else this.$label.removeStyle('display');
        },
        get:function(){

        }
    }
};
