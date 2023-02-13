const Renderer = function () {

    let renderPosts = function (posts) {
        $("#posts").empty()

        for (let post of posts) {

            const tweetPost = $(`<div class="post" data-id="${post.id}"><h2 class="post-text">${post.text}</h2></div>`)
            $("#posts").append(tweetPost)

            const deletePost = $(`<div><button class="delete"><i class='fas fa-trash' style='font-size:16px'></i></button></div>`)
            const addCommentToPost = $(`<div> <input class="input" type="text" placeholder="Got Somthing to say?"><button><i class='fab fa-twitter' style='font-size:13px;color:blue'></i></button></div>`)
            const tweetComments = $(`<div class="comments"></div>`)

            $(tweetPost).append(tweetComments)
            $(tweetPost).append(addCommentToPost)
            $(tweetPost).append(deletePost)

            for (let comment of post.comments) {
                let tweetComment = $(`<div class="tweetComment" data-id="${comment.id}">
                <i class=" fa fa-times delete-comment"></i>${comment.text}</div>`)
                $(tweetComments).append(tweetComment)
            }
        }
    }

    return {
        renderPosts
    }
}