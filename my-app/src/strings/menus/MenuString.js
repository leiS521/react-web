/**
 * Created  on 2018/8/7.
 * by leilei
 */
import {Enumeration} from '../Enumeration'
export const MenuString = {
    menusNew: [{
        key: Enumeration.menusNewEnumeration.home,
        Icon: 'home',
        title: '首页',
        path:'/menusNew/home'
    },
        {
            key: Enumeration.menusNewEnumeration.userManagement,
            Icon: 'team',
            title: '用户管理',
            path:'/menusNew/userManagement',
            child: [{
                key: Enumeration.menusNewEnumeration.userManagementChild.accountManagement,
                Icon: 'book',
                title: '账户管理',
                path:'/menusNew/userManagement/NewUseManage'
            },
                {
                    key: Enumeration.menusNewEnumeration.userManagementChild.groupManagement,
                    Icon: 'team',
                    title: '编辑器',
                    path:'/menusNew/userManagement/useEdit'
                },
                {
                    key: Enumeration.menusNewEnumeration.userManagementChild.feedback,
                    Icon: 'question-circle-o',
                    title: '意见反馈',
                    path:'/menusNew/userManagement/feedback'
                },
                {
                    key: Enumeration.menusNewEnumeration.userManagementChild.avatarReview,
                    Icon: 'user',
                    title: '头像审核',
                    path:'/menusNew/userManagement/avatarReview'
                }
            ]
        },
        {
            key: Enumeration.menusNewEnumeration.applicationManagement,
            Icon: 'home',
            title: '应用管理',
            path:'/menusNew/applicationManagement',
            child: [{
                key: Enumeration.menusNewEnumeration.applicationManagementChild.meeting,
                Icon: 'home',
                title: '会议',
                path:'/menusNew/applicationManagement/meeting'
            },
                {
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.activity,
                    Icon: 'team',
                    title: '活动',
                    path:'/menusNew/applicationManagement/activity'
                },
                {
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.staffAttendance,
                    Icon: 'area-chart',
                    title: '员工考勤',
                    path:'/menusNew/applicationManagement/staffAttendance'
                },
                {
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.staffAttendanceNew,
                    Icon: 'area-chart',
                    title: '员工考勤new',
                    path:'/menusNew/applicationManagement/staffAttendanceNew'
                },
                {
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.punchLocation,
                    Icon: 'home',
                    title: '打卡地点',
                    path:'/menusNew/applicationManagement/punchLocation'
                }
                ,
                {
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.marketingCollege,
                    Icon: 'shopping-cart',
                    title: '营销学院',
                    path:'/menusNew/applicationManagement/marketingCollege'
                }
                ,
                {
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.researchData,
                    Icon: 'database',
                    title: '客研数据',
                    path:'/menusNew/applicationManagement/researchData'
                }
            ]
        },
        {
            key: Enumeration.menusNewEnumeration.tools,
            Icon: 'home',
            title: '工具',
            path:'/menusNew/tools',
            child: [{
                key: Enumeration.menusNewEnumeration.toolsChild.advertisingManagement,
                Icon: 'notification',
                title: '广告管理',
                path:'/menusNew/tools/advertisingManagement'
            },
                {
                    key: Enumeration.menusNewEnumeration.toolsChild.messageManagement,
                    Icon: 'mail',
                    title: '消息管理',
                    path:'/menusNew/tools/messageManagement'
                },
                {
                    key: Enumeration.menusNewEnumeration.toolsChild.versionManagement,
                    Icon: 'tags',
                    title: '版本管理',
                    path:'/menusNew/tools/versionManagement'
                },
                {
                    key: Enumeration.menusNewEnumeration.toolsChild.informationManagement,
                    Icon: 'calendar',
                    title: '咨询频道管理',
                    path:'/menusNew/tools/informationManagement'
                }
                ,
                {
                    key: Enumeration.menusNewEnumeration.toolsChild.workPassMenuManagement,
                    Icon: 'bars',
                    title: '工作通菜单管理',
                    path:'/menusNew/tools/workPassMenuManagement'
                },
                {
                    key: Enumeration.menusNewEnumeration.toolsChild.authorityManagement,
                    Icon: 'folder-add',
                    title: '权限管理',
                    path:'/menusNew/tools/authorityManagement'
                },
                {
                    key: Enumeration.menusNewEnumeration.toolsChild.operationLog,
                    Icon: 'copy',
                    title: '操作日志',
                    path:'/menusNew/tools/operationLog'
                }
            ]
        },
        {
            key: Enumeration.menusNewEnumeration.statistics,
            Icon: 'home',
            title: '统计',
            path:'/menusNew/statistics',
            child: [{
                key: Enumeration.menusNewEnumeration.statisticsChild.userBehaviorAnalysis,
                Icon: 'area-chart',
                title: '用户行为分析',
                path:'/menusNew/statistics/userBehaviorAnalysis'
            },
                {
                    key: Enumeration.menusNewEnumeration.statisticsChild.dataCenter,
                    Icon: 'database',
                    title: '数据中心',
                    path:'/menusNew/statistics/dataCenter'
                }
            ]
        },

    ],
    menus: [
        {
            key: Enumeration.menuEnumeration.useManage,
            Icon: 'team',
            Title: '用户管理'
        },
        {
            key: 'sub2',
            Icon: 'team',
            Title: '用户管理New',
            child: [{
                key: Enumeration.menuEnumeration.UseManageNewLIst,
                Icon: 'desktop',
                Title: '用户列表',
            },
                {
                    key: Enumeration.menuEnumeration.UseManageNewAdd,
                    Icon: 'desktop',
                    Title: '新增用户',
                }
            ]
        },
        {
            key: '3',
            Icon: 'area-chart',
            Title: '员工考勤'
        },
        {
            key: '4',
            Icon: 'area-chart',
            Title: '员工考勤new'
        },
        {
            key: '5',
            Icon: 'home',
            Title: '打卡地点'
        },
        {
            key: '6',
            Icon: 'pie-chart',
            Title: '用户行为分析'
        }, {
            key: '7',
            Icon: 'bars',
            Title: '工作菜单'
        },
        {
            key: '8',
            Icon: 'question-circle-o',
            Title: '意见反馈'
        },
        {
            key: '9',
            Icon: 'shopping-cart',
            Title: '营销学院'
        },
        {
            key: '10',
            Icon: 'user',
            Title: '用户头像'
        }, {
            key: '11',
            Icon: 'tags',
            Title: '版本管理'
        }, {
            key: '12',
            Icon: 'home',
            Title: '首页频道'
        }, {
            key: '13',
            Icon: 'notification',
            Title: '广告管理'
        }, {
            key: '14',
            Icon: 'mail',
            Title: '消息推送'
        },
        {
            key: '15',
            Icon: 'database',
            Title: '数据中心'
        },
    ]
}
