const express = require('express');
const {
  getRecords,
  getSingleRecord,
  createRecord,
  deleteRecord,
  updateRecord
} = require('../controllers/Record')

const router = express.Router();

// GET Records
router.get('/', getRecords)

// GET a single record
router.get('/:id', getSingleRecord)

// POST a record
router.post('/', createRecord)

// DELETE a record
router.delete('/:id', deleteRecord)

// UPDATE a record
router.patch('/:id', updateRecord)

module.exports = router;