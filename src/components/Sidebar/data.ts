import users from "../../assets/images/users.png";
import guarantors from "../../assets/images/user-friends.png";
import sack from "../../assets/images/sack.png";
import handshake from "../../assets/images/handshake.png";
import piggyBank from "../../assets/images/piggy-bank.png";
import loans from "../../assets/images/loan.png";
import userCheck from "../../assets/images/user-check.png";
import userTimes from "../../assets/images/user-times.png";
import briefcaseIcon from "../../assets/images/briefcase 1.png";
import bank from "../../assets/images/bank.png";
import fees from "../../assets/images/fees.png";
import transactions from "../../assets/images/transactions.png";
import settings from "../../assets/images/galaxy.png";
import userCog from "../../assets/images/user-cog.png";
import scroll from "../../assets/images/scroll.png";
import chartBar from "../../assets/images/chart-bar.png";
import sliders from "../../assets/images/sliders.png";
import badgePercent from "../../assets/images/badge-percent.png";
import clipboard from "../../assets/images/clipboard-list.png";

export const customerMenuItems = [
  { name: "Users", icon: users },
  { name: "Guarantors", icon: guarantors },
  { name: "Loans", icon: sack },
  { name: "Decision Models", icon: handshake },
  { name: "Savings", icon: piggyBank },
  { name: "Loan Requests", icon: loans },
  { name: "Whitelist", icon: userCheck },
  { name: "Karma", icon: userTimes },
];

export const businessMenuItems = [
  { name: "Organization", icon: briefcaseIcon },
  { name: "Loan Products", icon: loans },
  { name: "Savings Products", icon: bank },
  { name: "Fees and Charges", icon: fees },
  { name: "Transactions", icon: transactions },
  { name: "Services", icon: settings },
  { name: "Service Account", icon: userCog },
  { name: "Settlements", icon: scroll },
  { name: "Reports", icon: chartBar },
];

export const settingsMenuItems = [
  { name: "Preferences", icon: sliders },
  { name: "Fees and Pricing", icon: badgePercent },
  { name: "Audit Logs", icon: clipboard },
];
