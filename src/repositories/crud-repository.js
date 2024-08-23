   const { Logger } = require('../config');
class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in this Crud Repo:create');
            throw error;
            
        }
    }

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in this Crud Repo:destroy');
            throw error;

        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in this Crud Repo:get');
            throw error;

        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in this Crud Repo:create');
            throw error;

        }
    }

    async update(id,data) {   //data-->{col: value, ....}
        try {
            const response = await this.model.create(data, {
                where: {
                    id:id
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in this Crud Repo:create');
            throw error;

        }
    }
}

module.exports = CrudRepository;