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
exports.Consultant = void 0;
var Employee_1 = require("./Employee");
var Consultant = /** @class */ (function (_super) {
    __extends(Consultant, _super);
    function Consultant(empId, empName, deptName, designation, hourlyRate, specialization) {
        var _this = _super.call(this) || this;
        _this.hourlyRate = hourlyRate;
        _this.specialization = specialization;
        _this.hourlyRate = hourlyRate;
        return _this;
    }
    Consultant.prototype.createEmployee = function (empId, empName, deptName, designation) {
        this.empId = empId;
        this.empName = empName;
        this.deptName = deptName;
        this.designation = designation;
    };
    Consultant.prototype.displayEmpDetails = function () {
        console.log(this.empId + " " + this.empName + "  " + this.deptName + "  " + this.designation + " " + this.hourlyRateVal + " " + this.spclVal);
    };
    Object.defineProperty(Consultant.prototype, "hourlyRateVal", {
        get: function () {
            return this.hourlyRate;
        },
        set: function (rate) {
            this.hourlyRate = rate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consultant.prototype, "spclVal", {
        get: function () {
            return this.specialization;
        },
        set: function (spcl) {
            this.specialization = spcl;
        },
        enumerable: false,
        configurable: true
    });
    return Consultant;
}(Employee_1.Employee));
exports.Consultant = Consultant;
