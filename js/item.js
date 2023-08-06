const color = document.querySelectorAll('.circle')
const size = document.querySelectorAll('.color-button')

function removeColor(elem){
   for(let elemColor of elem){
      if(elemColor.classList.contains('click')){
         elemColor.classList.remove("click")
      }

      if (elemColor.classList.contains('color-click')){
         elemColor.classList.remove("color-click")
      }
   }}

for(let elemSize of size){
   elemSize.onclick = function(){
      if (elemSize.classList.contains("click") === false){
         removeColor(size)
         elemSize.classList.add("click")
      } else{
         elemSize.classList.remove("click")
      }
   }
}

for(let elemColor of color){
   elemColor.onclick = function(){
      if (elemColor.classList.contains("color-click") === false){
         removeColor(color)
         elemColor.classList.add("color-click")
      } else{
         elemColor.classList.remove("color-click")
      }
   }
}
