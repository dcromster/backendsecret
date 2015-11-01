# borovikov

_01 ноября 2015_

## Понедельник <small>46 твитов</small>

Все привет! Меня зовут Денис Боровиков. Сейчас живу в Берлине, разрабатываю поиск в Zalando.

Zalando - это крупнейший онлайн-магазин одежды в Европе, всего работает около 1000 разработчиков.

Из технологий используется практически всё :) В том числе и BigData, программирование GPU и так далее.

До этого довелось работать в разных компания, из заметных это hh.ru и Deutsche Bank.

На этой неделе хотелось бы ещё разок пройтись по наболевшим темам :)

RT <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> говорят отношение к работникам в заландо потребительское. это правда ?

Начну про то, как устроена разработка в Zalando, так как это весьма необычно.

Так вот организация построена на внедрении демократических принципов

У команд полная автономия и большинство решений принимаются голосованием внутри.

Команда решила писать на Erlang? Так тому и быть!

Да все тоже, про красивый код, жёсткие сроки, взаимоотношения в коллективе и так далее <a href="https://t.co/lL3mqYQpdZ">twitter.com/ipronix/status…</a>

Система большая и высоконагруженная. И масштабная. Много стран, много складов. Этой целый мир <a href="https://t.co/yDydJ7JMKZ">twitter.com/mkn8rd/status/…</a>

Но права даются с ответственностью - команда самостоятельно отвечает за тестирование и деплой.

Нейронные сети <a href="https://t.co/Dye5E3o1pi">twitter.com/scaint/status/…</a>

Сотрудников всего 9000 <a href="https://t.co/CCgvhvOS3J">twitter.com/mkn8rd/status/…</a>

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/mkn8rd" title="Dmitry Nazarov">@mkn8rd</a> <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> Заландо это круче Яндекса ;) Самая быстрорастущая компания в Европе за все времена.

Каждой команде дается отдельный AWS аккаунт, дальше все в твоих руках :)

Хочешь Lisp? Отлично, но успевать за сроками, деплоить и саппортить тебе, так что решай сам.

Не с нуля, но есть кастомизации <a href="https://t.co/TZwHBR5pNF">twitter.com/mkn8rd/status/…</a>

Если тема интересна, советую искать инфу по deep learning <a href="https://t.co/nxxqECfE2Y">twitter.com/ipronix/status…</a>

Другая особенность это то, что у тебя 2 босса. Один это обычный босс, второго ты выбираешь себе сам

Что-то вроде народных депутатов :) Подход называется Radical Agility.

<a href="https://t.co/QT5kOQn8FD">slideshare.net/ZalandoTech/ra…</a> <a href="https://t.co/eAkzRYY8Fw">twitter.com/ilnurkhalilov/…</a>

На самом деле не анархия. Есть правила, например мы можем использовать только собственный дистриб линукса - tuapage <a href="https://t.co/FVKvOBbsKy">twitter.com/ipronix/status…</a>

Есть clojure команды. А ещё scala, go, erlang и много ещё чего <a href="https://t.co/6n9hrs01JY">twitter.com/petrmyazin/sta…</a>

Ну да бог с этим манагерством, поговорим про технологии :)

Другая интересная штука у нас - это деплой

Для деплоя используется опен-сорсный тул - stups.io, разработанный у нас.

Его изюминка - immutable стеки. Ansible/Salt - вчерашний день :) Собираешь Docker образ, и специльной тулзой раскатываешь.

Тулза создает новый стек. Тестируешь, если все ок, то трафик (или часть) льешь на новый стек. Старый потом убивается.

Второй босс ответственен за твоё развитие и удовлетворенность <a href="https://t.co/oIxNAOiPLz">twitter.com/freiksenet_ru/…</a>

stups (и все что с ним связано, например spilo), zmon, play-swagger <a href="https://t.co/6r6bESYW0Q">twitter.com/strobegen/stat…</a>

Продолжая тему деполя. Основной формат деплоя - Docker. Что бы обеспечить иммутабельность деплоя пришлось сделать свою докер-репу.

Отличие кастомной репы в том, что запрещены SNAPSHOT-теги. Соответственно новый деплой это всегда новый тег в докере

Так же имеется репозиторий проектов (Kio). Через него аппрувятся релизнутые образы. Без аппрува Docker-образ просто не раскатается по проду

И естественно последнее время мой основной подход к построению систем - это микросервисы

При миграции на микросервисы самая типовая проблема - это дезинтеграция данных.

Раньше ты мог сджойнить 2 таблицы в бд, а теперь они под управлением разных сервисов. Что же делать, %username%?

Не-не, никаких shared database, это зло. Но данные поджойнить как-то надо <a href="https://t.co/c0iQvtUnrN">twitter.com/raxpost/status…</a>

Нет, но они какой-то терпимый объём занимают. Точную цифру не подскажу. <a href="https://t.co/okt5WGud2k">twitter.com/ikkeps/status/…</a>

Микросервисы вообщем-то и есть усложнение приложения на макроуровне и упрощение на микроуровне. И ни разу не панацея <a href="https://t.co/r0Tsk0t7Pn">twitter.com/raxpost/status…</a>

Stups не плох :) Ещё mesosphere стоит посмотреть. <a href="https://t.co/036gz4WTHb">twitter.com/ichesnokov/sta…</a>

RT <a href="https://twitter.com/salikhov" title="Ilyas Salikhov">@salikhov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> а как же изменение модели данных и миграции?

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> GraphQL обертка вокруг всех сервисов!

Winner! <a href="https://t.co/mLAy3cQSeH">twitter.com/mr_mig_by/stat…</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: Как-то я сегодня еще не троллил <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a>. Не порядок! Надо исправлять! План не выполнен!

## Вторник <small>23 твита</small>

Так, продолжаем мусолить микросервисы :) Сейчас это не делает только ленивый, но все же.

Часто спрашивают, а какой язык хороший / плохой для современного бекенда. Так вот с микросервисами выбор свободней

Микросервис на то он и микро, что у него нет проблем больших кодовых баз. Выбор языка больше вопрос личных предпочтений.

Деплой и мониторинг конечно должен быть общим. А там уже какая разница что внутри Docker образа запускается <a href="https://t.co/HaheUUIF2V">twitter.com/dcromster/stat…</a>

Сама по себе такая ситуация - плохая. Это уже какой-то распределённый монолит <a href="https://t.co/e1m37rFyp9">twitter.com/dcromster/stat…</a>

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> <a href="https://t.co/UgHH9P6i6D">twitter.com/php_ceo/status…</a>

Основа основ - доверие. Ну какая вероятность, что целая команда полные неадекваты? <a href="https://t.co/6iiZDZ8HIe">twitter.com/dcromster/stat…</a>

Точно! Как раз чаще такое и бывает - заставили писать всех на одной унылой технологии, нашли только унылых людей <a href="https://t.co/ZsZeSmEVUl">twitter.com/freiksenet_ru/…</a>

И вообще, чего в конце концов хотят разработчики - они хотят свободы, как и все нормальные люди. <a href="https://twitter.com/search?q=%23философияотпрограммирования">#философияотпрограммирования</a>

Вы сами себя загнали в такое место, что белого света не видите <a href="https://t.co/BNs61drfe9">twitter.com/ipronix/status…</a>

Вам так хипстеры в заландо покоя не дают, что сразу видно какой вы счастливый со своими деньгами :)  <a href="https://t.co/5qZ8LkkldI">twitter.com/ipronix/status…</a>

Не всем нужно. Если компания не ИТ, то им хватит и обычных писак за деньги <a href="https://t.co/1jyF4srOLA">twitter.com/raxpost/status…</a>

Вам в гадалки надо :) По одному файлу судите. Ну-да, ну-да, вокруг же заговор и все плохие )) <a href="https://t.co/0wKU8CZ85W">twitter.com/ipronix/status…</a>

RT <a href="https://twitter.com/podmostom" title="Jonn Mostovoy">@podmostom</a>: <a href="https://twitter.com/ipronix" title="pronix">@ipronix</a> <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> деньги и власть — это ресурсы. Личная и профессиональная свобода — цели в индивидуальном образовател…

Интересно как тогда работают венчурные инвестиции? Людям дают денег не получив изначально в замен ничего. <a href="https://t.co/6l4jF80GgT">twitter.com/de_gis/status/…</a>

Продолжая измышлизмы: а какой прок работодателю от свободы программиста, скажет %username%. И выдаст в себе советикуса обыкновенного :)

Монетизация свободы. Win-win, как говорят консультанты.

Да! Когда-то и отмена рабства казалась не выгодной, как так платить ЗП, это же не выгодно! <a href="https://t.co/6tdujYw7ru">twitter.com/dcromster/stat…</a>

Есть один месяц онбординга, там в том числе учишься stups. <a href="https://t.co/yPb3a2nJiL">twitter.com/strobegen/stat…</a>

На вскидку у нас много такого: нужно сделать какую-нибудь ML задачу. <a href="https://t.co/2MX3ujkEm4">twitter.com/timrael/status…</a>

RT <a href="https://twitter.com/Fodoj" title="Kirill Shirinkin">@Fodoj</a>: <a href="https://twitter.com/Fedor_Sukhov" title="Фёдор Сухов">@Fedor_Sukhov</a> <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> на начальных этапах смысла ноль, особенно если компания маленькая. Надо просто писать хороший монол…

Не совсем, у них жирный core проект + микросервисы: <a href="https://t.co/cJb5prbfst">github.com/blog/530-how-w…</a> <a href="https://t.co/vvRm7rP2pX">twitter.com/Fodoj/status/6…</a>

В Java для volatile гарантируется, что запис. значение видимо другим потокам и happens-before последующим чтениям <a href="https://t.co/jtCwdOPlFl">twitter.com/rubyunderhood/…</a>

## Среда <small>17 твитов</small>

Так, повышаем градус холивара :) Сегодня поговорим про выбор технологий

Лично я выбираю comprehensive решения. IDE - IDEA, язык - Scala. Сейчас объясню почему

Я считаю выгодным изучать технологии, которые сложно учить, но потом получаешь профит

Да, забыл, любимые ОС - Linux и Mac OS X

Джуниор программисты очень любят всякие технологии с низким порогом входа. С возрастом понимаешь, что часто это самообман

Что можно не съев пуд соли делать тоже, что и старшие коллеги

Сейчас меня совершенно не пугают толстые мануалы и сухие спецификации.

Да, тут надо оговориться, что технология должна быть сложной не из-за костылей, а из-за фич.

Как раз посматриваю на emacs последнее время :) Да, это мой подход <a href="https://t.co/bL5cdQ29GK">twitter.com/strobegen/stat…</a>

Scala хороша для описания сложных процессов, пример: <a href="https://t.co/PXZAVYkD2V">doc.akka.io/docs/akka-stre…</a> <a href="https://t.co/XMMbhgvZpo">twitter.com/podmostom/stat…</a>

Вообще самое замечательное в Scala - это комьюнити. Одерский супер спец в языках. TypeSafe делает чудесный стек.

После Scala будет Dotty, и это очень хорошо. Язык столкнулся с реальностью и развился во что-то новое. <a href="https://t.co/56s7DtS2Xo">twitter.com/podmostom/stat…</a>

RT <a href="https://twitter.com/podmostom" title="Jonn Mostovoy">@podmostom</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> Одерский супер-спец, но никто же спорить не будет с тем, что Scala — по факту — не получилась с точки зрения …

В общем Scala это такой Haskell, который раз, и в прод!

В Берлине хватает :) <a href="https://t.co/5vNqBBYrCS">twitter.com/fcoder/status/…</a>

Слушаешь евенты, локально собираешь какой нужно тебе query store и джойнишь <a href="https://t.co/ZgFYo4PD1a">twitter.com/89__bo/status/…</a>

RT <a href="https://twitter.com/OhTheAnguish" title="Daibhi O Domhnaill">@OhTheAnguish</a>: <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> <a href="https://twitter.com/89__bo" title="Boris Lopuhov">@89__bo</a> <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a> КГБ отправляет мне ивенты через телефонную розетку

## Четверг <small>25 твитов</small>

Сегодня хотелось бы обсудить тему образования

Тут у меня нет какого-то определённо мнения, ибо сам пытаюсь разобраться

Так вот, в Москве ВО разработчика рассматривалось как что-то опциональное. Хорошо если оно есть и хорошо если вуз именитый

Но вот в Берлине многие коллеги, и особенно начальство имеют не только ВО, но и PhD

У меня ВО есть, но PhD нет, из-за этого я немного комплексую

Интересно было бы послушать мнение тех, кто уже долго работает в Европе на этот счёт, насколько здесь PhD критично в перспективе

Да, без хотя бы магистра видимо совсем туго в Берлине, согласен <a href="https://t.co/FW361tU5YS">twitter.com/de_gis/status/…</a>

RT <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> точнее требовался или инженер,или магистр,т.к.у немцев,как и у нас,на бакалавров часто смотрят косо - зародыши с…

А давайте. Я считаю, что в идеале самообразование должно быть совмещено с работой <a href="https://t.co/Wzw4EyL5Kh">twitter.com/alexdanilov/st…</a>

Например у нас изучение чего либо на работе считается рабочим временем

Более того самообразование является обязательным, у каждого есть план и куратор

Работодатель заинтересован в развитии людей. Опять же win-win ситуация

А это уже косяк работодателя. Иметь людей, которые сильнее среднего и не найти чем их занять это просто epic fail <a href="https://t.co/zzq67KOwxw">twitter.com/daryachu/statu…</a>

Вот там в реплаях пишут примерно про одно, что работодатель не заинтересован и т.п. Мне это хорошо знакомо

Есть очень здоровский совет. Не работайте с мудаками. Компания должна стремится к win-win, а не win-fail ситуации.

Многие софтвернве компании - это кошмар. Но другие компании существую. Показать вам что они есть я и вижу своей бескорыстной целью

Супер рецепта у меня нет. Я задаю обычно наводящие вопросы про то, что смогу ли я что-то внедрить или улучшить. <a href="https://t.co/8Mpb2RYdmr">twitter.com/yelbota/status…</a>

Точно. Причём схантили во что-то наибанальнишнее <a href="https://t.co/X3lts5LqjH">twitter.com/rubyunderhood/…</a>

Вот кстати всякие стартапы это отдельная тема, там долгосрочной перспективы нет <a href="https://t.co/i3Kyjk3jkv">twitter.com/chudesnov/stat…</a>

Насчёт стартапов у меня мнение такое: если вас зовут в стартап, соглашайтесь только за опцион и/или должность. Больше там ловить нечего.

У нас именно так, 20% времени все могут быть R&amp;D. Правда желающих не много :) Нужно все-таки активней людей учить <a href="https://t.co/v8nuF81c7G">twitter.com/siliconbangalo…</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> опцион И должность. А у опциона еще вестинг и клифф. А еще налоги…
Вывод делаем сами.

Фронтендеры вообще нужны :)  <a href="https://t.co/gVRyRUHJc9">twitter.com/mr_mig_by/stat…</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> вообще фронтендеры всем нужны. А набирают жквери-погроммистов. 
А мне потом расхлебывай…

RT <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> от и я об этом - мир сильно разнообразный

## Пятница <small>7 твитов</small>

Сомнительно. Нужно все будет делать на коленке, с технологиями разве что поверхностно познакомитесь. <a href="https://t.co/uE7vDqnJZP">twitter.com/ctrlok/status/…</a>

Тоже можно! <a href="https://t.co/Ca3cDGeR1J">twitter.com/iambernik/stat…</a>

Расти в архитекторы / консультанты. <a href="https://t.co/TxuMLugTOO">twitter.com/rubyunderhood/…</a>

RT <a href="https://twitter.com/alexfedoseev" title="Alex">@alexfedoseev</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/rubyunderhood" title="Ruby разработчик">@rubyunderhood</a> я не замечаю экспансии ноды на бэке. фронт на сервере—да, бэка ма…

Централизованный <a href="https://t.co/54XRuMxpb3">twitter.com/strobegen/stat…</a>

Может. Некоторых берут вообще не в определенную команду, они потом сами ищут её себе <a href="https://t.co/9eMU0i0fxN">twitter.com/strobegen/stat…</a>

RT <a href="https://twitter.com/iamdevloper" title="I Am Devloper">@iamdevloper</a>: There are two types of programmers in the world; those who put commas at the end of key/value pairs:

foo: “bar”,

and the…

## Суббота <small>11 твитов</small>

Сегодня выходной, а это значит, что хакерам не нужно писать код

Хотел бы обсудить тему full stack разработки

Мне кажется что найм  full stack разработки может быть только ограниченным.

Full stack звучит очень заманчиво, но проблема в том, это очень редко когда человеку по-настоящему интересно и то и то

Обычно у фронта и бека совсем разное мышление. Фронту интересно получать осязаемый результат. Бек больше тяготеет к решению головоломок.

Из того что я видел, full stack в масштабах компании идёт хорошо когда либо бек простой, либо фронт простой, или вообще проекты простые

В случае простого фронта бекендеры просто на коленке делают фронт и так далее.

RT <a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> а ещё можно full stack + backend. Это позволяет снять с бекендера простые задачи и сосредоточиться на сло…

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> команда разработчиков должна быть full-stack , а не команда full-stack разработчиков

И каждому по директору! <a href="https://t.co/ICuYnvIuxn">twitter.com/ohtheanguish/s…</a>

В целом мне думается, что золотая середина, когда нет перегибов и есть и узкие специалисты разного профиля и full stack.

## Воскресенье <small>23 твита</small>

RT <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> поддержу негатив. Из моего опыта вывод в цитате: "бабе - цветы, дитЯм - мороженое"

Всем привет. Сегодня расскажу про оценку сроков, так как это у меня не плохо получается

Начать нужно с того, зачем нужна оценка сроков. Нужна она для приоритезации

Приоритет = Полезность / Срок, получаеться менеджменту что бы решить что мы делаем в первую очередь необходима оценка сроков

Как сроки оценивать НЕ надо: оценивать не должен тот, кто ставит задачу.

Каждую задачу можно решить бесконечным количеством способов, и срок непосредственно зависит от выбранного способа

Поэтому второе НЕ: не надо оценивать саму постановку задачи, это пальцем в небо

Нужно предложить один, а ещё несколько способов решения, и дать оценки для них.

Про закладывание рисков я думаю и так все знают, я обычно умножаю на 2.

Есть тонкий момент, если на ходу продумать решение задачи не получается и как решать не ясно, по сути срок сказать нельзя

Ни в коем случае нельзя фантазировать на счёт оценки сроков. Если не знаешь - возьми время на ресеч, и оценивай это время.

Как только понимание сроков меняется, лучше немедленно сообщить менеджменту и вместе решить что делать дальше. Замалчивать нельзя.

Ещё момент, оценка сроков это навык, который вырабатывается тренировкой. Многие утверждают, что сроки вообще нельзя оценить.

Сроки оценивать можно и нужно!

Беру время на ресеч. Нужен магистр + phd + стажировка + 5 лет на ресеч. Где-то через 17 лет смогу ответить когда :) <a href="https://t.co/WbGHBnN4j5">twitter.com/ohtheanguish/s…</a>

Бинго! Кстати признаки сеньорности тоже прикольный топик <a href="https://t.co/toxG2He2a0">twitter.com/mr_mig_by/stat…</a>

Ок, ну и кто же такой синьор девелопер? :) <a href="https://t.co/xkynxA3yRY">twitter.com/mr_mig_by/stat…</a>

Это конечно так. Но хотелось бы поговорить про идеальное понятие зрелого разработчика <a href="https://t.co/Uvb5NGesWz">twitter.com/semenov/status…</a>

RT <a href="https://twitter.com/kmmbvnr" title="kmmbvnr">@kmmbvnr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a> второй уровень по <a href="https://t.co/V6VhZh8EeI">dev.by/pages/programm…</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/kmmbvnr" title="kmmbvnr">@kmmbvnr</a> <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> либо 1.4 по этой шкале: <a href="https://t.co/EH9vvSko9q">michaelochurch.wordpress.com/2013/04/22/ger…</a>

RT <a href="https://twitter.com/strizhechenko" title="Безумие и кислота">@strizhechenko</a>: <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> вот ещё хорошая практика:
1. тот кто взял задачу даёт её оценку.
2. тот кто считает что можно быстрее - п…

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/strizhechenko" title="Безумие и кислота">@strizhechenko</a> <a href="https://twitter.com/backendsecret" title="Разработчик бэкенда">@backendsecret</a> чувааак, все менеджеры "имеют идею” как это сделать, но не умеют ни малейшего понятия как “сес…

Время прощаться. Всем спасибо за внимание, было круто! С вами был <a href="https://twitter.com/borovikov" title="Денис Боровиков">@borovikov</a> До новых встреч!