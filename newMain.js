class Helpers {
	static isPrime(num) {
		for (var i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}

	static primeNumbeArrayrGenerator(len) {
		let arr = [2];
		let count = 3;
		while (arr.length < len) {
			if (this.isPrime(count)) {
				arr.push(count);
			}
			count += 2;
		}
		return [0, ...arr];
	}
}

class App {
	constructor(qtdNum, linesPerPage, lineLength) {
		this.qtdNum = qtdNum;
		this.linesPerPage = linesPerPage;
		this.lineLength = lineLength;
		this.primesArray = Helpers.primeNumbeArrayrGenerator(qtdNum);
	}

	#lineGenerator(ROWOFFSET) {
		let line = [];
		for (let C = 0; C < this.lineLength; C++) {
			if (ROWOFFSET + C * this.linesPerPage <= this.qtdNum) {
				line.push(this.primesArray[ROWOFFSET + C * this.linesPerPage]);
			}
		}
		return line.join('|');
	}

	#pageGenerator(PAGEOFFSET) {
		for (let ROWOFFSET = PAGEOFFSET; ROWOFFSET <= PAGEOFFSET + this.linesPerPage - 1; ROWOFFSET++) {
			const line = this.#lineGenerator(ROWOFFSET);
			console.log(line + ' ' + ' ');
		}
	}

	generateOutput() {
		let PAGENUMBER = 1;
		let PAGEOFFSET = 1;
		while (PAGEOFFSET <= this.qtdNum) {
			console.log('Page ', PAGENUMBER);
			this.#pageGenerator(PAGEOFFSET);
			PAGENUMBER++;
			PAGEOFFSET += this.linesPerPage * this.lineLength;
		}
	}
}

const app = new App(1000, 50, 4);
const app2 = new App(1000, 5, 10);
const app3 = new App(50, 5, 5);

app.generateOutput();
