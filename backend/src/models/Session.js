import mongoose from "mongoose";

const sessionSchame = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requied: true,
      index: true,
    },
    refreshToken: {
      type: String,
      requied: true,
      unique: true,
    },
    expiresAt: {
      type: Date,
      requied: true,
    },
  },
  { timestamps: true },
);

sessionSchame.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const Session = mongoose.model("Seeion", sessionSchame);

export default Session;
