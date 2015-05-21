$(document).ready(function () {
  /*
   * AJAXify form submission
   */
  $('form').submit(function (event) {

    // Prevent the form submitting
    event.preventDefault();

    var $submitButton = $(':submit', this);
    // Disable, remove all form status classes and change the text
    $submitButton.prop('disabled', true).prop('class', 'button').html('Submitting...');

    // Convert array to object
    var formObj = {};
    var formData = $(this).serializeArray();
    $.each(formData, function() {
      formObj[this.name] = this.value;
    });

    // Send the AJAX request
    $.ajax({
      url: $(this).prop('action'),
      method: "POST",
      data: formObj,
      dataType: "json"
    })
      .done(function () {
        $submitButton.addClass('success').html('Submitted!');
      })
      .fail(function () {
        $submitButton.addClass('alert').html('Failed :(');

        // Re-enable the button so the user can try again
        $submitButton.prop('disabled', false);
      });
  });

  /*
   * Re-enable form submission after changing a value
   */
  var enableSubmit = function (event) {
    var $form = $(this).parents('form');
    var $submitButton = $(':submit', $form);

    // Reset the submit button now that the form has changed
    $submitButton.prop('disabled', false).prop('class', 'button').html('Submit');
  };

  $('form input, form textarea').keyup(enableSubmit);
  $('form select').change(enableSubmit);

  /*
   * Validate form input
   */

});
