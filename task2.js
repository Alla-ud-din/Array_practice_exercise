"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task1_1 = __importDefault(require("./task1"));
//console.log(arr);
let even = [];
let odd = [];
console.log("Odd Numbers are");
for (let i = 0; i < task1_1.default.length; i++) {
    if (task1_1.default[i] % 2 == 0) {
        even[i] = task1_1.default[i];
        //console.log(even[i]);
    }
    else {
        odd[i] = task1_1.default[i];
        console.log(odd[i]);
    }
}
