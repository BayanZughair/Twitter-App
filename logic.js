const Tweeter = function () {

    let postIdCounter = 2
    let commentIdCounter = 6
    let getPosts = () => posts

    const addPost = function (text) {
        postIdCounter++
        let pId = "p" + postIdCounter
        posts.unshift({ "text": text , id: pId , comments: [] })
    }

    const removePost = function (postId) {
        for (let index in posts) {
            if (posts[index].id === postId) {
                posts.splice(index, 1)
            }
        }
    }
    const addComment = function (text, postId) {
        commentIdCounter++
        let cId =  "c" + commentIdCounter
        for (let coment in posts) {
            if (posts[coment].id == postId) {
                posts[coment].comments.push({ id: cId , "text": text })
            }
        }
    }
    const removeComment = function (postId, commentId) {
        for (let i in posts) {
            if (posts[i].id == postId) {
                for (let j in posts[i].comments) {
                    if (posts[i].comments[j].id == commentId) {
                        posts[i].comments.splice(j, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        addComment: addComment,
        removePost: removePost,
        removeComment: removeComment
    }
}
