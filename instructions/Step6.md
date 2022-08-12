## Step 6: Giving EC2 some extra permissions

Before we can get much further, we need to get command line access to AWS.

Normally, this is done by installing the command line tools to your local machine, setting up a user with appropriate permissions, and so on. But we're short on time, so we'll do it the quick and easy way: give the EC2 server we're using full command line access to our AWS account.

A bit of a warning here - this is not a good practice in general, and even for a small project it would be much better to give only the specific permissions that are needed. However, for the sake of this demo where will we shut down the instance within an hour, I think this is fine. Just be aware it's not a good security practice for production apps.

Here's how we do it:

1. Go to the EC2 console
2. Go to the "instances" page and tick our instance
3. Click actions -> security -> modify IAM role
4. Click "create a new IAM role"
5. Click "create role"
6. Select "AWS service" (should be default) and under "common use cases", select "EC2"
7. Click "next"
8. Search "AdministratorAccess" and tick the policy called "AdministratorAccess"
9. Click next
10. Give the role a name - e.g. "ec2admin"
11. Scroll to the bottom and click "create role"
12. Close the tab and go back to the previous tab where you clicked "create new IAM role" from
13. Click the refresh button next to the "choose IAM role" dropdown
14. Select the "ec2admin" role you created
15. Click "update IAM role"

Next: [Creating the S3 bucket and hosting the front end in it](./Step7.md)
