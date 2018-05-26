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
			return $(this.wrapper + ' [data-control="update"]')
		},
		createControl(){
			return $(this.wrapper + ' [data-control="create"]')
		},
		searchControl(){
			return $(this.wrapper + ' [data-control="search"]')
		},
		cancelUpdateControl(){
			return $(this.wrapper + ' [data-control="cancel-update"]')
		},
		cancelCreateControl(){
			return $(this.wrapper + ' [data-control="cancel-create"]')
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

		update() {
			if (!this.validateUpdate()) return
			this.beforeUpdate()
            let requestApi      = this.$http.patch(this.updateApi, this.model)
            this.updateControl.button('loading')
            return requestApi.then(
                (success) => {
					this.updatedDone(success)
                    this.updateControl.button('reset')
                    this.cancelUpdateControl.trigger('click')
                    arcLib.form.resetErrors()
                    this.updatedCompletely(success)
                    this.afterUpdated(success)
                },
                (response) => {
                    this.updateControl.button('reset')
                    arcLib.form.resetErrors()
                    arcLib.form.parseValidateErrors(response.body, this.wrapper)
                    this.updateError(response)
                    this.afterUpdated(response)
                }
            )
		},
		create() {
			if (!this.validateCreation()) return
			this.beforeCreate()
            let requestApi      = this.$http.post(this.createApi, this.model, {});
            this.createControl.button('loading')
            return requestApi.then(
                (success) => {
					this.createdDone(success)
                    this.createControl.button('reset')
                    this.cancelCreateControl.trigger('click')
                    arcLib.form.resetErrors()
                    this.createdCompletely(success)
                    this.afterCreated(success)
                },
                (response) => {
                    this.createControl.button('reset')
                    arcLib.form.resetErrors()
                    arcLib.form.parseValidateErrors(response.body, this.wrapper)
                    this.createError(response)
                    this.afterCreated(response)
                }
            )
		},
		search(){
			this.beforeSearch()
            let requestApi = this.$http.get(this.searchApi, {params: this.model});
            this.searchControl.button('loading')
            return requestApi.then(
                (success) => {
					this.searchedDone(success)
                    this.searchControl.button('reset')
                    // arcLib.form.resetErrors()
                    this.searchedCompletely(success)
                    this.afterSearched(success)
                },
                (response) => {
                    this.searchControl.button('reset')
                    this.afterSearched(response)
                }
            )
		}
	}
}
