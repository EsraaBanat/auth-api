'use strict';

const { users } = require('../models/index');

 function homePage(req, res) {
  res.status(200).send('Home Page For My Auth-API Mini Project');
}
//API 
async function handleGetAll(req, res) {
  // console.log('req.model',req.model);
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  // console.log(id);
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  // console.log('ddddddddddddd',deletedRecord);
  res.status(204).json({});
  // res.status(204).send('Record is deleted Successfully')
}

//Auth

async function handleSignup(req, res, next) {
  // console.log('llllllllll', req.body);
  // console.log('fffffffffff', users);
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    console.error('Error in siginUp function',e);
    next(e.message);
  }
}

async function handleSignin(req, res, next) {
  try {
    const user = {
      user: req.user,
      token: req.user.token
    };
    res.status(200).json(user);
  } catch (e) {
    // console.error(e);
    next(e.message);
  }
}

async function handleGetUsers(req, res, next) {
  try {
    const userRecords = await users.findAll({});
    const list = userRecords.map(user => user.username);
    res.status(200).json(list);
  } catch (e) {
    // console.error(e);
    next(e.message);
  }
}

function handleSecret(req, res, next) {
  res.status(200).send("Welcome to the secret area!");
}

module.exports = {
    homePage,
    //API
    handleGetAll,
    handleGetOne,
    handleCreate,
    handleUpdate,
    handleDelete,
    //AUTH
    handleSignup,
    handleSignin,
    handleGetUsers,
    handleSecret
}