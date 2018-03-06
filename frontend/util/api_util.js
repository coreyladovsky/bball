export const fetchData = url => (
  $.ajax({
    url: "https://crossorigin.me/" + url,
    type: "GET",
  })
);
