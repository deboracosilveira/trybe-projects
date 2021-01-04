const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const results = await db.getTable('recipes').select(['id', 'user', 'name']).execute();
  const fetchList = await results.fetchAll();
  const list = await fetchList.map(([id, user, name]) => ({ id, user, name }));

  return list;
};

const getById = async (recipeId) => {
  const db = await connection();
  const results = await db
    .getTable('recipes')
    .select(['id', 'user_id', 'user', 'name', 'ingredients', 'instructions'])
    .where('id = :id')
    .bind('id', recipeId)
    .execute();
  const fetchResult = await results.fetchOne();
  const [id, userId, user, name, ingredients, instructions] = fetchResult;
  return {
    id,
    userId,
    user,
    name,
    ingredients,
    instructions,
  };
};

const getByName = async (recipeName) => {
  const db = await connection();
  const results = await db
    .getTable('recipes')
    .select(['id', 'user', 'name'])
    .where('name like :name')
    .bind('name', `%${recipeName}%`)
    .execute();
  const fetchList = await results.fetchAll();
  const list = await fetchList.map(([id, user, name]) => ({ id, user, name }));
  return list;
};

const addRecipe = async (id, userName, name, ingredients, instructions) => {
  const db = await connection();
  await db
    .getTable('recipes')
    .insert(['user_id', 'user', 'name', 'ingredients', 'instructions'])
    .values(id, userName, name, ingredients, instructions)
    .execute();
  return true;
};

const editRecipe = async (id, name, ingredients, instructions) => {
  const db = await connection();
  return db
    .getTable('recipes')
    .update()
    .set('name', name)
    .set('ingredients', ingredients)
    .set('instructions', instructions)
    .where('id = :id')
    .bind('id', id)
    .execute();
};

const getRecipeFromId = async (recipeId) => {
  const db = await connection();
  const results = await db
    .getTable('recipes')
    .select(['user_id', 'user', 'name', 'ingredients', 'instructions'])
    .where('id = :id')
    .bind('id', recipeId)
    .execute();

  const [userId, user, name, ingredients, instructions] = await results.fetchOne();
  return { recipeId, userId, user, name, ingredients, instructions };
};

const getUserRecipes = async (userId) => {
  const db = await connection();

  const results = await db
    .getTable('recipes')
    .select(['id', 'user', 'name', 'ingredients', 'instructions'])
    .where('user_id = :userId')
    .bind('userId', userId)
    .execute();

  const recipesList = await results.fetchAll();

  return recipesList.map(([id, user, name, ingredients, instructions]) => ({
    id,
    user,
    name,
    ingredients,
    instructions,
  }));
};

module.exports = {
  getAll,
  getById,
  getByName,
  addRecipe,
  editRecipe,
  getRecipeFromId,
  getUserRecipes,
};
