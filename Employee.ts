import { v4 as uuidv4 } from 'uuid';

export abstract class Employee
{
    protected  empId:uuidv4
    protected  empName: string;
    protected  deptName: string;
    protected  designation: string;

   /* abstract createEmployee(empId: any ,empName: string, deptName: string, designation: string) {
        this.empId=empId;
        this.empName = empName;
        this.deptName = deptName;
        this.designation = designation;
    }
    abstract displayEmpDetails()
    {
        console.log(`${this.empId} ${this.empName}  ${this.deptName}  ${this.designation}`);
    }*/

    abstract createEmployee(empId: any ,empName: string, deptName: string, designation: string);
    abstract displayEmpDetails()

}


