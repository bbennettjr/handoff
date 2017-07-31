import { Accounts } from "meteor/accounts-base"
Accounts.emailTemplates.siteName = "Commit Swimming"
Accounts.emailTemplates.from = "The Commit Team <founders@commitanalytics.com>"
Accounts.emailTemplates.resetPassword.subject = function(user) {
  return "Reset your Commit Swimming Password"
}
Accounts.emailTemplates.resetPassword.text = function(user, url) {
  let signature =
    "The Commit Team\n" +
    "founders@commitanalytics.com\n" +
    "215-353-0948\n\n" +
    "P.S. You can reach us 24/7. We are here to help :-)"

  return (
    "Hi " +
    user.nameOrEmail() +
    ",\n\n" +
    "Click the following link to set your new password:\n" +
    url +
    "\n\n" +
    "Thanks for being an awesome Commit user!!!\n\n" +
    "Cheers,\n" +
    signature
  )
}
