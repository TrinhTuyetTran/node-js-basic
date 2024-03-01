const express = require("express");
const router = express.Router();

require("dotenv").config();
const variableData = process.env.variableData || "NodeJS Code";

router.get("/", function (req, res, next) {
    res.send({
        name: "node-docker-gitlab-ci",
        server: "express",
        variableData: variableData,
    });
});

module.exports = router;
function myfunction(a, b) {
    return a + b;
}
// myfunction(1,2);
console.log(myfunction(1, 2));
function myFunction1(a, b) {
    return a === b;
}
console.log(myFunction1(2, 2));

function myFunction3(a) {
    return typeof a;
}
console.log(myFunction3);
function myFunction4(a, n) {
    return a[n - 1];
}
console.log(myFunction4(5, 2));
function myFunction5(a, b) {
    return (b / 100) * a;
}
console.log(myFunction5(3, 3));
function myFunction6(a, b, c, d, e, f) {
    let result = ((a + b - c) * d) / e;
    result = Math.pow(result, f);
    return result;
}
console.log(myFunction6(6, 5, 4, 3, 2, 1));
function myFunction7(a, b) {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}
// console.log(myFunction7(4, 5));
function myFunction8(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(myFunction8(10));
function myFunction9(a) {
    return a % 2 === 0;
}
console.log(myFunction9(100));
function myFunction10(a, b) {
    let count = 0;
    let index = b.indexOf(a);
    while (index !== -1) {
        count++;
        index = b.indexOf(a, index + 1);
    }
    return count;
}
console.log(myFunction10(10, 10));
function myFunction11(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b.charAt(i) === a) {
            count++;
        }
    }
    return count;
}
console.log(myFunction11(5, 10));
function myFunction12(a) {
    return Number.isInteger(a);
}
console.log(myFunction12(10));
function myFunction13(a, b) {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}
console.log(myFunction12(5, 10));
function myFunction13(a) {
    return Math.round(a * 100) / 100;
}
console.log(myFunction13(1000));
function myFunction14(a) {
    return Array.from(String(a), Number);
}
console.log(myFunction14(10));

//

function myFunction15(a, b) {
    return a === b;
}
console.log(myFunction15(2, 2));

function myFunction16(a) {
    return typeof a;
}
console.log(myFunction16);
function myFunction17(a, n) {
    return a[n - 1];
}
console.log(myFunction17(5, 2));
function myFunction18(a, b) {
    return (b / 100) * a;
}
console.log(myFunction18(3, 3));
function myFunction19(a, b, c, d, e, f) {
    let result = ((a + b - c) * d) / e;
    result = Math.pow(result, f);
    return result;
}
console.log(myFunction19(6, 5, 4, 3, 2, 1));