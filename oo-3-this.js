/**
 * Created by jf on 12.05.15.
 */


var anObject = { name: "i'm foo" };

/**
 * @function
 */
anObject.log = function() {
    console.log("name =", this.name);
};

anObject.log();

var oneMoreObject = { };

oneMoreObject.onCall = anObject.log;


oneMoreObject.onCall();