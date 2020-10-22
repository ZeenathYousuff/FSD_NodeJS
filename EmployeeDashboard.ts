import { v4 as uuidv4 } from 'uuid';
import {RegularEmployee} from "./RegularEmployee";
import {Consultant} from "./Consultant";
import {Specialization} from "./Specialization";

let emp1 = new RegularEmployee(uuidv4(),'Zeenath',"iOS","Developer",10000);
emp1.salaryVal=10000;
emp1.createEmployee(uuidv4(),'Zeenath',"iOS","Developer");
emp1.displayEmpDetails();

let emp2 = new Consultant(uuidv4(),'Zeenath',"iOS","Developer",500,0);
emp2.hourlyRateVal=500;
emp2.createEmployee(uuidv4(),'Zeenath',"iOS","Developer");
emp2.displayEmpDetails();