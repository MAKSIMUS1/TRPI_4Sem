;
const array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
//---------------------------
class CarsType {
    manufacturer;
    model;
}
;
let car = {}; //объект создан!
car.manufacturer = "manufacturer";
car.model = 'model';
//---------------------------
const car1 = {}; //объект создан!
car1.manufacturer = "manufacturer";
car1.model = 'model';
const car2 = {}; //объект создан!
car2.manufacturer = "manufacturer";
car2.model = 'model';
class ArrayCarsType {
    cars;
}
const arrayCars = [
    { cars: [car1, car2] }
];
let stund1 = {
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
};
let stund2 = {
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
};
let stund3 = {
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
};
let group = {
    students: [stund1, stund2, stund3],
    studentsFilter(group) {
        const filteredStudents = [];
        for (let student of this.students) {
            if (student.group == group) {
                filteredStudents.push(student);
            }
        }
        return filteredStudents;
    },
    marksFilter(mark) {
        const filteredStudents = [];
        for (let student of this.students) {
            for (let m of student.marks) {
                if (m.mark == mark) {
                    filteredStudents.push(student);
                }
            }
        }
        return filteredStudents;
    },
    deleteStudent(id) {
        this.students = this.students.filter((student) => student.id !== id);
    },
    mark: 8,
    group: 5
};
console.log(group.marksFilter(7));
console.log(group.studentsFilter(5));
