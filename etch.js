const container = document.getElementById('outer')
const t = document.getElementById('top')

const btn = document.createElement('button');
btn.innerText = 'Restart'
t.appendChild(btn);

function makeRows(x) {
  if (x > 100) {
    alert('enter a lower number')
  }
    for (let rows = 0; rows < x; rows++) {
        for (let cols = 0; cols < x; cols++) {
          let grid = document.createElement('div')
          grid.className = 'grid'
          container.appendChild(grid)
        };
   
    };
    $(".grid").width(992/x);
    $(".grid").height(992/x);

};


makeRows(18)


document.querySelector('.grid')

function clearGrid() {
  $('.grid').remove();
}

function newGrid() {
  let e = prompt('how many squares?')
  makeRows(e)
}

container.addEventListener('mouseover', function (event) {
   event.target.style.background = 'pink'
  });


btn.addEventListener('click', function() {
  clearGrid()
  newGrid()
})

