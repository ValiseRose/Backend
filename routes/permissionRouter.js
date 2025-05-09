const express = require('express');
const router = express.Router();
const userPermissionsController = require('../controller/permissionController');

router.post('/add-permission', userPermissionsController.createPermission)
router.post('/add-permissions', userPermissionsController.createPermissions)
router.get('/get-permissions', userPermissionsController.getAllPermissions)
router.post('/assign-user-permissions', userPermissionsController.assignPermissionsToUser)
router.post('/delete-user-permissions', userPermissionsController.deletePermissions);
router.get('/:userId/permissions', userPermissionsController.getPermissionsByUserId)
router.put('/update-permissions', userPermissionsController.updatePermissionsForUser);

module.exports = router;