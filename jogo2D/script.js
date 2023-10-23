const canvas = document.getElementById("canvas");
/* objetos */
const mapa = canvas.getContext("2d");
const player = canvas.getContext("2d");
const obstaculo = canvas.getContext("2d");
const wall = canvas.getContext("2d");

/* medidas da tela - dinâmicas */
const boardW = canvas.width;
const boardH = canvas.height;

console.log(boardW);
console.log(boardH);

const pixelSizeX = boardW / 20;
console.log(pixelSizeX);
const pixelSizeY = boardH / 10;
console.log(pixelSizeY);

// console.log(player);
const zeroXY = 0.01 * boardW;
let playerX = zeroXY;
let playerY = zeroXY;
let vxr = 0;
let vxl = 0;
let vy = 0;

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
    playerX += (vxr + vxl)
    playerY += vy
    
    player.fillStyle = "#FF0000"
    player.fillRect(playerX, playerY, 10, 10)
    
    
    /*obstaculo de teste*/
    obstaculo.fillStyle = "#ffff00"
    player.fillRect((boardW/2) - 10,(boardH/2) - 10, 10, 10)
    
    requestAnimationFrame(jogo)
}
jogo()
