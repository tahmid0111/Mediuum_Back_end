const BlogModel = require("../models/blog/blog.model");
const CategoryModel = require("../models/blog/category.model");
const LibraryModel = require("../models/blog/library.model");
const TopicModel = require("../models/blog/topic.model");
const CommentModel = require("../models/features/comment.model");
const ExpressionModel = require("../models/features/expression.model");
const UserModel = require("../models/user/user.model");
const { ObjectId } = require("mongodb");

exports.ReadAllBlogService = async (req) => {
  try {
    const result = await BlogModel.find().sort({ createdAt: -1 });
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllWriterService = async (req) => {
  try {
    // const result = await WriterModel.find().sort({ WriterName: 1 });
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleWriterService = async (req) => {
  try {
    let Query = { _id: req.params.writerID };
    // const result = await WriterModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleUserService = async (req) => {
  try {
    let Query = { _id: req.params.userID };
    const result = await UserModel.findOne(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllCategoryService = async (req) => {
  try {
    let result = await CategoryModel.find();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllTopicByCategoryService = async (req) => {
  try {
    let Query = { CategoryID: req.params.categoryID };
    let result = await TopicModel.find(Query);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadBlogByCategoryService = async (req) => {
  try {
    let Query1 = {
      $match: {
        CategoryID: new ObjectId(req.params.categoryID),
      },
    };
    let lookup1 = {
      $lookup: {
        from: "users",
        localField: "UserID",
        foreignField: "_id",
        as: "UserData",
      },
    };
    let unWind = {
      $unwind: "$UserData",
    };
    let projection = {
      $project: {
        UserData: {
          _id: 0,
          About: 0,
          Password: 0,
          SubTitle: 0,
          Email: 0,
          Occupation: 0,
          Deactivated: 0,
          createdAt: 0,
          updatedAt: 0,
        },
      },
    };

    const Pipeline1 = [Query1, lookup1, unWind, projection];
    let result = await BlogModel.aggregate(Pipeline1);

    return { status: "success", data: result };
  } catch (error) {
    console.log(error);
    return { status: "fail" };
  }
};

exports.ReadBlogByTopicService = async (req) => {
  try {
    let Query = { TopicID: req.params.topicID };
    let result = await BlogModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleTopicService = async (req) => {
  try {
    let Query = { _id: req.params.topicID };
    let result = await TopicModel.find(Query);

    return { status: "success", data: result[0] };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleBlogService = async (req) => {
  try {
    let Query1 = {
      $match: {
        _id: new ObjectId(req.params.blogID),
      },
    };
    let lookup1 = {
      $lookup: {
        from: "users",
        localField: "UserID",
        foreignField: "_id",
        as: "UserData",
      },
    };
    let lookup2 = {
      $lookup: {
        from: "topics",
        localField: "TopicID",
        foreignField: "_id",
        as: "TopicDetails",
      },
    };
    let unWind1 = {
      $unwind: "$UserData",
    };
    let unWind2 = {
      $unwind: "$TopicDetails",
    };
    let projection1 = {
      $project: {
        UserData: {
          _id: 0,
          About: 0,
          Password: 0,
          Email: 0,
          Occupation: 0,
          Deactivated: 0,
          createdAt: 0,
          updatedAt: 0,
        },
        TopicDetails: {
          _id: 0,
          CategoryID: 0,
        },
      },
    };

    const Pipeline1 = [Query1, lookup1, unWind1, lookup2, unWind2, projection1];
    let result = await BlogModel.aggregate(Pipeline1);
    // let result = await BlogModel.findOne({ _id: req.params.blogID });

    return { status: "success", data: result[0] };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.AddToLibraryService = async (req) => {
  try {
    let myBody = {
      BlogID: req.params.blogID,
      UserID: req.headers.userID,
    };
    let Query = { _id: BlogID };
    let result = await LibraryModel.create(myBody);
    // await BlogModel.updateOne(Query, { $set: { Saved: true } });
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllCommentByBlogService = async (req) => {
  try {
    let Query = { BlogID: req.params.blogID };
    let result = await CommentModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadAllExpressionByBlogService = async (req) => {
  try {
    let Query = { BlogID: req.params.blogID };
    let result = await ExpressionModel.find(Query);

    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};

exports.ReadSingleExpressionByBlogService = async (req) => {
  try {
    let Query = { BlogID: req.params.blogID };
    let result = await ExpressionModel.aggregate([
      { $match: Query },
      { $group: { _id: "$Expression" } },
    ]);
    return { status: "success", data: result };
  } catch (error) {
    return { status: "fail" };
  }
};
