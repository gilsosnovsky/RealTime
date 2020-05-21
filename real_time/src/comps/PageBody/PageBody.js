import React from 'react';
import './PageBody.css';
import '../WelcomePage/ToEmployees'
import ToEmployees from '../WelcomePage/ToEmployees';

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
            <div id = "firstPageBody">
                <h1>To Emloyers</h1>
            </div>
        )
    }

    else if(props.pageBodystate==='contact'){
        return(
            <div id = "firstPageBody">
                <h1>Contact</h1>
            </div>
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