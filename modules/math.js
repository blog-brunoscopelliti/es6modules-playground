
console.log("math.js is running");

export default function pow(n, p) {
    return Math.pow(n, p);
}

function square_(n) {
    return n * n;
}

function cubic_(n) {
    return n * n * n;
}

export { square_ as square, cubic_ as cubic };