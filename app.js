var form = document.getElementById('the-form-in-html');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('input-in-form')
    alert(input.value);

    // conditional
    if (input.value === '') {
        return false;
    } else {
        alert(input.value);
    }
});