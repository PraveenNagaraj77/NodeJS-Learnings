function add(a,b){
    return a +b;
}

function sub(a,b){
    return a-b;
}

function mutliply(a,b){
    return a*b;
}

function divide(a,b){
    if(b==0){
        throw new Error('Divide by Zero is not Allowed')
    }

    return a/b;
}


module.exports = { add,sub,mutliply,divide }