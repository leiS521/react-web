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
            child: [{parentKey:Enumeration.menusNewEnumeration.userManagement,
                key: Enumeration.menusNewEnumeration.userManagementChild.accountManagement,
                Icon: 'book',
                title: '账户管理',
                path:'/menusNew/userManagement/accountManagement'
            },
                {parentKey:Enumeration.menusNewEnumeration.userManagement,
                    key: Enumeration.menusNewEnumeration.userManagementChild.menuManage,
                    Icon: 'team',
                    title: '功能管理',
                    path:'/menusNew/userManagement/menuManage'
                },
                {parentKey:Enumeration.menusNewEnumeration.userManagement,
                    key: Enumeration.menusNewEnumeration.userManagementChild.roleManagement,
                    Icon: 'user',
                    title: '角色管理',
                    path:'/menusNew/userManagement/roleManagement'
                },
                {parentKey:Enumeration.menusNewEnumeration.userManagement,
                    key: Enumeration.menusNewEnumeration.userManagementChild.operationLog,
                    Icon: 'message',
                    title: '操作日志',
                    path:'/menusNew/userManagement/operationLog'
                },

            ]
        },
        {
            key: Enumeration.menusNewEnumeration.applicationManagement,
            Icon: 'home',
            title: '应用管理',
            path:'/menusNew/applicationManagement',
            child: [{parentKey:Enumeration.menusNewEnumeration.applicationManagement,
                key: Enumeration.menusNewEnumeration.applicationManagementChild.UploadFile,
                Icon: 'cloud-upload',
                title: '上传照片',
                path:'/menusNew/applicationManagement/UploadFile'
            },
                {parentKey:Enumeration.menusNewEnumeration.applicationManagement,
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.edit,
                    Icon: 'edit',
                    title: '编辑器',
                    path:'/menusNew/applicationManagement/edit'
                },
                {parentKey:Enumeration.menusNewEnumeration.applicationManagement,
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.menuManages,
                    Icon: 'setting',
                    title: '三级菜单',
                    path:'/menusNew/applicationManagement/menuManages'
                },
                {parentKey:Enumeration.menusNewEnumeration.applicationManagement,
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.Seats,
                    Icon: 'laptop',
                    title: '座位安排',
                    path:'/menusNew/applicationManagement/punchLocation',
                    child:[
                        {title:'员工考勤'},
                        {title:'打卡地点'},
                        {title:'打卡单元管理'}
                    ]
                }
                ,
                {parentKey:Enumeration.menusNewEnumeration.applicationManagement,
                    key: Enumeration.menusNewEnumeration.applicationManagementChild.marketingCollege,
                    Icon: 'shopping-cart',
                    title: '营销学院',
                    path:'/menusNew/applicationManagement/marketingCollege'
                }
                ,
                {parentKey:Enumeration.menusNewEnumeration.applicationManagement,
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
            child: [{parentKey:Enumeration.menusNewEnumeration.tools,
                key: Enumeration.menusNewEnumeration.toolsChild.advertisingManagement,
                Icon: 'notification',
                title: '广告管理',
                path:'/menusNew/tools/advertisingManagement'
            },
                {parentKey:Enumeration.menusNewEnumeration.tools,
                    key: Enumeration.menusNewEnumeration.toolsChild.messageManagement,
                    Icon: 'mail',
                    title: '消息管理',
                    path:'/menusNew/tools/messageManagement'
                },
                {parentKey:Enumeration.menusNewEnumeration.tools,
                    key: Enumeration.menusNewEnumeration.toolsChild.versionManagement,
                    Icon: 'tags',
                    title: '版本管理',
                    path:'/menusNew/tools/versionManagement'
                },
                {parentKey:Enumeration.menusNewEnumeration.tools,
                    key: Enumeration.menusNewEnumeration.toolsChild.informationManagement,
                    Icon: 'calendar',
                    title: '咨询频道管理',
                    path:'/menusNew/tools/informationManagement'
                }
                ,
                {parentKey:Enumeration.menusNewEnumeration.tools,
                    key: Enumeration.menusNewEnumeration.toolsChild.workPassMenuManagement,
                    Icon: 'bars',
                    title: '工作通菜单管理',
                    path:'/menusNew/tools/workPassMenuManagement'
                }

            ]
        },
        {
            key: Enumeration.menusNewEnumeration.statistics,
            Icon: 'home',
            title: '统计',
            path:'/menusNew/statistics',
            child: [
                {
                    key: Enumeration.menusNewEnumeration.statisticsChild.dataCenter,
                    Icon: 'database',
                    title: '数据中心',
                    path:'/menusNew/statistics/dataCenter'
                }
            ]
        },

    ],

}
