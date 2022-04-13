fetch('http://localhost:3000/ramens')
.then(res => res.json)
.then(ramens => console.log(ramens)); 



const displayInfo = document.querySelectorAll('img').forEach((item) =>
    item.addEventListener('click', (e) => {
  //Here we want the ramen img to display and display its info
    e.target.ramens.id    
    }));
