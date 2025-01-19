import { getData } from '../services/index.service.js';

export const index = (req, res) => {
    const data = getData();

    res.status(200).json({
        message: data.message,
        data: data.user
    });
};