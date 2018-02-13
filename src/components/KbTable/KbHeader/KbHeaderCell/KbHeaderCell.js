import EventBus from './../../Commons/EventBus';

export default {
    props: {
        header: {
            type: Object,
            required: true
        },
        currentOrder: {
            type: Object,
            required: true
        }
    },
    name: 'kb-header-cell',
    data: () => {
        return {};
    },
    methods: {
        orderBy () {
            EventBus.$emit("order-by", this.header.key);
        }
    }
}