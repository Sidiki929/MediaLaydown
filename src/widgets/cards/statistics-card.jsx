import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chip from '@mui/material/Chip';

export function StatisticsCard({ color, icon, title, value, footer,funnel }) {

 
  return (
    <Card className="border border-blue-gray-100 shadow-md  justify-between ">
     
      <CardHeader
        variant="gradient"
        color={color}
        floated={false}
        shadow={false}
        className="absolute  h-20 w-20 mr-0  place-items-start"
      >
       {icon}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="large" className="font-normal text-blue-gray-600">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray">
          {value} 
        </Typography>
        <Typography variant="h5" color="blue-gray">
        <Chip 
      label={funnel} 
    
      color={ funnel === "Consideration" ? "success" : "error" } 
    />
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
