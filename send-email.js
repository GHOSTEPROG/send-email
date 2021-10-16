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

// Send the draft
draft.send().then(message => {
    console.log(`${message.id} was sent`);
});  
 