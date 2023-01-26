// task1
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
  formatArray: function (name) {},
};

let factoryEmployees = {
  employees: [
    { name: "John", timeSpent: 1 },
    { name: "Sam", timeSpent: 3 },
    { name: "Maria", timeSpent: 2 },
    { name: "Dan", timeSpent: 4 },
    { name: "Lorelai", timeSpent: 5 },
  ],
  // employeeNum : this.employees.length,
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

let workArr = factory.calculateWorkload.bind(workloadData)();

console.log(workArr);

// task 6
// let arr2 = [2,2,2,1,30]

// function removeDuplicates(arr) {
// return arr2.filter((item,
// index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr2));
