function onSubmit(event) {
    event.preventDefault()
    $color1 = $('#color1').val()
    $color2 = $('#color2').val()
    $color3 = $('#color3').val()

    $.ajax({
        url: "link to cloudfunction",
        data: {
            color1: $color1, color2: $color2, color3: $color3
        },
        type: "POST",
        dataType: "json",
        success: function() { 
            document.getElementById("content").innerHTML = `<div>Thanks for participating</div>`

        }, 
        error: function() {
            document.getElementById("content").innerHTML = `<div>Something went wrong. Please try again</div>`
        }
    })
}