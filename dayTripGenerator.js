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
  let userRequest = prompt("Would you like to generate your day Trip Destination option? Yes/No");

  if (userRequest === "Yes") {
    
    return chosenDestination;
  }
}
let destinationsChosen = getRandomDestination();
finalDestination[0]= destinationsChosen;
console.log(`The destination is : ${destinationsChosen}`);

function getRestaurantOptions() {
  let restaurantPick =
    restaurantSelections[
      Math.floor(Math.random() * restaurantSelections.length)
    ];
  let userRestaurantPick = prompt(
    "Would you like to generate your Restaurant options? Yes/No"
  );

  if (userRestaurantPick === "Yes") {
    return restaurantPick;
  }
}
let restaurantChosen = getRestaurantOptions();
finalDestination[1] = restaurantChosen;
console.log(`The restaurant will be : ${restaurantChosen}`);

function getTransportationOptions() {
  let transportationRequest =
    transportationMethod[
      Math.floor(Math.random() * transportationMethod.length)
    ];
  let userTransportationRequest = prompt(
    " Would your like to generate your Transportation options? Yes/No"
  );
  if (userTransportationRequest === "Yes") {
    return transportationRequest;
  }
}
let transportationChosen = getTransportationOptions();
finalDestination[2] = transportationChosen;
console.log(`The method of transportation will be: ${transportationChosen}`);

function getEntertainmentOption() {
  let entertainmentPick =
    entertainmentOptions[
      Math.floor(Math.random() * entertainmentOptions.length)
    ];
  let userEntertainmentRequest = prompt(
    "Would you like to generate your Entertainment options? Yes/No"
  );

  if (userEntertainmentRequest === "Yes") {
    return entertainmentPick;
  }
}
let entertainmentChosen = getEntertainmentOption();
finalDestination[3] = entertainmentChosen;
console.log(
  `The choice for your entertainment will be: ${entertainmentChosen}`
);

function confirmOrChangeTrip() {
  let userTripConfirmed = prompt(
    `Your trip has been confirmed with the following itinerary  Destination: ${finalDestination[0]}  Restaurant:'' ${finalDestination[1]}  Transportation: ${finalDestination[2]}  Entertainment: ${finalDestination[3]}: To confirm enter 1, to make changes enter 2`
    
  );
  switch(userTripConfirmed){
      case '1':
          prompt('Your trip has been confirmed Auf Widersehen!');
          break;
      case '2':
          changeTripOptions();
          break;
          
     default:
         confirmOrChangeTrip();
  }
  return userTripConfirmed;
}
 confirmOrChangeTrip();


function changeTripOptions() {
  let userChangeOptions = prompt(
    "Would you like to confirm your trip or change a Option? To confirm enter press any key \n Press 1- Destination Change\n Press 2- Restaurant Change \n Press 3- Transportation Change \n Press 4 - Entertainment Change" );
   let changeMyChoice =userChangeOptions;

  if (changeMyChoice === "1") {
    let desUpdate = getRandomDestination();
    prompt(`Your destination has been change to: ${desUpdate}`);
    confirmOrChangeTrip();
  } else if (changeMyChoice === "2") {
    let restUpdate = getRestaurantOptions();
    prompt(`Your new updated Restaurant choice is ${restUpdate}`);
    confirmOrChangeTrip();
  } else if (changeMyChoice === "3") {
    let transUpdate = getTransportationOptions();
    prompt(`Your transportation method has been updated to: ${transUpdate}`);
    confirmOrChangeTrip();
  } else if (changeMyChoice === "4") {
    let entertainUpdate = getEntertainmentOption();
    prompt(`Your entertainment option has been changed to: ${entertainUpdate}`);
    confirmOrChangeTrip();
  } else {
       changeTripOptions();
  }
}

changeTripOptions();