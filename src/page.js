
const page = (() => {

    function pagetest(name) {

        // const main = document.querySelector(main);
    
        const newPage = document.createElement('div');
        
        newPage.innerHtml = name
    
        document.querySelector('.main').appendChild(newPage);
    }

    return {pagetest}

})();



export default page;