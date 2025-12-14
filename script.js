let totalCalories = 0;

function addActivity() {
    let activity = document.getElementById("activity").value;
    let duration = document.getElementById("duration").value;
    let calories = document.getElementById("calories").value;

    if (activity === "" || duration === "" || calories === "") return;

    let li = document.createElement("li");
    li.textContent = `${activity} - ${duration} mins - ${calories} cal`;

    li.onclick = () => {
        totalCalories -= parseInt(calories);
        updateTotal();
        li.remove();
    };

    document.getElementById("activityList").appendChild(li);

    totalCalories += parseInt(calories);
    updateTotal();

    document.getElementById("activity").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("calories").value = "";
}

function updateTotal() {
    document.getElementById("totalCalories").innerText = totalCalories;
}
