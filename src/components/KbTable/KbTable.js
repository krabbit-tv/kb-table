import KbHeader from './KbHeader/KbHeader.vue';
import KbBody from './KbBody/KbBody.vue';
import KbFooter from './KbFooter/KbFooter.vue';
import KbFinder from './KbFinder/KbFinder.vue';
import EventBus from './Commons/EventBus';

export default {
    name: 'kb-table',
    props: {
        headers: {
            required: true,
            type: Array
        },
        data: {
            required: true,
            type: Array
        },
        identifyBy: {
            required: true,
            type: String
        }
    },
    components: {
        KbHeader,
        KbBody,
        KbFooter,
        KbFinder
    },
    data () {
        return {
            currentOrder: {
                direction: 'desc',
                column: ''
            },
            selectedRow: {},
            filter: ''
        }
    },
    computed: {
        dataSet() {
            return this.filterData();
        }
    },
    methods: {
        orderBy (columnToOrder) {
            this.currentOrder.direction = this.currentOrder.direction === 'desc' ? 'asc': 'desc';
            this.currentOrder.column = columnToOrder;
        },
        orderData () {
            return _.orderBy(this.data, this.currentOrder.column, this.currentOrder.direction);
        },
        selectRow (row) {
            this.selectedRow = row;
            this.$emit('select-row', row);
        },
        find (wordToFind) {
            this.filter = wordToFind;
        },
        filterData (ordenatedData) {
            return _.filter(this.orderData(), this.searchText);
        },
        searchText (item) {
            var rowSeeked = _.find(this.headers, (function (header) {
                let itemValueStandarizated = _.upperCase(_.toString(item[header.key]));
                let filterStandarizated = _.upperCase(this.filter);
                return _.includes(itemValueStandarizated, filterStandarizated);
            }).bind(this));

            return rowSeeked !== undefined;
        }
    },
    created() {
        EventBus.$on('order-by', this.orderBy);
        EventBus.$on('select-row', this.selectRow);
        EventBus.$on('find', this.find);
    }
};