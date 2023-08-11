"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task1_1 = __importDefault(require("./task1"));
//console.log(arr);
let sum = 0;
for (let i = 0; i < task1_1.default.length; i++) {
    sum += task1_1.default[i];
}
console.log(`Sum of Array element ${sum}`);
