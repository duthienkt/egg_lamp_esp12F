(function(){
                    var t = new Date(1545836932121);
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

                    console.log('\n %c %c %c absol ' + '  \u2730 ' + mill2hhmmss(t1.getTime() - t.getTime())  + ' \u2730  %c  %c  '+ me.src + '  %c %c \u272E%c\u272F%c\u272C \n\n', 'background: #d0d0ec; padding:5px 0;', 'background:  #d0d0ec; padding:5px 0;', 'color:  #d0d0ec; background: #898991; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'background: #dae6fc; padding:5px 0;', 'background: #d0d0ec; padding:5px 0;', 'color: #000080; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;', 'color: #000099; background: #fff; padding:5px 0;');
                })();

if (!window.module) window.module = {};

var absol = {};
absol._dirname = (document.currentScript.src.match(/.+\/\/(.+\/)/)||['./'])[0];

if (module) module.exports = absol;
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
    if (this.isSupportedEvent(eventName)) {
        var listenerList;
        if (this.extendEvents.prioritize[eventName]) {
            listenerList = this.extendEvents.prioritize[eventName].slice();
            for (var i = 0; i < listenerList.length; ++i) {
                listenerList[i].wrappedCallback.call(this, data);
            }

        }

        if (this.extendEvents.nonprioritize[eventName]) {
            listenerList = this.extendEvents.nonprioritize[eventName].slice();
            for (var i = 0; i < listenerList.length; ++i) {
                listenerList[i].wrappedCallback.call(this, data);
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





absol.EventEmittor.prototype.eventEmiitorOnWithTime = function (isOnce, arg0, arg1, arg2) {
    if (typeof arg0 == 'object') {
        for (let key in arg0) {
            this.eventEmiitorOnWithTime(isOnce, key, arg0[key]);
        }
        return this;
    }
    else {
        if (typeof arg1 == 'object') {
            return this.eventEmiitorOnWithTime(isOnce, arg0, arg1.callback, arg1.cap);
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
            else{
                console.warn("dupplicate event");

            }

        }
        return this;
    }
};



absol.EventEmittor.prototype.on = function (arg0, arg1, arg2) {
    this.eventEmiitorOnWithTime(false, arg0, arg1, arg2);
    return this;
};


absol.EventEmittor.prototype.once = function (arg0, arg1, arg2) {
    this.eventEmiitorOnWithTime(true, arg0, arg1, arg2);
    return this;
};

absol.EventEmittor.prototype.off = function (arg0, arg1, arg2) {
    if (typeof arg0 == 'object') {
        for (let key in arg0) {
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
        for (let key in arg0) {
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

absol.HTMLElement.prototype.addStyle = function (arg0, arg1) {
    if (typeof arg0 == 'string')
        this.style[arg0] = arg1;
    else {
        for (var key in arg0)
            this.addStyle(key, arg0[key]);
    }
    return this;
};

absol.HTMLElement.prototype.removeStyle = function (arg0) {
    if (typeof arg0 == 'string') {
        this.style[arg0] = null;
        delete this.style[arg0];
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
            if (!this.classList.remove(className[i])) return false;
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

                    event.preventDefault = function(){
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
        for (let key in arg0) {
            this.attr(key, arg0[key]);
        }
    }
    else {
        if (arguments.length == 1) return this.getAttribute(arg0);
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
    let res = {};
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
    for (let key in option) {
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
        for (let i = 0; i < this.class.length; ++i) {
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
    let queue = [root];
    let current;
    while (queue.length > 0) {
        current = queue.shift();
        if (this.match(current)) {
            if (!onFound || (onFound && onFound(current)))
                return current;
        }
        if (current.childNodes) {
            for (let i = 0; i < current.childNodes.length; ++i)
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
    let stack = [root];
    let current;
    while (stack.length > 0) {
        current = stack.pop();
        if (this.match(current)) {
            if (!onFound || (onFound && onFound(current)))
                return current;
        }
        if (current.childNodes) {
            for (let i = 0; i < current.childNodes.length; ++i)
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
    let res = [];
    let stack = [root];
    let current;
    while (stack.length > 0) {
        current = stack.pop();
        if (this.match(current)) res.push(current);
        if (current.childNodes) {
            for (let i = 0; i < current.childNodes.length; ++i)
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
absol.Dom.prototype.create = function (option) {
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

    res.init(option.props);
    return res;
}



absol.ShareCreator = {};
absol.ShareDom = new absol.Dom({ creator: absol.ShareCreator });
absol.$ = absol.ShareDom.$;
absol._ = absol.ShareDom._;


absol.browser = {};

absol.browser.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
absol.browser.isCococ = navigator.userAgent.toLowerCase().indexOf('coc_coc_browser') >= 1;
absol.browser.isSafari = !absol.browser.isCococ && navigator.userAgent.toLowerCase().indexOf('safari') > -1 && navigator.userAgent.toLowerCase().indexOf('win') < 0;
absol.browser.isMobile = navigator.userAgent.indexOf('KFFOWI') > -1 || navigator.userAgent.toLowerCase().indexOf('mobile') > -1;
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
                var _this = this;
                this.super = function () {
                    _superMethod.apply(_this, arguments)
                }
                method.apply(_this, arguments);
                this.super = _super;
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

/**
 * 
 * @param {Object} option
 * @returns {Element} 
 */
absol.Svg.prototype.create = function (option) {
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
            var temTag = 'g';
            if (option.startsWith('<svg')) temTag = 'div';
            var tempContainer = temTag == 'div' ? document.createElement(temTag) : document.createElementNS(absol.svgNS, temTag);
            tempContainer.innerHTML = option;
            res = tempContainer.childNodes[0];
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

    if (res.init) res.init(option.props);
    return res;
}



absol.ShareSvgCreator = {};
absol.ShareSvg = new absol.Svg({ creator: absol.ShareSvgCreator });
absol._svg = absol.ShareSvg._;
absol.$svg = absol.ShareSvg.$;


