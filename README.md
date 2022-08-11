# FIT3170 AWS Workshop!

Code and instructions for interactive workshop learning AWS EC2, S3, RDS and Lambda

# Instructions

## Getting started

There is no need to clone this repo to your local machine - we'll clone it to a remote server to work with in a bit.

Keep this readme open in a browser tab to refer to as we go through the workshop.

Important: you very much need to either do the whole workshop interactively or none of it - as everything we do relies on previous things we did. We'll stop to do some troubleshooting periodically if needed and give people time to catch up, but don't expect that you'll be able to follow along if you join half way in.

## Expectations

By the end of this workshop, assuming we get through everything we plan to, you'll have a basic knowledge of:

- AWS as a whole
- AWS EC2 for running servers
- AWS S3 for hosting static websites and files
- AWS RDS for hosting a database
- AWS Lambda and the idea of serverless

You are already expected to:

- Have a basic understanding of how the linux command line works
- Be able to edit files from the command line (with vim, nano etc) - nano is pretty easy to work out if you're not sure
- Be able to navigate complex UIs following instructions
- Be able to take commands to run and substitute in values specific to your environment (e.g. host names)
- Helpful: basic knowledge of yarn as a package manager, as it's used quite a bit

Other than that, no specific technologies or languages are assumed knowledge. The app we are running is built in NodeJS on the back end and React on the front end, but you don't actually need to know these in order to get it running. Feel free to poke around the codebase if you like, but understand that it's built to be very simple for the sake of a demo - production applications are a lot more complex and polished.

## Step 1: setting up your AWS account

You will need access to a credit/debit card for this, but you won't actually get charged (just a $1 holding charge that will be refunded in a day or two). We'll also shut everything down completely at the end (and optionally, there's instructions on how to completely close your entire AWS account), so don't worry about getting billed. Furthermore, all the services we are using come under the "free tier" - a year of free services including file storage, server hours, etc. If you still don't like this, just watch me or the person next to you instead - unfortunately there is no way to create an AWS account without attaching a card.

Here are the steps:

1. Go to https://portal.aws.amazon.com/billing/signup
2. For "Root user email address", just put your uni email address (optionally, add a +something to the authcate to identify the account more specifically e.g. jsmi0001+aws@...)
3. Give your account a name - whatever you like
4. Verify your email with the 6 digit code that was sent
5. Select "personal" for the account type
6. Enter your phone number
7. Enter your country
8. Enter your address
9. Agree to the terms
10. Enter your card details
11. Enter your phone once more, select text verification
12. Verify your phone number with the 4 digit code
13. Choose free/basic support
14. Sign up is done!

Now, click "go to management console" and log in with your "root user" details.

Finally, you'll see a region listed in the top-right to the left of your account name. Usually by default it is N. Virginia. This is too far away for us - click the region and update it to Asia Pacific (Sydney) which is the closest to us and will result in the fastest load times and lowest server pings.

## Step 2: Launching an EC2 Server

Now we're going to launch a server which can host both the front end and back end of our app.

1. Using the search bar at the top of the console, search for EC2 and click it. This will take you to the EC2 console. In general you can navigate between services using this search bar.
2. Click "instances".
3. Click "launch instances".
4. For the name, choose whatever you like - e.g. "best Monash units".
5. Leave all the other configuration as default and click "launch instance".
6. You will be warned about proceeding without a key pair. This is fine, select "proceed without key pair" and click "proceed without key pair".
7. Once again, click "launch instance".
8. Click "view all instances".
9. Wait for the instance to launch - this should only take a minute or so.

## Step 3: Installing the app on the server

We now need to log in to the server and set it up with our app.

1. Tick the instance
2. Click "connect"
3. EC2 Instance Connect should be the active tab by default. This is what we want - it allows us to connect to the instance in a browser without having to worry about SSH keys. Leave the options as default and click "connect".
4. Install git: `sudo yum install -y git`
5. Clone this repository: `git clone https://github.com/chloebrett/fit3170`
6. Navigate into the repository: `cd fit3170`. Note that from now on, when I say to navigate to a particular folder, assume it is defined relative to the repository root. For example "navigate to `backend-json`" means go to the folder with absolute path `/home/ec2-user/fit3170/backend-json`. You can see your absolute path at any point with the `pwd` command.
7. Run the install script: `sudo ./install.sh`. This installs a number of dependencies required by the app.

## Step 4: Running the app

First, start the back end. The `backend-json` folder contains a basic back end which stores data in a JSON file and doesn't need a full database. We'll use this to start, before replacing it with `backend-database` later once we have a database running. Here's how to get `backend-json` running:

1. `cd backend-json`
2. `yarn start`

That's it! You should see a message saying "App listening on 3001" if everything worked as expected.

Next, to start the front end, the easiest way to do this is by launching another "instance connect" session as follows:

1. Go back to the EC2 instances tab, select your instance and select "connect", then select "connect" again.

This is necessary so that we can leave the back end running while we get the front end started. So, finally, we can launch the front end from this second session:

1. `cd fit3170` to get to the cloned repository
2. `cd frontend`
3. `sudo yarn serve`

This will build the front end of the app and serve the contents over HTTP on port 3000.
