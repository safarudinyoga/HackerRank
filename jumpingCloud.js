/*  c = array of int
    0 = mean jump
    1 = avoid jump
    output = min jump on cloud */

function jumpingOnClouds(c){
    //var cloud = 0;
    // var cloud = [];
    var jump = 1;

    for (let i = 0; i < c.length - 3; i++){
        if(c[i + 2] === 0){
            i++;
        }
        jump += 1;
    }
    return jump;
}
console.log(jumpingOnClouds([0, 0, 0, 0, 0, 1, 0]));
