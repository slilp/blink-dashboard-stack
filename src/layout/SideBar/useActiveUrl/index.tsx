import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useActiveUrl = ({ path }: { path: string }) => {
  const router = useRouter();
  const [isActive, setIsAvtive] = useState(false);
  useEffect(() => {
    if (router.pathname === path) setIsAvtive(true);
  }, [router.pathname]);

  return { isActive };
};

export default useActiveUrl;
