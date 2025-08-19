class University{
    constructor(name){
        this.name=name;
        this.departments=[];
    }

    addDepartment(dept){
        this.departments.push(dept);
        console.log(`Department ${dept} added`);
    }

    removeDepartment(dept){
        const index=this.departments.indexOf(dept);
        if(index>=0){
            this.departments.splice(index,1);
            console.log(`Department ${dept} removed`);
        }else{
            console.log(`Department ${dept} not found`);
        }
    }

    displayDepartments(){
        console.log(`Departments in ${this.name}:`);
        this.departments.forEach((dept,index) => {
            console.log(`${index+1}.${dept}`);
        });
    }
}
const myUniversity = new University("Charusat University");

myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mechanical Engineering");
myUniversity.addDepartment("Electrical Engineering");

myUniversity.displayDepartments();

myUniversity.removeDepartment("Mechanical Engineering");

myUniversity.displayDepartments();
