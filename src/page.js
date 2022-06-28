import DOM from "./DOM";

// changes main-title to button pressed on sidebar
const page = (name) => {
    document.querySelector('.main-title').innerHTML = name;

    // const today = new Date();
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth()+1);
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);

    let todoToday;
    for (let i = 0; i < DOM.myArr.length; i++) {
        // dam bruh do I gotta split string into array ex yyyy-mm-dd for month its [5] & [6]
        // prob easier way
        // const todayDate = ...
        // compare today month to object month
        const dateArr = DOM.myArr[i].due.split("");
        const month = "" +DOM.myArr[5] + "" + DOM.myArr[6]+ "";

        if (name == "Today") {  // display from myarr[5,6]
            // if ()
            todoToday = document.createElement("div");
            
            todoToday.className = "object";
            todoToday.innerHTML += `
            <div>

            </div>

            `;
            
        }
    }
};

export default page;