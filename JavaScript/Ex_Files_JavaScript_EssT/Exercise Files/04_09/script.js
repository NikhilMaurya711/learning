var course  = {
    title : "JS ECMA 6 ",
    level : 3,
    inclevel : function(){

        return ++course.level;
    }

}

console.log(course.level);
course.inclevel();
console.log(course.level);
console.log(course);