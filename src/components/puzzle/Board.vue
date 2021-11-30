<template>
    <div class="board">
        <div class="frame-wrapper" :style="frameSize">
            <p v-if="valid" class="win">You Win!</p>
            <div class="original"
                    v-if="showingOriginal && image"
                    @click="showingOriginal = false"
                    :style="{ background: `url(${image})`}">
            </div>
            <div class="frame" :style="frameSize">
                <Tile v-for="tile in tiles"
                    :key="tile.position"
                    :tile="tile"
                    @moving="moveTile"
                    ref="tiles"
                />
            </div>
        </div>

        <div class="controls">
            <a class="toggle-original" href="#" @click.prevent="showingOriginal = !showingOriginal">
                Toggle Original Image
            </a>
            <a class="shuffle" href="#" @click.prevent="shuffleTiles">Reshuffle</a>
            <a class="reset" href="#" @click.prevent="reset">Reset</a>
            <a class="restart" href="#" @click.prevent="restart">New Game</a>
        </div>
    </div>
</template>

<script>
import sample from 'lodash.sample'
import Tile from './Tile'
import loadImage from 'blueimp-load-image'


let backupTiles = null

export default {
    components: {Tile},
    mounted() {
        this.start()
    },
    data () {
        return {
            image: null,
            showingOriginal: false,
            size: {
                horizontal: 0,
                vertical: 0
            },
            tiles: [],
            tileSize: {
                width: 0,
                height: 0
            }
        }
    },

    computed: {
        frameSize () {
            return {
                width: `${this.tileSize.width * this.size.horizontal}px`,
                height: `${this.tileSize.height * this.size.vertical}px`
            }
        },

        totalTiles () {
            return this.size.horizontal * this.size.vertical
        },

        valid () {
            if (!this.tiles.length) {
                return false
            }

            for (let i = 0; i < this.totalTiles; ++i) {
                if (this.tiles[i].styles.order !== this.tiles[i].position) {
                    return false
                }
            }

            return true
        }
    },

    methods: {
        start () {
            this.size = {
                horizontal: 3,
                vertical: 3
            }
            let image = loadImage('../assets/engravings/photo_2021-10-22_02-21-45.jpg', canvas => {
                image = canvas
            }, {
                maxWidth: 600,
                maxHeight: 600,
                minWidth: 200,
                minHeight: 200,
                canvas: true
            })
            this.image = image;
            console.log(this.image)
            const img = new Image()
            img.src = image
            console.log(img.width)
            img.onload = () => {
                this.tileSize.width = Math.floor(img.width / this.size.horizontal)
                this.tileSize.height = Math.floor(img.height / this.size.vertical)
                this.generateTiles()
                this.shuffleTiles()
            }
        },

        generateTiles () {
            this.tiles = []
            for (let i = 0; i < this.totalTiles; ++i) {
                this.tiles.push({
                    styles: {
                        background: i === 0 ? 'transparent' : `url(${this.image})`,
                        backgroundPositionX: `-${(i % this.size.horizontal) * this.tileSize.width}px`,
                        backgroundPositionY: `-${Math.floor(i / this.size.horizontal) * this.tileSize.height}px`,
                        width: `${this.tileSize.width}px`,
                        height: `${this.tileSize.height}px`,
                        order: i
                    },
                    position: i,
                    isEmpty: i === 0
                })
            }
        },

        shuffleTiles () {
            for (let i = 0, j = this.totalTiles * 5; i < j; ++i) {
                const emptyTile = this.tiles.find(t => t.isEmpty)
                const movableTiles = this.tiles.filter(t => {
                    return this.getAdjacentOrders(emptyTile).indexOf(t.styles.order) > -1
                })
                this.switchTiles(emptyTile, sample(movableTiles))
            }
            backupTiles = JSON.stringify(this.tiles)
        },

        moveTile (tile) {
            if (tile.isEmpty) {
                return
            }
            const target = this.tiles.find(t => {
                return t.isEmpty && this.getAdjacentOrders(tile).indexOf(t.styles.order) > -1
            })
            target && this.switchTiles(target, tile)
        },

        switchTiles (a, b) {
            [a.styles.order, b.styles.order] = [b.styles.order, a.styles.order]
        },

        getAdjacentOrders (tile) {
            const pos = tile.styles.order
            return [
                pos % this.size.horizontal ? pos - 1 : null,
                (pos + 1) % this.size.horizontal ? pos + 1 : null,
                pos - this.size.horizontal,
                pos + this.size.horizontal
            ]
        },

        reset () {
            this.tiles = JSON.parse(backupTiles)
        },

        restart () {
            this.$emit('restart')
        }
    }
}
</script>

<style lang="scss">
.frame-wrapper {
    margin: 0 auto;
    position: relative;
    box-shadow: 0 0 0px 10px;

    .original {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    p.win {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        font-size: 40px;
        margin: 0 0;
        background: rgba(43, 181, 82, 0.7);
        text-transform: uppercase;
    }
}

.frame {
    display: flex;
    flex-wrap: wrap;
    background: #612211 url('../../assets/board.jpg');
    background-size: cover;
}

.controls {
    margin-top: 30px;

    a {
        display: inline-block;
        text-decoration: none;
        padding: 6px 12px;
        background: #f78403;
        color: #fff;
        border-radius: 3px;

        &.toggle-original {
            background: #d05b88;
        }

        &.restart {
            background: #368ba0;
        }

        &.shuffle {
            background: #3ebb5c;
        }
    }
}
</style>
