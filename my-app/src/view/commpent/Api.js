/**
 * Created  on 2018/8/3.
 * by leilei
 */
 let hostApi;
 //是开发环境还是测试环境。默认开发环境
 let IsDevelope=true;
let bigScreen;
if(IsDevelope){
     //开发环境

    hostApi='http://localhost:8081/api/'
    bigScreen='http://localhost:8091/'
}else{
    //生产环境
    hostApi='http://10.23.80.214:8081/api/'
    bigScreen='http://10.23.80.214:8091/'
}
export const Api={
    bigScreen:bigScreen,
    loginToken:hostApi+'Users/Login',
    Login:hostApi+'Users/UserLogin',//已经弃用
    GetUserInfor:hostApi+'Users/GetUserInfor',
    GetUserRoleMenu:hostApi+'Users/GetUserRoleMenu',


    GetListPage:hostApi+'Users/GetListPage',//获取列表，以及搜索的接口
    DeleteUser:hostApi+'Users/Delete',//删除接口

    SaveUser:hostApi+'Users/SaveUser',//新增修改用户信息
    SystemGetMenuList:hostApi+'System/GetMenuList',//获取系统菜单
    SystemSaveSystem:hostApi+'System/SaveSystem',
    SystemDelete:hostApi+'System/Delete',//删除菜单

    SaveRole:hostApi+'Role/SaveRole',//保存角色
    GetRoleList:hostApi+'Role/GetRoleList',//获取角色列表
    DeleteRole:hostApi+'Role/DeleteRole',//删除角色
    GetRoleFunction:hostApi+'Role/GetRoleFunction',//获取当前角色功能关系
    SaveUserRole:hostApi+'Role/SaveUserRole',//保存用户权限
    GetUserRole:hostApi+'Role/GetUserRole',//保存用户权限

    GetLogList:hostApi+'Log/GetLogList',//获取用户的日志
    LogDelete:hostApi+'Log/LogDelete',//删除日志
    LogDeleteByMonth:hostApi+'Log/LogDeleteByMonth',//删除日志
    getChatByDate:hostApi+'Log/getChatByDate',//删除日志




    SaveImage:hostApi+'ShareFile/SaveImage',//保存图片
    GetImageList:hostApi+'ShareFile/GetListPage',//获取图片列表
    Delete:hostApi+'ShareFile/Delete',//删除图片
    UploadFile:hostApi+'ShareFile/UploadFile',//保存文件
    ShareFileImpotExcel:hostApi+'ShareFile/ShareFileImpotExcel',//保存文件

    SeachBigScreenList:hostApi+'BigScreen/SeachBigScreenList',//获取列表
    SaveBigScreen:hostApi+'BigScreen/SaveBigScreen',//保存大屏
    DeleteBigScreen:hostApi+'BigScreen/DeleteBigScreen',//删除大屏
    SettingBigScreen:hostApi+'BigScreen/SettingBigScreen',//保存大屏设置
    GetBigScreenSettingList:hostApi+'BigScreen/GetBigScreenSettingList',//获取大屏设置列表
    DeleteBigScreenSetting:hostApi+'BigScreen/DeleteBigScreenSetting',//获取大屏设置列表


}
