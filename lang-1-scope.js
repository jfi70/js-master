/**
 * Created by jf on 17.05.15.
 */

if( true) {
    var x = 'oops!';
}
console.log(x);

(function () { if( true) {
        var y = 'ok!';
}})();
console.log(typeof(y));
