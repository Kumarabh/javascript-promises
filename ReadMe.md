# TOPIC: PROMISES

# Promise can be created using Promise Constructor

example: 
let promise = new Promise((resolve,reject) => {
//executer runs automatically.
})
------------------------------------------------------------------
DEFINITION:

# Important Points:- 

* The function passed to new Promise is called the executor.

* When new Promise is created, executer runs automatically.

* After the executer job is completed, it calls resolve/reject.

* resolve(value) => job is completed successfully.
   reject(err) => error has occured.

* The promise object retured by new Promise constructor has two internal
   properties.
   
   state: "pending"/"fullfilled"/"rejected".
   result: undefined/resolve(value)/reject(error)

* Once a promise state reaches to fullfilled/rejected, it can't change to other state. In either of the state, the promise is  resolved.

------------------------------------------------------------------
# Topic: then() method:

* Is used to schedule a callback to be executed, when promise is successfully resolved.

* then method takes two callback functions

example: promiseObject.then(onFulfilled, onRejected);

    onFulfilled -> is called if promise is fulfilled.
    onRejected -> is called if promise is rejected.


/scripts/test.js    
----------------

const resolveMe = (isCompleted) => {
    const customerInstance = {
        id: '10138484038',
        name: 'John Doe',
        city: 'Texas',
        country: 'U.S.A',
        zipcode: '3384938',
        address: 'Flat 1021, Block-22, Lane-C, Texas, U.S.A',
        contact: '663-938-3939'
    }
    let p = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(isCompleted)
            resolve(customerInstance);
            else 
            reject('resolved, but rejected.');
        }, 5000);
    })
    return p;
}

export {resolveMe}

/scripts/app.js
---------------

* Handeling fulfilled & rejected 

resolveMe().then(
  (success) => console.log(success)
  (reason) => console.log(reason)

)


* Handeling fulfilled only

resolveMe().then(
  (value) => console.log(value);
)

* Handeling rejected case

reolveMe().then(
   undefined,
   reason => console.log(reason)
)

------------------------------------------------------------------
Topic: promise catch and finally

resolveMe().then(
  (success) => {}

).catch(
  (reason) => {}

).finally(
  () => {}
)



