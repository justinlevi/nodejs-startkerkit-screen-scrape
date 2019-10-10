"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sayHello_1 = __importDefault(require("../sayHello"));
test('sayHello can greet a user', () => {
    const user = { name: 'TypeScript' };
    expect(sayHello_1.default(user)).toBe('Hello TypeScript!');
});
