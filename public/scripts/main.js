import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './components/TheMovieThumbnailComponent.js';
import TheMusicThumb from './components/TheMusicThumbnailComponent.js';


(() => {
    const vm = new Vue({
        data: {
            allMovies: [],
            allMusic: []

        },

        created: function() {
            fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allMovies = data;
            })

            fetch('/api/music')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.allMusic = data;
            })
            .catch(err => console.error(err));
        },

        methods: {

        },

        components: {
            moviethumb: TheMovieThumb,
            musicthumb: TheMusicThumb

        }

    }) .$mount("#app");

})();