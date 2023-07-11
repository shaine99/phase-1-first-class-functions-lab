// Code your solution in this file!

function returnFirstTwoDrivers(){
    const returnFirstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return returnFirstTwoDrivers.slice(0,2)
}

//2
function returnLastTwoDrivers(){
    const returnLastTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return returnLastTwoDrivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function fareQuintupler() {
         return integer*integer;
    }    
}
    
function fareDoubler(integer){
    return integer*2;
}

function fareTripler(integer){
    return integer*3;
}

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){
   return returnFirstTwoDrivers(arrayOfDrivers)
   
    // const returnFirstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    // return returnFirstTwoDrivers.slice(0,2);

    
}