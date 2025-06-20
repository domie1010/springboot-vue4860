const base = {
    get() {
        return {
            url : "http://localhost:8080/lvyouguanlixitong/",
            name: "lvyouguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lvyouguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "旅游管理系统"
        } 
    }
}
export default base
