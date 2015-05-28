/**
 * Created by jf on 23.05.15.
 */



var handler = {
    get : function(target, value) {
        return target[value];
    }
}

var a = new Proxy({}, handler);

a.a = "Hallo";
a.b = "Jan";

