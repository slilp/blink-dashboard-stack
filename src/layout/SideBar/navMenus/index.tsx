import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const navMenus = [
  {
    titleSection: "Dashboard",
    mainMenus: [
      {
        title: "Home",
        path: "/",
        icon: <HomeIcon fontSize="small" />,
      },
    ],
  },
  {
    titleSection: "Product",
    mainMenus: [
      {
        title: "Product",
        path: "/product",
        icon: <CategoryIcon fontSize="small" />,
        subMenus: [
          {
            title: "View Products",
            path: "/product/view",
            icon: <InventoryIcon fontSize="small" />,
          },
          {
            title: "Create New Product",
            path: "/product/create",
            icon: <AddCircleIcon fontSize="small" />,
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
