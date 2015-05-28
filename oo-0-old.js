
var OldObject = function(arg) {
    var that = {
        _arg        : arg,

        doSomething : function() {
            console.log(that._arg);
        }
    };
    return that;
};
var o = new OldObject("abcd");
o.doSomething();
