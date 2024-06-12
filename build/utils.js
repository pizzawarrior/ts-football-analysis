"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoDate = void 0;
const dateStringtoDate = (dateString) => {
    const dateConversion = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
    // the date constructor is zero indexed, so we subtract 1. Eg. January should be 0.
    dateConversion[1] = dateConversion[1] - 1;
    return new Date(dateConversion[2], dateConversion[1], dateConversion[0]);
};
exports.dateStringtoDate = dateStringtoDate;
