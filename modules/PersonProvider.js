/**
 * Created by JetBrains WebStorm.
 * User: marshal
 * Date: 12-4-6
 * Time: 下午4:37
 * To change this template use File | Settings | File Templates.
 */

var Provider=require('./Provider').Provider,
    util=require('util');

var PersonProvider=function(){
    console.log('mongodb host:'+global.mongodbHost);
};

util.inherits(PersonProvider,Provider);

Provider.prototype.delete=function(id,callback){
    console.log('delete document from PersonProvider');
};

exports.PersonProvider=PersonProvider;

