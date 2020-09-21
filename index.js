  function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight(){
    let RightNumbers = dodger.style.left.replace("px", "");
    let Right = parseInt(RightNumbers, 10);

    if (Right < 0) {
      dodger.style.left = `${Right - 1}px`;
    }
  }
