import { ILogger, Logger } from "../utils";
import { Document, Model } from "mongoose";
import CyclistCount from "../schemas/CyclistCount";

export class CyclistCountService {
  logger: ILogger;
  private model: Model<Document>;

  constructor() {
    this.logger = new Logger(__filename);
    this.model = CyclistCount;
  }

  async getAll() {
    return this.model.find();
  }

  async getById(id: string | number) {
    this.logger.info("Fetching cyclist count by id: ", id);
    if (id) {
      return this.model.findById(id);
    }
    return Promise.reject(false);
  }

  async getMetadata() {
    const totalSummary = await this.model.aggregate([
      {
        $project: {
          _id: 0,
          date: "$date",
          total: "$summary.total",
          hour_max: "$summary.hour_max",
          totalWomen: {
            $multiply: ["$summary.total", "$summary.women_percent"],
          },
          totalChildren: {
            $multiply: ["$summary.total", "$summary.children_percent"],
          },
          totalHelmet: {
            $multiply: ["$summary.total", "$summary.helmet_percent"],
          },
          totalCargo: {
            $multiply: ["$summary.total", "$summary.cargo_percent"],
          },
          totalSharing: {
            $multiply: ["$summary.total", "$summary.sharing_percent"],
          },
          totalService: {
            $multiply: ["$summary.total", "$summary.service_percent"],
          },
          totalWrongWay: {
            $multiply: ["$summary.total", "$summary.wrong_way_percent"],
          },
          totalSidewalk: {
            $multiply: ["$summary.total", "$summary.sidewalk_percent"],
          },
        },
      },
      {
        $group: {
          _id: 0,
          numberOfCounts: { $sum: 1 },
          latestCount: { $last: "$date" },
          totalAmount: { $sum: "$total" },
          totalWomen: {
            $sum: "$totalWomen",
          },
          totalChildren: {
            $sum: "$totalChildren",
          },
          totalHelmet: {
            $sum: "$totalHelmet",
          },
          totalCargo: {
            $sum: "$totalCargo",
          },
          totalSharing: {
            $sum: "$totalSharing",
          },
          totalService: {
            $sum: "$totalService",
          },
          totalWrongWay: {
            $sum: "$totalWrongWay",
          },
          totalSidewalk: {
            $sum: "$totalSidewalk",
          },
          MaximumValue: { $max: "$total" },
          MinimumValue: { $min: "$total" },
          MaximumHourValue: { $max: "$hour_max" },
          AverageValue: { $avg: "$total" },
        },
      },
      {
        $addFields: {
          totalWomenPercentile: {
            $divide: ["$totalWomen", "$totalAmount"],
          },
          totalChildrenPercentile: {
            $divide: ["$totalChildren", "$totalAmount"],
          },
          totalHelmetPercentile: {
            $divide: ["$totalHelmet", "$totalAmount"],
          },
          totalCargoPercentile: {
            $divide: ["$totalCargo", "$totalAmount"],
          },
          totalSharingPercentile: {
            $divide: ["$totalSharing", "$totalAmount"],
          },
          totalServicePercentile: {
            $divide: ["$totalService", "$totalAmount"],
          },
          totalWrongWayPercentile: {
            $divide: ["$totalWrongWay", "$totalAmount"],
          },
          totalSidewalkPercentile: {
            $divide: ["$totalSidewalk", "$totalAmount"],
          },
        },
      },
    ]);
    return totalSummary;
  }

  async getFiltered(q: any) {
    return this.model
      .find({
        $text: { $search: q as string },
      })
      .select("_id summary location name date");
  }
}
