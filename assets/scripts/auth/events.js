// required files //

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// page funtionality //

// events //

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log('I did something in onSignIn!')
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordfailure)
}

const onCreatePost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createPost(data)
    .then(ui.createPostSuccess)
    .catch(ui.createPostfailure)
}

const onGetPost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getPost(data)
    .then(ui.getPostSuccess)
    .catch(ui.getPostfailure)
}

const onUpdatePost = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostfailure)
}

const onDeletePost = function (event) {
  console.log(event.target.dataset.id)
  api.deletePost(event.target.dataset.id)
    .then(ui.deletePostSuccess)
    .catch(ui.deletePostfailure)
}

const onCreateComment = function () {
  const data = getFormFields(this)
  api.createComment(data)
    .then(ui.createCommentSuccess)
    .catch(ui.createCommentfailure)
}

const onGetComment = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getComment(data)
    .then(ui.getCommentSuccess)
    .catch(ui.getCommentfailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut,
  onCreatePost,
  onGetPost,
  onUpdatePost,
  onDeletePost,
  onCreateComment,
  onGetComment
}