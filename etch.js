const container = document.getElementById('outer')
const t = document.getElementById('top')

const btn = document.createElement('button');
btn.innerText = 'restart?'
t.appendChild(btn)


// const buttonCont = document.createElement('div') 
// buttonCont.id = 'cont'

let grid = document.createElement('div');
grid.className = 'grid';

function makeRows() {

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


document.querySelector('.grid')

container.addEventListener('mouseover', function (event) {
   event.target.style.background = 'black'
  });


