
		function showPlayer(vURL){
			var pDiv = document.getElementById('vPlayerDiv');
			if(pDiv){
				closePlayer();
			}
			
			pdiv = document.createElement("div");
			pdiv.setAttribute("id","vPlayerDiv");

			var pCloseTxt = document.createElement("div");
			pCloseTxt.setAttribute("id","playerHead");
			pCloseTxt.setAttribute("style","text-align: right");
				var pCloseBtn = document.createElement("img");
				pCloseBtn.setAttribute("src","https://maxcdn.icons8.com/windows8/PNG/26/User_Interface/close_window-26.png");
				pCloseBtn.setAttribute("height","30px");
				pCloseBtn.setAttribute("width","30px");
				pCloseBtn.setAttribute("style","background-color:white;");
				pCloseBtn.setAttribute("id","vPlayerClose");
				
				pCloseTxt.appendChild(pCloseBtn);
			pdiv.appendChild(pCloseTxt);

			var vFrame = document.createElement("iframe");
			var vPlayerJS = document.createElement("video");
			var vSource = document.createElement("source");
            vSource.setAttribute("src", vURL);
            vSource.setAttribute("type", "video/mp4");
            
            vPlayerJS.appendChild(vSource);
            vPlayerJS.setAttribute("class","video-js");
			vPlayerJS.setAttribute("height","217px");
			vPlayerJS.setAttribute("width","385px");
			vPlayerJS.setAttribute("controls","");
			vPlayerJS.setAttribute("preload","auto");
			vPlayerJS.setAttribute("id","my-video");
			vPlayerJS.setAttribute("autoplay","")
			vPlayerJS.setAttribute("data-setup","{}");
			// vFrame.setAttribute("allowfullscreen","");
			pdiv.appendChild(vPlayerJS);
			pdiv.setAttribute("style","position:fixed;background-color:rgba(0,0,0,0);right:15px;bottom:7px");
			
			document.body.appendChild(pdiv);

			var pClose = document.getElementById("vPlayerClose");
			pClose.onclick = closePlayer;
		}

		function closePlayer(){
			// console.log("waass here");
			var pDiv = document.getElementById('vPlayerDiv');
			if (pDiv){
				pDiv.remove();
				}
		}
