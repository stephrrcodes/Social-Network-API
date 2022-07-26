const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    removeUser,
    removeFriend
} = require('../../controllers/user-controller');


router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser);
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;