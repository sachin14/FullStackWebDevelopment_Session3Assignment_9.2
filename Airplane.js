//Airplane constructor

function airplane(model, seating_capacity, maximum_speed){
    this.model = model;
    this.seating_capacity = seating_capacity;
    this.maximum_speed = maximum_speed;

    this.print = function(){
        return "Airplane model - " + model + " with seating capacity of " + seating_capacity + " and a max speed of " + maximum_speed;
    }
}
//create 3 objects
var airplane1 = new airplane("boeing 770", 200, 500);
console.log(airplane1.print());

var airplane2 = new airplane("airbus 300", 210, 500);
console.log(airplane2.print());

var airplane3 = new airplane("boeing 900", 220, 500);
console.log(airplane3.print());

//delete maximum speed
delete airplane1.maximum_speed;
delete airplane2.maximum_speed;
delete airplane3.maximum_speed;

//add airplane avg speed
airplane1.average_speed = 600;
airplane2.average_speed = 600;
airplane3.average_speed = 600;




