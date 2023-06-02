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
        

    };
    
    // document.getElementsByClassName('grid').width = (960/x)
    // document.getElementsByClassName('grid').height = (960/x)
};



makeRows()



    
