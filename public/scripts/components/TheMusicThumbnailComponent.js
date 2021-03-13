export default{
    name: "TheMusicThumbnail",

    props: ["music"],

    template: `
    <div class="music-thumb">
        <img :src='"music/" + music.thumbnail' alt="music thumbnail">
        <p>{{music.song_name}}</p>
        <p>{{music.singer}}</p>
    </div>
    `
}