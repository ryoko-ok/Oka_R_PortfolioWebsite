import Web from "./TheWebComponent.js";
import Video from "./TheVideoComponent.js";
import Graphic from "./TheImageComponent.js";

export default {
    props: ["item", "mediatype"],

    template: `
    <section class="lightbox">
        <span class="lb-close" @click="closelb">X</span>
        <h2>Type of Work: {{mediatype}}</h2>
        <!-- web,video or graphic component (mediatype) gets rendered here -->
        <component :is="currentComponent" :work="item"></component>
    </section>
    `,

    computed: {
        currentComponent: function() {
            return this.mediatype;
        }
    },

    components: {
        Web,
        Video,
        Graphic
    },

    methods: {
        closelb() {
            document.querySelector('.lightbox').classList.remove('show-lightbox');
        }
    }
}