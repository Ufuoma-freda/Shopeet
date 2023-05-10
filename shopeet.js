function displayDashboard () {
               
       let operation = prompt("1. PRODUCT CATEGORIES\n2. SHOP\n3. CREATE PROFILE");
       switch (operation) {
        case "1":
            productCategories()
        break;

        case "2":
            shop()
        break;

        case "3":
            createProfile()
        break;
       }
}

function productCategories () {
    //shows different product categories
    var dresses = [
        {id: 1, name: "SHEIN", colour: "Black", amount: 5500},
        {id: 9, name: "ALEXA", colour: "Red", amount: 10500},
        {id: 5, name: "LULU", colour: "White", amount: 4500}
    ]

    var shoes = [
        {id: 4, name: "CK", colour: "Brown", amount: 25000},
        {id: 2, name: "LV", colour: "Green", amount: 15500},
        {id: 8, name: "GUCCI", colour: "Black", amount: 30500}
    ]

    var bags = [
        {id: 6, name: "STEVE", colour: "Nude", amount: 25000},
        {id: 7, name: "MADDEN", colour: "Indigo", amount: 15500},
        {id: 3, name: "EVERLEY", colour: "Red", amount: 30500}
    ]

    let view = prompt("1. DRESSES\n2. SHOES\n3. BAGS\n4. ALL\n5. BACK");
       switch (view) {
        case "1":
            for (let dress of dresses) {
                var allDresses = " ";
                allDresses += `${dress.name} ${dress.colour} ${dress.amount}`
                alert(allDresses);
             }

        break;

        case "2":
            for (let shoe of shoes) {
                var allShoes = " ";
                allShoes += `${shoe.name} ${shoe.colour} ${shoe.amount}`
                alert(allShoes);
             }
        break;

        case "3":
            for (let bag of bags) {
                var allBags = " ";
                allBags += `${bag.name} ${bag.colour} ${big.amount}`
                alert(allBags);
             }
        break;

        case "4":
            var products = dresses.concat(shoes,bags);
            
            for (let product of products) {
                let allProducts = " ";
                allProducts += `${product.name} ${product.colour} ${product.amount}`
                alert(allProducts);
             }        
        break;

       case "5":
          displayDashboard()                      
        break;
       }
       
        shop()
}

function shop () {
   var cart = []
   
   while (true) {
     let operation = prompt("1. SELECT PRODUCT\n2. DELETE PRODUCT\n3. BACK");

     var dresses = [
        {id: 1, name: "SHEIN", colour: "Black", amount: 5500},
        {id: 9, name: "ALEXA", colour: "Red", amount: 10500},
        {id: 5, name: "LULU", colour: "White", amount: 4500}
    ]

    var shoes = [
        {id: 4, name: "CK", colour: "Brown", amount: 25000},
        {id: 2, name: "LV", colour: "Green", amount: 15500},
        {id: 8, name: "GUCCI", colour: "Black", amount: 30500}
    ]

    var bags = [
        {id: 6, name: "STEVE", colour: "Nude", amount: 25000},
        {id: 7, name: "MADDEN", colour: "Indigo", amount: 15500},
        {id: 3, name: "EVERLEY", colour: "Red", amount: 30500}
    ]

    var availableProducts = dresses.concat(shoes,bags);
            
    var choice = `${availableProducts.name}`

       if (operation == 1) {
            var selection = prompt("Select product name").toUpperCase();

             if (choice .includes(selection)) {
                cart.push ("selection")
                createProfile()
                break;
            }

            else {
                alert("Product is out of stock")
            }
        }

       else if (operation == 2) {
                cart = selection.filter(data => data.name !== "selection");
                createProfile()
                break;
            }

        else if (operation == 3) {
                displayDashboard()
                break;
            }
        }    
}

function createProfile() {
    let fullName = prompt ("Enter your full name: ");
    let phoneNumber = prompt ("Enter your phone number: ");
    let address = prompt ("Enter your address: ");
    let cardNumber = prompt ("Enter your card number: ");
    let cardName = prompt ("Enter your card name: ");
    let cvv = prompt ("Enter your cvv: ");
    let pin = prompt ("Enter your PIN: ");
    
    alert("Payment has been successfully made.")
   }

displayDashboard()