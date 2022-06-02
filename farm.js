const getYieldForPlant = (plant, envFactors) => {
    if (!envFactors) {
        return plant.yield;
    } else if (!envFactors.wind && !envFactors.soil) {
        const sunCondition = envFactors.sun;
        const envFactor = plant.factor.sun[sunCondition] / 100;

        return envFactor * plant.yield;
    } else if (!envFactors.sun && !envFactors.soil) {
        const windCondition = envFactors.wind;
        const envFactor = plant.factor.wind[windCondition] / 100;

        return envFactor * plant.yield;
    } else if (envFactors.sun && envFactors.wind) {
        const sunCondition = envFactors.sun;
        const windCondition = envFactors.wind;

        const sunFactor = plant.factor.sun[sunCondition] / 100;
        const windFactor = plant.factor.wind[windCondition] / 100;

        return sunFactor * windFactor * plant.yield;
    }
};

const getYieldForCrop = (test, envFactors) => {
    if (!envFactors) {
        return getYieldForPlant(test.crop) * test.numCrops;
    } else if (envFactors.sun && !envFactors.wind) {
        const sunCondition = envFactors.sun;
        const envFactor = test.crop.factor.sun[sunCondition] / 100;

        return getYieldForPlant(test.crop) * test.numCrops * envFactor;
    } else if (envFactors.wind && !envFactors.sun) {
        const windCondition = envFactors.wind;
        const envFactor = test.crop.factor.wind[windCondition] / 100;

        return getYieldForPlant(test.crop) * test.numCrops * envFactor;
    } else if (envFactors.sun && envFactors.wind) {
        const sunCondition = envFactors.sun;
        const windCondition = envFactors.wind;

        const sunFactor = test.crop.factor.sun[sunCondition] / 100;
        const windFactor = test.crop.factor.wind[windCondition] / 100;

        return getYieldForPlant(test.crop) * test.numCrops * sunFactor * windFactor;
    }
}

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