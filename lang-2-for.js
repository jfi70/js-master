/**
 * Created by jf on 23.05.15.
 */

var a = ["blubber" ,2,3,4,"hallo"];
a.forEach(function(value){
    //console.log(value);
});

for( var value of a) {
   // console.log(value);
}

for( value in a) {
  //  console.log(value);
}

for( value in a) {
    if(a.hasOwnProperty(value)){
        console.log(a[value]);
    }
}