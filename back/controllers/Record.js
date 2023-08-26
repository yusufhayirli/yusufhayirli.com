const Record = require('../models/RecordModel')
const mongoose = require('mongoose')

// Get all records
const getRecords = async (req, res) => {
  const records = await Record.find({}).sort({createdAt: -1})

  res.status(200).json(records);
}

// Get single record
const getSingleRecord = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such record.'})
    }

    const record = await Record.findById(id)

    if (!record) {
      return res.status(404).json({error: 'No such record!'})
    }
    res.status(200).json(record);
}

// Create record
const createRecord = async (req, res) => {
  const {title, reps, load} = req.body;

  // Add doc to db
  try {
    const record = await Record.create({title, reps, load});
    res.status(200).json(record)
  } catch (error) {
    res.status(400).json({error: error.messsage})
  }
}

// Delete record
const deleteRecord = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such record.'})
  }

  const record = await Record.findOneAndDelete({_id: id})

  if (!record) {
    return res.status(404).json({error: 'No such record!'})
  }
  res.status(200).json(record)
}

// Update record
const updateRecord = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such record.'})
  }

  const record = await Record.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!record) {
    return res.status(404).json({error: 'No such record!'})
  }
  res.status(200).json(record)
}

module.exports = {
  getRecords: getRecords,
  getSingleRecord: getSingleRecord,
  createRecord: createRecord,
  deleteRecord: deleteRecord,
  updateRecord: updateRecord
};