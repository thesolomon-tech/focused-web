export default function remove_yt_items() {
    if (
        window.location.href == "https://www.youtube.com/" ||
        window.location.href == "https://www.youtube.com"
    ) {
        remove_homepage_items();
    } else if (
        window.location.href.startsWith("https://www.youtube.com/watch?")
    ) {
        remove_video_items();
    }
    return;
}

const remove_video_items = () => {
    console.assert("running");
    const remove_suggestions = document.getElementById("secondary");
    if (remove_suggestions) {
        remove_suggestions.remove();
        console.log("Element removed successfully");
    } else {
        console.log("Element with ID 'secondary' not found");
    }
    const remove_comments = document.getElementById(
        "sections",
    );
    if (remove_comments) {
        remove_comments.remove();
        console.log("Element removed successfully");
    } else {
        console.log("comments element not found");
    }
};

const remove_homepage_items = () => {
    console.log("running on homepage");
    const remove_suggestions = document.getElementsByTagName(
        "ytd-rich-grid-renderer",
    );
    if (remove_suggestions[0]) {
        remove_suggestions[0].remove();
        console.log("Element removed successfully");
    } else {
        console.log("Element with ID 'secondary' not found");
    }
    const remove_comments = document.getElementById(
        "sections",
    );
    if (remove_comments) {
        remove_comments.remove();
        console.log("Element removed successfully");
    } else {
        console.log("comments element not found");
    }
};
