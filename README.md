Todo APP<br/>
Angular Frontend + Nestjs Backend<br/>
[Ссылка на видео](https://www.youtube.com/embed/QSb_DDaJmNM)<br/>
<br/>
Инструкция по выполнению урока:<br/>
Урок будет выполнен в несколько этапов.<br/>
- Создание проекта как можно быстрее
 цель - показать что Angular не уступает Vuejs & Reactjs
- Пошагово переделать полученный прототип в более гибкую архитектуру
SOLID и все дела там
<br/>
Шаги:
1) установить nestjs глобально (нужен npm, nodejs) <br/>
https://docs.nestjs.com/<br/>
npm i -g @nestjs/cli<br/>
<br/>
2) установить проект из репозитория (нужен git)<br/>
https://github.com/MaksymGrom/nest-todo-api<br/>
git clone https://github.com/MaksymGrom/nest-todo-api.git backend<br/>
<br/>
3) скопировать файл ormconfig.json.sample как ormconfig.json<br/>
указать свои настройки БД<br/>
<br/>
4) запустить сервер mysql я это делаю через xampp<br/>
<br/>
5) добавить новую БД и записать ее название в конфиг<br/>
<br/>
6) запустить в терминале<br/>
npm install<br/>
npm start<br/>
http://localhost:3000  - проект<br/>
http://localhost:3000/swagger  - документация<br/>
<br/>
7) создадим пару записей через swagger<br/>
<br/>
8) установим angular <br/>
npm install -g @angular/cli (если это твой первый раз;) )<br/>
ng new frontend<br/>
