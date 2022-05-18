const getYieldForPlant = (plant, envFactors) => plant.yield;

const getYieldForCrop = test => getYieldForPlant(test.crop) * test.numCrops;

const getTotalYield = test => {
    let totalYield = 0;
    for (let x = 0; x < test.crops.length; x++) {
        totalYield += getYieldForCrop(test.crops[x]);
    };
    return totalYield;
};

const getCostsForCrop = test => getYieldForCrop(test) * test.cost;

const getRevenueForCrop = test => getYieldForCrop(test) * test.salePrice;

const getProfitForCrop = test => getRevenueForCrop(test) - getCostsForCrop(test);

const getTotalProfit = test => {
    let totalProfit = 0;
    for (let x = 0; x < test.crops.length; x++) {
        totalProfit += getProfitForCrop(test.crops[x]);        
    }
    return totalProfit;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
}