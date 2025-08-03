window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcomeModal");
  const modalContent = modal.querySelector(".modal-content");
  modal.style.display = "flex"; // show modal on load

  document.getElementById("userForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email")
    };
    try {
      const response = await fetch("https://your-server.com/api/submit", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      });
      if (response.ok) {
        // Replace modal content with feedback message:
        modalContent.innerHTML = `
          <h2>Thank you for submitting!</h2>
          <p>Your data is secured. You can now continue using the site.</p>
          <button type="button" onclick="document.getElementById('welcomeModal').style.display='none'">Close</button>
        `;
      } else {
        alert("Submission failed. Please try again.");
      }
       } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  });
});
modalContent.innerHTML = `
  <h2>Thank you for submitting!</h2>
  <p>Your data is secured. The modal will close shortly...</p>
`;
setTimeout(() => {
  modal.style.display = "none";
}, 3000); // closes modal after 3 seconds

