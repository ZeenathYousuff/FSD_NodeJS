import { v4 as uuidv4 } from 'uuid';
import {Employee} from "./Employee";
import {Specialization} from "./Specialization";

export class Consultant extends Employee{

    createEmployee(empId: any, empName: string, deptName: string, designation: string) {
        this.empId = empId;
        this.empName = empName;
        this.deptName = deptName;
        this.designation = designation;

    }

    displayEmpDetails() {
        console.log(`${this.empId} ${this.empName}  ${this.deptName}  ${this.designation} ${this.hourlyRateVal} ${this.spclVal}`);
    }

    constructor(empId: uuidv4, empName: string,deptName: string, designation: string,private hourlyRate:number,private specialization:Specialization) {
        super();
        this.hourlyRate = hourlyRate;
    }

    get hourlyRateVal() {
        return this.hourlyRate;
    }
    set hourlyRateVal(rate) {
        this.hourlyRate = rate;
    }

    get spclVal() {
        return this.specialization;
    }
    set spclVal(spcl) {
        this.specialization = spcl;
    }
}

