//import './BusinesInformation.css'
import React, {Component} from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'
import {Countries} from './CountriesList'




const selectStyle={
    background: "#000"    
};

class BusinesInformation extends Component{

    
    options = Countries.map(function(fruit){
        return {label: fruit, value: fruit}
    });

    
    
    render(){
        return(
            <div className='main-wrapper'>
                <Link to='/login'><span className="close"></span></Link>
                <form className='busines-info'>
                <h1>Business Information</h1>

                    <label htmlFor="text">What is the name of your business?
                        <input 
                        type="text"  
                        onChange={this.handleChange} 
                        //value={this.state.company} 
                        placeholder='Company name' 
                        name="company" 
                        required/>
                    </label>

                    <label htmlFor="text">In what country is your business registered?
                         {/* <input 
                        type="text"  
                        onChange={this.handleChange} 
                        //value={this.state.country} 
                        placeholder='Country' 
                        name="country" 
                        required/>  */}
                        <Select 
                            options={this.options}
                            placeholder='Country'
                            name='country'
                            style={selectStyle}
                            
                             />
                    </label>

                     <div className='btn-submit'>
                        <input 
                            //disabled={this.validateForm}
                            onClick={this.next} 
                            type="submit" value="Next" 
                            />
                    </div>
                    
                </form>

            </div>
        )
    }
}



export default BusinesInformation;
