export default {
    name: "VideoComponent",

    props: ["work"],

    template: `
        <section class="video-player">
            <i class="fas fa-film media-icon"></i>
            <h1>{{work.title}}</h1>
            <video :src="'video/' + work.source" controls></video>
            <h3>{{work.name }}</h3>
            <p>{{work.description }}</p>
        </section>`
}