function allowAccess() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      const video = document.getElementById("videoElement");
      video.srcObject = stream;
      document.getElementById("videoContainer").style.display = "block";

      setTimeout(() => {
        document.getElementById("warning").style.display = "block";
      }, 5000);
    })
    .catch(error => {
      alert("Camera access denied or an error occurred: " + error.message);
    });
}

function denyAccess() {
  alert("Access denied. You must be 18+.");
}