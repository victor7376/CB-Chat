

const baseUrl = "EVENTS_API_URL" // Retrieve the events api url from your Settings & Privacy Tab under Events API - Right click on ' Events API JSON feed ' and copy link address 
const baseDev = "DEV_EVENTS_API_URL" // Retrieve the events api on url from testbed.cb.dev/ in Settings & Privacy Tab under Events API - Right click on ' Events API JSON feed ' and copy link address
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
                // console.log("Broadcast started")
            } else if (method === "broadcastStop") {
                // console.log("Broadcast stopped")
			}else if (method === "userEnter") {
				//const username = object["user"]["username"]
				//usernameText.setAttribute("class", "enterText");
                // console.log(`${object["user"]["username"]} entered the room`)
            } else if (method === "userLeave") {
                // console.log(`${object["user"]["username"]} left the room`)																							  
            }  else if (method === "follow") {
                // console.log(`${object["user"]["username"]} has followed`)
            } else if (method === "unfollow") {
                // console.log(`${object["user"]["username"]} has unfollowed`)
            } else if (method === "fanclubJoin") {
                console.log(`${object["user"]["username"]} joined the fan club`)
            } else if (method === "chatMessage") {
                // console.log(`${object["user"]["username"]} sent chat message: ${object["message"]["message"]}`)
            } else if (method === "privateMessage") {
                // console.log(`${object["message"]["fromUser"]} sent private message to ${object["message"]["toUser"]}: ${object["message"]["message"]}`)
            } else if (method === "tip") {
                // console.log(`${object["user"]["username"]} sent ${object["tip"]["tokens"]} tokens ${object["tip"]["isAnon"] ? "anonymously" : ""} ${object["tip"]["message"] ? `with message: ${object["tip"]["message"]}` : ""}`)
            } else if (method === "roomSubjectChange") {
				var x = document.getElementById("ChatTabContents");
				x.querySelector(".roomtitle").innerHTML = `${object["subject"]}`;
				
                // console.log(`Room Subject changed to ${object["subject"]}`)
            } else if (method === "mediaPurchase") {
                // console.log(`${object["user"]["username"]} purchased ${object["media"]["type"]} set: ${object["media"]["name"]}`)
            } else {
                console.error("Unknown method:", method)
            }
			
        }

        // Once messages are processed, call getEvents again with 'nextUrl' to get new messages
        getEvents(jsonResponse["nextUrl"])
    })
    
    
}

getEvents(baseDev) // Change between baseUrl & baseDev - 'baseUrl' is Chaturbate Main site / 'baseDev' is Chaturbate Testbed site
