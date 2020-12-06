import ButtonComponent from "./components/TheButtonComponent.js";
import LightboxComponent from "./components/TheLightboxComponent.js";

import { fetchData } from "./components/TheDataMiner.js";

(() => {
    const myVM = new Vue({
        data: {
            currentItem: {},
            mediaType: "",
            mediaCollections: []   
        },

        mounted: function() {
            fetchData('./includes/index.php').then(data => {
                this.mediaCollections = data;
            })
        },

        methods: {
            setComponent(project) {
                // debugger;
                this.mediaType = project.mediatype;
                this.currentItem = project;

                document.querySelector('.lightbox').classList.add('show-lightbox');
            }
        },

        components: {
            "buttoncomponent": ButtonComponent,
            "lightbox" : LightboxComponent
        }
        
    }).$mount("#app");
})();