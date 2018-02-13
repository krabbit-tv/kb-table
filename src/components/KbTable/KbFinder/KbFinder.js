import EventBus from './../Commons/EventBus';

export default {
    name: "kb-finder",
    props: {
        headers: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            wordToFind: ''
        };
    },
    methods: {
        find() {
           EventBus.$emit("find", this.wordToFind); 
        }
    }
};