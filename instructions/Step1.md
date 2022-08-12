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

Next: [Launching an EC2 Server](./instructions/Step2.md)