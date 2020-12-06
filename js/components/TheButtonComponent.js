export default {
    name: "ButtonComponent",

    props: ['item'],

    template: `
        <div @click="loadMediaComponent" class="button-wrapper" :data-mediatype="item.mediatype">
            <img class="lb-thumb" :src="'images/' + item.thumb" alt="portfolio thumbnail">
            <h4 class="lb-thumb-title">{{item.title}}</h4>
        </div>
`,

    methods: {
        loadMediaComponent(event) {
            // debugger;
            this.$emit("setmediatype", this.item);
        }
    }
}