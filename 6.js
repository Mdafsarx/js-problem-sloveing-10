// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience:1, starting: 29000, increment: 4000 },
];
const totalSalary=(employees)=>{
    let salaryWillGiveByCompany=0;

for(const employee of employees){
const mainSalary=employee.starting;
const experience=employee.experience;
const increment=employee.increment;

const incrementSalary=increment*experience;
const totalSalaryTake=mainSalary+incrementSalary;
salaryWillGiveByCompany=salaryWillGiveByCompany+totalSalaryTake;

}
return salaryWillGiveByCompany;
}
const answer=totalSalary(employees);
console.log(answer)