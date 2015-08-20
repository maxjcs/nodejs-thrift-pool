/**
 * Created by maxjcs on 15/3/6.
 */
var thrift = require('thrift');
var assert = require('assert');
var poolModule = require('./lib/thrift-pool');
//导入thrift生成的js文件
UserService = require('./gen/UserService.js');
user_ttypes = require('./gen/user_types.js');
DictService = require('./gen/DictService.js');
dict_ttypes = require('./gen/dict_types.js');

var result={}
result.userService=UserService;
result.dictServvice=DictService;

//非阻塞传输
var transport =  thrift.TFramedTransport;
//二进制协议
var protocol = thrift.TBinaryProtocol;

var options = {
    transport: transport,
    protocol: protocol
};

module.exports ={
    "createPool" : function (config){
        pool = poolModule.Pool({
            name: 'thriftpool',
            create: function (callback) {
                try {
                    var connection = thrift.createConnection(config.host, config.port, options);
                    connection.on("error", function(err) {
                        console.error(err);
                        connection.end();
                    });
                    callback(null, connection);
                }catch(err){
                    console.log(err);
                }
            },
            destroy: function (connection) {
                try{
                    //console.log("---connection.end()---")
                    connection.end();
                }catch(err){
                    console.error(err);
                }
            },
            max: config.max,
            min: config.min,
            idleTimeoutMillis: config.idleTimeoutMillis || 300000,
            log: config.log || false,
            reapInterval:config.reapInterval || 300000
        });
        //console.log(" ---pool create success!--");
    },
    "getUserById": function (id, callback) {
        if (id.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserById(id, function (err, user) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, user);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUserByIds":function (ids, callback) {
        if (ids.length === 0) {
            return callback(null, []);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserByIds(ids, function (err, userlist) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, userlist);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUserByName":function (name, callback) {
        if (name.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserByName(name, function (err, user) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, user);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUserByDevId":function (devId, callback) {
        if (devId.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserByDevId(devId, function (err, user) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, user);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUserByNames":function (names, callback) {
        if (names.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserByNames(names, function (err, userlist) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, userlist);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUserByLoginName":function (loginname, callback) {
        if (loginname.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserByLoginName(loginname, function (err, user) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, user);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUserByMobile":function (mobile, callback) {
        if (mobile.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserByMobile(mobile, function (err, user) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, user);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUserByEmail":function (email, callback) {
        if (email.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUserByEmail(email, function (err, user) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, user);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUsersByQuery":function (queryjson, callback) {
        if (queryjson.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUsersByQuery(queryjson, function (err, userlist) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, userlist);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "getUsersByQueryWithOR":function (queryjson, callback) {
        if (queryjson.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).getUsersByQueryWithOR(queryjson, function (err, userlist) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, userlist);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "save":function (userjson, callback) {
        if (userjson.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).save(userjson, function (err, success) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, success);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    },
    "remove":function (userid, callback) {

        if (userid.length === 0) {
            return callback(null, null);
        }
        try{
            pool.acquire(function (err, connection) {
                getClient(connection).remove(userid, function (err, success) {
                    releasePool(connection);
                    if(err){
                        callback(err, null);
                    }else{
                        callback(null, success);
                    }
                });
            });
        }catch(err){
            console.log(err);
        }
    }
}

/**
 * 释放connection
 * @param connection
 */
function releasePool(connection){
    try{
        pool.release(connection);
    }catch(err){
        console.log(err);
    }
}

/**
 * 获取connection
 */
function getClient(connection){
    var mp = new thrift.Multiplexer();
    var client = mp.createClient("UserService", UserService, connection);
    pool.pushUsingObjects(connection);
    return client;
}



