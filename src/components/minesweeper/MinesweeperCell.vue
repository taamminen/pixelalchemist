<template>
    <div class="minesweeper-cell" :class="getClass()">
        <div v-if="cell.isOpen && cell.bombCount">
            <div style="color:blue" v-if="cell.bombCount == 1">
                {{ cell.bombCount }}
            </div>
            <div style="color:green" v-else-if="cell.bombCount == 2">
                {{ cell.bombCount }}
            </div>
            <div style="color:red" v-else-if="cell.bombCount == 3">
                {{ cell.bombCount }}
            </div>
        </div>
        <div v-if="cell.hasFlag">
            |>
        </div>
    </div>
</template>

<script>
export default {
    name: 'minesweeper-cell',
    props: {
        cell: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getClass() {
            const { cell } = this;
            if (cell.isOpen && cell.hasBomb) {
                return 'minesweeper-bomb';
            }
            if (cell.isOpen) {
                return 'minesweeper-open';
            }
            if (cell.hasFlag) {
                return 'minesweeper-flag';
            }
            return '';
        },
    },
};
</script>

<style lang="scss">
    .minesweeper {
        &-cell {
            align-items: center;
            background: rgba(0, 0, 0, 0.1);
            cursor: pointer;
            display: flex;
            font-size: 1.3em;
            justify-content: center;
            min-height: 10px;
            min-width: 10px;
            background-color: #95a5a6;
            border: 8px solid;
            border-color: #fff #808080 #808080 #fff;
            font-weight: bold;
        }

        &-bomb {
            background: #e74c3c;
        }

        &-open {
            background: #bdc3c7;
        }

        &-flag {
            background: #2ecc71;
        }
    }
</style>
