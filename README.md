Todo APP
Angular Frontend + Nestjs Backend
[Ссылка на видео](https://www.youtube.com/embed/QSb_DDaJmNM)

Инструкция по выполнению урока:
Урок будет выполнен в несколько этапов.
- Создание проекта как можно быстрее
 цель - показать что Angular не уступает Vuejs & Reactjs
- Пошагово переделать полученный прототип в более гибкую архитектуру
SOLID и все дела там

Шаги:
1) установить nestjs глобально (нужен npm, nodejs)
https://docs.nestjs.com/
npm i -g @nestjs/cli

2) установить проект из репозитория (нужен git)
https://github.com/MaksymGrom/nest-todo-api
git clone https://github.com/MaksymGrom/nest-todo-api.git backend

3) скопировать файл ormconfig.json.sample как ormconfig.json
указать свои настройки БД

4) запустить сервер mysql я это делаю через xampp

5) добавить новую БД и записать ее название в конфиг

6) запустить в терминале
npm install
npm start
http://localhost:3000  - проект
http://localhost:3000/swagger  - документация

7) создадим пару записей через swagger

8) установим angular 
npm install -g @angular/cli (если это твой первый раз;) )
ng new frontend
