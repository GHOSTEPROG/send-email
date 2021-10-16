# send-email
Node.js has grown to be the most popular framework in the world, primarily due to it’s efficiency for data-intensive real-time applications and the ability to use JavaScript across the entire web stack. The Nylas Email API connects to all major providers, including Gmail, Outlook, Office365, Exchange, Yahoo, and more, and our Node SDK makes it simple to send emails directly from user email accounts.

This guide explains how to use the Nylas Node SDK and Email API to send an email with JavaScript. It covers the following steps:

    1 Set up your Nylas developer account and get your API keys
    2 Install the Nylas Node.js SDK
    3 Create and send an email
    4 Explore the Nylas Email API
    
# Prerequisites 
Before you can start using the Nylas Node.js SDK, make sure you have done the following:

    Sign up for your developer account.
    Get your developer keys. You need to have your:
    CLIENT_ID - The CLIENT ID found on the dashboard page for your Nylas App.
    CLIENT_SECRET - The CLIENT SECRET found on the dashboard page for your Nylas App.
    ACCESS_TOKEN - The access token provided when you authenticate an account to your Nylas App.
    Get Node.js installed on your machine.
    Make sure you have npm or yarn.    

# Install the Nylas Node.js SDK 
Run npm install nylas or yarn add nylas.

Congratulations!

You’re now ready to write code with the Nylas Node.js SDK.

      const Nylas = require('nylas');

        Nylas.config({
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
        });
  
      const nylas = Nylas.with(ACCESS_TOKEN);

      const draft = nylas.drafts.build({
        subject: 'With Love, from Nylas',
          to: [{ name: 'My Nylas Friend', email: 'swag@nylas.com' }],
        body: 'This email was sent using the Nylas email API. Visit https://nylas.com for details.'
     });
         draft.send().then(message => {
        console.log(`${message.id} was sent`);
    });
    
 ![image](https://user-images.githubusercontent.com/90372523/137590062-6aafabc1-fb24-4543-9981-d5b77358c3c2.png)
 ![SEND-EMAIL](https://user-images.githubusercontent.com/90372523/137589997-4d01a692-07f7-47d2-b27b-d893b4514842.PNG)
