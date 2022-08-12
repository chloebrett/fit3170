## Step 10: Cleaning everything up

Now it's time to clean things up, so we don't get unexpected charges in a year's time when our AWS free tier expires.

Shutting down the serverless back end:

1. Go to the back end shell / instance connect session
2. Go to the `backend-lambda` folder
3. Run `serverless remove` to destroy the serverless application resources

Shutting down the database:

1. Go to the RDS console
2. Select “DB instances”
3. Tick the DB you made
4. Click actions -> delete
5. Uncheck “create final snapshot” and “retain automated backups”
6. Check “I acknowledge”
7. Type “delete me” into the field and click delete

Emptying and deleting the S3 bucket:

1. Go to the S3 console
2. Tick the bucket you made
3. Click “empty”
4. type “permanently delete” and click “empty”
5. Click “exit”
6. Tick again if not already ticked
7. Click “delete”
8. Type the name of your bucket to confirm deletion then click “delete”

Shutting down the S3 instance:

1. Go to the EC2 console -> instances
2. Tick the instance you made
3. Click "instance state" -> "terminate instance"
4. Click “terminate”

All done - technically there are a few resources still hanging around (e.g. the IAM role we made), but they're free forever and don't really affect anything if they're not in use, so we'll leave them.

Optional: delete your entire AWS account

1. Click your account name in the top right corner
2. Click “account”
3. Scroll to the bottom
4. Check all the checkboxes
5. Click “close account”

Thanks for following the workshop!!!
