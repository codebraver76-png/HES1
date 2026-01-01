function showImage(src){
  const modal = document.getElementById("imgModal");
  const img = document.getElementById("modalImage");
  img.src = src;
  modal.style.display = "flex";

  modal.onclick = () => modal.style.display = "none";
}

    // small helpers
    document.getElementById('year').textContent = new Date().getFullYear();

    function scrollToSection(id){
      const el = document.getElementById(id);
      if(!el) return;
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }

    const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault(); // prevent page reload

  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if(response.ok){
      document.getElementById("successMsg").style.display = "block";
      form.reset();
    } else {
      alert("Oops! There was a problem sending your message.");
    }
  })
  .catch(error => {
    alert("Oops! There was a problem sending your message.");
    console.error(error);
  });
});
 