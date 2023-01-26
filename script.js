// task1
// let timeleft = 5;
let factory = {
  facName: "nissan",
  calculateWorkload: function () {
    const employeWorkData = this.employeeWeeklyWorkload;
    const workResultdata = [];
    if (employeWorkData && employeWorkData.length > 0) {
      for (let emp of employeWorkData) {
        workResultdata.push(emp.workload || emp.timeSpent);
      }
      return workResultdata;
    } else "araa swori";
  },
  formatArray: function (name) {
    const factoryEmployeesData = this.employees;
    if (factoryEmployeesData && factoryEmployeesData.length > 0) {
      let emp = factoryEmployeesData.find((el) => el.name === name);
      return { name: emp.name, timeleft: 5 - emp.timeSpent };
    } else "araa swori";
  },
};

let factoryEmployees = {
  employees: [
    { name: "John", timeSpent: 1 },
    { name: "Sam", timeSpent: 3 },
    { name: "Maria", timeSpent: 2 },
    { name: "Dan", timeSpent: 4 },
    { name: "Lorelai", timeSpent: 5 },
  ],
};

let workloadData = {
  employeeWeeklyWorkload: [
    { name: "John", workload: 40 },
    { name: "Sam", timeSpent: 25 },
    { name: "Maria", timeSpent: 28 },
    { name: "Dan", timeSpent: 30 },
    { name: "Lorelai", timeSpent: 31 },
  ],
};

// let workArr = factory.calculateWorkload.bind(workloadData)();

// console.log(workArr);

let timeSpentformat = factory.formatArray.bind(factoryEmployees, "sam")();

console.log(timeSpentformat);

// task 6
// let arr2 = [2,2,2,1,30]

// function removeDuplicates(arr) {
// return arr2.filter((item,
// index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr2));
