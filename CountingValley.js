/*  n = number of step
    s = String describing in path */ 

function countingValley(n, s){
    var mountainStep = 0;
    var valleyStep = 0;
    var curretLevel = 0;
    var step = [];
    var seaLevel = 0;

    for (let i = 0; i<s.length; i++){
        if (s[i] == 'D'){
            valleyStep++;
            curretLevel--;
            step.push(curretLevel);

        }
        else if (s[i] == 'U'){
            mountainStep++;
            curretLevel++;
            step.push(curretLevel);
        }
        /*else {

        }*/
    }
    for (let i=0; i < step.length; i++){
        if(step[i] == 0 && step[i-1] < 0){
            seaLevel++;
        }

    }
    return seaLevel;
}