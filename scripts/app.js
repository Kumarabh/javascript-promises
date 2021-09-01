import { resolveMe } from "./test.js";
// resolveMe().then(data => console.log(data))

//resolve the promise.
let promise1 = resolveMe(true);
promise1.then(data => console.log(data));

//reject the promise.
let promise2 = resolveMe(false);
promise2.then(undefined, reason => console.log(reason))