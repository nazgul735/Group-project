$(function() {
    $('#contact-form').validator()
  
    $('#contact-form').on('submit', function(e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        const url = 'http://localhost/api/contact/'
  
        // POST values in the background the the script URL
        $.ajax({
          type: 'POST',
          url: url,
          data: $(this).serialize(),
          success: function(data) {
            // data = JSON object that contact.php returns
  
            // we recieve the type of the message: success x danger and apply it to the
            const messageAlert = 'alert-' + data.type
            const messageText = data.message
  
            // let's compose Bootstrap alert box HTML
            const alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>'
  
            // If we have messageAlert and messageText
            if (messageAlert && messageText) {
              // inject the alert to .messages div in our form
              $('#contact-form').find('.messages').html(alertBox)
              // empty the form
              $('#contact-form')[0].reset()
            }
          }
        })
  
        return false
      }
    })
  })