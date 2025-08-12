$(document).ready(function() {

    // For some reason default values dont show.
    $("#batch_connect_session_context_prescision_dp").prop('checked', true);
    $("#batch_connect_session_context_is3d").prop('checked', true);

    function updateSubmitState() {
        var licSelect = $("select#batch_connect_session_context_ansyslic");
        var selected = licSelect.find('option');
        var submitBtn = $(':input[type="submit"]');
        if (!selected) {
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