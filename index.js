// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}   

const mondayWork = function(duty='go to the office'){
    return `This Monday, I will ${duty}.`;
}

const wrapAdjective = function (flair='*'){
    return function(adj='special'){
        return `You are ${flair}${adj}${flair}!`;
    }
}

const Calculator = {
    add: function(num1, num2){
        return num1 + num2;
    },
    subtract: function(num1, num2){
        return num1 - num2;
    },
    multiply: function(num1,num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        return num1 / num2;
    },

};

const actionApplyer = function(int, array){
    if (array.length === 0 ){
        return int;
    };

    for (let i = 0; i<array.length; i++){
        int = array[i](int);
    };

    return int;
}
