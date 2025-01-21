//imports
import { config } from './config.js';
import { getLocation } from './providers/location.js';
import { getForecastInfo, getLocationInfo } from './providers/accuweather.js'

//Events
window.addEventListener("load", init)

//varaibles
var locationKey = ''

//init
function init() {
    console.log('Initializing document...')

    showForecast(getForecast())

    // //get geolocation
    // getLocation().then( (location) =>{
    //     console.log(location)

    //     //get location info
    //     getLocationInfo(location).then((info) =>{
    //         console.log(info)

    //         locationKey = info.Key

    //         var locationName = info.LocalizedName 
    //             + ', ' + info.AdministrativeArea.LocalizedName 
    //             + ', ' + info.Country.LocalizedName

    //         document.querySelector('#label-location').textContent = locationName
    //         toggleMetric(config.metric)

    //         getForecast()
    //     })

    // })

    // //events
    // document.querySelector('#button-degrees-c').addEventListener('click',() => {
    //     toggleMetric(true)
    // })
    // document.querySelector('#button-degrees-f').addEventListener('click',() => {
    //     toggleMetric(false)
    // })
}



//toggle metric
function toggleMetric(metric){
    //set config
    config.metric = metric
    //show selected button
    if(config.metric) {
        document.querySelector('#button-degrees-c').className = 'button-degrees-selected'
        document.querySelector('#button-degrees-f').className = 'button-degrees'
    } 
    else {
        document.querySelector('#button-degrees-c').className = 'button-degrees'
        document.querySelector('#button-degrees-f').className = 'button-degrees-selected'
    }

    //get forecast again
    getForecast()

}

function getForecast(){
    //get forecast info
    showForecast([
        {
            Day: {
                IconPhrase: 'Sunny'
            }
        },
        {
            Day: {
                IconPhrase: 'Not Sunny'
            }
        },
        {
            Day: {
                IconPhrase: 'Fog'
            }
        },
        {
            Day: {
                IconPhrase: 'Raining'
            }
        },
        {
            Day: {
                IconPhrase: 'Night'
            }
        }
    ])
//     getForecastInfo(locationKey).then((response) =>{
         // console.clear()
         // console.log(response) 
//     })
}

function showForecast(data){
    //get template content
    let template = document.getElementById('template-day').content;

    //create fragment
    let fragment = document.createDocumentFragment();

    //read data
    data.forEach( d =>{
        //land data to elements
        template.querySelector('#label-description').textContent = d.Day.IconPhrase;
        /*
            more code xd
        */ 
       //clone template
       let clone = document.importNode(template, true);

       //append fragment
       fragment.appendChild(clone);
    })
    
    //append fragment to parent div
    document.getElementById('forecast').appendChild(fragment)
}
