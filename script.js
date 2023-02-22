var color = [, "#49fff0", "#ffd8f5", 
        "#969696", "#fdff8a", "#ffcc8a"];
  
    document.querySelector("section").addEventListener(
            "mouseover", function () {
                  
        document.querySelector("section").style.background 
            = color[Math.floor(Math.random() * color.length)];

            
    })

   


    