export default {
    name: "WebComponent",

    props: ["work"],

    template: `
        <section class="web-player">
            <i class="fas fa-web media-icon"></i>
            <h1>{{work.title}}</h1>
            <a :href="'web/' + work.source"></a>
            <article>
                <h1>{{work.name }}</h1>
                <p>{{work.description }}</p>
            </article>
        </section>
    `
}