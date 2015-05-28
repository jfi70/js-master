function _extends(_sub, _super) {
    var __ = function(){};
    __.prototype = _super.prototype;
    _sub.prototype = new __();
    _sub.prototype.constructor = _sub;
}


/**
 * @constructor
 */
function MyBaseClass(){
    /** @member {string} */
    this.idx = "11";
}

MyBaseClass.prototype.doSomething = function() {
    console.log("did something...");
};

/**
 * @extends {MyBaseClass}
 */
function MyClass(){
    _extends(this,MyBaseClass);
}


MyClass.prototype.doSomething = function () {
    console.log("did something different... id = ",this.idx);
};

var o = new MyClass();

o.doSomething();
