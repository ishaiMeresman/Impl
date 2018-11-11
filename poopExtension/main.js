function convertToCommas() {
    var textBox = $("#columnsInput"),
        input = textBox.val(),
        output = $("#output");
    output.val(input.split("\n"));
}

function convertToCommasWithQoutes() {
    var textBox = $("#columnsInput"),
        input = textBox.val(),
        output = $("#output");
    output.val('\"'+input.split("\n").join('\",\"')+'\"');
}


function convertToCommasWithSingleQoutes() {
    var textBox = $("#columnsInput"),
        input = textBox.val(),
        output = $("#output");
    output.val('\''+input.split("\n").join('\',\'')+'\'');
}

$('#toCommaConvertButton').click(function () {
    convertToCommas();
});

$('#toCommaWithQuotesConvertButton').click(function () {
    convertToCommasWithQoutes();
});

$('#toCommaWithSingleQuotesConvertButton').click(function () {
    convertToCommasWithSingleQoutes();
});
function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("output");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("Copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}