var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

// console.log(course);

function Car(title, level){
    this.title2 = title;
    this.level2 = level;
}

var car1 = new Car("part1",1);
console.log(car1);
var car2 = new Car("part2",2);
console.log(car2);

var car = [
    new Car("part1",1),
    new Car("part2",2)
];
console.log(car[0].title2);