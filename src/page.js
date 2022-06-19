
// const page = (() => {

//     function pagetest(name) {

//         // const main = document.querySelector(main);
    
//         const newPage = document.createElement('div');
        
//         newPage.innerHtml = name
    
//         document.querySelector('.main').appendChild(newPage);
//     }

//     return {pagetest}

// })();

const page = (name) => {
    // const newPage = document.createElement('div');
    // newPage.innerHtml = 'HELLO';

    // document.querySelector('.main').appendChild(newPage);

    const testing = document.createElement('div');

    testing.innerHTML = name;

    document.querySelector('.main').appendChild(testing);


    console.log('inside page function');
};



export default page;