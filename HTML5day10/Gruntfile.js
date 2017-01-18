module.exports = function(grunt){
    //任务配置
    grunt.initConfig({
        //读取package.json信息
        pkg :grunt.file.readJSON("package.json")
    });
    //注册任务 (也就是在终端输入 grunt 后要执行的任务)
    grunt.registerTask("default",[]);
}