import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Option,
} from "@material-tailwind/react";
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
import {
  useMaterialTailwindController,} from "@/context";
import {Typography,} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import { BarChart } from '@mui/x-charts/BarChart';
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//Card 
const Product = [
  {
    id: 1,
    campain: "Shark Beauty",
    name: "SpeedStyle",
    channels: [
      {
        channel: "YouTube",
        funnel:"Awareness",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "February", net: 12398, edgeFee:1240 , setupFees:  800     ,funnel:"Awareness",},
          { month: "March", net: 12398, edgeFee:1240 , setupFees:  800    ,funnel:"Awareness", },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0    ,funnel:"Awareness", },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "June", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "September", net: 30000, edgeFee: 3000  , setupFees:800     ,funnel:"Awareness",},
          { month: "October", net: 20000, edgeFee: 2000 , setupFees:800    ,funnel:"Awareness", },
          { month: "November", net: 30000, edgeFee: 3000 , setupFees:800     ,funnel:"Awareness",},
          { month: "December", net: 10000, edgeFee: 1000 , setupFees:800     ,funnel:"Awareness", }
        ]
      },
      {
        channel: "Paid Social",
       
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration"},
          { month: "February", net: { item1:  16118 , item2: 19297 , item3:0 }, edgeFee:3542 , setupFees:1600  ,funnel:"Consideration"   },
          { month: "March", net: { item1:  16119 , item2: 19300 , item3:0 }, edgeFee: 3542, setupFees:   1600  ,funnel:"Consideration" },
          { month: "April", net: { item1:   15725 , item2:  19463 , item3:0 }, edgeFee:  3519, setupFees:   1600 ,funnel:"Consideration" },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration" },
          { month: "June", net: 0, edgeFee: 0, setupFees: 0 ,funnel:"Consideration" },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0 ,funnel:"Consideration" },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0 ,funnel:"Consideration" },
          { month: "September", net: { item1:  37000 , item2: 25000 , item3:0 }, edgeFee: 6200 , setupFees:1600  ,funnel:"Consideration"   },
          { month: "October", net: { item1:  37000 , item2: 23700 , item3:0 }, edgeFee: 6070, setupFees:0   ,funnel:"Consideration"  },
          { month: "November", net: { item1:  45000 , item2: 25000 , item3:10000 }, edgeFee: 8000, setupFees:  2400  ,funnel:"Consideration" },
          { month: "December", net: { item1:  30000 , item2: 10000 , item3:8000 }, edgeFee: 4800, setupFees:  0  ,funnel:"Consideration" },
          
    
        ]
      }
    ]
  },
  {
    id: 2,
    campain: "Shark Beauty",
    name: "FlexStyle",
    channels: [
      {
        channel: "TV",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "February", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "March", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "April", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "May", net:{ item1: 343640 }, edgeFee: 16185, setupFees: 0    ,funnel:"Awareness", },
          { month: "June", net:{ item1: 391101 }, edgeFee: 18421, setupFees: 0     ,funnel:"Awareness", },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "August", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "September", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0     ,funnel:"Awareness",},
          { month: "October", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0     ,funnel:"Awareness", },
          { month: "November", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0     ,funnel:"Awareness",},
          { month: "December", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0     ,funnel:"Awareness", }
        ]
      },
      {
        channel: "BVOD",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "February", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",  },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "April", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "May", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "June", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "July", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "August", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "September", net: { item1:  44000  }, edgeFee: 4400 , setupFees:800      ,funnel:"Awareness",},
          { month: "October",   net: { item1:  45000  }, edgeFee: 4500 , setupFees:800        ,funnel:"Awareness",},
          { month: "November",  net: { item1:  110000  }, edgeFee: 11000, setupFees:  800      ,funnel:"Awareness",},
          { month: "December",  net: { item1:  60000 }, edgeFee: 6000, setupFees:  800     ,funnel:"Awareness", },
        ]
      },
      {
        channel: "OPS",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "February", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",  },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "April", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "May", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "June", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "July", net: 0, edgeFee: 0, setupFees: 0    ,funnel:"Awareness", },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "September",net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "October", net: 0, edgeFee: 0, setupFees: 0      ,funnel:"Awareness", },
          { month: "November", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "December", net: { item1:  93000  }, edgeFee: 0, setupFees:  0     ,funnel:"Awareness", },
        ]
      },
      {
        channel: "YouTube",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0    ,funnel:"Awareness", },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0      ,funnel:"Awareness", },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0    ,funnel:"Awareness", },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "May", net: { item1:  31461 , item2: 0 , item3:0 }, edgeFee: 3146 , setupFees:800     ,funnel:"Awareness",  },
          { month: "June", net: { item1:  27070 , item2: 0 , item3:0 }, edgeFee: 27070 , setupFees:800     ,funnel:"Awareness",  },
          { month: "July", net: { item1:  28333 , item2: 0 , item3:0 }, edgeFee: 2833 , setupFees:800     ,funnel:"Awareness", },
          { month: "August", net: { item1:  28333 , item2: 0 , item3:0 }, edgeFee: 2833 , setupFees:800     ,funnel:"Awareness",},
          { month: "September",net: { item1:  28333 , item2: 0 , item3:0 }, edgeFee: 2833 , setupFees:800     ,funnel:"Awareness",  },
          { month: "October", net: { item1:  18350 , item2: 0 , item3:0 }, edgeFee: 1835, setupFees:800     ,funnel:"Awareness",  },
          { month: "November", net: { item1:  35000 , item2: 0 , item3:0 }, edgeFee: 3500, setupFees:  0    ,funnel:"Awareness",  },
          { month: "December", net: { item1:  25000 , item2: 0 , item3:0 }, edgeFee: 2500, setupFees:  800     ,funnel:"Awareness",  },
        ]
      },
      {
        channel: "Paid Social",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration"},
          { month: "February", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration"  },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration"},
          { month: "April", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration"},
          { month: "May", net: { item1:   60886 , item2: 15178 , item3:0 }, edgeFee:  7606 , setupFees:1600  ,funnel:"Consideration"  },
          { month: "June", net: { item1:   40505 , item2:  19551 , item3:0 }, edgeFee:  6006 , setupFees:0   ,funnel:"Consideration"},
          { month: "July", net: { item1:   31500 , item2: 23985 , item3:10000 }, edgeFee: 6549 , setupFees:2400 ,funnel:"Consideration" },
          { month: "August", net: { item1:  31500 , item2: 9985 , item3:10000 }, edgeFee: 5149 , setupFees:0  ,funnel:"Consideration"},
          { month: "September", net: { item1:  31500 , item2: 9985 , item3:15000 }, edgeFee: 5649 , setupFees:800   ,funnel:"Consideration" },
          { month: "October", net: { item1:  36000 , item2: 11000 , item3:10000 }, edgeFee: 5700, setupFees:0   ,funnel:"Consideration" },
          { month: "November", net: { item1:  45000 , item2: 20000 , item3:20000 }, edgeFee: 8500, setupFees:  2400  ,funnel:"Consideration" },
          { month: "December", net: { item1:  34500 , item2: 11000 , item3:15000 }, edgeFee: 6050, setupFees:  0  ,funnel:"Consideration" },
       ]
      },
      {
        channel: "Premium NetWork",
     
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "February", net: 0, edgeFee: 0, setupFees: 0    ,funnel:"Awareness",    },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0    ,funnel:"Awareness", },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "June", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "July", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "August", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "September", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",  },
          { month: "October",net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "November", net: { item1:  26500  }, edgeFee: 2650, setupFees:  800      ,funnel:"Awareness",},
          { month: "December", net: { item1:  17500  }, edgeFee: 1750, setupFees:  0     ,funnel:"Awareness",  },
        ]
      },
      {
        channel: "Summer of Sport copy",
    
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0      ,funnel:"Awareness",  },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "April", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "May", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "June", net: { item1:  22000 , item2: 4700  }, edgeFee: 2670, setupFees:  1600     ,funnel:"Awareness", },
          { month: "July", net: { item1:  20000 , item2: 4700  }, edgeFee: 2470, setupFees:  0     ,funnel:"Awareness",},
          { month: "August", net: { item1:  20000 , item2: 4700  }, edgeFee: 2470, setupFees:  0     ,funnel:"Awareness",  },
          { month: "September",net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",  },
          { month: "October", net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness", },
          { month: "November",net: 0, edgeFee: 0, setupFees: 0     ,funnel:"Awareness",},
          { month: "December", net: 0, edgeFee: 0, setupFees: 0       ,funnel:"Awareness",},
        ]
      }
    ]
  },
  {
    id: 3,
    campain: "Shark Beauty",
    name: "Orchid",
    channels: [ 
      {
        channel: "Paid Social",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration", },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0 ,funnel:"Consideration", },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration", },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration", },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration", },
          { month: "June", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration",},
          { month: "July", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration",},
          { month: "August", net: 0, edgeFee: 0, setupFees: 0  ,funnel:"Consideration",},
          { month: "September",  net: 0, edgeFee: 0, setupFees: 0   ,funnel:"Consideration",  },
          { month: "October",  net: 0, edgeFee: 0, setupFees: 0   ,funnel:"Consideration", },
          { month: "November", net: { item1:  26000 , item2: 24000  }, edgeFee: 5000, setupFees:  1600  ,funnel:"Consideration",  },
          { month: "December", net: { item1:  20000 , item2: 19455 }, edgeFee: 3945, setupFees:  0  ,funnel:"Consideration",  },
          
    
        ]
      }
    ]
  }
];
const ProductOrchid = [
  {
    id: 3,
    campain: "Shark Beauty",
    name: "Orchid",
    channels: [ 
      {
        channel: "Paid Social",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0  },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0  },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "June", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "September",  net: 0, edgeFee: 0, setupFees: 0    },
          { month: "October",  net: 0, edgeFee: 0, setupFees: 0   },
          { month: "November", net: { item1:  26000 , item2: 24000  }, edgeFee: 5000, setupFees:  1600  },
          { month: "December", net: { item1:  20000 , item2: 19455 }, edgeFee: 3945, setupFees:  0  },
          
    
        ]
      }
    ]
  }
];
/* const ProductCampagne2 = [
  {
    id: 2,
    campain: "Shark Beauty",
    name: "FlexStyle",
    channels: [
      {
        channel: "TV",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0},
          { month: "March", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "May", net:{ item1: 343640 }, edgeFee: 16185, setupFees: 0 },
          { month: "June", net:{ item1: 391101 }, edgeFee: 18421, setupFees: 0 },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "September", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0 },
          { month: "October", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0 },
          { month: "November", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0 },
          { month: "December", net: {item1: 520000 }, edgeFee: 24492  , setupFees:0 }
        ]
      },
      {
        channel: "BVOD",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0   },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "June", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "September", net: { item1:  44000  }, edgeFee: 4400 , setupFees:800  },
          { month: "October",   net: { item1:  45000  }, edgeFee: 4500 , setupFees:800    },
          { month: "November",  net: { item1:  110000  }, edgeFee: 11000, setupFees:  800  },
          { month: "December",  net: { item1:  60000 }, edgeFee: 6000, setupFees:  800 },
        ]
      },
      {
        channel: "OPS",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0   },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0},
          { month: "April", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "June", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "September",net: 0, edgeFee: 0, setupFees: 0  },
          { month: "October", net: 0, edgeFee: 0, setupFees: 0   },
          { month: "November", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "December", net: { item1:  93000  }, edgeFee: 0, setupFees:  0  },
        ]
      },
      {
        channel: "YouTube",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0   },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "May", net: { item1:  31461 , item2: 0 , item3:0 }, edgeFee: 3146 , setupFees:800   },
          { month: "June", net: { item1:  27070 , item2: 0 , item3:0 }, edgeFee: 27070 , setupFees:800  },
          { month: "July", net: { item1:  28333 , item2: 0 , item3:0 }, edgeFee: 2833 , setupFees:800 },
          { month: "August", net: { item1:  28333 , item2: 0 , item3:0 }, edgeFee: 2833 , setupFees:800 },
          { month: "September",net: { item1:  28333 , item2: 0 , item3:0 }, edgeFee: 2833 , setupFees:800   },
          { month: "October", net: { item1:  18350 , item2: 0 , item3:0 }, edgeFee: 1835, setupFees:800   },
          { month: "November", net: { item1:  35000 , item2: 0 , item3:0 }, edgeFee: 3500, setupFees:  0  },
          { month: "December", net: { item1:  25000 , item2: 0 , item3:0 }, edgeFee: 2500, setupFees:  800  },
        ]
      },
      {
        channel: "Paid Social",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0   },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "May", net: { item1:   60886 , item2: 15178 , item3:0 }, edgeFee:  7606 , setupFees:1600   },
          { month: "June", net: { item1:   40505 , item2:  19551 , item3:0 }, edgeFee:  6006 , setupFees:0  },
          { month: "July", net: { item1:   31500 , item2: 23985 , item3:10000 }, edgeFee: 6549 , setupFees:2400 },
          { month: "August", net: { item1:  31500 , item2: 9985 , item3:10000 }, edgeFee: 5149 , setupFees:0 },
          { month: "September", net: { item1:  31500 , item2: 9985 , item3:15000 }, edgeFee: 5649 , setupFees:800   },
          { month: "October", net: { item1:  36000 , item2: 11000 , item3:10000 }, edgeFee: 5700, setupFees:0   },
          { month: "November", net: { item1:  45000 , item2: 20000 , item3:20000 }, edgeFee: 8500, setupFees:  2400  },
          { month: "December", net: { item1:  34500 , item2: 11000 , item3:15000 }, edgeFee: 6050, setupFees:  0  },
       ]
      },
      {
        channel: "Premium NetWork",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0    },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "April", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "June", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "July", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "August", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "September", net: 0, edgeFee: 0, setupFees: 0   },
          { month: "October",net: 0, edgeFee: 0, setupFees: 0  },
          { month: "November", net: { item1:  26500  }, edgeFee: 2650, setupFees:  800  },
          { month: "December", net: { item1:  17500  }, edgeFee: 1750, setupFees:  0  },
        ]
      },
      {
        channel: "Summer of Sport copy",
        months: [
          { month: "January", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "February", net: 0, edgeFee: 0, setupFees: 0    },
          { month: "March", net: 0, edgeFee: 0, setupFees: 0},
          { month: "April", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "May", net: 0, edgeFee: 0, setupFees: 0 },
          { month: "June", net: { item1:  22000 , item2: 4700  }, edgeFee: 2670, setupFees:  1600 },
          { month: "July", net: { item1:  20000 , item2: 4700  }, edgeFee: 2470, setupFees:  0 },
          { month: "August", net: { item1:  20000 , item2: 4700  }, edgeFee: 2470, setupFees:  0  },
          { month: "September",net: 0, edgeFee: 0, setupFees: 0   },
          { month: "October", net: 0, edgeFee: 0, setupFees: 0  },
          { month: "November",net: 0, edgeFee: 0, setupFees: 0 },
          { month: "December", net: 0, edgeFee: 0, setupFees: 0   },
        ]
      }
    ]
  }
]; */
/* const Product123 = [
  {
    id: 1,
    campain: "Shark Beauty",
    name: "SpeedStyle",
    channels: [
      {
        channel: "YouTube",
        months: [
          { month: "January", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "February", net: 12398, icon: "NetIcon", footer: { color: "text-green-500", value: "+5%", label: "compared to last month" } },
          { month: "March", net: 12398, icon: "NetIcon", footer: { color: "text-green-500", value: "+10%", label: "compared to last month" } },
          { month: "April", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "May", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "June", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "July", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "August", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "September", net: 30000, icon: "NetIcon", footer: { color: "text-red-500", value: "-2%", label: "compared to last month" } },
          { month: "October", net: 20000, icon: "NetIcon", footer: { color: "text-red-500", value: "-2%", label: "compared to last month" } },
          { month: "November", net: 30000, icon: "NetIcon", footer: { color: "text-red-500", value: "-2%", label: "compared to last month" } },
          { month: "December", net: 10000, icon: "NetIcon", footer: { color: "text-red-500", value: "-2%", label: "compared to last month" } }
        ]
      },
      {
        channel: "Paid Social",
        months: [
          { month: "January", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "February", net: { item1:  16118 , item2: 19297 , item3:0 }, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "March", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "April", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "May", net: 124, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "June", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "July", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "August", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "September", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "October", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "November", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } },
          { month: "December", net: 0, icon: "NetIcon", footer: { color: "text-gray-500", value: "N/A", label: "no data" } }
        ]
      }
    ]
  }
]; */

export function Home() {

  
  function calculateTotalOrchid() {
    const channel = ProductOrchid[0].channels[0];
  
    let totalNet = 0;
    let totalEdgeFee = 0;
    let totalSetupFees = 0;
  
    channel.months.map(({ net, edgeFee, setupFees }) => {
      if (typeof net === 'object') {
        totalNet += Object.values(net).reduce((sum, value) => sum + value, 0);
      } else {
        totalNet += net;
      }
      totalEdgeFee += edgeFee;
      totalSetupFees += setupFees;
    });
  
    return {
      totalNet,
      totalEdgeFee,
      totalSetupFees,
      grandTotal: totalNet + totalEdgeFee + totalSetupFees,
    };
  }

  const totalOrchid = calculateTotalOrchid();
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);

  function calculateTotalNetByChannel(channelNames) {
    let grandTotal = 0;
    const allTotals = [];
  
    channelNames.forEach(channelName => {
      const channel = Product[0].channels.find(c => c.channel === channelName);
  
      if (channel) {
        const totals = channel.months.map(month => ({
          month: month.month,
          totalNet: typeof month.net === 'object' 
            ? month.net.item1 + month.net.item2 + month.net.item3
            : month.net + month.edgeFee + month.setupFees
        }));
  
      
        const channelSum = totals.reduce((acc, curr) => acc + curr.totalNet, 0);
        grandTotal += channelSum;
  
        allTotals.push({ channelName, totals, channelSum });
      }
    });
  
    return { allTotals, grandTotal };
  }
  const { allTotals, grandTotal } = calculateTotalNetByChannel(["YouTube", "Paid Social"]);
  


  const calculateTotalsProducts = (products) => {
    if (!Array.isArray(products)) {
      console.error("Expected products to be an array, but got:", products);
      return;
    }
  
    products.forEach(product => {
      if (!Array.isArray(product.channels)) {
        console.error("Expected channels to be an array for product:", product);
        return;
      }
  
      product.channels.forEach(channel => {
        if (!Array.isArray(channel.months)) {
          console.error("Expected months to be an array for channel:", channel);
          return;
        }
  
        channel.months.forEach(month => {
          let netTotal = 0;
  
          if (typeof month.net === 'object') {
            netTotal = Object.values(month.net).reduce((sum, value) => sum + value, 0);
          } else {
            netTotal = month.net;
          }
  
          month.total = netTotal + month.edgeFee + month.setupFees;
        });
      });
    });
  };
/*   const calculateTotalsProducts = (products) => {
    products.forEach(product => {
      product.channels.map(channel => {
        channel.months.map(month => {
          // Calculer le net total
          let netTotal = 0;
  
          if (typeof month.net === 'object') {
            // Si net est un objet, additionner les valeurs
            netTotal = Object.values(month.net).reduce((sum, value) => sum + value, 0);
          } else {
            netTotal = month.net;
          }
  
          // Calculer le total
          month.total = netTotal + month.edgeFee + month.setupFees;
        });
      });
    });
  }; */
  

const ChannelTotals = ({ channelName }) => {
  const { totals, sum } = calculateTotalNetByChannel(channelName);

  return (
    <div>
      <h2>{channelName} Totals</h2>
    
      <h3>Total Sum: {sum}</h3>
    </div>
  );
};
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();


const calculateNetData = (channel) =>
  channel.months.map(
    ({ net, edgeFee = 0, setupFees = 0 }) => {
      if (typeof net === 'object') {
        return Object.values(net).reduce((acc, val) => acc + val, 0) + edgeFee + setupFees;
      }
      return net + edgeFee + setupFees;
    }
  );

 
const youtubeNetData = calculateNetData(Product[0].channels[0]);
const paidSocialNetData = calculateNetData(Product[0].channels[1]);

const [hoveredIndex, setHoveredIndex] = useState(null);
const [totals, setTotals] = useState({
  totalNet: 0,
  totalEdgeFee: 0,
  totalSetupFees: 0,
  grandTotal: 0,
});

useEffect(() => {
  const result = calculateTotalOrchid();
  setTotals(result);
}, []);
const mobileOS = [
  {
    label: 'SpeedStyle',
    value: 521270,
  },
  {
    label: 'FlexStyle',
    value:4280676,
  },
  {
    label: 'Orchid',
    value: 100000 ,
  },
];



const normalize = (v) => Number.parseInt(v );

 const mobileAndDesktopOS = [
  ...mobileOS.map((v) => ({
    ...v,
    label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
    value: v.value,
  })),
  
];
const valueFormatter = (item) => {
  return `${item.value}%`;
};

useEffect(()=>{
setSelectedProduct(1)

},[])

const [selectedProduct, setSelectedProduct] = useState('');

const handleProductChange = (event) => {
  setSelectedProduct(event.target.value);
};
const [age, setAge] = useState("SpeedStyle");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [selectedCampagne, setSelectedCampagne] = useState("Shark Beauty"); // Valeur par défaut

  const handleChangeCampagne = (event) => {
    setSelectedProduct(event.target.value);
  };
  const product = Product.find(p => p.name === age);

  const series = product ? product.channels.map(channel => ({
    name: channel?.channel,
    data: channel?.months.map(month => {
 
      if (typeof month.net === 'object') {
        return Object.values(month.net).reduce((sum, value) => sum + value, 0);
      }
      return month.net;
    })
  })) : [];

  const [activeChannel, setActiveChannel] = useState("");
  const handleChangeChannel = (event) => {
    setActiveChannel(event.target.value);
  };
  useEffect(() => {
    const product = Product?.find(p => p.name === age);
    if (product && product.channels.length > 0) {
      setActiveChannel(product.channels[0].channel); 
    }
  }, [age]);

  const monthsData = Product?.find(p => p.name === age)?.channels
  ?.find(channel => channel.channel === activeChannel)?.months
  ?.filter(month => {
    
    if (typeof month.net === 'object') {
      return Object.values(month.net).some(value => value !== 0);
    }
    return month.net !== 0;
  }) || [];
  return (
    <div >
   <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
      <div className="mr-auto md:mr-4 md:w-56">
          <h3 className=" text-black font-semibold text-3xl">MediaLayDown <div>

    </div>  </h3> 
          </div>
    <div className="mr-auto md:mr-4 md:w-56">
          <h3 className=" text-blue-gray-500">Dernieres modifications  <br/> 1/1/24 a 10:39</h3> 
          </div>

      </div>
    </Navbar>
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}  fullWidth
      blurred={fixedNavbar} >
   
   <Select
          className="border-2 bg-white mt-2 w-full text-black rounded"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedCampagne} // Utiliser l'état pour la valeur
          label="Campagne"
          onChange={handleChangeCampagne}
        >
          <MenuItem value="Shark Beauty"><p>Shark Beauty (Default)</p></MenuItem>
          <MenuItem disabled value="Shark Clean">Shark Clean</MenuItem>
          <MenuItem disabled value="Fans">Fans</MenuItem>
        </Select>

    </Navbar>
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5 "
          : "px-0 py-1"
      }`}  fullWidth
      blurred={fixedNavbar} >

       <div className=" flex mt-2 flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
      <Select className="border-1 bg-white mt-2 w-full text-black rounded-lg"
        value={age}
        onChange={handleChange}
      >
         {Product.map(product => (
        <MenuItem value={product.name}>  {product.name}  </MenuItem>
         ))}
      </Select>
          <Select 
           value={activeChannel}
           onChange={handleChangeChannel}
          className="border-1 bg-white mt-2 w-full text-black rounded-lg">
            {Product.find(p => p.name === age)?.channels?.map(channel => (
                <MenuItem key={channel.channel} value={channel.channel}>
                  {channel.channel}
                </MenuItem>
              ))}
          </Select>
</div>
    </Navbar>
    <div className="mt-5">
    <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
    {monthsData.map(({ month, net, edgeFee, setupFees,funnel }, index) => {
 
  const getNetValue = (net) => {
    if (typeof net === 'object') {
      return Object.values(net).reduce((sum, value) => sum + value, 0);
    }
    return net;
  };

  const netValue = getNetValue(net); 

  return (
    <div
      key={month}
      className="relative cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <StatisticsCard
     
        className="bg-red-100"
        title={month}
        value={`$${netValue + edgeFee + setupFees}`} // Utiliser netValue ici
        icon={<CheckCircleIcon />}
        funnel={funnel}
      />
      {hoveredIndex === index && (
        <div className="absolute px-5 py-5 z-50 left-0 top-full -mt-5 w-50 border rounded-md bg-white shadow-lg transition-opacity duration-300 opacity-100">
          <strong className="text-green-500">Edge Fee: ${edgeFee}</strong><br />
          <strong className="text-red-500">Setup Fees: ${setupFees}</strong><br/>
        </div>
      )}
    </div>
  );
})}
</div>
<div className="mb-4 grid grid-cols-1 gap-3 xl:grid-cols-3">
  <div className="col-span-1 xl:col-span-2">
  <Typography
                  as="span"
                  variant="small"
                  className="text-lg text-left mt=10 font-medium "
                >
               Ensemble des channels pour le produit <b className="text-red-500">{age}</b>
  </Typography>
    <BarChart
      title={ <h2>Ensemble des channels pour le produit <b className="text-red-500">{age}</b></h2>}
      xAxis={[{ scaleType: 'band', data: [
        "January", "February", "March", "April", "May", 
        "June", "July", "August", "September", "October", 
        "November", "December"
      ] }]}
      series={series}
      width={800}
      height={500}
    />
  </div>
  <div className="col-span-1 xl:col-span-1">
    <Box sx={{ width: '100%' }}>
    <Typography
            as="span"
            variant="small"
            className="text-lg text-left mt=10 font-medium "
                >
                Brands totals per products pour la Campagne Shark Beauty
     {/*             <div>
      <h2>Total Net for Channels</h2>
      {allTotals.map(({ channelName, totals, channelSum }) => (
        <div key={channelName}>
          <h3>{channelName}</h3>
         
          <h4>Total for {channelName}: ${channelSum.toFixed(2)}</h4>
        </div>
      ))}

      <h2>Grand Total for Both Channels: ${grandTotal.toFixed(2)}</h2>
    </div> */}
                </Typography>
      <PieChart
    className="mt-10 mr-32 flex flex-between"
        height={400}
        series={[
          {
            data: mobileOS,
            innerRadius: radius,
            arcLabel: (params) => params.label ?? '',
            arcLabelMinAngle: 20,
            
        
          },
        ]}
      />
      
    </Box>
  </div>
</div>
  
    </div>
    </div>
  );
}

export default Home;
