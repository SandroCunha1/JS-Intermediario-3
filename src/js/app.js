class App {
    addProperty() {
        event.preventDefault();
        
        //form values
        let kind = document.getElementById("type").value
        let area = document.getElementById("area").value
        let rented = document.getElementById("rented").value
        let propertyName = document.getElementById("name").value
        let district = document.getElementById("district").value

        let property = new Property(kind, area, rented, propertyName, district)

        if(property.area == "" || property.propertyName == "" || property.district == ""){
            alert("\nError: PREENCHA TODOS OS CAMPOS!!")
            return
          }
          
        this.addOnPropertiesList(property)
        let form = document.getElementById("my_form")
        form.reset()
    }

   
       
    
    addOnPropertiesList(property) {

        //Get list
        let list = document.getElementById("registerList")
        let newLi = document.createElement("div")
        let divSup = document.createElement("div")
        let boxDiv = document.createElement("div")

        //add style
        newLi.classList.add("list_style")
        divSup.classList.add("sup_list_style")

        //List Text
        newLi.innerHTML = "<p>Nome: " + property.name + "</p><p>Tipo: " + property.kind + "</p><p>Área: " + property.area + " m²</p><p>Bairro: " + property.district + "</p>Alugado: " + property.rented;

        //Remove Button
        let removeButton = this.createRemoveButtom();

        //Rented value: Alugado ou Disponivel
        let rentedValue = this.ifRented(property.rented);


        //add new list element
        divSup.appendChild(removeButton)
        divSup.appendChild(rentedValue)
        boxDiv.appendChild(divSup)
        boxDiv.appendChild(newLi)
        list.appendChild(boxDiv)

    }

    createRemoveButtom() {
        let removeButton = document.createElement("button")
        removeButton.type = "button"
        removeButton.innerText = "X"
        removeButton.setAttribute("onclick", "app.removeHouse(this.parentNode)")
        removeButton.classList.add("delete")
        return removeButton
    }

    ifRented(rented){
        let rentedValue = document.createElement("span")
        if (rented == "Sim") {
            rentedValue.innerText = "Alugado"
            rentedValue.classList.add("rented")
        } else {
            rentedValue.innerText = "Disponivel"
            rentedValue.classList.add("not_rented")
            
        }
        return rentedValue
    }

    removeHouse(button) {
        let liToRemove = button.parentNode
        document.getElementById("registerList").removeChild(liToRemove)
    }



}