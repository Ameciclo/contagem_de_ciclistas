import mongoose from "mongoose";

const CyclistCountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  summary: {
    total: Number,
    hour_max: Number,
    women_percent: Number,
    men_percent: Number,
    children_percent: Number,
    sharing_percent: Number,
    helmet_percent: Number,
    cargo_percent: Number,
    service_percent: Number,
    wrong_way_percent: Number,
    sidewalk_percent: Number,
    download_xlsx_url: String,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  north: {
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    name: String,
  },
  east: {
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    name: String,
  },
  west: {
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    name: String,
  },
  south: {
    location: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
    name: String,
  },
  data: {
    quantitative: {
      north_east: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      north_west: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      north_south: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      east_north: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      east_west: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      east_south: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      west_north: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      west_east: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      west_south: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      south_west: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      south_east: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      south_north: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
    },
    qualitative: {
      women: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      men: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      child: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      helmet: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      sharing_child: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      sharing_women: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      sharing_men: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      cargo: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      service: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      wrong_way: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      sidewalk: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      rain: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      wrong_way_conversion: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      tricycle: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      electric: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      skate: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
      handbike: {
        count_per_hour: {
          6: Number,
          7: Number,
          8: Number,
          9: Number,
          10: Number,
          11: Number,
          12: Number,
          13: Number,
          14: Number,
          15: Number,
          16: Number,
          17: Number,
          18: Number,
          19: Number,
        },
      },
    },
  },
});

CyclistCountSchema.index({ name: "text" });

export default mongoose.model(
  "CyclistCount",
  CyclistCountSchema,
  "CyclistCounts"
);
