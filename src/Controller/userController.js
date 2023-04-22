const { successCode, errorCode, failCode } = require('../ultils/response')
const initModel = require('../Models/init-models');
const sequelize = require('../Models/index')
const models = initModel(sequelize);
const getInfor = async (req, res) => {
    try {
        let data = await models.user.findAll({
            include: ["res_id_restaurants"]
        });
        successCode(res, "Get success", data);
    } catch (err) {
        errorCode(res, "Lỗi BE");
    }
}
const createLike = async (req, res) => {

    try {
        let { user_id, res_id, date_like } = req.body;
        let newData = {
            user_id,
            res_id,
            date_like
        }
        await models.like_res.create(newData);
        successCode(res, "created seccess", "");
    } catch (err) {

        errorCode(res, "Lỗi BE");
    }
}
const deletelike = async (req, res) => {
    try {
        let { user_id, res_id } = req.body;
        await models.like_res.destroy({
            where: {
                user_id,
                res_id
            }
        })
        successCode(res, "deleted like success", "");

    } catch (err) {
        errorCode(res, "Lỗi BE");
    }
}
const createrate = async (req, res) => {

    try {
        let { user_id, res_id, amount, date_rate } = req.body;
        let newData = {
            user_id,
            res_id,
            amount,
            date_rate
        }
        await models.rate_res.create(newData);
        successCode(res, "created seccess", "");
    } catch (err) {

        errorCode(res, "Lỗi BE");
    }
}
const getInforrate = async (req, res) => {
    try {
        let data = await models.user.findAll({
            include: ["res_id_restaurant_rate_res"]
        });
        successCode(res, "Get success", data);
    } catch (err) {
        errorCode(res, "Lỗi BE");
    }
}
const createoder = async (req, res) => {

    try {
        let { user_id, food_id, amount,code,arr_sub_id} = req.body;
        let newData = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        }
        await models.order.create(newData);
        successCode(res, "created seccess", "");
    } catch (err) {

        errorCode(res, "Lỗi BE");
    }
}
module.exports = {
    getInfor,
    createLike,
    deletelike,
    createrate,
    getInforrate,
    createoder
}