const returnFirstTwoDrivers = (x) => x.slice(0,2);
const returnLastTwoDrivers = (x) => x.slice(x.length -2);

const drivers = ['Antonia', 'Nuru', 'Amari', 'Claudia'];


console.log( returnFirstTwoDrivers(drivers));
console.log( returnLastTwoDrivers(drivers));
console.log('drivers: ', drivers);


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = i => {
    return function(fare) {
        return fare * i
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnDriversFunction)  {
    if(returnDriversFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if(returnDriversFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}