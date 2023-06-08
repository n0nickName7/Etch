

const container = document.getElementById('outer')
const t = document.getElementById('top')

const btn = document.createElement('button');
btn.innerText = 'Restart'
t.appendChild(btn)


let grid = document.createElement('div');
grid.className = 'grid';

function makeRows(x) {

    for (var rows = 0; rows < x; rows++) {
        for (var cols = 0; cols < x; cols++) {
            let c = document.createElement('div')
            container.appendChild(c)
            c.className = 'grid'
           
        };
        grid.width = (992/x)
        grid.height= (992/x)
        
    };
    
  
};

makeRows(16)


document.querySelector('.grid')

container.addEventListener('mouseover', function (event) {
   event.target.style.background = 'pink'
  });


btn.addEventListener('click', function() {
  container.remove()
  let x = prompt('how many squares do you want?')
})


