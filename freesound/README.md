# Freesound
Search and download from Freesound, using the API

## Getting an API key
Before you can do anything with Freesound, you'll need an API key.

1. Get a Freesound account. It's free. Go to www.freesound.org and sign up.

2. After you've logged in go to https://freesound.org/apiv2/apply/

3. Fill in the form to apply for a new set of API keys.

4. You may notice that Freesound has fewer keys than Twitter. That's because
Freesound only hands out client keys, not access keys. So, whereas using the
access keys someone could post tweets from your Twitter account, the same
isn't true for Freesound.

5. Anyway, note down the client ID and API key.

6. In this freesound folder, you should see a file named .env-template. This is
an environment file, it contains key-value pairs that other applications, like
Node, can load before running.

7. Duplicate the .env-template file to a new file named ".env". It must be named
".env", not "my.env" or anything like that. Fill in this file using the keys
you got from Freesound.

8. You should be all set. Open the Max patcher freesound.maxpat and see!
