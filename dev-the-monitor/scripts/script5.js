function createCookie(name, value, days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
      } else var expires = "";
      document.cookie = name + "=" + value + expires + "; path=/";
    }
    
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    
    function eraseCookie(name) {
      createCookie(name, "", -1);
    }
    
    (function ($) {
      // alert("GD");
      // alert("GD"); 
      Drupal.behaviors.ViewsLoadMore = {
        attach: function (context, settings) {
          var default_opts = {
            offset: '100%'
          };
    
          if (settings && settings.viewsLoadMore && settings.views && settings.views.ajaxViews) {
            $.each(settings.viewsLoadMore, function (i, setting) {
              var view = '.view-id-' + setting.view_name + '.view-display-id-' + setting.view_display_id + ' .pager-next a',
                opts = {};
    
              // Display six adds
              //alert('OBR.extern.researchWidget()');
              // OBR.extern.researchWidget();
    
    
              // alert(view);
    
              $.extend(opts, default_opts, settings.viewsLoadMore[i].opts);
    
              $(view).waypoint('destroy');
              $(view).waypoint(function (event, direction) {
                $(view).click();
              }, opts);
              // var currentNid = Drupal.settings.custommodule.currentNid;		
              // $('.inf_class').once().waypoint(function() { 
              //To incrised google anylitacs 
              $('.inf_class').waypoint(function () {
                //console.log($(this).data('analyticsid'));
                window.history.replaceState('stateObj', "page 2", $(this).data('analyticsid'));
    
    
    
                AdblockersCheck();
    
                //Google Analytics START
                /*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-57602445-1', 'auto');*/
      
    
                ga('send', {
                  'hitType': 'pageview',
                  'page': $(this).data('analyticsid')
                });
                
    
              });
            });
          }
        }
      };
    })(jQuery);
    
    
    /*(function ($) {
      // alert("GD");
      // alert("GD");   
      Drupal.behaviors.NS_custom = {
        attach: function (context, settings) {
          var cnt_cookie = readCookie("STYXKEY_nsversion");
          var path = window.location.pathname; var ext = path.split("/"); 
          if (ext[1] == 'us') {
            if(cnt_cookie == 'US'){
              var img = "/sites/all/themes/creative-responsive-theme/images/new-statesman-america.png";
              $('.site-logo a img').attr("src", img);
              $('.site-logo a img').attr("alt", "New Statesman America");
              $("a[title='Home']").attr('href', "/us");
              $('.menu-mlid-12225 a').attr('href', "/us/culture");
              $('.menu-mlid-12219 a').attr('href', "/us/politics");
              $(".ns-switcher_selected").remove();
              $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected america_selected'><b>America EDITION</b> <small>US</small></label>");
              $(".ns-switcher_close label").remove();
              $(".ns-switcher_close").append('<label onclick="uk_link()" for="check"><b>UK EDITION</b> <small>UK</small></label>');
            }         
          } else if (ext[1] == 'uk') {
            if(cnt_cookie == 'UK'){
              var img = "/sites/all/themes/creative-responsive-theme/images/newstatesman_logo@2x.png";
              $('.site-logo a img').attr("src", img);
              $('.site-logo a img').attr("alt", "New Statesman");
              $("a[title='Home']").attr('href', "/uk");
              $('.menu-mlid-786 a').attr('href', "/culture");
              $('.menu-mlid-9699 a').attr('href', "/politics");
              $(".ns-switcher_selected").remove();
              $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected'>UK <span class='uk_edition'>EDITION</span></label>");
              $(".ns-switcher_close label").remove();
              $(".ns-switcher_close").append('<label onclick="us_link()" for="check" class="america_selected"><span class="america_desktop">America EDITION</span><span class="america_mobile">US</span></label>');
            }
          }else if(cnt_cookie == 'US'){
            var img = "/sites/all/themes/creative-responsive-theme/images/new-statesman-america.png";
            // var img = "/sites/all/themes/creative-responsive-theme/images/1.png";
            $('.site-logo a img').attr("src", img);
            $('.site-logo a img').attr("alt", "New Statesman America");
            $("a[title='Home']").attr('href', "/us");
            $('.menu-mlid-12225 a').attr('href', "/us/culture");
            $('.menu-mlid-12219 a').attr('href', "/us/politics");
            $(".ns-switcher_selected").remove();
            $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected america_selected'><b>America EDITION</b> <small>US</small></label>");
            $(".ns-switcher_close label").remove();
            $(".ns-switcher_close").append('<label onclick="uk_link()" for="check"><b>UK EDITION</b> <small>UK</small></label>');
          }else if(cnt_cookie == 'UK'){
            var img = "/sites/all/themes/creative-responsive-theme/images/newstatesman_logo@2x.png";
            // var img = "/sites/all/themes/creative-responsive-theme/images/2.png";
            $('.site-logo a img').attr("src", img);
            $('.site-logo a img').attr("alt", "New Statesman");
            $("a[title='Home']").attr('href', "/uk");
            $('.menu-mlid-786 a').attr('href', "/culture");
            $('.menu-mlid-9699 a').attr('href', "/politics");
            $(".ns-switcher_selected").remove();
            $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected'>UK <span class='uk_edition'>EDITION</span></label>");
            $(".ns-switcher_close label").remove();
            $(".ns-switcher_close").append('<label onclick="us_link()" for="check" class="america_selected"><span class="america_desktop">America EDITION</span><span class="america_mobile">US</span></label>');
          }
        }
      };
    })(jQuery);*/
    
    /*(function ($) {   
      Drupal.behaviors.NS_custom = {
        attach: function (context, settings) {
          var cnt_cookie = readCookie("STYXKEY_nsversion");
          var path = window.location.pathname; var ext = path.split("/"); 
          if (ext[1] == 'us') {
                   var img = "/sites/all/themes/creative-responsive-theme/images/new-statesman-america.png";
              $('.site-logo a img').attr("src", img);
              $('.site-logo a img').attr("alt", "New Statesman America");
              $("a[title='Home']").attr('href', "/us");
              $('.menu-mlid-12225 a').attr('href', "/us/culture");
              $('.menu-mlid-12219 a').attr('href', "/us/politics");
              $(".ns-switcher_selected").remove();
              $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected america_selected'><b>America EDITION</b> <small>US</small></label>");
              $(".ns-switcher_close label").remove();
              $(".ns-switcher_close").append('<label onclick="uk_link()" for="check"><b>UK EDITION</b> <small>UK</small></label>');
                  
            }
           else if (ext[1] == 'uk') {
                  var img = "/sites/all/themes/creative-responsive-theme/images/newstatesman_logo@2x.png";
              $('.site-logo a img').attr("src", img);
              $('.site-logo a img').attr("alt", "New Statesman");
              $("a[title='Home']").attr('href', "/uk");
              $('.menu-mlid-786 a').attr('href', "/culture");
              $('.menu-mlid-9699 a').attr('href', "/politics");
              $(".ns-switcher_selected").remove();
              $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected'>UK <span class='uk_edition'>EDITION</span></label>");
              $(".ns-switcher_close label").remove();
              $(".ns-switcher_close").append('<label onclick="us_link()" for="check" class="america_selected"><span class="america_desktop">America EDITION</span><span class="america_mobile">US</span></label>');
           }
           else if(cnt_cookie == 'US'){
                  var img = "/sites/all/themes/creative-responsive-theme/images/new-statesman-america.png";
              $('.site-logo a img').attr("src", img);
              $('.site-logo a img').attr("alt", "New Statesman America");
              $("a[title='Home']").attr('href', "/us");
              $('.menu-mlid-12225 a').attr('href', "/us/culture");
              $('.menu-mlid-12219 a').attr('href', "/us/politics");
              $(".ns-switcher_selected").remove();
              $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected america_selected'><b>America EDITION</b> <small>US</small></label>");
              $(".ns-switcher_close label").remove();
              $(".ns-switcher_close").append('<label onclick="uk_link()" for="check"><b>UK EDITION</b> <small>UK</small></label>');
           }
          //  else if(cnt_cookie == 'UK'){
        else{
                 var img = "/sites/all/themes/creative-responsive-theme/images/newstatesman_logo@2x.png";
              $('.site-logo a img').attr("src", img);
              $('.site-logo a img').attr("alt", "New Statesman");
              $("a[title='Home']").attr('href', "/uk");
              $('.menu-mlid-786 a').attr('href', "/culture");
              $('.menu-mlid-9699 a').attr('href', "/politics");
              $(".ns-switcher_selected").remove();
              $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected'>UK <span class='uk_edition'>EDITION</span></label>");
              $(".ns-switcher_close label").remove();
              $(".ns-switcher_close").append('<label onclick="us_link()" for="check" class="america_selected"><span class="america_desktop">America EDITION</span><span class="america_mobile">US</span></label>');
           }
                  
           
          
        }
      };
    })(jQuery);*/
    
    // jQuery(document).ready(function($) {
    // $('.view-display-id-leadarticleshomepage').waypoint(function(direction) {  
    // var x = readCookie('mediapopup');
    // if (x==null) {
    // document.getElementById('popup').style.display = 'block'; 
    // }
    // jQuery(".close-toggle").click(function(){ 
    // createCookie('mediapopup','popup',14);    
    // jQuery("body").toggleClass("modal-closed"); 
    // jQuery('.close-toggle').hide(); 
    // });
    // var x = readCookie('mediapopup');
    // if(x!=null){
    // jQuery("body").toggleClass("modal-closed");
    // } 
    // });
    // });
    /*
    */
    (function ($) {
      $( document ).ready(function() {
        if($('.ns_uk').length){
          $('body').addClass('ns_uk_wrapper');
        }
        if($('.ns_international').length){
          $('body').addClass('ns_international_wrapper');
        }
      });
    })(jQuery);
    
    function us_link() {
      window.location.href = '/preference/edition?ver=US';
      createCookie('STYXKEY_nsversion', 'US', 30);
    }
    
    function uk_link() {
      window.location.href = '/preference/edition?ver=UK';
      createCookie('STYXKEY_nsversion', 'UK', 30);
    }
    
    function AdblockersCheck() {
      var test = document.createElement('div');
      test.innerHTML = '&nbsp;';
      test.className = 'adsbox';
      document.body.appendChild(test);
      window.setTimeout(function () {
        if (test.offsetHeight === 0) {
    
          ga('set', 'dimension1', 'Ads Blocked');
          ga('send', 'event', 'AdSense', 'Ads blocked', {
            "nonInteraction": 1
          });
        } else {
    
          ga('set', 'dimension1', 'Ads Displaying');
          ga('send', 'event', 'AdSense', 'Ads not blocked', {
            "nonInteraction": 1
          });
        }
        test.remove();
      }, 100);
    }
    
    
    (function ($) {
    
      // Set Jquery UI Filter default options
      Drupal.jQueryUiFilter = Drupal.jQueryUiFilter || {}
    
      // Set Jquery UI accordion options: http://jqueryui.com/demos/accordion/
      Drupal.jQueryUiFilter.accordionOptions = {
        autoHeight: false
      }
    
      // Set Jquery UI dialog options: http://jqueryui.com/demos/dialog/
      Drupal.jQueryUiFilter.dialogOptions = {
        modal: true
      }
    
      // Set Jquery UI tabs options: http://jqueryui.com/demos/tabs/
      Drupal.jQueryUiFilter.tabsOptions = {
        event: 'click',
        fx: {
          opacity: 'toggle'
        },
        paging: true
      }
    
    })(jQuery);
    
    // window.addEventListener("load", function() {
    
    //     if(sessionStorage.getItem('evolok:ev_profile') == null){
    //       console.log("Session value is null");
    //       jQuery.post("/templates/node--blogs.tpl.php", {lgnval: 'null'}, function(result){
    //         //jQuery("span").html(result);
    //         console.log('value send');
    //       });
    //     }else{
    //       console.log("Session value is not null");
    //     }
    
    //   });
    
    
    // (function ($) {
    //   // alert("GD");
    //   // alert("GD");   
    //   Drupal.behaviors.NS_custom = {
    //     attach: function (context, settings) {
    //       var cnt_cookie = readCookie("STYXKEY_nsversion");
    //       var path = window.location.pathname; var ext = path.split("/"); 
    //       console.log(ext[1]);
    //       if (ext[1] == 'us') {
    //         if(cnt_cookie == 'US'){
    //           var img = "/sites/all/themes/creative-responsive-theme/images/new-statesman-america.png";
    //           // var img = "/sites/all/themes/creative-responsive-theme/images/1.png";
    //           $('.site-logo a img').attr("src", img);
    //           $('.site-logo a img').attr("alt", "New Statesman America");
    //           $("a[title='Home']").attr('href', "/us");
    //           $('.menu-mlid-12225 a').attr('href', "/us/culture");
    //           $('.menu-mlid-12219 a').attr('href', "/us/politics");
    //           $(".ns-switcher_selected").remove();
    //           $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected america_selected'><b>America EDITION</b> <small>US</small></label>");
    
    //           $(".ns-switcher_close label").remove();
    //           $(".ns-switcher_close").append('<label onclick="uk_link()" for="check"><b>UK EDITION</b> <small>UK</small></label>');
    //         }
            
    //         // $(".ns-switcher_closer").append("<label onclick='javascript:location.href='/preference/edition?ver=UK';createCookie('STYXKEY_nsversion', 'UK', 30);' for='check'><b>UK EDITION</b> <small>UK</small></label>");     
    //         // <label for='check' class='ns-switcher_selected america_selected'><b>America EDITION</b> <small>US</small></label>
    //         // <input id='check' type='checkbox'>
    //         // <div class='ns-switcher_close'>
    //         // <label onclick='javascript:location.href='/preference/edition?ver=UK';createCookie('STYXKEY_nsversion', 'UK', 30);' for='check'><b>UK EDITION</b> <small>UK</small></label>
    //         // </div>  
    //       } else if (ext[1] == 'uk') {
    //         if(cnt_cookie == 'UK'){
    //           var img = "/sites/all/themes/creative-responsive-theme/images/newstatesman_logo@2x.png";
    //           // var img = "/sites/all/themes/creative-responsive-theme/images/2.png";
    //           $('.site-logo a img').attr("src", img);
    //           $('.site-logo a img').attr("alt", "New Statesman");
    //           $("a[title='Home']").attr('href', "/uk");
    //           $('.menu-mlid-786 a').attr('href', "/culture");
    //           $('.menu-mlid-9699 a').attr('href', "/politics");
    //           $(".ns-switcher_selected").remove();
    //           $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected'>UK <span class='uk_edition'>EDITION</span></label>");
    
    //           $(".ns-switcher_close label").remove();
    //           $(".ns-switcher_close").append('<label onclick="us_link()" for="check" class="america_selected"><span class="america_desktop">America EDITION</span><span class="america_mobile">US</span></label>');
    //         }
            
    //         // $(".ns-switcher_close").append("<label onclick='javascript:location.href='/preference/edition?ver=US';createCookie('STYXKEY_nsversion', 'US', 30);' for='check' class='america_selected'><span class='america_desktop'>America EDITION</span><span class='america_mobile'>US</span></label>");
    
    
    //         // <label for='check' class='ns-switcher_selected'>UK <span class='uk_edition'>EDITION</span></label>
    //         // <input id='check' type='checkbox'>
    //         // <div class='ns-switcher_close'>
    //         // <label onclick='javascript:location.href='/preference/edition?ver=US';createCookie('STYXKEY_nsversion', 'US', 30);' for='check' class='america_selected'><span class='america_desktop'>America EDITION</span><span class='america_mobile'>US</span></label>
    //         // </div>  
    //       }else if(cnt_cookie == 'US'){
    //         var img = "/sites/all/themes/creative-responsive-theme/images/new-statesman-america.png";
    //         // var img = "/sites/all/themes/creative-responsive-theme/images/1.png";
    //         $('.site-logo a img').attr("src", img);
    //         $('.site-logo a img').attr("alt", "New Statesman America");
    //         $("a[title='Home']").attr('href', "/us");
    //         $('.menu-mlid-12225 a').attr('href', "/us/culture");
    //         $('.menu-mlid-12219 a').attr('href', "/us/politics");
    //         $(".ns-switcher_selected").remove();
    //         $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected america_selected'><b>America EDITION</b> <small>US</small></label>");
    
    //         $(".ns-switcher_close label").remove();
    //         $(".ns-switcher_close").append('<label onclick="uk_link()" for="check"><b>UK EDITION</b> <small>UK</small></label>');
    //       }else if(cnt_cookie == 'UK'){
    //         var img = "/sites/all/themes/creative-responsive-theme/images/newstatesman_logo@2x.png";
    //         // var img = "/sites/all/themes/creative-responsive-theme/images/2.png";
    //         $('.site-logo a img').attr("src", img);
    //         $('.site-logo a img').attr("alt", "New Statesman");
    //         $("a[title='Home']").attr('href', "/uk");
    //         $('.menu-mlid-786 a').attr('href', "/culture");
    //         $('.menu-mlid-9699 a').attr('href', "/politics");
    //         $(".ns-switcher_selected").remove();
    //         $(".mobile-login-container").after("<label for='check' class='ns-switcher_selected'>UK <span class='uk_edition'>EDITION</span></label>");
    
    //         $(".ns-switcher_close label").remove();
    //         $(".ns-switcher_close").append('<label onclick="us_link()" for="check" class="america_selected"><span class="america_desktop">America EDITION</span><span class="america_mobile">US</span></label>');
    //       }
    //     }
    //   };
    // })(jQuery);;
    /**
     *  Simple JavaScript function 
     *  Hiding ads in seartan places on a page for subscribers 
     *  Built for creative responcive theme
     *  V. Charinas
     */
    
    
    jQuery(document).ready(function($) {
    
      // console.log($ev_sid);
      // console.log($ev_did);
      $('.sovrn-onetag-ad').remove();
      
      // Code that uses jQuery's $ can follow here.
      if( EV.util.getEVSession() !== null && ['digital-subscriber'] ){ 
        // console.log('EVOLOCK SESSION HERE');
        $('#dianomi-smart-3585, #dianomi-smart-4306, #dianomi-smart-4302, #dianomi-smart-4303, #dianomi-smart-4307, #dianomi-smart-4308, #Unit1, #Unit2, #Unit3, #Unit4,#Unit5, #Unit6, #div-out_of_banner, #dianomi-tags, #1x3, #1x2, #1x1').remove();
        $('.sovrn-onetag-ad,.leaderboard,.desktop-banner,.bottom-leaderboard,.dianomi-ad-sidebar,.dianomi-ad').remove();
        
    
       $('.secondary-content-box').css("border-bottom","none");
       
      
    }else{
          
    }
    });
    
    
    ;