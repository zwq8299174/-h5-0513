const Utils = {
	deepCopy: function(p, c){　　　　
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
	}
}
export default Utils;