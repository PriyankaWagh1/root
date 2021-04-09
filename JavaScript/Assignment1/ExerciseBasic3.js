console.log('Possibilities');
function allPossibilities(){
    //combination possible
    var mem=["1"],combos;
    for(i=2;i<=9;i++){
        combos=[];
        mem.forEach(function(x){
            combos.push(x + i, x+ '+' + i, x + '-' + i);
        });
        mem=combos;
    }
    return combos.filter(function(combo){
        return combo.split(' ').reduce(function(x,y){
            return x/1+y/1;
        })==100;
    })
    .map(function(x){
        return x.replace(/[+-]/g,'$1 ');
    })
}
 console.log(allPossibilities());