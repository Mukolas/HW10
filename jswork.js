//home work leson 8
//
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let m = document.getElementById('text');
// m.defaultValue= localStorage.getItem('m');
// m.onkeyup = (event)=>{
//     event= m.value;
//     localStorage.setItem('m', event);  
// }
//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
//
// let inp = document.getElementById('text1');
// inp.style.border ='3px solid blue';
// inp.style.backgroundColor ='#cecece';
// inp.style.borderRadius ='5px';
// inp.style.color ='black';   
// inp.onmouseover =()=>{
// inp.style.border ='3px solid orange';
// }
// inp.onmouseout =()=>{
//     inp.style.border ='3px solid blue';
//     }


//     let sel = document.getElementById('select');
//     sel.style.border ='3px solid blue';
//     sel.style.backgroundColor ='#cecece';
//     sel.style.borderRadius ='5px';
// sel.onmouseover =()=>{
// sel.style.border ='3px solid orange';
// }
// sel.onmouseout =()=>{
//     sel.style.border ='3px solid blue';
//     }


// let text = document.getElementById('textOne');
// text.style.border ='3px solid blue';
//     text.style.backgroundColor ='#cecece';
//     text.style.borderRadius ='5px';
// text.onmouseover =()=>{
// text.style.border ='3px solid orange';
// }
// text.onmouseout =()=>{
//     text.style.border ='3px solid blue';
//     }    
    
//     inp.defaultValue= localStorage.getItem('inp');
//     inp.onkeyup = (event)=>{
//         event= inp.value;
//         localStorage.setItem('inp', event);  
//     }
//     text.defaultValue= localStorage.getItem('text');
//     text.onkeyup = (event)=>{
//         event= text.value;
//         localStorage.setItem('text', event);  
//     }
//     let dchek1 = document.getElementById('divCheck1');
//     let dchek2 = document.getElementById('divCheck2');
//     let dchek3 = document.getElementById('divCheck3');
//     dchek1.onmouseover= ()=>{
//      dchek1.style.backgroundColor='#cecece';
//     }
//     dchek1.onmouseout= ()=>{
//         dchek1.style.backgroundColor='';
//        }
//        dchek2.onmouseover= ()=>{
//         dchek2.style.backgroundColor='#cecece';
//        }
//        dchek2.onmouseout= ()=>{
//            dchek2.style.backgroundColor='';
//           }
//           dchek3.onmouseover= ()=>{
//             dchek3.style.backgroundColor='#cecece';
//            }
//            dchek3.onmouseout= ()=>{
//                dchek3.style.backgroundColor='';
//               }
        
//               let checkbox1 = document.getElementById('checkbox1');
//               let checkbox2 = document.getElementById('checkbox2');
//               let checkbox3 = document.getElementById('checkbox3');
              
//               if(localStorage.getItem('checkbox1')=='true'){  
//               t=0;
//               }else{
//                   t=-1;
//               }
//               checkbox1.onclick = (event)=>{
//                 t++;  
//                 if(t%2==0){
//                     event=true;
//                      t=0;
//                 }else{
//                     event=false;
//                 }
//                   localStorage.setItem('checkbox1', event);  
//               }
//               if(localStorage.getItem('checkbox1')=='true'){
                  
//               checkbox1.checked = localStorage.getItem('checkbox1');
//               }

//               if(localStorage.getItem('checkbox2')=='true'){  
//                 t2=0;
//                 }else{
//                     t2=-1;
//                 }
//               checkbox2.onclick = (event)=>{
//                 t2++;  
//                 if(t2%2==0){
//                     event=true;
//                      t=0;
//                 }else{
//                     event=false;
//                 }
//                   localStorage.setItem('checkbox2', event);  
//               }
//               if(localStorage.getItem('checkbox2')=='true'){
                  
//               checkbox2.checked = localStorage.getItem('checkbox2');
//               }
              
//               if(localStorage.getItem('checkbox1')=='true'){  
//                 t3=0;
//                 }else{
//                     t3=-1;
//                 }
//               checkbox3.onclick = (event)=>{
//                 t3++;  
//                 if(t%2==0){
//                     event=true;
//                      t3=0;
//                 }else{
//                     event=false;
//                 }
//                   localStorage.setItem('checkbox3', event);  
//               }
//               if(localStorage.getItem('checkbox3')=='true'){
                  
//               checkbox3.checked = localStorage.getItem('checkbox3');
//               }

//
//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
//Требование : хранить историю своих изменений (даже после перезагрузки страницы).
//Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let myB = document.getElementById('myBtn');
// let text2 = document.getElementById('text2');
// let t=0;
// myB.onclick = (event)=>{
// t++;
// event=text2.value;
// localStorage.setItem('text2.'+t,event);

// backDiw.onclick= ()=>{
//     r=t--;
//     text2.value = localStorage.getItem('text2.'+r);
//     localStorage.setItem('defaults', text2.value);
// }

// nextDiw.onclick= ()=>{
//     z=r++;
//     text2.value = localStorage.getItem('text2.'+z);
//     localStorage.setItem('defaults', text2.value);
// }
//     console.log('asdsadsad');
// }
// text2.defaultValue= localStorage.getItem('defaults');

// let backDiw = document.getElementById('backdiw');
// let nextDiw = document.getElementById('nextdiw');
// backDiw.style.display ='inline-block';
// backDiw.style.borderRadius = '50%';
// nextDiw.style.display='inline-block';
// nextDiw.style.borderRadius = '50%';
// backDiw.onmouseover= ()=>{
//             backDiw.style.backgroundColor='#cecece';
//            }
//            backDiw.onmouseout= ()=>{
//                backDiw.style.backgroundColor='';
//            }
// nextDiw.onmouseover= ()=>{
//             nextDiw.style.backgroundColor='#cecece';
//            }
//            nextDiw.onmouseout= ()=>{
//                nextDiw.style.backgroundColor='';
//            }
//
//
//
//
//
//
let forRead = document.getElementById('forRead');
forRead.style.display  ='none';
let mainDiv = document.getElementById('mainDiv');
mainDiv.style.display ='inline-block';
 mainDiv.style.backgroundColor= '#d4f067';
 mainDiv.style.padding ='20px';
 mainDiv.style.margin= '5px';
 mainDiv.style.border = '3px solid black';
 mainDiv.style.borderRadius ='10px';
 mainDiv.style.position ='absolute';

 let textPIB = document.getElementById('textPIB');
 let textNom = document.getElementById('textNom');
 let textPost = document.getElementById('textPost');
 let textFirm = document.getElementById('textFirm');
 let textSel = document.getElementById('select1');
 let dateDN = document.getElementById('dateDN');

let zapysDiv = document.getElementById('ZapysDiv');
zapysDiv.style.display = 'inline-block';
zapysDiv.style.backgroundColor ='#ebf5c6d6';
zapysDiv.style.padding ='40px';
zapysDiv.style.margin= '5px';
zapysDiv.style.marginLeft ='230px';
zapysDiv.style.border = '3px solid black';
zapysDiv.style.borderRadius ='10px';
zapysDiv.style.width='1050px';
zapysDiv.style.minHeight='467px';

let button = document.getElementById('buttonOfList');
        r=localStorage.length;
        for(n=1;n<=localStorage.length;n++){
        let newDiw =document.createElement('div');
        newDiw.style.border='2px solid black';
        newDiw.style.margin='5px';
        newDiw.style.padding='2px';
        newDiw.style.minHeight='30px';
        let texting = document.createTextNode(localStorage.getItem('firstItem'+n));
            newDiw.appendChild(texting);
            zapysDiv.appendChild(newDiw);
            let butRed = document.createElement('button');
            let redactbtn = document.createTextNode('Redact');
            butRed.style.margin ='5px';
            butRed.style.float='right';
            butRed.personalid=r;
            
            butRed.appendChild(redactbtn);
            newDiw.appendChild(butRed);
    
            let but = document.createElement('button');
            let textbtn = document.createTextNode('Remuve');
            but.style.margin ='5px';
            but.style.float='right';
            but.personalid=r;
            but.appendChild(textbtn);
            newDiw.appendChild(but);
            
            but.onclick=()=>{
                localStorage.removeItem('firstItem'+but.personalid);
                zapysDiv.removeChild(newDiw);
            }
            butRed.onclick=()=>{
               let redact = document.createElement('div');
               redact.style.width='800px';
               redact.style.height='200px';
               redact.style.border='2px solid black';
               redact.style.padding='5px';
               redact.style.margin='5px';
               let PIBform = document.createElement('form');
               PIBform.innerText='Введіть нове ПІБ:';
               let newPIB = document.createElement('input');
               newPIB.style.marginBottom='5px';
               PIBform.appendChild(newPIB);
    
               let NomerForm =document.createElement('form');
               NomerForm.innerText='Введіть новий номер: ';
               let newNom =document.createElement('input');
               NomerForm.style.marginBottom='5px';
               NomerForm.appendChild(newNom);
    
               let PostForm =document.createElement('form');
               PostForm.innerText='Введіть нову Пошту: ';
               let newPost =document.createElement('input');
               PostForm.style.marginBottom='5px';
               PostForm.appendChild(newPost);
    
               let FirmForm =document.createElement('form');
               FirmForm.innerText='Введіть нову фірму: ';
               let newFirm =document.createElement('input');
               FirmForm.style.marginBottom='5px';
               FirmForm.appendChild(newFirm);
    
               let ViddilForm =document.createElement('form');
               ViddilForm.innerText='Введіть новий відділ: ';
               let newViddil =document.createElement('input');
               ViddilForm.style.marginBottom='5px';
               ViddilForm.appendChild(newViddil);
    
               let DNForm =document.createElement('form');
               DNForm.innerText='Нова Дата Народження: ';
               let newDN =document.createElement('input');
               newDN.type='date';
               DNForm.style.marginBottom='5px';
               DNForm.appendChild(newDN);
    
               let changeBut= document.createElement('button');
               changeBut.innerText='Змінити';
               changeBut.style.width='65px';
               changeBut.style.height='30px';
               changeBut.onclick=()=>{
                localStorage.setItem('firstItem'+r,`ПІБ: ${newPIB.value} || Номер: ${newNom.value} || Пошта: ${newPost.value} || Фірма: ${newFirm.value} || Відділ: ${newViddil.value} || ДН: ${newDN.value}`);
                zapysDiv.removeChild(newDiw);
                funk();
               }
    
               redact.appendChild(PIBform);
               redact.appendChild(NomerForm);
               redact.appendChild(PostForm);
               redact.appendChild(FirmForm);
               redact.appendChild(ViddilForm);
               redact.appendChild(DNForm);
               redact.appendChild(changeBut);
    
               newDiw.appendChild(redact);
            }
            funk();
        }
        
button.onclick=()=>{
    r++;
 person={
PIB : textPIB.value,
number : textNom.value,
posht : textPost.value,
firm : textFirm.value,
viddil : textSel.value,
dateBorn  : dateDN.value
}

localStorage.setItem('firstItem'+r,`ПІБ: ${textPIB.value} || Номер: ${textNom.value} || Пошта: ${textPost.value} || Фірма: ${textFirm.value} || Відділ: ${textSel.value} || ДН: ${dateDN.value}`);
function funk(){
    let newDiw =document.createElement('div');
    newDiw.style.border='2px solid black';
    newDiw.style.margin='5px';
    newDiw.style.padding='2px';
    newDiw.style.minHeight='30px';
    let texting = document.createTextNode(localStorage.getItem('firstItem'+r));
        newDiw.appendChild(texting);
        zapysDiv.appendChild(newDiw);

        let butRed = document.createElement('button');
        let redactbtn = document.createTextNode('Redact');
        butRed.style.margin ='5px';
        butRed.style.float='right';
        butRed.personalid=r;
        
        butRed.appendChild(redactbtn);
        newDiw.appendChild(butRed);

        let but = document.createElement('button');
        let textbtn = document.createTextNode('Remuve');
        but.style.margin ='5px';
        but.style.float='right';
        but.personalid=r;
        but.appendChild(textbtn);
        newDiw.appendChild(but);
        
        but.onclick=()=>{
            localStorage.removeItem('firstItem'+but.personalid);
            zapysDiv.removeChild(newDiw);
        }
        butRed.onclick=()=>{
           let redact = document.createElement('div');
           redact.style.width='800px';
           redact.style.height='200px';
           redact.style.border='2px solid black';
           redact.style.padding='5px';
           redact.style.margin='5px';
           let PIBform = document.createElement('form');
           PIBform.innerText='Введіть нове ПІБ:';
           let newPIB = document.createElement('input');
           newPIB.style.marginBottom='5px';
           PIBform.appendChild(newPIB);

           let NomerForm =document.createElement('form');
           NomerForm.innerText='Введіть новий номер: ';
           let newNom =document.createElement('input');
           NomerForm.style.marginBottom='5px';
           NomerForm.appendChild(newNom);

           let PostForm =document.createElement('form');
           PostForm.innerText='Введіть нову Пошту: ';
           let newPost =document.createElement('input');
           PostForm.style.marginBottom='5px';
           PostForm.appendChild(newPost);

           let FirmForm =document.createElement('form');
           FirmForm.innerText='Введіть нову фірму: ';
           let newFirm =document.createElement('input');
           FirmForm.style.marginBottom='5px';
           FirmForm.appendChild(newFirm);

           let ViddilForm =document.createElement('form');
           ViddilForm.innerText='Введіть новий відділ: ';
           let newViddil =document.createElement('input');
           ViddilForm.style.marginBottom='5px';
           ViddilForm.appendChild(newViddil);

           let DNForm =document.createElement('form');
           DNForm.innerText='Нова Дата Народження: ';
           let newDN =document.createElement('input');
           newDN.type='date';
           DNForm.style.marginBottom='5px';
           DNForm.appendChild(newDN);

           let changeBut= document.createElement('button');
           changeBut.innerText='Змінити';
           changeBut.style.width='65px';
           changeBut.style.height='30px';
           changeBut.onclick=()=>{
            localStorage.setItem('firstItem'+r,`ПІБ: ${newPIB.value} || Номер: ${newNom.value} || Пошта: ${newPost.value} || Фірма: ${newFirm.value} || Відділ: ${newViddil.value} || ДН: ${newDN.value}`);
            zapysDiv.removeChild(newDiw);
            funk();
           }

           redact.appendChild(PIBform);
           redact.appendChild(NomerForm);
           redact.appendChild(PostForm);
           redact.appendChild(FirmForm);
           redact.appendChild(ViddilForm);
           redact.appendChild(DNForm);
           redact.appendChild(changeBut);

           newDiw.appendChild(redact);
        }
        

}
funk();

}



