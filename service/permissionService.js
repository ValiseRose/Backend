const permissionsDao = require('../dao/permissionDao');




const createPermission = async (name, path, section, sub_section) => {
  const permissionData = { name, path, section, sub_section };
  return await permissionsDao.createPermission(permissionData);
};
const createPermissions = async (permissionsData) => {
  
  return await permissionsDao.createPermissions(permissionsData);
};
const getAllPermissions = async ()=>{
  return await permissionsDao.getAllPermissions()
}
const updatePermission = async (id, updateData)=>{
  return await permissionsDao.updatePermission(id, updateData)
}
const getPermissionById = async (id)=>{
  return await permissionsDao.getPermissionById()
}
const deletePermission = async (id)=>{
  return await permissionsDao.deletePermission()
}
const assignPermissionsToUser = async (userId, permissionIds) => {
  try {
    return await permissionsDao.assignPermissionsToUser(userId, permissionIds);
  } catch (error) {
    throw error;
  }
};

const deletePermissionsFromUser = async (userId, permissionIdsToDelete) => {
  try {
    console.log("userId service", userId)
      return await permissionsDao.deletePermissionsFromUser(userId, permissionIdsToDelete);
  } catch (error) {
      throw error;
  }
};
const getPermissionsByUserId = async (userId) => {
  return await permissionsDao.getPermissionsByUserId(userId);
};

const updatePermissionsForUser= async (userId, permissionIds) => {
  try {
    return await permissionsDao.updatePermissionsForUser(userId, permissionIds);
  } catch (error) {
    throw error;
  }
}

module.exports={createPermission,
   getAllPermissions,
   updatePermission,
  deletePermission,
  getPermissionById,
  assignPermissionsToUser,
  deletePermissionsFromUser,
  getPermissionsByUserId,
  updatePermissionsForUser,
createPermissions
}