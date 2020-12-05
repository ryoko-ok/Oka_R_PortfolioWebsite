import { SendMail } from "./components/mailer.js";
import { fetchData } from "./components/TheDataMiner.js";

(() => {
    let mailSubmit = document.querySelector('.submit-wrapper');

    function processMailFailure(result) {
        // show a failure message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMailSuccess(result) {
        // show a success message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMail(event) {
        // block the default submit behaviour
        event.preventDefault();

        // use the SendMail component to try to process mail
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));

            // the error handler in the catch block could actually be a generic catch-and-display function that handles EVERY error you might encounter during runtime. Might be a better strategy to pass in a flag or just a message and have the function display it in the UI
    }

    mailSubmit.addEventListener("click", processMail);

    let vue_vm = new Vue({
        // link Vue to an element in out HTML
        // el: "#app", --- same with last line $mount("#app")

        data: {
            message: "New Mini Cooper Models!",
            anotherMessage: "Click a new model! See details!",
            showBioData: false,
            removeAformat:true,
            newmodels: [],
            currentModelData: {},
        },

        // this is the "mounted" lifecycle hook. Vue is done creating itself, and has attached itself to the "app"div on the page
        mounted: function() {
            console.log("Vue is mounted, trying a fetch for the initial data");

            fetchData("./includes/index.php")
            .then(data => {
                data.forEach(model => this.newmodels.push(model));
            })
            .catch(err => console.error(err));            
         },

        // run a method when we change our view (update the DOM with Vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader(){
                console.log("clicked on the header");
            },

            removeModel(target) {
                 // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false : true

                // make the selected model's data visible

                // this.newmodels.splice(this.newmodels.indexOf(target), 1);
                this.currentModelData = target;

            }
        },
        
    }).$mount("#app"); // also connects Vue to your wrapper in HTML, same as el
})();