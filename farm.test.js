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

    test("Get yield for plant with only soil environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },
            };
            
            const environmentFactors = {
            soil: "sand",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(22.5);
    });

    test("Get yield for plant with sun and wind environment factors", () => {
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

    test("Get yield for plant with sun and soil environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                sun: {
                low: 50,
                medium: 100,
                high: 150,
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },
            };
            
            const environmentFactors = {
            sun: "low",
            soil: "sand",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(11.25);
    });

    test("Get yield for plant with wind and soil environment factors", () => {
        const corn = {
            name: "corn",
            yield: 30,
            factor: {
                wind: {
                low: 150,
                medium: 100,
                high: 50,
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },
            };
            
            const environmentFactors = {
            wind: "low",
            soil: "sand",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(33.75);
    });

    test("Get yield for plant with sun, wind and soil environment factors", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },
            };
            
            const environmentFactors = {
            sun: "low",
            wind: "low",
            soil: "sand",
            };
        expect(getYieldForPlant(corn, environmentFactors)).toBe(16.875);
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

    test("Get yield for crop, soil factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },       
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            soil: "sand",
            };
        expect(getYieldForCrop(input, environmentFactors)).toBe(22.5);
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
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

    test("Get yield for crop, sun and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },     
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            soil: "sand",
            };
        expect(getYieldForCrop(input, environmentFactors)).toBe(11.25);
    });

    test("Get yield for crop, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },     
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            wind: "low",
            soil: "sand",
            };
        expect(getYieldForCrop(input, environmentFactors)).toBe(33.75);
    });

    test("Get yield for crop, sun and wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },     
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
            soil: "sand",
            };
        expect(getYieldForCrop(input, environmentFactors)).toBe(16.875);
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

    test("Calculate total yield with multiple crops, sun factor", () => {
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
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                low: 50,
                medium: 100,
                high: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(11.5);
    });

    test("Calculate total yield with multiple crops, wind factor", () => {
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
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                wind: {
                low: 150,
                medium: 100,
                high: 50,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            wind: "low",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(34.5);
    });

    test("Calculate total yield with multiple crops, soil factor", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },  
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            soil: "clay",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(21);
    });

    test("Calculate total yield with multiple crops, sun and wind factor", () => {
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
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            wind: "low",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(17.25);
    });

    test("Calculate total yield with multiple crops, sun and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            soil: "clay",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(10.5);
    });

    test("Calculate total yield with multiple crops, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            wind: "low",
            soil: "clay",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(31.5);
    });

    test("Calculate total yield with multiple crops, sun, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun:"low",
            wind: "low",
            soil: "clay",
            };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(15.75);
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

    test("calculate the cost for a crop, sun factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        const environmentFactors = {
            sun:"low",
            };
        expect(getCostsForCrop(input, environmentFactors)).toBe(30);
    });

    test("calculate the cost for a crop, wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        const environmentFactors = {
            wind: "low",
            };
        expect(getCostsForCrop(input, environmentFactors)).toBe(90);
    });

    test("calculate the cost for a crop, soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        const environmentFactors = {
            soil:"sand",
            };
        expect(getCostsForCrop(input, environmentFactors)).toBe(45);
    });

    test("calculate the cost for a crop, sun and wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low", 
            };
        expect(getCostsForCrop(input, environmentFactors)).toBe(45);
    });

    test("calculate the cost for a crop, sun and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        const environmentFactors = {
            sun: "low",
            soil: "sand", 
            };
        expect(getCostsForCrop(input, environmentFactors)).toBe(22.5);
    });

    test("calculate the cost for a crop, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        const environmentFactors = {
            wind: "low",
            soil: "sand", 
            };
        expect(getCostsForCrop(input, environmentFactors)).toBe(67.5);
    });

    test("calculate the cost for a crop, sun, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
            soil: "sand", 
            };
        expect(getCostsForCrop(input, environmentFactors)).toBe(33.75);
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

    test("calculate the revenue for a crop, sun factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(60);
    });

    test("calculate the revenue for a crop, wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            wind: "low",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(180);
    });

    test("calculate the revenue for a crop, soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            soil: "sand",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(90);
    });

    test("calculate the revenue for a crop, sun and wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(90);
    });

    test("calculate the revenue for a crop, sun and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            soil: "sand",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(45);
    });

    test("calculate the revenue for a crop, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            wind: "low",
            soil: "sand",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(135);
    });

    test("calculate the revenue for a crop, sun, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
            soil: "sand",
            };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(67.5);
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

    test("calculate the profit for a crop, sun factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            };
        expect(getProfitForCrop(input, environmentFactors)).toBe(30);
    });

    test("calculate the profit for a crop, wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            wind: "low",
            };
        expect(getProfitForCrop(input, environmentFactors)).toBe(90);
    });

    test("calculate the profit for a crop, soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            soil: "sand",
            };
        expect(getProfitForCrop(input, environmentFactors)).toBe(45);
    });

    test("calculate the profit for a crop, sun and wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
            };
        expect(getProfitForCrop(input, environmentFactors)).toBe(45);
    });

    test("calculate the profit for a crop, sun and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            soil: "sand",
            };
        expect(getProfitForCrop(input, environmentFactors)).toBe(22.5);
    });

    test("calculate the profit for a crop, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            wind: "low",
            soil: "sand",
            };
        expect(getProfitForCrop(input, environmentFactors)).toBe(67.5);
    });

    test("calculate the profit for a crop, sun, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            }, 
        };
        const input = {
            crop: corn,
            numCrops: 10,
            cost: 2,
            salePrice: 4,
        };
        const environmentFactors = {
            sun: "low",
            wind: "low",
            soil: "sand",
            };
        expect(getProfitForCrop(input, environmentFactors)).toBe(33.75);
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

    test("calculate the profit for multiple crops, sun factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        const environmentFactors = {
            sun: "low",
            };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(19);
    });

    test("calculate the profit for multiple crops, wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        const environmentFactors = {
            wind: "low",
            };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(57);
    });

    test("calculate the profit for multiple crops, soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        const environmentFactors = {
            soil: "sand",
            };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(26.5);
    });

    test("calculate the profit for multiple crops, sun and wind factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        const environmentFactors = {
            sun: "low",
            wind: "low",
            };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(28.5);
    });

    test("calculate the profit for multiple crops, sun and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        const environmentFactors = {
            sun: "low",
            soil: "silt",
            };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(11.5);
    });

    test("calculate the profit for multiple crops, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        const environmentFactors = {
            wind: "low",
            soil: "silt",
            };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(34.5);
    });

    test("calculate the profit for multiple crops, sun, wind and soil factor", () => {
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
                },
                soil: {
                clay: 100,
                sand: 75,
                silt: 50,
                loam: 150,
                },
            },   
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
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
                },
                soil: {
                clay: 75,
                sand: 50,
                silt: 100,
                loam: 150,
                },
            },  
        };
        const crops = [
            { crop: corn, numCrops: 5, cost: 2, salePrice: 4 },
            { crop: pumpkin, numCrops: 2, cost: 1, salePrice: 2},
        ];
        const environmentFactors = {
            sun: "low",
            wind: "low",
            soil: "silt",
            };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(17.25);
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