// ====================================
// Created for codepad.co
// https://codepad.co/snippet/TDgT3u4K
// ====================================

$(document).ready(function(){   
  // Get the date
  function e() {
      var e = new Date;
      e.setDate(e.getDate() + 20);

      var dd = e.getDate();
      var mm = e.getMonth() + 1;
      var y = e.getFullYear();

      var futureFormattedDate = mm + "/" + dd + "/" + y + ' 12:00:00';

      return futureFormattedDate;
  }

  $('.countdown').downCount({
      date: e(),
      offset: -4
  });
});