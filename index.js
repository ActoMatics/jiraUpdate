const JiraClient = require('jira-connector'),
    request = require('request-promise'),
    xlsx = require('xlsx'),
    FileCookieStore = require('tough-cookie-filestore'),
    request = require('request'),
    path = require('path');

require('dotenv').config();


// let jira = new JiraClient({
    // host: process.env.JIRA_HOST,
//     basic_auth: {
//         username: process.env.JIRA_USER,
//         password: process.env.JIRA_PASSWORD
//     }
// });

var jar = request.jar(new FileCookieStore(path.join(__dirname, 'cookies.json')));

JiraClient.oauth_util.getAuthorizeURL({
    host: process.env.JIRA_HOST,
    cookie_jar: jar,
    oauth: {
        consumer_key: 'your-consumer-key',
        private_key: '-----BEGIN RSA PRIVATE KEY-----\n' +
        'SomePrivateKeyHere\n' +
        '-----END RSA PRIVATE KEY-----'
    }
}, function (error, oauth) {
    if (err) console.log(err);
    console.log(oauth);
});


jira.issue.getIssue({
    issueKey: 'AE-433'
}, function (err, issue) {
    if (err) console.log(err);
    console.log(issue);
});
