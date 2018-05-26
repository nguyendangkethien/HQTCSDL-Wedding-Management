import mode from '../../config/form-mode'
var numeral = require('numeral');
export default {
    data(){
        return {
            filters : []
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
        filterData(data, reason = '', type = 'status') {
            reason = reason ? reason : ''
            if (type == 'status') {
                if (data == 'Active' || data == true)  return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-active">Active</span>`;
                else if (data == 'Cancelled') return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-cancelled">Cancelled</span>`;
                else if (data == 'Complete') return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-complete">Complete</span>`;
                else if (data == 'Deleted') return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-queued">Deleted</span>`;
                else if (data == 'On hold') return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-on-hold">On hold</span>`;
                else if (data == 'Queue') return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-on-hold">Queue</span>`;
                else if (data == 'Pending') return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-pending">Pending</span>`;
                else if (data == false) return `<span data-toggle="tooltip" data-placement="top" title="` + reason + `" aria-hidden="true" data-original-title="` + reason + `" class="label label-table label-queued">Inactive</span>`;
                else return '-'
            }
            else if (type == 'date') {
                return this.formatDateTime(data);
            }
            else {
                return data;
            }
        },
        getReason(reasonComplete, reasonCancel){
            if(reasonCancel)
                return reasonCancel
            if(reasonComplete)
                return reasonComplete
            return ''
        },
        afterSearched(success) {
            this.tableData = success.body.data.data
        },
        beforeSearch() {
            this.model = this.searchModel;
        },
        getListToSale(list_price, sale_price) {
            list_price = list_price ? list_price : 0
            sale_price = sale_price ? sale_price : 0
            if (list_price == 0) return '-'
            else {
                let result = parseFloat(((list_price - sale_price) * 100 / list_price).toFixed(2))
                if (result < 0) {
                    return `<span class="color-danger">` + result + `%</span>`;
                }
                else return result + '%';
            }
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

        //Check vendor selecte type which is 'Relo Vendor' in service
        checkVendorSelectedReloType(vendor_type,vendor_company){
            
            if(!vendor_type || vendor_type.toLowerCase() === 'relo director'){
                return this.checkDataNull(vendor_company);
            }else{
                return '-';
            }
        },

        //Check vendor selecte type which is 'Agent Vendor' in service
        checkVendorSelectedAgentType(vendor_type,vendor_company){
            
            if(!vendor_type || vendor_type.toLowerCase() === 'agent'){
                return this.checkDataNull(vendor_company);
            }else{
                return '-';
            }
        },

        //Check vendor selecte type which is 'Title/Closing Vendor' in service
        checkVendorSelectedTitleClosingType(vendor_type,vendor_company){
        
            if(!vendor_type || vendor_type.toLowerCase() === 'title/closing'){
                return this.checkDataNull(vendor_company);
            }else{
                return '-';
            }
        }

	}
}
