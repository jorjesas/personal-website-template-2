jQuery(function(){
$ = jQuery;

//update this with your $form selector
var form_id = "email-form";

var data = {
    "access_token": "h4fqsl70jafpa7rzz8777049" // sent after you sign up
};

function onSuccess() {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    alert("Thank you! Your message was submitted.");
}

function onError(error) {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    alert("Your message was NOT successfully sent!");
}

var sendButton = $("#button-send-email");

function send() {
    var senderName = $("#email-form-name").val();
    var senderEmail = $("#email-form-email").val();
    var subject = $("#email-form-subject").val();
    var message = $("#email-form-message").val();

    if (!senderEmail.trim() ||
    !senderName.trim() ||
    !subject.trim() ||
    !message.trim()) {
        alert("Please fill the upper fields before submitting the message!");
        return;
    }

    sendButton.val('Sending…');
    sendButton.prop('disabled',true);

    data['subject'] = subject + ' - Mail received from ' + senderName + ' (' + senderEmail + ')';
    data['text'] = message;

    $.post('https://postmail.invotes.com/send',
        data,
        onSuccess
    ).fail(onError);

    return false;
}

sendButton.on('click', send);

var $form = $("#" + form_id);
$form.submit(function( event ) {
    event.preventDefault();
});    

});