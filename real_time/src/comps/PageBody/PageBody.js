import React from 'react';
import './PageBody.css';
import ToEmployees from '../WelcomePages/ToEmployees/ToEmployees';
import ToBusiness from '../WelcomePages/ToBusiness/ToBusiness';
import Contact from '../WelcomePages/Contact/Contact';
import Home from '../WelcomePages/Home/Home';

const pageBody =(props)=>{
   
    if(props.pageBodyState==='homePage'){
        return(
            <Home/>
        )
    }
    else if(props.pageBodyState==='toEmployees'){
        return(
            <ToEmployees/>
        )
    }

    else if(props.pageBodyState==='toBusiness'){
        return(
            <ToBusiness/>
        )
    }

    else if(props.pageBodyState==='contact'){
        return(
            <Contact/>
        )
    }

    else{
        return(
            <div id = "firstPageBody">
                <h1>default</h1>
            </div>
        )
    }

}
export default pageBody;