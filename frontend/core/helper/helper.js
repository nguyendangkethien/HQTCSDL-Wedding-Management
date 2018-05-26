export default {
	playSoundEffect(path){
		var audio = new Audio(path);
		return audio.play();
	},

	countDays(minutes){ // redandunt days in total minutes input
        return Math.floor(minutes/ (60*24) )
    },
    countHours(minutes){ // redandunt hours in total minutes input
        let days = this.countDays(minutes)
        minutes = minutes - (days*24*60)
        return Math.floor(minutes/60)
    },
    countMinutes(minutes){ // redandunt minutes in total minutes input
        let days = this.countDays(minutes)
        let hours = this.countHours(minutes)
        return minutes - (days*24*60) - (hours*60)
    },
	escapeText(text, maxLength = 0){
		if (text == null) return ''
		text = js_string_escape(text)
		if ( maxLength > 0 && text.length > maxLength){
			return text.substring(0, maxLength) + '...'
		}
		return text
	},
	uniqueArrayObject(array, keyToCheck) {
	    let result = []

	    return array.filter( (item) =>  {
	    	if ( !result.includes(item[keyToCheck]) ){
	    		result.push(item[keyToCheck])
	    		return true
	    	}

	    	return false
	    })
	},
	getFullName (fName, lName, mName){
		fName = fName ? fName : ''
		lName = lName ? lName : ''
		mName = mName ? mName : ''

		if (mName.length > 0 && fName.length > 0 && lName.length > 0)
			return this.escapeText(fName + ' ' + mName + ' ' + lName)

		if (mName.length == 0 && fName.length > 0 && lName.length > 0)
			return this.escapeText(fName + ' ' + lName)

		if (mName.length == 0 && fName.length == 0 && lName.length > 0)
			return this.escapeText(lName)

		if (mName.length == 0 && fName.length > 0 && lName.length == 0)
			return this.escapeText(fName)

		return ''


	},
	getNumberOfRating(ratingName){
		ratingName = ratingName ? ratingName.toLowerCase() : 'null'
		switch (ratingName) {
			case 'excellent' :
				return 5
			case 'good' :
				return 4
			case 'average' :
				return 3
			case 'poor' :
				return 2
			case 'new' :
				return 1
			default :
				return 0
		}
    },
    getNameOfRating(ratingNumber){
		ratingNumber = ratingNumber ? ratingNumber : -1
		switch (ratingNumber) {
			case 5 :
				return 'Excellent'
			case 4 :
				return 'Good'
			case 3 :
				return 'Average'
			case 2 :
				return 'Poor'
			case 1 :
				return 'New'
			default :
				return null
		}
    },
    getNumberOfResponsiveness(responsiveName){
		responsiveName = responsiveName ? responsiveName.toLowerCase() : 'null'
		switch (responsiveName) {
			case 'excellent' :
				return 5
			case 'good' :
				return 4
			case 'average' :
				return 3
			case 'poor' :
				return 2
			case 'new' :
				return 1
			default :
				return 0
		}
    },
    getNameOfResponsiveness(responsiveNumber){
		responsiveNumber = responsiveNumber ? responsiveNumber : -1
		switch (responsiveNumber) {
			case 5 :
				return 'Excellent'
			case 4 :
				return 'Good'
			case 3 :
				return 'Average'
			case 2 :
				return 'Poor'
			case 1 :
				return 'New'
			default :
				return null
		}
    },

    //Get full address format:
    // Address 1
	// Address 2
	// City, State, Zip
	// Country
    getFullAddress (addr1 = '', addr2 = '', city = '', state = '', zip = '', country = '') {
		let addr_city = this.joinToArray(city, state, zip).join(', ')
		country = country!=null ? country : ''
		let full_addr = this.joinToArray(addr1, addr2, addr_city, country.toUpperCase()).join('<br />')
		if (full_addr === '') return '-'
        else return full_addr
    },

    //Join strings to array without null or ''
    joinToArray() {
    	var i;
    	var array_result = [];
	    for(i = 0; i < arguments.length; i++) {
	        if (arguments[i] && arguments[i] !== '') {
	            array_result.push(arguments[i]);
	        }
	    }
    	return array_result;
    },
    formatTextIsEmpty(text,str = '-'){
    	if(this.isEmpty(text))
    		return str
    	return text
    },
    isEmpty(str){
        if (str == undefined || str == null || str == false)
            return true;

        if (str.constructor === Array){
            return str.length == 0 ? true : false;
        }
        return str.length == 0;
    },
    renderHtmlStatus(val, type = 'default')
    {
    	if(type == 'default')
    	{
    		if(val)
    			return '<div class="label label-table label-active">Active</div>'
    		return '<div class="label label-table label-queued">Inactive</div>'
    	}
    	//todo
    },
    in_array(needle, haystack) {
	    for(var i in haystack) {
	        if(haystack[i] == needle) return true;
	    }
	    return false;
	},
	arrayEmailToString(array){
        let arrLength = array.length
        let stringRessult = ""
        for( let i = 0; i < arrLength; i++){
            if( i == arrLength - 1)
                stringRessult = stringRessult + array[i]
            else
                stringRessult = stringRessult + array[i] + ", "
        }
        return stringRessult
    },
	// render status tooltip
	renderDataStatus(data, title = '') {
		title = title ? title : ''
		let status_class = ''
		if (data == 'Active' || data == true) {
			status_class = 'active'
			data = 'Active'
		}
		else if (data == 'Closed') {
			status_class = 'closed'
			data = 'Closed'
		}
		else if (data == 'Cancelled' || data == 'cancelled') {
			status_class = 'cancelled'
		}
		else if (data == 'Complete' || data == 'complete') {
			status_class = 'complete'
		}
		else if (data == 'Deleted') {
			status_class = 'queued'
		}
		else if (data == 'On hold') {
			status_class = 'on-hold'
		}
		else if (data == 'Queue') {
			status_class = 'on-hold'
		}
		else if (data == 'Pending') {
			status_class = 'pending'
		}
		else if (data == false) {
			status_class = 'queued'
			data = 'Inactive'
		}
		else data = '-'
		return this.generateHtmlStatus(data, status_class, title)	
	},
	generateHtmlStatus(status, status_class, title = '') {
		if (status != '-') return `<span data-toggle="tooltip" data-placement="top" title="` + title + `" aria-hidden="true" data-original-title="` + title + `" class="label label-table label-` + status_class + `">` + status + `</span>`;
		else return status;
	},

	// render link
	renderLinkRouteName(name, link, id) {
		return `<a href="#/` + link + `/` + id + `">` + name + `</a>` 
	},

	// Format date: MM/DD/YYYY
	formatDateTime(data) {
	    if (!data || data === '') return '-'
	    else return moment(data).format("MM/DD/YYYY")
	},
	createSlug(str){
    	if(!str) return false;
        str = str.replace(/^\s+|\s+$/g, ''); // trim
		str = str.toLowerCase();

		  // remove accents, swap ñ for n, etc
		var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
		var to   = "aaaaaeeeeeiiiiooooouuuunc------";
		for (var i=0, l=from.length ; i<l ; i++) {
			str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		}

		str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		     	.replace(/\s+/g, '-') // collapse whitespace and replace by -
		    	.replace(/-+/g, '-'); // collapse dashes

		return str;
	},
}
