var vel = 1
addEventListener("keydown", function(event) 
    {
        //console.log(event.code)
        if (event.code === "KeyW") 
        {
            vy = -1 * vel
            
        }
        else if (event.code === "KeyA")
        {
            vxl = -1 * vel
            
        }
        else if (event.code === "KeyS")
        {
            vy = 1 * vel
            
        }
        else if (event.code === "KeyD")
        {
            vxr = 1 * vel
            
        }
        else if (event.code === "KeyR")
        {
            player.playerX = zeroXY
            player.playerY = zeroXY
            
        }
        else if (event.code === "Space")
        {
            player.playerX += (vxl + vxr) * 20
            player.playerY += vy * 20
            
        }
    }
)
addEventListener("keyup", function(event) 
    {
        //console.log(event.code)
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