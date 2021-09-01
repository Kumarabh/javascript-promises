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