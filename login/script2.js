document.querySelector('#bt1').addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    const passInput = document.querySelector("#pass");
    const img = document.querySelector("#img5");
    console.log(passInput);
    console.log(img);

    if (passInput.type === "password") {
        passInput.type = "text";
        img.src = "pass_hide.png";
    } else {
        passInput.type = "password";
        img.src = "pass_show.png";
    }
});


// Function to replace input with select
function replaceInputWithSelect() {
    // Get the input element
    const inputElement = document.querySelector('.s1');

    // Create a new select element
    const selectElement = document.createElement('select');
    selectElement.name = "Gender";

    selectElement.style.width = "80%";
    selectElement.style.height = "100%";
    selectElement.style.borderRadius = "10px";
    /* border: 2px solid black; */
    selectElement.style.marginleft = "3px";
    selectElement.style.border = "none";
    selectElement.style.backgroundColor = "#f4f4f4";
    selectElement.style.color = "#495057";
    selectElement.style.paddingLeft = "10px";
    selectElement.style.outline = "none";

    // Add options to the select element
    const options = [
        { value: "", text: "Select Gender", disabled: true, selected: true },
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        { value: "Other", text: "Other" }
    ];

    options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        if (optionData.disabled) option.disabled = true;
        if (optionData.selected) option.selected = true;
        selectElement.appendChild(option);
    });

    // Add a custom attribute to help track that this input has been replaced
    selectElement.setAttribute("data-replaced", "true");

    // Replace input element with the select element
    inputElement.parentNode.replaceChild(selectElement, inputElement);

    // Call the function to replace on page load
    // window.onload = replaceInputWithSelect;
}

function replaceStateInputWithSelect() {
    const InputElement = document.querySelector(".s2");

    const SelectElement = document.createElement('select');
    SelectElement.name = "State";

    SelectElement.style.width = "80%";
    SelectElement.style.height = "100%";
    SelectElement.style.borderRadius = "10px";
    SelectElement.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
    SelectElement.style.paddingLeft = "10px";
    SelectElement.style.marginLeft = "3px";
    SelectElement.style.border = "none";
    SelectElement.style.color = " #495057";
    SelectElement.style.backgroundColor = " #f4f4f4";

    const options = [
        { value: "", text: "Select State", disabled: true, selected: true },
        { value: "New York", text: "New York" },
        { value: "California", text: "California" },
        { value: "Texas", text: "Texas" }
    ];

    options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        if (optionData.disabled) option.disabled = true;
        if (optionData.selected) option.selected = true;
        SelectElement.appendChild(option);
    });

    InputElement.parentNode.replaceChild(SelectElement, InputElement);
}

function replaceCityInputWithSelect() {
    const InputElement = document.querySelector(".s3");

    const SelectElement = document.createElement('select');  // Changed the variable name here
    SelectElement.name = "City";

    SelectElement.style.width = "80%";
    SelectElement.style.height = "100%";
    SelectElement.style.borderRadius = "10px";
    SelectElement.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
    SelectElement.style.paddingLeft = "10px";
    SelectElement.style.marginLeft = "3px";
    SelectElement.style.border = "none";
    SelectElement.style.color = " #495057";
    SelectElement.style.backgroundColor = " #f4f4f4";

    const options_list = [
        { value: "", text: "Select City", disabled: true, selected: true },
        { value: "New York", text: "New York" },
        { value: "Los Angeles", text: "Los Angeles" },
        { value: "San Francisco", text: "San Francisco" },
        { value: "Austin", text: "Austin" }
    ];

    options_list.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        if (optionData.disabled) option.disabled = true;
        if (optionData.selected) option.selected = true;
        SelectElement.appendChild(option);  // Appending to the correct variable
    });


    InputElement.parentNode.replaceChild(SelectElement, InputElement);
}
