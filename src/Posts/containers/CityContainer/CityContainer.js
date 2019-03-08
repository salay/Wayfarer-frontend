import React, {Component} from 'react'
<<<<<<< HEAD
import CitiesModel from '../../../models/CitiesModel'
=======
import CitiesModel from '../../../models/CitiesModel.js'
>>>>>>> cc878c7f9da4987baee99b5483ff17ed495145a8
import CityRenderBox from '../../components/CityRenderBox/CityRenderBox';

class CityContainer extends Component {

  constructor(){
    super()
    this.state = {
      cities: []
    }
  }

 
  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    CitiesModel.allEndpoints().then( (res) =>  
   // {/* pulling the city data from the citiesModel API*/}
    { console.log(res.data)
      this.setState ({
        cities: res.data,  // {/* setting the state of the empty cities array equal to the cities data from the API defined in the city models*/}
        city: ''
      })
    })
  }

  render(){
      console.log(this.state.cities)
    return (
      <div>
        <CityRenderBox
          cities={this.state.cities} /> {/* passing cities as a prop to the cityrender box. cities is equal to the current state of the cities array which comes from the API */}
      </div>
    )
  }
}


export default CityContainer



