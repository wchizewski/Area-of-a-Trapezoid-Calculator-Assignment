// Area of a Trapezoid Calculator by Will

// Event Listener
document.getElementById("calcBtn").addEventListener("click", getArea);

// Event function
function getArea() {
    // Input
    let aSide = +document.getElementById("aSideIn").value;
    let bSide = +document.getElementById("bSideIn").value;
    let trapHeight = +document.getElementById("trapHeightIn").value;

    // Process
    let area = 0.5 * (aSide + bSide) * trapHeight;

    // Output
    document.getElementById("trapArea").innerHTML = "The area of the trapezoid is: " + area
    document.getElementById("output").style.display = "block";

}

// Event listener clear button
document.getElementById("clearBtn").addEventListener("click", clear)

// Event function clear button
function clear() {
    location.reload()
}
