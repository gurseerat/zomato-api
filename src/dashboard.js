import React from 'react';
import axios from 'axios';
 
export default class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      latitude: '',
      longitude: '',
      area: '',
      zomato: [],
      res_id: ''
    }

  }
  
  componentDidMount() {
    const location = window.navigator && window.navigator.geolocation
    
    if (location) {
      location.getCurrentPosition((position) => {
        
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        console.log(this.state)
        const headers= {
            'Accept' : 'application/json',
            'user-key': '8e989760d4b1a6e056306a5742dabada'
          }
         
        axios.get('https://developers.zomato.com/api/v2.1/geocode?lat='+this.state.latitude+'&lon='+this.state.longitude, {headers: headers})
          .then(res => { 
            console.log(res.data.nearby_restaurants); 
            const area = res.data.location.title;
            const zomato = res.data.nearby_restaurants;

            this.setState({ area, zomato }); 
          });

          

      }, (error) => {
        this.setState({ latitude: 'Cannot get location', longitude: 'Cannot get location' })
      }, { enableHighAccuracy: false, timeout: 5000 }
      )
    }
  }

  

  render() {
    
    
    return (
      <div className="dash-main">
        <div className="area">{this.state.area}</div>
      <div className="content">
        { this.state.zomato.map(zomato => 
        
            <div className="rest-content">
          <div className="rest-image"><img src={zomato.restaurant.thumb} alt={zomato.restaurant.name} /></div>
            <div className="rest-name">{zomato.restaurant.name}</div>
          <div className="rest-loc"><i class="fas fa-map-marker-alt"></i> {zomato.restaurant.location.locality}</div>
          </div>
          
        )}
      </div>
      </div>
    )
  }
  }
  

