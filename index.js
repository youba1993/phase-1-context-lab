/* Your Code Here */
function createEmployeeRecord([firstName,familyName,title,payPerH]){
    let emplObject = {
        firstName : firstName,
        familyName : familyName,
        title : title,
        payPerHour : payPerH,
        timeInEvents : [],
        timeOutEvents : [],
    }
    return emplObject;
 }
 function createEmployeeRecords(emplRecords){
     return emplRecords.map(createEmployeeRecord);
 }
 function createTimeInEvent(timeIn){
    let dateTab = timeIn.split(" ");
    let timeStamp = {
        type : "TimeIn",
        date : dateTab[0],
        hour : parseInt(dateTab[1]),
    }
    this.timeInEvents.push(timeStamp);
    return this;
}
function createTimeOutEvent(timeOut){
    let dateTab = timeOut.split(" ");
    let timeStamp = {
        type : "TimeOut",
        date : dateTab[0],
        hour : parseInt(dateTab[1]),
    }
    this.timeOutEvents.push(timeStamp);
    return this;
}
function hoursWorkedOnDate(date){
    let timeIn= this.timeInEvents.filter(elem => elem.date=date).map(elem =>  elem.hour/100);      
    let timeOut= this.timeOutEvents.filter(elem => elem.date=date).map(elem => elem.hour/100);     
   return timeOut - timeIn;
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this,date)* this.payPerHour;
}
function findEmployeeByFirstName(srcArray,firstName){
    let emp = srcArray.find((rec) => rec.firstName === firstName);
    return emp;
}
function calculatePayroll(array){
    let payroll = array.reduce((acc,cur) => {
        return acc + allWagesFor.call(cur);
    }, 0);
    return payroll
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

