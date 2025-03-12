// Initialize daterangepicker and other functionality when document is ready
$(document).ready(function () {
  // Initialize Select2 for searchable dropdown
  $("#locationDropdown").select2({
    placeholder: "Select a location",
    allowClear: true,
  });
  $(".dropdown-menu").click(function (event) {
    event.stopPropagation();
  });

  // Guest & Room Selection Logic
  let rooms = 1;
  let guests = 1;

  function updateGuestText() {
    $("#guestDropdown").text(`${rooms} Room(s), ${guests} Guest(s)`);
  }

  $("#roomPlus").click(function () {
    rooms++;
    $("#roomCount").text(rooms);
  });

  $("#roomMinus").click(function () {
    if (rooms > 1) {
      rooms--;
      $("#roomCount").text(rooms);
    }
  });

  $("#guestPlus").click(function () {
    guests++;
    $("#guestCount").text(guests);
  });

  $("#guestMinus").click(function () {
    if (guests > 1) {
      guests--;
      $("#guestCount").text(guests);
    }
  });

  $("#applySelection").click(function () {
    updateGuestText();
    $(".dropdown-menu").removeClass("show"); // Close dropdown after applying selection
  });
  // Update button text based on selection
  $("#roomSelect, #guestSelect").change(function () {
    let rooms = $("#roomSelect").val();
    let guests = $("#guestSelect").val();
    $("#guestDropdown").text(`${rooms} Room(s), ${guests} Guest(s)`);
  });

  // Initialize daterangepicker
  $("#dateRangePicker").daterangepicker({
    opens: "left",
    autoApply: true,
    minDate: moment(),
    startDate: moment(),
    endDate: moment().add(1, "days"),
    locale: {
      format: "DD MMM",
    },
  });
});
