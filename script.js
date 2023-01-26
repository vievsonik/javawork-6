// task1
let factory = {
    facName : 'Volkswagen Wolfsburg Plant',
    calculateWorkload : function (){
        const employeWorkData = this.employeeWeeklyWorkload;
        const workResultdata = [];
        if(employeWorkData && employeWorkData.length > 0){
            for(let emp of employeWorkData){
                    workResultdata.push(emp.workload)
            }
            return workResultdata
        }else "araa swori zmao"
    },
    formatArray : function (name) {

    }
    
}

// let factoryEmployees = {
//     employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
//     employeeNum : this.employees.length,
// }

let workloadData = {
    employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", timeSpent : 25 },{name : "Maria", timeSpent : 28 },{name : "Dan", timeSpent : 30 },{name : "Lorelai", timeSpent : 31 }]
}
let workArr = this.factory.calculateWorkload.bind(workloadData)();

console.log (workArr) 


// task 6
// let arr2 = [2,2,2,1,30]

// function removeDuplicates(arr) {
// return arr2.filter((item,
// index) => arr.indexOf(item) === index);
// }



// console.log(removeDuplicates(arr2));