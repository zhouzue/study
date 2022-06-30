var bag ='yo.'
bag=1
bag = "yaya"
bag=true
bag={}
bag=[]
console.log(typeof bag)

var isadmin = true;
if(isadmin){
    console.log('he is admin')
}else{
    console.log('he not is admin')
}

var day =2;
switch(day){
    case 1 :
        console.log('GOOD')
    break;
    case 2 :
        console.log('SAD')
    break;
    case 3 :
        console.log('happy') 
    break;
    case 4 :
        console.log('YEH')
    break;      
}
var logincount =1 ;
logincount--;
console.log('logincoun:',logincount);

console.log('1>2:',1>2);
console.log(1<2)
console.log('1==2:',1==2)

var a=1
console.log('1!=1',1!=1)

var he=true,
    she=true;
if(he || she){
    console.log("yes");
}else{
    console.log('no')
}