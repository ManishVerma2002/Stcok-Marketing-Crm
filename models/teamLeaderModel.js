const mongoose = require('mongoose');

const teamLeaderSchema = new mongoose.Schema({
  team_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team', 
    required: true,
  },
  team_leader_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  parent_team_leader_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    default: null,
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
  branch_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch',  
    required: true,
  },
}, {
  timestamps: true, 
});

const TeamLeader = mongoose.model('TeamLeader', teamLeaderSchema);

module.exports = TeamLeader;
