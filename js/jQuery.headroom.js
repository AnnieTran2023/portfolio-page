(function($) {

  if(!$) {
    return;
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.headroom = function(option) {
    return this.each(function() {
      var $this   = $(this),
        data      = $this.data('headroom'),
        options   = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();

        if(option === 'destroy'){
          $this.removeData('headroom');
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////

  $('[data-headroom]').each(function() {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));

//Download

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("downloadButton").addEventListener("click", function() {
    // Create an anchor element
    var downloadLink = document.createElement("a");
    // Set the file URL
    downloadLink.href = "images/AnnieTran.pdf"; 
    // Set the file name
    downloadLink.download = "AnnieTran_Resume.pdf"; // Replace "filename" with the desired name of your file
    downloadLink.target = "_blank";
    // Simulate click on the anchor element to trigger download
    downloadLink.click();
  });
});