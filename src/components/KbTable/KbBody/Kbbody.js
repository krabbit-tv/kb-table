import KbRow from "./KbRow/KbRow.vue";

export default {
    name: 'kb-body',
    props: {
        headers: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        identifyBy: {
            type: String,
            required: true
        },
        selectedRow: {
            type: Object,
            required: true
        }
    },
    components: {
        KbRow
    }
};