import express from 'express';

import { getUserByEmail, createUser,deleteUserById }  from '../db/users.js';
import { authentication, random } from '../helpers/index.js';
import {UserModel} from "../db/users.js"


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email).select('+salt +password');

    if (!user) {
      return res.sendStatus(400);
    }

    const expectedHash = authentication(user.salt, password);
    
    if (user.password != expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    res.cookie('YashKumarMishra-auth', user.sessionToken, {
      expires: new Date (Date.now() + 25892000000),
      httpOnly: true, sameSite: 'None', secure: true,
      });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req, res) => {
  try {
    const { email, password,location,firstname,lastname,type} = req.body;

    if (!email || !password || !type) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);
  
    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      type,
      location,
      firstname,
      lastname,
        salt,
        password: authentication(salt, password),
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}


export const updatepassword = async (req, res) => {
  try {
    const {email,newpassword} = req.body;

    if (!newpassword || !email ) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await UserModel.findOneAndUpdate(
      { email },
      { $set: { salt: salt, password:authentication(salt,newpassword)} },
      { returnOriginal: false }
    );

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}