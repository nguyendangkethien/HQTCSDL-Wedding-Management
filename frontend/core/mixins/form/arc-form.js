/**
	model : object, // CRUD Model
	updateApi : url, // Update API URL
	createApi : url, // Create API URL
	wrapper : element, // Element wrapper form
**/
import mode from '../../config/form-mode'

export default {
	computed : {
		updateControl(){
			return this.wrapper + ' [data-control="update"]'
		},
		createControl(){
			return this.wrapper + ' [data-control="create"]'
		},
		searchControl(){
			return this.wrapper + ' [data-control="search"]'
		},
        updateControl(){
            return this.wrapper + ' [data-control="update"]'
        },
		cancelUpdateControl(){
			return this.wrapper + ' [data-control="cancel-update"]'
		},
		cancelCreateControl(){
			return this.wrapper + ' [data-control="cancel-create"]'
		},
		cancelSearchControl(){
			return $(this.wrapper + ' [data-control="cancel-search"]')
		},
		formMode(){
			return mode
		}
	},
	methods : {
		validateCreation(){ return true },
		validateUpdate(){ return true },

		beforeUpdate() {},
		beforeCreate() {},
		beforeSearch() {},

		afterUpdated() {},
		afterCreated() {},
		afterSearched() {},

		updatedDone(success) {},
		createdDone(success) {},
		searchedDone(success) {},

		updatedCompletely(data) {},
		createdCompletely(data) {},
		searchedCompletely(data) {},

		updateError(data) {},
		createError(data) {},

		createHasDuplicate(success){},
		
		beforeGetDataCommon(){},
		afterGetDataCommon(data){},
        afterGetRecord(success){},

        getRecordById(id){
            let requestApi      = this.$http.get(this.getRecordApi + '?id=' + id)
            return requestApi.then(
                (success) => {
                    this.afterGetRecord(success)
                },
                (response) => {
                    
                }
            )
        },
        getParamsCommon(){ return {}},
		prepareDataCommon(){
			this.beforeGetDataCommon()
            let params = this.getParamsCommon()
			let requestApi = this.$http.get(this.commonDataApi,{params: params});
            return requestApi.then(
                (success) => {
                    this.afterGetDataCommon(success)
                },
                (response) => {
                }
            )
        },

		update() {
			if (!this.validateUpdate()) return
			this.beforeUpdate()
            let requestApi      = this.$http.patch(this.updateApi, this.model)
            
            $(this.updateControl).button('loading')
            return requestApi.then(
                (success) => {
					this.updatedDone(success)
                    arcLib.form.resetErrors()
                    this.updatedCompletely(success)
                    this.afterUpdated(success)
                },
                (response) => {
                    
                    arcLib.form.resetErrors()
                    arcLib.form.parseValidateErrors(response.body, this.wrapper)
                    this.updateError(response)
                    this.afterUpdated(response)
                }
            ).then(function(){
                $(this.updateControl).button('reset')
            })
		},
		create() {
			if (!this.validateCreation()) return
			this.beforeCreate()
            let requestApi      = this.$http.post(this.createApi, this.model, {});
            $(this.createControl).button('loading')
            return requestApi.then(
                (success) => {
                	arcLib.form.resetErrors()
                	if(success.body.data.confirm)
                		return this.createHasDuplicate(success)
                	
					this.createdDone(success)
                    // $(this.cancelCreateControl).trigger('click')
                    this.createdCompletely(success)
                    this.afterCreated(success)
                },
                (response) => {
                    arcLib.form.resetErrors()
                    arcLib.form.parseValidateErrors(response.body, this.wrapper)
                    this.createError(response)
                    this.afterCreated(response)
                }
            ).then(function(){
            	$(this.createControl).button('reset')
            })
		},
        createAddressClient() {
            if (!this.validateCreation()) return
            this.beforeCreate()
            let requestApi      = this.$http.post(this.createApi, this.model.address, {});
            $(this.createControl).button('loading')
            return requestApi.then(
                (success) => {
                    arcLib.form.resetErrors()
                    if(success.body.data.confirm)
                        return this.createHasDuplicate(success)
                    
                    this.createdDone(success)
                    // $(this.cancelCreateControl).trigger('click')
                    this.createdCompletely(success)
                    this.afterCreated(success)
                },
                (response) => {
                    arcLib.form.resetErrors()
                    arcLib.form.parseValidateErrors(response.body, this.wrapper)
                    this.createError(response)
                    this.afterCreated(response)
                }
            ).then(function(){
                $(this.createControl).button('reset')
            })
        },
		search(){
			this.beforeSearch()
            this.beginLoadingTable()
			$(this.searchControl).button('loading')
            let requestApi = this.$http.get(this.searchApi, {params: this.model});
            return requestApi.then(
                (success) => {
					this.searchedDone(success)
                    // arcLib.form.resetErrors()
                    this.searchedCompletely(success)
                    this.afterSearched(success)
                },
                (response) => {
                    this.afterSearched(response)
                }
            ).then(function(){
            	$(this.searchControl).button('reset')
                this.endLoadingTable()
            })
		},
		prepareDataForGeneralInfoClient(param){
			let requestApi = this.$http.get(this.clientDetailApi + '?client_id=' + param);
            return requestApi.then(
                (success) => {
                    this.afterGetDataForGeneralInfoClient(success)
                },
                (response) => {
                }
            )
		},
		afterGetDataForGeneralInfoClient(data){},

		getAddressDataOfClient(obj,id){
			let requestApi = this.$http.get(this.addressData +'?obj='+obj+ '&id=' + id);
            return requestApi.then(
                (success) => {
                	// success = 
                	// [{
                	// 	code: '1',
                	// 	description: 'data demo',
                	// 	address1: 'data demo 1',
                	// 	address2: 'data demo 2',
                	// 	city: 'data demo',
                	// 	state: 'data demo',
                	// 	country: 'data demo',
                	// }];
                    this.afterGetDataOfClient(success)
                },
                (response) => {
                }
            )
		},
		afterGetDataOfClient(data){},

        getCustomFieldsData(page,tab,id){
            let requestApi = this.$http.get(this.custonFieldsApi +'?page='+page+ '&tab=' + tab + '&id=' + id);
            return requestApi.then(
                (success) => {
                    // success = 
                    // [{
                    //  code: '1',
                    //  description: 'data demo',
                    //  address1: 'data demo 1',
                    //  address2: 'data demo 2',
                    //  city: 'data demo',
                    //  state: 'data demo',
                    //  country: 'data demo',
                    // }];
                    this.afterGetCustomFieldData(success)
                },
                (response) => {
                }
            )
        },
        afterGetCustomFieldData(response){},

        getAddressDataById(){
            let requestApi = this.$http.get(this.getDataAddressApi+'?address_id=' + this.addressId);
            return requestApi.then(
                (success) => {
                    // success = 
                    // [{
                    //  code: '1',
                    //  description: 'data demo',
                    //  address1: 'data demo 1',
                    //  address2: 'data demo 2',
                    //  city: 'data demo',
                    //  state: 'data demo',
                    //  country: 'data demo',
                    // }];
                    this.afterGetAddressDataById(success)
                },
                (response) => {
                }
            )
        },
        afterGetAddressDataById(response){},

        prepareDataForGeneralInfotransferee(param){
            let requestApi = this.$http.get(this.detailApi + '?transferee_id=' + param);
            return requestApi.then(
                (success) => {
                    arcLib.form.resetErrors()
                    this.afterGetDataForGeneralInfoTransferee(success)
                },
                (response) => {
                }
            )
        },
        afterGetDataForGeneralInfoTransferee(res){},
        getListContactByClient(api,param){
            let requestApi = this.$http.get(api + '?client_id=' + param);
            return requestApi.then(
                (success) => {
                    this.afterGetListContactByClient(success)
                },
                (response) => {
                }
            )
        },
        afterGetListContactByClient(res){},
        
        changeDataMultiSelectFromat(list){
            let result = []
            if(list == null || list == undefined)
                return result
            else
                for(let i = 0; i < list.length; i++)
                    result.push({
                        id: String(list[i].id),
                        html: list[i].name,
                        keywords: list[i].name,
                        thumbHtml: list[i].name,
                        icon: ''
                    })
            return result
        },
	}  
}