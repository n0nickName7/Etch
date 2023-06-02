const container = document.getElementById('outer')



function makeRows() {
    let grid = document.createElement('div');
    grid.className = 'grid';
    for (var rows = 0; rows < 16; rows++) {
        for (var cols = 0; cols < 16; cols++) {
            let c = document.createElement('div')
            container.appendChild(c)
            c.className = 'grid'
           
        };
        container.appendChild(grid)  
        

    };
    
    // document.getElementsByClassName('grid').width = (960/x)
    // document.getElementsByClassName('grid').height = (960/x)
};



makeRows()


// for (let i = 0; i < 0; i++) {
//     let grid = document.createElement('div')
//     document.body.appendChild(grid)
//     div.textContent = i

//     }





    
