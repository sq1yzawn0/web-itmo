function CountWords(str) { 
  return str.split(' ').length;
}
var newStr = 'Welcome!!! hhhhs';
document.write(newStr,'<br>');
document.write('Количество символов: ', newStr.length,'<br>');
document.write('Количество слов: ',CountWords(newStr),'<br>');

var url = window.location;
var urlStr = url.href;
document.write('URL: ',url.href,'<br>');
document.write('Протокол: ',url.protocol,'<br>');
document.write('Название файла: ',url.pathname.split('.')[0].split('/').pop(),'<br>');
document.write('Расширение файла: ',url.pathname.split('.')[1],'<br>');

var params = window.location.search.replace('?','');
document.write('test: ',params, '<br>');
var paramsArray = params.split('&');
var paramsObj = {};
  for(let elem in paramsArray)
 { 
paramsArray[elem] = paramsArray[elem].split('=');
paramsObj[paramsArray[elem][0]] = paramsArray[elem][1];
 }  
document.write('Params: ');
  for(let elem in paramsObj)
{
  document.write(elem,':',paramsObj[elem],' ',);
}

var anch = 'Anchor';
var newAnch = 'New Anchor';
document.write('<br>','Новый анкор: ',anch.anchor('a1'),'<br>');
document.write('Еще один анкор: ',newAnch.anchor('a2'),'<br>');

document.write('<a href="https://www.google.com" target="_blank" id="google">Google</a><br>');
document.write('<a href="https://www.yandex.ru" target="_blank" id="yandex">Yandex</a><br>');

document.write('<img id = "googlePic" src="content/google.png" width="100" height="100">');
document.write('<img id = "yandexPic" src="content/yandex.png" width="101" height="101">','<br>');

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');

document.write('innerHTML первого анкора: ', document.anchors[0].innerHTML, '<br>');
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');

document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(images){return images.width;})),'<br>');

let heightsSumm = 0;
const imagesCollection = document.images;
for(let i = 0; i < imagesCollection.length; i++){
  heightsSumm += imagesCollection[i].height;
}
document.write('Сумма всех высот картинок: ', heightsSumm,'<br>');


for (let i = 0;i<10;i++)
{
  document.write('<form name = "formNumb',i,'" id = "',i,'">');
  document.write('<input type="button" value="Имя формы" onClick="alert(\'Имя формы\')"class = "reg"></input>');
  document.write('<input type="login"></input>');
  document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')" class = "whois"></input>');
  document.write('<input type="reset" class = "reset"></input>');
  document.write('<input type="button" value="Пок. кол-во. полей" onClick="alert(',document.forms[i].childElementCount+1,')" class="showMe"></input>','</form>');
}

document.write('Имена всех четных форм: ');
for (let i = 0;i<10;i++)
{
    modYesNO = (i%2==0)?document.write('formNumb',i,', '):0;
}
document.write('<br>');

document.write('<a href = "https://www.yandex.ru" target="_blank">Yandex</a><br>');
document.write('<a href = "https://www.mail.ru" target="_blank">Mail</a><br>');
document.write('<a href = "https://www.google.ru" target="_blank">Google</a><br>');
document.write('<a href = "https://www.vk.com" target="_blank">VK</a><br>');
document.write('<a href = "https://www.ifmo.ru" target="_blank">ITMO</a><br>');
document.write('<a href = "https://www.openedu.ru" target="_blank">OPENEDU</a><br>');
document.write('<a href = "https://www.wikipedia.org" target="_blank">Wikipedia</a><br>');
document.write('<a href = "https://www.twitter.com" target="_blank">Twitter</a><br>');
document.write('<a href = "https://www.rambler.ru" target="_blank">Rambler</a><br>');

document.write('<table><tr><th>Уникальный текст</th><th>Количество ссылок</th><th>Href</th></tr>');
var aTaged = document.getElementsByTagName('a');
for (let i = 0;i<aTaged.length;i++)
{
  var count = 0;
  for (let k = 0;k<aTaged.length;k++)
  {
    if (aTaged[i].innerHTML == aTaged[k].innerHTML)
    {
      count +=1; 
    }
  }
  document.write('<tr><td>',aTaged[i].innerHTML,
  '</td><td>',count,'</td><td>',aTaged[i],'</td></tr>')
  document.write('<br>');
}
document.write('</table>');