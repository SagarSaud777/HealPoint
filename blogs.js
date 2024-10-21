let previewBlogs1 = document.querySelectorAll(".box");

previewBlogs1.forEach((box) => {
  box.addEventListener("click", () => {
    window.location.href = "readBlogs.html";
  });
});
