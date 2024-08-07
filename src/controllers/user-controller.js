import userService from "../services/user-service.js";

const register = async (req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(201).json({
            data: result,
            message: "User registered successfully"
        });
    } catch (e) {
        next(e);
    }
};

const registerStaff = async (req, res, next) => {
    try {
        const result = await userService.registerStaff(req.body);
        res.status(201).json({
            data: result,
            message: "User registered successfully"
        });
    } catch (e) {
        next(e);
    }
};

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.status(200).json({
            data: result,
            message: "Login successfully"
        });
    } catch (e) {
        next(e);
    }
};

const get = async (req, res, next) => {
    try {
        const id = req.user.id;
        const result = await userService.get(id);
        res.status(200).json({
            data: result,
            message: "User retrieved successfully"
        });
    } catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {
        const id = req.user.id;
        const request = req.body;
        request.id = id;

        const result = await userService.update(request);
        res.status(200).json({
            data: result,
            message: "User updated successfully"
        });
    } catch (e) {
        next(e);
    }
};

const refreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        const result = await userService.refreshToken(refreshToken);
        res.status(200).json({
            data: result,
            message: "Token refreshed successfully"
        });
    } catch (e) {
        next(e);
    }
};

const deleteStaff = async (req, res, next) => {
    try {
        const id = req.params.id;

        const result = await userService.deleteStaff(id);
        res.status(200).json(result);
    } catch (e) {
        next(e);
    }
};

export default {
    register,
    registerStaff,
    login,
    get,
    update,
    refreshToken,
    deleteStaff
};