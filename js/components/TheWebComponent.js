export default {
    name: "WebComponent",

    props: ["work"],

    template: `
        <section class="web-player">
            <i class="fas fa-web media-icon"></i>
            <h1>{{work.title}}</h1>
            <img :src="'images/' + work.source" alt="portfolio image">
            <article>
                <h1>{{work.name }}</h1>
                <p>{{work.description }}</p>
            </article>
        </section>
    `
}