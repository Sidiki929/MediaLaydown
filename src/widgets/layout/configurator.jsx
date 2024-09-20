import React ,{useState} from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
//import { DateRangePicker } from 'rsuite';
import {
  Button,
  IconButton,
  Switch,
  Input,
  Typography,
  Select,MenuItem,Menu,
  MenuList,
  Chip,
} from "@material-tailwind/react";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setSidenavColor,
  setSidenavType,
  setFixedNavbar,
} from "@/context";
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs'
import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
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
function formatNumber(number, decPlaces) {
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number += abbrev[i];

      break;
    }
  }

  return number;
}

export function Configurator() {
  const [selectedProduct, setSelectedProduct] = useState('');

  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, sidenavColor, sidenavType, fixedNavbar } =
    controller;
  const [stars, setStars] = React.useState(0);

  const sidenavColors = {
    white: "from-gray-100 to-gray-100 border-gray-200",
    dark: "from-black to-black border-gray-200",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
  };
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedChannel, setSelectedChannel] = useState("");
  const [selectionRange, setSelectionRange] = useState({
    startDate: null,
    endDate: null,
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };
  // Fonction pour obtenir les mois basés sur le produit et le canal sélectionnés
  const getMonths = () => {
    const selectedProductData = Product.find(p => p.name === selectedProduct);
    const selectedChannelData = selectedProductData?.channels.find(c => c.channel === selectedChannel);
    return selectedChannelData ? selectedChannelData.months : [];
  };
  React.useEffect(() => {
    const stars = fetch(
      "https://api.github.com/repos/creativetimofficial/material-tailwind-dashboard-react"
    )
      .then((response) => response.json())
      .then((data) => setStars(formatNumber(data.stargazers_count, 1)));
  }, []);

  return (
    <aside
    className={`fixed top-0 right-0 z-50 h-screen w-100 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
      openConfigurator ? "translate-x-0" : "translate-x-96"
    }`}
  >
    <div className="flex items-start justify-between px-6 pt-8 pb-6">
      <div>
        <Typography variant="h4" color="blue-gray">
          Ajouter un nouveau
        </Typography>
      </div>
      <IconButton
        variant="text"
        color="blue-gray"
        onClick={() => setOpenConfigurator(dispatch, false)}
      >
        <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
      </IconButton>
    </div>
    <div className="py-4 px-6">
     {/*  <select
        className="mt-2 w-full border border-gray-300 rounded p-2"
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        <option value="">Sélectionner un produit</option>
        {Product.map((product) => (
          <option key={product.id} value={product.name}>
            {product.name}
          </option>
        ))}
      </select> */}
  
     
  <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
  <select
        className="mt-5 w-[60%] border border-gray-300 rounded p-2"
        onChange={(e) => setFunnel(e.target.value)}
      >
        <option value="">Sélectionner un funnel</option>
        <option value="Consideration">Consideration</option>
        <option value="Awareness">Awareness</option>
      </select>
  <input type="number"  placeholder="Exemple 1500..." className=" mt-5 w-[60%] border border-gray-300 rounded p-2 bg-gray-200 w-full text-black"/>
    
     
  
      <div className="mt-10">
        <div className="my-8 flex  gap-4">
          <Button variant="gradient" className="mt-5 w-[60%]" >
          Apply
          </Button>
          
        </div>
      </div>
    </div>
  </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
