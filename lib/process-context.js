
/**
 * 构建处理环境类
 * 
 * @inner
 * @constructor
 * @param {Object} options 初始化选项
 * @param {string} options.baseDir 构建基础目录
 * @param {Array.<string>} options.exclude 构建排除文件列表
 * @param {string} options.outputDir 构建输出目录
 */
function ProcessContext( options ) {
    this.files = {};
    this.baseDir = options.baseDir;
    this.exclude = options.exclude;
    this.outputDir = options.outputDir;
}

/**
 * 添加处理文件
 * 
 * @param {FileInfo} fileInfo 文件信息
 */
ProcessContext.prototype.addFile = function ( fileInfo ) {
    this.files[ fileInfo.path ] = fileInfo;
};

/**
 * 获取处理文件列表
 * 
 * @return {Array}
 */
ProcessContext.prototype.getFiles = function () {
    var files = this.files;
    var result = [];
    var keys = Object.keys( files );
    keys.forEach( function ( key ) {
        result.push( files[ key ] );
    } );

    return result;
};

/**
 * 根据路径获取处理文件
 * 
 * @param {string} path 路径
 * @return {FileInfo}
 */
ProcessContext.prototype.getFileByPath = function ( path ) {
    return this.files[ path ] || null;
};


module.exports = exports = ProcessContext;

