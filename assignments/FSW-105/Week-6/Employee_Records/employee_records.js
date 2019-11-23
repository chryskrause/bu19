function Employee (name, jobTitle, salary, fullTime){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.fullTime = fullTime
}

Employee.prototype.status = function(){
    console.log(this.fullTime)
}

const emp1 = new Employee("Michael Scarn", "Agent/Paper Salesman", 78000, "Full Time")
const emp2 = new Employee("Bob Vance", "Refrigeration", 165000, "Full Time")
const emp3 = new Employee("Todd Packer", "Travelling Salesman/Womanizer", 75000, "Contract Employee")

const printEmployeeForm = [emp1, emp2, emp3]
console.log(printEmployeeForm)


// node employee_records.js


