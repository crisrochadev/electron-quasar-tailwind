import knex from '../config/connection';

export default {
  async get(table){
    return await knex(table);
  },
  async getRaw(raw){
    return await knex(raw);
  },
  async getBy(table, by){
    return await knex(table).where(by).first();
  },
  async insert(table,data){
    return await knex(table).insert(data);
  },
  async delete(table,id){
    return await knex(table).where({id}).del();
  },
  async update(table,by,data){
    return await knex(table).where(by).update(data);
  },
}
