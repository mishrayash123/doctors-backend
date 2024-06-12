import express from 'express';

import  {deletesavedUserById, getsavedUsers,createsavedUser} from '../db/saved.js';



export const Save = async (req, res) => {
    try {
      const {  email,
        userid,
        firstname,
        lastname,
        Phoneno,
        location,
        startas,
        Bio,
        dob,
        gender,
        address,
        type,
        profilepic,
        bloodgroup,
        description,
        services,
        edu,
        exp,
        language,
        totalexp,
        fees,
        clinic,} = req.body;
      if (!userid) {
        return res.sendStatus(400);
      }

      const Booking  = await createsavedUser({
        email,
        userid,
        firstname,
        lastname,
        Phoneno,
        location,
        startas,
        Bio,
        dob,
        gender,
        address,
        type,
        profilepic,
        bloodgroup,
        description,
        services,
        edu,
        exp,
        language,
        totalexp,
        fees,
        clinic,
      });
      return res.status(200).json(Booking).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

export const getAllsavedusers = async (req, res) => {
  try {
    const users = await getsavedUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = (req.params);
    const deletedUser = await deletesavedUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}