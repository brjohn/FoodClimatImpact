const ghgData = [
    {name: "Food Production", percent: 26, color: "rgba(255, 99, 132, 0.2)", bc: "rgba(255, 99, 132)"},
    {name: "Other Sources", percent: 74, color: "rgba(255, 159, 64, 0.2)", bc: "rgba(255, 159, 64)"}
]

const waterData = [
    {name: "Agriculture", percent: 70, color: "rgba(75, 192, 192, 0.2)", bc: "rgba(75, 192, 192)"},
    {name: "Industry", percent: 19, color: "rgba(54, 162, 235, 0.2)", bc: "rgba(54, 162, 235)"},
    {name: "Households", percent: 11, color: "rgba(201, 203, 207, 0.2)", bc: "rgba(201, 203, 207)"},
]

const deforestation = [
    {name: "Cattle", percent: 40.7, color: "rgba(255, 99, 132, 0.2)", bc: "rgba(255, 99, 132)"},
    {name: "Forestry logging", percent: 13.1, color: "rgba(255, 159, 64, 0.2)", bc: "rgba(255, 159, 64)"},
    {name: "Oilseeds", percent: 18.4, color: "rgba(255, 205, 86, 0.2)", bc: "rgba(255, 205, 86)"},
    {name: "Other Cereals (excl. rice & wheat", percent: 8.6, color: "rgba(75, 192, 192, 0.2)", bc: "rgba(75, 192, 192)"},
    {name: "Other Crops", percent: 3.6, color: "rgba(54, 162, 235, 0.2)", bc: "rgba(54, 162, 235)"},
    {name: "Paddy Rice", percent: 5.6, color: "rgba(153, 102, 255, 0.2)", bc: "rgba(153, 102, 255)"},
    {name: "Plant-based Fibers", percent: 0.5, color: "rgba(201, 203, 207, 0.2)", bc: "rgba(201, 203, 207)"},
    {name: "Sugar Cane/Beet", percent: 1.1, color: "rgba(20, 203, 20, 0.2)", bc: "rgba(20, 203, 20)"},
    {name: "Vegetables, Fruit, & Nuts", percent: 7.3, color: "rgba(201, 20, 207, 0.2)", bc: "rgba(201, 20, 207)"},
    {name: "Wheat", percent: 1, color: "rgba(201, 203, 20, 0.2)", bc: "rgba(201, 203, 20)"},
]

const ghgBeefHerd = [
    {name: "Land Use Change", percent: 16.3, color: "rgba(255, 99, 132, 0.2)", bc: "rgba(255, 99, 132)"},
    {name: "Animal Feed", percent: 1.9, color: "rgba(255, 159, 64, 0.2)", bc: "rgba(255, 159, 64)"},
    {name: "Farm", percent: 39.4, color: "rgba(255, 205, 86, 0.2)", bc: "rgba(255, 205, 86)"},
    {name: "Processing", percent: 1.3, color: "rgba(75, 192, 192, 0.2)", bc: "rgba(75, 192, 192)"},
    {name: "Transport", percent: 0.3, color: "rgba(54, 162, 235, 0.2)", bc: "rgba(54, 162, 235)"},
    {name: "Packaging", percent: 0.2, color: "rgba(153, 102, 255, 0.2)", bc: "rgba(153, 102, 255)"},
    {name: "Retail", percent: 0.2, color: "rgba(201, 203, 207, 0.2)", bc: "rgba(201, 203, 207)"},
]
const ghgPoultry = [
    {name: "Land Use Change", percent: 2.5, color: "rgba(255, 99, 132, 0.2)", bc: "rgba(255, 99, 132)"},
    {name: "Animal Feed", percent: 1.8, color: "rgba(255, 159, 64, 0.2)", bc: "rgba(255, 159, 64)"},
    {name: "Farm", percent: 0.7, color: "rgba(255, 205, 86, 0.2)", bc: "rgba(255, 205, 86)"},
    {name: "Processing", percent: 0.4, color: "rgba(75, 192, 192, 0.2)", bc: "rgba(75, 192, 192)"},
    {name: "Transport", percent: 0.3, color: "rgba(54, 162, 235, 0.2)", bc: "rgba(54, 162, 235)"},
    {name: "Packaging", percent: 0.2, color: "rgba(153, 102, 255, 0.2)", bc: "rgba(153, 102, 255)"},
    {name: "Retail", percent: 0.2, color: "rgba(201, 203, 207, 0.2)", bc: "rgba(201, 203, 207)"},
]

const ghgWheat = [
    {name: "Land Use Change", percent: 0.1, color: "rgba(255, 99, 132, 0.2)", bc: "rgba(255, 99, 132)"},
    {name: "Animal Feed", percent: 0, color: "rgba(255, 159, 64, 0.2)", bc: "rgba(255, 159, 64)"},
    {name: "Farm", percent: 0.8, color: "rgba(255, 205, 86, 0.2)", bc: "rgba(255, 205, 86)"},
    {name: "Processing", percent: 0.2, color: "rgba(75, 192, 192, 0.2)", bc: "rgba(75, 192, 192)"},
    {name: "Transport", percent: 0.1, color: "rgba(54, 162, 235, 0.2)", bc: "rgba(54, 162, 235)"},
    {name: "Packaging", percent: 0.1, color: "rgba(153, 102, 255, 0.2)", bc: "rgba(153, 102, 255)"},
    {name: "Retail", percent: 0.1, color: "rgba(201, 203, 207, 0.2)", bc: "rgba(201, 203, 207)"},
]


function circleData(dataD) {
    
    return {
        labels: dataD.map(el => (el.name)),
        datasets: [{
            data: dataD.map(el => (el.percent)),
            backgroundColor: dataD.map(el => (el.color)),
            borderColor: dataD.map(el => (el.bc))
        }],
            
    }

}

// ["rgba(255, 99, 132, 0.2)",
// "rgba(255, 159, 64, 0.2)",
// "rgba(255, 205, 86, 0.2)",
// "rgba(75, 192, 192, 0.2)",
// "rgba(54, 162, 235, 0.2)",
// "rgba(153, 102, 255, 0.2)",
// "rgba(201, 203, 207, 0.2)"],
// "borderColor":
// ["rgb(255, 99, 132)",
// "rgb(255, 159, 64)",
// "rgb(255, 205, 86)",
// "rgb(75, 192, 192)",
// "rgb(54, 162, 235)",
// "rgb(153, 102, 255)",
// "rgb(201, 203, 207)"]

const ctx2 = document.getElementById("doughnut");
var myDoughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: circleData(ghgData),
    options: {
        legend: {
            position: "right"
        },
        title: {
            display: true,
            text: "Global Greenhouse Gas Emissions",
            position: "top",
            fontSize: 24
        }
    }
});

document.getElementById('deforestation').addEventListener('click', ()=> {
    myDoughnut.data = circleData(deforestation);
    myDoughnut.options.title.text = "Breakdown of Tropical Deforestation from Agricultural Products"
    myDoughnut.update();
})

document.getElementById('water').addEventListener('click', ()=> {
    myDoughnut.data = circleData(waterData);
    myDoughnut.options.title.text = "Breakdown of Global Freshwater Withdrawals"
    myDoughnut.update();
})

document.getElementById('beef').addEventListener('click', ()=> {
    myDoughnut.data = circleData(ghgBeefHerd);
    myDoughnut.options.title.text = "Breakdown of Greenhouse Gas Emissions accross the Supply Chain of Beef (beef herd)"
    myDoughnut.update();
})

document.getElementById('poultry').addEventListener('click', ()=> {
    myDoughnut.data = circleData(ghgPoultry);
    myDoughnut.options.title.text = "Breakdown of Greenhouse Gas Emissions accross the Supply Chain of Poultry"
    myDoughnut.update();
})

document.getElementById('wheat').addEventListener('click', ()=> {
    myDoughnut.data = circleData(ghgWheat);
    myDoughnut.options.title.text = "Breakdown of Greenhouse Gas Emissions accross the Supply Chain of Wheat"
    myDoughnut.update();
})

document.getElementById('ghg').addEventListener('click', ()=> {
    myDoughnut.data = circleData(ghgData);
    myDoughnut.options.title.text = "Global Greenhouse Gas Emissions"
    myDoughnut.update();
})

document.getElementById('scroll-up').addEventListener('click', ()=> {   
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
})

