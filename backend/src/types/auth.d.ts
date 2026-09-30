import type { Request, Response } from "express";

export interface SignupBody {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export type SignupResponseBody = string | { message: string };

export type SignupRequest = Request<
  Record<string, never>,
  SignupResponseBody,
  SignupBody
>;

export type SignupResponse = Response<SignupResponseBody>;
