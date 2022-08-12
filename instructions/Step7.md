## Step 7: Creating the S3 bucket and hosting the front end in it

To create the bucket and enable static web hosting:

1. Go to the S3 console (via searching "S3" in the top search bar)
2. Click "Create bucket"
3. Name the bucket whatever unique name you like - bucket names are globally unique. Example: fit3170-chloe
4. Leave the "ACLs disabled" setting as default
5. Untick the "block all public access" checkbox
6. Tick "I acknowledge" 
7. Leave the other settings as default and click "create bucket"
8. Click the bucket you just created
9. Click "properties"
10. Scroll to the bottom where it says "static website hosting"
11. Click "edit" then select "enable"
14. Type "index.html" for the index document
15. Leave the other values as default
16. On the properties panel, the “static website hosting” should now have a “bucket website endpoint”. Click this to open this in a new tab. We haven't uploaded the web app or properly set permissions yet so you'll get a 403 error - but keep this tab open as we'll use it later.

Next, change the bucket policy to allow access to all objects:

1. Go to the permissions tab in the bucket -> bucket policy -> edit
2. Paste the following, replacing "example-bucket" with your bucket name:

```
{ "Version":"2012-10-17", "Statement":[{ "Sid":"PublicReadGetObject", "Effect":"Allow", "Principal": "*", "Action":["s3:GetObject"], "Resource":["arn:aws:s3:::example-bucket/*"] }] }
```

Make sure to leave the "/*" at the end of the bucket name. Save the policy.

Then, upload the front end to the bucket for hosting:

1. Go back to your front end shell session
2. Stop the front end from running if it's running (ctrl+C)
3. Run `aws s3 cp --recursive build s3://example-bucket`, replacing `example-bucket` with your bucket name. This will upload the `build` folder to S3.
4. Go to the page where you opened the static website before and refresh it - it should work now!

Cool - so now we have the back end running on EC2 still, and saving things to a local JSON file, while the front end is statically hosted on S3. Nice! Next up is to improve reliability by storing data on a remote database instead of just in a JSON file - so that if our server dies, we can just replace it with another one that connects to the same database, and no data will be lost!

Next: [Replacing the JSON file store with an actual database](./instructions/Step8.md)
