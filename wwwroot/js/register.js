
function saveProperty() {
    var address = UI.Address.val();
    var picture = UI.Picture.val();
    var description = UI.Description.val();
    var size = UI.Size.val();
    var beds = UI.Beds.val();
    var baths = UI.Baths.val();
    var parking = UI.Parking.val();
    var price = UI.Price.val();

    var property = new Property(address,picture,size,beds,baths,parking,price,description)
    taskList.push(property);
    clearForm();
}

function init() {
    console.log("register page");

    $("#btnSave").click(saveProperty);
}


window.onload = init;