(function () {
    var t = new Date(1547195661824);
    var t1 = new Date();
    function pad(x) {
        if (x < 10) x = '0' + x;
        else x = '' + x;
        return x;
    }
    function mill2hhmmss(t) {
        var s = Math.floor(t / 1000);
        var h = Math.floor(s / 3600);
        var m = Math.floor((s % 3600) / 60);
        var s = s % 60;
        return pad(h) + ':' + pad(m) + ':' + pad(s);
    }
    var me = document.currentScript;

    console.log('\n %c %c %c absol ' + '  \u2730 ' + mill2hhmmss(t1.getTime() - t.getTime()) + ' \u2730  %c  %c  ' + me.src + '  %c %c \u272E%c\u272F%c\u272C \n\n', 'background: #d0d0ec; padding:5px 0;', 'background:  #d0d0ec; padding:5px 0;', 'color:  #d0d0ec; background: #898991; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'background: #dae6fc; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'color: #000080; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;');
})();

//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                          //
//                                 POLYFILL                                                 //
//                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////


!function (e, n) { "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n() }(0, function () { "use strict"; function e(e) { var n = this.constructor; return this.then(function (t) { return n.resolve(e()).then(function () { return t }) }, function (t) { return n.resolve(e()).then(function () { return n.reject(t) }) }) } function n() { } function t(e) { if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], u(e, this) } function o(e, n) { for (; 3 === e._state;)e = e._value; 0 !== e._state ? (e._handled = !0, t._immediateFn(function () { var t = 1 === e._state ? n.onFulfilled : n.onRejected; if (null !== t) { var o; try { o = t(e._value) } catch (f) { return void i(n.promise, f) } r(n.promise, o) } else (1 === e._state ? r : i)(n.promise, e._value) })) : e._deferreds.push(n) } function r(e, n) { try { if (n === e) throw new TypeError("A promise cannot be resolved with itself."); if (n && ("object" == typeof n || "function" == typeof n)) { var o = n.then; if (n instanceof t) return e._state = 3, e._value = n, void f(e); if ("function" == typeof o) return void u(function (e, n) { return function () { e.apply(n, arguments) } }(o, n), e) } e._state = 1, e._value = n, f(e) } catch (r) { i(e, r) } } function i(e, n) { e._state = 2, e._value = n, f(e) } function f(e) { 2 === e._state && 0 === e._deferreds.length && t._immediateFn(function () { e._handled || t._unhandledRejectionFn(e._value) }); for (var n = 0, r = e._deferreds.length; r > n; n++)o(e, e._deferreds[n]); e._deferreds = null } function u(e, n) { var t = !1; try { e(function (e) { t || (t = !0, r(n, e)) }, function (e) { t || (t = !0, i(n, e)) }) } catch (o) { if (t) return; t = !0, i(n, o) } } var c = setTimeout; t.prototype["catch"] = function (e) { return this.then(null, e) }, t.prototype.then = function (e, t) { var r = new this.constructor(n); return o(this, new function (e, n, t) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t }(e, t, r)), r }, t.prototype["finally"] = e, t.all = function (e) { return new t(function (n, t) { function o(e, f) { try { if (f && ("object" == typeof f || "function" == typeof f)) { var u = f.then; if ("function" == typeof u) return void u.call(f, function (n) { o(e, n) }, t) } r[e] = f, 0 == --i && n(r) } catch (c) { t(c) } } if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array"); var r = Array.prototype.slice.call(e); if (0 === r.length) return n([]); for (var i = r.length, f = 0; r.length > f; f++)o(f, r[f]) }) }, t.resolve = function (e) { return e && "object" == typeof e && e.constructor === t ? e : new t(function (n) { n(e) }) }, t.reject = function (e) { return new t(function (n, t) { t(e) }) }, t.race = function (e) { return new t(function (n, t) { for (var o = 0, r = e.length; r > o; o++)e[o].then(n, t) }) }, t._immediateFn = "function" == typeof setImmediate && function (e) { setImmediate(e) } || function (e) { c(e, 0) }, t._unhandledRejectionFn = function (e) { void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e) }; var l = function () { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if ("undefined" != typeof global) return global; throw Error("unable to locate global object") }(); "Promise" in l ? l.Promise.prototype["finally"] || (l.Promise.prototype["finally"] = e) : l.Promise = t });


(function () {
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
            || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var id = window.setTimeout(function () { callback(element); },
                1000 / 60);
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());


if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
}


if (!Object.merge) {
    Object.merge = function () {
        var res = arguments[0];
        for (var i = 1; i < arguments.length; ++i) {
            var o = arguments[i];
            for (var key in o)
                if (o[key] != undefined)
                    res[key] = o[key];
        }
        return res;
    }
}


if (!Object.assign) {
    Object.assign = function () {
        var res = arguments[0];
        for (var i = 1; i < arguments.length; ++i) {
            var o = arguments[i];
            for (var key in o)
                res[key] = o[key] != undefined ? o[key] : res[key];
        }
        return res;
    }
}

if (!Array.prototype.fill) {
    Object.defineProperty(Array.prototype, 'fill', {
        value: function (value) {
            if (this == null) {
                throw new TypeError('this is null or not defined');
            }
            var O = Object(this);
            var len = O.length >>> 0;
            var start = arguments[1];
            var relativeStart = start >> 0;
            var k = relativeStart < 0 ?
                Math.max(len + relativeStart, 0) :
                Math.min(relativeStart, len);
            var end = arguments[2];
            var relativeEnd = end === undefined ?
                len : end >> 0;
            var final = relativeEnd < 0 ?
                Math.max(len + relativeEnd, 0) :
                Math.min(relativeEnd, len);
            while (k < final) {
                O[k] = value;
                k++;
            }
            return O;
        }
    });
}

if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () { },
            fBound = function () {
                return fToBind.apply(this instanceof fNOP
                    ? this
                    : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        if (this.prototype) {
            // Function.prototype doesn't have a prototype property
            fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();

        return fBound;
    };
}



if (!window.module) window.module = {};

var absol = {};
absol._dirname = (document.currentScript.src.match(/.+\/\/(.+\/)/) || ['./'])[0];

if (module) module.exports = absol;
absol.OOP = {};

/**
 * @param {Object} object
 * @param {Sttring} key
 * @param {Function} method
*/
absol.OOP.overideMethod = function (object, key, method) {
    if (object[key] === undefined) object[key] = method;
    else {
        var _superMethod = object[key];
        object[key] = (function (_superMethod, method) {
            return function () {
                var _super = this.super;
                this.super = _superMethod;
                var result = method.apply(this, arguments);
                this.super = _super;
                return result;
            };

        })(_superMethod, method);
    }
};


absol.OOP.extends = function (object, prototype) {
    for (var key in prototype) {
        absol.OOP.overideMethod(object, key, prototype[key]);
    }
};


absol.OOP.drillProperty = function (topObject, botObject, keyTop, keyBot) {
    if (typeof (keyTop) == 'string') {
        keyBot = keyBot || keyTop;
        Object.defineProperty(topObject, keyTop, {
            set: function (value) {
                botObject[keyBot] = value;
            },
            get: function () {
                return botObject[keyBot];
            }
        });
    }
    else {
        if (keyTop instanceof Array) {
            for (var i = 0; i < keyTop.length; ++i) {
                absol.OOP.drillProperty(topObject, botObject, keyTop[i], keyTop[i]);
            }
        }
        else {
            for (var key in keyTop) {
                absol.OOP.drillProperty(topObject, botObject, key, keyTop[key]);
            }
        }
    }
};

absol.OOP.bindFunctions = function (_this, handlers) {
    var res = {};
    for (var key in handlers) {
        res[key] = handlers[key].bind(_this);
    }
    return res;
};




absol.OOP.inheritCreator = function (parent, child) {
    if (child.property) {
        if (parent.property) {
            for (i in parent.property) {
                if (!child.property[i]) child.property[i] = parent.property[i];
            }
        }
    }
    for (var i in parent.prototype) {
        if (!child.prototype[i]) {
            child.prototype[i] = parent.prototype[i];
        }
        else {
            child.prototype[i] = (function (superFunction, childFunction) {
                return function () {
                    var _super = this.super;
                    this.super = superFunction;
                    var result = childFunction.apply(this, arguments);
                    this.super = _super;
                    return result;
                }
            })(parent.prototype[i], child.prototype[i]);
        }
    }
};
absol.EventEmittor = function EventEmittor() {
    this.absolInstanceOf = this.absolInstanceOf || {};
    if (this.absolInstanceOf['EventEmittor']) return;
    this.absolInstanceOf['EventEmittor'] = true;

    this.extendEvents = { supported: {}, prioritize: {}, nonprioritize: {} };
    if (!(this instanceof EventEmittor)) {
        Object.assign(this, EventEmittor.prototype);
    }
};

absol.EventEmittor.prototype.defineEvent = function (name) {
    if (name instanceof Array) {
        for (var i = 0; i < name.length; ++i)
            this.extendEvents.supported[name[i]] = true;

    }
    else
        this.extendEvents.supported[name] = true;
    return this;
};

absol.EventEmittor.prototype.isSupportedEvent = function (name) {
    return !!this.extendEvents.supported[name];
};


absol.EventEmittor.prototype.emit = function (eventName, data) {
    var others = Array.prototype.slice.call(arguments, 1);
    if (this.isSupportedEvent(eventName)) {
        var listenerList;
        if (this.extendEvents.prioritize[eventName]) {
            listenerList = this.extendEvents.prioritize[eventName].slice();
            for (var i = 0; i < listenerList.length; ++i) {
                listenerList[i].wrappedCallback.apply(this, others);
            }

        }

        if (this.extendEvents.nonprioritize[eventName]) {
            listenerList = this.extendEvents.nonprioritize[eventName].slice();
            for (var i = 0; i < listenerList.length; ++i) {
                listenerList[i].wrappedCallback.apply(this, others);
            }
        }
    }
    else {
        if (this.dispatchEvent) {
            var event = new Event(eventName);
            data && Object.assign(event, data);
            this.dispatchEvent(event);
        } else
            throw new Error("Not support event " + eventName);
    }
}





absol.EventEmittor.prototype.eventEmittorOnWithTime = function (isOnce, arg0, arg1, arg2) {
    if (typeof arg0 == 'object') {
        for (var key in arg0) {
            this.eventEmittorOnWithTime(isOnce, key, arg0[key]);
        }
        return this;
    }
    else {
        if (typeof arg1 == 'object') {
            return this.eventEmittorOnWithTime(isOnce, arg0, arg1.callback, arg1.cap);
        } else {
            var eventArr = this.extendEvents[arg2 ? 'prioritize' : 'nonprioritize'][arg0] || [];
            var eventIndex = -1;
            for (var i = 0; i < eventArr.length; ++i) {
                if (eventArr[i].wrappedCallback == arg1) {
                    eventIndex = i;
                    break;
                }
            }
            if (eventIndex < 0) {
                var event = { isOnce: isOnce, eventName: arg0, callback: arg1, cap: !!arg2 };
                //wrappedCallback will be call
                if (isOnce) {
                    event.wrappedCallback = function (data) {
                        event.callback.call(this, data);
                        this.off(event.eventName, event.wrappedCallback, event.cap);
                    };
                }
                else {
                    event.wrappedCallback = event.callback;
                }

                if (!this.isSupportedEvent(arg0)) {
                    if (this.addEventListener) {
                        this.addEventListener(arg0, event.wrappedCallback, !!arg2);
                    }
                    else {
                        this.attachEvent('on' + arg0, arg1, !!arg2);
                    }
                }

                eventArr.push(event);
                this.extendEvents[arg2 ? 'prioritize' : 'nonprioritize'][arg0] = eventArr;
            }
            else {
                console.warn("dupplicate event");

            }

        }
        return this;
    }
};



absol.EventEmittor.prototype.on = function (arg0, arg1, arg2) {
    this.eventEmittorOnWithTime(false, arg0, arg1, arg2);
    return this;
};


absol.EventEmittor.prototype.once = function (arg0, arg1, arg2) {
    this.eventEmittorOnWithTime(true, arg0, arg1, arg2);
    return this;
};

absol.EventEmittor.prototype.off = function (arg0, arg1, arg2) {
    if (typeof arg0 == 'object') {
        for (var key in arg0) {
            this.off(key, arg0[key]);
        }
        return this;
    }
    else {
        if (typeof arg1 == 'object') {
            return this.off(arg0, arg1.callback, arg1.cap);
        } else {
            var eventArr = this.extendEvents[arg2 ? 'prioritize' : 'nonprioritize'][arg0] || [];
            var newEventArray = [];
            for (var i = 0; i < eventArr.length; ++i) {
                var event = eventArr[i];
                if (event.wrappedCallback == arg1) {
                    //Dont add to newEventArray
                    if (this.isSupportedEvent(arg0)) {
                    }
                    else {
                        if (this.removeEventListener) {
                            this.removeEventListener(event.eventName, event.wrappedCallback, !!event.call);
                        }
                        else {
                            this.detachEvent('on' + event.eventName, event.wrappedCallback, !!event.call);
                        }
                    }
                }
                else {
                    newEventArray.push(event);
                }
            }
            this.extendEvents[arg2 ? 'prioritize' : 'nonprioritize'][arg0] = newEventArray;
            return this;
        }
    }
};

absol.HTMLElement = function HTMLElement() {
    this.absolInstanceOf = this.absolInstanceOf || {};
    if (this.absolInstanceOf['HTMLElement']) return;
    this.absolInstanceOf['HTMLElement'] = true;
    absol.EventEmittor.call(this);
    Object.assign(this, HTMLElement.prototype);
    HTMLElement.fixBrowserEvent(this);
};


absol.HTMLElement.prototype.init = function (props) {
    Object.assign(this, props || {});
};

absol.HTMLElement.prototype.attr = function (arg0, arg1) {
    if (typeof arg0 == 'object') {
        for (var key in arg0) {
            this.attr(key, arg0[key]);
        }
    }
    else {
        if (arguments.length == 1) return this.getAttribute(arg0);
        if (arg1 == undefined) {
            this.removeAttribute(arg0);
        }
        else {
            this.setAttribute(arg0, arg1);
        }
        //TODO: replace id and  classes
    }
    return this;
};

absol.HTMLElement.prototype._styleIndex = function (string) {
    return string.replace(/\-(.)/g, function (full, c) {
        return c.toUpperCase();
    })
};

absol.HTMLElement.prototype.addStyle = function (arg0, arg1) {
    if (typeof arg0 == 'string')
        this.style[this._styleIndex(arg0)] = arg1;
    else {
        for (var key in arg0)
            this.addStyle(key, arg0[key]);
    }
    return this;
};

absol.HTMLElement.prototype.removeStyle = function (arg0) {
    if (typeof arg0 == 'string') {
        var key = this._styleIndex(arg0);
        this.style[key] = null;
        delete this.style[key];
    }
    else {
        if (typeof arg0 instanceof Array) {
            for (var i = 0; i < arg0.length; ++i)
                this.removeStyle(arg0[i]);
        }
        else {
            for (var key in arg0)
                this.removeStyle(key);
        }
    }
    return this;
};

absol.HTMLElement.prototype.afterAttached = function (frameTimeOut) {
    if (!frameTimeOut) frameTimeOut = 25;
    var current = this;
    return new Promise(function (resolve, reject) {
        function trace() {
            if (frameTimeOut < 0) {
                reject();
            }
            else {
                frameTimeOut--;

                if (current == document.body) {
                    resolve();
                }
                else {
                    if (current.parentNode) {
                        current = current.parentNode;
                        trace();
                    } else {
                        requestAnimationFrame(trace);
                    }
                }
            }
        };
        requestAnimationFrame(trace);
    });
};


absol.HTMLElement.prototype.addChild = function (child) {
    if (child instanceof Array) {
        for (var i = 0; i < child.length; ++i)
            this.appendChild(child[i]);
    }
    else
        this.appendChild(child);
    return this;
};


absol.HTMLElement.prototype.addTo = function (parent) {
    if (parent && parent.appendChild) {
        if (parent.addChild)
            parent.addChild(this);
        else
            parent.appendChild(this);
    }
    else throw Error("Can not append to " + parent + "!");
    return this;
};


absol.HTMLElement.prototype.selfRemove = function () {
    if (this.parentElement)
        this.parentElement.removeChild(this);
    return this;
};


absol.HTMLElement.prototype.selfReplace = function (newNode) {
    if (this.parentElement)
        this.parentElement.replaceChild(newNode, this);
    return this;
};

absol.HTMLElement.prototype.clearChild = function () {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
    return this;
};

/**
 * 
 * @param {string} className 
 * @returns {Boolean}
 */
absol.HTMLElement.prototype.containsClass = function (className) {
    if (className instanceof Array) {
        for (var i = 0; i < className.length; ++i)
            if (!this.classList.containsClass(className[i])) return false;
        return true;
    }
    else
        return this.classList.contains(className);
};

/**
 * 
 * @param {string} className 
 * @returns {Element}
 */
absol.HTMLElement.prototype.addClass = function (className) {
    if (className instanceof Array) {
        for (var i = 0; i < className.length; ++i)
            this.classList.add(className[i]);
    }
    else
        this.classList.add(className);
    return this;
};

/**
 * 
 * @param {string} className 
 * @returns {Element}
 */
absol.HTMLElement.prototype.removeClass = function (className) {
    if (className instanceof Array) {
        for (var i = 0; i < className.length; ++i)
            this.classList.remove(className[i]);
    }
    else
        this.classList.remove(className);
    return this;
};

absol.HTMLElement.prototype.findChildAfter = function (obj) {
    var r = 0;
    for (var i = 0; i < this.childNodes.length; ++i) {
        if (obj == this.childNodes[i]) {
            r = i + 1;
            break;
        }
    }
    if (this.childNodes[r]) return this.childNodes[r];
    return undefined;
};


absol.HTMLElement.prototype.getComputedStyleValue = function (key) {
    return window.getComputedStyle(this).getPropertyValue(key);

};

absol.HTMLElement.prototype.getFontSize = function () {
    return parseFloat(this.getComputedStyleValue('font-size').replace('px', ''));
};



absol.HTMLElement.prototype.findChildBefore = function (obj) {
    var r = 0;
    for (var i = 0; i < this.childNodes.length; ++i) {
        if (obj == this.childNodes[i]) {
            r = i - 1;
            break;
        }
    }
    if (this.childNodes[r]) return this.childNodes[r];
    return undefined;
};

absol.HTMLElement.prototype.addChildBefore = function (newItem, bf) {
    this.insertBefore(newItem, bf);
    return this;
};

absol.HTMLElement.prototype.addChildAfter = function (newItem, at) {
    var bf = this.findChildAfter(at);
    if (bf) return this.addChildBefore(newItem, bf);
    return this.addChild(newItem);
};

/**
 * @returns {DOMRect}
 */
absol.HTMLElement.prototype.getBoundingRecursiveRect = function () {
    var matcher = new absol.ElementMatcher();
    var bound = this.getBoundingClientRect();
    var ac = { left: bound.left, right: bound.right, top: bound.top, bottom: bound.bottom, width: bound.right - bound.left, height: bound.bottom - bound.top };
    return matcher.findAll(this).reduce(function (ac, cr) {
        if (!cr.getBoundingClientRect) return ac;
        var cRect = cr.getBoundingClientRect();
        //it not display
        if (!cRect || cRect.width * cRect.height == 0) return ac;
        ac.left = Math.min(ac.left, cRect.left);
        ac.top = Math.min(ac.top, cRect.top);
        ac.bottom = Math.max(ac.bottom, cRect.bottom);
        ac.right = Math.max(ac.right, cRect.right);
        ac.height = ac.bottom - ac.top;
        ac.width = ac.right - ac.left;
        return ac;
    }, ac);
};


absol.HTMLElement.prototype.isDescendantOf = function (parent) {
    var child = this;
    while (child) {
        if (child == parent) return true;
        child = child.parentNode;
    }
    return false;
};


absol.HTMLElement.fixBrowserEvent = function (element) {
    if (absol.browser.isSafari) {
        if (!element.isSupportedEvent('mouseleave')) {
            element.defineEvent('mouseleave');
            var mouseLeaveEventHandler = function (event) {
                var bound = this.getBoundingClientRect();
                var ok = false;
                ok |= event.clientX < bound.left + 1;
                ok |= event.clientX >= bound.right - 1;
                ok |= event.clientY < bound.top + 1;
                ok |= event.clientY >= bound.bottom - 1;
                if (ok) this.emit('mouseleave', event);
            };
            element.addEventListener('mouseleave', mouseLeaveEventHandler, true);
        }
    }

    if (absol.browser.isFirefox) {
        if (!element.isSupportedEvent('wheel')) {
            element.defineEvent('wheel');
            var wheelEventHandler = function (oldEvent) {
                //clone event to avoid some lib fix it
                var event = oldEvent.absolEvent;
                if (!event) {
                    event = Object.assign({}, oldEvent);
                    for (var i = 0; i < absol.HTMLElement.eventProperties.length; ++i) {
                        var key = absol.HTMLElement.eventProperties[i];
                        if (typeof (event[key]) == 'function') {
                            event[key] = event[key].bind(oldEvent);
                        }
                    }

                    event.preventDefault = function () {
                        oldEvent.preventDefault();
                    }
                    if (!event.mozFixWheelScale) {
                        event.mozDeltaY = oldEvent.deltaY;
                        event.mozFixWheelScale = true;
                        Object.defineProperty(event, 'deltaY', { get: function () { return this.mozDeltaY * 100 / 3; } });
                    }
                    oldEvent.absolEvent = event;
                }
                this.emit('wheel', event);
            };
            element.addEventListener('wheel', wheelEventHandler);
        }
    }

}

absol.HTMLElement.eventProperties = ["altKey", "bubbles", "button", "buttons", "cancelBubble", "cancelable", "clientX", "clientY", "composed",
    "ctrlKey", "currentTarget", "defaultPrevented", "deltaMode", "deltaX", "deltaY", "deltaZ", "detail", "eventPhase",
    "explicitOriginalTarget", "isTrusted", "layerX", "layerY", "metaKey", "movementX", "movementY", "mozInputSource",
    "mozPressure", "offsetX", "offsetY", "originalTarget", "pageX", "pageY", "rangeOffset", "rangeParent", "region",
    "relatedTarget", "returnValue", "screenX", "screenY", "shiftKey", "srcElement", "target", "timeStamp", "type",
    "deltaMode", "deltaX", "deltaY", "deltaZ"];
absol.ElementNS = function ElementNS() {
    this.absolInstanceOf = this.absolInstanceOf || {};
    if (this.absolInstanceOf['ElementNS']) return;
    this.absolInstanceOf['ElementNS'] = true;
    absol.HTMLElement.call(this);
    Object.assign(this, ElementNS.prototype);
};

absol.ElementNS.prototype.attr = function (arg0, arg1) {
    if (typeof arg0 == 'object') {
        for (var key in arg0) {
            this.attr(key, arg0[key]);
        }
    }
    else {
        if (arguments.length == 1) return this.getAttributeNS(null, arg0);
        if (arg1 == undefined) {
            this.removeAttributeNS(null, arg0);
        }
        else {
            this.setAttributeNS(null, arg0, arg1);
        }
    }
    return this;
};
absol.event = {};
absol.event.isMouseRight = function (event) {
    var isRightMB = false;
    if ("which" in event)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        isRightMB = event.which == 3;
    else if ("button" in event)  // IE, Opera 
        isRightMB = event.button == 2;
    return isRightMB;
};
absol.dom = absol.dom || {};

absol.dom.activeFullScreen = function (element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
};

absol.dom.deactiveFullScreen = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

absol.dom.isFullScreen = function () {
    var fullScreenElement = document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;
    return !!fullScreenElement;
};

absol.dom.traceOutBoundingClientRect = function (current) {
    var left = 0;
    var right = 10000;
    var top = 0;
    var bottom = 10000;
    while (current) {
        absol.$(current);
        if (current.getComputedStyleValue) {
            var ox = current.getComputedStyleValue('overflow-x') != "visible";
            var oy = current.getComputedStyleValue('overflow-y') != "visible";
            var isBody = current.tagName.toLowerCase() == 'body';
            if (ox || oy || isBody) {
                var bound = current.getBoundingClientRect();
                if (ox || isBody) {
                    left = Math.max(left, bound.left);
                    right = Math.min(right, bound.right);
                }
                if (oy || isBody) {
                    top = Math.max(top, bound.top);
                    bottom = Math.min(bottom, bound.bottom);
                }
            }
        }
        if (isBody) break;
        current = current.parentElement;

    }
    return { left: left, right: right, top: top, bottom: bottom, width: right - left, height: bottom - top };
};

absol.dom.fontFaceIsLoaded = function (fontFace, timeout) {
    timeout = timeout || 0;
    var element = _({
        tag: 'span',
        style: {
            visibility: 'hidden',
            position: 'fixed',
            top: '-9999px',
            left: '-9999px',
            'font-size': '256px'

        }, props: {
            innerHTML: "Test string long long long"
        }
    });
    element.addTo($('body'));
    return element.afterAttached().then(function () {
        var lastOffsetWidth = element.getBoundingClientRect().width;
        element.addStyle('font-family', fontFace);
        return new Promise(function (resolve, reject) {
            function check(remainTime) {
                if (remainTime < 0) {
                    resolve(false);
                    element.selfRemove();
                }
                else
                    requestAnimationFrame(function () {
                        var currentOffsetWidth = element.getBoundingClientRect().width;
                        if (currentOffsetWidth != lastOffsetWidth) {
                            resolve(true);
                            element.selfRemove();
                        }
                        else
                            check(remainTime - 10);
                    }, 10);
            }
            check(timeout);
        });
    });

};

absol.dom.getScreenSize = function () {
    var width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    var height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    return { WIDTH: width, HEIGHT: height, width: width, height: height };
};


/********************  DOM EVOLUTION ******************/

/**
 * 
 * @param {string} s
 * @returns {{tag:string,id:string, classes:string[]}} 
 */
absol.parseElementSelector = function (s) {
    s = s || '';
    s = s.trim();
    var tagRex = /(^|\s)[a-zA-Z0-9\-\_]+/i;
    var classRex = /\.[a-zA-Z0-9\-\_]+/g;
    var idRex = /\#[a-zA-Z0-9\-\_]+/i;
    var classList = s.match(classRex);
    var id = s.match(idRex);
    var tag = s.match(tagRex);
    var res = {};
    if (tag && tag.length > 0)
        res.tag = tag[0].trim();
    if (id && id.length > 0)
        res.id = id[0].substring(1);
    if (classList && classList.length > 0)
        res.class = classList.map(function (s) { return s.substring(1) });
    return res;
}

/**
 * 
 * @param {Object} dic 
 * @returns {Object}
 */
absol.revertDictionary = function (dic) {
    var res = {};
    for (var key in dic) {
        if (dic[key] != undefined && ('' + dic[key]).length > 0)
            res['' + dic[key]] = key;
    }
    return res;
}


/**
 * 
 * @param {*} o 
 * @returns {Boolean}
 */
absol.isDomNode = function (o) {
    return (
        typeof Node === "object" ? o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
};

/**
 * 
 * @param {{id:string, classes:string[], tag:string}} option 
 */
absol.ElementMatcher = function (option) {
    option = option || {};
    for (var key in option) {
        this[key] = option[key];
    }
}


/**
 * 
 * @param {Element} element 
 * @returns {Boolean}
 */
absol.ElementMatcher.prototype.match = function (element) {
    if (this.id) {
        if (!element.getAttribute || element.getAttribute('id') != this.id) return false;
    }
    if (this.tag) {
        var matchTag = false;
        if (element.extendTags && element.extendTags[this.tag]) matchTag = true;
        matchTag = matchTag || ((element.tagName || '').toUpperCase() == this.tag.toUpperCase());
        if (!matchTag) return false;
    }
    if (this.class)
        for (i = 0; i < this.class.length; ++i) {
            if (!element.classList || !element.classList.contains(this.class[i])) return false;
        }
    return true;
}

/**
* 
* @param {Element} root 
* @param {function} onFound
* @returns {Element} 
*/
absol.ElementMatcher.prototype.findFirstBFS = function (root, onFound) {
    var queue = [root];
    var current;
    while (queue.length > 0) {
        current = queue.shift();
        if (this.match(current)) {
            if (!onFound || (onFound && onFound(current)))
                return current;
        }
        if (current.childNodes) {
            for (i = 0; i < current.childNodes.length; ++i)
                queue.push(current.childNodes[i]);
        }
    }
    return undefined;
}
/**
 * 
 * @param {Element} root 
 */
absol.ElementMatcher.prototype.findFirstDFS = function (root, onFound) {
    var stack = [root];
    var current;
    while (stack.length > 0) {
        current = stack.pop();
        if (this.match(current)) {
            if (!onFound || (onFound && onFound(current)))
                return current;
        }
        if (current.childNodes) {
            for (i = 0; i < current.childNodes.length; ++i)
                stack.push(current.childNodes[i]);
        }
    }
    return undefined;
}

/**
 * 
 * @param {Element} root
 * @return {Array} 
 */
absol.ElementMatcher.prototype.findAll = function (root) {
    var res = [];
    var stack = [root];
    var current;
    while (stack.length > 0) {
        current = stack.pop();
        if (this.match(current)) res.push(current);
        if (current.childNodes) {
            for (i = 0; i < current.childNodes.length; ++i)
                stack.push(current.childNodes[i]);
        }
    }
    return res;
}






/**
 * 
 * @param {{idMap:Object, classMap:Object, creator:function[]}} option 
 */
absol.Dom = function (option) {
    option = option || {};

    /**
     * @type {Object}
     */
    this.creator = option.creator || {};
    this.$ = this.selectAttacth.bind(this);
    this._ = this.create.bind(this);
};


/**
 * DFS
 * @param {string} query 
 * @param {Element} root 
 * @param {function} onFound - return true to stop find 
 */
absol.Dom.prototype.selectAttacth = function (query, root, onFound) {
    var res;
    if (absol.isDomNode(query)) res = query;
    else
        res = this.select(query, root, onFound);
    if (res) this.attach(res);
    return res;
};



/**
 * DFS
 * @param {string} query 
 * @param {Element} root 
 * @param {function} onFound - return true to stop find 
 */
absol.Dom.prototype.select = function (query, root, onFound) {
    root = root || document.documentElement;
    var matcher = new absol.ElementMatcher(absol.parseElementSelector(query));
    return matcher.findFirstBFS(root, onFound);
};

/**
 * 
 * @param {Element} element 
 */
absol.Dom.prototype.attach = function (element) {
    absol.HTMLElement.call(element);

}

/**
 * 
 * @param {Object} option
 * @returns {Element} 
 */
absol.Dom.prototype.create = function (option, isInherited) {
    var res;
    var prototype;
    var property;
    if (absol.isDomNode(option)) {
        res = option;
        option = {};
    }
    else if (typeof option == 'string') {
        option = option.trim();
        if (option[0] == '<') {
            option = option.replace(/>\s+</gm, '><').trim();
            var temTag = 'div';
            if (option.startsWith('<td')) temTag = 'tr';
            if (option.startsWith('<tr')) temTag = 'tbody';
            var tempDiv = document.createElement(temTag);
            tempDiv.innerHTML = option;
            res = tempDiv.childNodes[0];
        }
        else {
            var queryObj = absol.parseElementSelector(option);
            option = { tag: queryObj.tag, class: queryObj.class || [] };
            if (queryObj.id) option.attr = { id: queryObj.id };

            option.tag = option.tag || 'div';
            if (!this.creator[option.tag]) {
                res = document.createElement(option.tag);
                option.data && Object.assign(res, option.data);
            }
            else {
                res = this.creator[option.tag](option.data);
                res.extendTags = res.extendTags || {};
                res.extendTags[option.tag] = true;
                prototype = this.creator[option.tag].prototype;
                property = this.creator[option.tag].property;
            }
        }
    } else {
        option = option || {};
        option.tag = option.tag || 'div';
        if (!this.creator[option.tag]) {
            res = document.createElement(option.tag);
            option.data && Object.assign(res, option.data);
        }
        else {
            res = this.creator[option.tag](option.data);
            res.extendTags = res.extendTags || {};
            res.extendTags[option.tag] = true;
            prototype = this.creator[option.tag].prototype;
            property = this.creator[option.tag].property;
        }
    }


    this.attach(res);
    if (property) {
        Object.defineProperties(res, property);
    }
    if (prototype) {
        absol.OOP.extends(res, prototype);
    }
    option.attr && res.attr(option.attr);
    option.extendEvent && res.defineEvent(option.extendEvent);
    option.on && res.on(option.on);
    option.once && res.once(option.once);
    option.class && res.addClass(option.class);
    option.style && res.addStyle(option.style);
    if (option.child) {
        option.child = option.child instanceof Array ? option.child : [option.child];
        for (var i = 0; i < option.child.length; ++i) {
            res.addChild(this.create(option.child[i]));
        }
    }

    if (!isInherited) res.init(option.props);
    return res;
}



absol.ShareCreator = {};
absol.ShareDom = new absol.Dom({ creator: absol.ShareCreator });
absol.$ = absol.ShareDom.$;
absol._ = absol.ShareDom._;
//long name of _
absol.buildDom = absol.ShareDom._;
absol.browser = {};

absol.browser.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
absol.browser.isCococ = navigator.userAgent.toLowerCase().indexOf('coc_coc_browser') >= 1;
absol.browser.isSafari = !absol.browser.isCococ && navigator.userAgent.toLowerCase().indexOf('safari') > -1 && navigator.userAgent.toLowerCase().indexOf('win') < 0;
absol.browser.isMobile = navigator.userAgent.indexOf('KFFOWI') > -1 || navigator.userAgent.toLowerCase().indexOf('mobile') > -1;

/********************  SVG LIB ******************/

absol.svgNS = "http://www.w3.org/2000/svg";

/**
 * 
 * @param {*} o 
 * @returns {Boolean}
 */
absol.isSvgNode = function (o) {//
    //todo: detect svg node
    return (
        typeof Node === "object" ? o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
};


/**
 * 
 * @param {{idMap:Object, classMap:Object, creator:function[]}} option 
 */
absol.Svg = function (option) {
    option = option || {};

    /**
     * @type {Object}
     */
    this.creator = option.creator || {};

    this.$ = this.selectAttacth.bind(this);
    this._ = this.create.bind(this);
};



/**
 * DFS
 * @param {string} query 
 * @param {Element} root 
 * @param {function} onFound - return true to stop find 
 */
absol.Svg.prototype.selectAttacth = function (query, root, onFound) {
    var res;
    if (absol.isSvgNode(query)) res = query;
    else
        res = this.select(query, root, onFound);
    if (res) this.attach(res);
    return res;
};





/**
 * DFS
 * @param {string} query 
 * @param {Element} root 
 * @param {function} onFound - return true to stop find 
 */
absol.Svg.prototype.select = function (query, root, onFound) {
    root = root || document.documentElement;
    var matcher = new absol.ElementMatcher(absol.parseElementSelector(query));
    return matcher.findFirstBFS(root, onFound);
};

/**
 * 
 * @param {Element} element 
 */
absol.Svg.prototype.attach = function (element) {
    absol.ElementNS.call(element);
}


absol.Svg.prototype.fromHTML = function (html) {
    var receptacle = document.createElement('div');
    if (html.startsWith('<svg')) {
        receptacle.innerHTML = html;
        return receptacle.childNodes[0];
    }
    else {
        var svgfragment = '<svg  version="1.1" xmlns="http://www.w3.org/2000/svg">' + html + '</svg>';
        receptacle.innerHTML = '' + svgfragment;
        return receptacle.childNodes[0].childNodes[0];
    }
};

/**
 * 
 * @param {Object} option
 * @returns {Element} 
 */
absol.Svg.prototype.create = function (option, isInherited) {
    var res;
    var prototype;
    var property;
    if (absol.isSvgNode(option)) {
        res = option;
        option = {};
    }
    else if (typeof option == 'string') {
        option = option.trim();
        if (option[0] == '<') {
            option = option.replace(/>\s+</gm, '><').trim();

            res = this.fromHTML(option);
        }
        else {
            var queryObj = absol.parseElementSelector(option);
            option = { tag: queryObj.tag, class: queryObj.class || [] };
            if (queryObj.id) option.attr = { id: queryObj.id };


            option.tag = option.tag || 'g';
            if (!this.creator[option.tag]) {
                res = document.createElementNS(absol.svgNS, option.tag);
                option.data && Object.assign(res, option.data);
            }
            else {
                res = this.creator[option.tag](option.data);
                res.extendTags = res.extendTags || {};
                res.extendTags[option.tag] = true;
                prototype = this.creator[option.tag].prototype;
                property = this.creator[option.tag].property;
            }
        }
    } else {
        option = option || {};
        option.tag = option.tag || 'g';
        if (!this.creator[option.tag]) {
            res = document.createElementNS(absol.svgNS, option.tag);
            option.data && Object.assign(res, option.data);
        }
        else {
            res = this.creator[option.tag](option.data);
            res.extendTags = res.extendTags || {};
            res.extendTags[option.tag] = true;
            prototype = this.creator[option.tag].prototype;
            property = this.creator[option.tag].property;
        }
    }


    this.attach(res);
    option.attr && res.attr(option.attr);
    option.extendEvent && res.defineEvent(option.extendEvent);
    option.on && res.on(option.on);
    option.once && res.once(option.once);
    option.class && res.addClass(option.class);
    option.style && res.addStyle(option.style);
    if (option.child) {
        option.child = option.child instanceof Array ? option.child : [option.child];
        for (var i = 0; i < option.child.length; ++i) {
            res.addChild(this.create(option.child[i]));
        }
    }

    if (property) {
        Object.defineProperties(res, property);
    }
    if (prototype) {
        absol.OOP.extends(res, prototype);
    }

    if (!isInherited && res.init) res.init(option.props);
    return res;
}



absol.ShareSvgCreator = {
    svg: function () {
        var temp = document.createElement('div');
        temp.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>';
        return temp.childNodes[0];
    }
};
absol.ShareSvg = new absol.Svg({ creator: absol.ShareSvgCreator });
absol._svg = absol.ShareSvg._;
absol.$svg = absol.ShareSvg.$;
absol.buildSvg = absol.ShareSvg._;
