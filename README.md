[English version]</BR>

# What is mobius-yt-pg?

The mobius-yt-pg is the changed part of Mobius Yellow Turtle(MYT) Version 2.1.2 to connect to PostgreSQL.</BR>
</BR>

# What is Mobius Yellow Turtle(MYT)?

Mobius Yellow Turtle(MYT) Version 2.1.2 is open source software of oneM2M-based IoT Server Platform developed with Node.js and javascript.</BR>
The source code and Install/Development guides are to be found on http://www.iotocean.org/main.</BR>
</BR>

# Why did we select MYT?

Now we are doing R&D with governmental subsidies from NIPA(National IT industry Promotion Agency, South Korea).</BR>
We are making integrated data platform using PostgreSQL, Bottledwater, Kafka, and Cloudera for IoT.</BR>
In the efforts we accepted MYT as application server.</BR>
</BR>

# What part of MYT did we change?

MYT uses MySQL as default DBMS.</BR>
We changed some part of the source code to connect with PostgreSQL.</BR>
The pg_module should be installed for connecting to PostgreSQL.</BR>
There are two ways to install pg_module.</BR>
First, use "npm install pg" command.</BR>
Second, write "pg": "^6.0.3" item in package.json of the source code of MYT and do install the package.</BR>
</BR>
The list of changed source(mobius-yt-pg) for PostgreSQL connection is as followings which we share on GitHub.</BR>
</BR>
mobius-yt-2.1.2/app.js</BR>
mobius-yt-2.1.2/mobius.js</BR>
mobius-yt-2.1.2/package.json</BR>
mobius-yt-2.1.2/pxymqtt.js</BR>
mobius-yt-2.1.2/mobius/cb.js</BR>
mobius-yt-2.1.2/mobius/db_action.js</BR>
mobius-yt-2.1.2/mobius/resource.js</BR>
mobius-yt-2.1.2/mobius/sql_actioin.js</BR>
mobius-yt-2.1.2/mobius/ts_agent.js</BR>
</BR>
The syntax of DMLs between MySQL and PostgreSQL is somewhat different, so there needs change of source code (mobius-yt-2.1.2/mobius/sql_actioin.js).</BR>


# How to apply this changes?

* Step 1 : Download the full source code of MYT Version 2.1.2 from www.iotocean.org
* Step 2 : Download the source code of mobius-yt-pg from this GibHub(github.com/kayform/mobius-yt-pg)
* Step 3 : Install MYT Version 2.1.2
* Step 4 : Install pg_module
* Step 5 : Overwrite mobius-yt-pg onto MYT along with the same paths.
* Step 6 : Run the Mobuis Server with the command "node mobius.js" (Refer to the install guide from www.iotocean.org)

If you run into problems for the MYT to connect to PostgreSQL, check function of connect or connection pool part of the source code.</BR>
</BR>
If you have any question, please contact ywlee@k4m.com which is the email of the developer.
</BR>
</BR>
</BR>

[Korean version]</BR>

# mobius-yt-pg

mobius Yellow Turtle(mobius-yt)은 oneM2M 표준에 기반한 IoT 서버 플랫폼으로서 Node.js와 Java Script의 두가지 버전으로 개발되었다.
IoT 데이터를 저장하기 위한 DBMS로서 MySQL을 기본적으로 사용하고 있으며, 본 프로젝트에서는 이 부분을 MySQL이 아닌 PostgreSQL과 연동하도록 수정하였다.
소스 버전은 node.js로 작성된 2.1.2버전을 대상으로 한다.
완전한 소스 및 설치/개발 가이드는 다음의 URL을 통하여 다운로드 할 수 있다.
http://www.iotocean.org/main/

PostgreSQL과의 연동을 위해서는 pg module의 설치가 필요하다.
npm install pg 명령을 통하여 설치할 수도 있지만 mobius-yt 소스에서 제공하는 package.json 파일에 "pg": "^6.0.3" 항목을 추가하여
mobius-yt 구동에 필요한 전체 모듈들과 함께 설치되도록 할 수도 있다.

이후로는 mysql과 pg의 connect 함수 및 conntion pool 생성 방법만을 고려하여 수정하면 원하는 작업을 할 수 있을 것이다.
mysql과 pg의 DML 문법이 다른 부분이 있어 수정이 필요하다 - mobius-yt-2.1.2/mobius/sql_actioin.js

수정된 항목은 다음과 같으며, 대상 파일들만을 공유하도록 한다.</BR>
mobius-yt-2.1.2/app.js</BR>
mobius-yt-2.1.2/mobius.js</BR>
mobius-yt-2.1.2/package.json</BR>
mobius-yt-2.1.2/pxymqtt.js</BR>
mobius-yt-2.1.2/mobius/cb.js</BR>
mobius-yt-2.1.2/mobius/db_action.js</BR>
mobius-yt-2.1.2/mobius/resource.js</BR>
mobius-yt-2.1.2/mobius/sql_actioin.js</BR>
mobius-yt-2.1.2/mobius/ts_agent.js</BR>
</BR>
활용하는 방법은 위 "How to apply this changes?"를 참조하면 된다.
</BR>
</BR>
궁금한 사항이 있으면 ywlee@k4m.com으로 문의하시기 바랍니다.
