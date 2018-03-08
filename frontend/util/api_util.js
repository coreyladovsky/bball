export const fetchData = url => (
  $.ajax({
    method: "GET",
    url: `/${url}`
  })
);
