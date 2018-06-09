

// var url = "http://design.propcom.co.uk/buildtest/accordion-data.json";

// var request = new XMLHttpRequest();
// request.open("GET", "http://design.propcom.co.uk/buildtest/accordion-data.json"/*replace for url*/, true);

// // document.getElementById("test1").innerHTML = "TESSSSST!";


// request.onload = function() {
// 	// begin accessing JSON data here
// 	var data = JSON.parse(this.response);

// 	for (var i = 0; i < data.length; i++) {
//     // console.log(data[i].name + ' is a ' + data[i].race + '.');
//     // console.log(data[i].blocks.heading[i]);

//     // var x = data.blocks.heading[i];
//     // document.getElementById("test1").innerHTML = x;

//     console.log(data[i].);
//   }
// }

// request.send();


var url = "http://design.propcom.co.uk/buildtest/accordion-data.json";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // var myObj = JSON.parse(this.responseText);
        // console.log("Json parsed data is: " + JSON.stringify(myObj));
        var response = JSON.parse(xhttp.responseText);

        for (var i = 0; i < response.length; i++) {
          console.log(response[i].blocks);
        }
        // console.log(response.blocks[i]);

        document.getElementById("test1").innerHTML = response.blocks[i].heading;
        // document.getElementById("test2").innerHTML = response.blocks[i].content;

    }
};
xhttp.open("GET", url, true);
// xhttp.open("GET", "data.json", true); /* this line works */
xhttp.responseType = 'json';

xhttp.send();






// var data = '[ { "name": "Aragorn", "race": "Human" }, { "name": "Gimli", "race": "Dwarf" } ]'; 
// data = JSON.parse(data);
// // console.log(data[i].name);

// for (var i = 0; i < data.length; i++) {
// 	console.log(data[i].name);
// }