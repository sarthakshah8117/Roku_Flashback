export default{
    name: "TheMovieThumbnail",
    props: ['movie'],
    template:`
    <div class="song-box">
        <img @click="movieThumbSelected" :src='"images/" + movie.movies_cover' alt="movie thumb">
        <p>{{movie.movies_title}}</p>
    </div>
    `,

    mounted:function(){
        console.log("Selection->Movie Thumbnail Component");
    },

    methods:{
        movieThumbSelected(){
            // document.querySelector('.pop-box').classList.add('pop-close');
            console.log(`thumbnail: "${this.movie.movies_title}" movie selected from component`);
            this.$emit("showmoviedata",this.movie);
        }
    }
}