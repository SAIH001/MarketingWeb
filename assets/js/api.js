$(document).ready(function () {
  var n = $("meta[name=ip2loc]").attr("content"),
    t = $("meta[name=page_url]").attr("content");
  $.ajax({
    method: "get",
    url: "//pro.ip-api.com/json/" + n,
    data: { key: "5XpThOAEkfgOvEJ" },
    success: function (n) {
      n &&
        ("United States" == n.country || n.country,
        console.log(n.country),
        $("input[name=ip2loc_ip]").val(n.query),
        $("input[name=ip2loc_isp]").val(n.isp),
        $("input[name=ip2loc_org]").val(n.org),
        $("input[name=ip2loc_country]").val(n.country),
        $("input[name=ip2loc_region]").val(n.regionName),
        $("input[name=ip2loc_city]").val(n.city),
        $("input[name=pageurl]").val(t));
    },
  });
});