

const myData = [
{name: "Wheat & Rye (Bread)", GHG: 1.4, Water: 33385.6},
{name: "Maize (Meal)", GHG: 1.1, Water: 10863.3,},
{name: "Barley (Beer)" , GHG: 1.1, Water: 696.4,},
{name: "Oatmeal", GHG: 1.6, Water: 18786.2,},
{name: "Rice", GHG: 4, Water: 49576.3,},
{name: "Potatoes", GHG: 0.3, Water: 2754.2,},
{name: "Cane Sugar", GHG: 2.6, Water: 16438.6,},
{name: "Other Pulses", GHG: 1.6, Water: 22477.4,},
{name: "Peas", GHG: 0.8, Water: 27948.2,},
{name: "Nuts", GHG: 0.2, Water: 229889.8,},
{name: "Groundnuts", GHG: 2.4, Water: 61797.9,},
{name: "Soymilk", GHG: 1, Water: 955.6,},
{name: "Tofu", GHG: 3, Water: 5113.2,},
{name: "Soybean Oil", GHG: 6, Water: 14888.2,},
{name: "Palm Oil", GHG: 7.6, Water: 36.2,},
{name: "Sunflower Oil", GHG: 3.5, Water: 36369.4,},
{name: "Rapeseed Oil", GHG: 3.7, Water: 10593.7,},
{name: "Olive Oil", GHG: 6, Water: 177480.2,},
{name: "Tomatoes", GHG: 1.4, Water: 5335.7,},
{name: "Onions & Leeks", GHG: 0.3, Water: 932,},
{name: "Root Vegetables", GHG: 0.3, Water: 929.2},
{name: "Other Vegetables", GHG: 0.5, Water: 4911.4,},
{name: "Citrus Fruit", GHG: 0.3, Water: 4662.7,},
{name: "Bananas", GHG: 0.8, Water: 661.9,},
{name: "Apples", GHG: 0.3, Water: 12948.6,},
{name: "Berries & Grapes", GHG: 1.1, Water: 21162.1,},
{name: "Wine", GHG: 1.4, Water: 1149.3,},
{name: "Other Fruit", GHG: 0.7, Water: 9533.1},
{name: "Coffee", GHG: 16.5, Water: 337,},
{name: "Dark Chocolate", GHG: 18.7, Water: 2879.2,},
{name: "Beef (beef herd)", GHG: 59.6, Water: 34732.5,},
{name: "Beef (dairy herd)", GHG: 21.1, Water: 119805.2,},
{name: "Lamb & Mutton", GHG: 24.5, Water: 141925,},
{name: "Pig Meat", GHG: 7.2, Water: 66867.4,},
{name: "Poultry Meat", GHG: 6.1, Water: 14177.9,},
{name: "Milk", GHG: 2.8, Water: 19786.3,},
{name: "Cheese", GHG: 21.2, Water: 180850.6,},
{name: "Eggs", GHG: 4.5, Water: 17982.7,},
{name: "Fish (farmed)", GHG: 5.1, Water: 41572.2,},
{name: "Shrimp (farmed)", GHG: 11.8, Water: 127259,},
]

const protein = [
    "Nuts", "Groundnuts", "Tofu", "Beef (beef herd)", "Beef (dairy herd)",
    "Lamb & Mutton", "Pig Meat", "Poultry Meat", "Milk", "Cheese", "Eggs",
    "Fish (farmed)", "Shrimp (farmed)" 
]


function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = a[key]
    const varB = b[key]

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

myData.sort(compareValues('GHG'));

function proteinData(){
    let data = []
    myData.forEach(el => {
        if (protein.includes(el.name)) data.push(el)
    })
    return data;
}

function currData(dataset) {
  return {
    labels: dataset.map(el => (el.name)),
        datasets: [{
            label: 'kgCO2-equivalents per kg food',
            yAxisID: 'y1',
            data: dataset.map(el => (el.GHG)),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
          label: 'Scarcity-Weighted L of H2O per kg food',
          yAxisID: 'y2',
            data: dataset.map(el => (el.Water)),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor:'rgba(54, 162, 235, 1)',
            borderWidth: 1  
        }]
  }
}

let dataset = myData;

const ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: currData(dataset),
    options: {
        layout: {
            padding: 10,
        },
        title: {
          display: true,
          text: "Greenhouse Gas Emissions and Scarcity-Weighted Water Use of Food Products",
          fontSize: 16
        },
        legend: {
          position: "bottom"
        },  
        scales: {
            yAxes: [{
					type: 'linear', 
					position: 'left',
					id: 'y1',
                    scaleLabel: {
                        labelString: 'Greenhouse Gas Emissions in kgCO2eq per Kilogram of Food Product',
                        display: true 
                    }
				}, {
					type: 'linear', 
					display: true,
					position: 'right',
					id: 'y2',
                    scaleLabel: {
                        labelString: 'Scarcity-Weighted Water Use in Liters per Kilogram of Food Product',
                        display: true 
                    },
					gridLines: {
						drawOnChartArea: false
					}
            }],
                        
        }
    }
});

document.getElementById('protein').addEventListener('click', ()=> {
    dataset = proteinData()
    myChart.data = currData(dataset);
    myChart.update();
})

document.getElementById('all-foods').addEventListener('click', ()=> {
    dataset = myData
    myChart.data = currData(dataset);
    myChart.update();
})

document.getElementById('scroll-down').addEventListener('click', ()=> {
    
    // window.scroll({
    //   top: document.getElementById('main-top').offsetHeight,
    //   behavior: 'smooth',
    // });
    document.getElementById("doughnut").scrollIntoView({ behavior: 'smooth'});
    
  
})