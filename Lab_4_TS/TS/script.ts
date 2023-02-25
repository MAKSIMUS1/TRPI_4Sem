//---------------------------
interface Student {
    [key: string]: string | number;
};
const array: Student[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
];
//---------------------------
class CarsType {
    manufacturer?: string;
    model?: string;
};
let car: CarsType = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
//---------------------------
const car1: CarsType = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';   

class ArrayCarsType {
    cars: CarsType[]
}

const arrayCars: Array<ArrayCarsType> = [ 
    { cars: [car1,car2] }
];
//---------------------------
type MarkFilterType  = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DoneType = boolean;

type MarkType = {
    subject: string,
    mark : MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType
}

type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>
}

type GroupType = {
    students: Array<StudentType>,
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void,
    mark: MarkFilterType,
    group: GroupFilterType
}
let stund1:StudentType ={
    id: 3,
    name: "Oleg",
    group: 3,
    marks: [{
        subject: "Math",
        mark: 4,
        done: true
    }, {
        
        subject: "Fizika",
        mark: 6,
        done: true
    }]
} 
let stund2:StudentType ={
    id: 42,
    name: "Nikita",
    group: 5,
    marks: [{
        subject: "Rusk",
        mark: 7,
        done: true
    }, {
        
        subject: "English",
        mark: 8,
        done: true
    }]
} 

let stund3:StudentType ={
    id: 424,
    name: "Valera",
    group: 5,
    marks: [{
        subject: "Rusk",
        mark: 9,
        done: true
    }, {
        
        subject: "English",
        mark: 7,
        done: true
    }]
} 
let group: GroupType = {
    students: [stund1, stund2, stund3],
    studentsFilter(group: number) {
        const filteredStudents: Array<StudentType> = [];

        for (let student of this.students) 
        {
            if (student.group == group) 
            {
                filteredStudents.push(student);
            }
        }
        return filteredStudents;
    },
    marksFilter(mark: number) {
        const filteredStudents: Array<StudentType> = [];
        
        for (let student of this.students) 
        {
            for (let m of student.marks)
            {
                if (m.mark == mark) 
                {
                    filteredStudents.push(student);
                }
            }
        }
        return filteredStudents;
    },
    deleteStudent(id: number): void 
    {
        this.students = this.students.filter((student) => student.id !== id);
    },
    mark: 8,
    group: 5
}

console.log(group.marksFilter(7));
console.log(group.studentsFilter(5));