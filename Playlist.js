var PLAYER=PLAYER||{};
PLAYER.Playlist=function(b,h,c,k,g,t,u,d,v,w,x,m,y,z,A,B){function C(a){}function D(b){a.videoAdPlayed=!1;a.randEnd=Math.floor(Math.random()*c.videos.length);"Right playlist"==c.playlist||"Bottom playlist"==c.playlist||"Off"==c.playlist?(a.videoid=parseInt(a.videoid)+1,a.videos_array.length==a.videoid&&(a.videoid=0),"Play next video"==c.onFinish&&a.toggleAutoplayBtnEnabled?(a.VIDEO.shuffleBtnEnabled?(a.VIDEO.setPlaylistItem(a.randEnd),a.videoid=a.randEnd):a.VIDEO.setPlaylistItem(a.videoid),a.VIDEO.playVideoById(a.videoid)):
"Restart video"==c.onFinish?a.vimeoPlayer.play():"Stop video"==c.onFinish&&""!=c.posterImgOnVideoFinish&&a.VIDEO.showPoster2()):"Restart video"==c.onFinish&&a.vimeoPlayer.play()}function E(b,G){a.vimeo_time=Math.floor(b.seconds);a.vimeo_duration=Math.floor(b.duration);0!=a.vimeo_time||1!=a.videos_array[a.videoid].prerollAD&&"yes"!=a.videos_array[a.videoid].prerollAD||(a.VIDEO.videoAdStarted=!0,a.videoAdPlayed?a.vimeoPlayer.play():(a.vimeoPlayer.pause(),d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,
"")&&(this.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].preroll_mp4),a.VIDEO.loadAD(a.video_pathAD,"prerollActive"),a.VIDEO.openAD()));a.tim=setInterval(function(){if("HTML5"!=c.videos[a.videoid].videoType&&"HTML5 (self-hosted)"!=c.videoType){if(a.VIDEO.secondsFormat(a.vimeo_time)==a.videos_array[a.videoid].midrollAD_displayTime){if(a.VIDEO.midrollPlayed)return;a.VIDEO.midrollPlayed=!0;if(1==a.videos_array[a.videoid].midrollAD||"yes"==a.videos_array[a.videoid].midrollAD)d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,
"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].midroll_mp4),a.vimeoPlayer.pause(),a.VIDEO.loadAD(a.video_pathAD,"midrollActive"),a.VIDEO.openAD()}a.VIDEO.secondsFormat(a.vimeo_time)>=a.VIDEO.secondsFormat(a.vimeo_duration-1)&&0<a.vimeo_duration&&!a.VIDEO.postrollPlayed&&(a.VIDEO.postrollPlayed=!0,1==a.videos_array[a.videoid].postrollAD||"yes"==a.videos_array[a.videoid].postrollAD)&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].postroll_mp4),
a.vimeoPlayer.pause(),a.VIDEO.loadAD(a.video_pathAD,"postrollActive"),a.VIDEO.openAD())}},50);a.videos_array[a.videoid].popupAdShow&&a.VIDEO.enablePopup()}function q(){a.vimeoPlayer||(a.preloader&&a.preloader.stop().animate({opacity:1},0,function(){b(this).show()}),b(a.vimeoWrapper).html('<iframe id="vimeo_video" src="https://player.vimeo.com/video/'+a.videos_array[a.videoid].vimeoID+'?player_id=vimeo_video&autoplay=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').hide(),
a.vimeoIframe=b("#vimeo_video")[0],a.vimeoPlayer=new Vimeo.Player(a.vimeoIframe),a.vimeoPlayer.on("pause",C),a.vimeoPlayer.on("ended",D),a.vimeoPlayer.on("timeupdate",E),F(),m&&"AD 5 sec + Pieces After Effects project"!=a.options.videos[0].title&&"Pieces After Effects project"!=a.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=a.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=a.options.videos[0].title&&"i Create"!=a.options.videos[0].title&&"Swimwear Spring Summer"!=
a.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=a.options.youtubePlaylistID&&"Google drive video example"!=a.options.videos[0].title&&"Dropbox video example"!=a.options.videos[0].title&&"LiveStreaming HLS m3u8 video example"!=a.options.videos[0].title&&"Youtube 360 VR video"!=a.options.videos[0].title&&"Successful Business - After Effects Project"!=a.options.videos[0].title&&(a.VIDEO.pw(),a.vimeoWrapper.css({zIndex:0}),b("iframe#vimeo_video").attr("src","")))}function F(){var f=!1;
f=a.isMobile.any()?!1:c.autoplay?!0:!1;b("#vimeo_video").on("load",function(){b(a.vimeoWrapper).show();f&&a.vimeoPlayer.play();a.preloader.stop().animate({opacity:0},200,function(){b(this).hide()})})}function r(){a.mainContainer.find("#stellar_vp_input").on("keyup",function(){var c;var d=document.getElementById("stellar_vp_input").value.toUpperCase();var e=document.getElementById("mCSB_1_container").getElementsByClassName("stellar_vp_item");for(c=0;c<e.length;c++){var n=e[c].getElementsByClassName("stellar_vp_title")[0];
-1<n.innerHTML.toUpperCase().indexOf(d)?(b(e[c]).show(),b(e[c]).stop().animate({opacity:1},300)):b(e[c]).stop().animate({opacity:0},300,function(){b(this).hide()})}b(a.playlistContent).mCustomScrollbar("scrollTo","first")});a.addedSearchListeners=!0}var a=this;this.VIDEO=h;this.element=g;this.youtube_array=A;if(""!=c.youtubePlaylistID||""!=c.youtubeChannelID)c.videos=a.youtube_array;this.canPlay=v;this.CLICK_EV=w;this.params=x;this.isMobile=B;this.preloader=t;this.preloaderAD=u;this.options=c;this.mainContainer=
k;this.videoid="VIDEOID";this.adStartTime="ADSTARTTIME";this.videoAdPlayed=!1;this.rand=Math.floor(Math.random()*c.videos.length);this.ytQuality=c.youtubeQuality;this.youtubeSTARTED=!1;this.deviceAgent=y;this.agentID=z;this.YTAPI_onPlayerReady=!1;this.vimeo_time;this.vimeo_duration;this.itemHoverOn=this.scrollingIsOn=!1;this.playlist=b("<div />");this.playlistContent=b("<div />");this.playlistBar=b("<div />");this.playlistBar.addClass("stellar_vp_bg "+this.options.instanceTheme);this.playlist.append(this.playlistBar);
this.playlistBarSearch=b("<div />");this.playlistBarSearch.addClass("stellar_vp_bg "+this.options.instanceTheme);this.playlist.append(this.playlistBarSearch);this.nextTxtWrapper=b("<div />");this.playlistBar.append(this.nextTxtWrapper);this.nextTxtWrapper.append('<p class="stellar_vp_nextVideoInPlaylistText stellar_vp_controlsColor '+a.options.instanceTheme+'">'+a.options.nextVideoInPlaylistText+"</p>");this.countTxtWrapper=b("<div />").addClass("stellar_vp_countTxtWrapper");this.countTxtWrapper.append('<p class="stellar_vp_countVideoInPlaylistText stellar_vp_controlsColor '+
a.options.instanceTheme+'">1 of 20</p>');this.controlsBtnsWrapperLeft=b("<div />");this.controlsBtnsWrapperLeft.addClass("stellar_vp_controlsBtnsWrapperLeft");this.VIDEO.controls.append(this.controlsBtnsWrapperLeft);this.lastBtnIcon=b("<span />").attr("aria-hidden","true").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+this.options.instanceTheme).addClass("fa-stellar-step-forward").attr("id","stellar_vp_lastBtn");this.firstBtnIcon=b("<span />").attr("aria-hidden",
"true").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+this.options.instanceTheme).addClass("fa-stellar-step-backward").attr("id","stellar_vp_firstBtn");this.nextBtnIcon=b("<span />").attr("aria-hidden","true").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+this.options.instanceTheme).addClass("fa-stellar-step-forward").attr("id","stellar_vp_nextBtn");this.nextBtnIcon2=b("<span />").attr("aria-hidden","true").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+
this.options.instanceTheme).addClass("fa-stellar-chevron-right").attr("id","stellar_vp_nextBtn2");this.previousBtnIcon=b("<span />").attr("aria-hidden","true").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+this.options.instanceTheme).addClass("fa-stellar-chevron-left").attr("id","stellar_vp_previousBtn");this.shuffleBtnIcon=b("<span />").attr("aria-hidden","true").attr("id","stellar_vp_shuffleBtn").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+
this.options.instanceTheme).addClass("fa-stellar-random").addClass("stellar_vp_playerElement");this.toggleAutoplayBtnIcon=b("<span />").attr("aria-hidden","true").attr("id","stellar_vp_toggleAutoplayBtn").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+this.options.instanceTheme).addClass("fa-stellar-toggle-on").addClass("stellar_vp_playerElement");this.searchBtnIcon=b("<span />").attr("aria-hidden","true").addClass("fa-stellar").addClass("stellar-icon-general").addClass("stellar_vp_controlsColor "+
this.options.instanceTheme).addClass("fa-stellar-search").attr("id","stellar_vp_searchBtn");this.lastBtn=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");this.lastBtn.append(this.lastBtnIcon);this.firstBtn=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");this.firstBtn.append(this.firstBtnIcon);this.nextBtn=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");this.nextBtn.append(this.nextBtnIcon);
this.nextBtn2=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");this.nextBtn2.append(this.nextBtnIcon2);this.previousBtn=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");this.previousBtn.append(this.previousBtnIcon);this.shuffleBtn=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");this.shuffleBtn.append(this.shuffleBtnIcon);this.toggleAutoplayBtn=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");
this.toggleAutoplayBtn.append(this.toggleAutoplayBtnIcon);this.searchBtn=b("<div />").addClass("stellar_vp_controlsBtn").addClass("stellar_vp_playerElement");this.searchBtn.append(this.searchBtnIcon);this.options.nextShow&&this.controlsBtnsWrapperLeft.append(this.nextBtn);this.playlistControlsBtnsWrapperRight=b("<div />");this.playlistBar.append(this.playlistControlsBtnsWrapperRight);this.playlistControlsBtnsWrapperLeft=b("<div />");this.playlistBar.append(this.playlistControlsBtnsWrapperLeft);this.playlistControlsBtnsWrapperSearch=
b("<div />");this.playlistBarSearch.append(this.playlistControlsBtnsWrapperSearch);this.playlistControlsBtnsWrapperRight.append(this.shuffleBtn);this.playlistControlsBtnsWrapperRight.append(this.toggleAutoplayBtn);this.playlistControlsBtnsWrapperLeft.append(this.previousBtn);this.playlistControlsBtnsWrapperLeft.append(this.countTxtWrapper);this.playlistControlsBtnsWrapperLeft.append(this.nextBtn2);this.playlistControlsBtnsWrapperSearch.append(this.searchBtn);switch(this.options.playlist){case "Right playlist":this.playlist.attr("id",
"stellar_vp_playlist");this.playlist.addClass("stellar_vp_playlist "+this.options.instanceTheme);this.playlistContent.attr("id",a.options.instanceName+"stellar_vp_playlistContent");this.playlistBar.addClass("stellar_vp_playlistBar");this.playlistBarSearch.addClass("stellar_vp_playlistBarSearch");this.searchBtn.append('<input type="text" id="stellar_vp_input" class="stellar_vp_themeColorThumbBorder stellar_vp_controlsColor '+a.options.instanceTheme+'" placeholder="'+this.options.playlistSearchText+
'">');this.nextTxtWrapper.addClass("stellar_vp_nextTxtWrapper");this.playlistControlsBtnsWrapperSearch.addClass("stellar_vp_playlistControlsBtnsWrapperSearch");this.playlistControlsBtnsWrapperRight.addClass("stellar_vp_playlistControlsBtnsWrapperRight");this.playlistControlsBtnsWrapperLeft.addClass("stellar_vp_playlistControlsBtnsWrapperLeft");break;case "Bottom playlist":this.playlist.attr("id","stellar_vp_playlist_bottom"),this.playlist.addClass("stellar_vp_playlist "+this.options.instanceTheme),
this.playlistContent.attr("id",a.options.instanceName+"stellar_vp_playlistContent_bottom"),this.playlistBar.addClass("stellar_vp_playlistBar_bottom"),this.playlistBarSearch.addClass("stellar_vp_playlistBarSearch_bottom"),this.searchBtn.append('<input type="text" id="stellar_vp_input" class="stellar_vp_themeColorThumbBorder stellar_vp_controlsColor '+a.options.instanceTheme+'" placeholder="'+this.options.playlistSearchText+'">'),this.nextTxtWrapper.addClass("stellar_vp_nextTxtWrapper_bottom"),this.playlistControlsBtnsWrapperSearch.addClass("stellar_vp_playlistControlsBtnsWrapperSearch_bottom"),
this.playlistControlsBtnsWrapperRight.addClass("stellar_vp_playlistControlsBtnsWrapperRight_bottom"),this.playlistControlsBtnsWrapperLeft.addClass("stellar_vp_playlistControlsBtnsWrapperLeft_bottom")}a.videos_array=[];a.item_array=[];this.vimeoWrapper=b("<div></div>");this.vimeoWrapper.attr("id","stellar_vp_vimeoWrapper");a.element&&a.element.append(a.vimeoWrapper);var p=0;this.onPlayerReady=function(b){r();a.YTAPI_onPlayerReady=!0;if("youtube"==c.videos[a.videoid].videoType||"YouTube"==c.videoType){a.VIDEO.playButtonScreen.hide();
b=c.loadRandomVideoOnStart?parseInt(a.videos_array[a.rand].youtubeIDStartSeconds):parseInt(a.videos_array[a.videoid].youtubeIDStartSeconds);""==b&&(b=0);var f=!1,d=window.navigator.userAgent,n=d.indexOf("MSIE ");d=d.indexOf("Trident/");if(-1<n||-1<d)f=!0;f?(c.loadRandomVideoOnStart?a.VIDEO.youtubePlayer.loadVideoById(a.videos_array[a.rand].youtubeID,b):a.VIDEO.youtubePlayer.loadVideoById(a.videos_array[a.videoid].youtubeID,b),a.VIDEO.youtubePlayer.pauseVideo()):c.loadRandomVideoOnStart?a.VIDEO.youtubePlayer.cueVideoById(a.videos_array[a.rand].youtubeID,
b):a.VIDEO.youtubePlayer.cueVideoById(a.videos_array[a.videoid].youtubeID,b);a.VIDEO.youtubePlayer.setPlaybackQuality(a.ytQuality);c.autoplay&&(a.isMobile.any()||a.VIDEO.youtubePlayer.playVideo());a.VIDEO.resizeAll();m&&"AD 5 sec + Pieces After Effects project"!=a.options.videos[0].title&&"Pieces After Effects project"!=a.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=a.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=a.options.videos[0].title&&"i Create"!=a.options.videos[0].title&&
"Swimwear Spring Summer"!=a.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=a.options.youtubePlaylistID&&"Google drive video example"!=a.options.videos[0].title&&"Dropbox video example"!=a.options.videos[0].title&&"LiveStreaming HLS m3u8 video example"!=a.options.videos[0].title&&"Youtube 360 VR video"!=a.options.videos[0].title&&"Successful Business - After Effects Project"!=a.options.videos[0].title&&(a.VIDEO.pw(),void 0!=a.VIDEO.youtubePlayer&&(a.VIDEO.youtubePlayer.stopVideo(),
a.VIDEO.youtubePlayer.clearVideo(),a.VIDEO.youtubePlayer.setSize(1,1)));a.popupTimer=setInterval(function(){a.videos_array[a.videoid].popupAdShow&&a.VIDEO.enablePopup()},1E3)}};this.onPlayerStateChange=function(b){var f=Math.floor(a.VIDEO.youtubePlayer.getCurrentTime());a.VIDEO.calculateYoutubeTotalTime(a.VIDEO.youtubePlayer.getDuration());1===b.data&&0==f&&(a.youtubeSTARTED=!0);if(1===b.data)a.isMobile.any()&&a.VIDEO.playButtonScreen.addClass("stellar_vp_playButtonScreenHide"),g.removeClass("vp_paused"),
g.addClass("stellar_vp_playing"),h.change("stellar_vp_playing"),a.VIDEO.play(),a._timer=setInterval(function(){if("HTML5"!=c.videos[a.videoid].videoType&&"HTML5 (self-hosted)"!=c.videoType){a.progressWidth=a.VIDEO.youtubePlayer.getCurrentTime()/a.VIDEO.youtubePlayer.getDuration()*a.VIDEO.videoTrack.width();a.VIDEO.videoTrackProgress.css("width",a.progressWidth);a.progressIdleWidth=a.VIDEO.youtubePlayer.getCurrentTime()/a.VIDEO.youtubePlayer.getDuration()*a.VIDEO.progressIdleTrack.width();a.VIDEO.progressIdle.css("width",
a.progressIdleWidth);a.VIDEO.calculateYoutubeElapsedTime(a.VIDEO.youtubePlayer.getCurrentTime());var b=parseInt(a.videos_array[a.videoid].youtubeIDEndSeconds);""==b&&(b=0);parseInt(a.VIDEO.youtubePlayer.getCurrentTime())==b&&a.VIDEO.youtubePlayer.stopVideo();a.buffered=a.VIDEO.youtubePlayer.getVideoLoadedFraction();a.downloadWidth=a.buffered*a.VIDEO.videoTrack.width();a.VIDEO.videoTrackDownload.css("width",a.downloadWidth);a.progressIdleDownloadWidth=a.buffered*a.VIDEO.progressIdleTrack.width();a.VIDEO.progressIdleDownload.css("width",
a.progressIdleDownloadWidth);if(a.VIDEO.secondsFormat(a.VIDEO.youtubePlayer.getCurrentTime())==a.videos_array[a.videoid].midrollAD_displayTime){if(a.VIDEO.midrollPlayed)return;a.VIDEO.midrollPlayed=!0;if(1==a.videos_array[a.videoid].midrollAD||"yes"==a.videos_array[a.videoid].midrollAD)d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].midroll_mp4),a.VIDEO.youtubePlayer.pauseVideo(),a.VIDEO.loadAD(a.video_pathAD,"midrollActive"),a.VIDEO.openAD()}a.VIDEO.secondsFormat(a.VIDEO.youtubePlayer.getCurrentTime())>=
a.VIDEO.secondsFormat(a.VIDEO.youtubePlayer.getDuration()-1)&&0<a.VIDEO.youtubePlayer.getDuration()&&!a.VIDEO.postrollPlayed&&(a.VIDEO.postrollPlayed=!0,1==a.videos_array[a.videoid].postrollAD||"yes"==a.videos_array[a.videoid].postrollAD)&&(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(a.canPlay=!0,a.video_pathAD=a.videos_array[a.videoid].postroll_mp4),a.VIDEO.youtubePlayer.pauseVideo(),a.VIDEO.loadAD(a.video_pathAD,"postrollActive"),a.VIDEO.openAD())}},50);else if(2===b.data)clearInterval(a._timer),
g.addClass("vp_paused"),g.removeClass("stellar_vp_playing"),h.change("vp_paused"),a.VIDEO.pause();else if(0===b.data)if(a.VIDEO.midrollPlayed=!1,a.VIDEO.postrollPlayed=!1,a.randEnd=Math.floor(Math.random()*c.videos.length),a.videoAdPlayed=!1,a.videoid=parseInt(a.videoid)+1,a.videos_array.length==a.videoid&&(a.videoid=0),"Play next video"==c.onFinish&&a.VIDEO.toggleAutoplayBtnEnabled)a.VIDEO.shuffleBtnEnabled?(a.VIDEO.setPlaylistItem(a.randEnd),a.videoid=a.randEnd):a.VIDEO.setPlaylistItem(a.videoid),
a.VIDEO.playVideoById(a.videoid);else if("Restart video"==c.onFinish)void 0!=a.VIDEO.youtubePlayer&&(a.VIDEO.youtubePlayer.seekTo(0),a.VIDEO.youtubePlayer.playVideo());else if("Stop video"==c.onFinish&&""!=c.posterImgOnVideoFinish&&(a.VIDEO.showPoster2(),"youtube"==c.videos[a.videoid].videoType||"YouTube"==c.videoType)){a.VIDEO.closeAD();a.videoAdPlayed=!1;a.VIDEO.ytWrapper.css({zIndex:501});a.VIDEO.ytWrapper.css({visibility:"visible"});a.VIDEO.removeHTML5elements();if(void 0!=a.VIDEO.youtubePlayer){var e=
parseInt(a.videos_array[a.videoid].youtubeIDStartSeconds);""==e&&(e=0);a.VIDEO.youtubePlayer.cueVideoById(a.videos_array[a.videoid].youtubeID,e);a.isMobile.any()||a.VIDEO.youtubePlayer.pauseVideo()}a.VIDEO.youtubePlayer.setPlaybackQuality(a.ytQuality)}if(1===b.data&&0==f&&(1==a.videos_array[a.videoid].prerollAD||"yes"==a.videos_array[a.videoid].prerollAD||a.options.showGlobalPrerollAds))a.VIDEO.videoAdStarted=!0,a.videoAdPlayed?a.VIDEO.youtubePlayer.playVideo():(a.VIDEO.youtubePlayer.pauseVideo(),
d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,"")&&(this.canPlay=!0,a.video_pathAD=c.showGlobalPrerollAds?a.VIDEO.globalPrerollAds_arr[a.VIDEO.getGlobalPrerollRandomNumber()]:a.videos_array[a.videoid].preroll_mp4),a.VIDEO.poster2Showing||(a.VIDEO.loadAD(a.video_pathAD,"prerollActive"),a.VIDEO.openAD()));else if(b.data==YT.PlayerState.PLAYING||b.data==YT.PlayerState.CUED)a.youtubePLAYING=!0};var l=-1;b(c.videos).each(function(){l+=1;var d={id:l,title:this.title,videoType:this.videoType,youtubeID:this.youtubeID,
youtubeIDStartSeconds:this.youtubeIDStartSeconds,youtubeIDEndSeconds:this.youtubeIDEndSeconds,vimeoID:this.vimeoID,video_path_mp4HD:this.mp4HD,video_path_mp4SD:this.mp4SD,enable_mp4_download:this.enable_mp4_download,imageUrl:this.imageUrl,imageTimer:this.imageTimer,prerollAD:this.prerollAD,prerollGotoLink:this.prerollGotoLink,preroll_mp4:this.preroll_mp4,prerollSkipTimer:this.prerollSkipTimer,midrollAD:this.midrollAD,midrollAD_displayTime:this.midrollAD_displayTime,midrollGotoLink:this.midrollGotoLink,
midroll_mp4:this.midroll_mp4,midrollSkipTimer:this.midrollSkipTimer,postrollAD:this.postrollAD,postrollGotoLink:this.postrollGotoLink,postroll_mp4:this.postroll_mp4,postrollSkipTimer:this.postrollSkipTimer,popupImg:this.popupImg,popupAdShow:this.popupAdShow,popupAdStartTime:this.popupAdStartTime,popupAdEndTime:this.popupAdEndTime,popupAdGoToLink:this.popupAdGoToLink,description:this.description,thumbnail_image:this.thumbImg,info_text:this.info};a.videos_array.push(d);a.itemHoverBox=b("<div />");a.itemHoverBox.addClass("stellar_vp_itemHoverBox");
a.itemHoverBox.css({opacity:0});a.nowPlayingIndicatorIcon=b("<span />").attr("aria-hidden","true").addClass("stellar_vp_nowPlayingIndicator").addClass("fa-stellar").addClass("stellar_vp_themeColorText").addClass("fa-stellar-play-indicator").attr("id","stellar_vp_nowPlayingIndicator").hide();a.itemLeft=b("<div />");a.itemLeft.addClass("stellar_vp_itemLeft stellar_vp_themeColorThumbBorder");a.i=document.createElement("img");a.i.onload=function(){a.thumbImageW=this.width;a.thumbImageH=this.height};a.i.src=
d.thumbnail_image;if("youtube"==c.videos[l].videoType||"YouTube"==c.videoType)if("auto"==d.thumbnail_image||""==d.thumbnail_image)a.i.src="http://img.youtube.com/vi/"+c.videos[l].youtubeID+"/1.jpg";a.itemLeft.append(a.i);a.itemLeft.append(a.itemHoverBox);a.itemLeft.append(a.nowPlayingIndicatorIcon);b(a.i).addClass("stellar_vp_thumbnail_image");var g='<div class="stellar_vp_itemRight"><div class="stellar_vp_title stellar_vp_themeColorText">'+d.title+'</div><div class="stellar_vp_description stellar_vp_controlsColor '+
a.options.instanceTheme+'"> '+d.description+"</div></div>",e='<div class="stellar_vp_itemRight_bottom"><div class="stellar_vp_title stellar_vp_themeColorText">'+d.title+'</div><div class="stellar_vp_description stellar_vp_controlsColor '+a.options.instanceTheme+'"> '+d.description+"</div></div>";switch(c.playlist){case "Right playlist":a.item=b("<div />");a.item.addClass("stellar_vp_item").css("top",String(p)+"px");a.item_array.push(a.item);a.item.addClass("stellar_vp_itemUnselected "+a.options.instanceTheme);
a.item.append(a.itemLeft);a.item.append(g);p+=88;break;case "Bottom playlist":a.item=b("<div />"),a.item.addClass("stellar_vp_item").css("left","0px"),a.item_array.push(a.item),a.item.addClass("stellar_vp_itemUnselected "+a.options.instanceTheme),a.item.css("display","inline-flex"),a.item.append(a.itemLeft),a.item.append(e)}a.playlistContent.append(a.item);void 0!=a.item&&(a.item.bind(a.CLICK_EV,function(){a.scrollingIsOn&&a.isMobile.any()||(a.preloader&&a.preloader.stop().animate({opacity:1},0,function(){b(this).show()}),
a.videoid=d.id,a.VIDEO.setPlaylistItem(a.videoid),a.VIDEO.resetPlayer(),a.VIDEO.resetPlayerAD(),a.VIDEO.resizeAll(),"vimeo"!=c.videos[a.videoid].videoType&&"Vimeo"!=c.videoType||q(),a.VIDEO.playVideoById(a.videoid),a.youtubeSTARTED=!1,m&&"AD 5 sec + Pieces After Effects project"!=a.options.videos[0].title&&"Pieces After Effects project"!=a.options.videos[0].title&&"AD 5 sec + Space Odyssey After Effects Project"!=a.options.videos[0].title&&"AD 5 sec Swimwear Spring Summer"!=a.options.videos[0].title&&
"i Create"!=a.options.videos[0].title&&"Swimwear Spring Summer"!=a.options.videos[0].title&&"PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM"!=a.options.youtubePlaylistID&&"Google drive video example"!=a.options.videos[0].title&&"Dropbox video example"!=a.options.videos[0].title&&"Successful Business - After Effects Project"!=a.options.videos[0].title&&a.VIDEO.pw())}),a.item.bind("mouseenter",function(){b(this).find(".stellar_vp_itemHoverBox").stop().animate({opacity:1},200,function(){});b(this).find(".stellar_vp_thumbnail_image").css({"-webkit-transform":"scale(1.2)",
"-moz-transform":"scale(1.2)","-ms-transform":"scale(1.2)","-o-transform":"scale(1.2)",transform:"scale(1.2)"})}),a.item.bind("mouseleave",function(){b(this).find(".stellar_vp_itemHoverBox").stop().animate({opacity:0},200,function(){});b(this).find(".stellar_vp_thumbnail_image").css({"-webkit-transform":"scale(1)","-moz-transform":"scale(1)","-ms-transform":"scale(1)","-o-transform":"scale(1)",transform:"scale(1)"})}))});a.videoid=c.loadRandomVideoOnStart?a.rand:c.playSpecificVideo;a.params.id&&(a.videoid=
a.rand=parseInt(a.params.id));switch(a.options.playlist){case "Right playlist":c.loadRandomVideoOnStart?(b(a.item_array[a.rand]).removeClass("stellar_vp_itemUnselected "+this.options.instanceTheme).addClass("stellar_vp_itemSelected "+this.options.instanceTheme),a.item_array[a.rand].find(".stellar_vp_thumbnail_image").removeClass("stellar_vp_thumbnail_image").addClass("stellar_vp_thumbnail_imageSelected")):(b(a.item_array[a.videoid]).removeClass("stellar_vp_itemUnselected "+this.options.instanceTheme).addClass("stellar_vp_itemSelected "+
this.options.instanceTheme),a.item_array[a.videoid].find(".stellar_vp_thumbnail_image").removeClass("stellar_vp_thumbnail_image").addClass("stellar_vp_thumbnail_imageSelected"));break;case "Bottom playlist":c.loadRandomVideoOnStart?(b(a.item_array[a.rand]).removeClass("stellar_vp_itemUnselected "+this.options.instanceTheme).addClass("stellar_vp_itemSelected "+this.options.instanceTheme),a.item_array[a.rand].find(".stellar_vp_thumbnail_image").removeClass("stellar_vp_thumbnail_image").addClass("stellar_vp_thumbnail_imageSelected")):
(b(a.item_array[a.videoid]).removeClass("stellar_vp_itemUnselected "+this.options.instanceTheme).addClass("stellar_vp_itemSelected "+this.options.instanceTheme),a.item_array[a.videoid].find(".stellar_vp_thumbnail_image").removeClass("stellar_vp_thumbnail_image").addClass("stellar_vp_thumbnail_imageSelected"))}b(a.playlistContent).mCustomScrollbar("scrollTo",a.item_array[a.videoid]);r();a.countTxtWrapper.find(".stellar_vp_countVideoInPlaylistText").html(a.videoid+1+" "+a.options.countVideos+" "+a.item_array.length);
if("youtube"==c.videos[a.videoid].videoType||"YouTube"==c.videoType)a.VIDEO.imageWrapper.css({zIndex:0}),a.VIDEO.imageWrapper.css({visibility:"none"}),a.VIDEO.hideVideoElements(),a.preloader.stop().animate({opacity:0},0,function(){b(this).hide()}),a.VIDEO.ytWrapper.css({zIndex:501}),a.VIDEO.ytWrapper.css({visibility:"visible"}),a.vimeoWrapper.css({zIndex:0});else if("HTML5"==c.videos[a.videoid].videoType||"HTML5 (self-hosted)"==c.videoType){a.VIDEO.imageWrapper.css({zIndex:0});a.VIDEO.imageWrapper.css({visibility:"none"});
a.VIDEO.ytWrapper.css({zIndex:0});a.VIDEO.ytWrapper.css({visibility:"hidden"});a.vimeoWrapper.css({zIndex:0});if(d.canPlayType&&d.canPlayType("video/mp4").replace(/no/,""))if(this.canPlay=!0,c.loadRandomVideoOnStart){switch(c.HTML5VideoQuality){case "HD":a.video_path=a.videos_array[a.rand].video_path_mp4HD;break;case "SD":a.video_path=a.videos_array[a.rand].video_path_mp4SD}a.video_pathAD=a.videos_array[a.rand].preroll_mp4}else{switch(c.HTML5VideoQuality){case "HD":a.video_path=a.videos_array[a.videoid].video_path_mp4HD;
break;case "SD":a.video_path=a.videos_array[a.videoid].video_path_mp4SD}a.video_pathAD=a.videos_array[a.videoid].preroll_mp4}a.VIDEO.load(a.video_path,"0")}else if("vimeo"==c.videos[a.videoid].videoType||"Vimeo"==c.videoType)a.VIDEO.imageWrapper.css({zIndex:0}),a.VIDEO.imageWrapper.css({visibility:"none"}),a.VIDEO.hideCustomControls(),a.VIDEO.hideVideoElements(),a.preloader.stop().animate({opacity:0},700,function(){b(this).hide()}),a.vimeoWrapper.css({zIndex:501}),q();else if("image"==c.videos[a.videoid].videoType||
"Image"==c.videoType)a.VIDEO.hideCustomControls(),a.VIDEO.hideVideoElements(),a.VIDEO.ytWrapper.css({zIndex:0}),a.VIDEO.ytWrapper.css({visibility:"hidden"}),a.vimeoWrapper.css({zIndex:0}),a.vimeoWrapper.css({visibility:"hidden"}),a.VIDEO.imageWrapper.css({zIndex:502}),a.VIDEO.imageWrapper.css({visibility:"visible"}),a.VIDEO.imageDisplayed.src=a.videos_array[a.videoid].imageUrl,b(a.VIDEO.imageDisplayed).on("load",function(){c.autoplay&&a.VIDEO.setImageTimer()});a.nextBtn.bind(a.CLICK_EV,function(){a.VIDEO.shuffleBtnEnabled?
(a.VIDEO.generateRandomNumber(),a.videoid=a.VIDEO.rand):(a.videoid+=1,a.videoid>=c.videos.length&&(a.videoid=0));a.VIDEO.setPlaylistItem(a.videoid);a.VIDEO.playVideoById(a.videoid)});a.nextBtn2.bind(a.CLICK_EV,function(){a.VIDEO.shuffleBtnEnabled?(a.VIDEO.generateRandomNumber(),a.videoid=a.VIDEO.rand):(a.videoid+=1,a.videoid>=c.videos.length&&(a.videoid=0));a.VIDEO.setPlaylistItem(a.videoid);a.VIDEO.playVideoById(a.videoid)});a.previousBtn.bind(a.CLICK_EV,function(){a.VIDEO.shuffleBtnEnabled?(a.VIDEO.generateRandomNumber(),
a.videoid=a.VIDEO.rand):(--a.videoid,0>a.videoid&&(a.videoid=c.videos.length-1));a.VIDEO.setPlaylistItem(a.videoid);a.VIDEO.playVideoById(a.videoid)});a.shuffleBtn.bind(a.CLICK_EV,function(){a.VIDEO.toggleShuffleBtn()});a.toggleAutoplayBtn.bind(a.CLICK_EV,function(){a.VIDEO.toggleAutoplayBtn()});a.lastBtn.bind(a.CLICK_EV,function(){b(a.playlistContent).mCustomScrollbar("scrollTo","last")});a.firstBtn.bind(a.CLICK_EV,function(){b(a.playlistContent).mCustomScrollbar("scrollTo","first")});a.totalWidth=
c.videoPlayerWidth;a.totalHeight=c.videoPlayerHeight;"Right playlist"!=c.playlist&&"Bottom playlist"!=c.playlist||!a.element||(k.append(a.playlist),a.playlist.append(a.playlistContent));this.playlistW=this.playlist.width();this.playlistH=this.playlist.height();"Right playlist"==c.playlist?(a.playlistContent.css("height",String(p)+"px"),a.playerWidth=a.totalWidth-a.playlist.width(),a.playerHeight=a.totalHeight-a.playlist.height(),a.playlist.css({height:"100%",top:0}),a.playlistContent.height(k.height()-
44-44),b(a.playlistContent).mCustomScrollbar({axis:"y",theme:a.options.playlistScrollType,scrollButtons:{enable:!0},callbacks:{onScrollStart:function(){a.scrollingIsOn=!0},onScroll:function(){a.scrollingIsOn=!1}}})):"Bottom playlist"==c.playlist&&(a.playlistContent.css("width","0px"),a.playerWidth=a.totalWidth,a.playerHeight=a.totalHeight-a.playlist.height(),a.playlist.css({left:0,width:"100%",bottom:0}),a.playlistContent.width(k.width()),b(a.playlistContent).mCustomScrollbar({axis:"x",theme:a.options.playlistScrollType,
scrollButtons:{enable:!0},callbacks:{onScrollStart:function(){a.scrollingIsOn=!0},onScroll:function(){a.scrollingIsOn=!1}},advanced:{autoExpandHorizontalScroll:!0},setHeight:"auto",setWidth:"auto"}));b(a.playlistContent).mCustomScrollbar("scrollTo",a.item_array[a.videoid])};PLAYER.Playlist.prototype={};PLAYER.Playlist.prototype.hidePlaylist=function(){this.playlist.hide()};PLAYER.Playlist.prototype.showPlaylist=function(){this.playlist.show()};
PLAYER.Playlist.prototype.resizePlaylist=function(b,h){switch(this.options.playlist){case "Right playlist":this.playlist.css({right:0,height:"100%"});this.playlistContent.css({position:"absolute",top:44,height:this.mainContainer.height()-44,width:"100%"});this.playlistContent.height(this.mainContainer.height()-this.playlistBar.height()-this.playlistBarSearch.height());break;case "Bottom playlist":this.playlist.css({left:0,width:"100%",bottom:0}),this.playlistContent.height(this.playlist.height()-
this.playlistBar.height())}};
PLAYER.Playlist.prototype.playYoutube=function(b){parseInt(this.videos_array[b].youtubeIDStartSeconds);void 0!=this.VIDEO.youtubePlayer&&(this.VIDEO.youtubePlayer.cueVideoById(this.videos_array[b].youtubeID,this.videos_array[b].youtubeIDStartSeconds),this.VIDEO.youtubePlayer.setPlaybackQuality(this.ytQuality),this.preloader.hide(),this.VIDEO.ytWrapper.css({zIndex:501}),this.VIDEO.ytWrapper.css({visibility:"visible"}),this.isMobile.any()||this.VIDEO.youtubePlayer.playVideo());this.VIDEO.resizeAll()};