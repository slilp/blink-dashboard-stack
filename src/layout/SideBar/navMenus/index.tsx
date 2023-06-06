import StorefrontIcon from "@mui/icons-material/Storefront";

export default [
  {
    titleSection: "General",
    mainMenus: [
      {
        title: "app",
        path: "/app",
        icon: <StorefrontIcon fontSize="small" />,
      },
      {
        title: "ecommerce",
        path: "/ecommerce",
        icon: <StorefrontIcon fontSize="small" />,
      },
    ],
  },
  {
    titleSection: "Ecommerce",
    mainMenus: [
      {
        title: "app",
        path: "/app",
        icon: <StorefrontIcon fontSize="small" />,
        subMenus: [
          {
            title: "app-1",
            path: "/app",
            icon: <StorefrontIcon fontSize="small" />,
          },
          {
            title: "app-2",
            path: "/app",
            icon: <StorefrontIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "ecommerce",
        path: "/ecommerce",
        icon: <StorefrontIcon fontSize="small" />,
      },
    ],
  },
  {
    titleSection: "Invoice",
    roles: ["admin"],
    mainMenus: [
      {
        title: "app",
        path: "/app",
        icon: <StorefrontIcon fontSize="small" />,
        roles: ["admin"],
        subMenus: [
          {
            title: "app-1",
            path: "/app",
            icon: <StorefrontIcon fontSize="small" />,
          },
          {
            title: "app-2",
            path: "/app",
            icon: <StorefrontIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "ecommerce",
        path: "/ecommerce",
        icon: <StorefrontIcon fontSize="small" />,
        roles: ["admin"],
      },
    ],
  },
];
