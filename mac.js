// memory cost
const memory8GB = document.getElementById('memory1');
const memory16GB = document.getElementById('memory2');
const memoryCost = document.getElementById('memory-cost');
const totalPrice = document.getElementById('total-price');


memory8GB.addEventListener('click', function(){
    memoryCost.innerText = '0';
    getTotalAmount();
   
});
memory16GB.addEventListener('click', function(){
    memoryCost.innerText = '180';
   getTotalAmount();

})

// storage cost
const storage256GB = document.getElementById('storage1');
const storage512GB = document.getElementById('storage2');
const storage1TB = document.getElementById('storage3');
const storageCost = document.getElementById('storage-cost');

storage256GB.addEventListener('click', function(){
    storageCost.innerText = '0';
    getTotalAmount();
});
storage512GB.addEventListener('click', function(){
    storageCost.innerText = '100';
    getTotalAmount();
});
storage1TB.addEventListener('click', function(){
    storageCost.innerText = '180';
    getTotalAmount();
});

// delevery cost
const freeDelivery = document.getElementById('delivery1');
const primeDelivery = document.getElementById('delivery2');
const deliveryCost = document.getElementById('delivery-cost');

freeDelivery.addEventListener('click', function(){
    deliveryCost.innerText = '0'; 
    getTotalAmount();
});
primeDelivery.addEventListener('click', function(){
    deliveryCost.innerText = '20';
    getTotalAmount();
});

// total price
function getTotalAmount(){
    const bestPriceText = document.getElementById('best-price').innerText;
    const bestPrice = parseInt(bestPriceText);
    const memoryCostText = memoryCost.innerText;
    const memoryCost1 = parseInt(memoryCostText);
    const storageCostText = storageCost.innerText;
    const storageCost1 = parseInt(storageCostText);
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCost1 = parseInt(deliveryCostText); 

    const totalAmount = bestPrice + memoryCost1 + storageCost1 + deliveryCost1;
    totalPrice.innerText = totalAmount;

};

// pomocode

const promoCode = document.getElementById('promocode');

promoCode.addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    
    const getInput = inputField.value;
    const totalCost = document.getElementById('total-cost');
    if(getInput == 'stevekaku'){
        totalCost.innerText = totalPrice.innerText - parseInt(totalPrice.innerText) * 0.2;
    };
});



   
