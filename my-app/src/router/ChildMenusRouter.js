/**
 * Created  on 2018/9/5.
 * by leilei
 */
import React, {Component} from 'react';
import { Route,Switch} from 'react-router-dom';
import AccountManagement from '../view/userManagement/AccountManagement';
import MenuManage from '../view/userManagement/MenuManage';
import RoleManagement from '../view/userManagement/RoleManagement';
import OperationLog from '../view/userManagement/OperationLog';

import UseEdit from '../view/applicationManagement/UseEdit';
import UploadFile from '../view/applicationManagement/UploadFile';
import MenuManageThird from '../view/applicationManagement/MenuManageThird';
import Seats from '../view/applicationManagement/Seats';
import BigScreen from '../view/applicationManagement/BigScreen';


/*

import AvatarReview from '../view/userManagement/AvatarReview'
import Feedback from '../view/userManagement/Feedback'


import Meeting from '../view/applicationManagement/Meeting'
import Activity from '../view/applicationManagement/activity/Activity'
import StaffAttendance from '../view/applicationManagement/StaffAttendance'
import PunchLocation from '../view/applicationManagement/PunchLocation'
import MarketingCollege from '../view/applicationManagement/marketingCollege/MarketingCollege'


import AdvertisingManagement from '../view/tools/AdvertisingManagement'
import VersionManagement from '../view/tools/VersionManagement'
import InformationManagement from '../view/tools/InformationManagement'
import WorkPassMenuManagement from '../view/tools/WorkPassMenuManagement'
import MessageManagement from '../view/tools/MessageManagement'


import UserBehaviorAnalysis from '../view/statistics/UserBehaviorAnalysis'
import DataCenter from '../view/statistics/DataCenter'*/
export default class ChildMenusRouter extends Component {

    render() {
        const Loading = () => (
            <div style={{padding:20}}>
                <h3>正在开发中....</h3>
            </div>
        )
        const NoAuthority = () => (
            <div style={{padding:20}}>
                <h3>你暂时没有权限查看，请联系管理员给你开权限哦！</h3>
            </div>
        )
        return (
            <Switch>
                <Route path="/menusNew/userManagement/accountManagement" component={AccountManagement}/>
                <Route path="/menusNew/userManagement/menuManage" component={MenuManage}/>
                <Route path="/menusNew/userManagement/roleManagement" component={RoleManagement}/>
                <Route path="/menusNew/userManagement/operationLog" component={OperationLog}/>

                <Route path="/menusNew/applicationManagement/uploadFile" component={UploadFile}/>
                <Route path="/menusNew/applicationManagement/edit" component={UseEdit}/>
                <Route path="/menusNew/applicationManagement/menuManages" component={MenuManageThird}/>
                <Route path="/menusNew/applicationManagement/seats" component={Seats}/>
                <Route path="/menusNew/applicationManagement/bigScreen" component={BigScreen}/>
                <Route path="/menusNew/applicationManagement/researchData" component={Loading}/>

                <Route path="/menusNew/tools/advertisingManagement" component={Loading}/>
                <Route path="/menusNew/tools/messageManagement" component={Loading}/>
                <Route path="/menusNew/tools/versionManagement" component={Loading}/>
                <Route path="/menusNew/tools/informationManagement" component={Loading}/>
                <Route path="/menusNew/tools/workPassMenuManagement" component={Loading}/>
                <Route path="/menusNew/tools/authorityManagement" component={Loading}/>


                <Route path="/menusNew/statistics/userBehaviorAnalysis" component={Loading}/>
                <Route path="/menusNew/statistics/dataCenter" component={Loading}/>
                <Route path="/menusNew/tools/noAuthority" component={NoAuthority}/>
            </Switch>
        );
    }


}

