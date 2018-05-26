// Common useful functions
var googleUtil = {
    showGoogleMap : function (buttonShowElement, element, googleMap, mapOptions){
        googleMap.event.trigger(map1, 'resize');
        var map1 = new google.maps.Map(element, mapOptions);

        buttonShowElement.html(function(i, text) {
            return (text == '<i class="fa fa-location-arrow"></i>Show Map') ? '<i class="fa fa-location-arrow"></i>Hide Map' :
                '<i class="fa fa-location-arrow"></i>Show Map';
        });

        // $.each(buttonShowElement.closest('.row').find('#show-modal-map'), function(index, value) {
        //     classie.toggle(value, 'show-modal-map-content-open');
        // });
    }
}

var frontendCommon = {
        ui : {
            lockGroupAction(selector, unlock){
                if(unlock)
                    $(selector).find('button').removeAttr('disabled');
                else
                    $(selector).find('button').attr('disabled','disabled');
            }
        }
}

var setRuleName = {
    modal: function(selector,character,active) {
        var html =  $(selector).find('.modal-name').html();
        if(html != undefined){
            if(active == "true")
                $(selector).find('.modal-name').html(html.replace(new RegExp(character, 'g'),''))
            else
                $(selector).find('.modal-name').html(character+ ' ' + html)
        }
    }
}

var identificationFileSize = function(fileSize){
    let kb = parseFloat(fileSize/ 1024).toFixed(2);
    if(kb <= 1000) return parseInt(kb) + ' KB'
    return parseFloat(fileSize/ 1024000).toFixed(2) + ' MB'
}

var renderName = function(data, strEmpty = '-'){
    let full_name = '';
    if(!isEmpty(data.first_name))
        full_name += data.first_name + ' ';
    if(!isEmpty(data.mid_name))
        full_name += data.mid_name + ' ';
    if(!isEmpty(data.last_name))
        full_name += data.last_name + ' ';
    if(isEmpty(full_name))
        return strEmpty;
    return full_name;
}

var setUrlFilePath = function(path){
    let new_path = path.split('http://localhost');
    return new_path[new_path.length - 1]
}

var panelServices = {
        switch : function(panel, hardActive) {
            
            var isActive = $(panel).attr('active');
            if (hardActive != undefined) {
                isActive = (!hardActive).toString();
            }

            var components = $(panel).find('select, input, button, textarea');
            var alwaysDisabledComponents = $(panel).find('[always-disabled="true"]').find('select, input, button, textarea');

            /*Set Rule Name Modal*/
            if (isActive == "true")
                setRuleName.modal(panel,'Edit',isActive)
            else
                setRuleName.modal(panel,'Edit',isActive)
            /*End Set Rule Name*/

            if (isActive == "true"){
                $(panel).find('.b-select').addClass('select-disabled');
                components.attr('disabled','disabled');
                $(panel).attr('active', "false");

                $(panel).find('.b-select').each(function(item){ // Update placeholder to select when it's null
                    var valueSelect = $(this)[0].__vue__.value;
                    if (valueSelect == undefined || valueSelect == null || valueSelect.length == 0){
                        var placeholder = $(this).find('.placeholder');
                        var nullPlaceHolder = $(this).attr('null-placeholder');
                        placeholder.text(nullPlaceHolder);
                    }
                });

                $(panel).find('input.b__input').each(function(item){ // Update placeholder to input[text] when it's null
                    var valueSelect = $(this).val();
                    // if (valueSelect == '$ 0'){
                    //     $(this).val('');
                    // }
                    if (valueSelect == undefined || valueSelect == null || valueSelect.length == 0){
                        var nullPlaceHolder = $(this).closest('.b-float-label').attr('null-placeholder');
                        $(this).attr('placeholder', nullPlaceHolder);
                    }
                });

                $(panel).find('textarea.b__textarea').each(function(item){ // Update placeholder to textarea when it's null
                    var valueSelect = $(this).val();
                    if (valueSelect == undefined || valueSelect == null || valueSelect.length == 0){
                        var nullPlaceHolder = $(this).closest('.b-textarea').attr('null-placeholder');
                        $(this).attr('placeholder', nullPlaceHolder);
                    }
                });

                $(panel).find('.btn-group-action').slideUp();
                $(panel).attr("false");

                $('[special-element="true"]').css({'visibility' : 'hidden'});
            } else {
                $(panel).find('.b-select').removeClass('select-disabled');
                components.removeAttr('disabled');
                alwaysDisabledComponents.attr('disabled','disabled');
                $(panel).attr('active', "true");
                $(panel).find('.btn-group-action').slideDown();
                

                $(panel).find('input.b__input').each(function(item){ // Update placeholder to org-placeholder

                var attr = $(this).closest('.b-float-label').attr('always-disabled');

                // For some browsers, `attr` is undefined; for others,
                // `attr` is false.  Check for both.
                if (typeof attr !== typeof undefined && attr !== false) {
                    $(this).attr('disabled','disabled');
                }

                    var orgPlaceholder = $(this).closest('.b-float-label').attr('org-placeholder');
                    $(this).attr('placeholder', orgPlaceholder);

                    var valueSelect = $(this).val();
                    if (valueSelect != undefined && valueSelect != null && valueSelect.length > 0){
                        $(this).closest('.b-float-label').find('label').addClass('active');
                    }
                        
                });

                $(panel).find('.b-select').each(function(item){ // Update placeholder to select to org-placeholder
                    var valueSelect = $(this).find('.b__select_element').val();

                    var placeholder = $(this).find('.placeholder');
                    var orgPlaceHolder = $(this).attr('org-placeholder');
                    placeholder.text(orgPlaceHolder);
                    // var nullPlaceHolder = $(this).attr('null-placeholder');

                    if (valueSelect == undefined || valueSelect == null || valueSelect.length == 0){
                        $(this).find('label').removeClass('active');  
                    }
                    
                });

                $(panel).find('textarea.b__textarea').each(function(item){ // Update placeholder to org-placeholder
                    var orgPlaceholder = $(this).closest('.b-textarea').attr('org-placeholder');
                    $(this).attr('placeholder', orgPlaceholder);
                });

                $(panel).attr("true");

                $('[special-element="true"]').css({'visibility' : 'visible'});
            }

            // Force float label of dropdown
            // $(panel).find('.b-select label').addClass('active');

        }
    }


$(document).ready(function() {

    // var elem = document.querySelector('.js-switch');
    // var init = new Switchery(elem);

    // Scroll Menu and Fixed
    // $(document).scroll(function() {
    //     var body = $(this).scrollTop();
    //     if (body < 60) {
    //         $('.page-top').removeClass('page-top-fixed');
    //     } else {
    //         $('.page-top').addClass('page-top-fixed');
    //     }
    // });
    // Switch Detail View & List View 
    $('.page-menu .toggle .btn').click(function() {
        if ($('.page-menu ul li .toggle').hasClass('off')) {
            $('#list-view').hide("fade", { direction: "up" }, "fast", function() {

                $('#detail-view').show("fade", { direction: "up" }, "fast");
            });
        } else {
            $('#detail-view').hide("fade", { direction: "up" }, "fast", function() {

                $('#list-view').show("fade", { direction: "up" }, "fast");
            });
        }
    });

    //Upload File Dropzone
    if ($('#myDropzone').length > 0) {
        Dropzone.autoDiscover = false;
        var myDropzone = new Dropzone("div#myDropzone", { url: "/file/post" });
    }

    //Editor
    // $('.summernote').summernote({
    //     height: 350
    // });

    //Input Date Picker
    //Set Default in Contacts Table (TAB BOTTOM)
    $('.check-items-default').on('click', function() {
        var sp = $(this).find('span');
        if ($(this).hasClass('checked')) {
            //set default
            sp.find('i').remove();
            sp.text('Set as Default');
            $(this).removeClass('checked');
        } else {
            //set checked
            $('.check-items-default').find('span').text('Set as Default');
            sp.html('<i class="glyphicon glyphicon-ok"></i>');
            $(this).addClass('checked');
        }
    })

    //Scroll Top and Scroll to TAB BOTTOM
    $(".btn-tab1").click(function() {
        $('html, body').animate({
            scrollTop: $('html, body').offset().top
        }, 500);
    });

    $(".btn-tab2").click(function() {
        if ($("#detail-view").css("display") == "none") {
            $('html, body').animate({
                scrollTop: $(".page-footer").offset().top
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: $("#tab2").offset().top - 220 + 'px'
            }, 500);
        }
    });

    // ------------- Add Additional  -------------
    $('.tab-bottom .add-mobile-extension').click(function() {
        // var el = parent_div.find('.mobile-wrap').find('.row').eq(0).clone();
        //       parent_div.find('.mobile-wrap').append(el);
        var parent_div = $(this).closest('.modal-content');
        parent_div.find('.mobile-wrap').append('<div class="row"> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-select fl-is-active"><label for="select-1" class="fl-label">Types</label><select class="form-control fl-select" name="" id="select-1"> <option value="" disabled="" selected="">-</option> <option value="1" title="Assistant">Assistant</option> <option value="34" title="Billing Fax">Billing Fax</option> <option value="2" title="Business">Business</option> <option value="3" title="Business 2">Business 2</option> <option value="4" title="Business Fax">Business Fax</option> <option value="46" title="From Work Fax">From Work Fax</option> <option value="45" title="From Work Phone">From Work Phone</option> <option value="8" title="Home">Home</option> <option value="9" title="Home 2">Home 2</option> <option value="10" title="Home Fax">Home Fax</option> <option value="12" title="Mobile">Mobile</option> <option value="50" title="New Home Phone">New Home Phone</option> <option value="53" title="New Mobile">New Mobile</option> <option value="49" title="New Work Phone">New Work Phone</option> <option value="13" title="Other">Other</option> <option value="33" title="Other - VoiceMail">Other - VoiceMail</option> <option value="14" title="Other Fax">Other Fax</option> <option value="54" title="Preferred contact number">Preferred contact number</option> <option value="55" title="Preferred number">Preferred number</option> <option value="51" title="Spouse Mobile">Spouse Mobile</option> <option value="48" title="To Work Fax">To Work Fax</option> <option value="52" title="Work Mobile">Work Mobile</option> </select></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input"><label for="input-1" class="fl-label">Phone</label><input type="text" class="form-control fl-input" value="" id="input-1" placeholder="Phone"></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input"><label for="input-1" class="fl-label">Ext.</label><input type="text" class="form-control fl-input" value="" id="input-1" placeholder="Ext."></div> </div> <div class="form-group col-md-3"> <div class="checkbox col-md-6 p-0"> <label> <div class="checker"><span><input type="checkbox" class="checkcb cmcheck"></span></div> Preferred </label> </div> <div class="col-md-6 extension-btn"> <a href="javascript:void(0);"> </a> <a href="javascript:void(0);"> <span class="remove-mobile-extension"><i class="icon-close"></i></span> </a> </div> </div> </div>');
        // // $('.cmcheck').uniform();
        removeMobile();
    });

    function removeMobile() {
        $('.remove-mobile-extension').click(function() {
            $(this).closest('.row').remove()
        });
    }


    $('.tab-bottom .add-email-extension').click(function() {
        var parent_div = $(this).closest('.modal-content');
        parent_div.find('.email-wrap').append('<div class="row"> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-select fl-is-active"><label for="select-1" class="fl-label">Types</label><select class="form-control fl-select" name="" id="select-1"> <option value="" disabled="" selected="">-</option> <option value="4" title="Billing E-Mail">Billing E-Mail</option> <option value="6" title="HF Referral">HF Referral</option> <option value="5" title="HM Referral">HM Referral</option> <option value="2" title="Home E-Mail">Home E-Mail</option> <option value="1" title="Main E-Mail">Main E-Mail</option> <option value="9" title="New Home Email">New Home Email</option> <option value="8" title="New Work Email">New Work Email</option> <option value="7" title="Renter">Renter</option> <option value="11" title="Spouse Email">Spouse Email</option> <option value="10" title="Work email 2">Work email 2</option> </select></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input"><label for="input-1" class="fl-label">Email</label><input type="text" class="form-control fl-input" value="" id="input-1" placeholder="Email"></div> </div> <div class="form-group col-md-6"> <div class="checkbox col-md-6 p-0"> <label> <div class="checker"><span><input type="checkbox" class="checkcb cmcheck"></span></div> Preferred </label> </div> <div class="col-md-6 extension-btn"><a href="javascript:void(0);"> <span class="remove-email-extension"><i class="icon-close"></i></span> </a> </div> </div> </div>');
        // $('.cmcheck').uniform();
        removeEmail();
    });

    function removeEmail() {
        $('.remove-email-extension').click(function() {
            $(this).closest('.row').remove()
        });
    }


    $('.panel-add-mobile-extension').click(function() {
        var parent_div = $(this).closest('.panel-body');
        parent_div.find('.mobile-wrap').append('<div class="row"> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-select fl-is-active"><label for="select-1" class="fl-label">Type</label><select class="form-control fl-select" id="select-1"> <option value="" disabled="" selected="">-</option> <option value="1" title="Assistant">Assistant</option> <option value="34" title="Billing Fax">Billing Fax</option> <option value="2" title="Business">Business</option> <option value="3" title="Business 2">Business 2</option> <option value="4" title="Business Fax">Business Fax</option> <option value="46" title="From Work Fax">From Work Fax</option> <option value="45" title="From Work Phone">From Work Phone</option> <option value="8" title="Home">Home</option> <option value="9" title="Home 2">Home 2</option> <option value="10" title="Home Fax">Home Fax</option> <option value="12" title="Mobile">Mobile</option> <option value="50" title="New Home Phone">New Home Phone</option> <option value="53" title="New Mobile">New Mobile</option> <option value="49" title="New Work Phone">New Work Phone</option> <option value="13" title="Other">Other</option> <option value="33" title="Other - VoiceMail">Other - VoiceMail</option> <option value="14" title="Other Fax">Other Fax</option> <option value="54" title="Preferred contact number">Preferred contact number</option> <option value="55" title="Preferred number">Preferred number</option> <option value="51" title="Spouse Mobile">Spouse Mobile</option> <option value="48" title="To Work Fax">To Work Fax</option> <option value="52" title="Work Mobile">Work Mobile</option> </select></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input fl-is-active"><label for="input-1" class="fl-label">Phone</label><input type="text" class="form-control fl-input" id="input-1" value="" placeholder="Phone" data-placeholder="Phone"></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input"><label for="input-1" class="fl-label">Ext</label><input type="text" class="form-control fl-input" id="input-1" value="" placeholder="Ext"></div> </div> <div class="form-group col-md-3"> <div class="checkbox col-md-8 p-0"> <label> <div class="checker"><span><input type="checkbox" class="checkcb cmcheck"></span></div> Preferred </label></div> <div class="col-md-4 extension-btn"><a href="javascript:void(0);"> <span class="remove-mobile-extension btn-group-action"><i class="icon-close"></i></span> </a> </div> </div> </div>')
        // $('.cmcheck').uniform();
        removeMobile();
        parent_div.find('.btn-group-action').show();
    });

    $('.panel-add-email-extension').click(function() {
        var parent_div = $(this).closest('.panel-body');
        parent_div.find('.email-wrap').append('<div class="row"> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-select fl-is-active"><label for="select-1" class="fl-label">Type</label><select class="form-control fl-select" id="select-1"> <option value="" disabled="" selected>-</option> <option value="4" title="Billing E-Mail">Billing E-Mail</option> <option value="6" title="HF Referral">HF Referral</option> <option value="5" title="HM Referral">HM Referral</option> <option value="2" title="Home E-Mail">Home E-Mail</option> <option value="1" title="Main E-Mail">Main E-Mail</option> <option value="9" title="New Home Email">New Home Email</option> <option value="8" title="New Work Email">New Work Email</option> <option value="7" title="Renter">Renter</option> <option value="11" title="Spouse Email">Spouse Email</option> <option value="10" title="Work email 2">Work email 2</option> </select></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input fl-is-active"><label for="input-1" class="fl-label">Email</label><input type="text" class="form-control fl-input" id="input-1" value="" placeholder="Email" data-placeholder="Email"></div> </div> <div class="form-group col-md-6"> <div class="checkbox col-md-8 p-0"> <label> <div class="checker"><span><input type="checkbox" class="checkcb cmcheck"></span></div> Preferred </label></div> <div class="col-md-4 extension-btn"><a href="javascript:void(0);"> <span class="remove-email-extension btn-group-action"><i class="icon-close"></i></span> </a> </div> </div> </div>')
        // $('.cmcheck').uniform();
        removeEmail();
        parent_div.find('.btn-group-action').show();
    });

    $('.tab-top .add-mobile-extension').click(function() {
        var parent_div = $(this).closest('.modal-content');
        parent_div.find('.mobile-wrap').append('<div class="row"> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-select fl-is-active"><label for="select-1" class="fl-label">Types</label><select class="form-control fl-select" name="" id="select-1"> <option value="" disabled="" selected="">-</option> <option value="1" title="Assistant">Assistant</option> <option value="34" title="Billing Fax">Billing Fax</option> <option value="2" title="Business">Business</option> <option value="3" title="Business 2">Business 2</option> <option value="4" title="Business Fax">Business Fax</option> <option value="46" title="From Work Fax">From Work Fax</option> <option value="45" title="From Work Phone">From Work Phone</option> <option value="8" title="Home">Home</option> <option value="9" title="Home 2">Home 2</option> <option value="10" title="Home Fax">Home Fax</option> <option value="12" title="Mobile">Mobile</option> <option value="50" title="New Home Phone">New Home Phone</option> <option value="53" title="New Mobile">New Mobile</option> <option value="49" title="New Work Phone">New Work Phone</option> <option value="13" title="Other">Other</option> <option value="33" title="Other - VoiceMail">Other - VoiceMail</option> <option value="14" title="Other Fax">Other Fax</option> <option value="54" title="Preferred contact number">Preferred contact number</option> <option value="55" title="Preferred number">Preferred number</option> <option value="51" title="Spouse Mobile">Spouse Mobile</option> <option value="48" title="To Work Fax">To Work Fax</option> <option value="52" title="Work Mobile">Work Mobile</option> </select></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input"><label for="input-1" class="fl-label">Phone</label><input type="text" class="form-control fl-input" value="" id="input-1" placeholder="Phone"></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input"><label for="input-1" class="fl-label">Ext.</label><input type="text" class="form-control fl-input" value="" id="input-1" placeholder="Ext."></div> </div> <div class="form-group col-md-3"> <div class="checkbox col-md-6 p-0"> <label> <div class="checker"><span><input type="checkbox" class="checkcb cmcheck"></span></div> Preferred </label> </div> <div class="col-md-6 extension-btn"> <a href="javascript:void(0);"> </a> <a href="javascript:void(0);"> <span class="remove-mobile-extension"><i class="icon-close"></i></span> </a> </div> </div> </div>');
        // $('.cmcheck').uniform();
        $.each(parent_div.find('.move-top input, .move-top select, .move-top textarea'), function(index, value) {
            if ($(value).val() == '') {
                $(value).attr("placeholder", "");
                $(value).siblings('label.label-move-top').removeClass('move-top-active');
            } else {
                $(value).siblings('label.label-move-top').addClass('move-top-active');
            }
        });
        removeMobile();
        parent_div.find('.move-top label').css({ 'display': 'block' })
    });

    $('.tab-top .add-email-extension').click(function() {
        var parent_div = $(this).closest('.modal-content');
        parent_div.find('.email-wrap').append('<div class="row"> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-select fl-is-active"><label for="select-1" class="fl-label">Types</label><select class="form-control fl-select" name="" id="select-1"> <option value="" disabled="" selected="">-</option> <option value="4" title="Billing E-Mail">Billing E-Mail</option> <option value="6" title="HF Referral">HF Referral</option> <option value="5" title="HM Referral">HM Referral</option> <option value="2" title="Home E-Mail">Home E-Mail</option> <option value="1" title="Main E-Mail">Main E-Mail</option> <option value="9" title="New Home Email">New Home Email</option> <option value="8" title="New Work Email">New Work Email</option> <option value="7" title="Renter">Renter</option> <option value="11" title="Spouse Email">Spouse Email</option> <option value="10" title="Work email 2">Work email 2</option> </select></div> </div> <div class="form-group col-md-3"> <div class="fl-wrap fl-wrap-input"><label for="input-1" class="fl-label">Email</label><input type="text" class="form-control fl-input" value="" id="input-1" placeholder="Email"></div> </div> <div class="form-group col-md-6"> <div class="checkbox col-md-6 p-0"> <label> <div class="checker"><span><input type="checkbox" class="checkcb cmcheck"></span></div> Preferred </label> </div> <div class="col-md-6 extension-btn"><a href="javascript:void(0);"> <span class="remove-email-extension"><i class="icon-close"></i></span> </a> </div> </div> </div>');
        // $('.cmcheck').uniform();
        removeEmail();
        parent_div.find('.move-top label').css({ 'display': 'block' })
    });

    // ------------- END Add Additional  -------------

    //Create floatlabels
    // var floatlabels;
    // floatlabels = new FloatLabels('body', {});

    //Mode view

    // $.each($('.tab-top input, .tab-top select, .tab-top textarea'), function(index, value) {
    //     $(value).closest('.fl-wrap-select').attr('class', 'fl-wrap fl-wrap-select no-arrow');
    //     if ($(value).val() == '') {
    //         $(value).attr("placeholder", "-");
    //         $(value).closest('.fl-wrap').addClass('fl-has-focus fl-is-active');
    //     } else {
    //         $(value).closest('.fl-wrap').addClass('fl-has-focus fl-is-active');
    //     }
    // });

    $.each($('.tab-top input, .tab-top select, .tab-top textarea'), function(index, value) {
        $(value).closest('.fl-wrap-select').attr('class', 'fl-wrap fl-wrap-select no-arrow');
        if ($(value).val() == '') {
            // $(value).attr("placeholder", "-");
            $(value).closest('.fl-wrap').addClass('fl-has-focus fl-is-active');
        } else {
            $(value).closest('.fl-wrap').addClass('fl-has-focus fl-is-active');
        }
    });

    //Active label Datepicker
    $('.date-picker').on('change', function() {
        var aa = $(this).closest('.fl-wrap')
        if ($(this).val() == "") {
            aa.removeClass('fl-is-active');
        } else {
            aa.addClass('fl-is-active');
        }
    })

    //Tab top Modal new form and Rebuild
    // var thisfloatlabels = new FloatLabels('.default-form', {});
    // thisfloatlabels.rebuild();

    $('.modal-edit').on('click', function() {
        var panel_div = $(this).closest('.modal-content');
        panel_div.find('.fl-wrap-select').attr('class', 'fl-wrap fl-wrap-select');
        $.each(panel_div.find('input, select, textarea'), function(index, value) {
            if ($(value).val() == '') {
                $(value).attr("placeholder", "");
            }
        });
        var panel = $(this).attr('wrap');
        // var thisfloatlabels = new FloatLabels(panel, {});
        // thisfloatlabels.rebuild();
        panel_div.find('.checker').removeClass('disabled');
        panel_div.find('.checkcb').removeAttr('disabled');
        panel_div.find('.radio').removeClass('disabled');
        panel_div.find('.radio').removeAttr('disabled');
        panel_div.find('select').closest('.fl-wrap').addClass('fl-is-active');
        panel_div.find('.fl-select, input, .fl-textarea').removeAttr('disabled');
        panel_div.find('.input-disabled').attr('disabled', 'disabled');
        panel_div.find('textarea').removeClass('.textarea-disabled');
        panel_div.find('.btn-group-action').show();
    })
})