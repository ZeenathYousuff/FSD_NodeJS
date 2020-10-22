"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularEmployee = void 0;
var Employee_1 = require("./Employee");
var RegularEmployee = /** @class */ (function (_super) {
    __extends(RegularEmployee, _super);
    function RegularEmployee(empId, empName, deptName, designation, salary) {
        var _this = _super.call(this) || this;
        _this.salary = salary;
        _this.salary = salary;
        return _this;
    }
    RegularEmployee.prototype.createEmployee = function (empId, empName, deptName, designation) {
        this.empId = empId;
        this.empName = empName;
        this.deptName = deptName;
        this.designation = designation;
    };
    RegularEmployee.prototype.displayEmpDetails = function () {
        console.log(this.empId + " " + this.empName + "  " + this.deptName + "  " + this.designation + " " + this.salaryVal);
    };
    Object.defineProperty(RegularEmployee.prototype, "salaryVal", {
        get: function () {
            return this.salary;
        },
        set: function (sal) {
            this.salary = sal;
        },
        enumerable: false,
        configurable: true
    });
    return RegularEmployee;
}(Employee_1.Employee));
exports.RegularEmployee = RegularEmployee;
