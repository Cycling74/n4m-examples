# Giphy
Search and download from Giphy, using the API

## Getting an API key
Before you can do anything with Giphy, you'll need an API key.

1. Get a Giphy account. It's free. Go to www.giphy.com.

2. After you've logged in go to https://developers.giphy.com/

3. Click "Create an App."

4. Click "Create an App" again at the top of the window—this will bring up a
simple form. Fill in whatever you like and click "Create New App."

5. Giphy only has the one API key, unlike Twitter and Freesound. Copy it down.

6. In this giphy folder, you should see a file named .env-template. This is
n environment file, it contains key-value pairs that other applications, like
Node, can load before running.

7. Duplicate the .env-template file to a new file named ".env". It must be named
".env", not "my.env" or anything like that. Fill in this file using the key
you got from Giphy.

8. You should be all set. Open the Max patcher giphy-demo.maxpat and see!
