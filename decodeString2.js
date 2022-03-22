const decoderMain = function(userString) {
	let counter = 0;
	let numArray = [];
	let brandNewArray = [];
	let newText
    let oneNum = parseInt(userString);
    let mySliceArray = userString.slice(0); 
    userString = userString.slice(0); 
    mySliceArray = mySliceArray.split('');
    for(let i = 0; i < mySliceArray.length; i++) {
            numArray.push(1);
            counter++;  
    }
    //console.log(counter);
    for(let i = 0; i < numArray.length; i++) {
        numArray[i] = userString.charCodeAt(i) + oneNum; 
    }
    for(let i = 0; i < counter; i++) { //i < 5
        brandNewArray.push('a');
    }
    for(let i = 0; i < numArray.length; i++) { //i < 5
        brandNewArray[i] = String.fromCharCode(numArray[i]); 
    }
    brandNewArray.shift(); //array of chars
    newText = brandNewArray.join('');
    console.log(newText);
}

decoderMain("2acdc");