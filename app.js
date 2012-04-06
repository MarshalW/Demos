/**
 * Created by JetBrains WebStorm.
 * User: marshal
 * Date: 12-4-6
 * Time: 下午3:40
 * To change this template use File | Settings | File Templates.
 */

require('./modules/Config');
var _und = require('underscore')._;

var PersonProvider=require('./modules/PersonProvider').PersonProvider;
var personProvider=new PersonProvider();
personProvider.delete('id',null);
