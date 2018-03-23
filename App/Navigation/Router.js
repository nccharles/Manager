import React from 'react';
import { Stack,Scene, Router,Actions} from 'react-native-router-flux'
import LoginScreen from '../Containers/LoginScreen'
import EmployeeList from '../Containers/EmployeeList'
import EmployeeCreate from '../Containers/EmployeeCreate'
import SignupScreen from '../Containers/SignUpScreen'
import EmployeeEdit from '../Containers/EmployeeEdit'
import { Colors} from '../Themes'
const RouterComponent = () => {
   return ( 
       
       <Router sceneStyle={{ paddingTop: 10, backgroundColor: 'transparent'}}>
           <Stack hideNavBar>
           <Scene  key="auth" hideNavBar>
           <Scene  key='login'  component={LoginScreen} title="Please Login"/>
           <Scene  key='signup'  component={SignupScreen} title="Please Signup"/>
           </Scene>
           <Scene key="Main" >
           <Scene  key='employeeList'  onRight={()=> Actions.employeeCreate()} 
           rightTitle="Add"
           component={EmployeeList} title="Employees"/>
            <Scene  key='employeeCreate' component={EmployeeCreate} title="Create Employee"/>
            <Scene  key='employeeEdit' component={EmployeeEdit} title="Edit Employee"/>
           </Scene>
          </Stack>  
       </Router>  
   )
}
 
export default RouterComponent;