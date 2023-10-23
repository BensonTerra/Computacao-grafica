var vel = 1
addEventListener("keydown", function(event) 
    {
        console.log(event.code)
        if (event.code === "KeyW") 
        {
            vy = -1 * vel
            console.log(`x=${playerX} e y=${playerY}`)
        }
        else if (event.code === "KeyA")
        {
            vxl = -1 * vel
            console.log(`x=${playerX} e y=${playerY}`)
        }
        else if (event.code === "KeyS")
        {
            vy = 1 * vel
            console.log(`x=${playerX} e y=${playerY}`)
        }
        else if (event.code === "KeyD")
        {
            vxr = 1 * vel
            console.log(`x=${playerX} e y=${playerY}`)
        }
        else if (event.code === "KeyR")
        {
            playerX = zeroXY
            playerY = zeroXY
            console.log(`x=${playerX} e y=${playerY}`)
        }
        else if (event.code === "Space")
        {
            playerX = playerX + (vxl + vxr) * 20
            playerY = playerY + vy * 20
            console.log(`x=${playerX} e y=${playerY}`)
        }
    }
)
addEventListener("keyup", function(event) 
    {
        console.log(event.code)
        if (event.code === "KeyW") 
        {
            vy = 0
        }
        else if (event.code === "KeyA")
        {
            vxl = 0
        }
        else if (event.code === "KeyS")
        {
            vy = 0
        }
        else if (event.code === "KeyD")
        {
            vxr = 0
        }
    }
)