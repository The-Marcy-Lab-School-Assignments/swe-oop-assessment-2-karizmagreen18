class Phone {
batteryLevel = 100;
constructor(brand, model, password) {
this.brand = brand 
this.model = model
this.password = password
}
makeCall(number) {
return 
}
charge() {
return
}
unlock(password) {
return
}
}

class iPhone extends Phone {
brand = Apple;
batteryLevel = 100;
constructor(brand, model, password, numberOfCameras) {
    super(brand, model, password)
    this.brand = brand
    this.model = model
    this.password = password
    this.numberOfCameras = numberOfCameras
}
faceTime(name) {
return 
}

}

// TEST YOUR CODE HERE


// DO NOT REMOVE
module.exports = { Phone, iPhone };
