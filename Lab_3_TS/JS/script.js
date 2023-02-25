let Tuple = ['Vlad', 18, 15];
function infiniteRec() {
    return infiniteRec();
}
const Car1 = {
    firm: 'honda',
    maxSpeed: 200
};
const Car2 = {
    firm: 'audi',
    maxSpeed: 200,
    Move(speed) {
        console.log("Машина едет со скоростью", speed);
    }
};
class People {
    speed;
    Move() {
        console.log("Человек идет со скоростью ", this.speed);
    }
}
const questions = {
    fruit1: 'apple',
    fruit2: 'orange'
};
//------------------------ enum --------------------------
var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Afternoon"] = 1] = "Afternoon";
    DayTime[DayTime["Evening"] = 2] = "Evening";
    DayTime[DayTime["Night"] = 3] = "Night";
})(DayTime || (DayTime = {}));
const dayTime = DayTime.Morning;
if (dayTime == DayTime.Morning) {
    console.log("Доброе утро");
}
else {
    console.log("Доброе не утро");
}
function Add(a, b, c) {
    if (!b && !c) {
        return a;
    }
    if (b && !c) {
        return a + b;
    }
    return a + b + c;
}
//------------------------ classes --------------------------
class Transport {
}
class Ship extends Transport {
    Move() {
        console.log('Плыву');
    }
}
class Aircraft extends Transport {
    Move() {
        console.log('Лечу');
    }
}
function checkNumberOrBool(x) {
    if (typeof x === 'number') {
        return x ^ 2;
    }
    return !x;
}
//------------------------ generic --------------------------
class CollectionType {
    elements;
    constructor(elements) {
        this.elements = elements;
    }
}
const Colect1 = new CollectionType([1, 3, 5, 7]);
console.log(Colect1.elements);
;
let key = 'name';
key = 'experience';
let u1 = 'name';
//su1 = '_id'
