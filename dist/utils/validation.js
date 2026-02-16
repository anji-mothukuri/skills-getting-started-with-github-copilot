"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = isEmail;
exports.isRequired = isRequired;
exports.isMinLength = isMinLength;
function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isRequired(value) {
    return value.trim().length > 0;
}
function isMinLength(value, min) {
    return value.length >= min;
}
