{
    init: function(elevators, floors) {
        elevators.forEach((elevator) => {
            // Whenever the elevator is idle (has no more queued destinations) ...
            elevator.on("floor_button_pressed", function (floorNum) {
                // let's go to all the floors (or did we forget one?)
                elevator.goToFloor(floorNum);
            });
        })

        floors.forEach((floor) => {
            floor.on("up_button_pressed", function () {

            });

        })
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}