document.querySelector('.time').innerText = new Date().toLocaleTimeString();


document.addEventListener('click', getAjaxHTML);

function getAjaxHTML(){
   const xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function(){
       if (xhr.readyState === 4 && xhr.status === 200){
           document.querySelector(".html-container")
              .innerHTML = xhr.responseText;
       }
   } 
   xhr.open('get', 'clientData.html', true);
   xhr.send();
}


document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

function fetchHtml(){
    fetch('clientData.html')
      .then(response => response.text())
      .then(html => document.querySelector(".html-container").innerHTML = html);
}