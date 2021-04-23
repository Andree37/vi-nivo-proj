import React from 'react';
import CountryDetailCard from "./CountryDetailCard";

// (very long) arrays of data just to get some placeholders
// this is not gonna exist after, its just gonna be
// the object to make the filtering
// that is gonna be sent to other props
const pieData = [
  {
    "id": "css",
    "label": "css",
    "value": 449,
    "color": "hsl(326, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 526,
    "color": "hsl(85, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 38,
    "color": "hsl(254, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 501,
    "color": "hsl(204, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 478,
    "color": "hsl(308, 70%, 50%)"
  }
];

const radarData = [
  {
    "taste": "fruity",
    "chardonay": 77,
    "carmenere": 27,
    "syrah": 83
  },
  {
    "taste": "bitter",
    "chardonay": 64,
    "carmenere": 59,
    "syrah": 84
  },
  {
    "taste": "heavy",
    "chardonay": 81,
    "carmenere": 118,
    "syrah": 93
  },
  {
    "taste": "strong",
    "chardonay": 78,
    "carmenere": 46,
    "syrah": 98
  },
  {
    "taste": "sunny",
    "chardonay": 76,
    "carmenere": 102,
    "syrah": 87
  }
]

const barData = [
  {
    "country": "AD",
    "hot dog": 15,
    "hot dogColor": "hsl(0, 70%, 50%)",
    "burger": 58,
    "burgerColor": "hsl(76, 70%, 50%)",
    "sandwich": 193,
    "sandwichColor": "hsl(25, 70%, 50%)",
    "kebab": 136,
    "kebabColor": "hsl(62, 70%, 50%)",
    "fries": 165,
    "friesColor": "hsl(319, 70%, 50%)",
    "donut": 0,
    "donutColor": "hsl(318, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 124,
    "hot dogColor": "hsl(311, 70%, 50%)",
    "burger": 16,
    "burgerColor": "hsl(198, 70%, 50%)",
    "sandwich": 161,
    "sandwichColor": "hsl(252, 70%, 50%)",
    "kebab": 18,
    "kebabColor": "hsl(277, 70%, 50%)",
    "fries": 90,
    "friesColor": "hsl(131, 70%, 50%)",
    "donut": 174,
    "donutColor": "hsl(271, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 59,
    "hot dogColor": "hsl(244, 70%, 50%)",
    "burger": 109,
    "burgerColor": "hsl(296, 70%, 50%)",
    "sandwich": 198,
    "sandwichColor": "hsl(277, 70%, 50%)",
    "kebab": 130,
    "kebabColor": "hsl(187, 70%, 50%)",
    "fries": 137,
    "friesColor": "hsl(30, 70%, 50%)",
    "donut": 54,
    "donutColor": "hsl(60, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 95,
    "hot dogColor": "hsl(303, 70%, 50%)",
    "burger": 108,
    "burgerColor": "hsl(287, 70%, 50%)",
    "sandwich": 178,
    "sandwichColor": "hsl(316, 70%, 50%)",
    "kebab": 42,
    "kebabColor": "hsl(248, 70%, 50%)",
    "fries": 194,
    "friesColor": "hsl(171, 70%, 50%)",
    "donut": 112,
    "donutColor": "hsl(92, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 138,
    "hot dogColor": "hsl(84, 70%, 50%)",
    "burger": 86,
    "burgerColor": "hsl(162, 70%, 50%)",
    "sandwich": 199,
    "sandwichColor": "hsl(12, 70%, 50%)",
    "kebab": 191,
    "kebabColor": "hsl(10, 70%, 50%)",
    "fries": 93,
    "friesColor": "hsl(193, 70%, 50%)",
    "donut": 111,
    "donutColor": "hsl(34, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 189,
    "hot dogColor": "hsl(330, 70%, 50%)",
    "burger": 93,
    "burgerColor": "hsl(108, 70%, 50%)",
    "sandwich": 81,
    "sandwichColor": "hsl(45, 70%, 50%)",
    "kebab": 55,
    "kebabColor": "hsl(133, 70%, 50%)",
    "fries": 48,
    "friesColor": "hsl(282, 70%, 50%)",
    "donut": 77,
    "donutColor": "hsl(185, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 127,
    "hot dogColor": "hsl(234, 70%, 50%)",
    "burger": 55,
    "burgerColor": "hsl(32, 70%, 50%)",
    "sandwich": 94,
    "sandwichColor": "hsl(343, 70%, 50%)",
    "kebab": 165,
    "kebabColor": "hsl(337, 70%, 50%)",
    "fries": 44,
    "friesColor": "hsl(96, 70%, 50%)",
    "donut": 93,
    "donutColor": "hsl(40, 70%, 50%)"
  }
]

const lineData = [
  {
    "id": "japan",
    "color": "hsl(315, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 213
      },
      {
        "x": "helicopter",
        "y": 127
      },
      {
        "x": "boat",
        "y": 92
      },
      {
        "x": "train",
        "y": 225
      },
      {
        "x": "subway",
        "y": 117
      },
      {
        "x": "bus",
        "y": 202
      },
      {
        "x": "car",
        "y": 10
      },
      {
        "x": "moto",
        "y": 199
      },
      {
        "x": "bicycle",
        "y": 157
      },
      {
        "x": "horse",
        "y": 177
      },
      {
        "x": "skateboard",
        "y": 287
      },
      {
        "x": "others",
        "y": 209
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(197, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 139
      },
      {
        "x": "helicopter",
        "y": 143
      },
      {
        "x": "boat",
        "y": 132
      },
      {
        "x": "train",
        "y": 90
      },
      {
        "x": "subway",
        "y": 264
      },
      {
        "x": "bus",
        "y": 296
      },
      {
        "x": "car",
        "y": 25
      },
      {
        "x": "moto",
        "y": 130
      },
      {
        "x": "bicycle",
        "y": 18
      },
      {
        "x": "horse",
        "y": 213
      },
      {
        "x": "skateboard",
        "y": 267
      },
      {
        "x": "others",
        "y": 245
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(215, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 2
      },
      {
        "x": "helicopter",
        "y": 107
      },
      {
        "x": "boat",
        "y": 136
      },
      {
        "x": "train",
        "y": 231
      },
      {
        "x": "subway",
        "y": 83
      },
      {
        "x": "bus",
        "y": 56
      },
      {
        "x": "car",
        "y": 204
      },
      {
        "x": "moto",
        "y": 144
      },
      {
        "x": "bicycle",
        "y": 234
      },
      {
        "x": "horse",
        "y": 96
      },
      {
        "x": "skateboard",
        "y": 168
      },
      {
        "x": "others",
        "y": 249
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(302, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 248
      },
      {
        "x": "helicopter",
        "y": 122
      },
      {
        "x": "boat",
        "y": 122
      },
      {
        "x": "train",
        "y": 260
      },
      {
        "x": "subway",
        "y": 239
      },
      {
        "x": "bus",
        "y": 289
      },
      {
        "x": "car",
        "y": 43
      },
      {
        "x": "moto",
        "y": 236
      },
      {
        "x": "bicycle",
        "y": 90
      },
      {
        "x": "horse",
        "y": 39
      },
      {
        "x": "skateboard",
        "y": 71
      },
      {
        "x": "others",
        "y": 79
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(271, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 270
      },
      {
        "x": "helicopter",
        "y": 226
      },
      {
        "x": "boat",
        "y": 287
      },
      {
        "x": "train",
        "y": 109
      },
      {
        "x": "subway",
        "y": 16
      },
      {
        "x": "bus",
        "y": 243
      },
      {
        "x": "car",
        "y": 75
      },
      {
        "x": "moto",
        "y": 63
      },
      {
        "x": "bicycle",
        "y": 194
      },
      {
        "x": "horse",
        "y": 56
      },
      {
        "x": "skateboard",
        "y": 23
      },
      {
        "x": "others",
        "y": 26
      }
    ]
  }
]

// countrydetailcard props -> data object
// props need to be changed to the object to do the data filtering
const ComparisonCard = () => {
  return (
    <div style={{width: '100%', border: "solid black 1px"}}>
      <div style={{display: 'flex', width: '100%', backgroundColor: 'lightgray', height: '50px'}}>
        HEADER
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
        <div style={{width: '50%', border: "solid black 1px"}}>
          <CountryDetailCard radarData={radarData} pieData={pieData} barData={barData} lineData={lineData}/>
        </div>
        <div style={{width: '50%', border: "solid black 1px"}}>
          <CountryDetailCard radarData={radarData} pieData={pieData} barData={barData} lineData={lineData}/>
        </div>
      </div>
    </div>
  );
};


export default ComparisonCard;
