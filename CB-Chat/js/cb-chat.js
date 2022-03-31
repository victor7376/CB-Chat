

const baseUrl = "EVENTS_API_URL" // Retrieve the events api url from your Settings & Privacy Tab under Events API - Right click on ' Events API JSON feed ' and copy link address 
const baseDev = "TESTBED_EVENTS_URL" // Retrieve the events api on url from testbed.cb.dev/ in Settings & Privacy Tab under Events API - Right click on ' Events API JSON feed ' and copy link address
function getEvents(url) {
	
	var chatBox = document.getElementById("chatBox");
	var chatcount=1;
	var maxchatmsgs=20;
	const root = document.createElement('div');
	
    fetch(url).then(response => response.json())
    .then(jsonResponse => {
        // Process messages
        for (const message of jsonResponse["events"]) {
            const method = message["method"]
            const object = message["object"]
			
			var ChatTabContainerlist = document.getElementById("message-list");
			const usernameText = document.createElement('span');
			const chatTipped = document.createElement('div');
			const user = document.createElement('span');
			const chatline = document.createElement('div');
			const chatText = document.createElement('span');
			const chatlineMain = document.createElement("div");
			
            console.log(`Message ID: ${message["id"]}`)
            if (method === "broadcastStart") {
                console.log("Broadcast started")
            } else if (method === "broadcastStop") {
                console.log("Broadcast stopped")
			}else if (method === "userEnter") {
				//const username = object["user"]["username"]
				//usernameText.setAttribute("class", "enterText");
                // console.log(`${object["user"]["username"]} entered the room`)
            } else if (method === "userLeave") {
                // console.log(`${object["user"]["username"]} left the room`)																							  
            }  else if (method === "follow") {
                // console.log(`${object["user"]["username"]} has followed`)
				// const username = object["user"]["username"]
				// usernameText.setAttribute("class", "followText");
				// chatText.textContent = `${username} has Followed`;
            } else if (method === "unfollow") {
                // console.log(`${object["user"]["username"]} has unfollowed`)
				// const username = object["user"]["username"]
				// usernameText.setAttribute("class", "unfollowText");
				// chatText.textContent = `${username} has unfollowed`;
            } else if (method === "fanclubJoin") {
                console.log(`${object["user"]["username"]} joined the fan club`)
				const username = object["user"]["username"]
				chatText.setAttribute("class", "fanclub");
				chatText.textContent = `${username} joined the fan club `;
            } else if (method === "chatMessage") {
				
				chatline.setAttribute("class", "msg-text dm-adjust");
				
				chatlineMain.setAttribute("dm-adjust-bg", "#202C39");
				
				const username = object["user"]["username"]
				const chat = object["message"]["message"]
				var cleanmessage = chat.replace(/%%%\[emoticon.*]%%%/g, `EMOTICON`);
				const color = object["message"]["color"]
				const moderator = object["user"]["isMod"]
				const fanclub = object["user"]["inFanclub"]
				const hasTokens = object["user"]["hasTokens"]
				const recentTips = object["user"]["recentTips"]
				
				if (username == "CBRULES") { // Change to your username to appear on the chat feed as orange
					usernameText.setAttribute("class", "broadcasterText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (moderator == true){
					usernameText.setAttribute("class", "moderatorText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (moderator == "true" && fanclub == "true"){
					usernameText.setAttribute("class","moderatorText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (fanclub == true)  {
					usernameText.setAttribute("class", "fanclubText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (recentTips == "tons"){
					usernameText.setAttribute("class", "tonsText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (recentTips == "lots"){
					usernameText.setAttribute("class", "lotsText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (recentTips == "some"){
					usernameText.setAttribute("class", "someText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (hasTokens == true){
					usernameText.setAttribute("class", "hasTokensText");
					user.textContent = `${username}`;
					chatText.textContent = `${cleanmessage}`;
				} else if (hasTokens == false){
					/* usernameText.setAttribute("class", "userText");
					user.textContent = `${username}`;
					chatText.textContent = ``; */
				}
				
                console.log(`${object["user"]["username"]} sent chat message: ${object["message"]["message"]}`)
            } else if (method === "privateMessage") {
                console.log(`${object["message"]["fromUser"]} sent private message to ${object["message"]["toUser"]}: ${object["message"]["message"]}`)
            } else if (method === "tip") {
				const usernameText = document.createElement('span');
				chatTipped.setAttribute("class", "tipped");
                console.log(`${object["user"]["username"]} sent ${object["tip"]["tokens"]} tokens ${object["tip"]["isAnon"] ? "anonymously" : ""} ${object["tip"]["message"] ? `with message: ${object["tip"]["message"]}` : ""}`)
            } else if (method === "roomSubjectChange") {
                console.log(`Room Subject changed to ${object["subject"]}`)
            } else if (method === "mediaPurchase") {
                console.log(`${object["user"]["username"]} purchased ${object["media"]["type"]} set: ${object["media"]["name"]}`)
            } else {
                console.error("Unknown method:", method)
            }
			
			// usernameText.append(chatTipped);
			usernameText.append(user);
			chatline.append(usernameText, chatText);
			chatlineMain.append(chatline);
			
			root.append(chatlineMain);
			ChatTabContainerlist.append(root);
			document.body.append(ChatTabContainerlist);
        }

        // Once messages are processed, call getEvents again with 'nextUrl' to get new messages
        getEvents(jsonResponse["nextUrl"])
    })
    
    
}

getEvents(baseUrl) // Change between baseUrl & baseDev - 'baseUrl' is Chaturbate Main site / 'baseDev' is Chaturbate Testbed site
