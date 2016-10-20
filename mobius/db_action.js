/**
 * Copyright (c) 2015, OCEAN
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products derived from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Created by ryeubi on 2015-10-19.
 */

var Pool = require('pg-pool');
var pg = require('pg');



//DB Pool 생성 
exports.pgconn = function (host, port, user, password, callback) {
	//Global 변수로 선언 
    pg_pool = new pg.Pool({
            host: 'xxx.xxx.xxx.xxx',
            database: 'mobiusdb',	//DB명 
            user: 'dbuser',
            password: 'dbpassword',
            port: 5432,
            ssl: false,
            max: 20,
            min: 1,						//최소로 유지할 컨넥션 갯수 
            idleTimeoutMillis: 1000		//
        });
    callback('1');
};


function executeQuery(query, callback) { 
    pg_pool.connect(function (err, client, done) {
        if (err) {	//DB 접속 오류 
        	console.log("Connection error : " + err);
            return callback(err, null);
        }
        client.query(query, function (err, result) {
        	done();		//pool 에 connection 반환 
		
            if (err) {	//쿼리 실행 오류 탐지용 로그
            	console.log("Query execute error : " + err + ", Query :: " + query);
                return callback(err, null);
            }
            return callback(null, result);
        })
    });
}
	

exports.getResult = function(query, db_Obj, callback) {
    if(pg_pool == null) {
        console.error("PostgreSQL is not connected");
        return '0';
    }
    executeQuery(query, function (err, rows) {
        if (!err) {
        	console.log(query);
            callback(null,rows);	//정상  
        }	
        else {
            callback(true,err);		//오류 
        }
    });
};

