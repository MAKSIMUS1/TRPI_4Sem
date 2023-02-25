let Tuple: [string, number, number] = ['Vlad', 18, 15];

function infiniteRec(): never {
    return infiniteRec();
}

//------------------ interfaces ----------------------------

interface ICar {
    readonly firm: string
    maxSpeed: number
    color ? : string
}

const Car1: ICar = {
    firm: 'honda',
    maxSpeed: 200
}

interface ICarWithMove extends ICar {
    Move: (a: number) => void;
}

const Car2: ICarWithMove = {
    firm: 'audi',
    maxSpeed: 200,
    Move(speed: number) {
        console.log("Машина едет со скоростью", speed);
    }
}

interface IMovable {
    speed: number
    Move(): void
}

class People implements IMovable {
    speed: 5;
    Move(): void {
        console.log("Человек идет со скоростью ", this.speed);
    }
}

interface IFruits {
    [key: string]: string;
}

const questions: IFruits = {
    fruit1: 'apple',
    fruit2: 'orange'
}

//------------------------ enum --------------------------

enum DayTime {
    Morning,
    Afternoon,
    Evening,
    Night
}

const dayTime: DayTime = DayTime.Morning;

if (dayTime == DayTime.Morning) {
    console.log("Доброе утро");
} else {
    console.log("Доброе не утро");
}

//------------------------ functions --------------------------

function Add(a: number): number

function Add(a: number, b: number): number

function Add(a: number, b: number, c: number): number

function Add(a: number, b ? : number, c ? : number): number {

    if (!b && !c) {
        return a;
    }

    if (b && !c) {
        return a + b;
    }
    return a + b + c;
}

//------------------------ classes --------------------------

abstract class Transport {
    abstract Move(): void;
}

class Ship extends Transport {
    Move(): void {
        console.log('Плыву');
    }
}
class Aircraft extends Transport {
    Move(): void {
        console.log('Лечу');
    }
}
 
//------------------------ guards --------------------------
type norb = number | boolean;

function checkNumberOrBool(x: number | boolean) {
    if (typeof x === 'number') {
        return x ^ 2;
    }
    return !x;
}
//------------------------ generic --------------------------

class CollectionType < T > {
    constructor(public elements: Array < T > ) {}
}
const Colect1: CollectionType < number > = new CollectionType < number > ([1, 3, 5, 7]);
console.log(Colect1.elements);

//------------------------ operators --------------------------
interface Driver {
    name: string
    experience: number
    car: string
};

type DriverKeys = keyof Driver; // 'name' | 'experience' | 'car'

let key: DriverKeys = 'name';
key = 'experience';
//key = 'age'

type Fruct = {
    name: string
    color: string
    size: number
};

type FructKeysNoMeta1 = Exclude < keyof Fruct, 'size' | 'color' > ; // 'name'
type FructKeysNoMeta2 = Pick < Fruct, 'name' | 'color' > ; // 'name' | 'color'


let u1: FructKeysNoMeta1 = 'name';
//su1 = '_id'