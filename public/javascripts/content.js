$.ajax({    url:  'localhost:8001/message', // 跳转到后台的url  问号后边可以带参数    
                type: 'get',    // 连接的方式，一般是 post和get    
                dataType: 'json',   // 数据返回的格式    
                success: function (data) {  // 成功之后  后台传回的数据        
                    console.log(data)    
                },    
                fail: function (err) {      // 失败时候的信息提示        
                    console.log(err)    
                }
            }
        );