function sockMerchant(n, ar){
    var sorted = ar.sort((a, b) => a - b);
    var pair = 0;

    for (let i = 0; i < n; i++){
        if (sorted[i] == sorted[i + 1]){
            pair++;
            i++;
        }
    }
    return pair;
}
//console.log(sockMerchant(3, 5));
