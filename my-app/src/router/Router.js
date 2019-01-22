import React, {Component} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from '../view/login/Login'
import MenusNew from '../view/menu/MenusNew';
class Router extends Component {



    render() {
        /* let status=JSON.parse(localStorage.getItem("userInfor"))?true:false;
        // console.log(status)
         this.status=status*/
        return (
            /*  ./虚拟路由*/
            < HashRouter basename='/'>
                <div>


                    <Route exact path="/" component={Login}/>

                    <Route path="/menusNew" component={MenusNew}/>
                    {/* 使用注释掉的路由请在主菜单里去掉link*/}
                    {/* <Route path="/menusNew" component={MenusNew}/>
                    />*/}
                    {/*点击更换路由,全部路由改变*/}
                   {/* <Route path="/menusNew"
                           render={props => {
                               return (
                                   <Switch>
                                       <Route path="/menusNew/home" component={Home}/>
                                       <Route path="/menusNew/userManagement" {...props} component={ChildMenu}
                                              render={props => {
                                                  return (
                                                      <div>
                                                          <Switch>
                                                              <Route path="/menusNew/userManagement/NewUseManage" component={Loading}/>
                                                              <Route path="/menusNew/userManagement/useEdit" component={UseEdit}/>
                                                              <Route path="/menusNew/userManagement/feedback" component={Loading}/>
                                                              <Route path="/menusNew/userManagement/avatarReview" component={Loading}/>

                                                          </Switch>
                                                      </div>
                                                  )
                                              }}
                                       />

                                       <Route path="/menusNew/applicationManagement" component={ChildMenu}
                                              render={props => {
                                                  return (
                                                      <div>
                                                          <Switch>
                                                              <Route path="/menusNew/applicationManagement/meeting" component={Loading}/>
                                                              <Route path="/menusNew/applicationManagement/activity" component={Loading}/>
                                                              <Route path="/menusNew/applicationManagement/staffAttendance" component={Loading}/>
                                                              <Route path="/menusNew/applicationManagement/staffAttendanceNew" component={Loading}/>
                                                              <Route path="/menusNew/applicationManagement/punchLocation" component={Loading}/>
                                                              <Route path="/menusNew/applicationManagement/marketingCollege" component={Loading}/>
                                                              <Route path="/menusNew/applicationManagement/researchData" component={Loading}/>

                                                          </Switch>
                                                      </div>
                                                  )
                                              }}

                                       />
                                       <Route path="/menusNew/tools" component={ChildMenu}
                                              render={props => {
                                                  return (
                                                      <div>
                                                          <Switch>
                                                              <Route path="/menusNew/tools/advertisingManagement" component={Loading}/>
                                                              <Route path="/menusNew/tools/messageManagement" component={Loading}/>
                                                              <Route path="/menusNew/tools/versionManagement" component={Loading}/>
                                                              <Route path="/menusNew/tools/informationManagement" component={Loading}/>
                                                              <Route path="/menusNew/tools/workPassMenuManagement" component={Loading}/>
                                                              <Route path="/menusNew/tools/authorityManagement" component={Loading}/>
                                                              <Route path="/menusNew/tools/operationLog" component={Loading}/>

                                                          </Switch>
                                                      </div>
                                                  )
                                              }}
                                       />
                                       <Route path="/menusNew/statistic" component={ChildMenu}
                                              render={props => {
                                                  return (
                                                      <div>
                                                          <Switch>
                                                              <Route path="/menusNew/statistic/userBehaviorAnalysis" component={Loading}/>
                                                              <Route path="/menusNew/statistic/dataCenter" component={Loading}/>
                                                          </Switch>
                                                      </div>
                                                  )
                                              }}
                                       />
                                   </Switch>
                               );

                           }}


                           component={MenusNew}>

                    </Route>*/}




                </div>

            </ HashRouter>
        );
    }


}

export default Router;
