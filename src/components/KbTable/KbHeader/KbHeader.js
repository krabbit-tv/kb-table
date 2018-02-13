import KbHeaderCell from './KbHeaderCell/KbHeaderCell.vue';

export default {
    name: 'kb-header',
    props: {
        headers: {
            type: Array,
            required: true
        },
        identifyBy: {
            type: String,
            required: true
        },
        currentOrder: {
            type: Object,
            required: true
        }
    },
    components: {
        KbHeaderCell
    }
};