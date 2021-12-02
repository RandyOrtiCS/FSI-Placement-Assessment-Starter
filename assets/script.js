// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Randy Ortiz" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   //total

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


// Event listener for clicks on the "+" button for Gingerbread cookies
let addGb = document.querySelector('#add-gb');
let subtractGb = document.querySelector('#minus-gb');

let addCc = document.querySelector('#add-cc');
let subtractCc = document.querySelector('#minus-cc');

let addSugar = document.querySelector('#add-sugar');
let subtractSugar = document.querySelector('#minus-sugar');




addGb.addEventListener('click', function() {

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb += 1;
    total += 1;
    document.getElementById('qty-gb').textContent = gb;
    document.getElementById('qty-total').textContent = total;
})
    subtractGb.addEventListener('click', function() {

        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
        if(gb > 0){
        gb -= 1;
        total -=1;
        }
        document.getElementById('qty-gb').textContent = gb;
        document.getElementById('qty-total').textContent = total;
    })

// TODO: Hook up event listeners for the rest of the buttons

addCc.addEventListener('click', function() {

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    cc += 1;
    total += 1;
    document.getElementById('qty-cc').textContent = cc;
    document.getElementById('qty-total').textContent = total;
})
    subtractCc.addEventListener('click', function() {

        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
        if(cc > 0){
        cc -= 1;
        total -=1;
        }
        document.getElementById('qty-cc').textContent = cc;
        document.getElementById('qty-total').textContent = total;
    })




addSugar.addEventListener('click', function() {

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    sugar += 1;
    total += 1;
    document.getElementById('qty-sugar').textContent = sugar;
    document.getElementById('qty-total').textContent = total;
})
    subtractSugar.addEventListener('click', function() {

        // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
        if(sugar > 0){
        sugar -= 1;
        total -=1;
        }
        document.getElementById('qty-sugar').textContent = sugar;
        document.getElementById('qty-total').textContent = total;
    })
