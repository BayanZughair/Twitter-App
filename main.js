
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

let post = function () {
    const postText = $("#input").val()
    tweeter.addPost(postText)
    renderer.renderPosts(tweeter.getPosts())
}
$("body").on("click", ".delete", function () {
    let postId = $(this).closest(".post").data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", "button", function () {
    let postId = $(this).closest(".post").data().id
    let text = $(this).siblings("input").val()
    tweeter.addComment(text, postId)
    renderer.renderPosts(tweeter.getPosts())
})

$("body").on("click", ".delete-comment", function () {
    let postId = $(this).closest(".post").data().id
    let commentId = $(this).closest(".tweetComment").data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})
