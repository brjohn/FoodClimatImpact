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
const dfInfo = "With 75% of global deforestation driven by agriculture, it is another significant factor in assessing the impact of our food. 95% of this deforestation occurs in the tropics, where beef production alone is responsible for 41% (2.1 million hectacres annually) and palm oil and soybean production (oilseeds) drives another 18%. (2)"

const ghgInfo = "How significant is food production's contribution to our total global greenhouse gas emissions? Accounting for 26% of global emissions, it is indeed significant. In general, animal-based foods have a greater footprint than plant-based, as demonstrated in the bar graph above. These emissions are derived from 7 stages of the supply chain: land use change, farming, animal feed, processing, transportation, retail, and packaging. See how these stages contribute to the overall emissions of beef, poultry, and wheat by clicking the options above. (1)"

const beefInfo = "Beef from beef herds has the highest GHG emissions per kilogram, at 59.6 kgCO2eq per kg. Here you can see the significant emissions from land use change and farming: this is due to the methane production from cows and the conversion of land for grazing and animal feed. (1)"

const poultryInfo = "A kilogram of poultry contributes 6.1 kilograms of greenhouse gases - nearly 10% of that of a kilogram of beef herd beef. Both poultry and pigs are non-ruminant, so they do not produce methane, unlike lamb and beef, accounting for some of the differences in emissions. (1)"

const wheatInfo = "Plant-based foods such as wheat contribute far fewer emissions that animal-based products. Wheat contributes only 1.4 kgCO2eq per kg. Without the necessity of animal feed and greatly reduced farming-attributed emissions, emissions of plant-based foods depend more on transportation distance, retail, packaging, and specific farming methods. (1)"

const waterInfo = "Freshwater usage is a major factor when considering climate impact, and globally, agrigulture accounts for a massive 70% of all freshwater withdrawals. But how your plate of food contributes to this is more nuanced. Freshwater scarcity varies across the world, so where your food is grown is the most important factor. Data in the above bar graph is given for liters of scarcity-weighted water, meaning this data is weighted by local water scarcity, and taken as a global average. (1)"
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


function changeInfo(newText){
    const info = document.getElementById('info')
    // var x = document.createElement("P");                        
    var t = document.createTextNode(newText); 
    info.replaceChild(t, info.childNodes[0])   
    
}

document.getElementById('deforestation').addEventListener('click', ()=> {
    changeInfo(dfInfo)
    myDoughnut.data = circleData(deforestation);
    myDoughnut.options.title.text = "Breakdown of Tropical Deforestation from Agricultural Products"
    myDoughnut.update();

    

})

document.getElementById('water').addEventListener('click', ()=> {
    changeInfo(waterInfo)
    myDoughnut.data = circleData(waterData);
    myDoughnut.options.title.text = "Breakdown of Global Freshwater Withdrawals"
    myDoughnut.update();
})

document.getElementById('beef').addEventListener('click', ()=> {
    changeInfo(beefInfo)
    myDoughnut.data = circleData(ghgBeefHerd);
    myDoughnut.options.title.text = "Breakdown of Greenhouse Gas Emissions accross the Supply Chain of Beef (beef herd)"
    myDoughnut.update();
})

document.getElementById('poultry').addEventListener('click', ()=> {
    changeInfo(poultryInfo)
    myDoughnut.data = circleData(ghgPoultry);
    myDoughnut.options.title.text = "Breakdown of Greenhouse Gas Emissions accross the Supply Chain of Poultry"
    myDoughnut.update();
})

document.getElementById('wheat').addEventListener('click', ()=> {
    changeInfo(wheatInfo)
    myDoughnut.data = circleData(ghgWheat);
    myDoughnut.options.title.text = "Breakdown of Greenhouse Gas Emissions accross the Supply Chain of Wheat"
    myDoughnut.update();
})

document.getElementById('ghg').addEventListener('click', ()=> {
    changeInfo(ghgInfo)
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
document.getElementById('top-ghg').addEventListener('click', ()=> {
    
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
    changeInfo(ghgInfo)
    myDoughnut.data = circleData(ghgData);
    myDoughnut.options.title.text = "Global Greenhouse Gas Emissions"
    myDoughnut.update();
  
})
document.getElementById('top-water').addEventListener('click', ()=> {
    
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
    changeInfo(waterInfo)
    myDoughnut.data = circleData(waterData);
    myDoughnut.options.title.text = "Breakdown of Global Freshwater Withdrawals"
    myDoughnut.update();
  
})

// document.getElementById('info').removeChild('info-child').appendChild(
//     <p>test test test</p>
// )