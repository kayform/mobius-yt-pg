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
mobius-yt-2.1.2/mobius/cb.js</BR>
mobius-yt-2.1.2/mobius/db_action.js</BR>
mobius-yt-2.1.2/mobius/resource.js</BR>
mobius-yt-2.1.2/mobius/sql_actioin.js</BR>
mobius-yt-2.1.2/mobius/ts_agent.js</BR>
