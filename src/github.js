import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Github {
	constructor(http) {
		this.http = http;
	}

	activate() {
		let uri = 'https://api.github.com/repos/aurelia/framework/issues';
		let results = [];

		return Promise.all([
		    this.http.get(uri).then(response => results[0] = response.content),
		  //  this.http.get(uri+'1').then(response => results[1] = response.content),
		   // this.http.get(uri+'2').then(response => results[2] = response.content)
		]).then(() => {
			this.repos = results[0];//.concat(results[1], results[2]);
		});
	}
}