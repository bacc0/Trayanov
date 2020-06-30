(function(){

	var topLeaderboard = document.querySelector('.top-leaderboard');
	var fixedTopAds;
	//create div
	var newNode = document.createElement('div');
	var s = document.createElement("script");
	// var elem = '<div id="Unit1"></div>';
	var unit = document.createElement('div');

	var btnDismiss = document.createElement('span');

	// add class and insert add Unit element
	newNode.className = 'row';
    // newNode.innerHTML = elem; 

    s.type = "text/javascript";
	s.innerHTML = 'googletag.cmd.push(function() { googletag.display("Unit1"); });';

	unit.id = "Unit1";

	unit.appendChild(s);
	newNode.appendChild(unit); // add ad script
	// console.log(unit);

	btnDismiss.className = 'close_iframe';
	btnDismiss.innerHTML = '<span>Dismiss</span>';

	function hasClass(elem, className) {
	    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}

	function createCookie(name,value, secs) {
	    if (secs) {
	        var date = new Date();
	        date.setTime(date.getTime()+(secs*1000));
	        var expires = "; expires="+date.toGMTString();
	    }
	    else var expires = "";
	    document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}

	var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
           		if( xmlhttp.responseText ){
           			geo_ads_logic( xmlhttp.responseText );
           		}
           }
           else if (xmlhttp.status == 400) {
              	console.log('geo error 400');
           }
           else {
              	console.log('geo error');
           }
        }
    };

    try {
	    if( readCookie('geo_ads') == null || readCookie('STYXKEY_nsversion') == null ) {
	    	var geo_url =  window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '') + "/geo-ads/geo-ads-api";
	    	// console.log(geo_url);
		    xmlhttp.open("GET", geo_url, true);
		    xmlhttp.send();
		}else{
			// console.log('cookie: ');
			geo_ads_logic( readCookie('geo_ads') );
		}
	}catch(err) {
		console.log(err);
	}


	function geo_ads_logic(res){
		// console.log(' new: '); console.log(res);

		try {

			if( readCookie('geo_ads') == null ){
				createCookie('geo_ads', res, 86400 * 5);
			}

		  	res = JSON.parse(res);

		  	if( readCookie('STYXKEY_nsversion') == null ){
				createCookie('STYXKEY_nsversion', res['geo_version'], 86400 * 5);
			}


		  	if( res['geo_ads'] ){

				var body = document.querySelector('body');
				var isArticle = hasClass( body , 'node-type-longread') || hasClass( body , 'node-type-blogs');

				// console.log( 'streamamp config: ' );
				if( window.streamampClientConfig != null && res['company_target'] != "" ){
					window.streamampClientConfig['targets']['companyTarget'] = res['company_target'];
				}

				/* check device size
				if (window.innerWidth <= 790){
					console.log('small device');

					if( topLeaderboard ){
						topLeaderboard.style.display = 'block';
						topLeaderboard.appendChild(newNode);  
					}
					return;
				}
				*/

				// if cookie is false for ads
				if( readCookie('displayFixedTopGeoAds') == 'false' ) {
					console.log('geo ad false');

					if( topLeaderboard ){
						topLeaderboard.style.display = 'block';
						topLeaderboard.appendChild(newNode);  
					}

					return;
				}

				//ads sticky add if
				if( isArticle ){

					// console.log('geo ads will be shown');
					var nav = document.querySelector('nav.site-nav');
					/*
					var adElem = '<div class="fixed-top-ads" style="display:block;">' +
									'<div class="row">' + 
								      '<!-- /ca-pub-8914899523938848/New_Statesman/Unit1  tests-->' + 
								      '<div id="Unit1">' +
								        '<script type="text/javascript">' +
								          'googletag.cmd.push(function() { googletag.display("Unit1"); });' +
								        '</script>' +
								      '</div>' +
								  	'</div>' +
								  '</div>';
					*/
					nav.insertAdjacentHTML( "afterend", '<div class="fixed-top-ads" style="display:block;"></div>' );
					fixedTopAds = document.querySelector('.fixed-top-ads');

					fixedTopAds.appendChild(btnDismiss);
					fixedTopAds.appendChild(newNode);  

					btnDismiss.addEventListener("click", function(evt){
						fixedTopAds.style.display = 'none';
						createCookie('displayFixedTopGeoAds', 'false', 60); // in seconds
					}); 

				}
			}else{
				// show leaderboard ads if exists
				if( topLeaderboard ){
					topLeaderboard.style.display = 'block';
					topLeaderboard.appendChild(newNode);  
					return;
				}
				
				// document.querySelector('.leaderboard top-leaderboard').appendChild(s);

			}

		}
		catch(err) {
			console.log(err);
			// show leaderboard ads if exists
			if( topLeaderboard ){
				topLeaderboard.style.display = 'block';
				topLeaderboard.appendChild(newNode);  
			}
		  return; 
		}

	}


})();
;