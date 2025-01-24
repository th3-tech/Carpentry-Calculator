$(document).ready(function() {
    $('#angleForm').on('submit', function(event) {
        event.preventDefault();

        const length = parseFloat($('#length').val());
        const width = parseFloat($('#width').val());

        if (isNaN(length) || isNaN(width)) {
            alert('Please enter valid numbers for length and width.');
            return;
        }

        // Example calculation: Calculate the diagonal of the plank
        const diagonal = Math.sqrt(length * length + width * width);

        // Display the result
        alert('The diagonal of the plank is ' + diagonal);
    });
});