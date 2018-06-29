// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const heightInput = $('#inputHeight');
const widthInput = $('#inputWeight');
const colorInput = $('#colorPicker');

//makeGrid function that removes previous table and then new grid is built with help of for-loop

makeGrid = () => {

  let heightValue = heightInput.val();
  let widthValue = widthInput.val();

  let pixelCanvas = $('#pixelCanvas');
  pixelCanvas.children().remove(); // clears previously built table if any



  for (let h = 0; h < heightValue; h++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (let w = 0; w < widthValue; w++) {
    $('tr').append("<td></td>");
  }
}



$('table').on('click', 'td', function() {
  $(this).css('backgroundColor', colorInput.val() );
});



form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault(); // stops page from refreshing upon submit
    makeGrid();
});
