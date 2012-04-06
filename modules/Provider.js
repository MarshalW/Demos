/**
 * Created by JetBrains WebStorm.
 * User: marshal
 * Date: 12-4-6
 * Time: 下午5:17
 * To change this template use File | Settings | File Templates.
 */

var Provider=function(){

};

Provider.prototype.delete=function(id,callback){
    console.log('delete document from Provider');
};

exports.Provider=Provider;

