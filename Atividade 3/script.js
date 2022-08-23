function register(){
    //form values
    let property = document.getElementById("type").value
    let area = document.getElementById("area").value
    let rented = document.getElementById("rented").value
    let propertyName = document.getElementById("name").value
    let district = document.getElementById("district").value

    if(area == "" || propertyName == "" || district == ""){
      alert("\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!\nError: PREENCHA TODOS OS CAMPOS!!")
      return
    }
    
    //Get list
    let list = document.getElementById("registerList")
    let newLi = document.createElement("div")
    let divSup = document.createElement("div")
    let boxDiv = document.createElement("div")
    
    //add style
    newLi.classList.add("list_style")
    divSup.classList.add("sup_list_style")
   
    //List Text
    newLi.innerHTML = "<div></div><p>Nome: " + propertyName+"</p><p>Tipo: "+property+ "</p><p>Área: "+ area+ "</p><p>Bairro: "+district+"</p>Alugado: "+rented;

   //Remove Button
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "X"
    removeButton.setAttribute("onclick", "removeHouse(this.parentNode)")
    removeButton.classList.add("delete")
    
     
    //Rented value: Alugado ou Disponivel
    let rentedValue = document.createElement("span")
    console.log(rented)
    if(rented == "Sim"){
        rentedValue.innerText = "Alugado"
        rentedValue.classList.add("rented")
    }else{
        rentedValue.innerText = "Disponivel"
        rentedValue.classList.add("not_rented")
    }
    
    var arraylist= []
    var arrayElement= []
    arrayElement.push(divSup,newLi)
    arraylist.push(arrayElement)
    
    //add new list element
    divSup.appendChild(removeButton)
    divSup.appendChild(rentedValue)
    boxDiv.appendChild(divSup)
    boxDiv.appendChild(newLi)
    list.appendChild(boxDiv)
     
    //Reset form
    let form = document.getElementById("my_form")
    form.reset()

}


function removeHouse(button){
    let liToRemove = button.parentNode
    document.getElementById("registerList").removeChild(liToRemove)
}