<template>
    <div class="modal fade panel modal-map" :id="configs.modeId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" active="true" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog" :class="modalSize">
            <div class="modal-content">
                <div style="border:1px solid #ccc; position: relative;">
                    <a @click="close" style="position: absolute; top:20px;right:20px;z-index: 10;background: #999;color: #fff;" class="btn btn-default btn-rounded"><i class="fa fa-times" aria-hidden="true"></i> Close</a>
                    <div class="modal-body clearfix ggmap-height vue-map-body">
                        <div id="vue-map-gg" style="height: 100%; width: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            configs : {
                type: Object,
                required: true,
            },
            address: {
                type : String,
                required : true
            }
        },
        computed :
        {
            modalSize()
            {
                if(this.configs.size)
                    return this.configs.size
                return 'modal-lg'
            },
            
        },
        beforeDestroy(){
            $('.modal-backdrop.fade').css("display", "none")
            this.$emit('cancel-modal-map')
        },
        mounted(){
            this.initMarketMap()
        },
        methods : {
            close(){
                this.$destroy()
            },
            initMarketMap()
            {
                $('#' + this.configs.modeId).modal('show')
                const modal_height = $(window).height() - 100;
                $('.vue-map-body').height(modal_height);
                this.getLatLngFromAddress()
            },
            getLatLngFromAddress(){
                let address = this.address
                let geocoder = new google.maps.Geocoder();
                geocoder.geocode( { 'address' : address }, function( results, status ) {
                    if( status == google.maps.GeocoderStatus.OK ) {
                        const mapElement = document.getElementById('vue-map-gg');
                        const mapOptions = {
                            zoom: 15,
                            center: results[0].geometry.location
                        };
                        const map = new google.maps.Map(mapElement, mapOptions);

                        const marker = new google.maps.Marker({
                            position: results[0].geometry.location,
                            map: map
                        });
                        const infowindow = new google.maps.InfoWindow({
                            content: address
                        });
                        infowindow.open(map, marker);
                    }
                    else{
                        alert('Geocode was not successful for the following reason: ' + status);
                        $(modal).modal('hide');
                    }
                } );
            }
        }
    }
</script>
