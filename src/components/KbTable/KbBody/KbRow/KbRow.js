import KbCell from './KbCell/KbCell.vue';
import _ from 'lodash';
import EventBus from './../../Commons/EventBus';

export default {
    name: 'kb-row',
    props: {
        row: {
            type: Object,
            required: true
        },
        headers: {
            type: Array,
            required: true
        },
        selectedRow: {
            type: Object,
            required: true
        },
        identifyBy: {
            type: String,
            required: true
        }
    },
    components: {
        KbCell
    },
    computed: {
        columns: function () {
            return _.map(this.headers, this.createColumn);
        },
        isSelected () {
            return this.selectedRow[this.identifyBy] === this.row[this.identifyBy];
        }
    },
    methods: {
        createColumn: function (header) {
            return {
                value: this.row[header.key]
            };
        },
        selectRow () {
            EventBus.$emit('select-row', this.row);
        }
    }
}