const searchField = document.querySelector("#search-field")
const searchButton = document.querySelector("#search-button")
const profileButton = document.querySelector("#profile-button")

const BASE_URL = "https://api.github.com/users"

const fetchProfileData = async (username) => {
    const data = await fetch(`${BASE_URL}/${username}`).then(response => response.json());

    const userProfilePicture = document.querySelector("#user-profile-picture");
    const userProfileUsername = document.querySelector("#user-username");
    const userProfileName = document.querySelector("#user-profile-name");
    const userProfileLocation = document.querySelector("#user-profile-location");
    const userProfileFollowing = document.querySelector("#user-profile-following");
    const userProfileFollowers = document.querySelector("#user-profile-followers");
    const userProfileBio = document.querySelector("#user-profile-bio");

    const dataRenderer = document.querySelector("#data");

    dataRenderer.classList.remove("show");

    setTimeout(() => {
        dataRenderer.classList.add("show");

        userProfilePicture.setAttribute("src", data.avatar_url);
        userProfileUsername.textContent = data.login;
        userProfileName.textContent = data.name;
        userProfileLocation.textContent = data.location;
        userProfileFollowing.textContent = data.following;
        userProfileFollowers.textContent = data.followers;
        userProfileBio.textContent = data.bio != null ? data.bio : "Não informado";

    }, 300);

};


searchButton.addEventListener("click", (e) => {
    e.preventDefault()

    const username = searchField.value
    
    if (username.length > 0) {
        fetchProfileData(username)
    }
})