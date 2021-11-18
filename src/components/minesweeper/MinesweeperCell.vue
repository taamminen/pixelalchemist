<template>
    <div class="minesweeper-cell" :class="getClass()">
        <div v-if="cell.isOpen && cell.bombCount">
            {{ cell.bombCount }}
        </div>
        <div v-if="cell.hasFlag">
            &#9873;
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
            min-height: 35px;
            min-width: 35px;
            background-color: #95a5a6;
        }

        &-bomb {
            background: #e74c3c;
            content: '💣';
        }

        &-open {
            background: #bdc3c7;
        }

        &-flag {
            background: #2ecc71;
        }
    }
</style>
