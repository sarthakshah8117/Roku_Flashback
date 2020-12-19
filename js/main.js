import components from "./components/components.js";
import { fetchData} from "./components/TheDataMiner.js";

(() => {
    const myVM = new Vue ({
        data: {
            currentItem: {},
            mediaType: "",
            media: []
        },


        mounted: function() {
            fetchData('./includes/index.php') .then(data => {
                this.media = data;
            })
            
        },

        methods: {
            setComponent(project) {
                this.mediaType = project.mediaType;
                this.currentItem = project;
            }
        },

        components: {
            "datacomponent": components,

        }
    }).$mount("#app");







})();