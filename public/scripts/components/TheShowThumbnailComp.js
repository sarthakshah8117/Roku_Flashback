export default{
    name: "showthumb",
    props: ['show'],
    template:`
    <div class="song-box">
        <img @click="showThumbSelected" :src='"images/show/" + show.shows_cover' alt="show thumb">
        <p>{{show.shows_title}}</p>
    </div>
    `,

    mounted:function(){
        console.log("Selection->SHOW Thumbnail Component");
    },

    methods:{
        showThumbSelected(){
            // document.querySelector('.pop-box').classList.add('pop-close');
            console.log(`thumbnail: "${this.show.shows_title}" show selected from component`);
            this.$emit("showshowdata",this.show);
        }
    }
}