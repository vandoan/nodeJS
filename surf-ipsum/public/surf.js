
 $.getJSON("/public/surf.json", function(data) {
 	const list = data;

	const surfIpsum = document.getElementById("surf-ipsum");

	function rand(key){ //surfer
		let keys = key + "s";
		let selectedWord = list[keys][Math.floor(Math.random()*list[keys].length)];
		var word = selectedWord[key];

		if(word == undefined || word == "") { // empty string and undefined check
			if(key == "surfer" || key == "negSurfer"){
				word = "surfer";
			} else if(key == "surfMove") {
				word = "move";
			} else if(key == "adjective") {
				word = "rad";
			} else if(key == "brand") {
				word = "Patagonia";
			} else if(key == "gear") {
				word = "wetsuit";
			} else if(key == "place") {
				word = "California";
			} else if(key == "wave") {
				word = "wave";
			} else if(key == "animal") {
				word = "shark";
			} else {
				word = "surfs up"
			}
		}

		return word;
	}

	function randName(){
			let person = list["names"][Math.floor(Math.random()*list["places"].length)];
			let name = `${person.first} ${person.last}`;
			return name;
	}
	function randPlace(){
		let selectedPlace = list["places"][Math.floor(Math.random()*list["places"].length)];
		let place 	= selectedPlace["place"];
		let city 	= selectedPlace["city"];
		let country = selectedPlace["country"];
		if(city == undefined) {
			city = "";
		}
		if(place == undefined || place == ""){
			place = "Bali";
		}

		if(city != ""){
			city += ", "
		}

		return place = {place:place, city:city, country:country};
	}


	// SENTENCE TYPES
	function sentence1(s=rand('surfer'),a=rand('adjective'),m=rand('surfMove') ){
		return `That ${s} has some ${a} ${m}s. `;
	}

	function sentence2(g=rand('gear'),a=rand('adjective'),b=rand('brand')){
		return `${b}'s ${g}s are pretty ${a}. `;
	}

	function sentence3(w=rand('wave'),a=rand('adjective'),p=rand('place')){
		return `The ${w}s in ${p}, hella ${a}, brah. `;
	}
	function sentence4(e=rand('expression')){
		return `${e} `;
	}
	function sentence5(s=rand('surfer'), a=rand('adjective')){
		return `Check out that ${s}. Wattah ${a}! `;
	}
	function sentence6(p=rand('place'),s=rand('season'), a=rand('adjective')){
		return `${p} in ${s} is pretty ${a}. `;
	}
	function sentence7(s=rand('season'),b=rand('brand'),g=rand('gear'), a=rand('adjective')){
		return `${b}'s ${g}s in ${s} are hella ${a}. `;
	}
	function sentence8(n=rand('negSurfer')){
		return `A buncha ${n}s out there. `;
	}
	function sentence9(n=rand('animal')){
		return `A buncha ${n}s out there. `;
	}
	function sentence10(){
		place = randPlace();		
		return `${place.place} in ${place.city}${place.country}. So rad! `;
	}
	function sentence11(n=rand('negSurfer')){
		return `Don't be a ${n}! `;
	}
	function sentence12(n=rand('negSurfer')){
		return `Hey, ${n}! `;
	}

	function sentence13(n=randName()){
		return `${n}. `;
	}
	function sentence14(n=randName()){
		return `${n}. `;
	}
	function sentence15(g=rand('gear'),a=rand('animal'),n=rand('negSurfer'),w=rand('wave')){
		return `The ${n} ${g} ${a} ${w}. `;
	}
	function sentence16(g=rand('gear'),a=rand('animal'),n=rand('negSurfer'),w=rand('wave')){
		return `A ${n} ${g} ${a} ${w}. `;
	}
	function sentence17(g=rand('gear'),a=rand('animal'),n=rand('negSurfer'),w=rand('wave')){
		return `Lots ah ${a}s, some ${n}s. In need of ${g}. Gimme ${w}s. `;
	}
	function sentence18(n=randName()){
		return `${n}, so hot. `;
	}
	function sentence19(g=rand('gear'),a=rand('animal'),n=rand('negSurfer'),b=rand('brand')){
		return `Some ${b} ${g}. In season, dude. Too many ${n}s. No bueno. Gotta touch dem ${a}s. Sick ${g}, bro. `;
	}
	function sentence20(p=rand('place'),e=rand('expression'),w=rand('wave'),n=randName(),ps=rand('posSurfer'),b=rand('brand')){
		return `Am dreamin of ${p}. Missin da ${w}s. ${e} ${n}'s such ah ${ps}! ${b}! `;
	}


	const sentenceTypes = [sentence1(),sentence2(),sentence3(),sentence4(),
	sentence5(),sentence6(),sentence7(),sentence8(),
	sentence9(),sentence10(),sentence11(),sentence12(),sentence13(),
	sentence14(),sentence15(),sentence16(),sentence17(),sentence18(), 
	sentence19(), sentence20()];
	

	const maxParagraphs = 5;
	function getParagraphNumber() {
		paragraphNumber = 2 + Math.ceil(Math.random() * maxParagraphs);
		return paragraphNumber;
	} 

	const maxSentences = 16;
	function getSentenceNumber() {
		sentenceNumber = 2 + Math.ceil(Math.random() * maxSentences);
		return sentenceNumber;
	} 

	function getRandomSentence(numb){
		let randNum = Math.random(numb)*sentenceTypes.length;
		 return sentenceTypes[Math.ceil(randNum)];
	}

	function buildSentences(){
		var numbUsed = [];
		let numberOfSentences = getSentenceNumber();
		for(let j = 0; j < numberOfSentences; j++){
			let randNum = Math.floor(Math.random()*sentenceTypes.length);
			if(!numbUsed.includes(randNum)){
				numbUsed.push(randNum);
				console.log(randNum);
				console.log(numbUsed);
				console.log(!numbUsed.includes(randNum));
				var newSentence = getRandomSentence(randNum);
				if(newSentence != undefined) {
					surfIpsum.innerHTML += "<span>" + newSentence + "</span>";
				} else {
					console.log("sentenceError: " + randNum);
				}
			} else {
				console.log('sentenceRepeat');
			}
		}
	}

	function buildParagraphs(){
		surfIpsum.innerHTML = "";
		paragraphNumber = getParagraphNumber();
		
		for(let i = 0; i < paragraphNumber; i++){
			surfIpsum.innerHTML += "<p class='p"+i+"'>";

			buildSentences();

			surfIpsum.innerHTML += "</p>";			 
		}
	}

	buildParagraphs();
	
 });

