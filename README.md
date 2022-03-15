# CB-Chat
Chat Feed from Your own Chaturbate Chat.

Select CODE - then Download ZIP.  This will download all the files into a zip folder.

Extract the file then follow the below instructions.

***~~If you do not want Gray / Grey users to appear in the live feed, set your room to only those with tokens~~***

~~We are wokring on a solution for gray / grey spammers not to appear in the live feed.~~

Gray / Grey chat no longer appear in live feed, disabled due to spammers.

# OBS Chat feed
This is a webpage that allows you to see the chat feed using Chaturbate Events API including when users join fan clubs too.  Tip feed is an option but at this moment has no css coding.

Please note that if a user gets silenced or banned the chat does NOT vanish from the feed.

Emotes are replaced with the word 'Emoticon', but if a user posts too many emotes within the chat their whole line gets replaced with 'Emoticon'

The options you can have is:

At this point this only shows the following:
Username & Chat text
All Different username colors which can be changed within the css
User joins your fanclub.

(Please note these options are NOT coded into this page but are available) 
User Enter the chat
User Leave the chat
User tips public / anonymously
User joins fanclub
Private Messages can be shown publically
Users Follow or Unfollow
Media purchases
Room Subject change

# Adding Events API URL

Open up the ***cb-chat.js*** in a text editor (recommended Notepad++ to edit the file)
Copy your Events API URL from the Settings & Privacy page right click on '***Events API JSON feed***' Select copy address & paste in the *cb-chat.js* file within the '*js*' folder

Look for const baseUrl = "***EVENTS_API_URL***" line and paste in the 'EVENTS_API_URL'

To show your username in orange within the feed scroll down to:

'if (username == "CBRULES") {'

and change '***CBRULES***' to your username

Then save.

# OBS

Within OBS right click on sources & select **Add -> Browser** then select **Local File**
Browse to when you have extracted the files & select the cb-chat.html & change the width to 400px

The page when loaded will look black.  To make it transparent right click on the '***browser***' in the sorces section & select '***Filter***'.  Click on + in the Effects section and select '***Chroma Key***' click OK.  Now select in Key Colour Type -> Custom.  Then '***Select Colour***' click on the black box top left & OK.  The box will vanish, now move the slider on '***SIMILARITY***' down to 1.  The text should now appear.

Enjoy
