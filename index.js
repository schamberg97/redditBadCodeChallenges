var alphabet = ['A', "B", "C", 'D', "E", "F", "G", "H", "I", "J", 'K', 'L', 'M', "N", "O", "P", `Q`, `R`, `S`, "T", "U", "V", "W", "X", "Y", "Z"] // the best solution. Truly.
var randomPossiblyFakeQuoteIGoogledJustForThis = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
var fs = require('fs')
const readline = require('readline');

function askQuestion(query) { // Yeah, I've just straight copied it from StackOverflow
	return new Promise(resolve => {
	const niceties = "user@Deep-Thought.local ~>  question"
	console.log()
	console.log(niceties)
	console.log('Process PID: ' + process.pid) // So i know which bad boy to kill later, when I am bored from endless stream pausing and unpausing
	console.log('Loading...')
	setTimeout(() => {
		console.log()
    	const rl = readline.createInterface({
    	    input: process.stdin,
    	    output: process.stdout,
    	});
    	rl.question(query, ans => {
    	    rl.close();
    	    resolve(ans);
		})
	}, 500)
	})
}

function wordCorrecter(str, num) { // stole from stack, 12 liines are way too much for me
    str = str.toLowerCase();
    var result = '';
    var charcode = 0;
    for (var i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) + num;
        result += String.fromCharCode(charcode);
    }
    return result;
}

async function THE_SHIT() {  // Yeah, i do not follow camelCase convention here
	var callback = function(result) {console.log(result)}
	const ans = await askQuestion("Please enter the parameters for the calculation: ");
	life_universe_everything(ans, callback);
}

function life_universe_everything(inp, callback) { //i do not follow camelCase convention here either
			
		var path = require('path') // Maybe I should have declared it elsewhere? Who knows....
		var book = ''
		
		// Hitchhiker's Guide to The Galaxy is not in Public Domain. So let's pretend Leo Tolstoy's War And Peace IS the Hitchhiker's Guide to The Galaxy. I know it's hard, but you have to cooperate.
		var bookStream = fs.createReadStream(path.resolve('./book.txt'), { highWaterMark: 1024 }) // only 1024 bytes at a time, see line 10. Original 128 bytes were considered to be too evil
		
		//Don't worry, Deep Thought ALSO needed some time to think ;)
		// Seriously, though, change highWaterMark to something bigger or it will REALLY take a long time. Especially since War and Peace is big.

		bookStream.on('data', (chunk) => {
			console.log(`Received ${chunk.length} bytes of data.`);
			let data = chunk.toString()
			book = book + data
			bookStream.pause() // I AM REALLY SCARED OF OVERWHELMING MY CAMPUUUTAH, OKEY? MY COOLER IS FAILING, MY CPU MAY OVERHEAT
			setTimeout(() => {
				bookStream.resume()
			}, 1200)
		});
		bookStream.on('end', async () => {
			book = book.toString() // I am confused, streams, buffers, etc.. Do i need to do .toString() ???
			callback(doFurtherEvilStuff(book, randomPossiblyFakeQuoteIGoogledJustForThis))
		});

		function l2n(l) {
			let r = l.charCodeAt('boogey-wonderland') // entered nonsense. Just because I can.
			if (r < 97 && l.length === 1) { // maybe the letter is even something beyond 'z'. I don't know. Do you?
				r = r - 64 // accounted for human-friendly counting of alphabet letters. I am evil, but I have standards. I can't be evil to myself
			}
			else if (l.length === 1) {
				r = r - 96
			}
			return r
		}

		function doFurtherEvilStuff(book, randomPossiblyFakeQuoteIGoogledJustForThis) {
			console.log('The computer finally got here and did not explode!')
			var goodLetterNumberOne
			var goodLetterNumberTwo
			for (let n = book.length; n > 0; n--) {
				if (book[n] == "D" || book == 'd') {
					goodLetterNumberOne = book[n]
				}
				if (book[n] == "B" || book == 'b') {
					goodLetterNumberTwo = book[n]
				}
			}
			if (!(goodLetterNumberOne && goodLetterNumberTwo)) { // I am not sure there is no error here, was lazy to test
				
				for (let n = randomPossiblyFakeQuoteIGoogledJustForThis.length; n > 0; n--) {
					if (randomPossiblyFakeQuoteIGoogledJustForThis[n] == "D" || randomPossiblyFakeQuoteIGoogledJustForThis == 'd') {
						goodLetterNumberOne = randomPossiblyFakeQuoteIGoogledJustForThis[n]
					}
					if (randomPossiblyFakeQuoteIGoogledJustForThis[n] == "B" || randomPossiblyFakeQuoteIGoogledJustForThis == 'b') {
						goodLetterNumberTwo = randomPossiblyFakeQuoteIGoogledJustForThis[n]
					}
				}
			}
			else {
				goodLetterNumberOne = alphabet[l2n('F')-3]; goodLetterNumberTwo = alphabet[l2n('x') - 23]
			}
			var numBears = [l2n(goodLetterNumberOne), l2n(goodLetterNumberTwo)]
			numbers = numBears.join() // thanks God I don't 'use strict' mode. Otherwise the code would error out. Well, I am evil, this should not matter in any case
			numbers = numbers.replace(',', '') // the first argument kind of looks like a smile doesn't it?
			numbers = parseInt(numbers)
			if (wordCorrecter(inp.toUpperCase(), 2) == 'uvctavtgm') {  // inflation stuff
				numbers = Math.ceil(numbers * 1.119)
			}
			return numbers
		}

}

THE_SHIT()
