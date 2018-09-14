/**
 * Created  on 2018/8/13.
 * by leilei
 */
/**
 * Created  on 2018/8/7.
 * by leilei
 */

 export  const Enumeration = {

    menuEnumeration: {
        meeting: 'meeting',
        activityHome: 'activityHome',
        activityType: 'activityType',

        //
        useManage:'useManage',
        UseManageNewLIst:'UseManageNewLIst',
        UseManageNewAdd:'UseManageNewAdd'

    },
    menusNewEnumeration:{
        home:'home',
        userManagement:'userManagement',//用户管理
        userManagementChild:{
            accountManagement:'NewUseManage',//账户管理
            groupManagement:'groupManagement',//群组管理
            feedback:'feedback',//意见反馈
            avatarReview:'avatarReview'//头像审核
        },
        applicationManagement:'applicationManagement',//应用管理
        applicationManagementChild:{
            meeting:'meeting',//会议
            activity:'activity',//活动
            staffAttendance:'staffAttendance',//员工考勤
            staffAttendanceNew:'staffAttendanceNew',//员工考勤NEW
            punchLocation:'punchLocation',//打卡地点
            marketingCollege:'marketingCollege',//营销学院
            researchData:'researchData'//客研数据
        },
        tools:'tools',//工具
        toolsChild:{
            advertisingManagement:'advertisingManagement',//广告管理
            messageManagement:'messageManagement',//消息管理
            versionManagement:'versionManagement',//版本管理
            informationManagement:'informationManagement',//资讯频道管理
            workPassMenuManagement:'workPassMenuManagement',//工作通菜单管理
            authorityManagement:'authorityManagement',//权限管理
            operationLog:'operationLog'//日志管理
        },
        statistics:'statistics',//统计
        statisticsChild:{
            userBehaviorAnalysis:'userBehaviorAnalysis',//用户行为分析
            dataCenter:'dataCenter'//数据中心
        }
    }
}

