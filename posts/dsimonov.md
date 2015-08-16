# dsimonov

_16 августа 2015_

## Понедельник <small>40 твитов</small>

Привет! <a href="https://twitter.com/dsimonov" title="Dmitriy V. Simonov">@dsimonov</a> с вами! Уважаемый <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> предложил подежурить тут недельку на правах perl бекенд-дева с некоторым опытом.

Рецепт отделения опытных дев-ов от неопытных - FizzBuzz test (гуглите!). Предлагаю желающим написать решение для него, умещающееся в твит.

RT <a href="https://twitter.com/iamale_ru" title="Эль">@iamale_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> На чём?

.На бумажке,  <a href="https://twitter.com/iamale_ru" title="ЭЛТ">@iamale_ru</a>!

RT <a href="https://twitter.com/Bugagazavr" title="Bugagazavr">@Bugagazavr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> (1..100).each do |i|
  s = []
  s &lt;&lt; 'Fizz' if i % 3 == 0
  s &lt;&lt; 'Buzz' if i % 5 == 0
  puts s.join unless s…

RT <a href="https://twitter.com/zaz600" title="zaz600">@zaz600</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> f="Fizz"
b="Buzz"
p=print
for i in range(1,100):
 if i%3==0 and i%5==0:p(f+b)
 elif i%3==0:p(f)
 elif i%5==0:p(b…

RT <a href="https://twitter.com/zaz600" title="zaz600">@zaz600</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> d={1:"Fizz",3:"Buzz",4:"FizzBuzz"}
for i in range(1,100):
 j=0
 if i%3==0:j+=1
 if i%5==0:j+=3
 print(d.get(j,i)…

RT <a href="https://twitter.com/monzdrpower" title="monzdrpower">@monzdrpower</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>
f='Fuzz'
b='Buzz'
p={println it}
1.upto(100){i-&gt;
 if(!(i%3+i%5)) p f+b
 else if (!(i%3)) p f
 else if(!(i%5…

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> на прошлой неделе <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> обсуждал как взаимодействовать в удалённой команде. Расскажи свой опыт,plz // <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> 5л опыта управления distributed russian teams помогли разобраться в бОльшей часть возникающих проблем.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> Мне проще отвечать на то, как решались конкретные проблемы. Жду описания проблем, - буду отвечать.

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> Именно команды были разделены или люди в командах тоже не были в офис…

.<a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> Все сотрудники сидели у себя дома в разных часовых поясах с рассеянием не более 3х часов

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> А сильно разделенные по часовым поясам команды были?

.<a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> Рассеивание по часовым поясам составляло не более 3х часов.

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> давай сразу о боли:наша совместная работа, взаимодействие в команде, долгие ответы...

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> Боли, как таковой не было. Команда действовала в том максимуме эффективности, в каком вообще могла действовать.

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> не переходя на личности: как же с этим (долгими ответами) бороться?

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> Ни как. Разработчики действуют в привычном им ритме. Руководитель определяет процессы, задающие ритм. Это - максимум.

Тема дня - "задолбали!". Кто и в чём разочаровался в работе? Язык? Технологии? Менеджерьё? Стиль работы? Офис? Дом?

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> #!/usr/bin/python3
for i in range(1, 100):
 print(("" if i%3 else "Fizz")+("" if i%5 else "Buzz") or i)

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> были ли у вас регулярные совместные обсуждения кроме рабочих? Чтобы разработчики лучше друг друга узнавали

.Срачики, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>, у нас постоянны - в чатика, в утренних скрамах, ретроспективах и других созвонах. Задача: семь пудов соли вместе съесть!

.Это лучший способ получить сплочённую команду, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>, в условия рассеянности по стране. Но я подумываю про некоторые методики от Steam.

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> В компании много небольших команд работающих над разными проектами/технологиями. Как собрать всех вместе? Hangou…

.Про slack, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>, ничего не могу сказать, но их хвалят. У меня всё ни как руки не дойдут. Хенгаутс - точно гавно ( Телеграм хорош ещё!

.Могу ещё порекомендовать, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>, тасовать народ между проектами. Также у меня есть практика сделать тематические чатики: беки, фронты...

RT <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a>: <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> slack самое оно. Проекты разбить по channels

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> проекты по чатикам - это как раз чтобы разбить народ. А вот как всех объединить? Хотя бы на пол ча…

.А всего народ сколько, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>?

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> под хенгаутс больше имел ввиду вид общения: чат или видео. Стоит ли устраивать видео встречи? В рабочем процессе…

.Видеовстречи показали себя отрицательно, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>. Аудиосозвоны очень удобны, а видео - разочаровывает.

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> как мотивировать людей зайти на встречу?

.Проводите созвоны "ретроспективы" в контексте agile scrum, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>! В них обычно заинтересованы все :)

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/dzaporozhets" title="Dmitriy Zaporozhets">@dzaporozhets</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> вот получается, что рабочей необходимости в аудио-видео нет. Надо ли устраивать свободные темы?Как…

.А с чем вы боретесь такими встречами, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>?

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> разработчиков 15-20

.При таком количестве обыкновенного созвона по скайпу хватит, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>.

RT <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Есть традиционные каналы general/random для всех. Есть ретроспективы, но по проектам. А таких встреч пока нет. .…

.Очень хорошая тема для обсуждения, <a href="https://twitter.com/gusevr" title="Roman Gusev">@gusevr</a>! Давайте знакомиться с вами и вашими командами плотнее?

## Вторник <small>84 твита</small>

Рецепт легко развиваемого сервиса: бек и фронт должны развиваться независимо, общаясь друг с другом через json.

Таким образом product owner может развивать интерфейсы в любую сторону по мере проверки гипотез.

Задача же project manager сводится к правильному обеспечению технической инфраструктуры и слаженной работы админов, беков и фронтов.

Работа правильных админов при этом несет массу ништяков: автодеплой, девсреды по щелчку пальцев, откат изменений и прочее.

В жизни все сложнее. Команды, которым проект достался готовый, тратят все силы на его познание и пере ориентирование.

Команды, стартовавшие проект с нуля (ценность, кстати! Мало, кто умеет!) подчинены главному принципы - пусть взлетит хоть как-нибудь!

Здесь мы сталкиваемся с разделение.м команд/сотрудников на разведчиков и инженеров. Первые проложат тропинку через любую пропасть.

Вторые (инженеры) превратят эту тропинку (хоть как-то работающий продукт) в широкополосное скоростное шоссе!

Работа разведчиков и инженеров отличается кардинально. Легко “сжечь” инженера поставив его на позицию разведчика.

Разведчики тоже не всегда умеют быть в позиции инженеров. Как правило, это ставит проект под угрозу: на одну фичу порождается десять багов

Описанная схема хороша тем, что эффективную команду по ней можно построить из любых людей. То есть быстро и дешево.

Да и найти отдельно разведчиков и отдельно инженеров намнооооого проще, чем универсалов. Особенно в условиях конкуренции.

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> не лучше ли искать золотую середину? Переделывать всегда дороже, чем делать с нуля

.Конечно же всегда такая середина ищется, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. Как правило настоящая команда формируется только после 1-2х проектов.

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> ок, расскажи про управление такой командой. Ведь придется работать вместе людям с диаметрально противоположны…

.Они идут след в след друг за другом, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. Разведчик совершил подвиг, потом приходит ворчливый инженер и всё перестраивает :)

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> разведчики ребята это вроде практикующих проектировщиков?

.Это чапаевцы, <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>  - шашки наголо и вперёд в атаку. "Тестировать будем в продакшне, выкатывай!"

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> всегда спрашиваю питонистов: зачем Питон?Какие задачи можно решить с его помощью, которые нельзя или сложнее …

.Я люблю "американо", а вот супруга предпочитает "латте", <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>. И то и другое - кофе. Но строго говоря, мировой тренд - это питон.

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> И потом получится silos где будут либо хаки на фронтенде, либо бакенд подогнутый под требования одного фр…

.Вопрос интеграции решаются на скрам-декомпозициях, <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>. Объяснять, что это такое, требуется?

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> "правильному обеспечению технической инфраструктуры" это о чем? можно несколько раскрыть тему?

.В общем видел, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>, речь идёт об этаких перилах, которые ведут разработчика от получения декомпозированной задачи к её тестированию.

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> боюсь ситуация когда ворчун не просто переделывает, а устраивает скандал "разведчику" довольно частая. да и н…

.Это проблема проджекта, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. Как правило, после первых же побед команды, все конфликты уходят, - результат-то налицо!

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> расскажи плиз, какие видишь пути разрешения конфликтов

.Я убеждённый сторонник того, что сама работа и её результаты оздоровляют обстановку, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. Есть результаты, - все довольны.

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> хм, чаще всего, манагеры далеко не спецы в построении процессов разработки, они по сути арбитры и ревизоры, им…

.Менеджеры, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>, делятся на инвесторов, продактов и проджектов. Инвестор даёт бабло. Продакт - продаёт продукт. Проджект - строит.

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> я думал что нода в частности и JS в общем мировой тренд

.На фронте, <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>, да. Нода одна из первых. Но бек ни кто не отменял.

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: В <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> опять говорят, что скрам работает. Как же так, на моем он исключительно не работал и был максимум повод…

Это просто холивор, <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>.

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> которые билятся: "у нас сегодня был эстимейшн на 6ч и 20 чел, вот вам счет — у нас скрам" …

Это несвязанные вещи, <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>. Скрам - это итерационное улучшение работающего продукта, а не способ оценки работ.

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a> ой да ладно, а христианство это добрая религия.

Смените религию, <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a> :)

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> ок, но у меня совсем другой опыт. у разных людей разные представления о результате.

Поделись, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>! Возможно у меня был аналогичный. Это вообще могут оказаться семейными граблями, - на них ещё мой дедушка наступал!

RT <a href="https://twitter.com/iamale_ru" title="Мразь где-то рядом">@iamale_ru</a>: В <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> опять со своим скрамом, тьфу

Я ещё знаю слово "канбан", <a href="https://twitter.com/iamale_ru" title="Мразь где-то рядом">@iamale_ru</a> :) (контрольный выстрел в голову)

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> о да! Только инженер не всегда доволен постоянным переписыванием ;) <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>

Меняй инженера, <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>.

RT <a href="https://twitter.com/yevvers" title="Evgeny">@yevvers</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a> а в прод эти перила не ведут?:) или речь о тестировании продакшном:) <a href="https://t.co/G3LjxSWqQS">bnj.com/blog/cowboy-co…</a>

Я ограничен в количестве символов в твите, <a href="https://twitter.com/yevvers" title="Evgeny">@yevvers</a> <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>. Разумеется ведут.

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> строит девелоперов? :) очень жаль проекты, где PM насаждает процесс и инструменты удобные ему, а не команде.

Строит продукт, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>. Это очень плохая практика ради крассного словца перевирать то, что я пишу. Не все поймут!

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> получается конфликт интересов. безконфликтные комманды обычно на одной волне. все думают как менеджер или как…

У всего есть общий знаменатель, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a> - получаемое бабло. Введите премиальную систему Водянова, чтобы знаменатель был виден ещё чётче.

RT <a href="https://twitter.com/Xedin" title="Alexander P.">@Xedin</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> имхо это уже область ответственности дев-лида, а не ПМа. Ввиду его не полной компетенции в таких вопросах

Считайте, что я имел в виду дев-лида, <a href="https://twitter.com/Xedin" title="Alexander P.">@Xedin</a>.

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> я там специально поставил смайл. мне сложно представить программера без чувства юмора, можно с ума сойти :)

Не вопрос, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a> :)

RT <a href="https://twitter.com/meAmidos" title="Dmitry Matrosov">@meAmidos</a>: "<a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> найти отдельно разведчиков и отдельно инженеров намного проще, чем универсалов". Как понять, кто есть кто, во…

Разведчики, <a href="https://twitter.com/meAmidos" title="Dmitry Matrosov">@meAmidos</a>, уверены, что мы живем в лучшем из миров. Инженеры опасаются, что так и есть!

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> гляжу на наш продакшен и вижу, что у нас одни разведчики :( как "продать" ПМу идею про инженеров? Спеть про б…

Спой, <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>, про Стива Джобса и клиентов. Деньги второй раз дают только хорошему сервису с их т.з.

RT <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> тренд - это то, для чего тебе здесь и сейчас удалось собрать команду. Есть питонисты,то и питон будет…

Здесь важно держать в головах, <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>, какие команды удалось собрать большим компаниям.

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a> можно же искать команду целенаправленно: вот эту задачу лучше решает питон, вот эту Node... разве нет? <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

Нет, <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>. Опираться надо на собственный опыт. Используй свои сильные стороны!

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> хорошо, сферический пример: работаем с текстом. Перл на это заточен, Нода -нет. На ней можно сделать тожесамо…

Люди, <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>, это тоже часть сервиса. Такая же, как оборудование или технологии.

RT <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a>: <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> А я вообще не понимаю зачем всё это нужно, есть жеж Ruby :) <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

Разумеется, <a href="https://twitter.com/POS_troi" title="Алексей">@POS_troi</a>! Если есть в наличии рубисты, пиши на нем! <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>

RT <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> не соглашусь,это больше ф-ции техлида.А PM он управляет РЕСУРСАМИ,в т.ч.и людскими.PM в теории м.б. бараном в ра…

Есть и такой подход, <a href="https://twitter.com/de_gis" title="Igor Galtsev">@de_gis</a> ) В этом плане все верно!

RT <a href="https://twitter.com/meAmidos" title="Dmitry Matrosov">@meAmidos</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>, как применить этот афоризм на практике? ;) Какой ключевой вопрос / ответ на собеседовании?

Инженер будет рассказывать про внедрённых технические фишки, -много и с упоением, <a href="https://twitter.com/meAmidos" title="Dmitry Matrosov">@meAmidos</a>. Разведчик - про достигнутые бизнесом победы.

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> и распри из-за денег только ухудшают отношения в коллективе, это уже проверено.

Почитайте тут, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="http://t.co/3NYk7c9cHO">megamozg.ru/post/1736/</a>

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a> Программисты таки не ямы копают. Обьективно оценить качество работы программиста сложно.

Возьмите 2х программеров, <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>, о они совершенно точно определяться друг с другом, кто из них мастер, а кто подмастерье <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> эм, ужас какой-то )) Я скорее согласен с Джоэлем, все это от лукавого: 
<a href="http://t.co/LvUfDV38Fx">local.joelonsoftware.com/wiki/%D0%9C%D0…</a>

Джоэль, разумеется авторитет, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. Но какие из этих методов вы тестили в реале? Я вот делюсь своим опытом. А вы?

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> особенно страдают "инженеры". их вклад долгосрочен и не очевиден. в итоге весь куш у "разведчиков"

Хороший аргумент, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. Буду думать.

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> такая проблема возникает когда команда разношерстная в плане опыта и сами отношения ы тиме нездоров…

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a> мы устраивали занятный эксперимент. оценивали задачи как в planning poker, и соответсвенно делили д…

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a> надо заметить что эффект был весьма занятным. оценки стали несколько точнее и браться стали за дост…

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a> но дело было в начале 00х и концепт был далеко не аджайловским. простое доморощенное изобретение оч…

RT <a href="https://twitter.com/xuntaka" title="Егор Байбара">@xuntaka</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> очень интересный поток мыслей был :) А я из какого лагеря? )))

Ты, <a href="https://twitter.com/xuntaka" title="Егор Байбара">@xuntaka</a>, отдельный класс под названием "Охуенные Байбара Егор" :)

## Среда <small>26 твитов</small>

Рецепт для того, чтобы быть хорошим беком: работайте. На основной работе, на лежаках, дома, на даче, где угодно. Важна практика.

Берите леваки, подработки, шабашки, все, что угодно, расширяющее ваш рабочий кругозор. Кроме того, лишняя работа принесет много контактов.

Обилие рабочего опыта, обилие контактов принесет интересный результат, - вы опробуете себя в самых разных ролях: от падавана до цто.

Тут важно помнить, что роль, - это роль как у актера, который в жизни лысый импотент, а играет чегевару и казанову в одном флаконе.

Не имеет смысла писать: я программист, архитектор и очень крутой. Имеет смысл рассказывать про косяки, которые всплывали на этих ролях.

Ни кому не интересно, какую роль ты играешь. Всем интересно, как ее играть им. И как не быть освистанным, а значит получить много бабла.

Делитесь опытом решения косяков, “палите” темы, рассказывайте о своих неудачах. ЭТО всем интересно! Но чтобы оно было, - нужна практика.

Совершайте ошибки, учитесь их исправлять, не совершайте их второй раз. И однажды вы поймете, - все книжки от гуру, - враньё.

Гуру зарабатывают на книжках, а не на разработке. Иначе у них не было бы времени публиковаться. Берите пример с Марка Лемана (автор EV).

Его ценник - около 1 килоевро за один день работы. Ему не надо публиковаться. Ему не надо следить за фигурой. Он просто ебашит!

Посмотрите на Монса! Он преподает перл в МГУ, пишет облако для Мейла и заботится о 12ти кошках) Разве он кричит о том, какой он крутой?

Он просто крут и охуенен! Кто про вас так скажет? Ни кто, если не будете каждый день работать на разных ролях, набирая практику.

Сегодня линейным программистом, завтра консультантом, послезавтра техдиром. А потом снова программистом. Таких, кто так может - мало.

Должность (роль) можно отнять. Премии лишить. Практику и опыт - нельзя. Кто кому должен завидовать? Кто без кого не обойдется?

И лично от себя добавляю еще раз: не верьте на слово ни кому. Проверяйте, практикуйте, учитесь!

Почему я это все пишу? Потому что потребность в работающих есть всегда, а работает по сути ровно 1%. Остальные занимаются сибурде!

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: В <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> сегодня мотивационная речь и немного скрытой политоты. И любовь, обожание к перлу.

Про мотивацию специально для <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a> <a href="http://t.co/2MR6FWf61N">pic.twitter.com/2MR6FWf61N</a>

Про перл специально для <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a> <a href="http://t.co/wEsuukJG4t">pic.twitter.com/wEsuukJG4t</a>

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Может у меня такой пузырь, где перла нет.

Поменяй слово perl на любое другое название, <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>

Пример правильного построения пула воркеров: <a href="http://t.co/hVVtUTt5To">i.imgur.com/3297BXb.gifv</a>

Давайте про асинхронность. Кто что использует и как дебажит утечки памяти? Указывайте язык, plz!

RT <a href="https://twitter.com/chubik" title="Valentyn Chub">@chubik</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> не только беком. В последнее время у меня спрашивают: как стать девелопером, что читать… На что я отвечаю: бери …

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> вот говоришь "фигачьте фигачтье!" а где же баланс между работой и личной жизнью?

Баланс простой, <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>. Работай ровно столько, чтобы денег хватало на личную жизнь)

## Четверг <small>49 твитов</small>

Судя по “многочисленным” ответам тут мало кто занимается работой на низком уровне, а следовательно большими нагрузками. Поднимаемся выше!

Кто использует в работе какие фреймворки или CMS-ки? Какие бд? Мускул? Постгря? Монга? Redis-ка? Эластик-серч? Мемкеш?

RT <a href="https://twitter.com/imdefined" title="Denis Fedoseev">@imdefined</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> только Plack, только Postgre, только хардкор! Ну и Redis еще

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> нода, монго и редис

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> так о ликах или о тредах тема? Вещи весьма себе перпендикулярные :)

Использование тредов или асинхронности, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>, влечет за собой проблемы ликов и дебага. То есть вопрос про фактическую работу.

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> в managed окружениях типа JVM и .NET с памятью все просто, треды за тобой чистят, но нужен тюнинг иногда.

А с самой памятью, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>, как там? “Хеллоу, ворлд“ сколько занимает в виде веб-сервера?

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> дебаг многопоточности еще тот геммор и потому предпочтительно тратить больше времени на проектирование.

Странный тезис, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>! Программируете сначала на доске/бумаге? Я слышал про подобные собеседования в гугле.

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> само окружение жрет память, но под задачи типа Hello World, нужно брать подходящие инструменты типа пыхи, ноды…

Это отмазки, <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>. Какой размер?

RT <a href="https://twitter.com/Chudesnov" title="散厦知">@Chudesnov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> орякль

И как впечатления, <a href="https://twitter.com/Chudesnov" title="散厦知">@Chudesnov</a>?

RT <a href="https://twitter.com/imdefined" title="Denis Fedoseev">@imdefined</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a> подстрелить соломки в местах всяких рейс-кондишенов на этапе проектирования это всегда хорошо. И до…

RT <a href="https://twitter.com/ivanenok" title="Maxim S. Ivanov">@ivanenok</a>: <a href="https://twitter.com/imdefined" title="Denis Fedoseev">@imdefined</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> я больше о проектировании. типа какие данные шарятся, что с этим делать и как минимизировать свалив…

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> для дебага использую лимитированные очереди везде, где можно. вместо ликов - режекты.

Поясни про лимитированные очереди, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. У нас (перл) нет такого понятия.

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> RethinkDB

Про него слышал только название мельком, <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>. Про что эта история?

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> любая асинхронная задача выполняется через пул потоков, задачи кидаются вначале в очередь, а пул разгребает.

Это знакомо и есть аналоги, <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>. И?

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> если эту очередь выбрать ограниченной, то при попытке засабмитить слишком много тасков получаем эксепшен

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> получается fail fast, и смотрим какой метод пытается переполнить пул и ищем проблему в нем.

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> ситуации там как правило типовые, например таски создаются в цикле. или забыли дожидаться окончания тяжелого …

RT <a href="https://twitter.com/freiksenet_ru" title="Михаил Новиков">@freiksenet_ru</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Язык запросов интересный, сериализуется и выполняется на сервере.

RT <a href="https://twitter.com/chubik" title="Valentyn Chub">@chubik</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> node, mongo, redis, postgress, lua

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Rails + Postgres + Redis + Memcached + Sidekiq

В первый раз слышу про sidekiq, <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>! В бою он под какие задачи юзается?

RT <a href="https://twitter.com/graff_z" title="Kirill">@graff_z</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> ты может и код первый день пишешь?  <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>

Бгг, <a href="https://twitter.com/graff_z" title="Kirill">@graff_z</a> <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a> :)

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> сначала прочитал "В БД" :) Как обычно: любые, требующие много времени и/или надежности. Например, публикация в…

Очень интересно, <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>! Я так понимаю она на тоже на рубях написана и имеет развесистый интерфейс функций?

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Да, ruby. Функции: разные очереди с разными приоритетами, retry провалившихся задач,web-интерфейс для управлен…

Кроновский эмулятор, <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>, должен быть по идее. Не пробовали все периодические задачи на sidekiq пересадить?

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> 1/2 это не совсем крон. Крон только по времени отрабатывает. А в sidekiq можно кидать задачи прямо из приложен…

Я понимаю, <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>. Сталкивался с аналогичными решениями для питона и перла. Мне интересна возможность отказаться от крона. Пробовали?

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> для ruby есть clockwork - легковесный ruby-процесс,аналог cron'а.Он и секунды поддерживает, и приложение загру…

Мегасупер, <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>!

RT <a href="https://twitter.com/suvorovigor" title="Igor Suvorov">@suvorovigor</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Mongo, NodeJS, SailsJS, Redis на сервере

RT <a href="https://twitter.com/lopinopulos" title="Nikolay Lopin">@lopinopulos</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>  раз уж пошла такая пьянка: Расскажите, сталкивались ли вы с хранением в БД данных весом в 5Тб и больше? Ка…

Да, есть такая попаболь, <a href="https://twitter.com/lopinopulos" title="Nikolay Lopin">@lopinopulos</a>. У нас десятки миллионов мелких файлов на огромные тб. Живём на go + aerospike.

Решение по стореджу, <a href="https://twitter.com/lopinopulos" title="Nikolay Lopin">@lopinopulos</a>, готовил <a href="https://t.co/IXLVCO5pKj">facebook.com/profile.php?id…</a>. Стукнитесь к нему, - он расскажет много чего интересного!

RT <a href="https://twitter.com/meAmidos" title="Dmitry Matrosov">@meAmidos</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Perl, Catalyst, Mojolicious, Postgres, MongoDB, Redis, memcached. Ansible, Docker.

RT <a href="https://twitter.com/Bugagazavr" title="Bugagazavr">@Bugagazavr</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a> для sidekiq есть sidetiq, <a href="https://t.co/8WXKROlLhG">github.com/tobiassvn/side…</a>

RT <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a>: <a href="https://twitter.com/Bugagazavr" title="Bugagazavr">@Bugagazavr</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> супер, спасибо! А кто там следит за временем? Они встраиваются в процесс самого сайдкика или что?

RT <a href="https://twitter.com/Bugagazavr" title="Bugagazavr">@Bugagazavr</a>: <a href="https://twitter.com/bytecheg" title="Denis Kuznetsov">@bytecheg</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> да, оно встраивается в сам процесс sidekiq

У кого какие сисадмины? Добрые и помогающие? Заносчивые и вечно спрашивающие “Тикет есть?” Параноидальные? Участвуют ли в вашей разработке?

RT <a href="https://twitter.com/alexfinn_eu" title="alexfinn">@alexfinn_eu</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> тикет есть? :)

## Пятница <small>16 твитов</small>

Про CRUD. Данные можно сохранять сразу, но это тормоза. Можно их хранить в памяти и сбрасывать на сторедж при выкате очередной итерации.

Всем привычен первый подход, в котором мы подобны рожденным ползать. Медленно ползать.

Но если аудитория переваливает за миллионы, есть реальная необходимость переходить ко второму. И это подобно взлетающему самолету.

Не надо кивать здесь в сторону мемкеша. Не поможет. Вообще.

В результате такого подхода мы получаем систему с мгновенной отзывчивостью. Согласитесь, вкусно! Чем мы за это расплачиваемся?

Есть сложности с шардингом данных. Их нельзя порезать между серверами и надо все запихивать в одну ноду. Юзеров резать по серверам целиком.

Есть сложности с утечками, - процессы висящие в памяти неделю и более очень чувствительны к неаккуратному коду.

Критичные данные писать надо в базу по-любому, - на случай даунтайма. Как правило, это связано с финансовыми операциями.

Но вот подход к чтению специфичен - приоритет получают не данные из базы, а из памяти. Прогрев памяти осуществляется на взлете процесса.

Обновление системы сделать мягким очень сложно, так как при каждой итерации может измениться не только модель в сторедже, но и в памяти.

Структура процессов слоистая, - есть отдельно менеджеры данных, есть отдельно пользователи. Таким образом деплой, - сложный (комплексный).

Чтобы изменить состояние сущностей без API "самолета", его придется сажать. А это простой системы с последствиями для юзверей. Недёшево.

Отстрелить крыло самолету тоже не получится, - он упадет. Так что писать код надо сразу без утечек памяти.

Архитектура самолета предполагает комфорт. Пассажиры (бизнес-логика) находятся в удобных креслах простых операций со структурами данных.

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> сохранять в базу асинхронно где это нужно?

Да, разумеется, <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>!

## Воскресенье <small>1 твит</small>

Всю эту неделю по просьбе уважаемого <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> с вами был <a href="https://twitter.com/dsimonov" title="Dmitriy V. Simonov">@dsimonov</a>. Всем удачи!