const { getYieldForPlant, 
        getYieldForCrop, 
        getTotalYield, 
        getCostsForCrop, 
        getRevenueForCrop,
        getProfitForCrop,
        getTotalProfit, 
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });

    test("Get yield for plant with only sun environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: 50,
                medium: 100,
                high: 150,
                },
            },
            };
            
            const environmentFactors = {
            sun: "low",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

    test("Get yield for plant with only wind environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                wind: {
                low: 150,
                medium: 100,
                high: 50,
                },
            },
            };
            
            const environmentFactors = {
            wind: "low",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(45);
    });

    test("Get yield for plant with wind and sun environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: 50,
                medium: 100,
                high: 150,
                },
                wind: {
                    low: 150,
                    medium: 100,
                    high: 50,
                }
            },
            };
            
            const environmentFactors = {
            sun: "low",
            wind: "low",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(22.5);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });

    test("Get yield for crop, sun factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: 50,
                medium: 100,
                high: 150,
                },
            },       
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            };
        expect(getYieldForCrop(input, environmentFactors)).toBe(15);
    });

    test("Get yield for crop, wind factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                wind: {
                low: 150,
                medium: 100,
                high: 50,
                },
            },       
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            wind: "low",
            };
        expect(getYieldForCrop(input, environmentFactors)).toBe(45);
    });

    test("Get yield for crop, sun and wind factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: 50,
                medium: 100,
                high: 150,
                },
                wind: {
                    low: 150,
                    medium: 100,
                    high: 50,
                }
            },     
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
            };
        expect(getYieldForCrop(input, environmentFactors)).toBe(22.5);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("calculate the cost for a crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        expect(getCostsForCrop(input)).toBe(60);
    });
});

describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop (without environmental factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        expect(getRevenueForCrop(input)).toBe(120);
    });
});

describe("getProfitForCrop", () => {
    test("calculate the profit for a crop (without environmental factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        expect(getProfitForCrop(input)).toBe(60);
    });
});

describe("getTotalProfit", () => {
    test("calculate the profit for multiple crops (without environmental factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        expect(getTotalProfit({ crops })).toBe(38);
    });

    test("Calculate total profit with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0, cost: 2, salePrice: 4  }];
        expect(getTotalProfit({ crops })).toBe(0);
    });
});