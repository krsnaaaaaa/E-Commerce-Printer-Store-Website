// This script is for contact us form. It throws a alert msg if any textarea field is empty.
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("Kindly!! Please fill in all required fields properly.");
      return false;
    }
  
    return true;
  }

  // FOR DISPLAYING POP-UP MESSAGE WHEN 'Add To Cart' BUTTON IS CLICKED
function addToCart() {
  alert("The product has been added to your cart.");
  alert("THANK YOU");
}
  