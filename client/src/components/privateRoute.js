import React from 'react'
import {Route, Redirect} from 'react-router-dom'

/* 
Private Route Rules:
1. It has the same API as <Route/>
2. It renders a <Route/> and passes all props through it
3. It checks if the user is authenticated, if they are it renders the "component" prop. If not, redirect user to login page
*/

//Can be used on multiple pages meant to be private:
const PrivateRoute = ({component: Component, ...rest}) => {
   return <Route {...rest} render={(props) => {
      if(localStorage.getItem('token')){
         return <Component {...props}/>
      }
      else{
         return <Redirect to='/login'/>
      }
   }}/>
}

export default PrivateRoute