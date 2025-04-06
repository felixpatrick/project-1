const signUp = document.querySelector(".sign-up__form");

// Create the loader element
const loader = document.createElement("div");
loader.className = "loader";
signUp.appendChild(loader);

// Delay the rendering of the form markup
setTimeout(() => {
  // Remove the loader
  loader.remove();

  // Insert the form markup
  const formStringfy = localStorage.getItem("form");
  const formObj = JSON.parse(formStringfy);

  const markup = `
    <form action="" class="form-group-container">
        <!-- First name and last name -->
        <div class="form-group">
            <div><label for="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname" value="${
                  formObj.firstname || ""
                }" disabled />
            </div>
            <div><label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname" value="${
                  formObj.lastname || ""
                }" disabled />
            </div>
        </div>

        <!-- Gender & Date of birth -->
        <div class="form-group">
            <div><label for="gender">Gender:</label>
                <select id="gender" name="gender" disabled>
                    <option value="male" ${
                      formObj.gender === "male" ? "selected" : ""
                    }>Male</option>
                    <option value="female" ${
                      formObj.gender === "female" ? "selected" : ""
                    }>Female</option>
                </select>
            </div>
            <div><label for="date-of-birth">Date of Birth:</label>
                <input type="date" id="date-of-birth" name="date-of-birth" value="${
                  formObj.dateOfbirth || ""
                }" disabled />
            </div>
        </div>

        <!-- Measurement -->
        <div class="form-group">
            <div><label for="weight">Weight (kg):</label>
                <input type="text" id="weight" name="weight" value="${
                  formObj.weight || ""
                }" disabled />
            </div>
            <div><label for="height">Height (cm):</label>
                <input type="text" id="height" name="height" value="${
                  formObj.height || ""
                }" disabled />
            </div>
        </div>

        <!-- Activity Level -->
        <div class="form-group">
            <div><label for="activity">Activity Level:</label>
                <select id="activity" name="activity" class="full-input" disabled>
                    <option value="Level 1" ${
                      formObj.activity === "Level 1" ? "selected" : ""
                    }>Level 1</option>
                    <option value="Level 2" ${
                      formObj.activity === "Level 2" ? "selected" : ""
                    }>Level 2</option>
                </select>
            </div>
        </div>

        <!-- Password -->
        <div class="form-group">
            <div><label for="password">Password:</label>
                <input type="text" id="password" name="password" required class="full-input" value="${
                  formObj.password || ""
                }" disabled />
            </div>
        </div>

        <!-- Submit Button -->
        <div class="submit-text">
            <div><button type="submit" class="submit-sign-up registered" disabled >You already registed</button>
                <p class="terms-condition">
                    Kindly check your email for further information abour your application.
                </p>
            </div>
        </div>
    </form>
  `;
  signUp.insertAdjacentHTML("afterbegin", markup);
}, 1500);
