const Permission = require('../models/permission');
const User = require ('../models/user')

const mongoose = require('mongoose');

const createPermission = async (permissionData) => {
  if (typeof permissionData !== 'object' || !permissionData.name || !permissionData.path || !permissionData.section || !permissionData.sub_section ) {
    throw new Error('Invalid permission data');
  }
  return await Permission.create(permissionData);
};


const createPermissions = async (permissionsData) => {
  if (!Array.isArray(permissionsData) || permissionsData.length === 0) {
    throw new Error('Invalid permissions data. Must be a non-empty array.');
  }

  // Validate each permission object
  const invalidPermissions = permissionsData.filter(
    (permission) =>
      typeof permission !== 'object' ||
      !permission.name ||
      !permission.path ||
      !permission.section ||
      !permission.sub_section
  );

  if (invalidPermissions.length > 0) {
    throw new Error('Some permissions data are invalid.');
  }

  // Insert all permissions in one query
  return await Permission.insertMany(permissionsData);
};

const getAllPermissions = async () => {
  return await Permission.find({});
};
const deletePermission = async (id) => {
  return await Permission.findByIdAndDelete(id);
};
const getPermissionById = async (id) => {
  return await Permission.findById(id);
}
const updatePermission = async (id, updateData) => {
  return await Permission.findByIdAndUpdate(id, updateData, { new: true });
};

const assignPermissionsToUser = async (adminId, permissionIds) => {
  try {
    const user = await User.findById(adminId);
    if (!user) {
      throw new Error('Admin not found');
    }

    const permissions = await Permission.find({ _id: { $in: permissionIds } });
    if (permissions.length !== permissionIds.length) {
      throw new Error('One or more permissions not found');
    }

    // Filter out duplicate permission IDs
    const newPermissions = permissionIds.filter(permissionId => !user.permissions.includes(permissionId));
    user.permissions = [...user.permissions, ...newPermissions];

    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};
const deletePermissionsFromUser = async (userId, permissionIdsToDelete) => {
  try {
      const user = await User.findById(userId);
      if (!user) {
          throw new Error('Admin not found');
      }

      // Remove permissions from user
      user.permissions = user.permissions.filter(permission => !permissionIdsToDelete.includes(permission.toString()));

      await user.save();
      return user;
  } catch (error) {
      throw error;
  }
};

const getPermissionsByUserId = async (userId) => {
  return await User.findById(userId).populate('permissions').exec();
};

const updatePermissionsForUser = async (userId, permissionIds) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('admin not found');
    }

    const permissions = await Permission.find({ _id: { $in: permissionIds } });
    if (permissions.length !== permissionIds.length) {
      throw new Error('One or more permissions not found');
    }

    // Update user's permissions with the new set
    user.permissions = permissionIds;

    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createPermission,
  getAllPermissions,
  deletePermission,
  getPermissionById,
  updatePermission, 
  assignPermissionsToUser,
  getPermissionsByUserId,
  deletePermissionsFromUser,
  updatePermissionsForUser,
  createPermissions

};