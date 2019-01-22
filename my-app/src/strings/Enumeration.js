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
            accountManagement:'accountManagement',//账户管理
            menuManage:'menuManage',//菜单管理
            roleManagement:'roleManagement',//角色管理
            operationLog:'operationLog',//编辑器
        },
        applicationManagement:'applicationManagement',//应用管理
        applicationManagementChild:{
            UploadFile:'UploadFile',//上传文件
            edit:'edit',//编辑器
            menuManages:'menuManages',//三级菜单
            Seats:'seats',//座位分布
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
        },
        statistics:'statistics',//统计
        statisticsChild:{
            userBehaviorAnalysis:'userBehaviorAnalysis',//用户行为分析
            dataCenter:'dataCenter'//数据中心
        }
    }
}

