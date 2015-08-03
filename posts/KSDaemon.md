# KSDaemon

_02 августа 2015_

## Понедельник <small>76 твитов</small>

Всем привет! На этой неделе ведущим буду я, <a href="https://twitter.com/KSDaemon" title="Konstantin Burkalev">@KSDaemon</a>, разработчик, архитектор, Oracle OCP, подкастер, активный участник разных сообществ.

Предлагаю на неделе обсудить архитектурные вопросы, open source, вопросы получения информации через подкасты, конференции, сообщества.

Поскольку я живу на стыке frontend&lt;=&gt;backend, интересно обсудить вопросы взаимодействия, коммуникаций, технологии обмена данными и прочее.

Не стесняйтесь задавать интересующие вас вопросы! Ну что, погнали!

Для разогрева, предлагаю начать неделю с новостей. Как и откуда вы черпаете новую информацию? Если раньше её не хватало, то сейчас слишком

Для себя я остановился на твиттере, как основном источнике инф-ции. Читаю многих разработчиков и активных ИТ деятелей. На блоги нет времени.

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> фолловлю в твиттере кучу разного народа, в ленте как правило все что нужно пролетает:)

Да,у всех есть тви.И даже у интересных блогов. Короткий заголовок легко и быстро прочитать, если зацепило — перешел, прочитал статью целиком

А как вы относитесь к восприятию аудио-информации? ;) Например, подкастам? Кстати, я (со)автор двух подкастов: SDCast &amp; RadioJS.

RT <a href="https://twitter.com/fat0troll" title="Valdos Sine">@fat0troll</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> читаю ЛОР, твиттер, хабр (и отпочковавшиеся от него ресурсы). RSS с подписками на англоязычные ресурсы не при…

.<a href="https://twitter.com/fat0troll" title="Valdos Sine">@fat0troll</a> фрагментация хабра, имхо, не дала какого-то положительного эффекта. Да и все меньше и меньше там интересного проскакивает…

Вот сейчас появилось много разных чатиков (gitter/slack/и тд). Но мне всегда было больно от того, что нужно миллион приложений.

Всегда мечтал об одном приложении для всех чатов :) И вот услышал про sameroom.io от создателей kato im. Кто-нибудь пробовал?

RT <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> но большинство подкастов водой болтовни ни о чем заливает, при этом длина выпуска растет

.<a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> Да есть такое. Поэтому вопрос: какой формат/длина подкастов вам наиболее интересны?

В продолжение темы подкастов. Судя по ответам, никто не любит выпуски &gt;часа. Я, кстати, тоже :) но это не всегда получается.

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> короткие выпуски могут быть только новостными. В них не поместятся дискуссии и интервью.

“<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>:что посоветуешь начинающим подкастерам?” Главное - желание,приличный звук,хороший контент! Остальное-мелочи. Могу подсказать

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Для меня «идеальным» подкастом было «Свободное радио Компьюлента» (<a href="http://t.co/Gmpq9ELeZ1">compulenta.podster.fm/511</a>), 10—15 объёмистых ста…

“<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: Хороший подкаст часа на 2-2.5 - это очень ок.” Если интересная дискуссия - да. Но все же это редкость, и можно разбить на два

Завершая тему подкастов: мне кажется,это интересный инфоканал.И радует,что их стало больше,интересных и качественных.Слушайте и записывайте!

Давайте поговорим про OSS. Был вопрос про мое отношение, вклад и будущее.

Open Source — это интересная концепция, и я положительно к нему отношусь. Но не все так просто, как про это обычно говорят →

Всегда говорится, что мол если что-то не так, возьми форкни и вперед. Все так, но только у проекта всегда есть лидер, идеолог, двигатель →

И если его не будет,скорее всего проект просто загнется.

Было интересное исследование на эту тему:оценка bus factor для open-source проектов <a href="http://t.co/8udtQI3Sts">lwn.net/Articles/65136…</a> посмотрите на числа — это единицы

У меня тоже есть несколько небольших проектов на github’е. Они так или иначе касаются WAMP. Это такой протокол с Pub/Sub и RPC.

Активно участвую в разработке самого протокола. Кстати, делал про него доклад на одном из <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a>. Вот презенташка <a href="http://t.co/5Zsr9Fcxdw">blog.ksdaemon.ru/2014/09/para-s…</a>

+ написал несколько реализаций WAMPа на JavaScript (Wampy.js), Nginx/LUA (Wiola) и Pure LUA (Loowy) которые поддерживаю и развиваю

И само собой делаю PR в проекты,которые сам использую.В этом свете вопрос: контрибьютите ли вы в используемые проекты? Bugfix, new features?

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: я нахожу баги. Сообщение о баге считается вкладом в OS?” Если он правильно оформлен — да. Но еще лучше,сразу PR с исправлением!

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: не всегда это возможно. Например, программа на С, а человек глубокий ПХПшник.” Да, бывает. Тогда надо сообщить о проблеме!

Кстати, если интересно, могу рассказать пару слов про WAMP.

RT <a href="https://twitter.com/serebro" title="Sergey">@serebro</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> одно время слушал radiojs но отписался из-за низкой концентрации информации. В слушаемых остались ctocast и rad…

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> Хммм,интересно. В RadioJS мы как раз обсуждаем новости по большей части, даже если зовем гостей. Чего не хватает? Спасиб за мнение

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> и да, почему в этом списке нет SDCast’а!? :)

WAMP (WebSocket Application Messaging Protocol, <a href="http://t.co/cJFEbN7KtY">wamp.ws</a>) легкий протокол, изначально поверх websocket, но уже можно и raw →

→ в нем из коробки есть Pub/Sub и RPC. В нем несколько слоев, что позволяет использовать разный транспорт или энкодеры (JSON, msgpack) →

→ сам по себе протокол довольно прост, и уже есть реализации на многих языках, в том числе пара моих: JS клиент для браузера, LUA клиент →

→ и WAMP Router на базе Nginx и модуля LUA.

.<a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> не, это старье судя по всему, еще v1. Актуальные реализации всегда тут: <a href="http://t.co/qEcVTYZlrO">wamp.ws/implementation…</a> и да, что-то там не видно Ruby

“<a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> * задумался об опен сорс проекте...” Да-да! Отличный повод! ;) Готов проконсультировать по WAMP’у !

Кстати, про OSS: для любого проекта, потенциально интересного сообществу очень важно иметь хорошую документацию c описанием API,интерфейсов

И вариант, что «у меня код самодокументированный» — не работает. Первое, что видишь заходя на стр проекта — это его описание, aka README →

И если автор не удосужился потратить время на описание проекта, показать пример использования, я не буду его смотреть и в код не полезу.

Другое дело, что даже наличие хорошей документации, не означает качественную реализацию. Но тут как раз можно и в код глянуть.

Github, кстати, в плане развития OSS сделал большое дело! Все реже и реже можно встретить разработчиков, которые не знают что такое VCS.

То есть общий уровень подготовки разработчиков стал выше. И это здорово!

Кстати о LUA.Кажется тут не было любителей этого языка :) Мне оч нравится идея использования таких легких и быстрых языков на APP-серверах

Та же связка Nginx и LUA позволяет на начальной фазе запроса сделать какие-то проверки,скорректировать роутинг и прочее, не проксируя запрос

В этом плане так же интересен Tarantool, который и БД и APP-сервер одновременно. Но данные рядом и их легко можно достать. А вы что думаете?

“<a href="https://twitter.com/iamale_ru" title="Эль">@iamale_ru</a>: Как насчёт luvit.io?” Да, интересный проект Тима Касвела. Посматриваю, но пока не дошли руки попробовать.

“<a href="https://twitter.com/iamale_ru" title="Эль">@iamale_ru</a>: Как насчёт luvit.io?” →но пока что мне достаточно LUA модуля для Nginx,даже если это не просто обработка запросов

Кстати,есть еще язык Terra, который интероперабелен с LUA, но со статической типизацией и ручным управлением памятью. <a href="http://t.co/7tfZlgJtga">terralang.org</a>

Что-то к вечеру все стихли… Давайте завтра поговорим про процесс разработки, взаимодействие и коммуникации.

А пока вот вам список подкастов, которые я слушаю: <a href="https://t.co/K8lFg1syM9">gist.github.com/KSDaemon/1d3c4…</a>

“<a href="https://twitter.com/kspitfire7" title="Kirill Alexeev">@kspitfire7</a>: TAOP и ТиП Звука же уже всё?” Нуу может быть и все. Хотя иногда еще в TAOP что-то проскакивает, поэтому я не удаляю пока :)

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Как думаешь, дёргать публикацию в Push Stream в nginx через LUA напрямую (без http-запросов) из RabbitMQ — это х…

.<a href="https://twitter.com/subzey" title="subzey">@subzey</a> если ты имеешь в виду, сразу пушить в стрим, а не через отправку в очередь — то конечно да! Или я что-то не так понял, скажи.

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> а примеры крутых репозиториев накидать можешь? :)

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> да таких полно. В python asyncio отличная докуменатция и примеры (кстати, мы обсуждали это с Андреем Светловым)

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> openresty/lua-nginx-module, да и свои проекты я старался оформлять как следует.

.<a href="https://twitter.com/subzey" title="subzey">@subzey</a> такс сложно сказать по одному приложению. Попробуй обрисовать всю картину, тогда можно посмотреть и понять :)

RT <a href="https://twitter.com/alexfinn_eu" title="alexfinn">@alexfinn_eu</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> советы по написанию документации: <a href="http://t.co/C3h2vqGgDe">stevelosh.com/blog/2013/09/t…</a>

.<a href="https://twitter.com/subzey" title="subzey">@subzey</a> кажется, в твоем случае, брать сообщения из AMQP прямо в LUA/Nginx — должно быть гуд. Но все же, lua работает в контексте запроса.

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: В OSS кроме readme надо писать тесты! Тесты, КАРЛ! <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

.<a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> да, тесты крайне важны! Никому не хочется юзать либу, которая не покрыта тестами. Здесь важно, чтобы тесты полными

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> можно подумать, что не в опенсорс-проектах тесты не нужны

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> кажется НЕ в опенсорс мире, на тесты почти никогда не остается времени…

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> поэтому главное правило OSS: будь монополистом с офигенной документацией :D

Кстати,в контексте OSS: а вы обращаете внимание на лицензии используемых либ/фреймворков?Соблюдаете условия лицензирования? Или взяли и все?

RT <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> иногда. Один раз по просьбе юристов генерил списки лицензий всех гемов, бовер и нпм пакетов, что используются …

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a> GPL на сервере - не проблема в 95% случаев, +4% проблем решаются сменой текста контракта.

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a> если у вас какой-то веб-сервис,да — ок.А если вы выпускаете какие-то железки с софтом? Все становится немного сложнее

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a> да я ж ретвитнул вообще :)

“<a href="https://twitter.com/paaleksey" title="Aleksey Palazhchenko">@paaleksey</a>: А как разработчик бэкенда связан с железками?” я ж архитектор) И один из наших проектов — это программно-аппаратный комплекс.

## Вторник <small>46 твитов</small>

Доброе утро, товарищи! Ой, или какое там у вас время суток!) Давайте сегодня поговорим о разработке, коммуникациях и взаимодействиях.

для начала только отвечу на оставшиеся вопросы.

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> основная область применения WAMP’а как я вижу и знаю — это IoT.

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> Тобиас <a href="https://twitter.com/oberstet" title="Tobias Oberstein">@oberstet</a> Оберштейн (автор wamp) запускает python wamp router (crossbar.io) на RaspberryPI и подключает всякое

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> я в одном своем проекте так же строю на базе WAMPа коммуникации между конечными устройствами и сервером.

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> и еще одно, как мне кажется, удачное применение WAMP — это оповещения о изменениях в многопользовательской среде

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> пример: есть админка, пара админов зашли и хотят поменять инфу одного и того же юзверя. →

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> → Админка при заходе на стр. юзверя подписывается на соотв. канал. И в случае изменений — получает уведомления. →

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> → ну и сами задачи изменения данных легко можно превратить в вызов RPC и тем самым вообще абстрагироваться от бэкенда.

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> как то отказался от джиквери плагинчика, который был под под лицензией некоммерческого использования

.<a href="https://twitter.com/serebro" title="Sergey">@serebro</a> по wamp есть новости на wamp.ws, неско заметок у меня в блоге (нет времени написать еще) и <a href="https://t.co/VqmYql6WKb">groups.google.com/forum/#!forum/…</a>

Мне оч нравится идея использовать WAMP как основу композитных SOA-приложений. SOAP/WSDL—слишком тяжелые.Писал про это <a href="http://t.co/g7ytQbZdxu">blog.ksdaemon.ru/2015/02/wamp-k…</a>

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> как у тебя хватает сил и времени на всё? и OS и 2 подкаста, а ещё работа и личная жизнь...

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> о да! Сам удивляюсь. На все, что кроме работы и семьи, остается немного времени перед сном, когда все легли спать.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> поэтому свои проектики я пилю по ночам, последнее время, правда, реже и меньше :( но как минимум пишу тестики, PR, доки и пр.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> с подкастами все сложнее, потому что надо: а) найти гостей б) договориться в) записаться д) обработать и е) выложить.

. <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> и, конечно же, самая большая проблема — это найти удобное время для записи всех участников. Приходится идти на компромиссы :)

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Что делаешь когда "ничего не идёт" ака "тупняк"?

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> да,это нормально.В таких случаях я переключаюсь на какую-то механическую работу,та же документация или какие-то админские задачи

“<a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: интероперабельность это больше, чем совместимость?” Мне кажется в данном случае, это примерно одно.

.<a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> тут смысл в том, что в одном скрипте можешь юзать и то и другое. +Как они пишут, можно на LUA метапрограммировать функции Terra

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: так самому спать тоже надо!” Вот именно поэтому мало времени и я не сижу до утра %) хотя иногда бывает…

Кстати, у меня вопрос: а вы програмируете что-то дома, для себя? С недоверием отношусь к людям, которые прогят только на работе.

Согласен с высказыванием <a href="https://twitter.com/bobuk" title="bobuk">@bobuk</a>: индикатор наличия творчества в профессии разработчика - если ты все еще программируешь вне работы

RT <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> а у меня наоборот, вопросы к тем, кто не разделяет работу и отдых. Вы как там, не на грани перегорания и…

.<a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a> ой, вот у меня с этим точно проблем нет, потому как: 1) Личные проекты отличаются от рабочих,2) можно применять новые тех.

.<a href="https://twitter.com/chemikadze" title="Nick Sokolov">@chemikadze</a> это не важно, важно что ты читаешь, изучаешь, думаешь, мечтаешь, и в итоге делаешь (хоть и мало в силу разных причин)

RT <a href="https://twitter.com/Alprogius" title="Alexander Tuzhik">@Alprogius</a>: <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Геймдев для себя — главная страсть в жизни. Другие виды отдыха уже по вкусу. А работа близкая…

“<a href="https://twitter.com/VovanR" title="Vladimir Rodkin">@VovanR</a>: было время и на работе и дома прогал не для себя =)” Лучше наоборот %) Все время для себя!)

RT <a href="https://twitter.com/scaint" title="Eugene">@scaint</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> без этого никак! Нужно же поиграться с новыми технологиями, запилить небольшой проект "для души" или что-то авто…

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, плагинчики под WordPress доставляют особое удовольствие. И денег приносят бонусом :-D

Тут спрашивают, кого из разработчиков “must follow” в тви… Попробую назвать несколько имен…

enDevs которых я читаю: <a href="https://twitter.com/rauschma" title="Axel Rauschmayer">@rauschma</a> <a href="https://twitter.com/weaverryan" title="Ryan Weaver">@weaverryan</a> <a href="https://twitter.com/creationix" title="Tim Caswell">@creationix</a> <a href="https://twitter.com/agentzh" title="agentzh">@agentzh</a> <a href="https://twitter.com/fabpot" title="Fabien Potencier">@fabpot</a> <a href="https://twitter.com/addyosmani" title="Addy Osmani">@addyosmani</a> <a href="https://twitter.com/AriyaHidayat" title="Ariya Hidayat">@AriyaHidayat</a> <a href="https://twitter.com/igrigorik" title="Ilya Grigorik">@igrigorik</a> <a href="https://twitter.com/gvanrossum" title="Guido van Rossum">@gvanrossum</a> <a href="https://twitter.com/spolsky" title="Joel Spolsky">@spolsky</a> →

enDevs которых я читаю: <a href="https://twitter.com/wycats" title="Yehuda Katz">@wycats</a> <a href="https://twitter.com/__DavidFlanagan" title="David Flanagan">@__DavidFlanagan</a> <a href="https://twitter.com/paul_irish" title="Paul Irish">@paul_irish</a> <a href="https://twitter.com/WebReflection" title="Andrea Giammarchi">@WebReflection</a> <a href="https://twitter.com/stoyanstefanov" title="Stoyan Stefanov">@stoyanstefanov</a> <a href="https://twitter.com/ppk" title="Peter-Paul Koch">@ppk</a> <a href="https://twitter.com/slicknet" title="Nicholas C. Zakas">@slicknet</a> <a href="https://twitter.com/Souders" title="Steve Souders">@Souders</a>

ruDevs,которых я читаю: <a href="https://twitter.com/DmitryBaranovsk" title="Dmitry Baranovskiy">@DmitryBaranovsk</a> <a href="https://twitter.com/AntonShevchuk" title="Anton Shevchuk">@AntonShevchuk</a> <a href="https://twitter.com/sam_dark" title="Alexander Makarov">@sam_dark</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/rdvornov" title="Roman Dvornov">@rdvornov</a> <a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a> <a href="https://twitter.com/lisachenko" title="Alexander Lisachenko">@lisachenko</a> <a href="https://twitter.com/dshevchenko_biz" title="Denis Shevchenko">@dshevchenko_biz</a> <a href="https://twitter.com/sergeybelove" title="Sergey Belov">@sergeybelove</a>

на самом деле этот список можно продолжать долго) вплоть до 276 пунктов))

Конечно же там есть <a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a> и <a href="https://twitter.com/bashmish" title="Misha Bashkirov">@bashmish</a> (с кем мы делаем <a href="https://twitter.com/RadioJSPodcast" title="RadioJS Podcast">@RadioJSPodcast</a> и <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a>) и <a href="https://twitter.com/jekill" title="Eugeny Fomin">@jekill</a> (c кем мы делаем <a href="https://twitter.com/SymfoniacsMsk" title="Symfoniacs Moscow">@SymfoniacsMsk</a>)

Вы вот мне лучше скажите, вы участвуете в каких-то сообществах? Не в тви почитать,а реально! Встречу/конфу сделать, помочь советом и прочее.

“<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: пока провожу неформальные встречи в рамках <a href="http://t.co/J0yX0LdLVS">moscow-rb.org</a>.
В будущем хотелось бы более техн встречи делать” Круто!

“<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: заметил странную особенность: все хотят неформального общения, но мало кто ходит :D” Все любят языком потрепать, а не делом

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> главное, что все же есть активисты, которые приходят и участвуют!

“<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: а сам не думал проводить какие-то реальные встречи?” Я чуть раньше писал, что организую <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> и <a href="https://twitter.com/SymfoniacsMsk" title="Symfoniacs Moscow">@SymfoniacsMsk</a> ;)

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> Ну на самом деле,основной двигатель <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> — это <a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a> :) Но ты приходи в гости, пообщаемся, поделимся чего да как

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> а из советов: не опускать руки, найти единомышленников, собираться, делать доклады, расширять сообщество.

“<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> <a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a> я вот 30го числа к вам хочу зайти как раз :)” Будем рады!

Да, чего-то мы сегодня так и не добрались до процессов разработки! Завтра с утра и начнем обсуждать! :)

## Среда <small>129 твитов</small>

Такс, давайте все же поговорим про процесс разработки и сопутствующие вопросы. Каким по вашему должен быть идеальный workflow? Методологии?

Сейчас эра гибких методологий. Но многие ли из вас строго следуют какой-то одной? ;) расскажу про себя сейчас.

У нас вотерфолл в долгосрочной перспективе и что-то эджайлоподобное на ближайший месяц/два с недельными итерациями и ежедневными стендапами

После внедрения стендапов - явно ощутили плюс: народу пришлось общаться :) и многие проблемы взаимодействия обсуждались на ранней стадии

Но даже стендапы не решают на 100% проблем взаимодействия.

По большому счету, все разработчики живут в своих мирках и большинству нет дела до всех остальных. Сейчас поясню.

Например:есть сишный сервис.Ему потребовалась бд.Дев взял и завел себе sqlite’тик,а про осн бд системы он и не думал. Итог: задвоение данных

Или еще хороший пример: деву сервиса удобно хранить  все данные в JSON в одном поле в табличке. Но с этими данными работают другие модули -&gt;

-&gt; и им нужна фильтрация, поиск. И тут json уже не удобен. Но дев сервиса про это не знает. Результат: переделка, доп время и ресурсы.

Вы скажете “Ты ж архитектор! Вот и решай!” Но я скажу, что не возможно спускаться на такой низкий уровень, иначе просто не хватит времени!

Еще пример: есть web-клиент,Win-клиент,пара сишных сервисов. Все работают с одними данными. Но: .NET удобно 10 курсоров из одной хранимки →

→ веб юзает какую-ньть Doctrine, и генерит запрос сам. Сишным сервисам удобно вызывать одну хранимку с одним result-set’ом. →

Вопрос: как БДшнику грамотно организовать хранение данных в БД и угодить всем? %)

Вот <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> выбирает методологию от проекта.Но я бы сказал,что все же от команды проекта. Это важно, потому что люди должны быть подготовлены

А <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> любит каскадную модель. Но в ней большой риск не попадания в сроки и отклонения в сторону от реальных потребностей.

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, каждый в праве выбирать инструменты, какими пользоваться, но более-менее одинаковые выбирают все, чтобы легко по…

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> вот тут тоже есть пример хороший: у нас несколько разные девы разных сервисов выбрали свой формат конфига. →

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> А когда это попало в руки нашего системщика, aka devops, он был в ужасе, потому что ему все эти конфиги править при развертывании

По поводу средств сопровождения разработки и инструментов, у нас все просто: задачи, баги, вики - redmine, ТЗ, код-ревью и код в gitlab.

Вообще, мы довольно не плохо выстроили процесс.Я писал серию заметок про это.Почитайте,вдруг найдете что-то полезное. <a href="http://t.co/oERlcKVE21">blog.ksdaemon.ru/2014/02/v-pois…</a>

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Это из-за того, что не рассказывают девам про то, что их окружает и задачи.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> я бы сказал наоборот: у нас большие ТЗ с диаграмками и схемами, которое лежит в gitlab в markdown’е

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> у всех девов есть доступ, причем и на запись, любо может сделать PR в ТЗ. Но мало кто смотрит вокруг и на систему в целом :(

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, у нас методология от проекта выбирается. Каждому новичку в команде даётся персональный проект, который он сам де…

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> у нас новичок сразу попадает в команду, ему дается небольшая но завершенная задача, ТЗ/вики/схемы/соседи в помощь.

Да, все так! Товарищ <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> хорошо описал про введение новых людей в проект. Почитайте, начиная с <a href="https://t.co/7DLDo62sNc">twitter.com/anton_davydov/…</a>

Некоторые из стажеров к моменту окончания института превращаются в полноценных разработчиков.Это хороший способ вырастить,а не перевоспитать

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> Невозможно ДО написания кода полностью разработать и утвердить структуру БД, ибо БД — это часть процесса, как и код!

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> да, у нас тоже системы безопасности, программно-аппаратные комплексы, и это совсем не инет-магазины на CMS’ках %)

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: кстати, <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> расскажи, как обычному человеку стать архитектором? просто пиши код и однажды утром тебе оденут к…

Моя позиция: нельзя сразу стать кем-то крутым, архитектором, тимлидом, СЕО или еще кем. Надо знать, уметь и прочувствовать каждую ступень

А чтобы добиться чего-то большего,просто сидеть и качественно делать свое дело недостаточно. Это только наоборот большая радость начальнику)

Поэтому надо проявлять инициативу всегда, везде и во всем! И не бояться принимать решения и нести за них ответственность.

Как мне кажется, вообще, принятие решений и ответственность — это очень важная составляющая. Не многие могут их принимать, бояться ошибиться

Именно поэтому важно начинать с азов: писать код, писать и знать его хорошо, смотреть по сторонам, залезать в смежные области. →

→ Это дает хорошую базу и экспертизу для принятия решений. А принятие решений и инициатива выталкивают вас на новый уровень

Именно так я шел:админство *nix,баз данных, программирование backend, frontend.Это все расширяет кругозор. Для архитектора это крайне важно.

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, а как определяется проект, куда можно и куда нельзя воткнуть разработчика? По скиллам или "этот горит, надо сроч…

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> нет, конечно по скиллам. Просто если видно, что он не сможет там где нужно, можно перекинуть/переиграть расстановку сил.

RT <a href="https://twitter.com/PetrMyazin" title="Petr Myazin">@PetrMyazin</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> а ты видел серьёзные команды, которые используют YouTrack? Кругом одни упоминания Redmine и Jira... Но мы ми…

.<a href="https://twitter.com/PetrMyazin" title="Petr Myazin">@PetrMyazin</a> нет, я пока не встречал, не слышал. Тут скорее фактор того, что: ну вот мы настроили RM и все ок, нет смысла искать новое…

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, у нас для задач/багов/вики — Bitrix24, код в Gitlab, код-ревью через RSS на Vienna :-D

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, разработчики поголовно хотели Redmine, но было принято волевое решение оставить всех на Битрикс24. Прижилось впо…

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, но я ни разу не пиарю этот продукт. Код там говно, мы периодически пописываем модули и опускаем руки в этот смра…

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> много-много-много читать. Фаулера, Мартина и прочих взрослых дядек. Практика-практика-практика :-)

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> в ТЗ невозможно описать все-все-все, иначе оно будет 10000 стр. и его никто никогда не будет читать даже.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> в любом случае,какие-то мелкие детали ложатся на плечи разработчиков.Инач,можно набрать индусов,которые будут циклы и ифы писать

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> именно это отличает хороших разработчиков от кодеров (кодировщиков блок-схем) %)

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: чем точнее тз тем меньше проблем. Разве не так?”  Все так!Но сложно охватить сразу все.ТЗ живет и развивается вместе с проектом

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: не все начальники это понимают :(” Плохие начальники — это печаль. Но я правда, тьфу-тьфу-тьфу, таких не встречал :)

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, чтобы расти вверх качественно профессионально — надо обрасти количеством задач и разгрузить своего руководителя …

. <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> это очень хорошее замечания! Оно было завуалировано в принятии решений, которые раньше принимал начальник :)

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> я считаю, что ТЗ может и должно меняться из формального документа в Wiki по проекту.

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, рекомендую всем прочитать "Как пасти котов", это кто пожелает вырасти из обычного программиста на "повыше".

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> я раз в месяц подхожу к своему VP и говорю: "выгрузи из головы идеи на бумагу, давай их мне". Садимся …

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> в общем, в этом я вижу роль тимлида и управления разработкой — грамотно распределить зоны ответственно…

Вот!Очень важная мысль:тимлид должен максимально эффективно распределять задачи,решать архитектурные проблемы. Для начальника-он точка входа

.<a href="https://twitter.com/PetrMyazin" title="Petr Myazin">@PetrMyazin</a> расскажи, чем YouTrack интереснее RedMine или каких других продуктов?

Важно понимать,что у тимлида свои обязанности,он не просто дев с большим грузом ответственности. У него свои функции [помимо/взамен старых]

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> а у такого тимлида остается время код писать? и вообще, реально ли совмещать код и управление людьми?

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> хороший вопрос! Я почти не пишу код. Пара небольших модулей+эпизодически код ревью, осн время: ТЗ, управление,распределение

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> именно поэтому я отрываюсь в личных проектах: пишу на чем хочу, юзая свежии версии инструментов! %)

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> очень редко, практически не прикасаюсь к коду, но часто приходится во время код-ревью его читать и…

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, часто "тимлидом" ставят, но фактически человек остаётся простым программистом. Просто нет никого другого, а назн…

Именно поэтому тимлид, назначенный «сверху» вероятнее всего не принесет пользы,а скорее наоборот, не сможет рулить, потеряет навыки и прочее

Есть такое понятие как «Предел некомпетентности» aka принцип Питера, выдвинутое Лоуренсом Питером (<a href="https://t.co/iYXrGtPQVg">ru.wikipedia.org/wiki/</a>Принцип_Питера)

Согласно нему, чел растет до тех пор, пока не достигнет предела компетентности. Дальше толку нет. Но можно развивать и повышать свой уровень

RT <a href="https://twitter.com/DaryaChu" title="Darya Chu">@DaryaChu</a>: <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> на практике код пишут дома(: очень маленьких процент людей реально желающих стать тимлидами

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, стоит отдельно обсудить такую тему, как уход/увольнение текущего тимлида из команды и назначение этой роли друго…

У меня был случай, когда уходил тимлид небольшой группы: часть функций пришлось взять мне, как вышестоящему, часть раскидать на девов.

Как верно было замечено, не много желающих/могущих быть тимлидами. Да и 2 тимлида в одной группе — не вариант. Так что тут дилемма: →

Или назначать кого-то старшим в группе «сверху»,что не ok,или делать рокировку и брать «сбоку».Найти на рынке и сразу в тимлида — не вариант

Оффтоп: на днях утекли исходники fl.ru. Для поднятия настроения посмотрите в перерыве) <a href="https://t.co/PSjwTqKlha">github.com/veryEvilMan/fl…</a>

.<a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a> там мегахрень, а не мегамонстр!))

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, два тимлида точно не прокатит, спрашивать надо только с одного человека, иначе начнётся метание стрел.

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> именно по этой причине у любой задачи всегда ОДИН ответственный, но может быть много соисполнителей.

В свете обсуждения вопроса повышения проф навыков: как вы относитесь к курсам?Часто на интервью слышу от новичков вопрос по этому поводу

Даже перефразирую: как вы относитесь к курсам повышения квалификации и подобным и сертификации? Оно кому-то нужно? Или нет смысла?

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, курсы бывают разные. Я мало прошёл в своей жизни, в основном по книгам всё. Но вот Swift на <a href="http://t.co/bzDDQyhvQ6">udemy.com</a>

Я вот, кстати, по личной инициативе сдал много разных экзаменов по Oracle DB. И не ради кого-то или потому что надо, а для себя.

Но и руководством это не осталось незамеченным. И это дополнительный плюс.

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, для сетевых инженеров/DBA и прочих — однозначно надо, всякие там Cisco/Microsoft. А разработчикам на их усмотрен…

Я вот тоже считаю, что по програмированию курсы имеют смысл только для новичков. Для мидл/сеньёр — книги, практика, дискуссии

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, оплачивали обучение или сам всё? Иной раз в крупных фирмах могут затребовать возврат средств, если меньше трёх л…

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> поскольку мы партнеры Oracle, 2 экз в год — бесплатно :) Курсы для сертификации — контора оплачивала, самому — дорого.

Сейчас, кстати, подписался на бетаэкзамен по Оракловым кластерам по 12с версии. Осталось 2 недели, еще нифига не готовился %)

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, экзамен ≠ курс же :-) Можно дома изучить и поехать сдавать, оплачивая только сам экзамен.

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> у Оракла, для серьезных сертификаций требуется прохождение курсов. Только экзамены — для начального уровня.

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, мне в Роснефти с пяток лет назад приходилось иметь дело с Oracle в .Net. Впечатления положительные, но рад, что …

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> если говорить про БД: я имел дело с PostgreSQL (еще 7.x), MySQL, MSSQL, Oracle. Мой личный выбор — однозначно оракл. Он крут!

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, вообще, я сторонник той позиции, что если есть возможность — лучше нанять отдельно разработчика БД. Это выгоднее…

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> поддерживаю. Именно по этому у нас есть отдельные БДшники и я ярый сторонник процедур и пакетов, а не SQL в коде приложений и ORM.

И опять же, поскольку нельзя быть ооочень крутым программистом (не важно на каком языке) и крутым БДшником. Разделение зон — дает выигрыш

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, простой вопрос: уместно ли хранить расчёты/агрегацию и прочу числовую муть в SP? Как у вас реализовано? :-)

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> мы всю агрегацию делаем на уровне БД. Она же для этого и нужна! В клиент уходит конечный рекорд-сет.

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> у нас был 1 тяжелый случай,когда было много новых данных,а агрегированный пересчет затрагивал всё!—пришлось обсчет делать на сервисе

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, чёрт побери! Я нашёл себе собеседника для души, комрад! :-D Спасибо тому, кто дал тебе доступ к этому аккаунту! …

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, видел много ада раньше, когда чуваки выбирали тысячами данные из БД и потом в AR рассчитывали это, вместо того, …

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> это просто ужасно!Слепость разработчиков и привязанность к своему ORM. Бить по рукам! Собственно, это одна из задач архитектора!

“<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: гоняете юнцов на вопросах о left/right inner/outer join? :-D” С join все более-менее ок, а вот group by/having — уже многие плавают

Коли уж мы затронули БД и код. Холиварный вопрос: как вы относитесь к ORM? Мое мнение и <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> вы уже знаете. А как у вас?

RT <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> ORM - зло!

RT <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> хм, а как вы деплоите процедуры? И что вообще в бд считаете? У меня нету вообще такого опыта.

.<a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> например,в хранимках у нас проверяются права юзверя на данные. Или подсчет какой-то базовой статистики по джобам или сработке

“<a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: имхо дело не в орм, а в недостатке опыта” ORM — норм, если оч хорошо знать как она работает.Иначе можно крайне неэффективно делать

.<a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> Знаю много примеров, когда юзали Doctrine, и писали через сущности и было много лишних запросов. →

.<a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> а ведь можно было написать один метод в репозитории, который за раз собирал все и отдавал. Так что знание и опыт решают!

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> смежный вопрос, чего читать чтобы научиться хорошо готовить постгри в проде под нагрузкой?

.<a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> ой, мне сложно сказать. Но по опыту Oracle моя мысль такая: надо хорошо понимать как работает БД →

.<a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> какие процессы в БД за что отвечают,как устроено хранение, что и как хранится в памяти, как работают логи и журналы, курсоры и кэши

.<a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a> и в итоге самым лучшим источником знаний является официальная документация! Кстати, насколько знаю, в pg она довольно хороша!

по поводу деплоя БД: простой способ — небольшая остановка. У нас с этим просто, все согласовывается с заказчиком, определяется время и все.

В Oracle с 11-й, кажется, версии, есть понятие версии схемы. Смысл в том, что у вас могут одновременно жить несколько версий структуры →

Вы заводите новую версию, выкатываете новую структуру/приложение. Старые сессии/клиенты дорабатывают по-старому, а новые уже видят новое.

Давно хочу попробовать это дело, но все времени нет.

“<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: в моей текущей деятельности пытаемся обеспечить простой при деплойменте приложения меньше секунды :-D” Круто!

“<a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: а как это ТЗ в гитлабе?” ТЗ пишется в MD, и версионируется как проект в gitlab → все (dev, qa) имеют доступ к актуальной версии!:)

RT <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> замечу,что часто ещё ТЗ фиксируется в контракте на весь объём работ

.<a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a> <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> в контактах обычно общие слова и функции. А у нас уже подробное функционально-техническое.

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, кстати, да — отдельно стоит обсудить постановку и приёмку задач, управление сроками. Это тоже очень интересная т…

У нас процесс работы с задачами следующий: крупными мазками с руководством планируем задачи. Дальше они детализируются, декомпозируются →

→ после чего компонуются в порядке приоритета. Затем обсуждаются в кругу разработчиков: кто что и, главное, за какое время сделает →

→ а дальше, у каждого разработчика есть свой коэффициент :) считающийся по формуле: затраченное время/озвученное время. →

→ в идеале, этот коэф.  должен быть равен 1. Но это крайне редко. В некоторых случаях он доходит до 4х а то и больше.

Именно поэтому ходит поговорка: возьми время, озвученное разработчиком, умножь на 2|4|8 и получишь реальный срок :)

Идем дальше: приемка. Тут неско важных моментов: код-ревью кем-то из коллег, сливание PR в осн ветку, закрытие задачи и выставление статуса

.<a href="https://twitter.com/marinintim" title="[object Object]">@marinintim</a> а задача стрелочки всего лишь сообщить, что в продолжение мысли в следующем твите :) А при чтении их надо игнорить просто :)

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> да, самое время расслабиться после рабочего дня!

А я пока расширил и дополнил ссылками список слушаемых мной подкастов.Удалил заглохшие больше года. <a href="https://t.co/K8lFg1syM9">gist.github.com/KSDaemon/1d3c4…</a> Там много нового

## Четверг <small>38 твитов</small>

Вчера обстоятельно поговорили про процесс разработки (и то не все обсудили). Но давайте сменим тему :)

Давайте поговорим об архитектуре в общем смысле. Монолит, SOA, микросервисы? Что думаете? У каждого подхода есть свои + и -. Какие у вас?

Многие сильно хают монолиты, что прям вот микросервисы и никак иначе! Я в корне не согласен.

Монолит — это быстрый старт, удобство обслуживания, возможность проверки решения и жизнеспособности проекта, выработка подхода и функций

Микросервисы с нуля — возможны при ооочень подробном и детальном ТЗ, когда сразу можно увидеть функциональные блоки →

→ Но для какого-ньть стартапа так почти никогда не бывает и не стоит гнаться за вымышленными золотыми горами сразу. Надо начинать с простого

Именно по этой причине мне всегда смешно,когда в новом проекте сразу выбирается какая-ньть монга/кассандра как БД, вместо традиционной RDBMS

и народ пытается городить огород на мап/редьюсах и документах вместо того, чтобы легко и просто сделать прототип на привычных технологиях

Как верно замечено, если есть опыт и понимание специфики проекта, можно сразу выбрать правильный инструмент.

RT <a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> монга разве не проще для JSON APIs? Как минимум на серелизации экономишь

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, есть нюанс — в большинстве случаем прототип становится рабочим инструментом, который потом пытаются продать. Это…

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> да, это большая проблема. И тут надо только показывать и доказывать руководству как действовать дальше.

.<a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a> но как ты сам верно заметил, с опытом, получается сразу выбрать подходящий инструмент, и тогда переделка прототипа менее болезненна

RT <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>: <a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> а если взять  couchdb, то можно совсем без бекенда

.<a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a> <a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a> что подразумевать под прототипом? Если просто интерфейс—может и ок. Но работающий прототип—это и бэк и сервисы

Есть интересный доклад про модуляризацию систем: Nano, Micro, Mini, oh my: Modularization for sustainable systems <a href="https://t.co/2VtOPchgDu">youtube.com/watch?v=HYiLzj…</a>

А еще есть такая методология 12-ци факторов для создания SaaS-приложений. <a href="http://t.co/b3STvI2mPH">12factor.net/ru/</a> Там много правильных слов.

По архитектуре самих приложений есть оч интересный ресурс:The Architecture of Open Source Applications <a href="http://t.co/H2alIxikHB">aosabook.org/en/index.html</a> Крайне советую

Наподобие 12Factor, еще есть метод «aim42». <a href="http://t.co/3cXu3rovxb">aim42.github.io</a> Там тоже про эволюцию, поддержку, улучшение и миграции систем.

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> если этот выбор осознанный — я только «ЗА»! Но если просто потому что «ну все же юзают монгу!» — то уж извините.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> для некоторых стеков Mongo - база по умолчанию. На Node 90% фреймворков, BaaS, шаблонов проекта как раз расс…

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> это вот тож мне не нравится.Какие-то разработчики ради интереса решили прикрутить монгу к своему фреймворку,а всем теперь юзать

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> я про то, что выбор БД для фреймворка обусловлен только личным предпочтение создателя, а не реальными потребностями

Хотите посмеяться? Веселый баг в MySQL: есть SQL запрос вида CREATE USER ххх ident by yyy require SSL. Так вот в старых версиях MySQL →

он работает очень круто: создает пользователя без пароля и говорит, что все ок!!! То есть проблем нет, но и пароль с SSL я включать не буду!

Сегодня, кстати, у нас мероприятие <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a>. Вот вы, бэкендеры, скажите, вы смотрите на мир фронтенда, чего там нового? Интересно?

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> бэкендер смотрит в мир фронтенда через REST

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> а как насчет веб-сокетов или еще каких протоколов? REST — это хорошо, но есть и другие способы взаимодействия! ;)

Еще интересный вопрос: есть ли кто-то, кто ушёл в бэкенд с клиентской стороны (не важно какой)? Вот наоборот знаю много случаев.

RT <a href="https://twitter.com/rubyunderhood" title="Ruby Разработчик">@rubyunderhood</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> я перешел когда-то с front на back end, но стараюсь не отставать по обеих направлениях

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> Я таки full-stack, но graphql и falcor всё изменят и на фронтенде и на бакенде.

да, фейсбук задает сейчас задает тон! Появилось много новых инструментов и технологий.

Graphql - это новый способ общения клиента и сервера, точнее язык запросов. Когда клиент говорит чего хочет, а бэк все разруливает и дает.

Мне всегда нравился SOAP/WSDL за готовое описание интерфейсов. Но он оооочень тяжёёёёёлый!

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> я как комар между двух фонарей. И там интересно, и без бэка никуда.  <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a>

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> это смешно, но работу найти труднее. Узкая специализация сейчас всё ещё "рулит" :(

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> мне кажется, сейчас в проектах нужны все категории спецов: и узкого и широких профилей. У меня в веб-команде есть и те и другие

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> это дает гибкость в распределении и решении задач. Всегда можно усилить ту или другую сторону.

## Пятница <small>70 твитов</small>

Хелло world! :) Продолжим? :) Вчера было еще несколько вопросов, сейчас на них отвечу.

Да, мы обсуждали тему: «смотрят ли бэкендеры по сторонам?» :)

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> я вчера немного пропустил беседу про БД. У вас в хранимках обсчитывается доступ к записям для пользователе…

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> → и у нас сложная и гибкая система прав на данные, поэтому проще решать эти вопросы внутри хранимок . →

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> → пользователь БД, из-под которого работает ПО, имеет доступ только к выполнению определенных хранимок.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> → это проще, чем настраивать доступ для БД-юзеров на уровне строк кучи таблиц и поддерживать это в актуальности.

RT <a href="https://twitter.com/PetrMyazin" title="Petr Myazin">@PetrMyazin</a>: .<a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Redmine vs YT: в YT отличный "аяксовый" keyboard centric интерфейс, экономит время на типовых задачах http:<a href="http://t.co/F9peKOP9GA">habrahabr.ru/post/245065/#c…</a>

“<a href="https://twitter.com/KELiON" title="Alexandr Subbotin">@KELiON</a>: считаю что полезно не только во фронтэнд смотреть, но и в ux/аналитику (в первую очередь) и ui (во вторую)” Поддерживаю!

Как я говорил, вчера был отличный <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> и душевные посиделки после. Радует, что участвующих становится все больше и есть новые лица!

Так вот, рассказывал про <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>. Обсудили много разных тем: DB, ORM, ACL, PgSQL, Oracle, Ruby, Django, Doctrine и еще много всего!

Это я про к тому, что даже вот на такие, вроде бы, чисто фронденд-встречи, ходят и бэкендеры и тоже участвуют в обсуждениях! И это здорово!

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> мы юзаем хранимки и в MySQL. У нас порядка 8 программных модулей (PHP/C#/C/C++), у всех свои гранты на определенные хранимки

“<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: про что говорили?” Ох, много про что: подкасты, debug, рендеринг, оптимизация, фреймворки, конференции, сорта пива :) и т.д.

“<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: но на самом деле столкнулся с ограничениями хранимок в MySQL.” Расскажи поподробнее!

Товарищи! А расскажите мне, какая у вас структура команды: сколько бэк/фронт-девов, есть ли UI/UX-дизайнеры, тестеры, архитекторы?

Видать пятница всех расслабила… Тишина :) все ушли в соц сети, арканоиды и солитеры?)

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> мы спокойно возвращаем один и даже неско рекордсетов из хранимок. Или я не правильно понял мысль.

RT <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> , Ваше отношение к исключениям (exception) в программировании?

.<a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> если коротко: эксепшны нужны. Сервисы и приложения должны работать корректно по отношению к миру даже в случаях ошибок.

.<a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> ошибки разрабов надо ловить и собирать, но для пользователя должно быть понятное уведомление и инфа о том как быть.

.<a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> то же касается и АПИ. Очень раздражает, когда получаешь стэктрейс внутренней кухни, вместо какой-то вменяемой ошибки/кода

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> SELECT * FROM ProcName(param1, param2); Хочется такого.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> а чем плох вариант exec ProcName(param1, param2); которая возвращает нужный рекордсет?

Кстати, сегодня же день системного администратора! Поздравляю всех причастных!

Мое глубокое убеждение: что любой хороший разраб, особенно бэкенда, просто обязан быть админом в душе. Просто писать код - недостаточно.

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> а что ты понимаешь под админом в душе? :)

“<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: а что ты понимаешь под админом в душе? :)” Я скорее про то, что надо уметь и любить ковыряться в настройках, конфигах и пр.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> именно. Когда я моюсь в душе и моя борода превращается в мокрую и лохматую, то на вид - админ админом!

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> ну ты-то точно админ в душе, я уверен! А после душа — так вообще без варинатов, судя по всему!)

RT <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> , разработку надо вести в той среде, в которой удобно, или в той, в которой ПО будет эксплуатироваться?

.<a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> Я бы сказал, одновременно и там и там :) Сейчас полно инструментов для этого: docker, vagrant и прочие.

.<a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> это позволяет: а) унифицировать окружение у всех девов, б) иметь одно dev/test/prod окружение, в) дать легкий старт новичку

.<a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> Опять же благодаря этому, можно иметь любимое и удобное окружение для работы, Mac/Linux/Win, любой редактор и прочее.

RT <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a>: <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> если тестирование на той же машине, что и конечная эксплуатация, то скорее да.

.<a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a> <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> о нет! Это очень плохая идея!А что,если что-то пойдет не так?Прод просто ляжет из-за глупой ошибки. Нельзя так делать!

.<a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a> <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> да,я тоже ЗА то,чтобы если прод на линуксе—то и разработку желательно вести на линуксе. Но контейнеры это абстрагируют

“<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: К нему join нельзя будет сделать.” А зачем к нему делать join потом, если его можно сделать сразу в SP?

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> Или вы динамически строите запрос с джоином с участием каких-то статических кусков запросов?

.<a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> да, сорри, если забыл пару раз ретвитнуть перед ответом!

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a> <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> а мы не придерживаемся такого правила. У нас все пишут на Mac OS, а продакшн-серверы на Cent…

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a> <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a> но у нас для каждого приложения есть staging- и production-серверы, которые идентичны в наст…

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> да, есть часть запроса которая идет по проекту. Видимо идет к тому, что запросы будут строиться динамическ…

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> ну если кейсов не много, можно их же забить в SP и +1 параметр на вход.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> если кейсов много, то да, if-else не вариант, но и dSQL можно в хранимке писать, все равно будет в одном месте.

RT <a href="https://twitter.com/chubik" title="Valentyn Chub">@chubik</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Во имя Сети и Сервера и Резервных Копий. Админь!

“<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: вот ты много говорил про администрирование. поэтому, можешь посоветовать 1 самый маст рид?” Сложный вопрос

.<a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> Я начинал с FreeBSD handbook то ли по 4.4, то ли по 5.0 версии :) ну и дальше понеслась.Но вот одной какой-то книжки не знаю

“<a href="https://twitter.com/truecrux" title="Vladimir Lettiev">@truecrux</a>: каждый из нас админ локалхоста ;)” :) Хех! Жаль, но даже это не всегда так.

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> да, dSQL, но не очень уж они удобные у MySQL, хотя может мне не хватает в этом опыта.

.<a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> больше практики и изучения best practice! А так же спрашивать у старших товарищей совета и рекомендаций! ;)

Товарищ <a href="https://twitter.com/23slider" title="23slider">@23slider</a> вот какой ресурс посоветовал: Server Admin for Programmers <a href="https://t.co/MCDkFfkzqK">serversforhackers.com</a>

Время ближется к завершению рабочей недели. Поделитесь, какие интересные ресурсы вы читаете? Какая статья вас зацепила в последнее время?

P.S. Хабр/SO/Google не предлагать! :)

Или может, какой доклад интересный посмотрели, что наступило прозрение, или наоборот, башню снесло! %)

“<a href="https://twitter.com/afiskon" title="Eax Melanhovich">@afiskon</a>: мы все цепляющие статьи в <a href="https://twitter.com/search?q=%23devzen">#devzen</a> обсуждаем, там куча ссылок :)” О, привет! И ты тут! :) Но все же что-то зацепило особенно! ;)

Вот товарищ <a href="https://twitter.com/vyazovoi" title="Paul Elms">@vyazovoi</a> проникается emacs и org-mode: <a href="http://t.co/llhuskgRNc">planet.emacsen.org</a> и <a href="http://t.co/JUY0jm4WFC">doc.norang.ca/org-mode.html</a>

Очень интересный доклад автора Clojure, Rich Hickey «Are We There Yet?» <a href="http://t.co/WYFerXZTHb">infoq.com/presentations/…</a> Доклад 2009 года, но актуальности не потерял!

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: всё тот же - 36.” О, да! Если вы еще не видели доклад Вадима Макишвили «36». Обязательно посмотрите! <a href="https://t.co/8qcFc5iyVU">events.yandex.ru/lib/talks/2235/</a>

RT <a href="https://twitter.com/PetrMyazin" title="Petr Myazin">@PetrMyazin</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> все 5 человек full stack, отдельного архитектора нет, коллективный разум: small dream team!

.<a href="https://twitter.com/zhulikgleb" title="gleb.zhulik">@zhulikgleb</a> советует: <a href="http://t.co/fHOWg4xv4f">golangweekly.com</a> <a href="http://t.co/zs9Do0GVCQ">dbweekly.com</a> <a href="http://t.co/m1wPcNE1fR">postgresweekly.com</a> <a href="http://t.co/m184uqvIVa">rubyweekly.com</a> Но я перестал их читать

RT <a href="https://twitter.com/PZabolotniy" title="Pavel Zabolotniy">@PZabolotniy</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> хорошие статьи встречаются на <a href="http://t.co/r7Pr8OndRV">pragmaticperl.com</a>, например об асинхронном программировании (http://t.co<a href="http://t.co/NegFKMKIW6">pragmaticperl.com/issues/21/prag…</a>

RT <a href="https://twitter.com/Timrael" title="Timur Kozmenko">@Timrael</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> 2 бэкенда, 2 фронта, 1 фуллстэк. Но стараемся все в фуллстэк уйти

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> практичный вопрос: как правильно спроектировать API?

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> непростой вопрос, и конечно все зависит от задачи и специфики. Но попробую сформулировать общие рекомендации.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> надо выделить сущности, определить возможные действия над ними, разложить все по неймспейсам, определить формат запросов/ответов

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> под форматом я имею в виду не тип (json|xml) а именно подход:как понимать что запрос успешен,определить диапазоны кодов и прочее

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: Есть какие-нибудь подводные камни?” Подводные камни есть всегда! Например, когда придется расширить АПИ как-то нестандартно

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> или когда потребуется добавить какие-нибудь распределенные транзакции. В общем может быть много вопросов.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> Но если в начале была придумана и описана четкая структура, всегда будет проще её расширять и дополнять.

Товарищи! Мы обсудили много разных тем, но вдруг у вас есть вопросы — спрашивайте, не стесняйтесь! ;)

## Суббота <small>25 твитов</small>

RT <a href="https://twitter.com/kryapolov" title="Konstantin Ryapolov">@kryapolov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> ваше мнение, что важней - процесс или результат? И что же делать когда хотят результат - но на нормальный про…

.<a href="https://twitter.com/kryapolov" title="Konstantin Ryapolov">@kryapolov</a> смотря для кого. Для начальства всегда важнее результат, для прогеров оч часто сам процесс.

.<a href="https://twitter.com/kryapolov" title="Konstantin Ryapolov">@kryapolov</a> задача тимлида как раз и заключается в том, чтобы достигать результат, минимизируя тех долг и совершенствуя процесс!

RT <a href="https://twitter.com/m1kenobe" title="Максим Троицкий">@m1kenobe</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> как подготовить проект к переходу на новую мажорную версию фреймворка?

.<a href="https://twitter.com/m1kenobe" title="Максим Троицкий">@m1kenobe</a> ох.Непростой это вопрос.Если фреймворк серьезный,обычно известен роадмап,появляется новый АПИ, а старый помечается как deprecated

.<a href="https://twitter.com/m1kenobe" title="Максим Троицкий">@m1kenobe</a> поэтому нужно не ждать релиза, а начинать переписывать deprecated кусочки, не все сразу, а по чуть-чуть.

.<a href="https://twitter.com/m1kenobe" title="Максим Троицкий">@m1kenobe</a> тогда к моменту нового релиза уже не будет неработающего кода и не придется тестировать вообще все.

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/kryapolov" title="Konstantin Ryapolov">@kryapolov</a> я, как апологет Скрама, считаю, что команда на ретроспективе должна решать, как улучшить проце…

RT <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> "звеньями".1звено=2бэк+1ui+1qa+1аналитик.Иногда: 1 аналитик на 2 звена и 3qa на 2звена.

“<a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: архитектор(тимлид) и DBA над звеньями и шарятся по проектам” вот у нас точно так же! Еще QA правда тоже shared :)

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> расскажи о себе как о человеке ;)” оу.. Ну это ж будет крайне субъективно. Спросите лучше тех,кто меня знает :)

“<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: расскажи о себе как о человеке ;)” ну или что-то поконкретнее спроси(те) :)

Товарищи, а какие у вас увлечения помимо программирования, ну или не по профилю?) Я вот интересуюсь IoT,пытаюсь ковырять ESP8266 и все такое

“<a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a>: кем хотел стать в детстве? :)” В совсем глубоком - не помню, но со школы уже смотрел в электронику, =&gt;

.<a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> а в 12 лет, когда мне родители подарили 80386 (который работает до сих пор, кстати) выбор был сделан окончательно!)

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> хотя, чтобы было интереснее: вот вам несколько фактов обо мне ;)

Факт 1: мое первое место работы - Большой Театр. Попробуйте угадать кем? ;)

Факт 2: я окончил муз школу по классу аккордеона. А сейчас после каждого <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> мы с <a href="https://twitter.com/aleksisha" title="Aleksei Balandin">@aleksisha</a> немного дудим на гармонике :)

Факт 3: я был байкером, у меня был 1100 кубовый крузер Honda Shadow, косуха, кож штаны и все дела :)

Факт 4: я искал работу только в самый первый раз. Во всех след случаях, все получалось как-то само.

Факт 5: были времена, когда я ездил по стране и обучал больших дядек (директоров заводов и тп) играть в одну игру :)

Факт 6: я пил пиво с Томом Кайтом и Майклом Видениусом :)

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> не знаю, что за чуваки, но раз с тобой пиво пили, значит нормальные ребята

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> кажется это был сарказм :) но на всякий случай: Tom Kyte - самый известный чувак в мире Oracle DB, “Ask Tom” - это как раз он.

.<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> ну а уж Монти, создателя MySQL, кажется и так все знают :)

## Воскресенье <small>14 твитов</small>

“<a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: крамольное мнение: я считаю, что MySQL - очень ОК. Для меня - база по-умолчанию.” По большому счету, я с тобой согласен!

“<a href="https://twitter.com/a_lithium" title="Aliaksei Lithium">@a_lithium</a>: <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> уже спрашивали почему не postgresql?” Я бы сказал, так сложилось исторически. Это был стандартный инстр-нт в стэке

.<a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a> касательно дядек и игр: это была игра-симулятор развития нефтяной компании :) и играли в нее как начальники НПЗ :))

“<a href="https://twitter.com/filipovskii" title="Andrey Salomatin">@filipovskii</a>: уоуоуоу ты просто обязан как-нибудь со всем этим появиться на MoscowJS!” Тогда уж ВО всем этом! ;) я подумаю ;)

“<a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a>: <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> твиттер использует mysql, даже своя модификация есть” Многие используют и все ок, это скорее искусств негатив

“<a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: виноградорство” о, круто! Результат бывает полусладким, сухим и пр?)

Собрались сегодня с друзьями за шашлычком, обсуждаем разные айтишные темы :) как это все работает в наших компаниях и на рынке в целом :)

Ну что, товарищи… Подходит к концу мое дежурство на посту <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>. Надеюсь вам было интересно и вы узнали что-нибудь нового.

Меж тем, если что, вся инфа и статистика есть на <a href="http://t.co/NtjJiqzrbg">backendsecret.ru</a>

Если у вас еще остались вопросы/замечания/предложения или желание пообщаться, ищите меня на в моем привычном аккаунте.

С вами был Константин <a href="https://twitter.com/KSDaemon" title="Konstantin Burkalev">@KSDaemon</a> Буркалев. Спасибо еще раз и до новых встреч! ;)

Привет! Меня зовут Екатерина Трефилова, возможно вы меня знаете как <a href="https://twitter.com/Lecharton" title="Ekaterina Trefilova">@Lecharton</a>

Я занимаюсь разработкой <a href="http://t.co/90poVs2ZxT">hi-tech.mail.ru</a> и буду рассказывать как мне живется первую неделю после запуска проекта :)

В общем женщина на корабле ребят, немного дестроя ;)