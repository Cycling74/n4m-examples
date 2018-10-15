# Node For Max Examples

Hey Maxers! This repository contains many examples of how to use the Node For Max package in your Max patches. Some were created by Cycling '74, but others are from the Max community! We welcome community contributions and have included a guide on [how to add your own example](#adding-your-own-example). 

You might find an error in an example, or have a request for a example you would like to see. You can report this by [submitting an issue](https://github.com/Cycling74/n4m-examples/issues/new) to this repository. Note that you will need to have a GitHub account to submit an issue.

## List of Examples

* [cors-service](https://github.com/Cycling74/n4m-examples/tree/master/cors-service): Create a CORS (Cross-Origin Resource Sharing) capable web server. By [Cycling '74](https://github.com/Cycling74).
* [dog-ceo](https://github.com/Cycling74/n4m-examples/tree/master/dog-ceo): Downloads files from a remote API, in this case a repository of dogs. By [Cycling '74](https://github.com/Cycling74).
* [echo](https://github.com/Cycling74/n4m-examples/tree/master/echo): Simply outputs the input, a pass-through. Shows how to use a list of arguments of unspecified length. By [Cycling '74](https://github.com/Cycling74).
* [express](https://github.com/Cycling74/n4m-examples/tree/master/express): A small example Express application. By [Cycling '74](https://github.com/Cycling74).
* [file-upload](https://github.com/Cycling74/n4m-examples/tree/master/file-upload): Upload a file from a browser, play it in Max. By [Cycling '74](https://github.com/Cycling74).
* [freesound](https://github.com/Cycling74/n4m-examples/tree/master/freesound): Use the Freesound API with Max. By [Cycling '74](https://github.com/Cycling74).
* [giphy](https://github.com/Cycling74/n4m-examples/tree/master/giphy): Use the Giphy API with Max. By [Cycling '74](https://github.com/Cycling74).
* [routeServer](https://github.com/Cycling74/n4m-examples/tree/master/routeServer): Another small Express application example, which gets data from Max. By [Cycling '74](https://github.com/Cycling74).
* [sockets](https://github.com/Cycling74/n4m-examples/tree/master/sockets): An example creating a web server with websockets. By [Cycling '74](https://github.com/Cycling74).
* [tonal-chord-builder](https://github.com/Cycling74/n4m-examples/tree/master/tonal-chord-builder): Generate different chords based on a root note. By [Cycling '74](https://github.com/Cycling74).
* [twitter](https://github.com/Cycling74/n4m-examples/tree/master/twitter): Communicate with Twitter from Max. By [Cycling '74](https://github.com/Cycling74).
* [watch-youtube](https://github.com/Cycling74/n4m-examples/tree/master/watch-youtube): Stream YouTube videos from Max. By Julian from [Znibbles](https://www.znibbl.es).

## Adding your own Example

If you've made something cool with Node For Max, we'd love to showcase it here! Here's how you can submit your example:

1. If you don't already have a GitHub account, [create one](https://github.com/join)!
2. [Fork this repository](https://guides.github.com/activities/forking/#fork) into your GitHub account by clicking on the "Fork" button in the upper right-hand corner. This creates your own copy of the N4M example repository.
3. [Clone your forked repository](https://guides.github.com/activities/forking/#clone) to your computer so that you can make changes and add your example.
4. [Make your changes](https://guides.github.com/activities/forking/#making-changes). We would like for your exmaple to be added in the follow way:
  1. Create a folder in this repository that's the name of your example, i.e. `my-fun-example`.
  2. Copy all of the necessary files to run your example to the folder. This should be at least a max patch and a JS file.
  3. Create a file in your example folder called `README.md` (the file path would be `my-fun-example/README.md`) with a description of your example and how to fun it. You can look at the [file-upload README](https://github.com/Cycling74/n4m-examples/blob/master/file-upload/README.md) for reference.
  4. Add a link to your example in this file, under ["List of Examples"](#list-of-examples). Be sure to credit yourself!
  5. Make sure you don't accidentally add any sensitive information to your example! This happens a lot when working with APIs, since you'll need to create and use API keys. We recommend looking at the [freesound](https://github.com/Cycling74/n4m-examples/tree/master/freesound) example for reference about how to prevent this. You'll likely end up adding two files: `.gitignore` and `.env-template`.
5. Save and commit your changes. Push them to the fork of the N4M examples you made on GitHub.
6. [Make a pull request](https://guides.github.com/activities/forking/#making-a-pull-request). You can think of this as the actual "submission" step. 
7. Folks from Cycling '74 may ask you to make some changes. This doesn't mean they won't accept your submission! You'll need to go back to your local copy of the N4M Examples repository, make those changes, save and commit the changes, and then push the changes to your forked repo on GitHub.
8. If your pull request looks good (you may not even have to make any changes!), your pull request will be accepted. This means your example was sucessfully added! Yay!
