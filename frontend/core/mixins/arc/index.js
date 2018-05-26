import mode from '../../config/form-mode'
import Helper from '../../helper/helper'
var numeral = require('numeral');
export default {
    data(){
        return {
            filters : [],
            ssnCongfig : {
                pattern : '[0-9]*',
                typeInput : 'numeric',
                type : 'password',
                html : '<i class="fa fa-eye" aria-hidden="true"></i>'
            },
            addressVueMap : null,
            isShowMap : false
        }
    },
	mounted() {
        // this.search()
	},
	methods : {
        clearSearch() {
            this.searchModel = JSON.parse(JSON.stringify(this.defaultSearch))
            this.search()
        },
        afterSearched(success) {
            this.tableData = success.body.data
        },
        beforeSearch() {
            this.model = this.searchModel;
        },
        checkDataNull(data) {
            if (!data || data === '') return '-'
            else return data
        },

        // Format date: MM/DD/YYYY
        formatDateTime(data) {
            if (!data || data === '') return '-'
            else return moment(data).format("MM/DD/YYYY")
        },

        // Format currency: 12345678.34567 => $12,345,678.35
        formatCurrency(data) {
            if (!data || data === '') return '-'
            else return numeral(data).format('$0,0.00');
        },
        magicReactiveFilters(object)
        {
            let data = this.filters
            this.filters = {}
            this.filters = Object.assign (data,object)
        },
        messageServerError()
        {
            toastr.error('Server error. Please try again or contact IT helpdesk.')
        },
        beginLoadingTable()
        {
            $('#'+ this.wrapperTable).closest('.table-loading').find('.cm-loading-bg, .cm-loading').show()
        },
        endLoadingTable()
        {
            $('#'+this.wrapperTable).closest('.table-loading').find('.cm-loading-bg, .cm-loading').hide()
        },
        changeConfigSsn(){
            if(this.ssnCongfig.type == 'password'){
                this.ssnCongfig = {
                    type : 'text',
                    html : '<i class="fa fa-eye-slash" aria-hidden="true"></i>'
                }
            }else{
                this.ssnCongfig = {
                    type : 'password',
                    html : '<i class="fa fa-eye" aria-hidden="true"></i>'
                }
            }
        },
        renderHtmlSsn(ispassword = true)
        {
            if(ispassword)
                return '<i class="fa fa-eye" aria-hidden="true"></i>'
            return '<i class="fa fa-eye-slash" aria-hidden="true"></i>'
        },
        getAddressContact(row)
        {
            return Helper.getFullAddress(row.address1, row.address2, row.city, row.state, row.zip, row.country_name)
        },
        getAddress(address1 = '', address2 = '', city = '', state = '', zip = '', country_name = '')
        {
            return Helper.getFullAddress(address1, address2, city, state, zip, country_name)
        },
        getFullName(first_name = '',last_name = '',mid_name = '')
        {
            return Helper.getFullName(first_name,last_name,mid_name)
        },
        getStatus(statusname)
        {
            return Helper.renderDataStatus(statusname)
        },
        formatTextIsEmpty(str)
        {
            return Helper.formatTextIsEmpty(str)
        },
        dismissModal()
        {
            this.$destroy()
        },
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
        createSlug(str){
            return Helper.createSlug(str)
        },
	}
}
