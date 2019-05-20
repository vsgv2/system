

		$(document).ready(function($)
		{
			videoPlayer = $("#Stellar_video_player").Video({                       <!-- ALL PLUGIN OPTIONS -->
				<!-- GLOBAL SETTINGS -->
					instanceName:"player1",                                        //name of the player instance (for multiple players per page change this name)
					instanceTheme:"dark",                                          //choose video player theme: "dark", "light"
					playerLayout: "fitToContainer",                                     //Select player layout: "fitToContainer" (responsive mode), "fixedSize" (fixed size on page load,responsive on resize), "fitToBrowser" (fill the browser window)
					playerOrientation:"LTR",                                       //adjust player text orientation: "LTR", "RTL" (left to right or right to left for eastern countries)
					autohideControls:2,                                            //autohide controls
					hideControlsOnMouseOut:false,                                  //hide controls on mouse out of the player: true, false
					videoPlayerWidth:768,                                          //fixed total player width (only for playerLayout: "fixedSize")
					videoPlayerHeight:432,                                         //fixed total player height (only for playerLayout: "fixedSize")
					videoRatio: 16/9,                                              //set any video ratio (calculate video width/video height)
					videoRatioStretch: false,                                      //adjust video ratio for case when playlist is "opened" : true/false
                    iOSPlaysinline: true,                                          //on iOS device: play videos inline (like on desktop) or in Fullscreen by default: true/false
                    autoplay:true,                              				   //autoplay when webpage loads: true/false
					colorAccent:"#ff0000",                                         //plugin colors accent (hexadecimal or RGB value - http://www.colorpicker.com/)
					videoAnimationTime: 0,                                       //video transition animation when using show/hide playlist [miliseconds], 0-instant animation, larger number will increase animation time
					playSpecificVideo: 0,                                          //load and play specific video from playlist on page load [0-first video, 1-second video...]
					progressBarThickness: 3,                                       //adjust progress bar height [px]
					progressBarThicknessOnMouseover: 6,                            //adjust video progress bar height on mouse over [px]
					tooltipFontSize:12,                                            //adjust tooltip font size
					videoPlayerShadow:"effect4",                                   //choose player shadow:  "effect1" , "effect2", "effect3", "effect4", "effect5", "effect6", "off"
					loadRandomVideoOnStart:false,                                  //choose to load random video when webpage loads: true, false
					shuffle:false,				                                   //choose to shuffle videos when playing one after another: true, false (shuffle button enabled/disabled on start)
					posterImg:yposter,                          //player poster image  
					posterImgOnVideoFinish:yposter,     	   //player poster image on video finish (works if enabled onFinish:"Stop video")
					onFinish:"Play next video",                                    //"Play next video","Restart video", "Stop video",
					nowPlayingText:true,                                           //enable disable now playing title: true, false
					showAllControls:true,						                   //enable/disable all player controls: true/false
					allowSkipAd:true,                                              //enable/disable "Skip advertisement" option: true/false
					infoShow:false,                                                 //enable/disable info option: true, false
					nextShow:false,                                                 //enable/disable next video option: true, false
					rewindShow:false,                                               //enable/disable rewind video option: true, false
					qualityShow:true,                                               //enable/disable rewind video option: true, false
				<!-- PLAYLIST SETTINGS -->
					playlist:"Off",                                     //choose playlist type: "Right playlist", "Bottom playlist", "Off"
					playlistScrollType:"inset",                                    //choose scrollbar type: "light","minimal","light-2","light-3","light-thick","light-thin","inset","inset-2","inset-3","rounded","rounded-dots","3d","dark","minimal-dark","dark-2","dark-3","dark-thick","dark-thin","inset-dark","inset-2-dark","inset-3-dark","rounded-dark","rounded-dots-dark","3d-dark","3d-thick-dark"
					playlistBehaviourOnPageload:"opened (default)",                //choose playlist behaviour when webpage loads: "closed", "opened (default)" (not apply to Vimeo player)				
				<!-- EMBED SETTINGS  -->
					embedShow:false,                                                //enable/disable embed option: true, false
					embedCodeSrc:"",     //path to your jQuery version of video player on server
					embedShareLink:"",   //direct link to your site (or any other URL) you want to be "shared"
				
				<!-- YOUTUBE SETTINGS -->
					youtubeControls:"custom controls",			                   //choose youtube player controls: "custom controls", "default controls"
					youtubeSkin:"dark",                                            //default youtube controls theme: light, dark
					youtubeColor:"red",                                            //default youtube controls bar color: red, white
					youtubeQuality:"default",                                      //choose youtube quality: "small", "medium", "large", "hd720", "hd1080", "highres", "default"
					youtubeShowRelatedVideos:false,				                   //choose to show youtube related videos when video finish: true, false (onFinish:"Stop video" needs to be enabled)
				<!-- TRANSLATE TEXTS TO YOUR LANGUAGE  -->                         //translate all texts to any language
					      
					playBtnTooltipTxt:"Play",                    
					pauseBtnTooltipTxt:"Пауза",                  
					rewindBtnTooltipTxt:"Заново",                
					downloadVideoBtnTooltipTxt:"Скачать", 
					qualityBtnOpenedTooltipTxt:"Закрыть",
					qualityBtnClosedTooltipTxt:"Выбрать",       
					muteBtnTooltipTxt:"Mute",                    
					unmuteBtnTooltipTxt:"Unmute",                
					fullscreenBtnTooltipTxt:"На весь экран",        
					exitFullscreenBtnTooltipTxt:"Свернуть",
					infoBtnTooltipTxt:"Информация",				
					embedBtnTooltipTxt:"",                  
					shareBtnTooltipTxt:"Поделиться",               
					volumeTooltipTxt:"Громкость",                   
					playlistBtnClosedTooltipTxt:"", 
					playlistBtnOpenedTooltipTxt:"", 
					facebookBtnTooltipTxt:"Поделиться в Facebook",  
					twitterBtnTooltipTxt:"Поделиться в Twitter",     
					googlePlusBtnTooltipTxt:"Поделиться в Google+",      
					nextBtnTooltipTxt:"Next video",             
					previousBtnTooltipTxt:"",
					playlistSearchText: "",   
					nextVideoInPlaylistText: "",          
					autoplayNextVideoInPlaylistOn: "",
					autoplayNextVideoInPlaylistOff: "",
					countVideos: "of",      
					shuffleBtnOnTooltipTxt:"Shuffle on",         
					shuffleBtnOffTooltipTxt:"Shuffle off",        
					embedWindowTitle2:"",
					embedWindowTitle3:"", 
					copyTxt:"Copy",
					copiedTxt:"Copied!",
				<!-- MANUAL PLAYLIST -->
				videos:[
					{
						videoType:"youtube",                                                              
						title:"",                                                            
						youtubeID:vidid,                                                          
						youtubeIDStartSeconds: "",                                                        
						youtubeIDEndSeconds: "",                                                           
						enable_mp4_download:false,                                                        
						imageUrl:yposter,                                             
						imageTimer:0, 																	  
						thumbImg:yposter,                                                
						popupAdShow:true, 
						popupImg:playerimg, 
						popupAdStartTime:timestart, 
						popupAdEndTime:timeend,  
						popupAdGoToLink:playeradlink,                                                                                   
					}
				]
			});
		});