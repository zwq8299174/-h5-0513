const Utils = {
	deepCopy: function(p, c) {　　　　
		var c = c || {};　　　　
		for(var i in p) {　　　　　　
			if(typeof p[i] === 'object') {
				if(p[i] === null) {
					c[i] = null;
				} else {　　　　　　　　　
					c[i] = (p[i].constructor === Array) ? [] : {};　　　　　　　　
					this.deepCopy(p[i], c[i]);
				}　　　　　　
			} else {　　　　　　　　
				c[i] = p[i];　　　　　　
			}　　　　
		}　　　　
		return c;　　
	},
	getUrlVars() {
		var vars = [],
			hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = (hash[1]&&hash[1].indexOf('#')>-1)?hash[1].substring(0,hash[1].indexOf('#')):hash[1];
		}
		return vars;
	}
}
export default Utils;