## Step 9: Running the back end serverlessly with Lambda

Here's how we can replace the back end with a serverless version:

1. Go to your back end instance and stop it (ctrl+C)
2. Go to the `backend-lambda` folder instead of the `backend-database` one
3. Copy the db config file: `cp ../backend-database/dbconfig.json dbconfig.json` - this is because the serverless version needs the same DB credentials as the `backend-database` that runs on a server.
4. Run `yarn deploy` to deploy the serverless app

This will take a little while. Once it's done, you should get an output something like this:

![Serverless output](./images/serverless-output.png)

Copy one of the endpoints to your clipboard, without the /units path at the end. For example:

```
https://jvhws71uuh.execute-api.ap-southeast-2.amazonaws.com/development
```

Make sure it starts with "https://" and ends with "/development".

Next we need to tell the front end to point to this new back end.

1. Go to the front end shell
2. Navigate to the `frontend` folder
3. Using nano or vim, open `src/config.json` and update the `host` to be the serverless endpoint you copied before
4. Run `cat src/config.json` to confirm the update worked - you should see the new host printed
5. Run `sudo yarn build` again to re-build the front end with the new config
6. Run `aws s3 cp --recursive build s3://example-bucket` again, replacing `example-bucket` with the name of your bucket, to update the statically hosted site with the new config

If all goes to plan, the static site should now point to the lambda endpoint instead of the server back end - you can verify this by checking requests in the Network tab in the Chrome inspector. Don't shut down the server just yet, as it will help us shut down other things for packing up, but in theory we don't need it anymore as everything is running serverlessly (well, not the database, but at least we don't have to manage the server ourselves).

Next: [Cleaning everything up](./Step10.md)
