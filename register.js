var UI = {};

function Property(address,picture,size,beds,baths,parking,price,description){
    this.address = Address;
    this.beds = Beds;
    this.baths = Baths;
    this.price = Price;
    this.size = Size;
    this.picture = Picture;
    this.description = Description;
    this.parking = Parking;
  }

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
  
   $(".form-control").val('');
}

function init() {
    console.log("register page");

    $("#btnSave").click(saveProperty);

    UI = {
        Address: $("#Address"),
        Picture: $("#Picture"),
        Description: $("#Description"),
        Size: $("#Size"),
        Beds: $("#Beds"),
        Baths: $("#Baths"),
        Parking: $("#Parking"),
        Price: $("#Price")
    };
}

window.onload = init;