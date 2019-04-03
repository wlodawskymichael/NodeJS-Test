# :red_circle: Setup (Read Each Step Carefully) #

### BIG NOTE: Some commands and instructions will be different between Operating Systems (i.e. MacOS/Windows/Linux). Be aware of what computer you're using so that you follow the correct instructions!! ###
First thing is first, you're going to have to download NodeJs and React Native. Those are just big fancy words for the coding stuff we will need! 

## Installating NodeJS
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

# :red_circle: Git/Github Tutorial (Correct use/Installation) #

### Note Before Starting
1. You will be using the Command Prompt (Windows) or Terminal (MacOS/Linux) to run most of these commands! I recommend tagging these application to your Applications bar or somewhere to where you can easily access those applications.

2. **YOU CAN EDIT YOUR CODE WHEREVER YOU WANT!** But, to use Git you will have to use the command line to make commits and push them to GitHub.
### Installing Git
1. Follow the tutorial [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) based on the Operating System running on your computer (i.e. MacOS, Windows, Linux). 
**Note For Windows Users: Install the first link in your instruction section which is called "Git for Windows"**
2. Check you installation worked by going to your command line/terminal and typing the command below.
```shell
git --version
```
Note: If you get an error that "git" is not a command, that means your installation failed and you need to try again. If your second attempt does not work, EMAIL ME! I will help you troubleshoot.

## Using Command Line

Command line is sometimes cumbersome to those who are new to it. But, all you are doing is looking at your file system and typing commands to do things you are used to using a User Interface for. Here is a quick cheatsheet to help you learn some basic commands. Feel free to Google other commands if you are interested in doing more complicated things/ I don't explain something you need!

###### Listing Files in a Folder/Directory
Mac/Linux:
```shell
ls
```
Windows:
```shell
dir
```

###### Changing Folder/Directory
Mac/Linux/Windows: 
```shell 
cd name_of_file
```
Note: To go to the previous directory use name_of_file as ``` .. ```

## Using Git

Git is an amazing program for version control of your Apps (or any Application for that matter). You will need to use the Command Prompt/Terminal to push, pull, and commit changes to GitHub. Here is a helpful cheatsheet on how to use Git.

##### Step 1) Setting up a Local Repository
**YOU MUST DO THIS WHEN YOU START ANY PROJECT! YOU ONLY NEED TO DO THIS ONCE PER PROJECT!**
1. Open Command Prompt/Terminal and navigate to the directory (folder). I reccommend just using the default opened folder if you are new to Command Line Interfaces. You can navigate your file system with the command line tips above. 
2. Go to you Command Prompt/Terminal and type the command below, BUT DO NOT HIT ENTER YET!
```shell
git clone
```
3. Go to GitHub and in your repository click the green button that says ```Clone or Download```. Copy the URL into your Command Prompt/Terminal and now hit ```Enter```. This will setup your repository. 
Note: Your command will look something like this: 
```shell
git clone https://github.com/...my_repository
```
4. To be able to make git commits, you will need to change directory (cd) to your project you just cloned. So all you need to do is simply:
```shell
cd my_repository
```

##### Step 2) Creating Commits
**YOU SHOULD DO THIS STEP EVERY 20-30 MINUTES!!**
Commits are what create your messages so that Dr. Riedel can see your changes. You should do this, in all honesty, when you get a big change working in your code. To create a commit with a message, use the commands below in your Command Prompt/Terminal, while in your Git repository (folder/directory with all of your code on your computer).
**Command 1:**
```shell
git add .
```
**Command 2:**
```shell
git commit -m "put your commit message here"
```

##### Step 3) Pushing your Commits to GitHub
**YOU MUST DO THIS TO SEE ANY CHANGED ON GITHUB!!**
You can do this whenever you want. You can have any amount of commits before doing this, because Git will know how to handle it. You simply type the command below in your Command Prompt/Terminal, while in your Git repository (folder/directory with all of your code on your computer).
```shell
git push
```

##### Step 4) ONLY if you Edited Something on GitHub
You need to pull down your changes you don't have a discrepency between the code on GitHub and the code on your computer. You simply type the command below in your Command Prompt/Terminal, while in your Git repository (folder/directory with all of your code on your computer).
```shell
git pull
```

# :red_circle: Workflow (Developing your Web App) #

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
Note: If throws an error like "sh: react-scripts: command not found", then refer to step one again and update npm. This builds your app to run locally on your computer!

3. Type this command:
```shell
npm start
```
This will open a window in your browser to immediatley show you the changes you made to your website! If it does not open a tab, simply open a new tab and point to the address "localhost:3000" to see your app running locally.

## Deploying to your website

1. You need to setup your ```package.json``` to deploy to your website. Open ```package.json``` and change the argument "homepage" to your personal repository homepage:
```diff
- "homepage": "https://diydiagnostics.github.io/NodeJS-Test/"
+ "homepage": "https://<GitHub_Username>.github.io/NodeJS-Test/"
```
**Note:** You only need to do this step ONCE!!

2. Finally, when you want to deploy your working app to your GitHub Page, simply run this command:
```shell
npm run deploy
```
This will rebuild your app and then deploy it to your GitHub Page. Be patient, it might take a few minutes to deploy.




