const submitBtn = document.getElementById('submitBtn');
const userName = document.getElementById('user');
const comment = document.getElementById('comment');
const commentDisplay = document.getElementById('commentDisplay');

let commentArray = [];
displayComment();
function submitComment(){
    let newComment;
    if (userName.value.trim() !== "" && comment.value.trim() !== "") {
        newComment = {
            userName: userName.value.trim(),
            userComment: comment.value.trim(),
            time: new Date()
        }
        commentArray.push(newComment);
        resetForm();
        displayComment();
    } else alert("input cannot be empty!")
}
function resetForm(){
    userName.value = ''
    comment.value = ''
}
function displayComment(){
    commentDisplay.innerHTML = '';
    for (let i = 0; i < commentArray.length; i++) {
        commentDisplay.insertAdjacentHTML(
            'beforeend',
            `
            <div class="commentBox">
                <p class="userNameDisp">User <span class="fw-bold">${commentArray[i].userName}</span> commented:</p>
                <p class="userCommentDisp"><span class="fw-bold">${commentArray[i].userComment}</span></p>
                <p class="commentDate">On ${commentArray[i].time}</p>
            </div>
            <br>
            `
        )
    }
}
submitBtn.onclick = () =>{
    submitComment();
}