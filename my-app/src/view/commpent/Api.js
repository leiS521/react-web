/**
 * Created  on 2018/8/3.
 * by leilei
 */
 let hostApi;
 //是开发环境还是测试环境。默认开发环境
 let IsDevelope=true;
if(IsDevelope){
     //开发环境
    hostApi='http://localhost:8081/api/'
}else{
    //生产环境
    hostApi='http://10.23.83.114:8081/api/'

}
export const Api={
    Login:hostApi+'Users/UserLogin',
    GetListPage:hostApi+'Users/GetListPage',//获取列表，以及搜索的接口
    DeleteUser:hostApi+'Users/Delete',//删除接口
    SaveUser:hostApi+'Users/SaveUser',//新增修改用户信息
}
