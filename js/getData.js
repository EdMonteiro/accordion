var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://design.propcom.co.uk/buildtest/accordion-data.json');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  // console.log(ourData);
  document.getElementById("app").innerHTML = `
   <h1 class="header" id="btn1">${ourData.blocks["0"].heading}</h1>
   <p id="paragraph1"></p>
   <h1 class="header" id="btn2">${ourData.blocks["1"].heading}</h1>
   <p id="paragraph2"></p>
   <h1 class="header" id="btn3">${ourData.blocks["2"].heading}</h1>
   <p id="paragraph3"></p>
 `;
  // renderHtml(ourData); 


/* Get a forEach loop going on after prototyping */
  document.getElementById("btn1").addEventListener("click", function() {
    if( (document.getElementById('paragraph1').classList.toggle("mystyle")) ) {
        document.getElementById("paragraph1").innerHTML = `<p>${ourData.blocks["0"].content}</p>`;
      } else {
        document.getElementById("paragraph1").innerHTML = `<p id="paragraph1"></p>`;;
      }
  })

  document.getElementById("btn2").addEventListener("click", function() {
    if( (document.getElementById('paragraph2').classList.toggle("mystyle")) ) {
        document.getElementById("paragraph2").innerHTML = `<p>${ourData.blocks["1"].content}</p>`;
      } else {
        document.getElementById("paragraph2").innerHTML = `<p id="paragraph1"></p>`;;
      }
  })
  document.getElementById("btn3").addEventListener("click", function() {
    if( (document.getElementById('paragraph3').classList.toggle("mystyle")) ) {
        document.getElementById("paragraph3").innerHTML = `<p>${ourData.blocks["2"].content}</p>`;
      } else {
        document.getElementById("paragraph3").innerHTML = `<p id="paragraph1"></p>`;;
      }
  })
};

ourRequest.send();