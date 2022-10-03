import { Grid } from "@mui/material";
import ActionCard from "components/ActionCard";
import { ActionableInsights } from "ui/illustrations/ActionableInsights";
import { CustomerEngagement } from "ui/illustrations/CustomerEngagement";
import { EmployeesProductivity } from "ui/illustrations/EmployeesProductivity";
import { OperationsExcellence } from "ui/illustrations/OperationsExcellence";
import { useAppState } from "../AppState";

const cardsInfo = [
  {
    price: 100,
    image: <CustomerEngagement />,
    href: "CustomerEngagement",
    title: "Customer Engagement",
    description: "Get your own mobile app for industry specific",
  },
  {
    price: 100,
    image: <ActionableInsights />,
    href: "ActionableInsights",
    title: "Actionable Insights",
    description: "Create Dashboards ",
  },
  {
    price: 50,
    image: <EmployeesProductivity />,
    href: "EmployeesProductivity",
    title: "Employees Productivity",
    description: "KPI Builder , Work Conf,Create Oracle Requests",
  },
  {
    price: 100,
    image: <OperationsExcellence />,
    href: "OperationsExcellence",
    title: "Operations Excellence",
    description: "Tenant/lessee Managment",
  },
];

export const Homepage = () => {
  const [{ cart }, setAppState] = useAppState();

  const handleAddToCart: (arg0: {
    price: number;
    image: JSX.Element;
    href: string;
    title: string;
    description: string;
  }) => void = (card) => {
    const inCart = false;
    if (!inCart)
      setAppState({ cart: [...cart, { product: card.title, quantity: 1 }] });
    // if(inCart) concept
  };

  return (
    <Grid container spacing={1}>
      {cardsInfo.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <ActionCard
            price={card.price}
            image={card.image}
            href={card.href}
            title={card.title}
            description={card.description}
            AddToCart={() => {
              handleAddToCart(card);
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
