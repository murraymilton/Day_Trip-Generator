'use strict'

let dayTrips = [
  "Neuschwanstein Castle",
  "Linderhof Palace",
  "Rothenburg ob der Tauber",
  "Schönau am Königssee",
  "Salzburg",
  "Dachau concentration camp",
  "Innsbruck",
  "Regensburg",
];

let restaurantSelections = [
  "Schlossrestaurant Neuschwanstein",
  "Zum Segelflieger",
  "LAISO",
  "Gasthof Bodner",
  "Restaurant Jakob's Esskultur",
  "Roula zum Romer",
  "Gasthof LAMM Essen & Kultur",
  "Le Petit Chef- Regensburg",
];

let finalDestination = [];

let userChange = [];

let transportationMethod = [
  "S-Bahn",
  "ICE Train",
  "Bus",
  "Bike Tour",
  "Hiking Tour",
  "Plane",
  "Boat",
  "Express U-Bahn",
];

let entertainmentOptions = [
  "Opera",
  "Soccer Match",
  "Basketball Game",
  "Concert",
  "Music Festival",
  "Boxing Event",
  "Segway Tour",
  "Ski Lessons",
];

function getRandomDestination() {
  let chosenDestination = dayTrips[Math.floor(Math.random() * dayTrips.length)];
  let userRequest = prompt("To generate your day trip destination enter 1 ");

  if (userRequest === "1") {
    
    return chosenDestination;
  }
}
let destinationsChosen = getRandomDestination();
finalDestination[0]= destinationsChosen;
prompt(`The destination is : ${destinationsChosen}.`);

function getRestaurantOptions() {
  let restaurantPick =
    restaurantSelections[
      Math.floor(Math.random() * restaurantSelections.length)
    ];
  let userRestaurantPick = prompt(
    "To generate your Restaurant options enter 1"
  );

  if (userRestaurantPick === "1") {
    return restaurantPick;
  }
}
let restaurantChosen = getRestaurantOptions();
finalDestination[1] = restaurantChosen;
prompt(`Our restaurant reccomendation is : ${restaurantChosen}`);

function getTransportationOptions() {
  let transportationRequest =
    transportationMethod[
      Math.floor(Math.random() * transportationMethod.length)
    ];
  let userTransportationRequest = prompt(
    "  To generate your Transportation options enter 1"
  );
  if (userTransportationRequest === "1") {
    return transportationRequest;
  }
}
let transportationChosen = getTransportationOptions();
finalDestination[2] = transportationChosen;
prompt(`The method of transportation will be: ${transportationChosen}`);

function getEntertainmentOption() {
  let entertainmentPick =
    entertainmentOptions[
      Math.floor(Math.random() * entertainmentOptions.length)
    ];
  let userEntertainmentRequest = prompt(
    "To generate your Entertainment options enter 1"
  );

  if (userEntertainmentRequest === "1") {
    return entertainmentPick;
  }
}
let entertainmentChosen = getEntertainmentOption();
finalDestination[3] = entertainmentChosen;
prompt(
  `The choice for your entertainment will be: ${entertainmentChosen}`
);

function confirmOrChangeTrip() {
  let userTripConfirmed = prompt(
    `Your trip has been confirmed with the following itinerary : Destination: ${finalDestination[0]} Restaurant:  ${finalDestination[1]}  Transportation: ${finalDestination[2]}  Entertainment: ${finalDestination[3]}: To confirm enter 1, to make changes enter 2`
    
  );
  switch(userTripConfirmed){
      case '1':
          alert('Your trip has been confirmed Auf Wiedersehen! ');
          break;
      case '2':
          changeTripOptions();
          break;
          
     default:
         confirmOrChangeTrip();
  }
  // return userTripConfirmed;
}
  confirmOrChangeTrip();


function changeTripOptions() {
  let userChangeOptions = prompt(
    "Which changes would you like to make to your itinerary? \n Press 1- Destination Change\n Press 2- Restaurant Change \n Press 3- Transportation Change \n Press 4 - Entertainment Change" );

    
   let changeMyChoice =userChangeOptions;

  if (changeMyChoice === "1") {
    let desUpdate = getRandomDestination();
    desUpdate = finalDestination[0];
    alert(`Your destination has been change to: ${desUpdate}`);
    confirmOrChangeTrip();
  } else if (changeMyChoice === "2") {
    let restUpdate = getRestaurantOptions();
    restUpdate = finalDestination[1];
    prompt(`Your new updated Restaurant choice is ${restUpdate}`);
    confirmOrChangeTrip();
  } else if (changeMyChoice === "3") {
    let transUpdate = getTransportationOptions();
    transUpdate = finalDestination[2];
    prompt(`Your transportation method has been updated to: ${transUpdate}`);
    confirmOrChangeTrip();
  } else if (changeMyChoice === "4") {
    let entertainUpdate = getEntertainmentOption();
    entertainUpdate = finalDestination[3];
    prompt(`Your entertainment option has been changed to: ${entertainUpdate}`);
    confirmOrChangeTrip();
  } else {
       changeTripOptions();
  }
}

 function modifyUserTrip()
 {
  let userTravelRevisions = prompt(
    `The following changes have been made to your itinerary : Destination: ${userChange[0]} Restaurant:  ${userChange[1]}  Transportation: ${userChange[2]}  Entertainment: ${userChange[3]}: To confirm enter 1, to make changes enter 2`
    
  );
  switch(userTravelRevisions){
      case '1':
          alert('Your trip has been confirmed Auf Wiedersehen! ');
          break;
      case '2':
          changeTripOptions();
          break;
          
     default:
         confirmOrChangeTrip();
  }
  // return userTripConfirmed;
}
  confirmOrChangeTrip();