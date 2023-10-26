const canvas = document.getElementById("canvas");
/* objetos */
const mapa = canvas.getContext("2d");
//const player = canvas.getContext("2d"); APAGAR
//const obstaculo = canvas.getContext("2d"); APAGAR
const wall = canvas.getContext("2d");

let ctx = canvas.getContext("2d");

/* medidas da tela - dinâmicas */
const boardW = canvas.width; console.log(boardW);
const boardH = canvas.height; console.log(boardH);

const pixelSizeX = boardW / 20; console.log(pixelSizeX);
const pixelSizeY = boardH / 10; console.log(pixelSizeY);

// console.log(player);
const zeroXY = 0.01 * boardW;
let X = 0;
let Y = 0;
let vxr = 0;
let vxl = 0;
let vy = 0;



const player = 
{
    color: "red",
    playerX: zeroXY, width:10,
    playerY: zeroXY, height:10,
    dxr: vxr, dxl: vxl, dy: 0,

    drawPlayer()
    {
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.fillRect(this.playerX, this.playerY, this.width, this.height)
    },
    update()
    {
        console.log(`${this.playerX}|${this.playerY}`)
        this.playerX += (vxr + vxl)
        this.playerY += (vy)
    }
}
const obstaculo = 
{
    x: (boardW/2) - 10, width: 10,
    y: (boardH/2) - 10, height: 10,
    dxr: 0, dxl: 0, vy: 0,
}

// função build
function build(ctx) {
  const floor = new Image();
  floor.src = "imagens/Tiles/tile_0049.png";
  const cornerTopLeft = new Image();
  cornerTopLeft.src = "imagens/Tiles/tile_0001.png";
  const cornerTop = new Image();
  cornerTop.src = "imagens/Tiles/tile_0002.png";
  const cornerTopRight = new Image();
  cornerTopRight.src = "imagens/Tiles/tile_0003.png";
  const cornerLeft = new Image();
  cornerLeft.src = "imagens/Tiles/tile_0013.png";
  const cornerRight = new Image();
  cornerRight.src = "imagens/Tiles/tile_0015.png";
  const cornerBotLeft = new Image();
  cornerBotLeft.src = "imagens/Tiles/tile_0025.png";
  const cornerBot = new Image();
  cornerBot.src = "imagens/Tiles/tile_0026.png";
  const cornerBotRight = new Image();
  cornerBotRight.src = "imagens/Tiles/tile_0027.png";
  const wallImg = new Image();
  wallImg.src = "imagens/Tiles/tile_0014.png";
  const wallRedFlag = new Image();
  wallRedFlag.src = "imagens/Tiles/tile_0029.png";

  const tileMap = {
    "00": floor,
    "01": cornerTopLeft,
    "02": cornerTop,
    "03": cornerTopRight,
    "04": cornerLeft,
    "05": cornerRight,
    "06": cornerBotLeft,
    "07": cornerBot,
    "08": cornerBotRight,
    "10": wallImg,
    "11": wallRedFlag,
  };

  const map = [
    ["01", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "03"],
    ["04", "11", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "11", "05"],
    ["04", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "05"],
    ["04", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "05"],
    ["04", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "05"],
    ["04", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "05"],
    ["04", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "05"],
    ["04", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "05"],
    ["04", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "05"],
    ["06", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "07", "08"],
  ];

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const num = tileMap[map[y][x]];

      ctx.drawImage(num, x * pixelSizeX, y * pixelSizeY, pixelSizeX, pixelSizeY);
    }
  }
}

function jogo () 
{
    mapa.clearRect(0, 0, canvas.width, canvas.height)
    //mapa-1

    /*
    mapa.fillStyle = "#000000"
    mapa.fillRect(0, 0, canvas.width, canvas.height)

    wall.strokeStyle = "#0000ff";
    wall.lineWidth   = 0.02 * boardW;
    wall.strokeRect(0,0, boardW,boardH)
    */

    /*player*/
    build(mapa)
    X += (vxr + vxl)
    Y += vy
    
    player.drawPlayer();player.update()
    
    requestAnimationFrame(jogo)
}
jogo()

