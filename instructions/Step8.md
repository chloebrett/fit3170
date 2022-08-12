## Step 8: Replacing the JSON file store with an actual database

Here's what we need to do to add a database:

1. Search “rds” in the main aws search bar to go to the RDS console (RDS stands for Relational Database Service)
2. Select “instances”
3. Select “create database”
4. Select "standard create"
5. Select "postgresql"
6. DB instance size should be “free tier”
7. Call the DB whatever you like
8. Leave master username as "postgres"
9. Make the password "postgres" as well for simplicity (this is how the back end is configured to access it) - obviously in production a more complex password would be used.
10. Leave the storage as default
11. Use the default VPC and subnet group
12. Important: set "public access" to "YES"
13. Leave the VPC security group and availability zone as default
14. Leave the authentication as default
15. Click “create database”!
16. This can take a little while (2-3 mins) - unfortunately we do need to know the endpoint before we can configure the back end to connect to the database. So while everyone's databases boot up, I'll go around the room (and the Zoom) to make sure everyone's caught up.

Here's how to connect the back end up to the DB, once your DB is running:

1. From the RDS management console, click your DB
2. In the "connectivity & security" tab (the default one), there is an "endpoint" listed. Copy it to your clipboard
3. Go to your back end shell / instance connect session
4. Stop the current back end from running if it is running (ctrl+C)
5. Navigate to `backend-database` instead of `backend-json`
6. Update the hostname in `dbconfig.json` using nano or vim to be the endpoint you just copied. No need for http:// or a port - in fact this is a postgres URL so it's not even using the HTTP protocol anyway.

It should look something like this:

![DB config file](./images/config-db.png)

Now get the database-capable back end running:

1. Stay in the `backend-database` folder
2. Run `knex migrate:up` to automatically create the required tables in the database
3. Start the back end with `yarn start`

Now you can visit the same front end as before, and it will access the new back end, which is talking to a database instead of just saving data to a JSON file. Nice!

There is one more missing link before we can retire the server entirely - the back end is still running on it! In fact it is possible for this app to run everything without explicitly handling servers ourselves, and that's what we'll do in the next step.
