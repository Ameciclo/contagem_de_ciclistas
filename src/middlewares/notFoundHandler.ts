import { Request, Response, NextFunction } from "express";

/**
 * Error response middleware for 404 not found.
 *
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 * @returns <void>
 */
export default function notFoundError(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.status(404).json({
    error: {
      code: 404,
      message: "Not found",
    },
  });
}