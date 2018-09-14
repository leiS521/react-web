/**
 * Created  on 2018/9/5.
 * by leilei
 */
import React, {Component} from 'react';
import { Route,Switch} from 'react-router-dom';
import NewUseManage from '../view/meeting/NewUseManage';
import UseEdit from '../view/edit/UseEdit';
/*import GroupManagement from '../view/userManagement/GroupManagement'

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
        return (
            <Switch>
                <Route path="/menusNew/userManagement/NewUseManage" component={NewUseManage}/>
                <Route path="/menusNew/userManagement/UseEdit" component={UseEdit}/>
                <Route path="/menusNew/userManagement/feedback" component={Loading}/>
                <Route path="/menusNew/userManagement/avatarReview" component={Loading}/>

                <Route path="/menusNew/applicationManagement/meeting" component={Loading}/>
                <Route path="/menusNew/applicationManagement/activity" component={Loading}/>
                <Route path="/menusNew/applicationManagement/staffAttendance" component={Loading}/>
                <Route path="/menusNew/applicationManagement/staffAttendanceNew" component={Loading}/>
                <Route path="/menusNew/applicationManagement/punchLocation" component={Loading}/>
                <Route path="/menusNew/applicationManagement/marketingCollege" component={Loading}/>
                <Route path="/menusNew/applicationManagement/researchData" component={Loading}/>

                <Route path="/menusNew/tools/advertisingManagement" component={Loading}/>
                <Route path="/menusNew/tools/messageManagement" component={Loading}/>
                <Route path="/menusNew/tools/versionManagement" component={Loading}/>
                <Route path="/menusNew/tools/informationManagement" component={Loading}/>
                <Route path="/menusNew/tools/workPassMenuManagement" component={Loading}/>
                <Route path="/menusNew/tools/authorityManagement" component={Loading}/>
                <Route path="/menusNew/tools/operationLog" component={Loading}/>

                <Route path="/menusNew/statistics/userBehaviorAnalysis" component={Loading}/>
                <Route path="/menusNew/statistics/dataCenter" component={Loading}/>

            </Switch>
        );
    }


}

