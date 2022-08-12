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
3. `sudo yarn serve` (don't forget the `sudo`!)

This will build the front end of the app and serve the contents over HTTP on port 3000.

If all succeeds, you should get a message like this:

```
ERROR: Cannot copy server address to clipboard: Couldn't find the `xsel` binary and fallback didn't work. On Debian/Ubuntu you can install xsel with: sudo apt install xsel.

   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:3000       │
   │   - On Your Network:  http://172.31.32.185:3000   │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

Ignore the error, it's not a problem. As for the URL you were given, for example http://172.31.32.185:3000, copy-paste it into your clipboard and paste it into your browser! Does it work?

Next: [Accessing the app](./instructions/Step5.md)
