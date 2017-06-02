/*
 * Archivo principal de JS
 */

 (function main(){
   var boxes = Array.from(document.getElementsByClassName('box-portfolio'));
   var modal = document.getElementById("portfolio-modal");
   var bodyModal, close, img, title, logo, line1, estrellita, line2, texto;
   boxes.forEach(function(box){
     box.addEventListener("click", function(){
       modal.innerHTML = "";
       bodyModal = document.createElement("div");
       bodyModal.classList.add("modal-body");
       //titulo modal
       titulo = document.createElement('h4');
       tituloCont = document.createTextNode('PROJECT TITLE');
       titulo.appendChild(tituloCont);
       bodyModal.appendChild(titulo);
       //logo
       logo = document.createElement('div');
       logo.setAttribute('class', 'black-star');
       line1 = document.createElement('div');
       estrellita = document.createElement('i');
       estrellita.setAttribute('class', 'fa fa-star fa-2x');
       estrellita.setAttribute('aria-hidden', 'true');
       line1.setAttribute('class', 'line');
       line2 = document.createElement('div');
       line2.setAttribute('class', 'line');
       logo.appendChild(line1);
       logo.appendChild(estrellita);
       logo.appendChild(line2);
       bodyModal.appendChild(logo);
       //img
       bodyModal.innerHTML += box.innerHTML;
       //texto
       texto = document.createElement('p');
       textContent = document.createTextNode('Use this area to describe your project. The icon above is part of a free icon set by Flat Icons. On their website you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!');
       texto.appendChild(textContent);
       bodyModal.appendChild(texto);
       //Datos
       tData1 = document.createElement('p');
       tData1.setAttribute('class', 'data');
       tNodeData1 = document.createTextNode('Client: ');
       tData1.appendChild(tNodeData1);
       data1 = document.createElement('span');
       data1.setAttribute('class', 'texto-color');
       nodeData1 = document.createTextNode('Star Bootstrap ');
       data1.appendChild(nodeData1);
       tData1.appendChild(data1);
       bodyModal.appendChild(tData1);

       tData2 = document.createElement('p');
       tData2.setAttribute('class', 'data');
       tNodeData2 = document.createTextNode('Date: ');
       tData2.appendChild(tNodeData2);
       data2 = document.createElement('span');
       data2.setAttribute('class', 'texto-color');
       nodeData2 = document.createTextNode('April 14 ');
       data2.appendChild(nodeData2);
       tData2.appendChild(data2);
       bodyModal.appendChild(tData2);

       tData3 = document.createElement('p');
       tData3.setAttribute('class', 'data');
       tNodeData3 = document.createTextNode('Service: ');
       tData3.appendChild(tNodeData3);
       data3 = document.createElement('span');
       data3.setAttribute('class', 'texto-color');
       nodeData3 = document.createTextNode('Web Development');
       data3.appendChild(nodeData3);
       tData3.appendChild(data3);
       bodyModal.appendChild(tData3);

       //Botón de cierre
       modal.appendChild(bodyModal);
       modal.classList.remove("hide");
       close = document.createElement("div");
       close.classList.add("close");
       exis = document.createElement("p");
       exisCont = document.createTextNode("X");
       exis.appendChild(exisCont);
       close.appendChild(exis);
       modal.appendChild(close);
       close.addEventListener("click",function(){
         modal.classList.add("hide");
       });
     });
   });
 })();