console.log("hi");

const cells = document.querySelectorAll('td');
for( var i = 0; i < cells.length; i++){
   cells[i].addEventListener('click',function(){
      document.getElementById("demo").innerHTML = "Hello World";
   })
};
