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

/////111
router.get("/myFunction", function (req, res, next) {
    res.send({
        name: "myFunction",
        sum: myFunction(1, 2)
    });
});


function myFunction(a, b) {
    return a + b;
}

///2222
router.get("/myFunction1", function (req, res, next) {
    res.send({
        name: "myFunction1",
        sum: myFunction1(1, 2)
    });
});

function myFunction1(a, b) {
    return a === b;
}


///3333
router.get("/myFunction3", function (req, res, next) {
    res.send({
        name: "myFunction3",
        sum: myFunction3(1, 2)
    });
});

function myFunction3(a) {
    return typeof a;
}

////4444
router.get("/myFunction4", function (req, res, next) {
    res.send({
        name: "myFunction4",
        sum: myFunction4(1, 2)
    });
});
function myFunction4(a, n) {
    return a[n - 1];
}

////5555
router.get("/myFunction5", function (req, res, next) {
    res.send({
        name: "myFunction5",
        sum: myFunction5(1, 2)
    });
});
function myFunction5(a, b) {
    return (b / 100) * a;
}



////66666
router.get("/myFunction6", function (req, res, next) {
    res.send({
        name: "myFunction6",
        sum: myFunction6(1, 2)
    });
});
func
function myFunction6(a, b, c, d, e, f) {
    let result = ((a + b - c) * d) / e;
    result = Math.pow(result, f);
    return result;
}


////7777

router.get("/myFunction7", function (req, res, next) {
    res.send({
        name: "myFunction7",
        sum: myFunction7(1, 2)
    });
});
function myFunction7(a, b) {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}


///88888
router.get("/myFunction8", function (req, res, next) {
    res.send({
        name: "myFunction8",
        sum: myFunction8(1, 2)
    });
});
function myFunction8(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


///99999
router.get("/myFunction9", function (req, res, next) {
    res.send({
        name: "myFunction9",
        sum: myFunction9(1, 2)
    });
});
function myFunction9(a) {
    return a % 2 === 0;
}

/////10
router.get("/myFunction10", function (req, res, next) {
    res.send({
        name: "myFunction10",
        sum: myFunction10(1, 2)
    });
});
function myFunction10(a, b) {
    let count = 0;
    let index = b.indexOf(a);
    while (index !== -1) {
        count++;
        index = b.indexOf(a, index + 1);
    }
    return count;
}
///11
router.get("/myFunction11", function (req, res, next) {
    res.send({
        name: "myFunction11",
        sum: myFunction11(1, 2)
    });
});
function myFunction11(a, b) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b.charAt(i) === a) {
            count++;
        }
    }
    return count;
}

//12
router.get("/myFunction12", function (req, res, next) {
    res.send({
        name: "myFunction12",
        sum: myFunction12(1, 2)
    });
});
function myFunction12(a) {
    return Number.isInteger(a);
}


//13
router.get("/myFunction13", function (req, res, next) {
    res.send({
        name: "myFunction13",
        sum: myFunction13(1, 2)
    });
});
function myFunction13(a, b) {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}


//14
router.get("/myFunction14", function (req, res, next) {
    res.send({
        name: "myFunction14",
        sum: myFunction14(1, 2)
    });
});
function myFunction14(a) {
    return Math.round(a * 100) / 100;
}


///15
router.get("/myFunction15", function (req, res, next) {
    res.send({
        name: "myFunction15",
        sum: myFunction15(1, 2)
    });
});
function myFunction15(a) {
    return Array.from(String(a), Number);
}


//16
router.get("/myFunction16", function (req, res, next) {
    res.send({
        name: "myFunction16",
        sum: myFunction16(1, 2)
    });
});
function myFunction16(a, b) {
    return a === b;
}
///17
router.get("/myFunction17", function (req, res, next) {
    res.send({
        name: "myFunction17",
        sum: myFunction17(1, 2)
    });
});
function myFunction17(a) {
    return typeof a;
}

//18
router.get("/myFunction18", function (req, res, next) {
    res.send({
        name: "myFunction18",
        sum: myFunction18(1, 2)
    });
});
function myFunction18(a, n) {
    return a[n - 1];
}


//19
router.get("/myFunction19", function (req, res, next) {
    res.send({
        name: "myFunction19",
        sum: myFunction19(1, 2)
    });
});
function myFunction19(a, b) {
    return (b / 100) * a;
}


//20
router.get("/myFunction20", function (req, res, next) {
    res.send({
        name: "myFunction20",
        sum: myFunction20(1, 2, 3, 4, 5, 6)
    });
});
function myFunction19(a, b, c, d, e, f) {
    let result = ((a + b - c) * d) / e;
    result = Math.pow(result, f);
    return result;
}
