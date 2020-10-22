import { v4 as uuidv4 } from 'uuid';
import {Employee} from "./Employee";

export class RegularEmployee extends Employee{

    createEmployee(empId: any, empName: string, deptName: string, designation: string) {
        this.empId = empId;
        this.empName = empName;
        this.deptName = deptName;
        this.designation = designation;
    }

    displayEmpDetails() {
        console.log(`${this.empId} ${this.empName}  ${this.deptName}  ${this.designation} ${this.salaryVal}`);
    }

    constructor(empId: uuidv4, empName: string,deptName: string, designation: string,private salary:number) {
       super();
       this.salary = salary;
    }

    get salaryVal() {
        return this.salary;
    }
    set salaryVal(sal) {
        this.salary = sal;
    }
}

