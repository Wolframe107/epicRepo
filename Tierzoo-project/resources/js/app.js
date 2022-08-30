
let intelligence_slider = document.getElementById("intelligence_slider")
let power_slider = document.getElementById("power_slider")
let defense_slider = document.getElementById("defense_slider")
let mobility_slider = document.getElementById("mobility_slider")
let health_slider = document.getElementById("health_slider")
let stealth_slider = document.getElementById("stealth_slider")

let chosen_animal

function write_animal(){
    main_animal = [intelligence, power, defense, mobility, health, stealth]
    
    let closest
    let min_dist = 999 
    for (let i = 0; i < animals.length; i++){
        let other_animal = [animals[i]["Intelligence"], animals[i]["Power"], animals[i]["Defense"], animals[i]["Mobility"], animals[i]["Health"], animals[i]["Stealth"]]
        let dist = math.distance(main_animal, other_animal)

        if(dist < min_dist){
            min_dist = dist
            closest = animals[i]
        }
    }

    document.getElementById("animal").innerHTML = closest.Name
    chosen_animal = closest
}

function initialize() {
    write_animal()
    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
    
    document.getElementById("int").innerHTML = "Intelligence: " + intelligence
    document.getElementById("pow").innerHTML = "Power: " + power
    document.getElementById("def").innerHTML = "Defense: " + defense
    document.getElementById("mob").innerHTML = "Mobility: " + mobility
    document.getElementById("health").innerHTML = "Health: " + health
    document.getElementById("stealth").innerHTML = "Stealth: " + stealth

    intelligence_slider.value = intelligence
    power_slider.value = power
    defense_slider.value = defense
    mobility_slider.value = mobility
    health_slider.value = health
    stealth_slider.value = stealth
}

function randomAnimal(){
    chosen_animal = animals[getRandomInt(animals.length)]
    
    intelligence = chosen_animal.Intelligence
    power = chosen_animal.Power
    defense = chosen_animal.Defense
    mobility = chosen_animal.Mobility
    health = chosen_animal.Health
    stealth = chosen_animal.Stealth


    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
    
    document.getElementById("int").innerHTML = "Intelligence: " + intelligence
    document.getElementById("pow").innerHTML = "Power: " + power
    document.getElementById("def").innerHTML = "Defense: " + defense
    document.getElementById("mob").innerHTML = "Mobility: " + mobility
    document.getElementById("health").innerHTML = "Health: " + health
    document.getElementById("stealth").innerHTML = "Stealth: " + stealth

    intelligence_slider.value = intelligence
    power_slider.value = power
    defense_slider.value = defense
    mobility_slider.value = mobility
    health_slider.value = health
    stealth_slider.value = stealth
    
    document.getElementById("animal").innerHTML = chosen_animal.Name
}


intelligence_slider.oninput = function(){
    document.getElementById("int").innerHTML = "Intelligence: " + intelligence_slider.value
    let int_value = parseInt(intelligence_slider.value)
    intelligence = int_value;
    write_animal();

    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
}

power_slider.oninput = function(){
    document.getElementById("pow").innerHTML = "Power: " + power_slider.value
    let pow_value = parseInt(power_slider.value)
    power = pow_value;
    write_animal();

    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
}

defense_slider.oninput = function(){
    document.getElementById("def").innerHTML = "Defense: " + defense_slider.value
    let def_value = parseInt(defense_slider.value)
    defense = def_value;
    write_animal();

    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
}

mobility_slider.oninput = function(){
    document.getElementById("mob").innerHTML = "Mobility: " + mobility_slider.value
    let mob_value = parseInt(mobility_slider.value)
    mobility = mob_value;
    write_animal();

    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
}

health_slider.oninput = function(){
    document.getElementById("health").innerHTML = "Health: " + health_slider.value
    let health_value = parseInt(health_slider.value)
    health = health_value;
    write_animal();

    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
}

stealth_slider.oninput = function(){
    document.getElementById("stealth").innerHTML = "Stealth: " + stealth_slider.value
    let stealth_value = parseInt(stealth_slider.value)
    stealth = stealth_value;
    write_animal();

    if(chosen_animal.Image == 1){
        document.getElementById("portrait").src = "./resources/images/" + chosen_animal.Id + ".jpg"
    }
    else{
        document.getElementById("portrait").src = "./resources/images/questionmark.jpg"
    }
}