import React from 'react';
import './PageBody.css';
import '../WelcomePage/ToEmployees'
import ToEmployees from '../WelcomePage/ToEmployees';
import ToBusiness from '../WelcomePage/ToBusiness';
import Contact from '../WelcomePage/Contact/Contact'

const pageBody =(props)=>{
   
    if(props.pageBodystate==='welcomePage'){
        return(
            <div id = "firstPageBody">
                <h1>welcome page </h1>
            </div>
        )
    }
    else if(props.pageBodystate==='toEmployees'){
        return(
            <ToEmployees/>
        )
    }

    else if(props.pageBodystate==='toBusiness'){
        return(
            <ToBusiness/>
        )
    }

    else if(props.pageBodystate==='contact'){
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