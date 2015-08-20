var api_client = require('../index.js');
var config={'host':'192.168.1.187','port':'9090','max':50,'min':10,'idleTimeoutMillis':30000,'connectionTimeOut':30000,'log':false};
api_client.createPool(config);


function repeat2(){
    api_client.getUserByEmail('301f158eda201594676be4e0941aa871',function (err,user) {
        if (err) {
            console.error(err);
        }
        console.log("getUserByEmail="+user);
    });
}


function repeat(){

    console.log("-------------repeat()-------");

//setInterval(repeat,3000);

api_client.getUserById("537af025f83e664215000024",function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUserById="+user);
});

var ids=['537abce67271c6800b000003','53912a6fdca1e5e233000001'];

api_client.getUserByIds(ids,function (err,userlist) {
    if (err) {
        console.error(err);
    }
    console.log("getUserByIds="+userlist);
});

api_client.getUserByName('301f158eda201594676be4e0941aa871',function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUserByName="+user);
});

api_client.getUserByDevId('c7db654464621b074d9c78997b8475c9',function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUserByDevId="+user);
});


var names=['301f158eda201594676be4e0941aa871'];
api_client.getUserByNames(names,function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUserByNames="+user);
});

api_client.getUserByLoginName('sRTTjF7e',function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUserByLoginName="+user);
});

api_client.getUserByMobile('15888838217',function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUserByMobile="+user);
});


api_client.getUserByEmail('301f158eda201594676be4e0941aa871',function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUserByEmail="+user);
});


queryjson="{'email':'301f158eda201594676be4e0941aa871'}";
api_client.getUsersByQuery(queryjson,function (err,userlist) {
    if (err) {
        console.error(err);
    }
    console.log("getUsersByQuery="+userlist);
});

api_client.getUsersByQueryWithOR(queryjson,function (err,user) {
    if (err) {
        console.error(err);
    }
    console.log("getUsersByQueryWithOR="+user);
});


userjson="{'_id':'55b9ef8ba7c84628f75fc25f','mobile':'15888838217','name':'maxjcs','loginname':'ddffffdfff'}";
api_client.save(userjson,function (err,user) {
    if (err) {
        console.log(err);
    }
    console.log("save="+user);
});

api_client.remove('537abce67271c6800b000003',function (err,success) {
    if (err) {
        console.log(err);
    }
    console.log("remove="+success);
});

}

setInterval(repeat,3000);

//setTimeout(repeat,5000);


//console.log(api_client);
//
//api_client.getUserById("537abce67271c6800b000003",function (parameters) {
//    var err = parameters.err;
//    var user = parameters.user;
//    if (err) {
//        return next(err);
//    }
//    console.log(user);
//});
