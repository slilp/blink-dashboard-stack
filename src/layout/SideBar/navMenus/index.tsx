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

export const navMenus = (t: any): NavMenuType[] => [
  {
    titleSection: t("Dashboard"),
    roles: [],
    mainMenus: [
      {
        title: t("Home"),
        path: "/",
        icon: <HomeIcon fontSize="small" />,
        roles: [],
      },
    ],
  },
  {
    titleSection: t("Product"),
    roles: [],
    mainMenus: [
      {
        title: t("Product"),
        path: "/product",
        icon: <CategoryIcon fontSize="small" />,
        roles: [],
        subMenus: [
          {
            title: t("View Products"),
            path: "/product/view",
            icon: <InventoryIcon fontSize="small" />,
            roles: [],
          },
          {
            title: t("Create Product"),
            path: "/product/create",
            icon: <AddCircleIcon fontSize="small" />,
            roles: ["admin"],
          },
        ],
      },
    ],
  },
  {
    titleSection: t("Admin"),
    roles: ["admin"],
    mainMenus: [
      {
        title: t("Shop"),
        path: "/admin/shop",
        icon: <StorefrontIcon fontSize="small" />,
        roles: ["admin"],
      },
    ],
  },
];
