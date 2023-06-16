import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddCircleIcon from "@mui/icons-material/AddCircle";

type NavMenuType = {
  titleSection: string;
  roles: string[];
  mainMenus: {
    title: string;
    path: string;
    icon: React.ReactNode;
    roles: string[];
    subMenus?: {
      title: string;
      path: string;
      icon: React.ReactNode;
      roles: string[];
    }[];
  }[];
};

export const navMenus: NavMenuType[] = [
  {
    titleSection: "Dashboard",
    roles: [],
    mainMenus: [
      {
        title: "Home",
        path: "/",
        icon: <HomeIcon fontSize="small" />,
        roles: [],
      },
    ],
  },
  {
    titleSection: "Product",
    roles: [],
    mainMenus: [
      {
        title: "Product",
        path: "/product",
        icon: <CategoryIcon fontSize="small" />,
        roles: [],
        subMenus: [
          {
            title: "View Products",
            path: "/product/view",
            icon: <InventoryIcon fontSize="small" />,
            roles: [],
          },
          {
            title: "Create Product",
            path: "/product/create",
            icon: <AddCircleIcon fontSize="small" />,
            roles: ["admin"],
          },
        ],
      },
    ],
  },
  {
    titleSection: "Admin",
    roles: ["admin"],
    mainMenus: [
      {
        title: "Shop",
        path: "/admin/shop",
        icon: <StorefrontIcon fontSize="small" />,
        roles: ["admin"],
      },
    ],
  },
];
