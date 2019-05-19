const mapWidth = 300
const mapHeight = 600
const numberOfRows = 20
const numberOfCols = 10
const cellSize = mapWidth / numberOfCols
const borderSize = 0.2

const zType = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
]

const sType = [
    [0, 2, 2],
    [2, 2, 0],
    [0, 0, 0]
]

const iType = [
    [0, 3, 0, 0],
    [0, 3, 0, 0],
    [0, 3, 0, 0],
    [0, 3, 0, 0]
]

const lType = [
    [4, 0, 0],
    [4, 0, 0],
    [4, 0, 0]
]

const jType = [
    [0, 0, 5],
    [0, 0, 5],
    [0, 0, 5]
]

const oType = [
    [6, 6],
    [6, 6]
]

const tType = [
    [0, 7, 0],
    [7, 7, 7],
    [0, 0, 0]
]

const blockColors = [
    'limegreen',
    'darkorange',
    'mediumorchid',
    'dodgerblue',
    'orangered',
    'cornflowerblue',
    'tomato'
]

const blockTypes = {
    zType,
    sType,
    iType,
    lType,
    jType,
    oType,
    tType
}

class Block {
    constructor(cells, x, y) {
        this.cells = cells
        this.position = { x, y }
        this.isAlive = true
    }
}

const render = (game, block, time) => {

}

const genereateField = (rows, cols) => {
    const field = Array.from({length: rows},
        () => Array.from({length: cols}, () => 0))
}

window.onload = () => {
    const canvas = document.getElementById('map')
    const ctx = canvas.getContext('2d')
    const game = {
        ctx,
        field: []
    }

    render(game)
}


