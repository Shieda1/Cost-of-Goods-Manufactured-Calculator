// https://calculator.swiftutors.com/cost-of-goods-manufactured-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costofGoodsManufacturedRadio = document.getElementById('costofGoodsManufacturedRadio');
const directMaterialsCostRadio = document.getElementById('directMaterialsCostRadio');
const directLaborCostRadio = document.getElementById('directLaborCostRadio');
const factoryOverheadCostRadio = document.getElementById('factoryOverheadCostRadio');
const openingWorkinProcessInventoryRadio = document.getElementById('openingWorkinProcessInventoryRadio');
const endingWorkinProcessInventoryRadio = document.getElementById('endingWorkinProcessInventoryRadio');

let costofGoodsManufactured;
let directMaterialsCost = v1;
let directLaborCost = v2;
let factoryOverheadCost = v3;
let openingWorkinProcessInventory = v4;
let endingWorkinProcessInventory = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

costofGoodsManufacturedRadio.addEventListener('click', function() {
  variable1.textContent = 'Direct Materials Cost';
  variable2.textContent = 'Direct Labor Cost';
  variable3.textContent = 'Factory Overhead Cost';
  variable4.textContent = 'Opening Work in Process Inventory';
  variable5.textContent = 'Ending Work in Process Inventory';
  directMaterialsCost = v1;
  directLaborCost = v2;
  factoryOverheadCost = v3;
  openingWorkinProcessInventory = v4;
  endingWorkinProcessInventory = v5;
  result.textContent = '';
});

directMaterialsCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Manufactured (COGM)';
  variable2.textContent = 'Direct Labor Cost';
  variable3.textContent = 'Factory Overhead Cost';
  variable4.textContent = 'Opening Work in Process Inventory';
  variable5.textContent = 'Ending Work in Process Inventory';
  costofGoodsManufactured = v1;
  directLaborCost = v2;
  factoryOverheadCost = v3;
  openingWorkinProcessInventory = v4;
  endingWorkinProcessInventory = v5;
  result.textContent = '';
});

directLaborCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Manufactured (COGM)';
  variable2.textContent = 'Direct Materials Cost';
  variable3.textContent = 'Factory Overhead Cost';
  variable4.textContent = 'Opening Work in Process Inventory';
  variable5.textContent = 'Ending Work in Process Inventory';
  costofGoodsManufactured = v1;
  directMaterialsCost = v2;
  factoryOverheadCost = v3;
  openingWorkinProcessInventory = v4;
  endingWorkinProcessInventory = v5;
  result.textContent = '';
});

factoryOverheadCostRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Manufactured (COGM)';
  variable2.textContent = 'Direct Materials Cost';
  variable3.textContent = 'Direct Labor Cost';
  variable4.textContent = 'Opening Work in Process Inventory';
  variable5.textContent = 'Ending Work in Process Inventory';
  costofGoodsManufactured = v1;
  directMaterialsCost = v2;
  directLaborCost = v3;
  openingWorkinProcessInventory = v4;
  endingWorkinProcessInventory = v5;
  result.textContent = '';
});

openingWorkinProcessInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Manufactured (COGM)';
  variable2.textContent = 'Direct Materials Cost';
  variable3.textContent = 'Direct Labor Cost';
  variable4.textContent = 'Factory Overhead Cost';
  variable5.textContent = 'Ending Work in Process Inventory';
  costofGoodsManufactured = v1;
  directMaterialsCost = v2;
  directLaborCost = v3;
  factoryOverheadCost = v4;
  endingWorkinProcessInventory = v5;
  result.textContent = '';
});

endingWorkinProcessInventoryRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Goods Manufactured (COGM)';
  variable2.textContent = 'Direct Materials Cost';
  variable3.textContent = 'Direct Labor Cost';
  variable4.textContent = 'Factory Overhead Cost';
  variable5.textContent = 'Opening Work in Process Inventory';
  costofGoodsManufactured = v1;
  directMaterialsCost = v2;
  directLaborCost = v3;
  factoryOverheadCost = v4;
  openingWorkinProcessInventory = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costofGoodsManufacturedRadio.checked)
    result.textContent = `Cost of Goods Manufactured = ${computeCostofGoodsManufactured().toFixed(2)}`;

  else if(directMaterialsCostRadio.checked)
    result.textContent = `Direct Materials Cost = ${computeDirectMaterialsCost().toFixed(2)}`;

  else if(directLaborCostRadio.checked)
    result.textContent = `Direct Labor Cost = ${computeDirectLaborCost().toFixed(2)}`;

  else if(factoryOverheadCostRadio.checked)
    result.textContent = `Factory Overhead Cost = ${computeFactoryOverheadCost().toFixed(2)}`;

  else if(openingWorkinProcessInventoryRadio.checked)
    result.textContent = `Opening Work in Process Inventory = ${computeOpeningWorkinProcessInventory().toFixed(2)}`;

  else if(endingWorkinProcessInventoryRadio.checked)
    result.textContent = `Ending Work in Process Inventory = ${computeEndingWorkinProcessInventory().toFixed(2)}`;
})

// calculation

function computeCostofGoodsManufactured() {
  return Number(directMaterialsCost.value) + Number(directLaborCost.value) + Number(factoryOverheadCost.value) + Number(openingWorkinProcessInventory.value) - Number(endingWorkinProcessInventory.value);
}

function computeDirectMaterialsCost() {
  return Number(costofGoodsManufactured.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeDirectLaborCost() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeFactoryOverheadCost() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeOpeningWorkinProcessInventory() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(directLaborCost.value) - Number(factoryOverheadCost.value) + Number(endingWorkinProcessInventory.value);
}

function computeEndingWorkinProcessInventory() {
  return Number(directMaterialsCost.value) + Number(directLaborCost.value) + Number(factoryOverheadCost.value) + Number(openingWorkinProcessInventory.value) - Number(costofGoodsManufactured.value);
}