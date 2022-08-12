## Step 3: Installing the app on the server

We now need to log in to the server and set it up with our app.

1. Tick the instance
2. Click "connect"
3. EC2 Instance Connect should be the active tab by default. This is what we want - it allows us to connect to the instance in a browser without having to worry about SSH keys. Leave the options as default and click "connect".
4. Install git: `sudo yum install -y git`
5. Clone this repository: `git clone https://github.com/chloebrett/fit3170`
6. Navigate into the repository: `cd fit3170`. Note that from now on, when I say to navigate to a particular folder, assume it is defined relative to the repository root. For example "navigate to `backend-json`" means go to the folder with absolute path `/home/ec2-user/fit3170/backend-json`. You can see your absolute path at any point with the `pwd` command.
7. Run the install script: `sudo ./install.sh`. This installs a number of dependencies required by the app.

Next: [Running the app](./instructions/Step4.md)
