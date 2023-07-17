
// function constructor javascript

function Myinfo (name, age, job, from, roll){
    this.name = name;
    this.age = age;
    this.job = job;
    this.from = from;
    this.roll = roll;
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.job);
        console.log(this.from);
        console.log(this.roll);
    }
}

var person1 = new Myinfo('Sagor Mondol', 21, 'Web developer', 'Dhaka, Bangladesh', 1);

person1.display();