
// 1.multiple check, delete and add
// 2.Don't add empty 
// 3.check box round
// 4.alert messages of like not checked and empty.
//5.clean input box automatically
//6.clean the fucking templates

if(document.readyState =='loading'){
   document.addEventListener('DOMContentLoaded',ready)
}else{
   ready()
}
function ready() {
//perform completed function- delete the task from completed list 
   var TheCompletedItemButton = document.getElementsByClassName('completedListButton')[0]
   TheCompletedItemButton.addEventListener('click',rmvCheckedBoxes)

// perform add to the list function- add the task to pending list 
   var buttonAddList = document.getElementsByClassName('addButton')[0]
   buttonAddList.addEventListener('click',addToPendingList)

//perform pending button function- delete from pending list and add to completed list
   var pendingListButton = document.getElementsByClassName('addToCompletedList')[0]
   pendingListButton.addEventListener('click',addToCompleteList)
}

function rmvCheckedBoxes(){
    let completedList = document.getElementsByClassName('completedList')[0]
    let checkedBoxes= completedList.getElementsByClassName('checked')
    for(var i=0; i<checkedBoxes.length; i++){
       let checkedBox = checkedBoxes[i]
       if (checkedBox.checked){
          checkedBox.parentElement.remove()
       }
    }
}

function addToPendingList(){
   var inputText = document.getElementsByClassName("todoitem")[0].value
   var pendingItem= document.createElement("div")
   let pendingList= document.getElementsByClassName('pendingList')[0]
   let pendingItemContents = `
   <div class = "individualTask">    
                <input type ="checkbox" class="checked">
                 <label class="styleToList" > ${inputText} </label>
           </div>`
  pendingItem.innerHTML=pendingItemContents
   pendingList.append(pendingItem)
}

function addToCompleteList(){
 
 let pendingList= document.getElementsByClassName('pendingList')[0]
 let checkedBoxes = pendingList.getElementsByClassName('checked')
 let completedList = document.getElementsByClassName('completedList')[0]
  for(var i=0; i<checkedBoxes.length; i++){
   let checkedBox= checkedBoxes[i] 
   if(checkedBox.checked){
     let pendingItemContents= pendingList.getElementsByClassName('styleToList')[i].innerHTML
     var creatCompleteItem = document.createElement("div")
    // creatCompleteItem.classList.add('flexbox-item ')
     var newCompleteItemContents =`
     <div class= "individualTask">
     <input type = "checkbox" id="task1"class="checked">
      <label for="task1">
    <span class = "styleToList">
        ${pendingItemContents} </span>  </label>       
   </div> `
            creatCompleteItem.innerHTML=newCompleteItemContents
            completedList.append(creatCompleteItem)
     checkedBox.parentElement.remove()

   }
  }
}
