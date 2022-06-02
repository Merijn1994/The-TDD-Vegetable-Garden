const getYieldForPlant = (plant, envFactors) => {
    if (!envFactors) {
        return plant.yield;
    } else if (!envFactors.wind && !envFactors.soil) {
        const sunFactor = plant.factor.sun[envFactors.sun] / 100;

        return sunFactor * plant.yield;
    } else if (!envFactors.sun && !envFactors.soil) {
        const windFactor = plant.factor.wind[envFactors.wind] / 100;

        return windFactor * plant.yield;
    } else if (!envFactors.sun && !envFactors.wind) {
        const soilFactor = plant.factor.soil[envFactors.soil] / 100;

        return soilFactor * plant.yield;
    } else if (envFactors.sun && envFactors.wind && !envFactors.soil) {
        const sunFactor = plant.factor.sun[envFactors.sun] / 100;
        const windFactor = plant.factor.wind[envFactors.wind] / 100;

        return sunFactor * windFactor * plant.yield;
    } else if (envFactors.sun && envFactors.soil && !envFactors.wind) {
        const sunFactor = plant.factor.sun[envFactors.sun] / 100;
        const soilFactor = plant.factor.soil[envFactors.soil] / 100;

        return sunFactor * soilFactor * plant.yield;
    } else if (envFactors.wind && envFactors.soil && !envFactors.sun) {
        const windFactor = plant.factor.wind[envFactors.wind] / 100;
        const soilFactor = plant.factor.soil[envFactors.soil] / 100;

        return windFactor * soilFactor * plant.yield;
    } else if (envFactors.sun && envFactors.wind && envFactors.soil) {
        const sunFactor = plant.factor.sun[envFactors.sun] / 100;
        const windFactor = plant.factor.wind[envFactors.wind] / 100;
        const soilFactor = plant.factor.soil[envFactors.soil] / 100;

        return sunFactor * windFactor * soilFactor * plant.yield;
    } 
};

const getYieldForCrop = (test, envFactors) => getYieldForPlant(test.crop, envFactors) * test.numCrops;

const getTotalYield = (test, envFactors) => {
    let totalYield = 0;
    for (let x = 0; x < test.crops.length; x++) {
        totalYield += getYieldForCrop(test.crops[x], envFactors);
    };
    return totalYield;
};

const getCostsForCrop = (test, envFactors) => getYieldForCrop(test, envFactors) * test.cost;

const getRevenueForCrop = (test, envFactors) => getYieldForCrop(test, envFactors) * test.salePrice;

const getProfitForCrop = (test, envFactors) => getRevenueForCrop(test, envFactors) - getCostsForCrop(test, envFactors);

const getTotalProfit = (test, envFactors) => {
    let totalProfit = 0;
    for (let x = 0; x < test.crops.length; x++) {
        totalProfit += getProfitForCrop(test.crops[x], envFactors);        
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