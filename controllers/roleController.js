// const Role = require('../models/roleModel');

// const createRole = async (req, res) => {
//     try {
//         const { roleId, roleName } = req.body;

//         const existingRole = await Role.findOne({ roleId });
//         if (existingRole) {
//             return res.status(400).json({ message: 'Role ID already exists' });
//         }

//         const newRole = new Role({ roleId, roleName });
//         await newRole.save();
//         res.status(201).json({ message: 'Role created successfully', newRole });
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating role', error });
//     }
// };


// const getAllRoles = async (req, res) => {
//     try {
//         const roles = await Role.find();
//         res.status(200).json(roles);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching roles', error });
//     }
// };


// const getRoleById = async (req, res) => {
//     try {
//         const role = await Role.findOne({ roleId: req.params.roleId });

//         if (!role) {
//             return res.status(404).json({ message: 'Role not found' });
//         }

//         res.status(200).json(role);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching role by ID', error });
//     }
// };


// const updateRole = async (req, res) => {
//     try {
//         const { roleId } = req.params;
//         const { roleName } = req.body;

//         const updatedRole = await Role.findOneAndUpdate(
//             { roleId },
//             { roleName },
//             { new: true }  
//         );

//         if (!updatedRole) {
//             return res.status(404).json({ message: 'Role not found' });
//         }

//         res.status(200).json({ message: 'Role updated successfully', updatedRole });
//     } catch (error) {
//         res.status(500).json({ message: 'Error updating role', error });
//     }
// };


// const deleteRole = async (req, res) => {
//     try {
//         const { roleId } = req.params;

//         const deletedRole = await Role.findOneAndDelete({ roleId });

//         if (!deletedRole) {
//             return res.status(404).json({ message: 'Role not found' });
//         }

//         res.status(200).json({ message: 'Role deleted successfully', deletedRole });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting role', error });
//     }
// };

// module.exports = {
//     createRole,
//     getAllRoles,
//     getRoleById,
//     updateRole,
//     deleteRole,
// };
const Role = require('../models/roleModel');

    
async function createRole(req, res) {
    const roleData = req.body;
    try {
        const newRole = new Role(roleData);
        await newRole.save();
        return res.status(201).json({ msg: "Role created successfully", role: newRole });
    } catch (err) {
        return res.status(500).json({ msg: "Internal server error", error: err.message });
    }
}


async function getAllRoles(req, res) {
    try {
        const roles = await Role.find();
        return res.status(200).json(roles);
    } catch (err) {
        return res.status(500).json({ msg: "Internal server error", error: err.message });
    }
}

// Get a role by ID
async function getRoleById(req, res) {
    const { id } = req.params;
    try {
        const role = await Role.findById(id);
        if (!role) {
            return res.status(404).json({ msg: "Role not found" });
        }
        return res.status(200).json(role);
    } catch (err) {
        return res.status(500).json({ msg: "Internal server error", error: err.message });
    }
}

// Update a role by ID
async function updateRole(req, res) {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedRole = await Role.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!updatedRole) {
            return res.status(404).json({ msg: "Role not found" });
        }
        return res.status(200).json({ msg: "Role updated successfully", role: updatedRole });
    } catch (err) {
        return res.status(500).json({ msg: "Internal server error", error: err.message });
    }
}

// Delete a role by ID
async function deleteRole(req, res) {
    const { id } = req.params;
    try {
        const deletedRole = await Role.findByIdAndDelete(id);
        if (!deletedRole) {
            return res.status(404).json({ msg: "Role not found" });
        }
        return res.status(200).json({ msg: "Role deleted successfully" });
    } catch (err) {
        return res.status(500).json({ msg: "Internal server error", error: err.message });
    }
}

module.exports = { createRole, getAllRoles, getRoleById, updateRole, deleteRole };
