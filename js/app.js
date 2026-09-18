if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}
function goZip(form) {
  const zip = (form.querySelector("[name=zip]") || {}).value || "";
  const q = zip ? "?zip=" + encodeURIComponent(zip) : "";
  location.href = "/schedule.html" + q;
  return false;
}
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const zip = params.get("zip");
  const zipField = document.querySelector("#zip");
  if (zip && zipField) zipField.value = zip;
  const book = document.querySelector("#book-form");
  if (book) {
    book.addEventListener("submit", (e) => {
      e.preventDefault();
      const done = document.querySelector("#done");
      book.style.display = "none";
      if (done) {
        done.classList.add("show");
        const name = book.querySelector("[name=name]").value;
        const when = book.querySelector("[name=when]").value;
        done.querySelector("[data-sum]").textContent =
          "Appointment held for " + name + " · " + when + ". This is a design-study mock checkout — no payment was taken.";
      }
    });
  }
});
