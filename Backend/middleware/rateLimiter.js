import rateLimit from "express-rate-limit"
import ErrorHandler from "../Utils/errorHandler.js";

// Rate Limiter
export const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 Min
    max: 50,  // 50 request allowed in 1 min
    // message: { success:false, message: 'Too many requests hit, please try again later' },
    handler: (req, res, next) => {
        next(new ErrorHandler("Too many requests, please try again later", 429));
    },
    keyGenerator: function (req) {
        return `${req.clientIp}-${req.path}`;
    }
});

// Login Limiter
export const loginLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 Min
    max: 5,  // 5 request allowed in 1 min
    // message: { success:false, message: 'Too many requests hit, please try again later' },
    handler: (req, res, next) => {
        next(new ErrorHandler("Too many requests, please try again later", 429));
    },
    keyGenerator: function (req) {
        return `${req.clientIp}-${req.path}`;
    }
});

