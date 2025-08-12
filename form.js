$(document).ready(function() {
    function updateSubmitState() {
        var licSelect = $("select#batch_connect_session_context_ansyslic");
        var selected = licSelect.find('option:selected')
        var submitBtn = $(':input[type="submit"]');
        console.log(selected);
        if (selected && selected !== '') {
            submitBtn.prop('disabled', true);
            submitBtn.prop('title', "NO LICENCE");
        } else {
            submitBtn.prop('disabled', false);
            submitBtn.prop('title', "");
        }
    }
    $("select#batch_connect_session_context_ansyslic").on('change', updateSubmitState);
    updateSubmitState();
    // This is overkill as button state should never be set empty if options exist.
});