# Twitter
Communicate with Twitter from Max, using the API.

## Getting an API key
Before you can do anything with Twitter, you'll need an API key. Way back in
the day, you could do basic stuff like search tweets or view the global
homepage, even if you didn't have an API key. No longer. The process is a bit
annoying but not too bad. 

1. Get a Twitter account. If you're reading this, probably you've got one already.

2. Go to https://apps.twitter.com/ to create a Twitter App. This app will
contain all of the keys that you need in order to connect your patch.

3. Click the "Create New App" button to create a new app.

4. Fill out the new app form. Nothing you put here really matters, assuming
you just want Twitter to work from Max, so put whatever you want.

5. Once you've created the app, you should be on the app settings page. Near
the top, find the tab "Keys and Access Tokens" and click it.

6. Note the Consumer Key and Consumer Secret (aka API Key and API Secret).
You'll need these.

7. Near the bottom of this page, click the button "Create my access token".
This is the token that the app will use to do things like send tweets from
you account.

8. After you click the button, wait a bit. The Access Token and Access Token
Secret should appear. Note these down as well.

9. In this twitter folder, you should see a file name .env-template. This is
an environment file, it contains key-value pairs that other applications, like
Node, can load before running.

10. Duplicate the .env-template file to a new file named ".env". It must be named
".env", not "my.env" or anything like that. Fill in this file using the keys
you got from Twitter.

11. BE CAREFUL! Anyone with these keys can tweet from your account, follow and
unfollow people—if they have these keys then they are you on Twitter. Try not
to share these keys accidentally, for example by checking the .env file into
version control.

12. You should be all set. Open the Max patcher twitter.maxpat and see!
