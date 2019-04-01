# Setup (Read Each Step Carefully) #
First thing is first, you're going to have to download NodeJs and React Native. Those are just big fancy words for the coding stuff we will need! 

## Installating NodeJS
### !! If you are using a Windows computer, look at the Windows Section !! ###
### Mac
If you have a Mac, this is should be easier for you!

1. Open terminal.

2. Copy and Paste the line below into terminal and press ENTER. (Note: You're going to wait for the installation to finish)
```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

3. Copy and Paste the line below into terminal and press ENTER to confirm the previous installation worked.
```shell
brew -v
```
If nothing comes up, try step 2 again. If this does not work, EMAIL ME.

4. Copy and Paste the line below into terminal and press ENTER to install NodeJS. (Note: You're going to wait for the installation to finish)
```shell
brew install node
```

5. Copy and Paste the line below into terminal and press ENTER to confirm the previous installation worked.
```shell
npm -v
```

6. Copy and Paste the line below into terminal and press ENTER to install React. (Note: You're going to wait for the installation to finish)
```shell
sudo npm install -g react --save
```
When it asks for your password, it is the password to login to your computer.

You're Done! Now jump on ahead to the *Github* Section!

### Windows
If you have a Windows Computer, I'm sorry. You might run into issues, so PLEASE email me if you're stuck! 

1. Go download the NodeJS installer [here](http://nodejs.org/).
 Note: Choose the version that says "Recommended For Most Users"

2. Run the Installer and follow the prompts on the installer (you should not need to make any custom settings).

3. Restart you computer.

4. Test your installation by opening the application "Command Prompt" and typing the line below.
```shell
npm -v
````
Note: If you get an Error about "npm" not being a command, try installing NodeJS again. If you that does not work, you will probably need to bring in your computer so I can troubleshoot.

## Github

# Workflow #

## Developing Locally
Developing locally is the best way to debug your programs. To do this, make sure you are in the same directory as your respository -- which if you followed directions should be the default directory that your terminal/command prompt opens up to. These steps are used to develop locally and deploy to Github pages.
1. Before you start working always run:
**Mac/Linux**
```shell
sudo npm install
```
**Windows**
Right click the command prompt application and press "Run as Administrator". Then, in the command line type:
```shell
npm install
```
Note: These will ask for your computer login password, but this is needed to Node JS can make the correct changes to all of the files needed.
This updates Node JS to the latest version incase there were updates. Sometimes you will need to do this to make sure your local setup works properly.

2. Open your terminal and type this command:
```shell
npm run build
```
Note: If throws an error like "sh: react-scripts: command not found", then refer to step one again and update npm.




